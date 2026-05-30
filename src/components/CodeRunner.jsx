import { useState } from 'react'
import { runCode } from '../lib/runCode.js'

const MONO = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'

/* One code example. If `runnable`, it's an editable playground with a Run button
   wired to the Piston runner; otherwise it's a read-only formatted snippet. */
export default function CodeExample({ language, caption, source, runnable = false }) {
  if (!runnable) return <ReadOnly language={language} caption={caption} source={source} />
  return <Playground language={language} caption={caption} source={source} />
}

function Frame({ language, caption, children }) {
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: 12, background: 'oklch(0.16 0.02 250)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 12px', background: 'oklch(0.22 0.02 250)' }}>
        <span style={{ fontSize: '0.72rem', color: 'oklch(0.8 0.02 250)' }}>{caption || (language === 'java' ? 'Java' : 'Python')}</span>
        <span style={{ fontSize: '0.62rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'oklch(0.6 0.02 250)' }}>{language}</span>
      </div>
      {children}
    </div>
  )
}

function ReadOnly({ language, caption, source }) {
  return (
    <Frame language={language} caption={caption}>
      <pre style={{ margin: 0, padding: '12px 14px', overflowX: 'auto', fontFamily: MONO, fontSize: '0.82rem', lineHeight: 1.6, color: 'oklch(0.9 0.02 250)' }}>
        <code>{source}</code>
      </pre>
    </Frame>
  )
}

function Playground({ language, caption, source }) {
  const [code, setCode] = useState(source)
  const [running, setRunning] = useState(false)
  const [result, setResult] = useState(null)

  const run = async () => {
    setRunning(true)
    setResult(null)
    const r = await runCode(language, code)
    setResult(r)
    setRunning(false)
  }

  const onKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = e.target
      const s = el.selectionStart
      const next = code.slice(0, s) + '  ' + code.slice(el.selectionEnd)
      setCode(next)
      requestAnimationFrame(() => { el.selectionStart = el.selectionEnd = s + 2 })
    }
  }

  return (
    <Frame language={language} caption={caption}>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={onKeyDown}
        spellCheck={false}
        rows={Math.min(16, Math.max(4, code.split('\n').length))}
        style={{ width: '100%', resize: 'vertical', border: 'none', outline: 'none', display: 'block', padding: '12px 14px', background: 'transparent', color: 'oklch(0.92 0.02 250)', fontFamily: MONO, fontSize: '0.82rem', lineHeight: 1.6 }}
      />
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', borderTop: '1px solid oklch(0.26 0.02 250)' }}>
        <button
          onClick={run}
          disabled={running}
          style={{ background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 600, padding: '7px 16px', borderRadius: 'var(--radius-sm)', cursor: running ? 'wait' : 'pointer' }}
        >
          {running ? 'Running…' : '▶ Run'}
        </button>
        <button
          onClick={() => { setCode(source); setResult(null) }}
          style={{ background: 'none', border: 'none', color: 'oklch(0.6 0.02 250)', fontFamily: 'inherit', fontSize: '0.75rem', cursor: 'pointer' }}
        >
          Reset
        </button>
        <span style={{ fontSize: '0.68rem', color: 'oklch(0.55 0.02 250)' }}>runs on Wandbox</span>
      </div>
      {result && (
        <div style={{ borderTop: '1px solid oklch(0.26 0.02 250)', padding: '10px 14px', fontFamily: MONO, fontSize: '0.8rem', lineHeight: 1.55, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
          {result.stdout && <div style={{ color: 'oklch(0.9 0.02 250)' }}>{result.stdout}</div>}
          {result.stderr && <div style={{ color: 'oklch(0.72 0.16 25)' }}>{result.stderr}</div>}
          {!result.stdout && !result.stderr && <div style={{ color: 'oklch(0.55 0.02 250)' }}>(no output)</div>}
        </div>
      )}
    </Frame>
  )
}
