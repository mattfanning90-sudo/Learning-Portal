// Coding tracks (Python + Java). Self-contained: default-exports { tracks, lessons }
// which index.js merges into the registry. Seeded here; the authoring workflow
// later overwrites this file with the full curriculum.

const lessons = {
  'py-m1-l1': {
    id: 'py-m1-l1', trackId: 'python', moduleId: 'py-m1', order: 1, estMinutes: 8,
    title: 'Your First Program: Making Python Speak',
    coreIdea: 'A program is a list of instructions; print() tells the computer to say something.',
    plainEnglish: [
      "Code is just a set of written instructions you hand to a computer, one line at a time, top to bottom. The computer does exactly what each line says — no more, no less.",
      "The very first instruction everyone learns is print(): it tells Python to display a piece of text. Master this one line and you've run your first real program.",
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        "Writing a recipe for a very literal cook who has no common sense. If you write 'add salt', they add salt. If you forget to say 'turn off the oven', the kitchen burns. The computer is that cook: it follows your written steps exactly, in order.",
        "print() is you telling the cook to call out the name of the dish so everyone in the kitchen hears it.",
      ],
    },
    deepSections: [
      {
        title: 'Why the quotation marks matter',
        teaser: "text goes in quotes; without them Python gets confused",
        body: [
          "The words inside the quotes are called a string — literally a string of characters. The quotes tell Python 'treat this as text to display, not as a command to run'.",
          "Leave the quotes off and Python tries to interpret your words as instructions it doesn't recognise, and stops with an error. Quotes are how you say 'this part is just words'.",
        ],
      },
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
        "Since a 1972 Bell Labs tutorial by Brian Kernighan, the tradition for learning any new language is to make it print the words 'Hello, world!'. It's the smallest possible complete program.",
        "Every engineer at Google, Netflix, or OpenAI started exactly where you just did: getting a machine to say hello.",
      ],
      bridge: "You just did the same first step as every professional developer alive. The rest is building on this one idea — instructions, run in order.",
    },
    takeaways: [
      'A program runs your instructions top to bottom, exactly as written.',
      'print() displays text; the text goes inside quotes.',
      'Forgetting the quotes is the most common first error — and it’s harmless.',
    ],
    knowledgeCheck: [
      {
        q: 'What does print("Hi") do?',
        options: [
          { text: 'Sends the text to a printer', correct: false },
          { text: 'Displays the text Hi on the screen', correct: true },
          { text: 'Saves a file called Hi', correct: false },
        ],
        feedback: 'Right — print() displays text on screen. (The name is a leftover from when output really did go to paper.)',
      },
    ],
    glossaryTerms: ['program', 'print', 'string'],
    sources: [{ label: 'Python docs — print()', url: 'https://docs.python.org/3/library/functions.html#print' }],
  },

  'java-m1-l1': {
    id: 'java-m1-l1', trackId: 'java', moduleId: 'java-m1', order: 1, estMinutes: 10,
    title: 'Your First Program: Hello from Java',
    coreIdea: 'Java says things with System.out.println(), wrapped in a bit of required ceremony.',
    plainEnglish: [
      "Like Python, a Java program is a list of instructions run in order. Java's way of displaying text is System.out.println() — a longer phrase that means 'print this line to the output'.",
      "Java also requires some scaffolding around your instructions: a class and a main method. For now, treat that scaffolding as a frame you write once; your actual instruction lives inside it.",
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        "Java is the formal cousin of Python. Where Python lets you scribble a quick note, Java insists you use official letterhead: a header, your name, an opening — and only then your message.",
        "It feels like extra fuss at first, but that structure is exactly why big companies trust Java for huge, long-lived systems: everything has its place.",
      ],
    },
    deepSections: [
      {
        title: 'What the scaffolding means',
        teaser: "class, main, and the curly braces — decoded",
        body: [
          "'public class Main' names your program. The curly braces { } group everything that belongs together. 'public static void main(String[] args)' is the special starting point Java looks for — when you run the program, Java finds main and begins there.",
          "You don't need to fully understand every word yet. Think of it as the envelope; System.out.println(...) is the letter inside.",
        ],
      },
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
        "Java's 'write once, run anywhere' promise and its strict structure made it the backbone of enterprise software and the original language of Android apps — billions of devices.",
        "That ceremony you just typed is the same ceremony underpinning systems that move money and run phones worldwide.",
      ],
      bridge: "The extra structure isn't busywork — it's the discipline that lets Java scale to enormous systems. You just wrote your first piece of it.",
    },
    takeaways: [
      'Java displays text with System.out.println().',
      'Your instructions live inside a class and a main method — the required frame.',
      'The structure feels heavier than Python, and that’s the point: it scales.',
    ],
    knowledgeCheck: [
      {
        q: 'In Java, where does the program actually start running?',
        options: [
          { text: 'At the first line of the file', correct: false },
          { text: 'Inside the main method', correct: true },
          { text: 'Wherever you put println', correct: false },
        ],
        feedback: 'Correct — Java looks for main and starts there, no matter where it sits in the file.',
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
