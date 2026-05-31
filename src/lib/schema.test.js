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
    const { metaphor: _metaphor, ...noMetaphor } = valid
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

  it('accepts a coding lesson assessed by a challenge instead of a knowledge check', () => {
    const { knowledgeCheck: _kc, ...noKC } = valid
    const coding = { ...noKC, challenge: { language: 'python', prompt: 'Print 5', expectedOutput: '5' } }
    expect(validateLesson(coding)).toEqual([])
  })

  it('flags a lesson with neither knowledge check nor challenge', () => {
    const { knowledgeCheck: _kc, ...noKC } = valid
    expect(validateLesson(noKC)).toContain('missing knowledgeCheck or challenge')
  })

  it('flags a challenge missing its expected output', () => {
    const { knowledgeCheck: _kc, ...noKC } = valid
    expect(validateLesson({ ...noKC, challenge: { language: 'python', prompt: 'x' } })).toContain('challenge missing expectedOutput')
  })

  it('accepts a valid optional diagram', () => {
    const withDiagram = {
      ...valid,
      diagram: {
        title: 'Next-token loop', direction: 'vertical',
        steps: [
          { note: 'Input.', nodes: [{ id: 'p', label: 'Prompt' }] },
          { note: 'Predict.', nodes: [{ id: 'm', label: 'Model', sub: 'plausibility engine' }] },
        ],
      },
    }
    expect(validateLesson(withDiagram)).toEqual([])
  })

  it('flags a diagram with no steps', () => {
    expect(validateLesson({ ...valid, diagram: { title: 'x', steps: [] } })).toContain('diagram has no steps')
  })

  it('flags a diagram step with no nodes', () => {
    const bad = { ...valid, diagram: { steps: [{ note: 'x', nodes: [] }] } }
    expect(validateLesson(bad)).toContain('diagram steps[0] has no nodes')
  })

  it('flags a diagram node missing id or label', () => {
    const bad = { ...valid, diagram: { steps: [{ nodes: [{ id: 'a' }] }] } }
    expect(validateLesson(bad)).toContain('diagram steps[0].nodes[0] missing label')
  })
})
