// Coding tracks (Python + Java). Self-contained: default-exports { tracks, lessons }
// which index.js merges into the registry. Seeded here; the authoring workflow
// later overwrites this file with the full curriculum.
//
// STYLE (the exemplar the authoring agents copy): short, one-idea sentences.
// Introduce each new term on its own line via `keyTerms`. Use `backticks` for code.

const lessons = {
  'py-m1-l1': {
    id: 'py-m1-l1', trackId: 'python', moduleId: 'py-m1', order: 1, estMinutes: 8,
    title: 'Your First Program: Making Python Speak',
    coreIdea: 'A program is a list of instructions. `print()` makes Python say something.',
    plainEnglish: [
      'Code is a list of instructions for a computer.',
      'It runs them one line at a time, top to bottom.',
      'The first instruction everyone learns is `print()`. It displays a piece of text. Run it, and you have written your first program.',
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        'Picture a very literal cook with no common sense.',
        'You write a recipe. They do exactly what each line says — nothing more.',
        '`print()` is you telling that cook to call out the name of the dish so the kitchen hears it.',
      ],
    },
    deepSections: [
      {
        title: 'Why the quotation marks matter',
        teaser: 'quotes tell Python "this part is just text"',
        body: [
          'The text inside the quotes is called a string.',
          'The quotes tell Python: treat this as text to show, not as a command to run.',
          'Leave the quotes off, and Python tries to run your words as instructions. It does not recognise them, so it stops with an error.',
        ],
      },
    ],
    keyTerms: [
      { term: 'program', def: 'A list of instructions a computer runs in order.' },
      { term: 'print()', def: 'Tells Python to display text on the screen.' },
      { term: 'string', def: 'A piece of text, written inside quotation marks.' },
    ],
    codeExamples: [
      {
        language: 'python', caption: 'Run this — then change the words and run again', runnable: true,
        source: 'print("Hello, world!")\nprint("Python is running right here in your browser.")',
      },
    ],
    caseStudy: {
      title: '"Hello, world!" — the line that starts every programmer',
      body: [
        'In 1972, a Bell Labs tutorial taught a new language by printing the words "Hello, world!".',
        'It stuck. Today it is the traditional first program in almost every language.',
        'Every engineer at Google, Netflix, or OpenAI started exactly where you just did.',
      ],
      bridge: 'You took the same first step as every professional developer alive: an instruction, run in order.',
    },
    takeaways: [
      'A program runs your instructions top to bottom.',
      '`print()` displays text; the text goes in quotes.',
      'Forgetting the quotes is the most common first error — and it is harmless.',
    ],
    knowledgeCheck: [
      {
        q: 'What does print("Hi") do?',
        options: [
          { text: 'Sends the text to a printer', correct: false },
          { text: 'Displays the text Hi on the screen', correct: true },
          { text: 'Saves a file called Hi', correct: false },
        ],
        feedback: 'Right — print() shows text on screen. (The name is a leftover from when output went to paper.)',
      },
    ],
    glossaryTerms: ['program', 'print', 'string'],
    sources: [{ label: 'Python docs — print()', url: 'https://docs.python.org/3/library/functions.html#print' }],
  },

  'java-m1-l1': {
    id: 'java-m1-l1', trackId: 'java', moduleId: 'java-m1', order: 1, estMinutes: 10,
    title: 'Your First Program: Hello from Java',
    coreIdea: 'Java displays text with `System.out.println()`, wrapped in a little required structure.',
    plainEnglish: [
      'Like Python, a Java program runs instructions in order.',
      "Java's way to display text is `System.out.println()`. It means: print this line to the output.",
      'Java also needs some structure around your instruction: a class and a `main` method.',
      'For now, treat that structure as a frame you write once. Your real instruction lives inside it.',
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        'Java is the formal cousin of Python.',
        'Python lets you scribble a quick note. Java insists on official letterhead.',
        'The fuss feels like a lot at first. But that structure is exactly why big companies trust Java for huge systems: everything has its place.',
      ],
    },
    deepSections: [
      {
        title: 'The structure, decoded',
        teaser: 'class, main, and the curly braces — one line each',
        body: [
          'Do not memorise this yet. Just meet the pieces.',
          'Think of it as an envelope. The `System.out.println(...)` line is the letter inside.',
          'Each part has one job — see the key terms below.',
        ],
      },
    ],
    keyTerms: [
      { term: 'public class Main', def: 'Names your program.' },
      { term: '{ }', def: 'Curly braces group the code that belongs together.' },
      { term: 'main', def: 'The line Java runs first when the program starts.' },
      { term: 'System.out.println()', def: 'Displays one line of text on the screen.' },
    ],
    codeExamples: [
      {
        language: 'java', caption: 'Run it, then change the message inside the quotes', runnable: true,
        source: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n        System.out.println("Java is running too.");\n    }\n}',
      },
    ],
    caseStudy: {
      title: 'Why Android and banks run on Java',
      body: [
        'Java promised "write once, run anywhere".',
        'That, plus its strict structure, made it the backbone of enterprise software.',
        'It was also the original language of Android apps — billions of devices.',
      ],
      bridge: 'The extra structure is not busywork. It is the discipline that lets Java scale to enormous systems. You just wrote your first piece of it.',
    },
    takeaways: [
      'Java displays text with `System.out.println()`.',
      'Your instructions live inside a class and a `main` method.',
      'The structure feels heavier than Python — and that is the point: it scales.',
    ],
    knowledgeCheck: [
      {
        q: 'In Java, where does the program actually start running?',
        options: [
          { text: 'At the first line of the file', correct: false },
          { text: 'Inside the main method', correct: true },
          { text: 'Wherever you put println', correct: false },
        ],
        feedback: 'Correct — Java looks for main and starts there, wherever it sits in the file.',
      },
    ],
    glossaryTerms: ['class', 'main-method', 'println'],
    sources: [{ label: 'Oracle — A Closer Look at HelloWorld', url: 'https://docs.oracle.com/javase/tutorial/getStarted/application/index.html' }],
  },
}

const tracks = [
  {
    id: 'python', title: 'Python', accent: 'py', accentVar: 'var(--py)',
    tagline: 'Learn to code from zero in the language of AI — and run it right here in your browser.',
    modules: [{ id: 'py-m1', title: 'Module 1 — Getting Started', goal: 'Write and run your very first programs.', lessonIds: ['py-m1-l1'] }],
  },
  {
    id: 'java', title: 'Java', accent: 'java', accentVar: 'var(--java)',
    tagline: 'The structured, enterprise language behind Android and big systems — taught from scratch.',
    modules: [{ id: 'java-m1', title: 'Module 1 — Java Basics', goal: 'Write, structure, and run your first Java program.', lessonIds: ['java-m1-l1'] }],
  },
]

const codingGlossary = {
  'program': { term: 'Program', plain: 'A list of written instructions a computer follows in order, top to bottom.' },
  'print': { term: 'print()', plain: "Python's instruction to display text on the screen." },
  'string': { term: 'String', plain: 'A piece of text in code, written inside quotation marks.' },
  'class': { term: 'Class', plain: 'A named container that groups code together — the basic building block of a Java program.' },
  'main-method': { term: 'main method', plain: 'The special starting point Java runs first when your program launches.' },
  'println': { term: 'System.out.println()', plain: "Java's instruction to display a line of text on the screen." },
}

export default { tracks, lessons, codingGlossary }
