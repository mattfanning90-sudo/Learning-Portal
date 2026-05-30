import { describe, it, expect } from 'vitest'
import { lessons, tracks, braided, glossary } from './index.js'
import { validateLesson } from '../lib/schema.js'

describe('content registry', () => {
  it('every registered lesson passes the schema', () => {
    const problems = Object.values(lessons).flatMap((l) =>
      validateLesson(l).map((p) => `${l.id}: ${p}`)
    )
    expect(problems).toEqual([])
  })

  it('every module lessonId resolves to a lesson', () => {
    const missing = tracks
      .flatMap((t) => t.modules)
      .flatMap((m) => m.lessonIds)
      .filter((id) => !lessons[id])
    expect(missing).toEqual([])
  })

  it('every braided id resolves to a lesson', () => {
    expect(braided.filter((id) => !lessons[id])).toEqual([])
  })

  it('every AI/Product lesson appears in the braided order exactly once', () => {
    const aiProd = Object.values(lessons)
      .filter((l) => l.trackId === 'engineering' || l.trackId === 'product')
      .map((l) => l.id).sort()
    expect([...braided].sort()).toEqual(aiProd)
    expect(new Set(braided).size).toBe(braided.length) // no duplicates
  })

  it('no unexplained jargon: every referenced glossary term is defined', () => {
    const referenced = new Set(Object.values(lessons).flatMap((l) => l.glossaryTerms || []))
    const undefinedTerms = [...referenced].filter((t) => !glossary[t]).sort()
    expect(undefinedTerms).toEqual([])
  })
})
