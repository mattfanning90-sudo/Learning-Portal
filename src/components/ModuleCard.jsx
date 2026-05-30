import { useState } from 'react'
import { Link } from 'react-router-dom'
import { atlas } from '../lib/atlas.js'
import { useProgress } from '../lib/useProgress.js'
import StatusBadge from './StatusBadge.jsx'
import ModuleQuiz from './ModuleQuiz.jsx'

/* A module on a track page: progress bar + expandable lesson list. */
export default function ModuleCard({ module, index }) {
  const progress = useProgress()
  const completed = progress.getCompleted()
  const pct = atlas.moduleProgress(module.id, completed)
  const status = pct === 100 ? 'completed' : pct > 0 ? 'in-progress' : 'upcoming'
  const [open, setOpen] = useState(status === 'in-progress')
  const [showQuiz, setShowQuiz] = useState(false)
  const active = status === 'in-progress'
  const quizCount = atlas.moduleQuiz(module.id).length

  return (
    <article
      style={{
        background: 'var(--surface)', border: `1.5px solid ${active ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 'var(--radius-lg)', padding: 24,
        boxShadow: active ? '0 0 0 3px var(--accent-light), var(--shadow-sm)' : 'var(--shadow-sm)',
        animation: 'fadeUp 0.5s ease both', animationDelay: `${index * 70}ms`,
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span style={{
              width: 28, height: 28, borderRadius: '50%', background: active ? 'var(--accent)' : 'var(--tag-bg)',
              color: active ? '#fff' : 'var(--text-muted)', display: 'inline-flex', alignItems: 'center',
              justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, flexShrink: 0,
            }}>{index + 1}</span>
            <StatusBadge status={status} />
          </div>
          <h3 className="serif" style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', marginBottom: 6, lineHeight: 1.3 }}>{module.title}</h3>
          {module.goal && <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '60ch' }}>{module.goal}</p>}
        </div>
        <div style={{ textAlign: 'right', flexShrink: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          {module.lessonIds.length} lessons
        </div>
      </div>

      {pct > 0 && (
        <div style={{ marginTop: 16 }}>
          <div style={{ height: 4, background: 'var(--border)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${pct}%`, background: status === 'completed' ? 'oklch(0.55 0.14 155)' : 'var(--accent)', borderRadius: 99, transition: 'width 0.8s ease' }} />
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 5 }}>{pct}% complete</div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        style={{ marginTop: 12, marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.78rem', color: 'var(--text-muted)' }}
      >
        {open ? 'Hide lessons' : 'View lessons'}
        <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>⌄</span>
      </button>

      {open && (
        <div style={{ marginTop: 12, borderTop: '1px solid var(--border)', paddingTop: 12, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {module.lessonIds.map((id) => {
            const l = atlas.getLesson(id)
            const ldone = completed[id]
            return (
              <Link key={id} to={`/lesson/${id}`} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 10px', borderRadius: 'var(--radius-sm)', textDecoration: 'none', background: ldone ? 'oklch(0.97 0.015 155)' : 'transparent' }}>
                <span style={{ flexShrink: 0, width: 16, height: 16, borderRadius: '50%', border: ldone ? 'none' : '1.5px solid var(--border)', background: ldone ? 'oklch(0.55 0.14 155)' : 'transparent', color: '#fff', fontSize: '0.6rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{ldone ? '✓' : ''}</span>
                <span style={{ flex: 1, fontSize: '0.85rem', color: ldone ? 'oklch(0.38 0.10 155)' : 'var(--text-secondary)' }}>{l?.title || id}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>~{l?.estMinutes || 8}m</span>
              </Link>
            )
          })}
        </div>
      )}

      {quizCount > 0 && (
        <div style={{ marginTop: 12, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
          <button
            onClick={() => setShowQuiz((q) => !q)}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent)' }}
          >
            🎯 {showQuiz ? 'Hide module quiz' : `Take the module quiz (${quizCount} questions)`}
          </button>
          {showQuiz && <ModuleQuiz moduleId={module.id} />}
        </div>
      )}
    </article>
  )
}
