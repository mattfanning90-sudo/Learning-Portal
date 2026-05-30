/* Status pill (ported from the Lumen scaffold). */
export default function StatusBadge({ status }) {
  const map = {
    completed: { label: 'Completed', color: 'oklch(0.46 0.13 155)', bg: 'oklch(0.94 0.04 155)' },
    'in-progress': { label: 'In Progress', color: 'var(--accent)', bg: 'var(--accent-light)' },
    upcoming: { label: 'Not started', color: 'var(--text-muted)', bg: 'var(--tag-bg)' },
  }
  const s = map[status] || map.upcoming
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: '0.7rem', fontWeight: 600,
      letterSpacing: '0.04em', textTransform: 'uppercase', color: s.color, background: s.bg,
      padding: '3px 9px', borderRadius: '99px',
    }}>
      {status === 'in-progress' && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />}
      {s.label}
    </span>
  )
}
