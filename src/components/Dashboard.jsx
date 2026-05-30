import { Link } from 'react-router-dom'
import { atlas } from '../lib/atlas.js'
import { useProgress } from '../lib/useProgress.js'
import ProgressRing from './ProgressRing.jsx'

export default function Dashboard() {
  const progress = useProgress()
  const completed = progress.getCompleted()
  const resumeId = progress.getResume()
  const resume = resumeId ? atlas.getLesson(resumeId) : null
  const started = Object.keys(completed).length > 0 || !!resume
  const firstLesson = atlas.firstLesson()
  const noteCount = Object.keys(progress.allNotes()).length
  const gateOn = progress.getSetting('gateComplete', false)
  const trackCount = atlas.tracks.length

  // The lesson to surface: continue the resume lesson, or the first braided lesson.
  const recommend = resume ? (atlas.nextLesson(resume.id) || resume) : firstLesson

  return (
    <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '40px 32px 80px' }}>
      {/* Welcome */}
      <div style={{ marginBottom: 28, animation: 'fadeUp 0.5s ease both' }}>
        <div className="label" style={{ color: 'var(--accent)', marginBottom: 8 }}>Welcome to Atlas</div>
        <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.01em', marginBottom: 10, maxWidth: '24ch' }}>
          From non-technical to genuinely fluent — in AI, product, code, and cloud.
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '64ch', lineHeight: 1.65 }}>
          Atlas takes a curious, non-technical learner to real fluency across the modern software stack — how AI actually works, how great product teams operate, how to read and write code, and how to run and pay for it all in the cloud. Every lesson is plain English, with a metaphor and a real case study, and no jargon left unexplained. {trackCount} self-paced tracks — start anywhere, and pick up where you left off. Fluency now, builder later.
        </p>
      </div>

      {/* Continue / start banner */}
      {recommend && (
        <div style={{ background: 'var(--hero-grad)', borderRadius: 'var(--radius-lg)', padding: '24px 26px', position: 'relative', overflow: 'hidden', marginBottom: 24 }}>
          <div aria-hidden style={{ position: 'absolute', right: -30, top: -30, width: 200, height: 200, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.18 }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <div className="label" style={{ color: 'oklch(0.82 0.10 30)', marginBottom: 6 }}>{started ? 'Continue where you left off' : 'Start here'}</div>
              <div className="serif" style={{ fontSize: '1.3rem', color: '#fff', marginBottom: 4 }}>{recommend.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'oklch(0.72 0.02 250)' }}>{atlas.getTrack(recommend.trackId)?.title} · ~{recommend.estMinutes || 8} min</div>
            </div>
            <Link to={`/lesson/${recommend.id}`} style={{ background: 'var(--accent)', color: '#fff', padding: '13px 26px', borderRadius: 'var(--radius-md)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none', flexShrink: 0 }}>
              {started ? 'Resume →' : 'Begin →'}
            </Link>
          </div>
        </div>
      )}

      {/* Track cards + notes */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
        {atlas.tracks.map((t, i) => {
          const pct = atlas.trackProgress(t.id, completed)
          const total = t.modules.reduce((s, m) => s + m.lessonIds.length, 0)
          const accent = t.accentVar || 'var(--accent)'
          return (
            <Link key={t.id} to={`/track/${t.id}`} style={{ textDecoration: 'none', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: 'var(--shadow-sm)', display: 'flex', gap: 14, alignItems: 'center' }}>
              <ProgressRing pct={pct} size={52} stroke={5} color={accent} />
              <div style={{ minWidth: 0 }}>
                <div className="label" style={{ color: accent, marginBottom: 4 }}>{`Track 0${i + 1}`}</div>
                <div className="serif" style={{ fontSize: '1.1rem', lineHeight: 1.2 }}>{t.title}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>{pct}% · {total} lessons</div>
              </div>
            </Link>
          )
        })}
        <Link to="/glossary" style={{ textDecoration: 'none', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20, boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Your notes</div>
          <div className="serif" style={{ fontSize: '1.6rem' }}>{noteCount}</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>note{noteCount === 1 ? '' : 's'} · open glossary →</div>
        </Link>
      </div>

      {/* Settings + progress reassurance */}
      <div style={{ marginTop: 16, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '18px 20px', boxShadow: 'var(--shadow-sm)' }}>
        <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 12 }}>Settings</div>
        <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, cursor: 'pointer' }}>
          <span>
            <span style={{ fontSize: '0.92rem', fontWeight: 500, color: 'var(--text-primary)' }}>Require quiz answers before completing a lesson</span>
            <span style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 2 }}>When on, you must answer a lesson's knowledge check before you can mark it complete.</span>
          </span>
          <Toggle on={gateOn} onClick={() => progress.setSetting('gateComplete', !gateOn)} />
        </label>
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)', fontSize: '0.82rem', color: 'var(--green)' }}>
          ✓ Your progress is saved automatically on this device.
        </div>
      </div>
    </div>
  )
}

function Toggle({ on, onClick }) {
  return (
    <button
      onClick={onClick}
      role="switch"
      aria-checked={on}
      style={{
        flexShrink: 0, width: 44, height: 26, borderRadius: 99, border: 'none', cursor: 'pointer', padding: 3,
        background: on ? 'var(--accent)' : 'var(--border)', transition: 'background 0.15s',
        display: 'flex', justifyContent: on ? 'flex-end' : 'flex-start',
      }}
    >
      <span style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff', boxShadow: 'var(--shadow-sm)' }} />
    </button>
  )
}
