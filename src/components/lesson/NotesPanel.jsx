import { useRef, useState } from 'react'
import { store } from '../../lib/useProgress.js'

/* A personal note per lesson, saved to localStorage (debounced).
   LessonPage remounts this per lesson (keyed on lesson.id), so the initial
   useState already loads the right note — no reset effect needed. */
export default function NotesPanel({ lessonId }) {
  const [text, setText] = useState(() => store.getNote(lessonId))
  const [saved, setSaved] = useState(false)
  const timer = useRef(null)

  const onChange = (e) => {
    const v = e.target.value
    setText(v)
    setSaved(false)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => {
      store.saveNote(lessonId, v)
      setSaved(true)
    }, 500)
  }

  return (
    <div
      style={{
        background: 'oklch(0.995 0.01 90)', border: '1px dashed oklch(0.84 0.06 80)',
        borderRadius: 'var(--radius-md)', padding: '12px 14px',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'oklch(0.55 0.09 70)' }}>
          ✎ Your notes
        </span>
        <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
          {saved ? 'saved ✓' : text ? 'saving…' : 'saved in your browser'}
        </span>
      </div>
      <textarea
        value={text}
        onChange={onChange}
        placeholder="Jot a thought, a question, a connection…"
        rows={3}
        style={{
          width: '100%', resize: 'vertical', border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'inherit', fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: 1.6,
        }}
      />
    </div>
  )
}
