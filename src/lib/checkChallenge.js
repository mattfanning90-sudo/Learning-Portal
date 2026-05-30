// Marks a coding challenge: does the learner's program output match the target?
// Normalizes line endings and trims trailing whitespace so formatting noise
// doesn't fail a correct answer.
export function checkChallenge(actual, expected, mode = 'equals') {
  const norm = (s) =>
    (s || '')
      .replace(/\r\n/g, '\n')
      .split('\n')
      .map((line) => line.replace(/\s+$/, ''))
      .join('\n')
      .trim()
  const a = norm(actual)
  const e = norm(expected)
  return mode === 'contains' ? a.includes(e) : a === e
}
