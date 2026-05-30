import { describe, it, expect } from 'vitest'
import { validateLesson } from './schema.js'

const valid = {
  id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1,
  title: 'The Improv Actor', coreIdea: 'An LLM predicts the next token.',
  plainEnglish: ['It is a plausibility engine, not a truth engine.'],
  metaphor: { title: 'Think of it like…', body: ['A well-read improv actor.'] },
  deepSections: [{ title: 'The math without the math', teaser: 'rolling weighted dice', body: ['...'] }],
  pmAngle: { body: ['Fluent is not verified.'] },
  caseStudy: { title: 'ChatGPT launch', body: ['100M users in two months.'], bridge: 'Sounding right is the only goal.' },
  takeaways: ['Generation is solved; truth is not.'],
  knowledgeCheck: [{ q: 'What is it?', options: [{ text: 'A truth engine', correct: false }, { text: 'A plausibility engine', correct: true }], feedback: 'Plausibility, always.' }],
  glossaryTerms: ['token'], sources: [{ label: 'Karpathy', url: 'https://example.com' }], estMinutes: 8,
}

describe('validateLesson', () => {
  it('returns no problems for a valid lesson', () => {
    expect(validateLesson(valid)).toEqual([])
  })
  it('flags missing core fields', () => {
    const { metaphor, ...noMetaphor } = valid
    expect(validateLesson(noMetaphor)).toContain('missing metaphor')
  })
  it('requires at least one correct knowledge-check option', () => {
    const bad = { ...valid, knowledgeCheck: [{ q: 'x', options: [{ text: 'a', correct: false }], feedback: 'f' }] }
    expect(validateLesson(bad)).toContain('knowledgeCheck[0] has no correct option')
  })

  it('accepts a valid optional codeExamples array', () => {
    const withCode = { ...valid, codeExamples: [{ language: 'python', caption: 'hi', source: 'print(1)', runnable: true }] }
    expect(validateLesson(withCode)).toEqual([])
  })

  it('flags a codeExample missing language or source', () => {
    const bad = { ...valid, codeExamples: [{ caption: 'oops' }] }
    const problems = validateLesson(bad)
    expect(problems).toContain('codeExamples[0] missing language')
    expect(problems).toContain('codeExamples[0] missing source')
  })

  it('accepts valid keyTerms and flags incomplete ones', () => {
    expect(validateLesson({ ...valid, keyTerms: [{ term: 'print', def: 'shows text' }] })).toEqual([])
    expect(validateLesson({ ...valid, keyTerms: [{ term: 'x' }] })).toContain('keyTerms[0] missing def')
  })
})
