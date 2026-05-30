import { Fragment, useEffect, useRef, useState } from 'react'
import { atlas } from '../../lib/atlas.js'

// A diagram is an ordered list of steps; each step is a row of nodes plus the
// sentence that explains it. One step renders static; multiple steps animate as a
// progressive build-up (each step adds to the picture). Pure CSS boxes + chevron
// connectors — no extra dependencies. Respects prefers-reduced-motion.
const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function Diagram({ diagram, trackId }) {
  const steps = diagram?.steps || []
  const accent = atlas.getTrack(trackId)?.accentVar || 'var(--accent)'
  const horizontal = diagram?.direction === 'horizontal'
  const multi = steps.length > 1
  const stepThrough = multi && !prefersReduced // animate only when motion is welcome

  const [idx, setIdx] = useState(stepThrough ? 0 : steps.length - 1)
  const [playing, setPlaying] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (!playing) return undefined
    if (idx >= steps.length - 1) { setPlaying(false); return undefined }
    timer.current = setTimeout(() => setIdx((i) => Math.min(i + 1, steps.length - 1)), 1100)
    return () => clearTimeout(timer.current)
  }, [playing, idx, steps.length])

  if (!steps.length) return null

  const atEnd = idx >= steps.length - 1
  const play = () => { if (atEnd) setIdx(0); setPlaying(true) }
  const pause = () => setPlaying(false)
  const go = (delta) => { pause(); setIdx((i) => Math.min(Math.max(i + delta, 0), steps.length - 1)) }

  return (
    <section id="diagram" style={{ margin: '8px 0 18px' }}>
      <div className="label" style={{ color: accent, margin: '8px 0 10px' }}>📈 {diagram.title || 'Diagram'}</div>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', flexWrap: horizontal ? 'wrap' : 'nowrap', alignItems: 'center', justifyContent: 'center' }}>
          {steps.map((s, si) => {
            const shown = stepThrough ? si <= idx : true
            const isCurrent = stepThrough && si === idx
            return (
              <Fragment key={si}>
                {si > 0 && <Connector horizontal={horizontal} lit={shown} accent={accent} label={s.edgeLabel} />}
                <div
                  style={{
                    display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
                    visibility: shown ? 'visible' : 'hidden',
                    opacity: shown ? 1 : 0,
                    transform: shown ? 'none' : 'translateY(6px)',
                    transition: prefersReduced ? 'none' : 'opacity .35s ease, transform .35s ease',
                  }}
                >
                  {s.nodes.map((n) => <Node key={n.id} node={n} active={isCurrent || n.accent} accent={accent} />)}
                </div>
              </Fragment>
            )
          })}
        </div>

        {/* Step note(s) */}
        {stepThrough && steps[idx]?.note && (
          <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, minHeight: '2.6em' }}>
            <span style={{ color: accent, fontWeight: 700 }}>{idx + 1}.</span> {steps[idx].note}
          </div>
        )}
        {!stepThrough && steps.some((s) => s.note) && (
          <ol style={{ marginTop: 16, paddingTop: 14, paddingLeft: 20, borderTop: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {steps.map((s, i) => s.note && <li key={i}>{s.note}</li>)}
          </ol>
        )}

        {/* Controls */}
        {stepThrough && (
          <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <button onClick={() => go(-1)} disabled={idx === 0} style={btn(idx === 0)}>← Prev</button>
            {playing
              ? <button onClick={pause} style={btn(false, accent)}>❚❚ Pause</button>
              : <button onClick={play} style={btn(false, accent)}>▶ {atEnd ? 'Replay' : 'Play'}</button>}
            <button onClick={() => go(1)} disabled={atEnd} style={btn(atEnd)}>Next →</button>
            <span style={{ marginLeft: 'auto', fontSize: '0.78rem', color: 'var(--text-muted)' }} aria-live="polite">{idx + 1} / {steps.length}</span>
          </div>
        )}
        {diagram.caption && <div style={{ marginTop: 10, fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{diagram.caption}</div>}
      </div>
    </section>
  )
}

function Node({ node, active, accent }) {
  return (
    <div
      style={{
        minWidth: 120, maxWidth: 260, textAlign: 'center', padding: '10px 14px', borderRadius: 'var(--radius-md)',
        border: `2px solid ${active ? accent : 'var(--border)'}`,
        background: 'var(--surface-raised)',
        boxShadow: active ? `0 0 0 3px color-mix(in oklch, ${accent} 18%, transparent)` : 'none',
        transition: 'border-color .25s ease, box-shadow .25s ease',
      }}
    >
      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{node.label}</div>
      {node.sub && <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: 2 }}>{node.sub}</div>}
    </div>
  )
}

function Connector({ horizontal, lit, accent, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: horizontal ? '0 8px' : '6px 0', color: lit ? accent : 'var(--border)', transition: 'color .3s ease', fontSize: '1.05rem', lineHeight: 1 }}>
      <span aria-hidden>{horizontal ? '▶' : '▼'}</span>
      {label && <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: 2 }}>{label}</span>}
    </div>
  )
}

const btn = (disabled, accent) => ({
  fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 600, padding: '7px 14px', borderRadius: 'var(--radius-sm)',
  border: accent ? 'none' : '1px solid var(--border)', cursor: disabled ? 'not-allowed' : 'pointer',
  background: accent || 'var(--surface)', color: accent ? '#fff' : disabled ? 'var(--text-muted)' : 'var(--text-secondary)',
  opacity: disabled ? 0.5 : 1,
})
