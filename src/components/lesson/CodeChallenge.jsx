import { useState } from 'react'
import { runCode } from '../../lib/runCode.js'
import { checkChallenge } from '../../lib/checkChallenge.js'
import { store } from '../../lib/useProgress.js'

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

/* The assessment for coding lessons: a (mostly blank) editor where the learner
   builds the code, runs it, and is marked against the expected output. */
export default function CodeChallenge({ lessonId, challenge }) {
  const { language, prompt, starter = '', expectedOutput, check = 'equals', hint } = challenge
  const [code, setCode] = useState(starter)
  const [running, setRunning] = useState(false)
  const [outcome, setOutcome] = useState(() => (store.getChallenge(lessonId)?.passed ? { ran: true, passed: true, stdout: '', stderr: '' } : null))

  const runAndCheck = async () => {
    setRunning(true)
    setOutcome(null)
    const r = await runCode(language, code)
    const passed = r.ok && checkChallenge(r.stdout, expectedOutput, check)
    setOutcome({ ran: r.ok, passed, stdout: r.stdout, stderr: r.stderr })
    if (passed) store.saveChallenge(lessonId, { passed: true })
    setRunning(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = e.target
      const s = el.selectionStart
      setCode(code.slice(0, s) + '  ' + code.slice(el.selectionEnd))
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = s + 2 })
    }
  }

  return (
    <div id="challenge" style={{ background: 'var(--hero-grad)', borderRadius: 'var(--radius-lg)', padding: '22px 24px', position: 'relative', overflow: 'hidden', marginBottom: 16 }}>
      <div aria-hidden style={{ position: 'absolute', right: -30, top: -30, width: 180, height: 180, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.18 }} />
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'oklch(0.82 0.10 30)' }}>✦ Challenge — build it yourself</div>
        <div style={{ fontSize: '0.97rem', color: '#fff', margin: '8px 0 12px', lineHeight: 1.5 }}>{prompt}</div>

        <div style={{ background: 'oklch(1 0 0 / 0.06)', border: '1px solid oklch(1 0 0 / 0.12)', borderRadius: 'var(--radius-sm)', padding: '8px 12px', marginBottom: 12 }}>
          <div style={{ fontSize: '0.66rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: 'oklch(0.7 0.02 250)', marginBottom: 4 }}>🎯 Make your program print exactly:</div>
          <pre style={{ margin: 0, fontFamily: MONO, fontSize: '0.82rem', color: 'oklch(0.9 0.12 150)', whiteSpace: 'pre-wrap' }}>{expectedOutput}</pre>
        </div>

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          placeholder={`Write your ${language} here…`}
          rows={Math.max(6, code.split('\n').length + 1)}
          style={{ width: '100%', resize: 'vertical', borderRadius: 'var(--radius-sm)', border: '1px solid oklch(1 0 0 / 0.14)', outline: 'none', padding: '12px 14px', background: 'oklch(0.14 0.02 250)', color: 'oklch(0.92 0.02 250)', fontFamily: MONO, fontSize: '0.84rem', lineHeight: 1.6 }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 10 }}>
          <button onClick={runAndCheck} disabled={running} style={{ background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit', fontSize: '0.85rem', fontWeight: 600, padding: '9px 18px', borderRadius: 'var(--radius-sm)', cursor: running ? 'wait' : 'pointer' }}>
            {running ? 'Checking…' : '▶ Run & check'}
          </button>
          {starter && <button onClick={() => { setCode(starter); setOutcome(null) }} style={{ background: 'none', border: 'none', color: 'oklch(0.6 0.02 250)', fontFamily: 'inherit', fontSize: '0.75rem', cursor: 'pointer' }}>Reset</button>}
          {hint && <span style={{ fontSize: '0.72rem', color: 'oklch(0.6 0.02 250)' }} title={hint}>💡 hover for a hint</span>}
        </div>

        {outcome && (
          <div style={{ marginTop: 12, borderTop: '1px solid oklch(1 0 0 / 0.12)', paddingTop: 12 }}>
            {outcome.passed ? (
              <div style={{ fontSize: '0.9rem', color: 'oklch(0.85 0.14 150)', fontWeight: 600 }}>✓ Passed! Your code produced the expected result.</div>
            ) : !outcome.ran ? (
              <>
                <div style={{ fontSize: '0.85rem', color: 'oklch(0.75 0.16 25)', fontWeight: 600, marginBottom: 6 }}>Your code hit an error — fix it and try again:</div>
                <pre style={{ margin: 0, fontFamily: MONO, fontSize: '0.78rem', color: 'oklch(0.78 0.14 25)', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{outcome.stderr || 'No error message.'}</pre>
              </>
            ) : (
              <>
                <div style={{ fontSize: '0.85rem', color: 'oklch(0.82 0.10 60)', fontWeight: 600, marginBottom: 6 }}>Not quite — your output doesn’t match the goal yet. You printed:</div>
                <pre style={{ margin: 0, fontFamily: MONO, fontSize: '0.8rem', color: 'oklch(0.9 0.02 250)', whiteSpace: 'pre-wrap' }}>{outcome.stdout || '(no output)'}</pre>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
