import { describe, it, expect } from 'vitest'
import { buildCurriculum } from './curriculum.js'

const tracks = [{ id: 'engineering', title: 'AI Engineering', modules: [
  { id: 'eng-m1', title: 'M1', lessonIds: ['eng-m1-l1', 'eng-m1-l2'] },
]}]
const lessons = {
  'eng-m1-l1': { id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1, title: 'A' },
  'eng-m1-l2': { id: 'eng-m1-l2', trackId: 'engineering', moduleId: 'eng-m1', order: 2, title: 'B' },
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
    expect(c.trackProgress('engineering', { 'eng-m1-l1': 1, 'eng-m1-l2': 1 })).toBe(100)
  })
})
