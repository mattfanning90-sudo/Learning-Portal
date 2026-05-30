import { describe, it, expect, beforeEach } from 'vitest'
import { store } from './useProgress.js'

beforeEach(() => localStorage.clear())

describe('progress store', () => {
  it('toggles completion and reports it', () => {
    expect(store.isComplete('eng-m1-l1')).toBe(false)
    store.toggleComplete('eng-m1-l1')
    expect(store.isComplete('eng-m1-l1')).toBe(true)
    store.toggleComplete('eng-m1-l1')
    expect(store.isComplete('eng-m1-l1')).toBe(false)
  })
  it('saves and reads notes', () => {
    store.saveNote('eng-m1-l1', 'remember this')
    expect(store.getNote('eng-m1-l1')).toBe('remember this')
  })
  it('clears a note when saved empty', () => {
    store.saveNote('x', 'hi')
    store.saveNote('x', '')
    expect(store.getNote('x')).toBe('')
    expect(store.allNotes()).toEqual({})
  })
  it('records the resume pointer', () => {
    store.setResume('prod-m2-l3')
    expect(store.getResume()).toBe('prod-m2-l3')
  })
  it('persists quiz results', () => {
    store.saveQuiz('eng-m1-l1', { correct: true })
    expect(store.getQuiz('eng-m1-l1')).toEqual({ correct: true })
  })
})
