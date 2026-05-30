import { describe, it, expect } from 'vitest'
import { lessons, tracks, braided } from './index.js'
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
})
