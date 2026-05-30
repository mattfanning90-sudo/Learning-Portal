// Defines the Python (full) + Java (starter) curriculum outline and writes
// per-module authoring briefs. Each lesson's challenge has a DETERMINISTIC
// expected output (authoritative — re-stamped on assemble) so auto-marking is reliable.
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const outDir = root + 'docs/research/coding-jobs'
mkdirSync(outDir, { recursive: true })

const JFRAME = 'public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}'

// PLAN: modules with their lessons. seedReserved=1 keeps l1 for an existing seed lesson.
const PLAN = [
  { id: 'py-m1', track: 'python', lang: 'python', title: 'Module 1 — Getting Started', goal: 'Write and run your first programs; store and show data.', seedReserved: 1, lessons: [
    { title: 'Variables: Giving Data a Name', concept: 'A variable is a named box that holds a value you can reuse. Assignment with =, naming rules.', challenge: { prompt: 'Create a variable called city holding the text Paris, then print: I love Paris', expectedOutput: 'I love Paris' } },
    { title: 'Numbers and Math', concept: 'Integers and decimals; + - * / and the // and % operators.', challenge: { prompt: 'Print the result of 7 multiplied by 6.', expectedOutput: '42' } },
    { title: 'Strings: Working with Text', concept: 'Joining text, f-strings, and that text lives in quotes.', challenge: { prompt: "Set name = 'Ada', then print: Hello, Ada!", expectedOutput: 'Hello, Ada!' } },
    { title: 'Comments and Fixing Your First Errors', concept: 'Writing comments with #, and reading a Python error to fix a typo.', challenge: { prompt: 'The starter code has a typo. Fix it so the program prints: fixed', starter: 'prnt("fixed")', expectedOutput: 'fixed' } },
  ]},
  { id: 'py-m2', track: 'python', lang: 'python', title: 'Module 2 — Making Decisions', goal: 'Let your program choose what to do.', lessons: [
    { title: 'True, False, and Comparisons', concept: 'Booleans and comparison operators ==, !=, <, >, >=, <=.', challenge: { prompt: 'Print whether 10 is greater than 3 (it should print True or False).', expectedOutput: 'True' } },
    { title: 'if and else', concept: 'Run code only when a condition is true; else for the alternative.', challenge: { prompt: 'Set age = 20. If age is 18 or more print adult, otherwise print minor.', expectedOutput: 'adult' } },
    { title: 'elif: Many Paths', concept: 'Choosing among several options with elif.', challenge: { prompt: 'Set score = 85. Print A if score >= 90, B if score >= 80, otherwise C.', expectedOutput: 'B' } },
    { title: 'Combining Conditions: and, or, not', concept: 'Build bigger conditions with and / or / not.', challenge: { prompt: 'Set temp = 25 and sunny = True. Print beach if temp > 20 and sunny, else print home.', expectedOutput: 'beach' } },
  ]},
  { id: 'py-m3', track: 'python', lang: 'python', title: 'Module 3 — Repeating Things', goal: 'Do something many times with loops.', lessons: [
    { title: 'while Loops', concept: 'Repeat while a condition stays true; the danger of infinite loops.', challenge: { prompt: 'Use a while loop to print the numbers 1, 2, 3 — each on its own line.', expectedOutput: '1\n2\n3' } },
    { title: 'for Loops and range()', concept: 'Loop a fixed number of times with for and range().', challenge: { prompt: 'Use a for loop with range to print 0 1 2 3 4 — each on its own line.', expectedOutput: '0\n1\n2\n3\n4' } },
    { title: 'Adding Things Up in a Loop', concept: 'Use a running total (accumulator) inside a loop.', challenge: { prompt: 'Use a loop to add up the numbers 1 to 5 and print the total.', expectedOutput: '15' } },
    { title: 'break and continue', concept: 'Stop a loop early with break; skip an iteration with continue.', challenge: { prompt: 'Loop over 1 to 10. Stop the loop (break) when you reach 5. Print each number before stopping, one per line.', expectedOutput: '1\n2\n3\n4' } },
  ]},
  { id: 'py-m4', track: 'python', lang: 'python', title: 'Module 4 — Collections of Data', goal: 'Store and work with many values at once.', lessons: [
    { title: 'Lists', concept: 'An ordered collection; indexing, append, len, sorted.', challenge: { prompt: 'Make a list with the numbers 3, 1, 2 and print it sorted from smallest to largest.', expectedOutput: '[1, 2, 3]' } },
    { title: 'Looping Over a List', concept: 'Use for to visit each item in a list.', challenge: { prompt: "Given fruits = ['apple', 'pear'], print each fruit on its own line.", expectedOutput: 'apple\npear' } },
    { title: 'Dictionaries: Labelled Data', concept: 'Key-value pairs; looking up by key.', challenge: { prompt: "Make a dictionary {'cat': 'meow'} and print the value stored under 'cat'.", expectedOutput: 'meow' } },
    { title: 'Putting Collections Together', concept: 'Summing values, choosing the right collection.', challenge: { prompt: "Given prices = {'a': 2, 'b': 3}, print the total of all the values.", expectedOutput: '5' } },
  ]},
  { id: 'py-m5', track: 'python', lang: 'python', title: 'Module 5 — Functions: Reusable Code', goal: 'Package code so you can reuse it.', lessons: [
    { title: 'Defining and Calling a Function', concept: 'def to define, then call by name.', challenge: { prompt: 'Define a function called greet that prints hi, then call it once.', expectedOutput: 'hi' } },
    { title: 'Inputs and Outputs: Arguments and return', concept: 'Pass arguments in; return a value out.', challenge: { prompt: 'Write a function add(a, b) that returns a + b. Print the result of add(2, 3).', expectedOutput: '5' } },
    { title: 'Reuse and Not Repeating Yourself', concept: 'Why functions reduce duplication (DRY).', challenge: { prompt: 'Write a function square(n) that returns n times n. Print square(4).', expectedOutput: '16' } },
    { title: 'Using Libraries: import', concept: 'Bring in extra tools with import.', challenge: { prompt: 'Import the math library and print the whole-number square root of 16.', expectedOutput: '4' } },
  ]},
  { id: 'py-m6', track: 'python', lang: 'python', title: 'Module 6 — Python for Data & AI', goal: 'Use Python the way an AI engineer starts to.', lessons: [
    { title: 'Reading and Writing Files', concept: 'open(), write, read; why programs persist data.', challenge: { prompt: "Write the text saved to a file, then read the file back and print its contents.", expectedOutput: 'saved' } },
    { title: 'The Standard Library', concept: 'Batteries-included modules like datetime.', challenge: { prompt: 'From the datetime library, create the date 1 January 2020 and print its year.', expectedOutput: '2020' } },
    { title: 'A First Taste of an AI Function', concept: 'A model is just a function: input in, prediction out (stand-in, no real API).', challenge: { prompt: 'Write a function predict(text) that returns the text in UPPERCASE (a stand-in for a model). Print predict("ai").', expectedOutput: 'AI' } },
    { title: 'Putting It All Together', concept: 'Combine variables, a list, and a calculation in a mini-program.', challenge: { prompt: 'Given scores = [10, 20, 30], compute and print the average.', expectedOutput: '20.0' } },
  ]},

  { id: 'java-m1', track: 'java', lang: 'java', title: 'Module 1 — Java Basics', goal: 'Write, structure, and run your first Java programs.', seedReserved: 1, lessons: [
    { title: 'Variables and Types', concept: 'Java is typed: int, double, String, boolean. Declaring with a type.', challenge: { prompt: 'Inside main, declare an int called x set to 9, then print x.', starter: JFRAME, expectedOutput: '9' } },
    { title: 'Numbers and Math', concept: 'int vs double, arithmetic, integer division gotcha.', challenge: { prompt: 'Print the result of 8 * 5.', starter: JFRAME, expectedOutput: '40' } },
    { title: 'Strings in Java', concept: 'String type, concatenation with +.', challenge: { prompt: 'Declare a String name set to Sam, then print: Hi, Sam', starter: JFRAME, expectedOutput: 'Hi, Sam' } },
  ]},
  { id: 'java-m2', track: 'java', lang: 'java', title: 'Module 2 — Decisions and Loops', goal: 'Make Java choose and repeat.', lessons: [
    { title: 'if and else', concept: 'Conditionals in Java with braces.', challenge: { prompt: 'Inside main, set int age = 20. Print adult if age >= 18, otherwise print minor.', starter: JFRAME, expectedOutput: 'adult' } },
    { title: 'Comparisons and Booleans', concept: 'Comparison operators and boolean values.', challenge: { prompt: 'Print whether 5 is greater than 2 (it should print true or false).', starter: JFRAME, expectedOutput: 'true' } },
    { title: 'while Loops', concept: 'Repeat while a condition holds.', challenge: { prompt: 'Use a while loop to print 1, 2, 3 — each on its own line.', starter: JFRAME, expectedOutput: '1\n2\n3' } },
    { title: 'for Loops', concept: 'The classic Java for loop.', challenge: { prompt: 'Use a for loop to print 0 1 2 3 4 — each on its own line.', starter: JFRAME, expectedOutput: '0\n1\n2\n3\n4' } },
  ]},
]

const index = []
for (const m of PLAN) {
  const lessons = m.lessons.map((L, i) => ({
    id: `${m.id}-l${(m.seedReserved || 0) + 1 + i}`,
    order: (m.seedReserved || 0) + 1 + i,
    moduleId: m.id, trackId: m.track, language: m.lang,
    title: L.title, concept: L.concept,
    challenge: { prompt: L.challenge.prompt, expectedOutput: L.challenge.expectedOutput, starter: L.challenge.starter || '' },
  }))
  writeFileSync(`${outDir}/${m.id}.json`, JSON.stringify({ moduleId: m.id, trackId: m.track, language: m.lang, title: m.title, goal: m.goal, lessons }, null, 2))
  index.push({ id: m.id, trackId: m.track, language: m.lang, title: m.title, goal: m.goal, file: `docs/research/coding-jobs/${m.id}.json`, lessonCount: lessons.length })
}
writeFileSync(`${outDir}/_index.json`, JSON.stringify(index, null, 2))
const total = index.reduce((s, m) => s + m.lessonCount, 0)
console.log(`Wrote ${index.length} module briefs, ${total} lessons to author.`)
index.forEach((m) => console.log(`  ${m.id} (${m.language}): ${m.lessonCount}`))
