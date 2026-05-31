import { Fragment, useEffect, useRef, useState } from 'react'
import { atlas, accentOf } from '../../lib/atlas.js'

// A diagram is an ordered list of steps; each step is a row of nodes plus the
// sentence that explains it. One step renders static; multiple steps animate as a
// progressive build-up. Pure CSS — no dependencies. Calm, premium motion that
// respects prefers-reduced-motion (renders the full diagram + all notes, no motion).
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'
const prefersReduced =
  typeof window !== 'undefined' && window.matchMedia
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

export default function Diagram({ diagram, trackId }) {
  const steps = diagram?.steps || []
  const accent = accentOf(atlas.getTrack(trackId))
  const horizontal = diagram?.direction === 'horizontal'
  const multi = steps.length > 1
  const stepThrough = multi && !prefersReduced

  const [idx, setIdx] = useState(stepThrough ? 0 : steps.length - 1)
  const [playing, setPlaying] = useState(false)
  const timer = useRef(null)
  const sectionRef = useRef(null)
  const startedRef = useRef(false)

  // Auto-advance while playing.
  useEffect(() => {
    if (!playing) return undefined
    if (idx >= steps.length - 1) { setPlaying(false); return undefined }
    timer.current = setTimeout(() => setIdx((i) => Math.min(i + 1, steps.length - 1)), 1150)
    return () => clearTimeout(timer.current)
  }, [playing, idx, steps.length])

  // Auto-play once, the first time the diagram scrolls into view.
  useEffect(() => {
    if (!stepThrough || startedRef.current) return undefined
    if (typeof IntersectionObserver === 'undefined' || !sectionRef.current) return undefined
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting) && !startedRef.current) {
        startedRef.current = true
        setPlaying(true)
        io.disconnect()
      }
    }, { threshold: 0.4 })
    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [stepThrough])

  if (!steps.length) return null

  const atEnd = idx >= steps.length - 1
  const play = () => { startedRef.current = true; if (atEnd) setIdx(0); setPlaying(true) }
  const pause = () => setPlaying(false)
  const go = (delta) => { pause(); startedRef.current = true; setIdx((i) => Math.min(Math.max(i + delta, 0), steps.length - 1)) }
  const onKey = (e) => {
    if (!stepThrough) return
    if (e.key === 'ArrowRight') { e.preventDefault(); go(1) }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
  }

  return (
    <section
      id="diagram"
      ref={sectionRef}
      tabIndex={stepThrough ? 0 : undefined}
      onKeyDown={onKey}
      aria-label={stepThrough ? `${diagram.title || 'Diagram'} — step-through, use arrow keys` : diagram.title}
      style={{ margin: '8px 0 18px', outline: 'none' }}
    >
      <div className="label" style={{ color: accent, margin: '8px 0 10px' }}>◆ {diagram.title || 'Diagram'}</div>
      <div
        style={{
          background: 'linear-gradient(180deg, var(--surface-raised), var(--surface))',
          border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)',
          padding: '28px 24px 20px', boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={horizontal ? { overflowX: 'auto', textAlign: 'center', paddingBottom: 4 } : undefined}>
        <div style={{ display: horizontal ? 'inline-flex' : 'flex', flexDirection: horizontal ? 'row' : 'column', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center', verticalAlign: 'top' }}>
          {steps.map((s, si) => {
            const shown = stepThrough ? si <= idx : true
            const isCurrent = stepThrough && si === idx
            return (
              <Fragment key={si}>
                {si > 0 && <Connector horizontal={horizontal} lit={shown} accent={accent} label={s.edgeLabel} />}
                <div
                  style={{
                    display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center',
                    opacity: shown ? 1 : 0,
                    transform: shown ? 'none' : `translate${horizontal ? 'X' : 'Y'}(10px)`,
                    transition: prefersReduced ? 'none' : `opacity .5s ${EASE}, transform .5s ${EASE}`,
                    pointerEvents: shown ? 'auto' : 'none',
                  }}
                >
                  {s.nodes.map((n) => <Node key={n.id} node={n} active={isCurrent || n.accent} pulse={isCurrent && !prefersReduced} accent={accent} compact={horizontal} />)}
                </div>
              </Fragment>
            )
          })}
        </div>
        </div>

        {/* Step note */}
        {stepThrough && (
          <div style={{ marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.55, minHeight: '2.7em' }}>
            <span style={{ color: accent, fontWeight: 700, marginRight: 4 }}>{idx + 1}.</span>{steps[idx]?.note}
          </div>
        )}
        {!stepThrough && steps.some((s) => s.note) && (
          <ol style={{ marginTop: 18, paddingTop: 14, paddingLeft: 22, borderTop: '1px solid var(--border)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {steps.map((s, i) => s.note && <li key={i}>{s.note}</li>)}
          </ol>
        )}

        {/* Controls: scrubber + buttons */}
        {stepThrough && (
          <div style={{ marginTop: 16 }}>
            <div role="group" aria-label="Jump to step" style={{ display: 'flex', gap: 5, marginBottom: 12 }}>
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { pause(); startedRef.current = true; setIdx(i) }}
                  aria-label={`Go to step ${i + 1}`}
                  aria-current={i === idx ? 'step' : undefined}
                  style={{
                    flex: 1, height: 5, borderRadius: 99, border: 'none', padding: 0, cursor: 'pointer',
                    background: i <= idx ? accent : 'var(--border)',
                    opacity: i === idx ? 1 : i < idx ? 0.5 : 1,
                    transition: `background .4s ${EASE}, opacity .4s ${EASE}`,
                  }}
                />
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              {playing
                ? <button onClick={pause} style={primaryBtn(accent)} aria-label="Pause">❚❚&nbsp; Pause</button>
                : <button onClick={play} style={primaryBtn(accent)} aria-label={atEnd ? 'Replay' : 'Play'}>▶&nbsp; {atEnd ? 'Replay' : 'Play'}</button>}
              <button onClick={() => go(-1)} disabled={idx === 0} style={ghostBtn(idx === 0)} aria-label="Previous step">←</button>
              <button onClick={() => go(1)} disabled={atEnd} style={ghostBtn(atEnd)} aria-label="Next step">→</button>
              <span style={{ marginLeft: 'auto', fontSize: '0.76rem', color: 'var(--text-muted)', letterSpacing: '0.02em' }} aria-live="polite">Step {Math.min(idx + 1, steps.length)} of {steps.length}</span>
            </div>
          </div>
        )}
        {diagram.caption && <div style={{ marginTop: 14, fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>{diagram.caption}</div>}
      </div>
    </section>
  )
}

function Node({ node, active, pulse, accent, compact }) {
  return (
    <div
      className={pulse ? 'diagram-pulse' : undefined}
      style={{
        '--pulse': accent,
        minWidth: 120, maxWidth: compact ? 190 : 260, textAlign: 'center', padding: '11px 16px', borderRadius: 'var(--radius-md)',
        border: `1px solid ${active ? accent : 'var(--border)'}`,
        background: active
          ? `linear-gradient(180deg, color-mix(in oklch, ${accent} 7%, var(--surface)), var(--surface))`
          : 'linear-gradient(180deg, var(--surface-raised), var(--surface))',
        transform: active ? 'translateY(-2px)' : 'none',
        boxShadow: active ? `0 4px 16px color-mix(in oklch, ${accent} 16%, transparent)` : 'var(--shadow-sm)',
        transition: `transform .35s ${EASE}, border-color .3s ease, box-shadow .35s ease, background .3s ease`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        {node.icon && <span aria-hidden style={{ fontSize: '0.95rem' }}>{node.icon}</span>}
        <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>{node.label}</span>
      </div>
      {node.sub && <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)', marginTop: 3, lineHeight: 1.35 }}>{node.sub}</div>}
    </div>
  )
}

function Connector({ horizontal, lit, accent, label }) {
  const color = lit ? accent : 'var(--border)'
  // Arrowhead: a CSS triangle pointing right (horizontal) or down (vertical).
  const head = horizontal
    ? { borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: `6px solid ${color}` }
    : { borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: `6px solid ${color}` }
  return (
    <div style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', alignItems: 'center', justifyContent: 'center', gap: 4, padding: horizontal ? '0 10px' : '8px 0' }}>
      <div style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column', alignItems: 'center' }}>
        <div
          style={{
            width: horizontal ? 30 : 2, height: horizontal ? 2 : 26, background: color,
            transformOrigin: horizontal ? 'left center' : 'top center',
            transform: lit ? 'scale(1)' : horizontal ? 'scaleX(0)' : 'scaleY(0)',
            transition: `transform .45s ${EASE}, background .3s ease`,
          }}
        />
        <span
          aria-hidden
          style={{
            width: 0, height: 0, ...head,
            marginTop: horizontal ? 0 : -1, marginLeft: horizontal ? -1 : 0,
            opacity: lit ? 1 : 0, transition: `opacity .3s ease ${lit ? '.2s' : '0s'}`,
          }}
        />
      </div>
      {label && <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{label}</span>}
    </div>
  )
}

const baseBtn = { fontFamily: 'inherit', fontWeight: 600, borderRadius: 'var(--radius-sm)' }
const primaryBtn = (accent) => ({
  ...baseBtn, fontSize: '0.8rem', padding: '8px 18px', border: 'none', cursor: 'pointer', background: accent, color: '#fff',
})
const ghostBtn = (disabled) => ({
  ...baseBtn, fontSize: '0.95rem', lineHeight: 1, width: 36, height: 34,
  border: '1px solid var(--border)', cursor: disabled ? 'not-allowed' : 'pointer',
  background: 'var(--surface)', color: disabled ? 'var(--text-muted)' : 'var(--text-secondary)', opacity: disabled ? 0.5 : 1,
})
