import { useParams, Link } from 'react-router-dom'
import { atlas } from '../lib/atlas.js'
import { useProgress } from '../lib/useProgress.js'
import ProgressRing from './ProgressRing.jsx'
import ModuleCard from './ModuleCard.jsx'

export default function TrackPage() {
  const { trackId } = useParams()
  const progress = useProgress()
  const track = atlas.getTrack(trackId)
  if (!track) return <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: 40 }}>Track not found. <Link to="/">Dashboard</Link></div>

  const pct = atlas.trackProgress(trackId, progress.getCompleted())
  const totalLessons = track.modules.reduce((s, m) => s + m.lessonIds.length, 0)

  return (
    <div>
      <div style={{ background: 'var(--hero-grad)', padding: '44px 0', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px', position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap' }}>
          <div>
            <div className="label" style={{ color: 'oklch(0.7 0.08 30)', marginBottom: 10 }}>{track.id === 'engineering' ? 'Track 01' : 'Track 02'}</div>
            <h1 className="serif" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: '#fff', lineHeight: 1.15, marginBottom: 12 }}>{track.title}</h1>
            <p style={{ fontSize: '1rem', color: 'oklch(0.78 0.015 250)', maxWidth: '52ch', lineHeight: 1.6 }}>{track.tagline}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#fff' }}>
            <ProgressRing pct={pct} size={56} stroke={5} />
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{pct}%</div>
              <div style={{ fontSize: '0.75rem', color: 'oklch(0.7 0.02 250)' }}>{track.modules.length} modules · {totalLessons} lessons</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '32px 32px 80px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {track.modules.length === 0 && <p style={{ color: 'var(--text-muted)' }}>Lessons for this track are being written.</p>}
        {track.modules.map((m, i) => <ModuleCard key={m.id} module={m} index={i} />)}
      </div>
    </div>
  )
}
