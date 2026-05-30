import { describe, it, expect } from 'vitest'
import { buildCurriculum } from './curriculum.js'

const tracks = [{ id: 'engineering', title: 'AI Engineering', modules: [
  { id: 'eng-m1', title: 'M1', lessonIds: ['eng-m1-l1', 'eng-m1-l2'] },
  { id: 'eng-m2', title: 'M2', lessonIds: ['eng-m2-l1'] },
]}]
const mkQ = (n) => Array.from({ length: n }, (_, i) => ({ q: `q${i}`, options: [{ text: 'a', correct: true }], feedback: 'f' }))
const lessons = {
  'eng-m1-l1': { id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1, title: 'A', knowledgeCheck: mkQ(3) },
  'eng-m1-l2': { id: 'eng-m1-l2', trackId: 'engineering', moduleId: 'eng-m1', order: 2, title: 'B', knowledgeCheck: mkQ(3) },
  'eng-m2-l1': { id: 'eng-m2-l1', trackId: 'engineering', moduleId: 'eng-m2', order: 1, title: 'C', knowledgeCheck: mkQ(2) },
}
const braided = ['eng-m1-l1', 'eng-m1-l2']

describe('buildCurriculum', () => {
  const c = buildCurriculum({ tracks, lessons, braided })
  it('looks up a lesson by id', () => expect(c.getLesson('eng-m1-l2').title).toBe('B'))
  it('finds the next lesson in braided order', () => expect(c.nextLesson('eng-m1-l1').id).toBe('eng-m1-l2'))
  it('returns null after the last lesson', () => expect(c.nextLesson('eng-m1-l2')).toBe(null))
  it('finds the previous lesson', () => expect(c.prevLesson('eng-m1-l2').id).toBe('eng-m1-l1'))
  it('computes module progress from a completed-set', () => {
    expect(c.moduleProgress('eng-m1', { 'eng-m1-l1': 1 })).toBe(50)
  })
  it('computes track progress', () => {
    expect(c.trackProgress('engineering', { 'eng-m1-l1': 1, 'eng-m1-l2': 1, 'eng-m2-l1': 1 })).toBe(100)
    expect(c.trackProgress('engineering', { 'eng-m1-l1': 1 })).toBe(33)
  })

  it('samples a module quiz of up to 5 questions across the module', () => {
    const quiz = c.moduleQuiz('eng-m1') // module has 6 questions across 2 lessons
    expect(quiz).toHaveLength(5)
    quiz.forEach((q) => expect(q.lessonId).toMatch(/^eng-m1-l/))
  })

  it('returns all questions when a module has fewer than 5', () => {
    expect(c.moduleQuiz('eng-m2')).toHaveLength(2) // module has 2 questions
  })
})
