import ProgressRing from './ProgressRing.jsx'
import { atlas } from '../lib/atlas.js'
import { useProgress } from '../lib/useProgress.js'

/* Floating sidebar: module progress + an on-this-page section table of contents. */
export default function CourseGuide({ lesson }) {
  const progress = useProgress()
  const mod = atlas.getModule(lesson.moduleId)
  const pct = atlas.moduleProgress(lesson.moduleId, progress.getCompleted())

  const sections = [
    { id: 'plain-english', label: 'In plain English' },
    { id: 'metaphor', label: 'Think of it like…' },
    ...(lesson.deepSections || []).map((s, i) => ({ id: `deep-${i}`, label: s.title })),
    ...(lesson.pmAngle ? [{ id: 'pm-angle', label: 'If you manage the product' }] : []),
    { id: 'case-study', label: 'Case study' },
    { id: 'takeaways', label: 'Key takeaways' },
    { id: 'knowledge-check', label: 'Knowledge check' },
  ]

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <aside
      style={{
        width: 'var(--sidebar-w)', flexShrink: 0, position: 'sticky', top: 80, alignSelf: 'flex-start',
        background: 'var(--surface)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-float)',
        border: '1px solid var(--border)', overflow: 'hidden', animation: 'fadeLeft 0.5s ease both',
      }}
    >
      <div style={{ padding: '18px 20px 16px', borderBottom: '1px solid var(--border)', background: 'linear-gradient(135deg, var(--surface-raised), var(--surface))' }}>
        <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 10 }}>{mod?.title?.split('—')[0] || 'Module'}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <ProgressRing pct={pct} size={44} stroke={4} />
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 600 }}>{pct}% of module</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{mod?.lessonIds.length || 0} lessons</div>
          </div>
        </div>
      </div>
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
