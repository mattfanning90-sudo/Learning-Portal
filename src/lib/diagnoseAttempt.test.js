import { describe, it, expect } from 'vitest'
import { diagnoseAttempt } from './diagnoseAttempt.js'

describe('diagnoseAttempt', () => {
  it('explains a Python NameError', () => {
    const d = diagnoseAttempt({ ran: false, stderr: 'NameError: name "prnt" is not defined', language: 'python' })
    expect(d.toLowerCase()).toMatch(/name|spell|typo/)
  })
  it('explains a Python IndentationError', () => {
    const d = diagnoseAttempt({ ran: false, stderr: 'IndentationError: expected an indented block', language: 'python' })
    expect(d.toLowerCase()).toContain('indent')
  })
  it('explains a Java missing semicolon', () => {
    const d = diagnoseAttempt({ ran: false, stderr: "error: ';' expected", language: 'java' })
    expect(d.toLowerCase()).toContain('semicolon')
  })
  it('notices empty output', () => {
    const d = diagnoseAttempt({ ran: true, stdout: '', expected: '42', language: 'python' })
    expect(d.toLowerCase()).toMatch(/nothing|print/)
  })
  it('notices a capitalisation-only mismatch', () => {
    const d = diagnoseAttempt({ ran: true, stdout: 'hello', expected: 'Hello', language: 'python' })
    expect(d.toLowerCase()).toContain('capital')
  })
  it('notices the wrong number of lines', () => {
    const d = diagnoseAttempt({ ran: true, stdout: '1\n2', expected: '1\n2\n3', language: 'python' })
    expect(d.toLowerCase()).toContain('line')
  })
  it('falls back to a generic compare message', () => {
    const d = diagnoseAttempt({ ran: true, stdout: 'cat', expected: 'dog', language: 'python' })
    expect(d.toLowerCase()).toMatch(/compare|goal/)
  })
})
