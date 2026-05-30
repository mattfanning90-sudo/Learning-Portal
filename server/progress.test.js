import { describe, it, expect } from 'vitest'
import { getProgress, saveProgress } from './progress.js'

const fakePool = (rows = []) => {
  const calls = []
  return { calls, query: async (text, params) => { calls.push({ text, params }); return { rows } } }
}

describe('progress data access', () => {
  it('returns {} when the user has no row', async () => {
    expect(await getProgress(fakePool([]), 'u1')).toEqual({})
  })
  it('returns the stored data blob', async () => {
    expect(await getProgress(fakePool([{ data: { completed: { a: 1 } } }]), 'u1')).toEqual({ completed: { a: 1 } })
  })
  it('upserts by user_id with serialized data and returns updatedAt', async () => {
    const pool = fakePool([{ updated_at: 't' }])
    const r = await saveProgress(pool, 'u1', { completed: { a: 1 } })
    expect(pool.calls[0].params[0]).toBe('u1')
    expect(JSON.parse(pool.calls[0].params[1])).toEqual({ completed: { a: 1 } })
    expect(pool.calls[0].text).toMatch(/ON CONFLICT \(user_id\) DO UPDATE/)
    expect(r.updatedAt).toBe('t')
  })
})
