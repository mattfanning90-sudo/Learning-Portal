import CollapsibleSection, { Body } from './CollapsibleSection.jsx'

/* Thin, named wrappers over CollapsibleSection so LessonPage reads declaratively. */

export function PlainEnglish({ paras }) {
  return (
    <CollapsibleSection variant="metaphor" label="In plain English" defaultOpen id="plain-english">
      <Body paras={paras} />
    </CollapsibleSection>
  )
}

export function MetaphorBox({ metaphor }) {
  return (
    <CollapsibleSection variant="metaphor" label={metaphor.title || '🧭 Think of it like…'} defaultOpen id="metaphor">
      <Body paras={metaphor.body} />
    </CollapsibleSection>
  )
}

export function DeepSection({ section, index }) {
  return (
    <CollapsibleSection variant="neutral" title={section.title} teaser={section.teaser} id={`deep-${index}`}>
      <Body paras={section.body} />
    </CollapsibleSection>
  )
}

export function PMBox({ pmAngle, trackId }) {
  const label =
    trackId === 'product'
      ? '👔 The technical-literacy angle'
      : '👔 Why this matters if you manage the product'
  return (
    <CollapsibleSection variant="pm" label={label} teaser="How this shapes a product decision" id="pm-angle">
      <Body paras={pmAngle.body} />
    </CollapsibleSection>
  )
}

export function CaseStudyBox({ caseStudy }) {
  return (
    <CollapsibleSection
      variant="case"
      label="📌 Case study — the idea in the real world"
      teaser={caseStudy.title}
      id="case-study"
    >
      <div className="serif" style={{ fontSize: '1.05rem', color: 'var(--text-primary)', marginBottom: 8 }}>
        {caseStudy.title}
      </div>
      <Body paras={caseStudy.body} />
      {caseStudy.bridge && (
        <blockquote
          style={{
            marginTop: 12, borderLeft: '3px solid var(--green)', background: 'var(--surface)',
            borderRadius: 'var(--radius-sm)', padding: '11px 14px',
          }}
        >
          <div style={{ fontSize: '0.66rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--green)', marginBottom: 4 }}>
            The bridge back to the lesson
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            {caseStudy.bridge}
          </p>
        </blockquote>
      )}
    </CollapsibleSection>
  )
}

export function KeyTerms({ terms }) {
  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '16px 20px', marginBottom: 14, boxShadow: 'var(--shadow-sm)' }}>
      <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 12 }}>🔑 Key terms</div>
      <dl style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 0 }}>
        {terms.map((t, i) => (
          <div key={i} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: 8, lineHeight: 1.5 }}>
            <dt style={{ fontFamily: 'ui-monospace, Menlo, Consolas, monospace', fontSize: '0.85rem', color: 'var(--accent)', background: 'var(--surface-raised)', border: '1px solid var(--border)', padding: '1px 7px', borderRadius: 4, flexShrink: 0 }}>{t.term}</dt>
            <dd style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t.def}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function Takeaways({ items }) {
  return (
    <div
      style={{
        background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)',
        padding: '18px 20px', marginBottom: 14, boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 10 }}>Key takeaways</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((t, i) => (
          <li key={i} style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5, paddingLeft: 22, position: 'relative' }}>
            <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>→</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
