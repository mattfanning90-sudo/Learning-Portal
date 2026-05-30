// Runs code via the public Wandbox API (free, sandboxed, no key, CORS-open).
// (We originally targeted Piston, but its public API went whitelist-only in Feb 2026.)
// Swap RUNNER_URL/RUNTIME for a self-hosted runner without touching callers.
const RUNNER_URL = 'https://wandbox.org/api/compile.json'

const RUNTIME = {
  python: { compiler: 'cpython-3.12.7' },
  // Wandbox compiles the main file as prog.java, so a `public class` errors with
  // "should be declared in a file named ...". Drop the public modifier on the
  // class for execution only — the learner's displayed code is untouched.
  java: { compiler: 'openjdk-jdk-21+35', prepare: (s) => s.replace(/\bpublic\s+class\b/, 'class') },
}

export function supportedLanguages() {
  return Object.keys(RUNTIME)
}

// runCode(language, source) -> { ok, stdout, stderr, output }
export async function runCode(language, source, { fetchImpl = fetch, timeoutMs = 20000 } = {}) {
  const rt = RUNTIME[language]
  if (!rt) return { ok: false, stdout: '', stderr: `Unsupported language: ${language}`, output: '' }
  const code = rt.prepare ? rt.prepare(source) : source

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null
  const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null
  try {
    const res = await fetchImpl(RUNNER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ compiler: rt.compiler, code }),
      signal: controller?.signal,
    })
    if (timer) clearTimeout(timer)
    if (!res.ok) return { ok: false, stdout: '', stderr: `Runner error (HTTP ${res.status}).`, output: '' }

    const d = await res.json()
    const stdout = d.program_output || ''
    const stderr = d.compiler_error || d.program_error || ''
    const ok = String(d.status) === '0'
    return { ok, stdout, stderr, output: `${stdout}${stderr}` }
  } catch (e) {
    if (timer) clearTimeout(timer)
    const msg = e?.name === 'AbortError'
      ? 'Timed out — the runner took too long.'
      : "Couldn't reach the code runner. Check your connection and try again."
    return { ok: false, stdout: '', stderr: msg, output: '' }
  }
}
