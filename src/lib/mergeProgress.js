// Merge two progress blobs, favouring "more progress". Both shapes:
// { completed:{id:ts}, notes:{id:text}, quiz:{id:obj}, challenge:{id:obj}, settings:{...} }
export function mergeProgress(local = {}, server = {}) {
  const minTs = (a, b) => (a == null ? b : b == null ? a : Math.min(a, b))

  // completed: union of ids, keeping the earliest timestamp on conflict.
  const completed = { ...server.completed }
  for (const [k, v] of Object.entries(local.completed || {})) completed[k] = minTs(completed[k], v)

  // notes: per lesson, keep the longer text (proxy for "more work"); ties → server.
  const notes = { ...server.notes }
  for (const [k, v] of Object.entries(local.notes || {})) {
    if (!notes[k] || (v || '').length > (notes[k] || '').length) notes[k] = v
  }

  // quiz/challenge: union; server wins on conflict, presence wins over absence.
  const union = (a = {}, b = {}) => ({ ...a, ...b })

  return {
    completed,
    notes,
    quiz: union(local.quiz, server.quiz),
    challenge: union(local.challenge, server.challenge),
    settings: { ...(local.settings || {}), ...(server.settings || {}) }, // server precedence
  }
}
