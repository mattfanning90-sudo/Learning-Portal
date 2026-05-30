import { describe, it, expect } from 'vitest'
import { runCode } from './runCode.js'

// Capture the request body so we can assert the Java transform.
const fakeFetch = (payload, { httpOk = true, status = 200, capture } = {}) => async (_url, opts) => {
  if (capture) capture(JSON.parse(opts.body))
  return { ok: httpOk, status, json: async () => payload }
}

describe('runCode (Wandbox)', () => {
  it('returns stdout on a successful run', async () => {
    const r = await runCode('python', 'print("hi")', { fetchImpl: fakeFetch({ status: '0', program_output: 'hi\n', program_error: '', compiler_error: '' }) })
    expect(r.ok).toBe(true)
    expect(r.stdout).toBe('hi\n')
  })

  it('reports a runtime error as not-ok with stderr', async () => {
    const r = await runCode('python', 'x', { fetchImpl: fakeFetch({ status: '1', program_output: '', program_error: 'NameError: x', compiler_error: '' }) })
    expect(r.ok).toBe(false)
    expect(r.stderr).toContain('NameError')
  })

  it('surfaces a Java compile error', async () => {
    const r = await runCode('java', 'bad', { fetchImpl: fakeFetch({ status: '1', compiler_error: 'error: ; expected', program_output: '', program_error: '' }) })
    expect(r.ok).toBe(false)
    expect(r.stderr).toContain('error:')
  })

  it('strips the public modifier from a Java class before sending', async () => {
    let sent
    await runCode('java', 'public class Main { public static void main(String[] a){} }', { fetchImpl: fakeFetch({ status: '0', program_output: '' }, { capture: (b) => { sent = b } }) })
    expect(sent.code).toContain('class Main')
    expect(sent.code).not.toContain('public class Main')
  })

  it('handles a network failure gracefully', async () => {
    const r = await runCode('python', 'print(1)', { fetchImpl: async () => { throw new Error('offline') } })
    expect(r.ok).toBe(false)
    expect(r.stderr.toLowerCase()).toContain('reach the code runner')
  })

  it('rejects an unsupported language', async () => {
    const r = await runCode('cobol', 'x', { fetchImpl: fakeFetch({}) })
    expect(r.ok).toBe(false)
    expect(r.stderr).toContain('Unsupported')
  })
})
