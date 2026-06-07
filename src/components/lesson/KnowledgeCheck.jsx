import { useState } from 'react'
import { store } from '../../lib/useProgress.js'
import { Inline } from './CollapsibleSection.jsx'

/* Dark editorial card matching the hero. One or more questions; instant feedback. */
export default function KnowledgeCheck({ lessonId, questions }) {
  return (
    <div
      style={{
        background: 'var(--hero-grad)', borderRadius: 'var(--radius-lg)', padding: '22px 24px',
        position: 'relative', overflow: 'hidden', marginBottom: 16,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute', right: -30, top: -30, width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.18, pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'oklch(0.82 0.10 30)' }}>
          ✦ Check your understanding
        </div>
        {questions.map((q, i) => (
          <Question key={i} q={q} lessonId={lessonId} index={i} total={questions.length} />
        ))}
      </div>
    </div>
  )
}

function Question({ q, lessonId, index, total }) {
  const [picked, setPicked] = useState(null)
  const choose = (oi) => {
    if (picked !== null) return
    setPicked(oi)
    const correct = !!q.options[oi].correct
    const prev = store.getQuiz(lessonId) || {}
    store.saveQuiz(lessonId, { ...prev, [index]: correct })
  }
  const answered = picked !== null
  const gotIt = answered && q.options[picked].correct
  return (
    <div style={{ marginTop: index === 0 ? 8 : 18 }}>
      {total > 1 && (
        <div style={{ fontSize: '0.7rem', color: 'oklch(0.65 0.02 250)', marginBottom: 4 }}>
          Question {index + 1} of {total}
        </div>
      )}
      <div className="serif" style={{ fontSize: '1.12rem', color: '#fff', margin: '4px 0 14px', lineHeight: 1.3 }}>
        <Inline text={q.q} />
      </div>
      {q.options.map((o, oi) => {
        const isPicked = picked === oi
        const reveal = answered && o.correct
        const wrongPick = isPicked && !o.correct
        return (
          <button
            key={oi}
            onClick={() => choose(oi)}
            disabled={answered}
            style={{
              display: 'block', width: '100%', textAlign: 'left', cursor: answered ? 'default' : 'pointer',
              fontFamily: 'inherit', fontSize: '0.9rem', marginBottom: 8, padding: '12px 14px',
              borderRadius: 'var(--radius-md)',
              border: `1px solid ${reveal ? 'var(--green)' : wrongPick ? 'oklch(0.55 0.18 25)' : 'oklch(1 0 0 / 0.12)'}`,
              background: reveal
                ? 'oklch(0.46 0.13 155 / 0.25)'
                : wrongPick
                ? 'oklch(0.5 0.15 25 / 0.22)'
                : 'oklch(1 0 0 / 0.06)',
              color: reveal ? '#fff' : 'oklch(0.85 0.015 250)',
            }}
          >
            <Inline text={o.text} />
            {reveal && <span style={{ float: 'right', color: 'oklch(0.78 0.14 155)' }}>✓</span>}
            {wrongPick && <span style={{ float: 'right', color: 'oklch(0.75 0.16 25)' }}>✗</span>}
          </button>
        )
      })}
      {answered && (
        <div
          style={{
            fontSize: '0.85rem', color: 'oklch(0.80 0.02 250)', marginTop: 6,
            borderTop: '1px solid oklch(1 0 0 / 0.12)', paddingTop: 12,
          }}
        >
          {gotIt ? '💡 ' : 'Not quite — '}
          <Inline text={q.feedback} />
        </div>
      )}
    </div>
  )
}
