// Coding tracks (Python + Java). Auto-assembled by scripts/assemble-coding.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = {
  "py-m1-l1": {
    "id": "py-m1-l1",
    "trackId": "python",
    "moduleId": "py-m1",
    "order": 1,
    "estMinutes": 10,
    "title": "Your First Program: Making Python Speak",
    "coreIdea": "A program is a list of instructions. `print()` makes Python say something.",
    "plainEnglish": [
      "Code is a list of instructions for a computer.",
      "It runs them one line at a time, top to bottom.",
      "The first instruction everyone learns is `print()`. It displays a piece of text. Run it, and you have written your first program.",
      "Behind the scenes, a program called the Python interpreter reads your file one line at a time.",
      "It translates each line into steps the machine can do, then carries them out immediately.",
      "Nothing is hidden or magic — the computer only ever does exactly what your lines say, in the exact order you wrote them."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a very literal cook with no common sense.",
        "You write a recipe. They do exactly what each line says — nothing more.",
        "`print()` is you telling that cook to call out the name of the dish so the kitchen hears it."
      ]
    },
    "deepSections": [
      {
        "title": "Why the quotation marks matter",
        "teaser": "quotes tell Python \"this part is just text\"",
        "body": [
          "The text inside the quotes is called a string.",
          "The quotes tell Python: treat this as text to show, not as a command to run.",
          "Leave the quotes off, and Python tries to run your words as instructions. It does not recognise them, so it stops with an error."
        ]
      },
      {
        "title": "What actually happens when you press Run",
        "teaser": "the interpreter reads, translates, then acts — line by line",
        "body": [
          "Your code is just text in a file. The computer cannot act on text directly.",
          "A program called the Python interpreter reads your file from top to bottom.",
          "For each line, it works out what you meant — this step is called parsing — and then performs the action.",
          "When it reaches `print(\"Hello\")`, it does two things in order: it evaluates what is inside the brackets, then sends that text to the screen.",
          "Because it works strictly top to bottom, the order of your lines is the order of the output. Swap two `print()` lines and the output swaps too.",
          "This is why a single typo stops everything: the interpreter reaches a line it cannot parse, gives up on that line, and reports an error instead of guessing."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "program",
        "def": "A list of instructions a computer runs in order."
      },
      {
        "term": "print()",
        "def": "Tells Python to display text on the screen."
      },
      {
        "term": "string",
        "def": "A piece of text, written inside quotation marks."
      },
      {
        "term": "interpreter",
        "def": "The program that reads your Python code line by line and carries out each instruction."
      },
      {
        "term": "syntax",
        "def": "The grammar rules of a language — for example, that strings need quotes and `print` needs round brackets."
      },
      {
        "term": "argument",
        "def": "The value you put inside the brackets of `print()` — the thing you are asking it to display."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Run this — then change the words and run again",
        "runnable": true,
        "source": "print(\"Hello, world!\")\nprint(\"Python is running right here in your browser.\")"
      },
      {
        "language": "python",
        "caption": "Lines run top to bottom — watch the order of the output",
        "runnable": true,
        "source": "print(\"First line\")\nprint(\"Second line\")\nprint(\"Third line\")"
      }
    ],
    "caseStudy": {
      "title": "\"Hello, world!\" — the line that starts every programmer",
      "body": [
        "In 1972, Brian Kernighan wrote a Bell Labs tutorial for the B programming language, and used a tiny program that printed the words \"Hello, world!\".",
        "He carried it into the 1978 book \"The C Programming Language\", co-written with Dennis Ritchie — the most influential programming book ever published.",
        "From there it stuck. Today it is the traditional first program in almost every language, from Python to JavaScript to Rust.",
        "Every engineer at Google, Netflix, or OpenAI started exactly where you just did — one instruction, run in order."
      ],
      "bridge": "You took the same first step as every professional developer alive: an instruction, run in order."
    },
    "takeaways": [
      "A program runs your instructions top to bottom.",
      "`print()` displays text; the text goes in quotes.",
      "Forgetting the quotes is the most common first error — and it is harmless."
    ],
    "knowledgeCheck": [
      {
        "q": "In what order does Python run the lines of your program?",
        "options": [
          {
            "text": "Top to bottom, one line at a time",
            "correct": true
          },
          {
            "text": "Bottom to top",
            "correct": false
          },
          {
            "text": "In a random order each time",
            "correct": false
          },
          {
            "text": "All lines at the same instant",
            "correct": false
          }
        ],
        "feedback": "Python runs strictly top to bottom, one line at a time. The order of your lines is the order of the output."
      },
      {
        "q": "Why does the text inside `print(\"...\")` need quotation marks?",
        "options": [
          {
            "text": "The quotes tell Python to treat it as text to display, not a command to run",
            "correct": true
          },
          {
            "text": "The quotes make the text appear in bold",
            "correct": false
          },
          {
            "text": "Quotes are only there for decoration and can be left off",
            "correct": false
          },
          {
            "text": "Quotes tell Python to run the words as instructions",
            "correct": false
          }
        ],
        "feedback": "Quotes mark a string — text to show as-is. Without them, Python tries to run your words as commands and stops with an error."
      },
      {
        "q": "What does the Python interpreter do?",
        "options": [
          {
            "text": "Reads your code line by line and carries out each instruction",
            "correct": true
          },
          {
            "text": "Stores your files in the cloud",
            "correct": false
          },
          {
            "text": "Designs the look of your web page",
            "correct": false
          },
          {
            "text": "Translates your code into Spanish",
            "correct": false
          }
        ],
        "feedback": "The interpreter is the program that reads your Python code from top to bottom and performs each instruction it understands."
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Your turn. Write a program that greets the world.",
      "starter": "",
      "expectedOutput": "Hello, world!",
      "check": "equals",
      "hint": "Use print(), and put the text inside quotes."
    },
    "glossaryTerms": [
      "program",
      "print",
      "string"
    ],
    "sources": [
      {
        "label": "Python docs — print()",
        "url": "https://docs.python.org/3/library/functions.html#print"
      }
    ]
  },
  "py-m1-l2": {
    "id": "py-m1-l2",
    "trackId": "python",
    "moduleId": "py-m1",
    "order": 2,
    "estMinutes": 11,
    "title": "Variables: Giving Data a Name",
    "coreIdea": "A variable is a named box that holds a value so you can reuse it by name.",
    "plainEnglish": [
      "A variable is a name you attach to a piece of data.",
      "You create one with `=`, like `city = \"Paris\"`.",
      "The name on the left, the value on the right. The `=` means \"store this\".",
      "After that, typing `city` gives you back `\"Paris\"`. No need to repeat the value.",
      "Change the box once, and every line that uses the name updates with it.",
      "Behind the scenes, the value lives somewhere in your computer's memory, and the name is really a label pointing at it.",
      "So a variable does not copy the data around — it just remembers where to find it.",
      "Python reads each line top to bottom, so a name only exists after the line that creates it has run."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A variable is a labelled jar on a shelf.",
        "You write `city` on the label and drop `Paris` inside.",
        "Later you just ask for the `city` jar — you do not have to remember what is in it."
      ]
    },
    "deepSections": [
      {
        "title": "Naming rules — what is allowed",
        "teaser": "letters, numbers, underscores — and no starting with a digit",
        "body": [
          "A name can use letters, numbers, and the underscore `_`.",
          "It cannot start with a number, and it cannot contain spaces.",
          "So `top_city` is fine; `2city` and `top city` are not.",
          "Names are case-sensitive: `City` and `city` are two different boxes."
        ]
      },
      {
        "title": "You can change what is in the box",
        "teaser": "a variable can be reassigned at any time",
        "body": [
          "Assignment is not permanent. You can point a name at a new value later.",
          "`city = \"Paris\"` then `city = \"Tokyo\"` leaves `city` holding `\"Tokyo\"`.",
          "Python simply forgets the old value and remembers the new one."
        ]
      },
      {
        "title": "The name is a label, not the box itself",
        "teaser": "why two names can point at the same value",
        "body": [
          "In Python, `=` does not pour a copy of the data into a jar.",
          "It sticks a name-tag onto a value that already lives in memory.",
          "So `a = \"Paris\"` then `b = a` gives you two tags — `a` and `b` — both pointing at the same `\"Paris\"`.",
          "This is why naming is cheap: you are moving sticky labels, not hauling data around.",
          "Reassigning `a = \"Tokyo\"` just peels the `a` tag off `\"Paris\"` and sticks it on `\"Tokyo\"`. The `b` tag does not move, so `b` still reads `\"Paris\"`.",
          "Use a clear, descriptive name — `unit_price`, not `x` — because the name is the only clue a future reader gets about what the value means."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "variable",
        "def": "A name that holds a value you can reuse."
      },
      {
        "term": "=",
        "def": "The assignment sign: store the value on the right under the name on the left."
      },
      {
        "term": "value",
        "def": "The actual data stored, such as the text `Paris`."
      },
      {
        "term": "assignment",
        "def": "The act of attaching a name to a value using `=`."
      },
      {
        "term": "reassignment",
        "def": "Pointing an existing name at a new value, which replaces what it held before."
      },
      {
        "term": "case-sensitive",
        "def": "Treating upper and lower case as different, so `City` and `city` are separate names."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Store once, use twice — then try changing the value",
        "runnable": true,
        "source": "city = \"Paris\"\nprint(city)\nprint(\"I love \" + city)"
      },
      {
        "language": "python",
        "caption": "Reassign a name and watch the value change",
        "runnable": true,
        "source": "city = \"Paris\"\nprint(city)\ncity = \"Tokyo\"\nprint(city)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Create a variable called city holding the text Paris, then print: I love Paris",
      "starter": "",
      "expectedOutput": "I love Paris",
      "check": "equals",
      "hint": "Set city = \"Paris\", then print it together with the text \"I love \"."
    },
    "knowledgeCheck": [
      {
        "q": "Which of these is a valid Python variable name?",
        "options": [
          {
            "text": "2city",
            "correct": false
          },
          {
            "text": "top city",
            "correct": false
          },
          {
            "text": "top_city",
            "correct": true
          },
          {
            "text": "top-city",
            "correct": false
          }
        ],
        "feedback": "A name can use letters, numbers, and underscores, but it cannot start with a digit, contain a space, or use a hyphen. Only `top_city` follows all the rules."
      },
      {
        "q": "After running `city = \"Paris\"` and then `city = \"Tokyo\"`, what does `print(city)` show?",
        "options": [
          {
            "text": "Paris",
            "correct": false
          },
          {
            "text": "Tokyo",
            "correct": true
          },
          {
            "text": "Paris Tokyo",
            "correct": false
          },
          {
            "text": "an error",
            "correct": false
          }
        ],
        "feedback": "Reassignment replaces the old value. Python forgets `\"Paris\"` and remembers `\"Tokyo\"`, so `print(city)` shows Tokyo."
      },
      {
        "q": "Python treats names as case-sensitive. What does that mean for `City` and `city`?",
        "options": [
          {
            "text": "They are the same variable",
            "correct": false
          },
          {
            "text": "They are two different variables",
            "correct": true
          },
          {
            "text": "`City` is not allowed",
            "correct": false
          },
          {
            "text": "Python converts both to lowercase",
            "correct": false
          }
        ],
        "feedback": "Case-sensitive means upper and lower case count as different. `City` and `city` are two separate boxes that hold their own values."
      }
    ],
    "caseStudy": {
      "title": "How a shopping cart remembers your total",
      "body": [
        "When you add an item on Amazon, the price is stored in a variable like `total`.",
        "Add another item, and the program updates that same `total` by reassigning it to the new sum.",
        "The checkout page never recalculates from scratch — it just reads the box.",
        "Amazon's checkout, built in part on its Java and Python services, leans on exactly this idea: a running total held in a named field, updated as you add or remove items.",
        "Because the name stays the same while the value changes, the page that displays your total never needs to know how the number got there — it just reads `total` again and shows the latest figure."
      ],
      "bridge": "Naming a value once and reusing it is exactly what you did with `city`."
    },
    "takeaways": [
      "A variable is a name attached to a value.",
      "Create one with `=`: name on the left, value on the right.",
      "Reuse the value by typing its name; change the box once and every use updates."
    ],
    "glossaryTerms": [
      "variable",
      "assignment",
      "value"
    ],
    "sources": [
      {
        "label": "Python docs — Variables and assignment",
        "url": "https://docs.python.org/3/tutorial/introduction.html#using-python-as-a-calculator"
      }
    ]
  },
  "py-m1-l3": {
    "id": "py-m1-l3",
    "trackId": "python",
    "moduleId": "py-m1",
    "order": 3,
    "estMinutes": 12,
    "title": "Numbers and Math",
    "coreIdea": "Python does arithmetic with `+ - * /`, plus `//` for whole division and `%` for the remainder.",
    "plainEnglish": [
      "Python is a calculator that never makes a mistake.",
      "Whole numbers like `42` are integers. Numbers with a dot like `3.75` are decimals.",
      "Use `+` to add, `-` to subtract, `*` to multiply, `/` to divide.",
      "`/` always gives a decimal. `//` gives only the whole part, and `%` gives the leftover.",
      "Python follows the same order of operations you learned in school: it does `*` and `/` before `+` and `-`.",
      "If you want a different order, wrap the part you want first in round brackets `()`.",
      "Behind the scenes, an integer and a float are two different types, and mixing them in `/` always produces a float."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of sharing 17 sweets between 5 children.",
        "`//` tells you each child gets 3.",
        "`%` tells you 2 sweets are left in the bowl."
      ]
    },
    "deepSections": [
      {
        "title": "Why two kinds of division",
        "teaser": "`/` gives the full answer, `//` and `%` split it in two",
        "body": [
          "`17 / 5` is `3.4` — the exact answer, as a decimal.",
          "`17 // 5` is `3` — how many whole 5s fit inside 17.",
          "`17 % 5` is `2` — what is left over after taking those out.",
          "`%` is called modulo. It is how programs check if a number is even: `n % 2` is `0` for even numbers."
        ]
      },
      {
        "title": "Order of operations and the float trap",
        "teaser": "Brackets win, and `/` quietly turns whole numbers into decimals",
        "body": [
          "Python evaluates `*` and `/` before `+` and `-`, just like maths class.",
          "So `2 + 3 * 4` is `14`, not `20` — the multiplication happens first.",
          "Wrap a part in brackets to force it first: `(2 + 3) * 4` is `20`.",
          "Here is the surprise: `10 / 2` is `5.0`, not `5`. The `/` operator always returns a float, even when the division is exact.",
          "If you truly want a whole number back, use `//`: `10 // 2` is `5`.",
          "Floats also can't always be exact. `0.1 + 0.2` prints `0.30000000000000004` because the computer stores decimals in binary, which can't represent every fraction perfectly.",
          "That tiny error is normal and shared by almost every language — when exact money matters, programmers reach for special tools like Python's `decimal` module instead of plain floats."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "integer",
        "def": "A whole number, with no decimal point, like `42`."
      },
      {
        "term": "float",
        "def": "A number with a decimal point, like `3.75`."
      },
      {
        "term": "//",
        "def": "Whole-number division: the answer without the fractional part."
      },
      {
        "term": "%",
        "def": "Modulo: the remainder left after dividing."
      },
      {
        "term": "operator",
        "def": "A symbol that does something to numbers, like `+` for add or `*` for multiply."
      },
      {
        "term": "order of operations",
        "def": "The fixed rule for which calculation happens first: brackets, then `*` and `/`, then `+` and `-`."
      },
      {
        "term": "type",
        "def": "The kind of value something is. `7` has type integer; `7.0` has type float. The type decides how Python treats it."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "The four basic operators — notice `/` gives a decimal",
        "runnable": true,
        "source": "print(2 + 3)\nprint(10 - 4)\nprint(6 * 7)\nprint(15 / 4)"
      },
      {
        "language": "python",
        "caption": "Whole division and remainder, side by side",
        "runnable": true,
        "source": "print(17 // 5)\nprint(17 % 5)"
      },
      {
        "language": "python",
        "caption": "Brackets change the answer — Python does `*` before `+`",
        "runnable": true,
        "source": "print(2 + 3 * 4)\nprint((2 + 3) * 4)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Print the result of 7 multiplied by 6.",
      "starter": "",
      "expectedOutput": "42",
      "check": "equals",
      "hint": "Use the `*` operator inside print(), like print(7 * 6)."
    },
    "knowledgeCheck": [
      {
        "q": "What does `17 % 5` give you?",
        "options": [
          {
            "text": "3 — how many whole 5s fit in 17",
            "correct": false
          },
          {
            "text": "2 — the remainder left after dividing",
            "correct": true
          },
          {
            "text": "3.4 — the exact decimal answer",
            "correct": false
          }
        ],
        "feedback": "Right. `%` is modulo: it hands back what is left over. `17 // 5` would give the 3, and `17 / 5` would give the 3.4."
      },
      {
        "q": "What does Python print for `2 + 3 * 4`?",
        "options": [
          {
            "text": "20, because it reads left to right",
            "correct": false
          },
          {
            "text": "14, because `*` happens before `+`",
            "correct": true
          },
          {
            "text": "24, because it multiplies everything",
            "correct": false
          }
        ],
        "feedback": "Correct. Multiplication runs first, so `3 * 4` is 12, then `2 + 12` is 14. Use brackets like `(2 + 3) * 4` if you want the addition first."
      },
      {
        "q": "What is the result, and its type, of `10 / 2` in Python?",
        "options": [
          {
            "text": "`5`, an integer",
            "correct": false
          },
          {
            "text": "`5.0`, a float — because `/` always returns a decimal",
            "correct": true
          },
          {
            "text": "An error, because the division is exact",
            "correct": false
          }
        ],
        "feedback": "Exactly. The `/` operator always returns a float, even when it divides evenly. Use `//` (here `10 // 2`) if you want the integer `5`."
      }
    ],
    "caseStudy": {
      "title": "The modulo trick behind a clock",
      "body": [
        "A 24-hour clock turns 25 o'clock back into 1 o'clock.",
        "Computers do this with `25 % 24`, which is `1`.",
        "The same `%` wraps minutes, schedules events, and rotates colours in games.",
        "Spotify uses this idea to shuffle and loop a playlist: when the playing index reaches the end of the list, `index % length` snaps it back to the start so the music wraps around to song 1.",
        "The same trick decides which server handles your request: many systems hash a user id and take it modulo the number of servers, so traffic spreads evenly and always lands on a valid machine."
      ],
      "bridge": "The remainder operator you just met powers everything that has to loop back around."
    },
    "takeaways": [
      "`+ - * /` do the everyday arithmetic; `/` always returns a decimal.",
      "`//` keeps only the whole part of a division.",
      "`%` returns the remainder — useful for even/odd and wrap-around.",
      "Python does `*` and `/` before `+` and `-`; use brackets `()` to change the order."
    ],
    "glossaryTerms": [
      "integer",
      "float",
      "operator",
      "modulo"
    ],
    "sources": [
      {
        "label": "Python docs — Numbers",
        "url": "https://docs.python.org/3/tutorial/introduction.html#numbers"
      }
    ]
  },
  "py-m1-l4": {
    "id": "py-m1-l4",
    "trackId": "python",
    "moduleId": "py-m1",
    "order": 4,
    "estMinutes": 12,
    "title": "Strings: Working with Text",
    "coreIdea": "Text lives inside quotes, and an f-string lets you drop variables straight into a sentence.",
    "plainEnglish": [
      "Any text in code is a string, and it must sit inside quotes.",
      "You can join strings together with `+`, like `\"Hello, \" + name`.",
      "Joining gets clumsy fast. An f-string is the cleaner way.",
      "Put an `f` before the quotes, then write `{name}` to drop a variable right inside the sentence.",
      "The quotes are just markers — Python strips them off and keeps only the text between them.",
      "An f-string is evaluated the moment that line runs, so `{ }` always shows the variable's value at that exact point.",
      "Single quotes `'...'` and double quotes `\"...\"` mean the same thing; pick whichever lets you avoid escaping a quote inside your text."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "An f-string is a fill-in-the-blanks form.",
        "You write the sentence with a blank: `Hello, {name}!`.",
        "Python fills the blank with whatever `name` holds."
      ]
    },
    "deepSections": [
      {
        "title": "Two ways to build a sentence",
        "teaser": "gluing with `+` vs. filling with an f-string",
        "body": [
          "With `+` you must add the spaces and quotes yourself: `\"Hello, \" + name + \"!\"`.",
          "An f-string reads like the finished sentence: `f\"Hello, {name}!\"`.",
          "The `{ }` is a window into the string — whatever is inside gets calculated and slotted in.",
          "You can even put numbers in: `f\"{name} is {age}\"` works without converting anything."
        ]
      },
      {
        "title": "Why `+` blows up but f-strings don't",
        "teaser": "the type rule that catches every beginner",
        "body": [
          "The `+` sign means two different things depending on what's on each side.",
          "Between two numbers, `+` adds: `2 + 2` is `4`.",
          "Between two strings, `+` glues: `\"2\" + \"2\"` is `\"22\"`.",
          "But Python refuses to mix the two. `\"Age: \" + 36` raises a `TypeError` — it won't guess whether you meant text or maths.",
          "With `+` you have to convert the number first: `\"Age: \" + str(36)`.",
          "An f-string skips that chore. Inside `{ }` Python automatically turns the value into text, so `f\"Age: {36}\"` just works.",
          "That automatic conversion is why f-strings are the recommended way to mix words and numbers."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "string",
        "def": "A piece of text, written inside quotation marks."
      },
      {
        "term": "f-string",
        "def": "A string starting with `f` that lets you insert variables using `{ }`."
      },
      {
        "term": "concatenation",
        "def": "Joining strings end to end with the `+` sign."
      },
      {
        "term": "TypeError",
        "def": "Python's complaint when you combine things that don't fit together, like adding a number to a string with `+`."
      },
      {
        "term": "str()",
        "def": "A built-in tool that turns a value into its text form, so `str(36)` gives the string `\"36\"`."
      },
      {
        "term": "placeholder",
        "def": "The `{ }` slot inside an f-string that Python replaces with a value when the line runs."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Joining with + — you supply the space yourself",
        "runnable": true,
        "source": "first = \"Grace\"\nlast = \"Hopper\"\nprint(first + \" \" + last)"
      },
      {
        "language": "python",
        "caption": "The same idea with an f-string — cleaner, and numbers work too",
        "runnable": true,
        "source": "name = \"Ada\"\nage = 36\nprint(f\"{name} is {age} today.\")"
      },
      {
        "language": "python",
        "caption": "An f-string can do the maths inside the { } too",
        "runnable": true,
        "source": "price = 4\nquantity = 3\nprint(f\"Total: {price * quantity} dollars\")"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Set name = 'Ada', then print: Hello, Ada!",
      "starter": "",
      "expectedOutput": "Hello, Ada!",
      "check": "equals",
      "hint": "Use an f-string: print(f\"Hello, {name}!\")."
    },
    "knowledgeCheck": [
      {
        "q": "What does `f\"{name} is {age}\"` produce when `name = \"Ada\"` and `age = 36`?",
        "options": [
          {
            "text": "The literal text {name} is {age}",
            "correct": false
          },
          {
            "text": "Ada is 36",
            "correct": true
          },
          {
            "text": "An error, because you can't mix a name and a number",
            "correct": false
          }
        ],
        "feedback": "Right. The f-string fills each `{ }` with the variable's value, and it turns the number 36 into text for you — so you get 'Ada is 36'."
      },
      {
        "q": "Why does `\"Age: \" + 36` raise an error, while `f\"Age: {36}\"` works fine?",
        "options": [
          {
            "text": "`+` won't glue text to a number, but an f-string converts the number to text automatically",
            "correct": true
          },
          {
            "text": "f-strings are faster, so Python allows them but blocks `+`",
            "correct": false
          },
          {
            "text": "The number 36 is too large to add to a string",
            "correct": false
          }
        ],
        "feedback": "Exactly. `+` refuses to mix a string and a number (a TypeError), so you'd need `str(36)`. Inside an f-string, the `{ }` handles that conversion for you."
      },
      {
        "q": "Which line correctly greets the value stored in `name` using an f-string?",
        "options": [
          {
            "text": "print(\"Hello, {name}!\")",
            "correct": false
          },
          {
            "text": "print(f\"Hello, {name}!\")",
            "correct": true
          },
          {
            "text": "print(f\"Hello, name!\")",
            "correct": false
          }
        ],
        "feedback": "Correct. You need both the `f` before the quotes and the variable inside `{ }`. Without the `f`, Python prints the braces literally; without the braces, it prints the word 'name'."
      }
    ],
    "caseStudy": {
      "title": "\"Hi Ada, your order shipped\" — emails built from f-strings",
      "body": [
        "Companies like Shopify send millions of order and shipping emails that greet you by name.",
        "Shopify is a Canadian e-commerce platform that powers online stores for millions of businesses worldwide.",
        "Nobody writes those emails one by one. A single template holds blanks for the customer's name, the order number, and the tracking link.",
        "When your order ships, the program fills each blank with your details — exactly what an f-string does with `{name}`.",
        "The same one-template-many-blanks idea is built into Shopify's `Liquid` templating language, where `{{ customer.name }}` plays the role that `{name}` plays in a Python f-string.",
        "One template plus your data equals a message that reads as if it were written just for you."
      ],
      "bridge": "Every personalised message you receive is a string with your name slotted in."
    },
    "takeaways": [
      "Text is a string and must sit inside quotes.",
      "`+` joins strings, but you must add the spaces yourself.",
      "An f-string (`f\"...\"`) drops variables straight into a sentence with `{ }`.",
      "`+` won't mix text and numbers, but an f-string converts numbers to text for you."
    ],
    "glossaryTerms": [
      "string",
      "f-string",
      "concatenation"
    ],
    "sources": [
      {
        "label": "Python docs — Formatted string literals",
        "url": "https://docs.python.org/3/tutorial/inputoutput.html#formatted-string-literals"
      }
    ]
  },
  "py-m1-l5": {
    "id": "py-m1-l5",
    "trackId": "python",
    "moduleId": "py-m1",
    "order": 5,
    "estMinutes": 11,
    "title": "Comments and Fixing Your First Errors",
    "coreIdea": "A `#` writes a note Python ignores, and a Python error tells you exactly where to look.",
    "plainEnglish": [
      "A comment is a note for humans. Start the line with `#` and Python skips it.",
      "Comments explain why your code does something. They never run.",
      "When code does break, Python does not crash silently — it prints an error.",
      "The error names the problem and points at the line. It is a clue, not a scolding.",
      "Python reads your file from top to bottom, one line at a time.",
      "The moment it hits a line it cannot understand, it stops and prints the error for that line.",
      "So an error always points at the first thing that went wrong — fix that, and any errors below it may simply vanish."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A comment is a sticky note in the margin of a recipe.",
        "The cook reads the steps and ignores your notes.",
        "An error is the cook stopping to say: \"line 1 — I don't know the word `prnt`.\""
      ]
    },
    "deepSections": [
      {
        "title": "Reading an error message",
        "teaser": "the last line names the problem",
        "body": [
          "Errors look scary, but read the bottom line first.",
          "A typo like `prnt(\"hi\")` gives: `NameError: name 'prnt' is not defined`.",
          "Python even adds a hint: `Did you mean: 'print'?`.",
          "It is telling you a name it does not recognise — almost always a spelling slip. Fix the spelling and run again."
        ]
      },
      {
        "title": "The two flavours of error: syntax vs. runtime",
        "teaser": "broken grammar vs. a step that fails",
        "body": [
          "Errors come in two kinds, and knowing which one you have tells you where to look.",
          "A `SyntaxError` means Python could not even read your line as valid Python — like a sentence with no full stop.",
          "Forgetting the closing quote in `print(\"hi)` is a syntax error: Python catches it before running anything.",
          "A runtime error is different — the line looked fine, but something went wrong while it ran.",
          "`NameError` is a runtime error: `print(name)` reads as valid Python, but it only fails once Python looks for `name` and cannot find it.",
          "Rule of thumb: a `SyntaxError` is a typing slip in the line itself; most other errors mean the line is fine but the world is not what you assumed."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "comment",
        "def": "A note in code starting with `#`; Python ignores it."
      },
      {
        "term": "error",
        "def": "A message Python prints when it cannot run a line."
      },
      {
        "term": "NameError",
        "def": "The error for using a name Python does not recognise — often a typo."
      },
      {
        "term": "SyntaxError",
        "def": "The error when a line breaks Python's grammar rules, like a missing quote or bracket; Python catches it before running the code."
      },
      {
        "term": "traceback",
        "def": "The block of text Python prints when an error happens; it lists the file and line so you can trace back to the cause."
      },
      {
        "term": "debugging",
        "def": "Finding and fixing the cause of an error or wrong result in your code."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "The comment is skipped; only the print runs",
        "runnable": true,
        "source": "# This line is a note for humans. Python ignores it.\nprint(\"Comments are skipped.\")"
      },
      {
        "language": "python",
        "caption": "A comment can sit at the end of a line too — everything after `#` is ignored",
        "runnable": true,
        "source": "print(\"Hello\")  # this note explains the line, but never runs"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "The starter code has a typo. Fix it so the program prints: fixed",
      "starter": "prnt(\"fixed\")",
      "expectedOutput": "fixed",
      "check": "equals",
      "hint": "`prnt` is misspelled — it should be `print`."
    },
    "knowledgeCheck": [
      {
        "q": "What does Python do with a line that starts with `#`?",
        "options": [
          {
            "text": "Runs it as code, like any other line",
            "correct": false
          },
          {
            "text": "Ignores it — it is a comment for humans",
            "correct": true
          },
          {
            "text": "Prints it to the screen",
            "correct": false
          }
        ],
        "feedback": "A `#` starts a comment. Python skips the line entirely; it is a note for the people reading the code, not an instruction."
      },
      {
        "q": "You run `prnt(\"hi\")` and see `NameError: name 'prnt' is not defined`. What is the most likely cause?",
        "options": [
          {
            "text": "Your computer is out of memory",
            "correct": false
          },
          {
            "text": "Python is broken and needs reinstalling",
            "correct": false
          },
          {
            "text": "A typo — `prnt` should be `print`",
            "correct": true
          }
        ],
        "feedback": "A `NameError` means Python met a name it does not recognise. Almost always that is a spelling slip — here `prnt` should be `print`."
      },
      {
        "q": "When should you read first in an error message?",
        "options": [
          {
            "text": "The last line — it names the actual problem",
            "correct": true
          },
          {
            "text": "The first line — the rest is just noise",
            "correct": false
          },
          {
            "text": "None of it — errors are random and unfixable",
            "correct": false
          }
        ],
        "feedback": "The bottom line of the traceback names the problem (like `NameError`) and the line it happened on. Start there, then fix the named cause."
      }
    ],
    "caseStudy": {
      "title": "The bug that cost a spacecraft",
      "body": [
        "In 1962, NASA launched Mariner 1, a probe meant to fly past Venus.",
        "Less than five minutes after lift-off it veered off course, and range safety officers destroyed it over the Atlantic.",
        "An official NASA review traced the failure in part to a mistake in the guidance equations that had been hand-transcribed into the software.",
        "A missing notation — famously described as a missing overbar (a line written above a symbol) — meant the code used raw, jittery radar data instead of smoothed values, and the rocket chased the noise.",
        "There was no error message: the code ran perfectly and did the wrong thing, costing about $18 million in 1962 dollars.",
        "Modern languages like Python flip this on its head: a typo like `prnt` stops the program and prints a clear `NameError` instead of silently misbehaving.",
        "The mistake costs you seconds of reading, not a spacecraft."
      ],
      "bridge": "Reading the error and fixing the spelling is the everyday skill that catches mistakes early."
    },
    "takeaways": [
      "A `#` starts a comment — a human note Python ignores.",
      "Errors are clues: read the last line, it names the problem and the place.",
      "A `NameError` usually means a typo in a name like `print`.",
      "A `SyntaxError` means the line itself breaks Python's grammar — like a missing quote or bracket.",
      "Python stops at the first broken line, so fix that one first and re-run."
    ],
    "glossaryTerms": [
      "comment",
      "error",
      "name-error",
      "debugging"
    ],
    "sources": [
      {
        "label": "Python docs — Errors and Exceptions",
        "url": "https://docs.python.org/3/tutorial/errors.html"
      }
    ]
  },
  "py-m2-l1": {
    "id": "py-m2-l1",
    "trackId": "python",
    "moduleId": "py-m2",
    "order": 1,
    "estMinutes": 8,
    "title": "True, False, and Comparisons",
    "coreIdea": "Python can answer yes-or-no questions, and the answer is always `True` or `False`.",
    "plainEnglish": [
      "Some questions have only two answers: yes or no.",
      "In code, yes is `True` and no is `False`. These are called booleans.",
      "You ask a question by comparing two things, like `10 > 3`.",
      "Python checks the comparison and hands back `True` or `False`.",
      "That single answer is what later lets your program decide what to do."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine a light switch. It is either on or off — never half-on.",
        "A boolean is that switch: `True` (on) or `False` (off).",
        "A comparison like `10 > 3` is you flicking the switch and reading where it lands."
      ]
    },
    "deepSections": [
      {
        "title": "The six comparison operators",
        "teaser": "equal, not-equal, and the four size checks",
        "body": [
          "`==` asks \"are these the same?\" Note the two equals signs.",
          "`!=` asks \"are these different?\"",
          "`>` and `<` ask \"is the left bigger / smaller?\"",
          "`>=` and `<=` add \"or equal to\".",
          "Each one returns a single boolean: `True` or `False`."
        ]
      },
      {
        "title": "Why == is doubled",
        "teaser": "one = stores, two == compares",
        "body": [
          "A single `=` means \"put this value into a variable\". It stores.",
          "A double `==` means \"are these two things equal?\". It asks.",
          "Mixing them up is the most common beginner slip — and a good one to learn early."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "boolean",
        "def": "A value that is either `True` or `False` — nothing else."
      },
      {
        "term": "True / False",
        "def": "Python's two boolean values. Capital T and F, no quotes."
      },
      {
        "term": "comparison operator",
        "def": "A symbol like `>` or `==` that compares two values and returns a boolean."
      },
      {
        "term": "==",
        "def": "Asks whether two values are equal. Two equals signs, not one."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Each line asks a question and prints the answer",
        "runnable": true,
        "source": "print(10 > 3)\nprint(5 == 5)\nprint(7 != 7)\nprint(2 <= 2)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Print whether 10 is greater than 3 (it should print True or False).",
      "starter": "",
      "expectedOutput": "True",
      "check": "equals",
      "hint": "Put the comparison `10 > 3` straight inside `print()` — no quotes."
    },
    "caseStudy": {
      "title": "How a login form knows you typed the wrong password",
      "body": [
        "When you sign in to Gmail, the server compares what you typed against your stored password.",
        "That check is one boolean: do they match, `True` or `False`?",
        "If `False`, you see \"wrong password\". If `True`, you are in."
      ],
      "bridge": "Every \"access granted\" or \"access denied\" you have ever seen began with a single comparison returning `True` or `False`."
    },
    "takeaways": [
      "A boolean is either `True` or `False`.",
      "Comparisons like `10 > 3` return a boolean.",
      "Use `==` to compare, and `=` to store — they are different."
    ],
    "glossaryTerms": [
      "boolean",
      "true-false",
      "comparison-operator",
      "equality-operator"
    ],
    "sources": [
      {
        "label": "Python docs — Comparisons",
        "url": "https://docs.python.org/3/library/stdtypes.html#comparisons"
      }
    ]
  },
  "py-m2-l2": {
    "id": "py-m2-l2",
    "trackId": "python",
    "moduleId": "py-m2",
    "order": 2,
    "estMinutes": 9,
    "title": "if and else",
    "coreIdea": "`if` runs code only when a condition is `True`; `else` covers every other case.",
    "plainEnglish": [
      "So far your code ran every line, top to bottom, no matter what.",
      "`if` lets you guard a block: it runs only when a condition is `True`.",
      "`else` is the fallback — it runs when the condition is `False`.",
      "You write a question after `if`, end the line with a colon, then indent the code that depends on it.",
      "That indent is how Python knows which lines belong to the `if`."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a bouncer at a door checking IDs.",
        "`if` you are old enough, you go in.",
        "`else`, you are turned away. One door, two outcomes."
      ]
    },
    "deepSections": [
      {
        "title": "The colon and the indent",
        "teaser": "Python uses spacing, not brackets",
        "body": [
          "The `if` line ends in a colon `:`. That colon means \"here comes a block\".",
          "The lines inside the block are indented — usually four spaces.",
          "Python reads the indent to know which lines run only when the condition is true.",
          "When the indent stops, the block is over."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "if",
        "def": "Runs the indented code only when its condition is `True`."
      },
      {
        "term": "else",
        "def": "Runs when the `if` condition was `False` — the catch-all alternative."
      },
      {
        "term": "condition",
        "def": "The yes-or-no question after `if` that decides whether the block runs."
      },
      {
        "term": "indent",
        "def": "The leading spaces that mark which lines belong to a block."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Change the temperature and watch the message switch",
        "runnable": true,
        "source": "temperature = 30\nif temperature > 25:\n    print(\"It is hot\")\nelse:\n    print(\"It is mild\")"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Set age = 20. If age is 18 or more print adult, otherwise print minor.",
      "starter": "",
      "expectedOutput": "adult",
      "check": "equals",
      "hint": "Use `if age >= 18:` then an `else:`. Indent each `print` four spaces."
    },
    "caseStudy": {
      "title": "How Netflix decides what to autoplay next",
      "body": [
        "When an episode ends, Netflix checks one thing first: did you turn autoplay on?",
        "`if` autoplay is on, it starts the next episode.",
        "`else`, it shows the \"Are you still watching?\" screen instead."
      ],
      "bridge": "A single `if` / `else` is the fork in the road behind countless everyday app decisions."
    },
    "takeaways": [
      "`if` runs a block only when its condition is `True`.",
      "`else` handles the `False` case.",
      "The colon and the indent tell Python which lines belong together."
    ],
    "glossaryTerms": [
      "if-statement",
      "else-clause",
      "condition",
      "indent"
    ],
    "sources": [
      {
        "label": "Python docs — if statements",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
      }
    ]
  },
  "py-m2-l3": {
    "id": "py-m2-l3",
    "trackId": "python",
    "moduleId": "py-m2",
    "order": 3,
    "estMinutes": 9,
    "title": "elif: Many Paths",
    "coreIdea": "`elif` lets you check several conditions in order and pick the first one that fits.",
    "plainEnglish": [
      "`if` / `else` gives you two paths. Real choices often have more.",
      "`elif` (short for \"else if\") adds extra conditions in the middle.",
      "Python checks them top to bottom and stops at the first one that is `True`.",
      "Everything below that point is skipped.",
      "A final `else` catches anything that matched none of them."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture grading a test against a checklist, top to bottom.",
        "\"90 or above? That's an A.\" If not, slide down: \"80 or above? A B.\"",
        "The first box you can tick wins, and you stop checking."
      ]
    },
    "deepSections": [
      {
        "title": "Order matters — most specific first",
        "teaser": "Python takes the first match and stops",
        "body": [
          "Python tests each condition from top to bottom.",
          "The moment one is `True`, it runs that block and skips the rest.",
          "So put the highest bar first. A score of 95 should hit the A check before it ever reaches B.",
          "If you wrote the looser test first, the strict one below it would never get a turn."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "elif",
        "def": "\"Else if\" — an extra condition checked only if the ones above were `False`."
      },
      {
        "term": "branch",
        "def": "One path of an if / elif / else — only one branch ever runs."
      },
      {
        "term": "order of checks",
        "def": "`elif` conditions are tested top to bottom; the first `True` one wins."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Only the first matching branch runs",
        "runnable": true,
        "source": "hour = 14\nif hour < 12:\n    print(\"Good morning\")\nelif hour < 18:\n    print(\"Good afternoon\")\nelse:\n    print(\"Good evening\")"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Set score = 85. Print A if score >= 90, B if score >= 80, otherwise C.",
      "starter": "",
      "expectedOutput": "B",
      "check": "equals",
      "hint": "Use `if score >= 90:`, then `elif score >= 80:`, then `else:`."
    },
    "caseStudy": {
      "title": "How a tax calculator picks your bracket",
      "body": [
        "Income tax uses bands: one rate up to a threshold, a higher rate above it, and so on.",
        "Software walks the brackets in order with `elif`, top to bottom.",
        "It stops at the first band your income falls into and applies that rate."
      ],
      "bridge": "`elif` is exactly how programs route a single value down one of many tidy paths."
    },
    "takeaways": [
      "`elif` adds more conditions between `if` and `else`.",
      "Python runs only the first branch that is `True`.",
      "Put the strictest condition first so it gets checked first."
    ],
    "glossaryTerms": [
      "elif",
      "branch",
      "order-of-checks"
    ],
    "sources": [
      {
        "label": "Python docs — if statements",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
      }
    ]
  },
  "py-m2-l4": {
    "id": "py-m2-l4",
    "trackId": "python",
    "moduleId": "py-m2",
    "order": 4,
    "estMinutes": 10,
    "title": "Combining Conditions: and, or, not",
    "coreIdea": "`and`, `or`, and `not` glue small questions into one bigger yes-or-no question.",
    "plainEnglish": [
      "One condition is often not enough. Real rules combine several.",
      "`and` is true only when both sides are true.",
      "`or` is true when at least one side is true.",
      "`not` flips a boolean — `True` becomes `False`, and the reverse.",
      "With these three, you can express almost any rule you can say out loud."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A nightclub: you get in only if you are on the list `and` over 18.",
        "Happy hour applies if it is Friday `or` Saturday.",
        "`not` raining means: bring no umbrella."
      ]
    },
    "deepSections": [
      {
        "title": "and vs or, in one breath",
        "teaser": "and is strict; or is generous",
        "body": [
          "`and` is the strict one: every part must be `True`, or the whole thing is `False`.",
          "`or` is the generous one: just one `True` part makes the whole thing `True`.",
          "`not` simply reverses whatever boolean follows it.",
          "You can combine them, and use brackets `()` to make the grouping clear."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "and",
        "def": "`True` only when both conditions are `True`."
      },
      {
        "term": "or",
        "def": "`True` when at least one condition is `True`."
      },
      {
        "term": "not",
        "def": "Flips a boolean: `not True` is `False`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Both must be true for and; either works for or",
        "runnable": true,
        "source": "age = 25\nmember = True\nprint(age > 18 and member)\nprint(age > 100 or member)\nprint(not member)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Set temp = 25 and sunny = True. Print beach if temp > 20 and sunny, else print home.",
      "starter": "",
      "expectedOutput": "beach",
      "check": "equals",
      "hint": "Combine the two checks with `and`: `if temp > 20 and sunny:`."
    },
    "caseStudy": {
      "title": "How a spam filter decides to block an email",
      "body": [
        "Gmail's filter weighs many signals at once.",
        "A message might be flagged if it has a suspicious link `and` an unknown sender, `or` if it is `not` from your contacts.",
        "Combining conditions is how one clear verdict comes out of many clues."
      ],
      "bridge": "`and`, `or`, and `not` are the words that turn a pile of small checks into one decision."
    },
    "takeaways": [
      "`and` needs both sides true; `or` needs just one.",
      "`not` flips a boolean to its opposite.",
      "Combine them to express real-world rules in code."
    ],
    "glossaryTerms": [
      "logical-and",
      "logical-or",
      "logical-not"
    ],
    "sources": [
      {
        "label": "Python docs — Boolean operations",
        "url": "https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not"
      }
    ]
  },
  "py-m3-l1": {
    "id": "py-m3-l1",
    "trackId": "python",
    "moduleId": "py-m3",
    "order": 1,
    "estMinutes": 9,
    "title": "while Loops",
    "coreIdea": "A `while` loop repeats a block of code over and over, for as long as a condition stays true.",
    "plainEnglish": [
      "Sometimes you want to do the same thing again and again.",
      "A `while` loop says: keep doing this while a condition is true.",
      "Each time around, Python checks the condition first. If it is true, it runs the block again. If it is false, the loop stops.",
      "Something inside the loop has to change, or the condition never becomes false. Then it loops forever — an infinite loop."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Stirring a pot while the timer still has time left.",
        "Each stir, you glance at the timer. Still time? Stir again.",
        "Time's up? You stop. If the timer never ran down, you'd stir forever."
      ]
    },
    "deepSections": [
      {
        "title": "How to avoid an infinite loop",
        "teaser": "the counter must move toward 'false'",
        "body": [
          "A `while` loop only ends when its condition becomes false.",
          "So something inside the loop must change, step by step, toward that.",
          "If you count `n` up from 1 while `n <= 3`, you must add to `n` each time. Forget that line, and `n` stays 1 forever — the loop never stops.",
          "If you ever run a loop that won't end, press the stop button. No harm done."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "while loop",
        "def": "Repeats a block as long as a condition stays true."
      },
      {
        "term": "condition",
        "def": "A yes/no test Python checks before each repeat."
      },
      {
        "term": "infinite loop",
        "def": "A loop that never stops, because its condition never turns false."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "A countdown — watch the condition turn false",
        "runnable": true,
        "source": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Lift off!\")"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Use a while loop to print the numbers 1, 2, 3 — each on its own line.",
      "starter": "",
      "expectedOutput": "1\n2\n3",
      "check": "equals",
      "hint": "Start a counter at 1, loop while it is `<= 3`, print it, then add 1 each time."
    },
    "caseStudy": {
      "title": "The loop running inside every video game",
      "body": [
        "Every game has a 'game loop' at its heart.",
        "It runs `while` the game is still on: draw the screen, read the controller, update the world — then repeat.",
        "The moment you quit, the condition turns false and the loop ends."
      ],
      "bridge": "You just wrote the same shape that keeps Mario moving: repeat while something is still true."
    },
    "takeaways": [
      "A `while` loop repeats as long as its condition is true.",
      "Python checks the condition before every repeat.",
      "Something inside must change, or you get an infinite loop."
    ],
    "glossaryTerms": [
      "while-loop",
      "condition",
      "infinite-loop"
    ],
    "sources": [
      {
        "label": "Python docs — while statement",
        "url": "https://docs.python.org/3/reference/compound_stmts.html#the-while-statement"
      }
    ]
  },
  "py-m3-l2": {
    "id": "py-m3-l2",
    "trackId": "python",
    "moduleId": "py-m3",
    "order": 2,
    "estMinutes": 9,
    "title": "for Loops and range()",
    "coreIdea": "A `for` loop repeats a fixed number of times, and `range()` gives it the numbers to count through.",
    "plainEnglish": [
      "A `while` loop repeats until something changes. A `for` loop repeats a set number of times.",
      "`range()` hands the loop a sequence of numbers to walk through, one at a time.",
      "`range(5)` means the numbers 0, 1, 2, 3, 4 — it starts at 0 and stops before 5.",
      "Each time around, the loop variable holds the next number. No counter to manage yourself."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Climbing a set of stairs that is already built.",
        "`range()` lays down the steps for you: 0, 1, 2, 3, 4.",
        "The `for` loop just walks up them, one step per repeat — no risk of climbing forever."
      ]
    },
    "deepSections": [
      {
        "title": "Why range starts at 0 and stops early",
        "teaser": "range(5) gives five numbers: 0 to 4",
        "body": [
          "`range(5)` produces 0, 1, 2, 3, 4. That is five numbers — but it never reaches 5.",
          "The number you pass is the count, not the last value. It marks where to stop.",
          "Starting at 0 feels odd at first, but it is how programmers everywhere count.",
          "Need a different start? `range(2, 6)` gives 2, 3, 4, 5 — start at 2, stop before 6."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "for loop",
        "def": "Repeats once for each item in a sequence."
      },
      {
        "term": "range()",
        "def": "Builds a sequence of numbers for a loop to count through."
      },
      {
        "term": "loop variable",
        "def": "The name that holds the current item on each pass."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "range(2, 6) — start at 2, stop before 6",
        "runnable": true,
        "source": "for n in range(2, 6):\n    print(n)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Use a for loop with range to print 0 1 2 3 4 — each on its own line.",
      "starter": "",
      "expectedOutput": "0\n1\n2\n3\n4",
      "check": "equals",
      "hint": "`range(5)` already gives you 0 through 4 — loop over it and print each number."
    },
    "caseStudy": {
      "title": "How a spreadsheet fills 1,000 rows",
      "body": [
        "When a tool processes a list — 1,000 customers, say — it does not write the code 1,000 times.",
        "It writes a `for` loop once and lets `range()` count through every row.",
        "Change 1,000 to a million and the same three lines still work."
      ],
      "bridge": "A `for` loop is how one short instruction does a job thousands of times over."
    },
    "takeaways": [
      "A `for` loop repeats a fixed number of times.",
      "`range(5)` gives 0, 1, 2, 3, 4 — it stops before the number you pass.",
      "The loop variable holds the current number each time around."
    ],
    "glossaryTerms": [
      "for-loop",
      "range",
      "loop-variable"
    ],
    "sources": [
      {
        "label": "Python docs — range()",
        "url": "https://docs.python.org/3/library/functions.html#func-range"
      }
    ]
  },
  "py-m3-l3": {
    "id": "py-m3-l3",
    "trackId": "python",
    "moduleId": "py-m3",
    "order": 3,
    "estMinutes": 9,
    "title": "Adding Things Up in a Loop",
    "coreIdea": "Keep a running total in a variable, and add to it on every pass through the loop.",
    "plainEnglish": [
      "Often you want to combine many numbers into one — a sum, a count, a tally.",
      "The trick is a running total: a variable that grows as the loop runs.",
      "You start it at 0 before the loop. That is the empty starting point.",
      "Each time around, you add the current number to it. When the loop ends, the total holds the answer.",
      "The `[4, 3, 8]` is a list — just a few values in a row inside square brackets, which the loop walks through one at a time. You'll meet lists properly in the next module.",
      "You can pass `print()` several things separated by commas, like `print(\"You spent\", total)`. Python prints them in order with a space between, and unlike `+` it happily mixes text and numbers."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A shopping basket at the checkout.",
        "It starts empty (0). Each item beeps and adds to the running total.",
        "When the last item is scanned, the total on the screen is your answer."
      ]
    },
    "deepSections": [
      {
        "title": "Why you start the total at 0",
        "teaser": "the accumulator needs an empty starting point",
        "body": [
          "A variable that builds up a result is called an accumulator.",
          "It must exist before the loop, or there is nothing to add to.",
          "You start it at 0 because adding a number to 0 just gives that number — a clean, empty start.",
          "Each pass runs `total = total + n`, which means: take the old total and grow it by `n`."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "running total",
        "def": "A variable that grows as a loop adds to it."
      },
      {
        "term": "accumulator",
        "def": "The variable that collects a result across the loop."
      },
      {
        "term": "total = total + n",
        "def": "Replaces the total with itself plus the new number."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Add up three prices in a basket",
        "runnable": true,
        "source": "total = 0\nfor price in [4, 3, 8]:\n    total = total + price\nprint(\"You spent\", total)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Use a loop to add up the numbers 1 to 5 and print the total.",
      "starter": "",
      "expectedOutput": "15",
      "check": "equals",
      "hint": "Start `total` at 0, loop over `range(1, 6)`, add each number to `total`, then print it."
    },
    "caseStudy": {
      "title": "Every shopping cart total online",
      "body": [
        "When you check out at Amazon, the cart starts at $0.",
        "For each item in your cart, the code adds its price to a running total.",
        "The number you pay is an accumulator, built one item at a time."
      ],
      "bridge": "Start at 0, add on each pass — the same pattern behind every total you have ever paid online."
    },
    "takeaways": [
      "Start the total at 0 before the loop.",
      "Add the current number to it on every pass.",
      "When the loop ends, the variable holds the full total."
    ],
    "glossaryTerms": [
      "running-total",
      "accumulator",
      "for-loop"
    ],
    "sources": [
      {
        "label": "Python docs — The for statement",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#for-statements"
      }
    ]
  },
  "py-m3-l4": {
    "id": "py-m3-l4",
    "trackId": "python",
    "moduleId": "py-m3",
    "order": 4,
    "estMinutes": 9,
    "title": "break and continue",
    "coreIdea": "`break` stops a loop early; `continue` skips the rest of one pass and jumps to the next.",
    "plainEnglish": [
      "Sometimes you do not want a loop to run all the way through.",
      "`break` ends the loop immediately — Python leaves it and moves on.",
      "`continue` is gentler: it skips the rest of this one pass, then keeps looping.",
      "Both are used inside an `if`, so they only fire when a condition is met."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Reading a list of names out loud.",
        "`break` is finding the name you wanted and stopping — done, walk away.",
        "`continue` is skipping a name you don't care about, then reading on."
      ]
    },
    "deepSections": [
      {
        "title": "break leaves; continue skips",
        "teaser": "one ends the loop, one ends just this pass",
        "body": [
          "When Python hits `break`, the whole loop is over. Nothing after it in the loop runs.",
          "When Python hits `continue`, only the current pass is cut short. The loop starts its next pass right away.",
          "Both live inside an `if`, so they trigger only on the case you choose — like 'stop when you reach 5'.",
          "Reach for `break` to quit early once you've found what you need. Reach for `continue` to ignore some items but keep going."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "break",
        "def": "Stops the loop right away and exits it."
      },
      {
        "term": "continue",
        "def": "Skips the rest of the current pass and starts the next one."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "break stops early; continue skips one number",
        "runnable": true,
        "source": "for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Loop over 1 to 10. Stop the loop (break) when you reach 5. Print each number before stopping, one per line.",
      "starter": "",
      "expectedOutput": "1\n2\n3\n4",
      "check": "equals",
      "hint": "Loop over `range(1, 11)`; if the number equals 5, `break` before printing it."
    },
    "caseStudy": {
      "title": "How search engines stop early",
      "body": [
        "A search does not always scan every record it has.",
        "Once it has gathered enough strong matches, it can `break` out and return results fast.",
        "And it uses `continue` to skip records that fail a quick filter, without stopping the whole search."
      ],
      "bridge": "`break` to quit once you're done, `continue` to skip what doesn't fit — control that makes loops fast and smart."
    },
    "takeaways": [
      "`break` ends the whole loop on the spot.",
      "`continue` skips just the current pass and keeps going.",
      "Both sit inside an `if`, so they fire only when your condition is met."
    ],
    "glossaryTerms": [
      "break",
      "continue",
      "for-loop"
    ],
    "sources": [
      {
        "label": "Python docs — break and continue",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops"
      }
    ]
  },
  "py-m4-l1": {
    "id": "py-m4-l1",
    "trackId": "python",
    "moduleId": "py-m4",
    "order": 1,
    "estMinutes": 9,
    "title": "Lists",
    "coreIdea": "A list holds many values in order, inside square brackets.",
    "plainEnglish": [
      "So far, a name has held one value. A list lets one name hold many.",
      "You write a list with square brackets and commas: `[3, 1, 2]`.",
      "The order is kept exactly as you wrote it.",
      "Lists come with handy tools: `len()` counts the items, `.append()` adds one, and `sorted()` returns a tidy, ordered copy."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A list is a shopping list on a single line.",
        "Each item sits in its own spot, in the order you wrote them.",
        "You can count the items, add one to the end, or copy it out neatly sorted."
      ]
    },
    "deepSections": [
      {
        "title": "Counting from zero: indexing",
        "teaser": "the first item is number 0, not 1",
        "body": [
          "Each item has a position number, called an index.",
          "Python counts from `0`, so the first item is `list[0]` and the second is `list[1]`.",
          "It feels odd at first, but every serious language does it this way. You will get used to it fast."
        ]
      },
      {
        "title": "sorted() makes a copy — it does not change the original",
        "teaser": "your list stays as it was",
        "body": [
          "`sorted(my_list)` hands you back a new, ordered list.",
          "Your original list is left untouched.",
          "That is useful: you can show a tidy version without losing the order you started with."
        ]
      },
      {
        "title": "The dot: asking a list to do something",
        "teaser": "What `fruits.append()` really means",
        "body": [
          "`fruits.append(\"plum\")` means: tell the `fruits` list to add an item to itself.",
          "The dot connects a value to an action that is built into it. Read it as 'fruits, do this'.",
          "So `fruits.append(\"plum\")` is 'fruits, append plum'.",
          "If `fruits` was `[\"apple\", \"pear\"]` before, it becomes `[\"apple\", \"pear\", \"plum\"]` after.",
          "`.append` changes the list in place — the same list now holds one more item. That is different from `sorted()`, which leaves your list alone and returns a fresh copy."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "list",
        "def": "An ordered collection of values, written inside square brackets."
      },
      {
        "term": "index",
        "def": "The position of an item, counted from 0."
      },
      {
        "term": "sorted()",
        "def": "Returns a new list with the items in order, smallest to largest."
      },
      {
        "term": "len()",
        "def": "Counts how many items are in a list."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "A list keeps order — and tools work on the whole thing",
        "runnable": true,
        "source": "scores = [3, 1, 2]\nprint(scores)\nprint(len(scores))\nprint(sorted(scores))"
      },
      {
        "language": "python",
        "caption": "Pick one item by its index, then add a new one",
        "runnable": true,
        "source": "fruits = [\"apple\", \"pear\"]\nprint(fruits[0])\nfruits.append(\"plum\")\nprint(fruits)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Make a list with the numbers 3, 1, 2 and print it sorted from smallest to largest.",
      "starter": "",
      "expectedOutput": "[1, 2, 3]",
      "check": "equals",
      "hint": "Put the numbers in `[ ]`, then print `sorted(...)` of that list."
    },
    "caseStudy": {
      "title": "Spotify's queue is a list",
      "body": [
        "When you line up songs in Spotify, you are building a list.",
        "Each song has a position, and the order is what plays next.",
        "Skip, add to the end, or shuffle — those are all list operations under the hood."
      ],
      "bridge": "The `[3, 1, 2]` you just sorted is the same idea that powers a music queue."
    },
    "takeaways": [
      "A list holds many values in order, inside `[ ]`.",
      "Items are numbered from `0` — the first is index `0`.",
      "`sorted()` gives you a tidy copy; `len()` counts; `.append()` adds."
    ],
    "glossaryTerms": [
      "list",
      "index",
      "sorted",
      "len"
    ],
    "sources": [
      {
        "label": "Python docs — Lists",
        "url": "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists"
      }
    ]
  },
  "py-m4-l2": {
    "id": "py-m4-l2",
    "trackId": "python",
    "moduleId": "py-m4",
    "order": 2,
    "estMinutes": 9,
    "title": "Looping Over a List",
    "coreIdea": "A `for` loop visits each item in a list, one at a time.",
    "plainEnglish": [
      "You rarely want to handle a list item by item by hand.",
      "A `for` loop does it for you: it walks through the list, one item at a time.",
      "You pick a name for the current item — say `fruit` — and Python fills it in on each pass.",
      "The indented lines run once for every item in the list."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine handing out flyers to a queue of people.",
        "You step to the next person, give them a flyer, then move on.",
        "The loop is you walking the queue; each `fruit` is the person in front of you right now."
      ]
    },
    "deepSections": [
      {
        "title": "The loop variable is just a temporary name",
        "teaser": "`for fruit in fruits` — you choose the word `fruit`",
        "body": [
          "In `for fruit in fruits:`, the word `fruit` is a name you invent.",
          "On the first pass it holds `'apple'`, on the next it holds `'pear'`.",
          "Pick a name that reads well. `for item in items:` is fine; `for f in fruits:` works too."
        ]
      },
      {
        "title": "Indentation decides what repeats",
        "teaser": "indented lines run each time; the rest runs once",
        "body": [
          "The lines indented under the `for` line are the body of the loop.",
          "They run once for each item.",
          "Lines that are not indented run only once, after the loop is finished."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "for loop",
        "def": "A way to run the same code once for each item in a collection."
      },
      {
        "term": "loop variable",
        "def": "The temporary name that holds the current item on each pass."
      },
      {
        "term": "iterate",
        "def": "To go through a collection one item at a time."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Visit each name and greet it",
        "runnable": true,
        "source": "names = [\"Ada\", \"Alan\", \"Grace\"]\nfor name in names:\n    print(\"Hello, \" + name)"
      },
      {
        "language": "python",
        "caption": "Add up a list by looping",
        "runnable": true,
        "source": "numbers = [10, 20, 30]\ntotal = 0\nfor n in numbers:\n    total = total + n\nprint(total)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Given fruits = ['apple', 'pear'], print each fruit on its own line.",
      "starter": "",
      "expectedOutput": "apple\npear",
      "check": "equals",
      "hint": "Loop with `for fruit in fruits:` and `print(fruit)` on the indented line."
    },
    "caseStudy": {
      "title": "How an email blast reaches everyone",
      "body": [
        "A newsletter tool like Mailchimp holds a list of subscribers.",
        "To send a campaign, it loops over that list and sends one email per person.",
        "One loop, a million recipients — no copy-pasting required."
      ],
      "bridge": "Printing each fruit on its own line is the same move as sending each subscriber their own email."
    },
    "takeaways": [
      "A `for` loop runs your code once per item.",
      "The loop variable holds the current item each pass.",
      "Indented lines repeat; unindented lines run once at the end."
    ],
    "glossaryTerms": [
      "for-loop",
      "loop-variable",
      "iterate"
    ],
    "sources": [
      {
        "label": "Python docs — for statements",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#for-statements"
      }
    ]
  },
  "py-m4-l3": {
    "id": "py-m4-l3",
    "trackId": "python",
    "moduleId": "py-m4",
    "order": 3,
    "estMinutes": 10,
    "title": "Dictionaries: Labelled Data",
    "coreIdea": "A dictionary stores values under labels, so you look things up by name instead of by position.",
    "plainEnglish": [
      "A list finds things by position. A dictionary finds things by label.",
      "Each entry is a pair: a key (the label) and a value (what it holds).",
      "You write it with curly braces: `{'cat': 'meow'}`.",
      "To get a value, you ask for its key: `sounds['cat']` gives you `'meow'`."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A dictionary is a real dictionary.",
        "You do not flip to page 412; you look up the word.",
        "The word is the key, the definition is the value."
      ]
    },
    "deepSections": [
      {
        "title": "Keys must be unique",
        "teaser": "one label points to one value",
        "body": [
          "Each key can appear only once.",
          "If you assign to a key that already exists, you overwrite its value.",
          "That is exactly what you want: one label, one answer."
        ]
      },
      {
        "title": "Square brackets for lookup, even though you built it with curly braces",
        "teaser": "`{ }` to create, `[ ]` to fetch",
        "body": [
          "You create the dictionary with curly braces: `{'cat': 'meow'}`.",
          "But to fetch a value you use square brackets with the key: `sounds['cat']`.",
          "Two different brackets, two different jobs."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "dictionary",
        "def": "A collection of key-value pairs, written inside curly braces."
      },
      {
        "term": "key",
        "def": "The label you use to look up a value."
      },
      {
        "term": "value",
        "def": "The thing stored under a key."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Look up a value by its key",
        "runnable": true,
        "source": "sounds = {\"cat\": \"meow\", \"dog\": \"woof\"}\nprint(sounds[\"dog\"])"
      },
      {
        "language": "python",
        "caption": "Add a new pair, then read it back",
        "runnable": true,
        "source": "ages = {\"Ada\": 36}\nages[\"Grace\"] = 45\nprint(ages[\"Grace\"])"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Make a dictionary {'cat': 'meow'} and print the value stored under 'cat'.",
      "starter": "",
      "expectedOutput": "meow",
      "check": "equals",
      "hint": "Build it with `{'cat': 'meow'}`, then print `the_dict['cat']`."
    },
    "caseStudy": {
      "title": "Your phone's contacts app",
      "body": [
        "Your contacts are a dictionary: a name points to a number.",
        "You do not scroll to position 240 — you look up 'Mum'.",
        "The name is the key; the phone number is the value."
      ],
      "bridge": "Looking up `'cat'` to get `'meow'` is the same move as tapping a name to get a number."
    },
    "takeaways": [
      "A dictionary stores key-value pairs in `{ }`.",
      "You fetch a value by its key: `d['key']`.",
      "Each key is unique — one label, one value."
    ],
    "glossaryTerms": [
      "dictionary",
      "key",
      "value"
    ],
    "sources": [
      {
        "label": "Python docs — Dictionaries",
        "url": "https://docs.python.org/3/tutorial/datastructures.html#dictionaries"
      }
    ]
  },
  "py-m4-l4": {
    "id": "py-m4-l4",
    "trackId": "python",
    "moduleId": "py-m4",
    "order": 4,
    "estMinutes": 10,
    "title": "Putting Collections Together",
    "coreIdea": "Once data is in a collection, tools like `sum()` and `.values()` do the heavy lifting for you.",
    "plainEnglish": [
      "You now have two collections: lists for ordered items, dictionaries for labelled ones.",
      "Often you want a single answer out of them — like a total.",
      "A dictionary's `.values()` hands you just the values.",
      "`sum()` then adds them all up in one step. No loop needed."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A dictionary of prices is a basket of tagged items.",
        "`.values()` tips out just the price tags.",
        "`sum()` is the till that adds them into one total."
      ]
    },
    "deepSections": [
      {
        "title": "sum() needs values, not the whole dictionary",
        "teaser": "feed it the prices, not the labels",
        "body": [
          "Calling `sum(prices)` would try to add the keys, which are usually words.",
          "You want the numbers, so you pass `prices.values()`.",
          "The `.values()` after `prices` is the dictionary doing a job for you — the dot means 'ask `prices` for its values', just like `.append()` asked a list to add an item.",
          "`sum(prices.values())` adds every value and gives you the total."
        ]
      },
      {
        "title": "Choosing the right collection",
        "teaser": "order matters? list. labels matter? dictionary.",
        "body": [
          "If position matters — a queue, a ranking — reach for a list.",
          "If you look things up by name — prices, settings, scores by player — reach for a dictionary.",
          "Picking the right one makes the rest of your code simpler."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": ".values()",
        "def": "Gives you just the values from a dictionary, without their keys."
      },
      {
        "term": "sum()",
        "def": "Adds up all the numbers in a collection and returns the total."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Total a dictionary's values in one step",
        "runnable": true,
        "source": "prices = {\"coffee\": 4, \"cake\": 6}\nprint(sum(prices.values()))"
      },
      {
        "language": "python",
        "caption": "sum() works on a plain list too",
        "runnable": true,
        "source": "scores = [10, 20, 30]\nprint(sum(scores))"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Given prices = {'a': 2, 'b': 3}, print the total of all the values.",
      "starter": "",
      "expectedOutput": "5",
      "check": "equals",
      "hint": "Use `sum(prices.values())` to add up every value."
    },
    "caseStudy": {
      "title": "How a checkout shows your total",
      "body": [
        "An online cart, like Amazon's, stores items and their prices.",
        "To show the total, it sums all the price values.",
        "Same pattern, whether the cart has two items or two hundred."
      ],
      "bridge": "Summing `{'a': 2, 'b': 3}` to get `5` is exactly what a checkout does to your basket."
    },
    "takeaways": [
      "`.values()` pulls just the values out of a dictionary.",
      "`sum()` adds a collection of numbers in one step.",
      "Use a list for order, a dictionary for labels."
    ],
    "glossaryTerms": [
      "values-method",
      "sum"
    ],
    "sources": [
      {
        "label": "Python docs — sum()",
        "url": "https://docs.python.org/3/library/functions.html#sum"
      },
      {
        "label": "Python docs — dict.values()",
        "url": "https://docs.python.org/3/library/stdtypes.html#dict.values"
      }
    ]
  },
  "py-m5-l1": {
    "id": "py-m5-l1",
    "trackId": "python",
    "moduleId": "py-m5",
    "order": 1,
    "estMinutes": 9,
    "title": "Defining and Calling a Function",
    "coreIdea": "A function is a named block of code; `def` defines it, and using its name runs it.",
    "plainEnglish": [
      "A function is a chunk of code you give a name.",
      "You write it once with `def`, then run it later by calling its name.",
      "Defining a function does not run it. Calling it does.",
      "This lets you write a set of steps once and trigger them whenever you want."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a button on a microwave labelled \"Popcorn\".",
        "Someone set up what that button does once.",
        "After that, anyone just presses it — they do not rebuild the settings every time."
      ]
    },
    "deepSections": [
      {
        "title": "Defining is not the same as calling",
        "teaser": "writing the function vs. actually running it",
        "body": [
          "`def greet():` tells Python: here is a recipe called `greet`.",
          "Python reads it, remembers it, and moves on. Nothing prints yet.",
          "The function only runs when you write its name with parentheses: `greet()`.",
          "A common beginner surprise: you define a function, run the file, and nothing happens — because you never called it."
        ]
      },
      {
        "title": "The shape of a definition",
        "teaser": "def, a name, parentheses, a colon, and an indented body",
        "body": [
          "Start with `def`, then a name you choose, then `()` and a `:`.",
          "The lines that belong to the function are indented underneath.",
          "Indentation is how Python knows where the function starts and ends."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "function",
        "def": "A named block of code you can run whenever you want."
      },
      {
        "term": "def",
        "def": "The keyword that defines a new function."
      },
      {
        "term": "call",
        "def": "Running a function by writing its name followed by ()."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Define once, call twice — the second call is free",
        "runnable": true,
        "source": "def greet():\n    print(\"Welcome!\")\n\ngreet()\ngreet()"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Define a function called greet that prints hi, then call it once.",
      "starter": "",
      "expectedOutput": "hi",
      "check": "equals",
      "hint": "Write the function with def greet():, indent print(\"hi\") underneath, then call greet() on its own line."
    },
    "caseStudy": {
      "title": "Instagram's \"like\" button is one function, called billions of times",
      "body": [
        "When you tap the heart on a photo, the same function runs every time.",
        "Engineers wrote that \"record a like\" code once.",
        "It is then called for every user, on every post, around the world."
      ],
      "bridge": "Define a useful action once, call it as often as you need — that is exactly what you just did with greet()."
    },
    "takeaways": [
      "`def` defines a function; the indented lines are its body.",
      "Defining a function does not run it.",
      "Calling it by name — `greet()` — is what makes it run."
    ],
    "glossaryTerms": [
      "function",
      "def",
      "call"
    ],
    "sources": [
      {
        "label": "Python docs — Defining Functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      }
    ]
  },
  "py-m5-l2": {
    "id": "py-m5-l2",
    "trackId": "python",
    "moduleId": "py-m5",
    "order": 2,
    "estMinutes": 11,
    "title": "Inputs and Outputs: Arguments and return",
    "coreIdea": "Arguments pass information into a function; `return` hands a result back out.",
    "plainEnglish": [
      "Most functions take in some information and give back a result.",
      "The information you pass in is called an argument.",
      "The result the function hands back is created with `return`.",
      "Think of it as a machine: you feed something in, you get something out."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a vending machine.",
        "You put in money and a code — those are the inputs.",
        "It hands you a snack — that is the return value."
      ]
    },
    "deepSections": [
      {
        "title": "print() shows; return gives back",
        "teaser": "they look similar but do very different jobs",
        "body": [
          "`print()` displays text on the screen for a human to read.",
          "`return` hands a value back to the code that called the function.",
          "A returned value can be stored in a variable, added to something, or printed later.",
          "If a function only prints and never returns, you cannot do further math with its result."
        ]
      },
      {
        "title": "Parameters vs. arguments",
        "teaser": "the names in the def vs. the values you pass in",
        "body": [
          "In `def add(a, b):`, the `a` and `b` are parameters — placeholders.",
          "In `add(2, 3)`, the `2` and `3` are arguments — the real values.",
          "When the function runs, `a` becomes `2` and `b` becomes `3`."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "argument",
        "def": "A value you pass into a function when you call it."
      },
      {
        "term": "parameter",
        "def": "A named placeholder in the function definition that receives an argument."
      },
      {
        "term": "return",
        "def": "Hands a result back to the code that called the function."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "The function returns a value; we capture it in a variable",
        "runnable": true,
        "source": "def add(a, b):\n    return a + b\n\ntotal = add(10, 5)\nprint(total)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Write a function add(a, b) that returns a + b. Print the result of add(2, 3).",
      "starter": "",
      "expectedOutput": "5",
      "check": "equals",
      "hint": "Inside the function use return a + b, then print(add(2, 3))."
    },
    "caseStudy": {
      "title": "Google Sheets' SUM is a function with arguments and a return",
      "body": [
        "When you type =SUM(B2, B3) in a spreadsheet, you pass two arguments in.",
        "The function adds them and returns one number to the cell.",
        "Behind the scenes, that is the same idea as add(2, 3)."
      ],
      "bridge": "You just built your own tiny SUM: arguments in, a returned answer out."
    },
    "takeaways": [
      "Arguments carry information into a function.",
      "`return` hands a result back out.",
      "`return` is different from `print()` — one gives back a value, the other just shows text."
    ],
    "glossaryTerms": [
      "argument",
      "parameter",
      "return"
    ],
    "sources": [
      {
        "label": "Python docs — More on Defining Functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#more-on-defining-functions"
      }
    ]
  },
  "py-m5-l3": {
    "id": "py-m5-l3",
    "trackId": "python",
    "moduleId": "py-m5",
    "order": 3,
    "estMinutes": 10,
    "title": "Reuse and Not Repeating Yourself",
    "coreIdea": "Functions let you write logic once and reuse it everywhere, instead of copying the same code.",
    "plainEnglish": [
      "Copying and pasting the same code is risky.",
      "If you need to fix it, you have to fix every copy.",
      "A function lets you write that logic once and call it everywhere.",
      "Programmers call this DRY: Don't Repeat Yourself."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine handwriting the same letter to 50 people.",
        "Miss a typo, and you must redo all 50.",
        "A function is the printed template: fix it once, every copy improves."
      ]
    },
    "deepSections": [
      {
        "title": "Why DRY saves you from bugs",
        "teaser": "one fix in one place beats fifty fixes in fifty places",
        "body": [
          "Say you square numbers in ten spots by writing `n * n` each time.",
          "Later you decide squaring should also print a message.",
          "With copied code, you change ten lines and probably miss one.",
          "With a `square(n)` function, you change one place and every caller updates."
        ]
      },
      {
        "title": "A good function name reads like its job",
        "teaser": "square(4) tells you what it does at a glance",
        "body": [
          "`square(4)` is easier to read than `4 * 4` scattered through your code.",
          "The name documents the intent.",
          "Future you — and your teammates — can read it without decoding the math."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "DRY",
        "def": "\"Don't Repeat Yourself\" — write logic once and reuse it."
      },
      {
        "term": "reuse",
        "def": "Calling the same function many times instead of rewriting its code."
      },
      {
        "term": "duplication",
        "def": "Copies of the same code that must all be kept in sync."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "One function, reused on three different numbers",
        "runnable": true,
        "source": "def square(n):\n    return n * n\n\nprint(square(2))\nprint(square(5))\nprint(square(9))"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Write a function square(n) that returns n times n. Print square(4).",
      "starter": "",
      "expectedOutput": "16",
      "check": "equals",
      "hint": "Use return n * n inside the function, then print(square(4))."
    },
    "caseStudy": {
      "title": "Stripe charges every business with the same payment function",
      "body": [
        "Stripe processes payments for millions of companies.",
        "It does not write fresh \"charge a card\" code for each one.",
        "One well-tested function is reused for every transaction — so a fix protects everyone at once."
      ],
      "bridge": "Writing square(n) once and reusing it is the same instinct that keeps huge systems safe and consistent."
    },
    "takeaways": [
      "Copy-pasted code is duplication you have to maintain in many places.",
      "A function lets you write logic once and reuse it.",
      "DRY means one place to fix, one place to improve."
    ],
    "glossaryTerms": [
      "dry",
      "reuse",
      "duplication"
    ],
    "sources": [
      {
        "label": "Python docs — Defining Functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      }
    ]
  },
  "py-m5-l4": {
    "id": "py-m5-l4",
    "trackId": "python",
    "moduleId": "py-m5",
    "order": 4,
    "estMinutes": 11,
    "title": "Using Libraries: import",
    "coreIdea": "`import` brings in ready-made code so you can use functions other people already wrote.",
    "plainEnglish": [
      "You do not have to build everything yourself.",
      "Python comes with libraries — bundles of useful functions.",
      "`import` pulls a library into your program.",
      "Then you reach its functions with a dot, like `math.sqrt`."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A library is a toolbox someone else already filled.",
        "`import math` is opening that toolbox on your bench.",
        "`math.isqrt(16)` is picking out the exact tool you need."
      ]
    },
    "deepSections": [
      {
        "title": "The dot connects the library to its function",
        "teaser": "math.isqrt means \"the isqrt function inside math\"",
        "body": [
          "After `import math`, the library's functions live under its name.",
          "You reach them with a dot: `math.sqrt`, `math.isqrt`, `math.pi`.",
          "The dot says: look inside `math` and use this piece."
        ]
      },
      {
        "title": "sqrt vs. isqrt: why we use isqrt here",
        "teaser": "one gives a decimal, the other a whole number",
        "body": [
          "`math.sqrt(16)` returns `4.0` — a decimal number.",
          "`math.isqrt(16)` returns `4` — a plain whole number (integer).",
          "When you want a clean whole number with no `.0`, `isqrt` is the right tool."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "library",
        "def": "A bundle of ready-made functions you can pull into your program."
      },
      {
        "term": "import",
        "def": "The keyword that brings a library into your code."
      },
      {
        "term": "math module",
        "def": "Python's built-in library of mathematical functions."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Import once, then reach inside with a dot",
        "runnable": true,
        "source": "import math\n\nprint(math.isqrt(25))\nprint(math.isqrt(81))"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Import the math library and print the whole-number square root of 16.",
      "starter": "",
      "expectedOutput": "4",
      "check": "equals",
      "hint": "Use import math, then print(math.isqrt(16)) for a whole-number result."
    },
    "caseStudy": {
      "title": "Data scientists import NumPy instead of reinventing math",
      "body": [
        "NumPy is a library used across science, finance, and AI.",
        "Researchers import it to do heavy math in a single line.",
        "Nobody rewrites square roots or averages from scratch — they import proven tools."
      ],
      "bridge": "Typing import math is the first step toward the same superpower the pros use every day."
    },
    "takeaways": [
      "Libraries are bundles of functions other people already wrote.",
      "`import` brings a library into your program.",
      "Reach a library's functions with a dot, like `math.isqrt`."
    ],
    "glossaryTerms": [
      "library",
      "import",
      "math-module"
    ],
    "sources": [
      {
        "label": "Python docs — math module",
        "url": "https://docs.python.org/3/library/math.html"
      },
      {
        "label": "Python docs — import statement",
        "url": "https://docs.python.org/3/reference/import.html"
      }
    ]
  },
  "py-m6-l1": {
    "id": "py-m6-l1",
    "trackId": "python",
    "moduleId": "py-m6",
    "order": 1,
    "estMinutes": 10,
    "title": "Reading and Writing Files",
    "coreIdea": "A program forgets everything when it stops; saving to a file lets it remember.",
    "plainEnglish": [
      "When your program ends, the values it held vanish.",
      "A file is how a program writes something down to keep.",
      "`open()` opens a file. You can write to it or read from it.",
      "Write once, and the text stays on disk. Read it back later, even after the program restarts.",
      "In this in-browser playground each run starts fresh, so write and read the file in the same run. On a real computer the file would still be there tomorrow."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Variables are like notes you hold in your hand.",
        "When you leave the room, those notes are gone.",
        "A file is a notebook on the desk. You write it down, close it, and it is still there tomorrow."
      ]
    },
    "deepSections": [
      {
        "title": "What \"w\" and \"r\" mean",
        "teaser": "the second argument is the mode",
        "body": [
          "`open(\"note.txt\", \"w\")` opens the file for writing. The `\"w\"` means write.",
          "Writing replaces whatever was there before — it starts the file fresh.",
          "`open(\"note.txt\", \"r\")` opens it for reading. The `\"r\"` means read.",
          "Get the mode wrong and Python will not let you do the other thing."
        ]
      },
      {
        "title": "Why `with` is the safe way",
        "teaser": "it closes the file for you",
        "body": [
          "An open file needs to be closed, or the text may not finish saving.",
          "The line `with open(...) as f:` opens the file and gives it the name `f`.",
          "When the indented block ends, Python closes the file automatically.",
          "This is the habit professionals use, so you never forget to close."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "file",
        "def": "A place on disk where a program saves text to keep it."
      },
      {
        "term": "open()",
        "def": "Opens a file so you can read from it or write to it."
      },
      {
        "term": "mode",
        "def": "The setting that says what you want to do: \"w\" to write, \"r\" to read."
      },
      {
        "term": "with",
        "def": "A safe way to open a file that closes it for you when the block ends."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Write a line, then read it straight back",
        "runnable": true,
        "source": "with open(\"diary.txt\", \"w\") as f:\n    f.write(\"Today I learned files.\")\n\nwith open(\"diary.txt\", \"r\") as f:\n    print(f.read())"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Write the text saved to a file, then read the file back and print its contents.",
      "expectedOutput": "saved",
      "starter": "",
      "check": "equals",
      "hint": "Use open(name, \"w\") to write \"saved\", then open(name, \"r\") and print(f.read())."
    },
    "caseStudy": {
      "title": "How Spotify remembers your playlists",
      "body": [
        "Close the Spotify app and your playlists are still there when you return.",
        "That is because they are written to storage, not held in memory.",
        "Every app that remembers anything — notes, scores, settings — saves it to a file or database first."
      ],
      "bridge": "You just did the same thing at the smallest scale: write it down, read it back, remember it."
    },
    "takeaways": [
      "Programs forget when they stop; files let them remember.",
      "`open()` with `\"w\"` writes; with `\"r\"` reads.",
      "Use `with open(...)` so the file closes itself safely."
    ],
    "glossaryTerms": [
      "file",
      "open",
      "file-mode",
      "with-statement"
    ],
    "sources": [
      {
        "label": "Python docs — Reading and Writing Files",
        "url": "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files"
      }
    ]
  },
  "py-m6-l2": {
    "id": "py-m6-l2",
    "trackId": "python",
    "moduleId": "py-m6",
    "order": 2,
    "estMinutes": 9,
    "title": "The Standard Library",
    "coreIdea": "Python ships with ready-made tools you can use just by importing them.",
    "plainEnglish": [
      "You do not have to build everything from scratch.",
      "Python comes with a big set of free tools called the standard library.",
      "Each tool is a module you bring in with `import`.",
      "`datetime` handles dates. `math` handles numbers. `random` picks random things. They are already installed."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine buying a kitchen that already has every tool in the drawers.",
        "You do not forge your own whisk — you just open the drawer.",
        "`import datetime` is opening the drawer marked \"dates\"."
      ]
    },
    "deepSections": [
      {
        "title": "Two ways to import",
        "teaser": "the whole module, or just one piece",
        "body": [
          "`import datetime` brings in the whole module. Then you write `datetime.date(...)`.",
          "`from datetime import date` brings in just the `date` piece. Then you write `date(...)`.",
          "Both work. The second is shorter when you only need one thing.",
          "\"Batteries included\" is the phrase Python uses for this: the useful parts come in the box."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "standard library",
        "def": "The big set of tools that comes built into Python."
      },
      {
        "term": "module",
        "def": "A bundle of related tools you bring in with `import`."
      },
      {
        "term": "import",
        "def": "The keyword that loads a module so you can use it."
      },
      {
        "term": "datetime",
        "def": "The built-in module for working with dates and times."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Borrow tools instead of building them",
        "runnable": true,
        "source": "import math\nfrom datetime import date\n\nprint(math.sqrt(81))\nprint(date(2020, 7, 15))"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "From the datetime library, create the date 1 January 2020 and print its year.",
      "expectedOutput": "2020",
      "starter": "",
      "check": "equals",
      "hint": "Use from datetime import date, build date(2020, 1, 1), then print its .year."
    },
    "caseStudy": {
      "title": "Instagram runs on Python's batteries",
      "body": [
        "Instagram is one of the largest Python applications in the world.",
        "Its engineers lean heavily on the standard library for everyday tasks like dates and files.",
        "Reaching for built-in tools instead of reinventing them is how real teams move fast."
      ],
      "bridge": "You just reached into the same toolbox a billion-user app uses every day."
    },
    "takeaways": [
      "Python comes with a huge standard library, already installed.",
      "`import` loads a module so you can use its tools.",
      "`datetime` gives you dates without any extra setup."
    ],
    "glossaryTerms": [
      "standard-library",
      "module",
      "import",
      "datetime"
    ],
    "sources": [
      {
        "label": "Python docs — The Python Standard Library",
        "url": "https://docs.python.org/3/library/index.html"
      }
    ]
  },
  "py-m6-l3": {
    "id": "py-m6-l3",
    "trackId": "python",
    "moduleId": "py-m6",
    "order": 3,
    "estMinutes": 9,
    "title": "A First Taste of an AI Function",
    "coreIdea": "An AI model is, at heart, a function: text goes in, a prediction comes out.",
    "plainEnglish": [
      "AI can feel like magic. Under the hood, it has a familiar shape.",
      "A model takes an input and returns an output. That is a function.",
      "You give it text; it gives back a prediction.",
      "We will fake the model with a simple function so you can see the shape clearly — no real AI needed."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a vending machine.",
        "You put something in the slot; something comes out the bottom.",
        "A model is the same: input in, prediction out. Today our \"model\" just shouts the text back in capitals."
      ]
    },
    "deepSections": [
      {
        "title": "Why call it a stand-in",
        "teaser": "same shape, no real intelligence",
        "body": [
          "A real model like the one behind ChatGPT takes text and returns text.",
          "Our `predict(text)` does that too — it just uses `.upper()` instead of billions of calculations.",
          "The point is the interface: one input, one returned answer.",
          "Once you can call a function and use its result, calling a real AI model later works exactly the same way."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "function",
        "def": "A reusable block of code that takes an input and returns an output."
      },
      {
        "term": "predict()",
        "def": "Our pretend model: text goes in, an answer comes back."
      },
      {
        "term": "return",
        "def": "Sends a value back out of a function to whoever called it."
      },
      {
        "term": ".upper()",
        "def": "Turns a string into UPPERCASE letters."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "A tiny \"model\" that returns a prediction",
        "runnable": true,
        "source": "def predict(text):\n    return text.upper()\n\nprint(predict(\"hello\"))\nprint(predict(\"models are functions\"))"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Write a function predict(text) that returns the text in UPPERCASE (a stand-in for a model). Print predict(\"ai\").",
      "expectedOutput": "AI",
      "starter": "",
      "check": "equals",
      "hint": "Define predict(text) that returns text.upper(), then print(predict(\"ai\"))."
    },
    "caseStudy": {
      "title": "Calling GPT is calling a function",
      "body": [
        "When engineers use OpenAI's API, they call something like `client.responses.create(input=...)`.",
        "Text goes in; a predicted response comes back — the exact shape you just built.",
        "The real model is vastly more capable, but the way you talk to it is this simple."
      ],
      "bridge": "You wrote a function that takes input and returns a prediction. That is how every AI model is used."
    },
    "takeaways": [
      "A model is a function: input in, prediction out.",
      "`return` hands the answer back to the caller.",
      "Master calling functions and you can call real AI models the same way."
    ],
    "glossaryTerms": [
      "function",
      "predict",
      "return",
      "upper-method"
    ],
    "sources": [
      {
        "label": "Python docs — Defining Functions",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#defining-functions"
      }
    ]
  },
  "py-m6-l4": {
    "id": "py-m6-l4",
    "trackId": "python",
    "moduleId": "py-m6",
    "order": 4,
    "estMinutes": 9,
    "title": "Putting It All Together",
    "coreIdea": "Real programs combine variables, lists, and calculations into one small machine.",
    "plainEnglish": [
      "Each idea you have learned is a building block.",
      "A real program snaps several blocks together.",
      "Here we store numbers in a list, add them up, and divide to get an average.",
      "Add up with `sum()`, count with `len()`, divide — that is an average."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "One brick is not a wall.",
        "A program is the wall: many simple bricks placed in order.",
        "Variables, a list, and a calculation stacked together do something useful."
      ]
    },
    "deepSections": [
      {
        "title": "sum() and len(), the two helpers",
        "teaser": "total over count is an average",
        "body": [
          "`sum(scores)` adds every number in the list together.",
          "`len(scores)` counts how many numbers are in the list.",
          "Divide the total by the count and you have the average.",
          "Notice the answer is `20.0`, not `20`. Division in Python always gives a decimal."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "list",
        "def": "An ordered collection of values, written inside square brackets."
      },
      {
        "term": "sum()",
        "def": "Adds together all the numbers in a list."
      },
      {
        "term": "len()",
        "def": "Counts how many items are in a list."
      },
      {
        "term": "average",
        "def": "The total divided by the count."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Combine a list and a calculation",
        "runnable": true,
        "source": "prices = [4, 6, 8, 2]\ntotal = sum(prices)\ncount = len(prices)\nprint(total / count)"
      }
    ],
    "challenge": {
      "language": "python",
      "prompt": "Given scores = [10, 20, 30], compute and print the average.",
      "expectedOutput": "20.0",
      "starter": "",
      "check": "equals",
      "hint": "Average is sum(scores) divided by len(scores) — then print it."
    },
    "caseStudy": {
      "title": "How a fitness app shows your weekly average",
      "body": [
        "Apps like Strava store your runs as a list of numbers.",
        "To show your average pace, they sum those numbers and divide by the count.",
        "It is the same three blocks you just used: a list, a sum, a division."
      ],
      "bridge": "You combined variables, a list, and a calculation — the core of nearly every program ever written."
    },
    "takeaways": [
      "Programs combine simple blocks into something useful.",
      "`sum()` totals a list; `len()` counts it.",
      "Total divided by count gives the average — and Python returns a decimal."
    ],
    "glossaryTerms": [
      "list",
      "sum",
      "len",
      "average"
    ],
    "sources": [
      {
        "label": "Python docs — Built-in Functions",
        "url": "https://docs.python.org/3/library/functions.html"
      }
    ]
  },
  "java-m1-l1": {
    "id": "java-m1-l1",
    "trackId": "java",
    "moduleId": "java-m1",
    "order": 1,
    "estMinutes": 10,
    "title": "Your First Program: Hello from Java",
    "coreIdea": "Java displays text with `System.out.println()`, wrapped in a little required structure.",
    "plainEnglish": [
      "Like Python, a Java program runs instructions in order.",
      "Java's way to display text is `System.out.println()`. It means: print this line to the output.",
      "Java also needs some structure around your instruction: a class and a `main` method.",
      "For now, treat that structure as a frame you write once. Your real instruction lives inside it.",
      "Every instruction in Java ends with a semicolon `;`. It tells Java that one statement is finished, like a full stop ends a sentence.",
      "The words `public static void` and `(String[] args)` are part of the required frame. You'll meet each later — for now, copy them exactly and focus on the line inside."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Java is the formal cousin of Python.",
        "Python lets you scribble a quick note. Java insists on official letterhead.",
        "The fuss feels like a lot at first. But that structure is exactly why big companies trust Java for huge systems: everything has its place."
      ]
    },
    "deepSections": [
      {
        "title": "The structure, decoded",
        "teaser": "class, main, and the curly braces — one line each",
        "body": [
          "Do not memorise this yet. Just meet the pieces.",
          "Think of it as an envelope. The `System.out.println(...)` line is the letter inside.",
          "Each part has one job — see the key terms below."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "public class Main",
        "def": "Names your program."
      },
      {
        "term": "{ }",
        "def": "Curly braces group the code that belongs together."
      },
      {
        "term": "main",
        "def": "The line Java runs first when the program starts."
      },
      {
        "term": "System.out.println()",
        "def": "Displays one line of text on the screen."
      },
      {
        "term": ";",
        "def": "A semicolon ends each Java statement, the way a full stop ends a sentence. Forgetting it is the most common beginner error."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Run it, then change the message inside the quotes",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n        System.out.println(\"Java is running too.\");\n    }\n}"
      }
    ],
    "caseStudy": {
      "title": "Why Android and banks run on Java",
      "body": [
        "Java promised \"write once, run anywhere\".",
        "That, plus its strict structure, made it the backbone of enterprise software.",
        "It was also the original language of Android apps — billions of devices."
      ],
      "bridge": "The extra structure is not busywork. It is the discipline that lets Java scale to enormous systems. You just wrote your first piece of it."
    },
    "takeaways": [
      "Java displays text with `System.out.println()`.",
      "Your instructions live inside a class and a `main` method.",
      "The structure feels heavier than Python — and that is the point: it scales."
    ],
    "challenge": {
      "language": "java",
      "prompt": "Finish the program so it prints the greeting. The frame is written for you — add the line inside main.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // write your line here\n    }\n}",
      "expectedOutput": "Hello, Java!",
      "check": "equals",
      "hint": "Use System.out.println(\"Hello, Java!\"); inside main."
    },
    "glossaryTerms": [
      "class",
      "main-method",
      "println"
    ],
    "sources": [
      {
        "label": "Oracle — A Closer Look at HelloWorld",
        "url": "https://docs.oracle.com/javase/tutorial/getStarted/application/index.html"
      }
    ]
  },
  "java-m1-l2": {
    "id": "java-m1-l2",
    "trackId": "java",
    "moduleId": "java-m1",
    "order": 2,
    "estMinutes": 10,
    "title": "Variables and Types",
    "coreIdea": "A variable is a labelled box that holds a value, and in Java you must say what type of value goes in it.",
    "plainEnglish": [
      "A variable is a named place to store a value so you can use it later.",
      "Java is a typed language. Before you store a value, you say what kind it is.",
      "An `int` holds whole numbers. A `double` holds decimals. A `String` holds text. A `boolean` holds true or false.",
      "You declare a variable by writing the type, then the name, then the value: `int x = 9;`.",
      "Once it has a type, that box can only hold that kind of value."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of labelled boxes in a warehouse.",
        "Each box has a name (`x`) and a label saying what may go inside (`int` = whole numbers only).",
        "Try to put a sentence in the whole-numbers box, and Java refuses before you even run."
      ]
    },
    "deepSections": [
      {
        "title": "The four types you'll use most",
        "teaser": "int, double, String, boolean — one job each",
        "body": [
          "`int` is for whole numbers, like `9` or `-4`.",
          "`double` is for numbers with a decimal point, like `3.14`.",
          "`String` is for text, written in double quotes, like `\"Sam\"`.",
          "`boolean` is for a yes/no value: only `true` or `false`.",
          "Pick the type that matches the data, and Java helps catch mistakes for you."
        ]
      },
      {
        "title": "Why Java makes you name the type",
        "teaser": "the type is a promise the compiler checks",
        "body": [
          "Python lets you skip the type and guesses as it runs.",
          "Java asks for it up front. That extra word is a promise about what the box holds.",
          "Because Java knows the type before running, it can warn you about a whole class of bugs early — a big reason large teams trust it."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "variable",
        "def": "A named box that stores a value you can use later."
      },
      {
        "term": "type",
        "def": "The kind of value a variable holds, declared before the name."
      },
      {
        "term": "int",
        "def": "A type for whole numbers, like 9 or -4."
      },
      {
        "term": "declare",
        "def": "To create a variable by giving its type, name, and value."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "One box per type — run it and watch each print",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int age = 30;\n        double price = 4.50;\n        String city = \"Sydney\";\n        boolean isOpen = true;\n        System.out.println(age);\n        System.out.println(price);\n        System.out.println(city);\n        System.out.println(isOpen);\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Inside main, declare an int called x set to 9, then print x.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "9",
      "check": "equals",
      "hint": "Write int x = 9; then System.out.println(x);"
    },
    "caseStudy": {
      "title": "How a banking app keeps cents straight",
      "body": [
        "A bank's balance is a number, a customer's name is text, and \"account frozen?\" is a yes/no flag.",
        "Java code at banks like JPMorgan declares each as a type — a number, a `String`, a `boolean`.",
        "Because the types are fixed, you can't accidentally add a name to a balance."
      ],
      "bridge": "The type you wrote on `int x` is the same discipline that keeps real money safe in production systems."
    },
    "takeaways": [
      "A variable is a named box for a value.",
      "Java is typed: you state `int`, `double`, `String`, or `boolean` before the name.",
      "Declare with type, then name, then value: `int x = 9;`."
    ],
    "glossaryTerms": [
      "variable",
      "type",
      "int",
      "double",
      "boolean"
    ],
    "sources": [
      {
        "label": "Oracle — Variables",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html"
      },
      {
        "label": "Oracle — Primitive Data Types",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
      }
    ]
  },
  "java-m1-l3": {
    "id": "java-m1-l3",
    "trackId": "java",
    "moduleId": "java-m1",
    "order": 3,
    "estMinutes": 10,
    "title": "Numbers and Math",
    "coreIdea": "Java does arithmetic with `+ - * /`, but dividing two whole numbers throws away the remainder.",
    "plainEnglish": [
      "Java can do maths like a calculator: add, subtract, multiply, and divide.",
      "The symbols are `+`, `-`, `*` for times, and `/` for divide.",
      "Whole numbers are `int`. Numbers with a decimal point are `double`.",
      "Watch out: dividing one `int` by another `int` drops the part after the decimal.",
      "So `7 / 2` gives `3`, not `3.5`. This surprises almost everyone once."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of sharing whole apples with `int` division.",
        "Seven apples split between two people: each gets 3, and the leftover apple is ignored.",
        "Use a `double` (`7.0 / 2`) when you care about the half."
      ]
    },
    "deepSections": [
      {
        "title": "The integer-division gotcha",
        "teaser": "int / int = int — the decimals vanish",
        "body": [
          "When both sides of `/` are whole numbers, Java keeps the answer whole.",
          "`9 / 4` is `2`, because it throws away the `.25`.",
          "To get `2.25`, make one side a decimal: `9.0 / 4`.",
          "This is not a bug. It is Java staying true to the types you gave it."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "arithmetic",
        "def": "Doing maths with operators like + - * /."
      },
      {
        "term": "operator",
        "def": "A symbol that combines values, such as * for multiply."
      },
      {
        "term": "integer division",
        "def": "Dividing two whole numbers and discarding the remainder."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "The same division, two ways — run it and compare",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(8 * 5);\n        System.out.println(9 / 4);\n        System.out.println(9.0 / 4);\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Print the result of 8 * 5.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "40",
      "check": "equals",
      "hint": "Put 8 * 5 directly inside System.out.println( )."
    },
    "caseStudy": {
      "title": "Splitting a bill in a payments app",
      "body": [
        "Apps like Splitwise divide a total bill among friends.",
        "If they used `int` division, $10 split three ways would show $3 and quietly lose a dollar.",
        "They use decimal types so the cents add back up correctly."
      ],
      "bridge": "Knowing that `int / int` drops the remainder is exactly the trap real money apps must avoid."
    },
    "takeaways": [
      "Java's maths operators are `+`, `-`, `*`, and `/`.",
      "`int / int` throws away the decimal part.",
      "Use a `double` like `9.0 / 4` when you need the fraction."
    ],
    "glossaryTerms": [
      "arithmetic",
      "operator",
      "integer-division",
      "double",
      "int"
    ],
    "sources": [
      {
        "label": "Oracle — Arithmetic Operators",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op1.html"
      },
      {
        "label": "Oracle — Primitive Data Types",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html"
      }
    ]
  },
  "java-m1-l4": {
    "id": "java-m1-l4",
    "trackId": "java",
    "moduleId": "java-m1",
    "order": 4,
    "estMinutes": 10,
    "title": "Strings in Java",
    "coreIdea": "A `String` holds text, and the `+` sign glues two pieces of text together.",
    "plainEnglish": [
      "A `String` is text: a name, a sentence, anything in double quotes.",
      "You store it like any variable: `String name = \"Sam\";`.",
      "To join text together, use `+`. This is called concatenation.",
      "`\"Hi, \" + name` builds the single text `Hi, Sam`.",
      "You can keep gluing with more `+` signs: `\"Welcome aboard, \" + name + \"!\"` joins three pieces in order. The quoted parts are literal text; `name` with no quotes is replaced by the value stored in it.",
      "Mind the spaces inside the quotes — Java glues exactly what you wrote."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of words printed on strips of paper.",
        "The `+` is tape that joins two strips into one longer strip.",
        "If you want a gap between words, you tape in the space yourself: `\"Hi, \"`."
      ]
    },
    "deepSections": [
      {
        "title": "Concatenation, and the missing-space trap",
        "teaser": "the + only adds what you put inside the quotes",
        "body": [
          "`+` between two strings sticks them together with nothing extra.",
          "`\"Hi,\" + \"Sam\"` gives `Hi,Sam` — no space, because you never typed one.",
          "Add the space inside the quotes: `\"Hi, \" + \"Sam\"` gives `Hi, Sam`.",
          "Java is literal. It glues exactly the characters you wrote, spaces included."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "String",
        "def": "A piece of text, written inside double quotes."
      },
      {
        "term": "concatenation",
        "def": "Joining two strings into one using +."
      },
      {
        "term": "double quotes",
        "def": "The \" marks that wrap text in Java."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Glue text together with + — note the space inside the quotes",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        String name = \"Sam\";\n        System.out.println(\"Hi, \" + name);\n        System.out.println(\"Welcome aboard, \" + name + \"!\");\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Declare a String name set to Sam, then print: Hi, Sam",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "Hi, Sam",
      "check": "equals",
      "hint": "Use String name = \"Sam\"; then System.out.println(\"Hi, \" + name);"
    },
    "caseStudy": {
      "title": "How an email greeting gets your name",
      "body": [
        "Marketing tools like Mailchimp send \"Hi, Sam\" to thousands of people at once.",
        "They store your name as a `String` and concatenate it into a template.",
        "One line of text plus your name produces a personal-feeling greeting."
      ],
      "bridge": "The `\"Hi, \" + name` you just wrote is the exact trick behind every personalised email you receive."
    },
    "takeaways": [
      "A `String` holds text inside double quotes.",
      "`+` joins strings together — this is concatenation.",
      "Spaces only appear if you type them inside the quotes."
    ],
    "glossaryTerms": [
      "string",
      "concatenation",
      "double-quotes",
      "variable"
    ],
    "sources": [
      {
        "label": "Oracle — Strings",
        "url": "https://docs.oracle.com/javase/tutorial/java/data/strings.html"
      },
      {
        "label": "Oracle — Concatenating Strings",
        "url": "https://docs.oracle.com/javase/tutorial/java/data/strings.html"
      }
    ]
  },
  "java-m2-l1": {
    "id": "java-m2-l1",
    "trackId": "java",
    "moduleId": "java-m2",
    "order": 1,
    "estMinutes": 10,
    "title": "if and else",
    "coreIdea": "An `if` runs a block of code only when a condition is true; `else` runs when it is not.",
    "plainEnglish": [
      "Programs often need to make a choice.",
      "An `if` checks a question that is either true or false.",
      "If the answer is true, Java runs the code in the braces right after it.",
      "Add an `else` to say what to do when the answer is false.",
      "Only one of the two blocks ever runs — never both."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a bouncer at a door.",
        "The rule is: \"18 or older? Come in. Otherwise, turn away.\"",
        "`if` is the bouncer checking the rule; `else` is what happens to everyone who fails it."
      ]
    },
    "deepSections": [
      {
        "title": "Why Java needs the braces",
        "teaser": "the { } decide exactly which lines belong to the choice",
        "body": [
          "After `if (...)`, Java runs the block inside the curly braces `{ }`.",
          "Everything between those braces is the \"true\" branch.",
          "Code after the closing brace runs no matter what — it is outside the choice.",
          "The braces are how Java knows where the decision starts and stops."
        ]
      },
      {
        "title": "The shape of a full if/else",
        "teaser": "condition, true-block, else, false-block",
        "body": [
          "You write `if (condition) { ... } else { ... }`.",
          "The condition goes in round brackets and must be true or false.",
          "The first block is for true; the `else` block is for false.",
          "Java picks exactly one block and skips the other."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "if",
        "def": "Runs a block of code only when its condition is true."
      },
      {
        "term": "else",
        "def": "Runs a block of code when the if condition is false."
      },
      {
        "term": "condition",
        "def": "A question in round brackets that is either true or false."
      },
      {
        "term": ">=",
        "def": "\"Greater than or equal to\" — true when the left value is at least the right value."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Change the temperature and run again to see the other branch",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int temperature = 30;\n        if (temperature >= 25) {\n            System.out.println(\"hot\");\n        } else {\n            System.out.println(\"mild\");\n        }\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Inside main, set int age = 20. Print adult if age >= 18, otherwise print minor.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "adult",
      "check": "equals",
      "hint": "Write if (age >= 18) { ... } else { ... } and put a System.out.println in each block."
    },
    "caseStudy": {
      "title": "How Gmail decides what is spam",
      "body": [
        "Every email Gmail receives faces a decision.",
        "Simplified, it is one giant `if`: does this message look like spam?",
        "If yes, it goes to the Spam folder; if no, it lands in your inbox."
      ],
      "bridge": "That folder choice is the same `if`/`else` you just wrote — only with a smarter condition."
    },
    "takeaways": [
      "`if` runs its block only when the condition is true.",
      "`else` covers the false case — exactly one block runs.",
      "The curly braces `{ }` mark which lines belong to the choice."
    ],
    "glossaryTerms": [
      "if",
      "else",
      "condition",
      "greater-than-or-equal"
    ],
    "sources": [
      {
        "label": "Oracle — The if-then and if-then-else Statements",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/if.html"
      }
    ]
  },
  "java-m2-l2": {
    "id": "java-m2-l2",
    "trackId": "java",
    "moduleId": "java-m2",
    "order": 2,
    "estMinutes": 9,
    "title": "Comparisons and Booleans",
    "coreIdea": "Comparing two values gives a boolean — a value that is always either `true` or `false`.",
    "plainEnglish": [
      "A comparison asks a yes-or-no question about values.",
      "`5 > 2` asks: is 5 greater than 2?",
      "The answer is a boolean: either `true` or `false`.",
      "These are the questions an `if` uses to decide what to do.",
      "You can even print a boolean to see the answer directly."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a light switch with only two positions.",
        "Every comparison flips the switch to either `true` or `false`.",
        "There is no \"maybe\" — it is always one or the other."
      ]
    },
    "deepSections": [
      {
        "title": "The comparison operators",
        "teaser": "greater, less, equal — and the two-equals trap",
        "body": [
          "`>` is greater than, `<` is less than.",
          "`>=` is greater-or-equal, `<=` is less-or-equal.",
          "`==` (two equals signs) asks \"are these equal?\".",
          "A single `=` means \"assign\", not \"compare\" — mixing them up is a classic beginner bug."
        ]
      },
      {
        "title": "What boolean really means",
        "teaser": "a type that holds only true or false",
        "body": [
          "`boolean` is a Java type, like `int`.",
          "An `int` can hold many numbers; a `boolean` can hold only `true` or `false`.",
          "Every comparison produces a boolean.",
          "That is why an `if (...)` always knows whether to run: it is handed a true or a false."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "boolean",
        "def": "A value that is either true or false — nothing else."
      },
      {
        "term": ">",
        "def": "\"Greater than\" — true when the left value is bigger than the right."
      },
      {
        "term": "==",
        "def": "Two equals signs: asks whether two values are equal."
      },
      {
        "term": "true / false",
        "def": "The only two boolean values in Java."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Each line prints a boolean — try changing the numbers",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 > 3);\n        System.out.println(4 == 5);\n        System.out.println(7 <= 7);\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Print whether 5 is greater than 2 (it should print true or false).",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "true",
      "check": "equals",
      "hint": "Put the comparison 5 > 2 directly inside System.out.println(...)."
    },
    "caseStudy": {
      "title": "The boolean behind every online filter",
      "body": [
        "When you filter an online store for \"price under $50\", each product gets checked.",
        "Behind the scenes it is a comparison: `price < 50`.",
        "Products where that boolean is `true` are shown; the `false` ones are hidden."
      ],
      "bridge": "Every filter you have ever used is millions of these true/false comparisons running at once."
    },
    "takeaways": [
      "A comparison always produces a boolean: `true` or `false`.",
      "`==` compares; a single `=` assigns — keep them straight.",
      "Booleans are the answers that `if` statements depend on."
    ],
    "glossaryTerms": [
      "boolean",
      "comparison-operator",
      "equality-operator",
      "greater-than"
    ],
    "sources": [
      {
        "label": "Oracle — Equality, Relational, and Conditional Operators",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/op2.html"
      }
    ]
  },
  "java-m2-l3": {
    "id": "java-m2-l3",
    "trackId": "java",
    "moduleId": "java-m2",
    "order": 3,
    "estMinutes": 11,
    "title": "while Loops",
    "coreIdea": "A `while` loop repeats a block of code over and over, as long as its condition stays true.",
    "plainEnglish": [
      "Sometimes you want to repeat the same work many times.",
      "A `while` loop checks a condition, then runs its block if the condition is true.",
      "Then it checks again, and runs again — over and over.",
      "It stops the moment the condition becomes false.",
      "Something inside the loop must change, or it would run forever."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of climbing stairs while a sign says \"keep going\".",
        "Before each step you read the sign.",
        "The day the sign flips to \"stop\", you stop — that flip is your condition turning false."
      ]
    },
    "deepSections": [
      {
        "title": "The three moving parts",
        "teaser": "start, check, change — get all three right",
        "body": [
          "First, set up a starting value before the loop, like `int i = 1`.",
          "Second, the `while (i <= 3)` condition is checked before every pass.",
          "Third, inside the loop you change the value, like `i = i + 1`.",
          "Miss the change and the condition never turns false — that is an infinite loop."
        ]
      },
      {
        "title": "What an infinite loop feels like",
        "teaser": "the loop that never stops",
        "body": [
          "If the condition is always true, the loop never ends.",
          "The program just keeps printing, or freezes, until you stop it.",
          "It is the most common loop mistake — and an easy one to fix.",
          "Always ask: what changes here to eventually make the condition false?"
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "while",
        "def": "Repeats a block as long as its condition stays true."
      },
      {
        "term": "loop",
        "def": "Code that runs the same block more than once."
      },
      {
        "term": "i = i + 1",
        "def": "Adds one to the counter so the loop can eventually stop."
      },
      {
        "term": "infinite loop",
        "def": "A loop whose condition never becomes false, so it never ends."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Counts down from 3 — watch the condition turn false",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        while (count > 0) {\n            System.out.println(count);\n            count = count - 1;\n        }\n        System.out.println(\"liftoff\");\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Use a while loop to print 1, 2, 3 — each on its own line.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "1\n2\n3",
      "check": "equals",
      "hint": "Start int i = 1, loop while i <= 3, print i, then do i = i + 1."
    },
    "caseStudy": {
      "title": "How a download bar keeps going",
      "body": [
        "When you download a file, the progress bar updates again and again.",
        "Behind it is a loop: while the file is not fully received, keep reading the next chunk.",
        "The instant the file is complete, the condition turns false and the loop ends."
      ],
      "bridge": "\"Keep going while there is more to do\" is exactly the `while` loop you just wrote."
    },
    "takeaways": [
      "A `while` loop repeats its block while the condition is true.",
      "Change something inside the loop so it can eventually stop.",
      "A condition that never turns false is an infinite loop."
    ],
    "glossaryTerms": [
      "while-loop",
      "loop",
      "counter",
      "infinite-loop"
    ],
    "sources": [
      {
        "label": "Oracle — The while and do-while Statements",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/while.html"
      }
    ]
  },
  "java-m2-l4": {
    "id": "java-m2-l4",
    "trackId": "java",
    "moduleId": "java-m2",
    "order": 4,
    "estMinutes": 11,
    "title": "for Loops",
    "coreIdea": "A `for` loop packs the start, the check, and the change of a counting loop onto one tidy line.",
    "plainEnglish": [
      "A `for` loop does the same job as a `while` loop.",
      "It just keeps all three loop parts together in one place.",
      "You write the start, the condition, and the change, separated by semicolons.",
      "Java runs the block once for each value of the counter.",
      "It is the go-to loop whenever you are counting."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a microwave timer.",
        "You set the start (60 seconds), the stop point (0), and the tick (down by one).",
        "Then it counts on its own — a `for` loop bundles those same three settings into one line."
      ]
    },
    "deepSections": [
      {
        "title": "Reading the three parts",
        "teaser": "start ; condition ; change — all in the brackets",
        "body": [
          "`for (int i = 0; i < 5; i++)` has three pieces split by semicolons.",
          "`int i = 0` runs once at the start.",
          "`i < 5` is checked before every pass.",
          "`i++` runs after each pass — it is shorthand for `i = i + 1`."
        ]
      },
      {
        "title": "Why programmers count from 0",
        "teaser": "0, 1, 2, 3, 4 is five numbers",
        "body": [
          "`for (int i = 0; i < 5; i++)` runs five times.",
          "It uses the values 0, 1, 2, 3, 4 — note it stops before 5.",
          "Starting at 0 is a long-standing habit in code, especially with lists.",
          "Count the numbers: 0 through 4 is exactly five passes."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "for",
        "def": "A loop that keeps its start, condition, and change on one line."
      },
      {
        "term": "i++",
        "def": "Shorthand for i = i + 1 — adds one to the counter."
      },
      {
        "term": "i < 5",
        "def": "The condition: keep looping while i is less than 5."
      },
      {
        "term": "counter",
        "def": "The variable a loop uses to keep track of where it is."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Prints a 5-line countdown using a for loop",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 5; i > 0; i--) {\n            System.out.println(i);\n        }\n        System.out.println(\"go\");\n    }\n}"
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Use a for loop to print 0 1 2 3 4 — each on its own line.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // your code here\n    }\n}",
      "expectedOutput": "0\n1\n2\n3\n4",
      "check": "equals",
      "hint": "Write for (int i = 0; i < 5; i++) and print i inside the braces."
    },
    "caseStudy": {
      "title": "The loop behind every slideshow",
      "body": [
        "When a photo app builds a slideshow, it has a fixed set of images.",
        "It uses a `for` loop: for each photo from the first to the last, show it.",
        "The counter walks through the photos one at a time, in order."
      ],
      "bridge": "Whenever there is a known number of things to step through, a `for` loop is the natural fit — just like the one you wrote."
    },
    "takeaways": [
      "A `for` loop bundles start, condition, and change onto one line.",
      "`i++` is the usual way to step the counter forward.",
      "It is the standard choice when you know how many times to repeat."
    ],
    "glossaryTerms": [
      "for-loop",
      "increment",
      "counter",
      "loop"
    ],
    "sources": [
      {
        "label": "Oracle — The for Statement",
        "url": "https://docs.oracle.com/javase/tutorial/java/nutsandbolts/for.html"
      }
    ]
  }
}

const tracks = [
  {
    "id": "python",
    "title": "Python",
    "accent": "py",
    "accentVar": "var(--py)",
    "tagline": "Learn to code from zero in the language of AI — and run it right here in your browser.",
    "modules": [
      {
        "id": "py-m1",
        "title": "Module 1 — Getting Started",
        "goal": "Write and run your first programs; store and show data.",
        "lessonIds": [
          "py-m1-l1",
          "py-m1-l2",
          "py-m1-l3",
          "py-m1-l4",
          "py-m1-l5"
        ]
      },
      {
        "id": "py-m2",
        "title": "Module 2 — Making Decisions",
        "goal": "Let your program choose what to do.",
        "lessonIds": [
          "py-m2-l1",
          "py-m2-l2",
          "py-m2-l3",
          "py-m2-l4"
        ]
      },
      {
        "id": "py-m3",
        "title": "Module 3 — Repeating Things",
        "goal": "Do something many times with loops.",
        "lessonIds": [
          "py-m3-l1",
          "py-m3-l2",
          "py-m3-l3",
          "py-m3-l4"
        ]
      },
      {
        "id": "py-m4",
        "title": "Module 4 — Collections of Data",
        "goal": "Store and work with many values at once.",
        "lessonIds": [
          "py-m4-l1",
          "py-m4-l2",
          "py-m4-l3",
          "py-m4-l4"
        ]
      },
      {
        "id": "py-m5",
        "title": "Module 5 — Functions: Reusable Code",
        "goal": "Package code so you can reuse it.",
        "lessonIds": [
          "py-m5-l1",
          "py-m5-l2",
          "py-m5-l3",
          "py-m5-l4"
        ]
      },
      {
        "id": "py-m6",
        "title": "Module 6 — Python for Data & AI",
        "goal": "Use Python the way an AI engineer starts to.",
        "lessonIds": [
          "py-m6-l1",
          "py-m6-l2",
          "py-m6-l3",
          "py-m6-l4"
        ]
      }
    ]
  },
  {
    "id": "java",
    "title": "Java",
    "accent": "java",
    "accentVar": "var(--java)",
    "tagline": "The structured, enterprise language behind Android and big systems — taught from scratch.",
    "modules": [
      {
        "id": "java-m1",
        "title": "Module 1 — Java Basics",
        "goal": "Write, structure, and run your first Java programs.",
        "lessonIds": [
          "java-m1-l1",
          "java-m1-l2",
          "java-m1-l3",
          "java-m1-l4"
        ]
      },
      {
        "id": "java-m2",
        "title": "Module 2 — Decisions and Loops",
        "goal": "Make Java choose and repeat.",
        "lessonIds": [
          "java-m2-l1",
          "java-m2-l2",
          "java-m2-l3",
          "java-m2-l4"
        ]
      }
    ]
  }
]

const codingGlossary = {
  "program": {
    "term": "Program",
    "plain": "A list of written instructions a computer follows in order, top to bottom."
  },
  "print": {
    "term": "print()",
    "plain": "Python's instruction to display text on the screen."
  },
  "string": {
    "term": "String",
    "plain": "A piece of text in code, written inside quotation marks."
  },
  "class": {
    "term": "Class",
    "plain": "A named container that groups code together — the basic building block of a Java program."
  },
  "main-method": {
    "term": "main method",
    "plain": "The special starting point Java runs first when your program launches."
  },
  "println": {
    "term": "System.out.println()",
    "plain": "Java's instruction to display a line of text on the screen."
  },
  "variable": {
    "term": "Variable",
    "plain": "A name attached to a value, so you can store data once and reuse it by name."
  },
  "assignment": {
    "term": "Assignment",
    "plain": "Using the `=` sign to store a value under a name; the value goes on the right, the name on the left."
  },
  "value": {
    "term": "Value",
    "plain": "The actual piece of data stored in a variable, such as the text `Paris` or the number `42`."
  },
  "integer": {
    "term": "Integer",
    "plain": "A whole number with no decimal point, like `42` or `-7`."
  },
  "float": {
    "term": "Float",
    "plain": "A number that has a decimal point, like `3.75`."
  },
  "operator": {
    "term": "Operator",
    "plain": "A symbol that performs an action on values, such as `+` to add or `*` to multiply."
  },
  "modulo": {
    "term": "Modulo",
    "plain": "The `%` operator, which gives the remainder left over after dividing one number by another."
  },
  "f-string": {
    "term": "f-string",
    "plain": "A string written with an `f` before the quotes, letting you insert variables directly using `{ }`."
  },
  "concatenation": {
    "term": "Concatenation",
    "plain": "Joining two or more strings end to end using the `+` sign."
  },
  "comment": {
    "term": "Comment",
    "plain": "A note in code that starts with `#`; Python ignores it when running the program."
  },
  "error": {
    "term": "Error",
    "plain": "A message Python prints when it cannot run a line of code, naming the problem and where it happened."
  },
  "name-error": {
    "term": "NameError",
    "plain": "The error Python raises when you use a name it does not recognise — usually caused by a typo."
  },
  "debugging": {
    "term": "Debugging",
    "plain": "Finding and fixing mistakes in code, often by reading the error message Python gives you."
  },
  "boolean": {
    "term": "Boolean",
    "plain": "A value that can only be True or False — the yes/no building block of decisions."
  },
  "true-false": {
    "term": "True / False",
    "plain": "Python's two boolean values, written with a capital letter and no quotes."
  },
  "comparison-operator": {
    "term": "Comparison operator",
    "plain": "A symbol such as >, <, ==, or != that compares two values and returns True or False."
  },
  "equality-operator": {
    "term": "== (equality operator)",
    "plain": "Asks whether two values are equal. Written with two equals signs to tell it apart from =, which stores a value."
  },
  "if-statement": {
    "term": "if statement",
    "plain": "A block of code that runs only when its condition is True."
  },
  "else-clause": {
    "term": "else clause",
    "plain": "The fallback block that runs when the matching if (or elif) condition was False."
  },
  "condition": {
    "term": "Condition",
    "plain": "The yes-or-no question after if or elif that decides whether a block of code runs."
  },
  "indent": {
    "term": "Indent",
    "plain": "The leading spaces that show Python which lines belong inside a block."
  },
  "elif": {
    "term": "elif",
    "plain": "Short for \"else if\" — an extra condition checked only when the ones above it were False."
  },
  "branch": {
    "term": "Branch",
    "plain": "One possible path through an if / elif / else; only a single branch ever runs."
  },
  "order-of-checks": {
    "term": "Order of checks",
    "plain": "The top-to-bottom order in which if and elif conditions are tested; the first True one wins and the rest are skipped."
  },
  "logical-and": {
    "term": "and",
    "plain": "A logical operator that is True only when both conditions are True."
  },
  "logical-or": {
    "term": "or",
    "plain": "A logical operator that is True when at least one condition is True."
  },
  "logical-not": {
    "term": "not",
    "plain": "A logical operator that flips a boolean to its opposite: not True is False."
  },
  "while-loop": {
    "term": "while loop",
    "plain": "A loop that repeats a block of code over and over for as long as a condition stays true."
  },
  "infinite-loop": {
    "term": "Infinite loop",
    "plain": "A loop that never stops, because nothing ever makes its condition false."
  },
  "for-loop": {
    "term": "for loop",
    "plain": "A loop that repeats once for each item in a sequence, such as the numbers from `range()`."
  },
  "range": {
    "term": "range()",
    "plain": "A Python tool that builds a sequence of numbers for a loop to count through; `range(5)` gives 0 to 4."
  },
  "loop-variable": {
    "term": "Loop variable",
    "plain": "The name that holds the current item on each pass through a loop."
  },
  "running-total": {
    "term": "Running total",
    "plain": "A variable that grows as a loop adds numbers to it, holding the sum so far."
  },
  "accumulator": {
    "term": "Accumulator",
    "plain": "A variable that collects a result across a loop, started at an empty value like 0 before the loop begins."
  },
  "break": {
    "term": "break",
    "plain": "A keyword that stops a loop immediately and exits it."
  },
  "continue": {
    "term": "continue",
    "plain": "A keyword that skips the rest of the current pass through a loop and starts the next one."
  },
  "list": {
    "term": "List",
    "plain": "An ordered collection of values written inside square brackets, like `[3, 1, 2]`."
  },
  "index": {
    "term": "Index",
    "plain": "The position of an item in a list, counted starting from 0."
  },
  "sorted": {
    "term": "sorted()",
    "plain": "A built-in that returns a new list with the items arranged in order, smallest to largest."
  },
  "len": {
    "term": "len()",
    "plain": "A built-in that counts how many items are in a list or other collection."
  },
  "iterate": {
    "term": "Iterate",
    "plain": "To go through a collection one item at a time."
  },
  "dictionary": {
    "term": "Dictionary",
    "plain": "A collection of key-value pairs, written inside curly braces, that you look up by label."
  },
  "key": {
    "term": "Key",
    "plain": "The label used to look up a value in a dictionary."
  },
  "values-method": {
    "term": ".values()",
    "plain": "A dictionary method that gives you just the values, without their keys."
  },
  "sum": {
    "term": "sum()",
    "plain": "A built-in that adds up all the numbers in a collection and returns the total."
  },
  "function": {
    "term": "Function",
    "plain": "A named block of code you write once and run whenever you want by calling its name."
  },
  "def": {
    "term": "def",
    "plain": "The Python keyword used to define a new function."
  },
  "call": {
    "term": "Call",
    "plain": "Running a function by writing its name followed by parentheses, like greet()."
  },
  "argument": {
    "term": "Argument",
    "plain": "A value you pass into a function when you call it, such as the 2 in add(2, 3)."
  },
  "parameter": {
    "term": "Parameter",
    "plain": "A named placeholder in a function definition that receives an argument when the function runs."
  },
  "return": {
    "term": "return",
    "plain": "A Python keyword that hands a result back to the code that called the function."
  },
  "dry": {
    "term": "DRY",
    "plain": "Short for \"Don't Repeat Yourself\" — write a piece of logic once and reuse it instead of copying it."
  },
  "reuse": {
    "term": "Reuse",
    "plain": "Calling the same function many times rather than rewriting its code each time."
  },
  "duplication": {
    "term": "Duplication",
    "plain": "Multiple copies of the same code, all of which must be kept in sync when something changes."
  },
  "library": {
    "term": "Library",
    "plain": "A bundle of ready-made functions you can pull into your program to avoid writing everything yourself."
  },
  "import": {
    "term": "import",
    "plain": "The Python keyword that brings a library's code into your program so you can use it."
  },
  "math-module": {
    "term": "math module",
    "plain": "Python's built-in library of mathematical functions, such as math.sqrt and math.isqrt."
  },
  "file": {
    "term": "File",
    "plain": "A place on disk where a program saves text so it survives after the program stops."
  },
  "open": {
    "term": "open()",
    "plain": "Python's instruction to open a file for reading or writing."
  },
  "file-mode": {
    "term": "File mode",
    "plain": "The setting passed to open() that says what you want to do: \"w\" to write, \"r\" to read."
  },
  "with-statement": {
    "term": "with statement",
    "plain": "A safe way to open a file that automatically closes it when the indented block ends."
  },
  "standard-library": {
    "term": "Standard library",
    "plain": "The large collection of ready-made tools that comes built into Python."
  },
  "module": {
    "term": "Module",
    "plain": "A bundle of related tools you load into your program with import."
  },
  "datetime": {
    "term": "datetime",
    "plain": "The built-in Python module for working with dates and times."
  },
  "predict": {
    "term": "predict()",
    "plain": "A stand-in model function: text goes in, a predicted answer comes back."
  },
  "upper-method": {
    "term": ".upper()",
    "plain": "A string tool that turns text into UPPERCASE letters."
  },
  "average": {
    "term": "Average",
    "plain": "The total of a set of numbers divided by how many numbers there are."
  },
  "type": {
    "term": "Type",
    "plain": "The kind of value a variable holds, such as a whole number, a decimal, text, or true/false. In Java you state it before the name."
  },
  "int": {
    "term": "int",
    "plain": "A Java type for whole numbers, like 9 or -4, with no decimal point."
  },
  "double": {
    "term": "double",
    "plain": "A Java type for numbers with a decimal point, like 3.14 or 4.50."
  },
  "arithmetic": {
    "term": "Arithmetic",
    "plain": "Doing maths in code using operators like + - * /."
  },
  "integer-division": {
    "term": "Integer division",
    "plain": "Dividing one whole number by another in Java, which keeps the answer whole and discards any remainder."
  },
  "double-quotes": {
    "term": "Double quotes",
    "plain": "The \" marks that wrap a piece of text (a String) in Java."
  },
  "if": {
    "term": "if",
    "plain": "A Java statement that runs a block of code only when its condition is true."
  },
  "else": {
    "term": "else",
    "plain": "The branch that runs when an if condition is false; exactly one of if or else runs."
  },
  "greater-than-or-equal": {
    "term": ">= (greater than or equal)",
    "plain": "A comparison that is true when the left value is at least as big as the right value."
  },
  "greater-than": {
    "term": "> (greater than)",
    "plain": "A comparison that is true when the left value is larger than the right value."
  },
  "loop": {
    "term": "Loop",
    "plain": "Code that runs the same block of instructions more than once."
  },
  "counter": {
    "term": "Counter",
    "plain": "A variable a loop uses to track how many times it has run or where it is up to."
  },
  "increment": {
    "term": "Increment (i++)",
    "plain": "Adding one to a variable; i++ is shorthand for i = i + 1."
  }
}

export default { tracks, lessons, codingGlossary }
