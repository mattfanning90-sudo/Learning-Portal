// Returns an array of human-readable problems; an empty array means the lesson is valid.
// This is the safety net for mass content authoring: every lesson must pass before commit.
export function validateLesson(L) {
  const p = []
  const need = ['id', 'trackId', 'moduleId', 'title', 'coreIdea']
  for (const k of need) if (!L?.[k]) p.push(`missing ${k}`)
  if (!Array.isArray(L?.plainEnglish) || L.plainEnglish.length === 0) p.push('missing plainEnglish')
  if (!L?.metaphor?.body?.length) p.push('missing metaphor')
  if (!L?.caseStudy?.body?.length) p.push('missing caseStudy')
  if (!Array.isArray(L?.takeaways) || L.takeaways.length === 0) p.push('missing takeaways')
  if (!Array.isArray(L?.knowledgeCheck) || L.knowledgeCheck.length === 0) p.push('missing knowledgeCheck')
  ;(L?.knowledgeCheck || []).forEach((q, i) => {
    if (!q.options?.some((o) => o.correct)) p.push(`knowledgeCheck[${i}] has no correct option`)
  })
  return p
}
