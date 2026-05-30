// Turns a failed challenge attempt into a friendly, specific hint about what went
// wrong — from the error message if it didn't run, or from comparing output if it did.
const norm = (s) => (s || '').replace(/\r\n/g, '\n').split('\n').map((l) => l.replace(/\s+$/, '')).join('\n').trim()

export function diagnoseAttempt({ ran, stdout, stderr, expected, language }) {
  if (!ran) {
    const e = (stderr || '').toLowerCase()
    if (e.includes('nameerror') || e.includes('cannot find symbol')) return "Python/Java doesn't recognise a name — check the spelling of a variable or function (a small typo is the usual cause)."
    if (e.includes('indentationerror') || e.includes('unexpected indent')) return 'Check your indentation — Python is strict about the spaces at the start of a line.'
    if (e.includes('syntaxerror')) return "There's a syntax slip — check your quotes, colons (:), and parentheses ( )."
    if (e.includes("';' expected") || e.includes('semicolon')) return 'Looks like a missing semicolon ( ; ) at the end of a line.'
    if (e.includes("'}' expected") || e.includes('reached end of file')) return 'Check your curly braces { } — one may be missing or unmatched.'
    return 'Your code stopped with an error — read the red message below; it names the line and the problem.'
  }
  const a = norm(stdout)
  const e = norm(expected)
  if (!a) return language === 'java'
    ? 'Your program ran but printed nothing — did you use System.out.println(...)?'
    : 'Your program ran but printed nothing — did you use print(...)?'
  if (a.toLowerCase() === e.toLowerCase()) return 'So close — the words are right but the capitalisation differs. Match the upper/lowercase letters exactly.'
  if (a.replace(/\s/g, '') === e.replace(/\s/g, '')) return 'Almost — the characters are right but the spacing or line breaks differ. Check spaces and how many lines you print.'
  const al = a.split('\n').length
  const el = e.split('\n').length
  if (al !== el) return `You printed ${al} line${al === 1 ? '' : 's'}, but the goal has ${el}. Check how many times you print (or your loop range).`
  return 'Not quite — compare your output to the goal above, line by line, and look for the first difference.'
}
