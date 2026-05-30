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
  // Each lesson is assessed by either a knowledge check (AI tracks) or a
  // coding challenge (Python/Java tracks). At least one is required.
  const hasKC = Array.isArray(L?.knowledgeCheck) && L.knowledgeCheck.length > 0
  const hasChallenge = !!L?.challenge
  if (!hasKC && !hasChallenge) p.push('missing knowledgeCheck or challenge')
  ;(L?.knowledgeCheck || []).forEach((q, i) => {
    if (!q.options?.some((o) => o.correct)) p.push(`knowledgeCheck[${i}] has no correct option`)
  })
  if (hasChallenge) {
    if (!L.challenge.language) p.push('challenge missing language')
    if (!L.challenge.prompt) p.push('challenge missing prompt')
    if (!L.challenge.expectedOutput) p.push('challenge missing expectedOutput')
  }
  // codeExamples is optional; when present each entry needs a language + source.
  if (L?.codeExamples !== undefined) {
    if (!Array.isArray(L.codeExamples)) p.push('codeExamples must be an array')
    else L.codeExamples.forEach((c, i) => {
      if (!c?.language) p.push(`codeExamples[${i}] missing language`)
      if (!c?.source) p.push(`codeExamples[${i}] missing source`)
    })
  }
  // keyTerms is optional; when present each entry needs a term + def.
  if (L?.keyTerms !== undefined) {
    if (!Array.isArray(L.keyTerms)) p.push('keyTerms must be an array')
    else L.keyTerms.forEach((t, i) => {
      if (!t?.term) p.push(`keyTerms[${i}] missing term`)
      if (!t?.def) p.push(`keyTerms[${i}] missing def`)
    })
  }
  // diagram is optional; when present it's an ordered list of steps, each a row of
  // nodes. One step renders static; multiple steps drive the progressive step-through.
  if (L?.diagram !== undefined) {
    const steps = L.diagram?.steps
    if (!Array.isArray(steps) || steps.length === 0) p.push('diagram has no steps')
    else steps.forEach((s, i) => {
      if (!Array.isArray(s?.nodes) || s.nodes.length === 0) p.push(`diagram steps[${i}] has no nodes`)
      else s.nodes.forEach((n, j) => {
        if (!n?.id) p.push(`diagram steps[${i}].nodes[${j}] missing id`)
        if (!n?.label) p.push(`diagram steps[${i}].nodes[${j}] missing label`)
      })
    })
  }
  return p
}
