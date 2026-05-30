import { Link } from 'react-router-dom'
import ProgressRing from './ProgressRing.jsx'
import { atlas, accentOf } from '../lib/atlas.js'
import { useProgress } from '../lib/useProgress.js'

/* Floating sidebar: module progress, a lesson navigation menu for the current module,
   and an on-this-page section table of contents. */
export default function CourseGuide({ lesson }) {
  const progress = useProgress()
  const mod = atlas.getModule(lesson.moduleId)
  const track = atlas.getTrack(lesson.trackId)
  const accent = accentOf(track)
  const completed = progress.getCompleted()
  const pct = atlas.moduleProgress(lesson.moduleId, completed)

  const sections = [
    { id: 'plain-english', label: 'In plain English' },
    { id: 'metaphor', label: 'Think of it like…' },
    ...(lesson.diagram ? [{ id: 'diagram', label: 'Diagram' }] : []),
    ...(lesson.deepSections || []).map((s, i) => ({ id: `deep-${i}`, label: s.title })),
    ...(lesson.pmAngle ? [{ id: 'pm-angle', label: 'If you manage the product' }] : []),
    { id: 'case-study', label: 'Case study' },
    { id: 'takeaways', label: 'Key takeaways' },
    lesson.challenge ? { id: 'challenge', label: 'Challenge' } : { id: 'knowledge-check', label: 'Knowledge check' },
  ]

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      style={{
        width: 'var(--sidebar-w)', flexShrink: 0, position: 'sticky', top: 80, alignSelf: 'flex-start',
        maxHeight: 'calc(100vh - 96px)', overflowX: 'hidden', overflowY: 'auto',
        background: 'var(--surface)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-float)',
        border: '1px solid var(--border)', animation: 'fadeLeft 0.5s ease both',
      }}
    >
      <div style={{ padding: '18px 20px 16px', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, var(--surface-raised), var(--surface))' }}>
        <Link
          to={`/track/${track?.id || ''}`}
          className="label"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', marginBottom: 10, textDecoration: 'none' }}
          title={`Back to ${track?.title || 'track'}`}
        >
          <span aria-hidden style={{ fontSize: '0.9em' }}>←</span>
          {mod?.title?.split('—')[0]?.trim() || 'Module'}
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ProgressRing pct={pct} size={44} stroke={4} color={accent} />
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{pct}% of module</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{mod?.lessonIds.length || 0} lessons</div>
          </div>
        </div>
      </div>

      {/* Lesson navigation menu — jump between lessons in this module */}
      <nav aria-label="Lessons in this module" style={{ padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="label" style={{ color: 'var(--text-muted)', padding: '4px 20px 6px' }}>Lessons in this module</div>
        {(mod?.lessonIds || []).map((lid, i) => {
          const l = atlas.getLesson(lid)
          const isCurrent = lid === lesson.id
          const isDone = !!completed[lid]
          return (
            <Link
              key={lid}
              to={`/lesson/${lid}`}
              aria-current={isCurrent ? 'page' : undefined}
              style={{
                display: 'flex', gap: 9, alignItems: 'baseline', padding: '8px 20px 8px 17px',
                textDecoration: 'none', fontFamily: 'inherit', fontSize: '0.82rem', lineHeight: 1.3,
                borderLeft: `3px solid ${isCurrent ? accent : 'transparent'}`,
                background: isCurrent ? 'var(--surface-raised)' : 'transparent',
                color: isCurrent ? 'var(--text)' : 'var(--text-secondary)',
                fontWeight: isCurrent ? 600 : 400,
              }}
              onMouseEnter={(e) => { if (!isCurrent) e.currentTarget.style.background = 'var(--surface-raised)' }}
              onMouseLeave={(e) => { if (!isCurrent) e.currentTarget.style.background = 'transparent' }}
            >
              <span aria-hidden style={{ flexShrink: 0, width: 15, textAlign: 'center', fontSize: '0.78rem', color: isDone ? 'var(--green)' : 'var(--text-muted)', fontWeight: 700 }}>
                {isDone ? '✓' : i + 1}
              </span>
              <span>{l?.title || lid}</span>
            </Link>
          )
        })}
      </nav>

      <nav aria-label="On this page" style={{ padding: '10px 0' }}>
        <div className="label" style={{ color: 'var(--text-muted)', padding: '4px 20px 6px' }}>On this page</div>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => jump(s.id)}
            style={{
              width: '100%', textAlign: 'left', display: 'block', padding: '7px 20px', border: 'none',
              background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.82rem',
              color: 'var(--text-secondary)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface-raised)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {s.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
