import { useState } from 'react'
import { Link } from 'react-router-dom'
import { glossary } from '../content/index.js'
import { atlas } from '../lib/atlas.js'

export default function Glossary() {
  const [q, setQ] = useState('')
  const entries = Object.entries(glossary)
    .sort((a, b) => a[1].term.localeCompare(b[1].term))
    .filter(([, e]) => (e.term + e.plain).toLowerCase().includes(q.toLowerCase()))

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '40px 32px 80px' }}>
      <div className="label" style={{ color: 'var(--accent)', marginBottom: 8 }}>Glossary</div>
      <h1 className="serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', marginBottom: 16 }}>Every term, in plain English</h1>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search terms…"
        style={{ width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: '0.95rem', marginBottom: 24, background: 'var(--surface)' }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {entries.length === 0 && <p style={{ color: 'var(--text-muted)' }}>No terms match “{q}”.</p>}
        {entries.map(([id, e]) => (
          <div key={id} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '16px 18px', boxShadow: 'var(--shadow-sm)' }}>
            <div className="serif" style={{ fontSize: '1.1rem', marginBottom: 6 }}>{e.term}</div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{e.plain}</p>
            {e.seeAlso?.length > 0 && (
              <div style={{ marginTop: 8, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Taught in:{' '}
                {e.seeAlso.map((lid, i) => {
                  const l = atlas.getLesson(lid)
                  return l ? (
                    <span key={lid}>
                      {i > 0 && ', '}
                      <Link to={`/lesson/${lid}`} style={{ color: 'var(--blue)', textDecoration: 'none' }}>{l.title}</Link>
                    </span>
                  ) : null
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
