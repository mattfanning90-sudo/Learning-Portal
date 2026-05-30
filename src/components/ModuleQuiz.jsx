import { useMemo, useRef, useState, useEffect } from 'react'
import { atlas } from '../lib/atlas.js'
import { store } from '../lib/useProgress.js'

/* A 5-question module quiz as a horizontal carousel: answer a question, see
   brief feedback, and it auto-scrolls to the next. Starts blank (no prefills). */
export default function ModuleQuiz({ moduleId }) {
  const questions = useMemo(() => atlas.moduleQuiz(moduleId), [moduleId])
  const [answers, setAnswers] = useState(() => questions.map(() => null)) // picked option index per question
  const [current, setCurrent] = useState(0)
  const scrollRef = useRef(null)
  const timer = useRef(null)
  useEffect(() => () => clearTimeout(timer.current), [])

  if (!questions.length) return null

  const total = questions.length
  const score = answers.reduce((s, picked, i) => s + (picked != null && questions[i].options[picked]?.correct ? 1 : 0), 0)
  const allAnswered = answers.every((a) => a != null)

  const goTo = (i) => {
    setCurrent(i)
    const el = scrollRef.current
    if (el) el.scrollTo({ left: i * el.clientWidth, behavior: 'smooth' })
  }

  const answer = (qi, oi) => {
    if (answers[qi] != null) return
    const next = answers.slice()
    next[qi] = oi
    setAnswers(next)
    const newScore = next.reduce((s, p, i) => s + (p != null && questions[i].options[p]?.correct ? 1 : 0), 0)
    if (next.every((a) => a != null)) store.saveQuiz(`module:${moduleId}`, { score: newScore, total })
    // Auto-advance to the next question (or the summary slide) after a beat.
    clearTimeout(timer.current)
    timer.current = setTimeout(() => goTo(qi + 1), 850)
  }

  const retake = () => { setAnswers(questions.map(() => null)); goTo(0) }

  return (
    <div style={{ marginTop: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)' }}>🎯 Module quiz</span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{Math.min(current + 1, total)} / {total}</span>
      </div>

      <div
        ref={scrollRef}
        aria-label="Module quiz questions"
        style={{ display: 'flex', overflowX: 'hidden', scrollSnapType: 'x mandatory', borderRadius: 'var(--radius-lg)' }}
      >
        {questions.map((q, qi) => {
          const picked = answers[qi]
          const answered = picked != null
          return (
            <div key={qi} style={{ flex: '0 0 100%', scrollSnapAlign: 'start', minWidth: 0 }}>
              <div style={{ background: 'var(--hero-grad)', padding: '20px 22px', position: 'relative', overflow: 'hidden', minHeight: 220 }}>
                <div aria-hidden style={{ position: 'absolute', right: -30, top: -30, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.18 }} />
                <div style={{ position: 'relative' }}>
                  <div style={{ fontSize: '0.66rem', color: 'oklch(0.7 0.02 250)', marginBottom: 6 }}>From: {q.lessonTitle}</div>
                  <div className="serif" style={{ fontSize: '1.1rem', color: '#fff', margin: '2px 0 14px', lineHeight: 1.3 }}>{q.q}</div>
                  {q.options.map((o, oi) => {
                    const reveal = answered && o.correct
                    const wrongPick = answered && picked === oi && !o.correct
                    return (
                      <button
                        key={oi}
                        onClick={() => answer(qi, oi)}
                        disabled={answered}
                        style={{
                          display: 'block', width: '100%', textAlign: 'left', cursor: answered ? 'default' : 'pointer',
                          fontFamily: 'inherit', fontSize: '0.88rem', marginBottom: 7, padding: '11px 13px', borderRadius: 'var(--radius-md)',
                          border: `1px solid ${reveal ? 'var(--green)' : wrongPick ? 'oklch(0.55 0.18 25)' : 'oklch(1 0 0 / 0.12)'}`,
                          background: reveal ? 'oklch(0.46 0.13 155 / 0.25)' : wrongPick ? 'oklch(0.5 0.15 25 / 0.22)' : 'oklch(1 0 0 / 0.06)',
                          color: reveal ? '#fff' : 'oklch(0.85 0.015 250)',
                        }}
                      >
                        {o.text}
                        {reveal && <span style={{ float: 'right', color: 'oklch(0.78 0.14 155)' }}>✓</span>}
                        {wrongPick && <span style={{ float: 'right', color: 'oklch(0.75 0.16 25)' }}>✗</span>}
                      </button>
                    )
                  })}
                  {answered && <div style={{ fontSize: '0.82rem', color: 'oklch(0.8 0.02 250)', marginTop: 6 }}>{q.options[picked].correct ? '💡 ' : ''}{q.feedback}</div>}
                </div>
              </div>
            </div>
          )
        })}

        {/* Summary slide */}
        <div style={{ flex: '0 0 100%', scrollSnapAlign: 'start', minWidth: 0 }}>
          <div style={{ background: 'var(--hero-grad)', padding: '24px 22px', textAlign: 'center', minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.66rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'oklch(0.82 0.10 30)', fontWeight: 700 }}>Module quiz complete</div>
            <div className="serif" style={{ fontSize: '2rem', color: '#fff', margin: '8px 0' }}>{score} / {total}</div>
            <div style={{ fontSize: '0.85rem', color: 'oklch(0.75 0.02 250)', marginBottom: 16 }}>
              {score === total ? 'Perfect — you’ve got this module.' : allAnswered ? 'Nice work. Revisit any lesson to go deeper.' : 'Answer all questions to see your score.'}
            </div>
            <button onClick={retake} style={{ alignSelf: 'center', background: 'var(--accent)', color: '#fff', border: 'none', fontFamily: 'inherit', fontSize: '0.85rem', fontWeight: 600, padding: '10px 22px', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
              Retake quiz
            </button>
          </div>
        </div>
      </div>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 10 }}>
        {questions.map((_, i) => (
          <span key={i} onClick={() => goTo(i)} style={{ width: 8, height: 8, borderRadius: '50%', cursor: 'pointer', background: answers[i] != null ? 'var(--accent)' : current === i ? 'var(--text-muted)' : 'var(--border)' }} />
        ))}
      </div>
    </div>
  )
}
