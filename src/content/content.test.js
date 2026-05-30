import { describe, it, expect } from 'vitest'
import { lessons, tracks, braided, glossary } from './index.js'
import { diagrams } from './diagrams.js'
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

  it('every lesson — including coding tracks — appears in the braided order exactly once', () => {
    const all = Object.values(lessons).map((l) => l.id).sort()
    expect([...braided].sort()).toEqual(all)
    expect(new Set(braided).size).toBe(braided.length) // no duplicates
  })

  it('coding lessons advance to a next lesson (Mark complete has somewhere to go)', () => {
    // Every coding lesson except the very last in the braided order must have a successor.
    const last = braided[braided.length - 1]
    const codingIds = Object.values(lessons)
      .filter((l) => l.trackId === 'python' || l.trackId === 'java')
      .map((l) => l.id)
    const stranded = codingIds.filter((id) => id !== last && braided.indexOf(id) === braided.length - 1)
    expect(stranded).toEqual([])
    // And no coding lesson is missing from the path entirely.
    expect(codingIds.filter((id) => braided.indexOf(id) === -1)).toEqual([])
  })

  it('every diagram overlay targets a real lesson and is attached', () => {
    const orphans = Object.keys(diagrams).filter((id) => !lessons[id])
    expect(orphans).toEqual([])
    const attached = Object.keys(diagrams).filter((id) => lessons[id]?.diagram)
    expect(attached.length).toBe(Object.keys(diagrams).length)
  })

  it('no unexplained jargon: every referenced glossary term is defined', () => {
    const referenced = new Set(Object.values(lessons).flatMap((l) => l.glossaryTerms || []))
    const undefinedTerms = [...referenced].filter((t) => !glossary[t]).sort()
    expect(undefinedTerms).toEqual([])
  })
})
