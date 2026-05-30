import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { atlas } from '../../lib/atlas.js'
import { useProgress } from '../../lib/useProgress.js'
import CourseGuide from '../CourseGuide.jsx'
import { PlainEnglish, MetaphorBox, DeepSection, PMBox, CaseStudyBox, Takeaways, KeyTerms } from './Boxes.jsx'
import KnowledgeCheck from './KnowledgeCheck.jsx'
import CodeChallenge from './CodeChallenge.jsx'
import NotesPanel from './NotesPanel.jsx'
import CodeExample from '../CodeRunner.jsx'
import { Inline } from './CollapsibleSection.jsx'

export default function LessonPage() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const progress = useProgress()
  const lesson = atlas.getLesson(lessonId)

  useEffect(() => {
    if (lesson) progress.setResume(lesson.id)
    window.scrollTo(0, 0)
  }, [lessonId]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!lesson) {
    return <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: 40 }}>Lesson not found. <Link to="/">Back to dashboard</Link>.</div>
  }

  const track = atlas.getTrack(lesson.trackId)
  const mod = atlas.getModule(lesson.moduleId)
  const next = atlas.nextLesson(lesson.id)
  const prev = atlas.prevLesson(lesson.id)
  const done = progress.isComplete(lesson.id)
  const gate = progress.getSetting('gateComplete', false)
  const answered = lesson.challenge
    ? !!progress.getChallenge(lesson.id)?.passed
    : progress.lessonAnswered(lesson.id, lesson.knowledgeCheck?.length || 0)
  const canComplete = done || !gate || answered

  const complete = () => {
    if (!canComplete) return
    progress.setComplete(lesson.id, true)
    if (next) navigate(`/lesson/${next.id}`)
  }

  return (
    <div>
      {/* Hero */}
      <div style={{ background: 'var(--hero-grad)', padding: '38px 0 42px', position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div aria-hidden style={{ position: 'absolute', right: '8%', top: '50%', transform: 'translateY(-50%)', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)', opacity: 0.14, pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '0 32px', position: 'relative' }}>
          <div style={{ fontSize: '0.78rem', color: 'oklch(0.65 0.02 250)', marginBottom: 16, display: 'flex', gap: 7, alignItems: 'center', flexWrap: 'wrap' }}>
            <Link to={`/track/${track.id}`} style={{ textDecoration: 'none', color: 'oklch(0.72 0.02 250)' }}>{track.title}</Link>
            <span>›</span>
            <span>{mod?.title}</span>
          </div>
          <h1 className="serif" style={{ fontSize: 'clamp(1.6rem, 3.4vw, 2.3rem)', color: '#fff', lineHeight: 1.18, letterSpacing: '-0.01em', maxWidth: '20ch', marginBottom: 14 }}>
            {lesson.title}
          </h1>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', fontSize: '0.82rem', color: 'oklch(0.75 0.015 250)' }}>
            <span>⏱ ~{lesson.estMinutes || 8} min</span>
            <span>📑 {(lesson.deepSections?.length || 0) + 5} sections</span>
            <span>{done ? '✓ Completed' : '◷ In progress'}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: '32px 32px 80px', display: 'flex', gap: 32, alignItems: 'flex-start' }}>
        <CourseGuide lesson={lesson} />

        <main style={{ flex: 1, minWidth: 0, animation: 'fadeUp 0.5s ease both' }}>
          <div style={{ color: 'var(--accent)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>The core idea</div>
          <h2 className="serif" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', lineHeight: 1.22, letterSpacing: '-0.01em', margin: '8px 0 22px' }}>
            <Inline text={lesson.coreIdea} />
          </h2>

          <PlainEnglish paras={lesson.plainEnglish} />
          <MetaphorBox metaphor={lesson.metaphor} />
          {(lesson.deepSections || []).map((s, i) => (
            <DeepSection key={i} section={s} index={i} />
          ))}
          {lesson.keyTerms?.length > 0 && <KeyTerms terms={lesson.keyTerms} />}
          {lesson.codeExamples?.length > 0 && (
            <div style={{ marginBottom: 14 }}>
              <div className="label" style={{ color: 'var(--accent)', margin: '8px 0 10px' }}>🧪 Try it yourself</div>
              {lesson.codeExamples.map((c, i) => <CodeExample key={i} {...c} />)}
            </div>
          )}
          {lesson.pmAngle && <PMBox pmAngle={lesson.pmAngle} trackId={lesson.trackId} />}
          <CaseStudyBox caseStudy={lesson.caseStudy} />
          <Takeaways items={lesson.takeaways} />
          {lesson.knowledgeCheck?.length > 0 && <KnowledgeCheck key={lesson.id} lessonId={lesson.id} questions={lesson.knowledgeCheck} />}
          {lesson.challenge && <CodeChallenge key={`ch-${lesson.id}`} lessonId={lesson.id} challenge={lesson.challenge} />}

          {/* Notes + Go deeper */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 16 }}>
            <div style={{ flex: '1 1 300px' }}><NotesPanel lessonId={lesson.id} /></div>
            {(lesson.sources?.length || lesson.glossaryTerms?.length) ? (
              <div style={{ flex: '1 1 240px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', padding: '12px 14px' }}>
                <div className="label" style={{ color: 'var(--text-muted)', marginBottom: 8 }}>📄 Go deeper</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {(lesson.sources || []).map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: 'var(--blue)', textDecoration: 'none' }}>
                      {s.label} ↗
                    </a>
                  ))}
                  {(lesson.glossaryTerms || []).length > 0 && (
                    <Link to="/glossary" style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', marginTop: 2 }}>
                      Glossary: {lesson.glossaryTerms.join(', ')}
                    </Link>
                  )}
                </div>
              </div>
            ) : null}
          </div>

          {/* Footer nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8, paddingTop: 16, borderTop: '1px solid var(--border)', gap: 12, flexWrap: 'wrap' }}>
            {prev ? (
              <Link to={`/lesson/${prev.id}`} style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none' }}>← {prev.title}</Link>
            ) : <span />}
            <div style={{ textAlign: 'right' }}>
              <button
                onClick={complete}
                disabled={!canComplete}
                title={!canComplete ? 'Answer the questions below to mark this complete' : ''}
                style={{
                  background: done ? 'var(--green)' : canComplete ? 'var(--accent)' : 'var(--border)',
                  color: canComplete ? '#fff' : 'var(--text-muted)', border: 'none',
                  fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 600, padding: '11px 24px',
                  borderRadius: 'var(--radius-md)', cursor: canComplete ? 'pointer' : 'not-allowed',
                }}
              >
                {done ? 'Completed ✓' : 'Mark complete'} {next && canComplete ? '→' : ''}
              </button>
              {!canComplete && (
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 6, maxWidth: '28ch' }}>
                  Answer the ✦ knowledge check to mark complete — or turn this off in Dashboard settings.
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
