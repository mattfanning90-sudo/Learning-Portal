import { describe, it, expect } from 'vitest'
import { mergeProgress } from './mergeProgress.js'

describe('mergeProgress', () => {
  it('unions completed, keeping the earliest timestamp', () => {
    const m = mergeProgress({ completed: { a: 5 } }, { completed: { a: 9, b: 2 } })
    expect(m.completed).toEqual({ a: 5, b: 2 })
  })
  it('keeps the longer note on conflict', () => {
    const m = mergeProgress({ notes: { l1: 'short' } }, { notes: { l1: 'a much longer note' } })
    expect(m.notes.l1).toBe('a much longer note')
  })
  it('lets a passed challenge/quiz win over absent', () => {
    const m = mergeProgress({ challenge: { l1: { passed: true } } }, {})
    expect(m.challenge.l1).toEqual({ passed: true })
  })
  it('prefers server settings, falling back to local', () => {
    expect(mergeProgress({ settings: { gateComplete: true } }, {}).settings.gateComplete).toBe(true)
    expect(mergeProgress({ settings: { gateComplete: false } }, { settings: { gateComplete: true } }).settings.gateComplete).toBe(true)
  })
  it('handles empty inputs', () => {
    expect(mergeProgress()).toEqual({ completed: {}, notes: {}, quiz: {}, challenge: {}, settings: {} })
  })
})
