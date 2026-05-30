import { describe, it, expect } from 'vitest'
import { checkChallenge } from './checkChallenge.js'

describe('checkChallenge', () => {
  it('passes on an exact match (ignoring trailing whitespace/newlines)', () => {
    expect(checkChallenge('1\n2\n3\n', '1\n2\n3')).toBe(true)
    expect(checkChallenge('  hello  \n', 'hello')).toBe(true)
  })
  it('fails when output differs', () => {
    expect(checkChallenge('1\n2', '1\n2\n3')).toBe(false)
  })
  it('normalizes Windows line endings', () => {
    expect(checkChallenge('a\r\nb\r\n', 'a\nb')).toBe(true)
  })
  it('supports contains mode', () => {
    expect(checkChallenge('the answer is 42!', '42', 'contains')).toBe(true)
    expect(checkChallenge('nope', '42', 'contains')).toBe(false)
  })
})
