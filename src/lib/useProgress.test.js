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

  it('reads and writes settings with a default', () => {
    expect(store.getSetting('gateComplete', false)).toBe(false)
    store.setSetting('gateComplete', true)
    expect(store.getSetting('gateComplete', false)).toBe(true)
  })

  it('reports whether every question in a lesson is answered', () => {
    expect(store.lessonAnswered('eng-m1-l1', 2)).toBe(false)
    store.saveQuiz('eng-m1-l1', { 0: true })
    expect(store.lessonAnswered('eng-m1-l1', 2)).toBe(false)
    store.saveQuiz('eng-m1-l1', { 0: true, 1: false })
    expect(store.lessonAnswered('eng-m1-l1', 2)).toBe(true)
  })

  it('treats a zero-question lesson as answered', () => {
    expect(store.lessonAnswered('eng-m1-l9', 0)).toBe(true)
  })
})
