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
    "estMinutes": 11,
    "title": "True, False, and Comparisons",
    "coreIdea": "Python can answer yes-or-no questions, and the answer is always `True` or `False`.",
    "plainEnglish": [
      "Some questions have only two answers: yes or no.",
      "In code, yes is `True` and no is `False`. These are called booleans.",
      "You ask a question by comparing two things, like `10 > 3`.",
      "Python checks the comparison and hands back `True` or `False`.",
      "That single answer is what later lets your program decide what to do.",
      "Under the hood, `True` and `False` are not just words — they are real values Python can store, print, and pass around, exactly like a number.",
      "When Python sees a comparison like `10 > 3`, it evaluates the whole thing down to one of those two values before doing anything else with it.",
      "So `10 > 3` is not a command — it is an expression that becomes `True`, the same way `2 + 2` becomes `4`."
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
      },
      {
        "title": "Comparisons across types: a quiet trap",
        "teaser": "why \"5\" == 5 is False",
        "body": [
          "Python is strict about what kind of value it is comparing.",
          "The number `5` and the text `\"5\"` look the same to your eye, but to Python they are different types.",
          "A number is a quantity; text in quotes is a string — a sequence of characters.",
          "So `5 == \"5\"` returns `False`, because the two values are not the same kind of thing.",
          "This bites beginners when they read input from a user.",
          "Text typed at a keyboard arrives as a string, so `input() == 5` is always `False` until you convert it with `int()`.",
          "The fix is to make both sides the same type first, for example `int(typed_text) == 5`.",
          "Rule of thumb: before you compare, make sure both sides are the same kind of value."
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
      },
      {
        "term": "expression",
        "def": "Any piece of code that Python works out into a single value, like `2 + 2` becoming `4` or `10 > 3` becoming `True`."
      },
      {
        "term": "type",
        "def": "The kind of value something is, such as a number (`int`) or text (`str`). Python compares the kind, not just the look."
      },
      {
        "term": "string",
        "def": "Text wrapped in quotes, like `\"5\"`. A string of characters is not the same as the number `5`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Each line asks a question and prints the answer",
        "runnable": true,
        "source": "print(10 > 3)\nprint(5 == 5)\nprint(7 != 7)\nprint(2 <= 2)"
      },
      {
        "language": "python",
        "caption": "Same-looking values, different types — so they are not equal",
        "runnable": true,
        "source": "print(5 == 5)\nprint(5 == \"5\")"
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
    "knowledgeCheck": [
      {
        "q": "What does `7 != 7` evaluate to?",
        "options": [
          {
            "text": "`True`",
            "correct": false
          },
          {
            "text": "`False`",
            "correct": true
          },
          {
            "text": "`7`",
            "correct": false
          },
          {
            "text": "An error",
            "correct": false
          }
        ],
        "feedback": "`!=` means \"are these different?\" Since 7 and 7 are the same, the answer is `False`."
      },
      {
        "q": "Which symbol asks whether two values are equal?",
        "options": [
          {
            "text": "`=`",
            "correct": false
          },
          {
            "text": "`==`",
            "correct": true
          },
          {
            "text": "`!=`",
            "correct": false
          },
          {
            "text": "`=>`",
            "correct": false
          }
        ],
        "feedback": "A double `==` compares two values. A single `=` stores a value into a variable instead."
      },
      {
        "q": "What does `5 == \"5\"` return?",
        "options": [
          {
            "text": "`True`, because they look the same",
            "correct": false
          },
          {
            "text": "`False`, because a number and a string are different types",
            "correct": true
          },
          {
            "text": "`5`",
            "correct": false
          },
          {
            "text": "An error, because you cannot compare them",
            "correct": false
          }
        ],
        "feedback": "The number `5` and the text `\"5\"` are different kinds of value, so Python says they are not equal: `False`."
      }
    ],
    "caseStudy": {
      "title": "How a login form knows you typed the wrong password",
      "body": [
        "When you sign in to Gmail, the server does not store your raw password.",
        "It stores a scrambled fingerprint of it, made by a one-way function called a hash.",
        "When you type your password, the server scrambles what you typed the same way, then compares the two fingerprints.",
        "That check is one boolean: do the fingerprints match, `True` or `False`?",
        "If `False`, you see \"wrong password\". If `True`, you are let in.",
        "Comparing fingerprints instead of raw text is why a leaked database still does not hand attackers your actual password."
      ],
      "bridge": "Every \"access granted\" or \"access denied\" you have ever seen began with a single comparison returning `True` or `False`."
    },
    "takeaways": [
      "A boolean is either `True` or `False`.",
      "Comparisons like `10 > 3` return a boolean.",
      "Use `==` to compare, and `=` to store — they are different.",
      "Comparing different types, like `5 == \"5\"`, gives `False` — make both sides the same kind of value first."
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
    "estMinutes": 12,
    "title": "if and else",
    "coreIdea": "`if` runs code only when a condition is `True`; `else` covers every other case.",
    "plainEnglish": [
      "So far your code ran every line, top to bottom, no matter what.",
      "`if` lets you guard a block: it runs only when a condition is `True`.",
      "`else` is the fallback — it runs when the condition is `False`.",
      "You write a question after `if`, end the line with a colon, then indent the code that depends on it.",
      "That indent is how Python knows which lines belong to the `if`.",
      "Under the hood, Python first works out the condition into a single yes-or-no value — `True` or `False`.",
      "Then it picks exactly one path: the `if` block runs, or the `else` block runs, never both.",
      "After the chosen block finishes, Python carries on with the un-indented lines below as normal."
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
      },
      {
        "title": "Why is the condition just True or False?",
        "teaser": "The hidden yes/no behind every if",
        "body": [
          "Before Python decides anything, it boils your condition down to one value.",
          "That value is always a `boolean` — either `True` or `False`, nothing in between.",
          "So `temperature > 25` is not really a question to Python; it is a calculation that returns `True` or `False`.",
          "You can see this for yourself: type `print(10 > 3)` and Python prints `True`.",
          "A common pitfall is mixing up `=` and `==` inside a condition.",
          "A single `=` means \"assign this value\" — it stores something in a variable.",
          "A double `==` means \"are these equal?\" — that is the comparison you want in an `if`.",
          "Writing `if age = 18:` is a mistake; Python raises a `SyntaxError`. You almost always meant `if age == 18:`.",
          "Another quiet trap: order matters. `>=` means \"greater than or equal to\", but `=>` is not valid Python at all."
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
      },
      {
        "term": "boolean",
        "def": "A value that is either `True` or `False` — the result a condition turns into."
      },
      {
        "term": "comparison operator",
        "def": "A symbol like `>`, `>=`, or `==` that compares two values and gives back `True` or `False`."
      },
      {
        "term": "==",
        "def": "Asks \"are these two values equal?\". Different from `=`, which stores a value in a variable."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Change the temperature and watch the message switch",
        "runnable": true,
        "source": "temperature = 30\nif temperature > 25:\n    print(\"It is hot\")\nelse:\n    print(\"It is mild\")"
      },
      {
        "language": "python",
        "caption": "A condition is just a value: see the True for yourself",
        "runnable": true,
        "source": "age = 20\nprint(age >= 18)\nif age >= 18:\n    print(\"adult\")"
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
    "knowledgeCheck": [
      {
        "q": "What does Python work out the condition into before it decides which block to run?",
        "options": [
          {
            "text": "A single boolean — either `True` or `False`",
            "correct": true
          },
          {
            "text": "The text of the condition, printed to the screen",
            "correct": false
          },
          {
            "text": "Both blocks at once, then it merges them",
            "correct": false
          }
        ],
        "feedback": "Python evaluates the condition down to one boolean value, `True` or `False`. Then it runs exactly one path: the `if` block or the `else` block, never both."
      },
      {
        "q": "You write `if age = 18:` and Python refuses to run. Why?",
        "options": [
          {
            "text": "A single `=` assigns a value; a condition needs `==` to compare. This is a `SyntaxError`.",
            "correct": true
          },
          {
            "text": "`18` is too small a number to compare against",
            "correct": false
          },
          {
            "text": "`if` cannot be used with the variable `age`",
            "correct": false
          }
        ],
        "feedback": "`=` means \"store this value\", while `==` means \"are these equal?\". Inside an `if` you want the comparison, so write `if age == 18:`."
      },
      {
        "q": "In an `if` / `else`, what tells Python which lines belong inside each block?",
        "options": [
          {
            "text": "The indent — the leading spaces under the colon",
            "correct": true
          },
          {
            "text": "Curly brackets `{ }` around the lines",
            "correct": false
          },
          {
            "text": "A semicolon `;` at the end of every line",
            "correct": false
          }
        ],
        "feedback": "Python has no brackets here. The colon opens the block and the indent marks which lines are inside it. When the indent stops, the block is over."
      }
    ],
    "caseStudy": {
      "title": "How Netflix decides what to autoplay next",
      "body": [
        "When an episode ends, Netflix checks a setting before doing anything: is autoplay of the next episode switched on for this profile?",
        "`if` that setting is on, the player loads the next episode and starts a short countdown so you can cancel.",
        "`else`, it stops and shows a post-play screen — including the \"Are you still watching?\" prompt that appears after several episodes in a row.",
        "Netflix added a profile setting in 2020 letting people turn autoplay off, after viewers complained it played episodes without asking.",
        "So the same `if` / `else` fork is wired directly to a real toggle a user controls — one boolean deciding one of two outcomes."
      ],
      "bridge": "A single `if` / `else` is the fork in the road behind countless everyday app decisions."
    },
    "takeaways": [
      "`if` runs a block only when its condition is `True`.",
      "`else` handles the `False` case.",
      "The colon and the indent tell Python which lines belong together.",
      "A condition always becomes a single boolean — `True` or `False` — before Python picks a path.",
      "Use `==` to compare; `=` only stores a value."
    ],
    "sources": [
      {
        "label": "Python docs — if statements",
        "url": "https://docs.python.org/3/tutorial/controlflow.html#if-statements"
      },
      {
        "label": "Python docs — comparisons",
        "url": "https://docs.python.org/3/library/stdtypes.html#comparisons"
      }
    ]
  },
  "py-m2-l3": {
    "id": "py-m2-l3",
    "trackId": "python",
    "moduleId": "py-m2",
    "order": 3,
    "estMinutes": 12,
    "title": "elif: Many Paths",
    "coreIdea": "`elif` lets you check several conditions in order and pick the first one that fits.",
    "plainEnglish": [
      "`if` / `else` gives you two paths. Real choices often have more.",
      "`elif` (short for \"else if\") adds extra conditions in the middle.",
      "Python checks them top to bottom and stops at the first one that is `True`.",
      "Everything below that point is skipped.",
      "A final `else` catches anything that matched none of them.",
      "Think of the whole `if` / `elif` / `else` group as one decision, not separate questions.",
      "Under the hood, each `elif` test only runs if every test above it already failed.",
      "That is why order is not just tidy — it changes which branch actually fires."
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
      },
      {
        "title": "elif vs. a stack of separate ifs",
        "teaser": "They look alike but behave very differently",
        "body": [
          "A common pitfall is writing several plain `if` statements instead of one `if` / `elif` chain.",
          "With separate `if` blocks, Python checks every single one — none of them know about the others.",
          "So a score of 95 could match `if score >= 90`, AND `if score >= 80`, AND `if score >= 70`.",
          "You would print three grades instead of one.",
          "`elif` ties the tests together into a single chain, so only one branch can ever run.",
          "Rule of thumb: if the conditions are mutually exclusive — only one should win — use `elif`, not a pile of `if`s."
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
      },
      {
        "term": "condition",
        "def": "A test that comes out `True` or `False`, like `score >= 90`, that decides whether a branch runs."
      },
      {
        "term": "mutually exclusive",
        "def": "Only one option can be true at a time — like a grade being an A or a B, never both."
      },
      {
        "term": "chain",
        "def": "An `if` joined to its `elif` and `else` as one linked decision, where exactly one branch fires."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Only the first matching branch runs",
        "runnable": true,
        "source": "hour = 14\nif hour < 12:\n    print(\"Good morning\")\nelif hour < 18:\n    print(\"Good afternoon\")\nelse:\n    print(\"Good evening\")"
      },
      {
        "language": "python",
        "caption": "Same value, one tidy path: 95 stops at the very first match",
        "runnable": true,
        "source": "score = 95\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"F\")"
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
    "knowledgeCheck": [
      {
        "q": "In an `if` / `elif` / `else` chain, how many branches run for a given value?",
        "options": [
          {
            "text": "Exactly one — the first whose condition is `True`.",
            "correct": true
          },
          {
            "text": "Every branch whose condition is `True`.",
            "correct": false
          },
          {
            "text": "All of them, top to bottom.",
            "correct": false
          }
        ],
        "feedback": "Python stops at the first `True` condition and skips the rest, so only one branch ever runs."
      },
      {
        "q": "Given `score = 95`, why should the `score >= 90` check come before `score >= 80`?",
        "options": [
          {
            "text": "Because Python takes the first match and stops, so the looser test would grab 95 first if it came first.",
            "correct": true
          },
          {
            "text": "Because `elif` only works in alphabetical order.",
            "correct": false
          },
          {
            "text": "Because Python runs the checks from the bottom up.",
            "correct": false
          }
        ],
        "feedback": "Put the strictest condition first. If `score >= 80` came first, 95 would match it and never reach the A check."
      },
      {
        "q": "What is the difference between three separate `if` statements and one `if` / `elif` chain?",
        "options": [
          {
            "text": "Separate `if`s are each checked independently, so more than one can run; an `elif` chain runs only one branch.",
            "correct": true
          },
          {
            "text": "There is no difference — they behave identically.",
            "correct": false
          },
          {
            "text": "Separate `if`s are faster but can never both be `True`.",
            "correct": false
          }
        ],
        "feedback": "Plain `if`s don't know about each other, so several can fire. `elif` links them so exactly one branch wins."
      }
    ],
    "caseStudy": {
      "title": "How a tax calculator picks your bracket",
      "body": [
        "Income tax uses bands: one rate up to a threshold, a higher rate above it, and so on.",
        "Australia's resident income-tax scale works this way, with bands like the tax-free zone up to $18,200, then 16%, then 30%, then 37%, then 45% for the highest earners.",
        "Payroll software walks these brackets in order with `elif`, top to bottom.",
        "It stops at the first band your income falls into and applies that rate.",
        "Because the bands are mutually exclusive, only one branch ever runs for a given income — exactly what `elif` guarantees.",
        "Get the order wrong, and a high earner could be taxed at the lowest rate by mistake."
      ],
      "bridge": "`elif` is exactly how programs route a single value down one of many tidy paths."
    },
    "takeaways": [
      "`elif` adds more conditions between `if` and `else`.",
      "Python runs only the first branch that is `True`.",
      "Put the strictest condition first so it gets checked first.",
      "Use one `elif` chain, not a stack of separate `if`s, when only one path should win."
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
    "estMinutes": 13,
    "title": "Combining Conditions: and, or, not",
    "coreIdea": "`and`, `or`, and `not` glue small questions into one bigger yes-or-no question.",
    "plainEnglish": [
      "One condition is often not enough. Real rules combine several.",
      "`and` is true only when both sides are true.",
      "`or` is true when at least one side is true.",
      "`not` flips a boolean — `True` becomes `False`, and the reverse.",
      "With these three, you can express almost any rule you can say out loud.",
      "Under the hood, Python reads each side as either `True` or `False`, then collapses the whole line down to one of those two values.",
      "Python checks the parts left to right and stops the moment it already knows the answer — it does not waste effort finishing a question it has already settled.",
      "`not` binds tightest, then `and`, then `or` — so `not` grabs the value right beside it before `and` or `or` get their turn."
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
      },
      {
        "title": "Short-circuiting: Python stops early",
        "teaser": "why the right side sometimes never runs",
        "body": [
          "Python is lazy on purpose. It reads `and` / `or` left to right and quits the moment the answer is locked in.",
          "For `and`, if the left side is already `False`, the whole thing must be `False`. So Python never even looks at the right side.",
          "For `or`, if the left side is already `True`, the whole thing must be `True`. Again, the right side is skipped.",
          "This is called short-circuit evaluation.",
          "It is not just a speed trick — it lets you put a cheap, safe check first to guard a riskier one second.",
          "Example: `if user is not None and user.is_admin:` — if `user` is `None`, Python stops, so it never tries to read `.is_admin` on nothing and never crashes.",
          "Common pitfall: people swap the order and write `if user.is_admin and user is not None:`. Now the guard runs too late, and the line can crash on the first half.",
          "Rule of thumb: put the check that protects against an error on the left side of `and`."
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
      },
      {
        "term": "short-circuit evaluation",
        "def": "When Python stops checking the rest of an `and`/`or` because the answer is already decided."
      },
      {
        "term": "operator precedence",
        "def": "The fixed order Python uses to decide which part runs first: `not`, then `and`, then `or`."
      },
      {
        "term": "boolean expression",
        "def": "Any piece of code that boils down to a single `True` or `False`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Both must be true for and; either works for or",
        "runnable": true,
        "source": "age = 25\nmember = True\nprint(age > 18 and member)\nprint(age > 100 or member)\nprint(not member)"
      },
      {
        "language": "python",
        "caption": "not binds tighter than and — brackets make order obvious",
        "runnable": true,
        "source": "raining = True\nweekend = False\nprint(not raining and weekend)\nprint(not (raining and weekend))"
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
    "knowledgeCheck": [
      {
        "q": "What does `True and False` evaluate to?",
        "options": [
          {
            "text": "`True`",
            "correct": false
          },
          {
            "text": "`False`",
            "correct": true
          },
          {
            "text": "It causes an error",
            "correct": false
          }
        ],
        "feedback": "`and` needs both sides to be `True`. One `False` side makes the whole thing `False`."
      },
      {
        "q": "In `x or y`, when is the result `True`?",
        "options": [
          {
            "text": "Only when both `x` and `y` are `True`",
            "correct": false
          },
          {
            "text": "When at least one of `x` or `y` is `True`",
            "correct": true
          },
          {
            "text": "Only when both `x` and `y` are `False`",
            "correct": false
          }
        ],
        "feedback": "`or` is the generous one: just one `True` side is enough to make the whole expression `True`."
      },
      {
        "q": "Why does `user is not None and user.name` not crash when `user` is `None`?",
        "options": [
          {
            "text": "Python guesses a default value for `user.name`",
            "correct": false
          },
          {
            "text": "Short-circuiting: the left side is `False`, so Python skips the right side",
            "correct": true
          },
          {
            "text": "`and` always ignores the right side",
            "correct": false
          }
        ],
        "feedback": "With `and`, a `False` left side decides the answer, so Python never runs `user.name`. That is short-circuit evaluation protecting you."
      }
    ],
    "caseStudy": {
      "title": "How a spam filter decides to block an email",
      "body": [
        "Gmail's spam filter weighs hundreds of signals on every message at once.",
        "Each signal is a small yes-or-no check: does the link point to a known-bad domain? Is the sender's address spoofed? Has the sender failed authentication checks like SPF or DKIM?",
        "A message is far more likely to be quarantined when several risky signals line up: a suspicious link `and` an unknown sender, `or` a sender who is `not` in your contacts and `not` someone you have ever replied to.",
        "Filters lean on short-circuit-style logic too: a cheap, certain check (this exact address is on a global blocklist) is tested first, so the expensive machine-learning checks only run when they are still needed.",
        "Google reports its filters block more than 99.9% of spam, phishing, and malware from reaching inboxes — the result of combining many small conditions into one clear verdict."
      ],
      "bridge": "`and`, `or`, and `not` are the words that turn a pile of small checks into one decision."
    },
    "takeaways": [
      "`and` needs both sides true; `or` needs just one.",
      "`not` flips a boolean to its opposite.",
      "Combine them to express real-world rules in code.",
      "Python short-circuits: it stops as soon as the answer is certain.",
      "Order matters — `not` binds tightest, then `and`, then `or`; use `()` to be sure."
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
    "estMinutes": 12,
    "title": "while Loops",
    "coreIdea": "A `while` loop repeats a block of code over and over, for as long as a condition stays true.",
    "plainEnglish": [
      "Sometimes you want to do the same thing again and again.",
      "A `while` loop says: keep doing this while a condition is true.",
      "Each time around, Python checks the condition first. If it is true, it runs the block again. If it is false, the loop stops.",
      "Something inside the loop has to change, or the condition never becomes false. Then it loops forever — an infinite loop.",
      "Under the hood there is no magic. Python just jumps back up to the top of the loop and re-checks the same `True`/`False` test every single pass.",
      "One full pass through the block is called an iteration. The condition is only ever checked between iterations, never in the middle of one.",
      "Because the check happens at the top, a `while` loop can run zero times. If the condition is already false on the very first look, Python skips the whole block."
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
      },
      {
        "title": "break and continue — two trapdoors out of a loop",
        "teaser": "leave early, or skip the rest of this pass",
        "body": [
          "Sometimes you want to leave a loop before the condition naturally turns false.",
          "The `break` keyword does exactly that. The instant Python runs `break`, the loop stops right there and jumps to the code after it.",
          "A common pattern is `while True:` — a condition that is always true — paired with a `break` inside an `if`. The loop runs until that one exact moment you choose to escape.",
          "The `continue` keyword is gentler. It does not leave the loop. It skips the rest of the current pass and jumps straight back up to re-check the condition.",
          "So `break` means 'I'm done with the whole loop', and `continue` means 'skip the rest of this one pass, but keep looping'.",
          "Here is the subtle trap: if you put `continue` before the line that changes your counter, that change gets skipped — and you can spin into an infinite loop without meaning to."
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
      },
      {
        "term": "iteration",
        "def": "One full pass through the loop's block of code."
      },
      {
        "term": "break",
        "def": "A keyword that stops the loop immediately and jumps past it."
      },
      {
        "term": "continue",
        "def": "A keyword that skips the rest of the current pass and re-checks the condition."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "A countdown — watch the condition turn false",
        "runnable": true,
        "source": "count = 3\nwhile count > 0:\n    print(count)\n    count = count - 1\nprint(\"Lift off!\")"
      },
      {
        "language": "python",
        "caption": "break — stop the moment you find what you want",
        "runnable": true,
        "source": "n = 1\nwhile n <= 10:\n    if n == 4:\n        print(\"Found 4, stopping.\")\n        break\n    print(n)\n    n = n + 1"
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
    "knowledgeCheck": [
      {
        "q": "When does a `while` loop check its condition?",
        "options": [
          {
            "text": "Before every pass through the block",
            "correct": true
          },
          {
            "text": "Only once, before the loop starts",
            "correct": false
          },
          {
            "text": "In the middle of each pass, line by line",
            "correct": false
          }
        ],
        "feedback": "Python checks the condition at the top, before each iteration. If it is already false on the first look, the block never runs at all."
      },
      {
        "q": "You write `while count > 0:` but forget to change `count` inside the loop. What happens?",
        "options": [
          {
            "text": "The loop runs forever — an infinite loop",
            "correct": true
          },
          {
            "text": "The loop runs exactly once",
            "correct": false
          },
          {
            "text": "Python skips the loop entirely",
            "correct": false
          }
        ],
        "feedback": "If nothing inside moves `count` toward 0, the condition `count > 0` stays true forever, so the loop never ends."
      },
      {
        "q": "What does the `break` keyword do inside a loop?",
        "options": [
          {
            "text": "Stops the loop immediately and jumps to the code after it",
            "correct": true
          },
          {
            "text": "Skips the rest of this pass but keeps looping",
            "correct": false
          },
          {
            "text": "Restarts the loop from the beginning",
            "correct": false
          }
        ],
        "feedback": "`break` exits the whole loop on the spot. (Skipping just the current pass is what `continue` does.)"
      }
    ],
    "caseStudy": {
      "title": "The loop running inside every video game",
      "body": [
        "Every game has a 'game loop' at its heart.",
        "It runs `while` the game is still on: read the controller, update the world, draw the screen — then repeat.",
        "It does this fast and over and over. A game running at 60 frames per second is just this loop spinning 60 full passes every second.",
        "To keep that pace steady, the loop often waits a few milliseconds each pass so it doesn't run too fast — this is how a game stays smooth instead of speeding up on a faster computer.",
        "The moment you quit, the condition turns false and the loop ends. Pressing the in-game 'Quit' button is often literally a `break` out of that `while` loop."
      ],
      "bridge": "You just wrote the same shape that keeps Mario moving: repeat while something is still true."
    },
    "takeaways": [
      "A `while` loop repeats as long as its condition is true.",
      "Python checks the condition before every repeat.",
      "Something inside must change, or you get an infinite loop.",
      "`break` leaves the loop early; `continue` skips the rest of one pass."
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
    "estMinutes": 12,
    "title": "for Loops and range()",
    "coreIdea": "A `for` loop repeats a fixed number of times, and `range()` gives it the numbers to count through.",
    "plainEnglish": [
      "A `while` loop repeats until something changes. A `for` loop repeats a set number of times.",
      "`range()` hands the loop a sequence of numbers to walk through, one at a time.",
      "`range(5)` means the numbers 0, 1, 2, 3, 4 — it starts at 0 and stops before 5.",
      "Each time around, the loop variable holds the next number. No counter to manage yourself.",
      "Under the hood, `range()` does not build the whole list of numbers up front. It hands them out one at a time, only when the loop asks for the next one.",
      "That is why `range(1000000)` is instant — Python is not storing a million numbers, just remembering where to start, where to stop, and how big each step is.",
      "The `for` loop and `range()` are a team: `range()` is the source of values, and `for` is the machine that pulls one value out on every pass."
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
      },
      {
        "title": "range can skip — and count backwards",
        "teaser": "A third number is the step size",
        "body": [
          "`range()` can take a third number, called the step. It is how far to jump between values.",
          "`range(0, 10, 2)` gives 0, 2, 4, 6, 8 — it counts up by 2 each time, so it skips the odd numbers.",
          "Leave the step out and it is 1 by default. That is why plain `range(5)` counts 0, 1, 2, 3, 4.",
          "A negative step counts down. `range(5, 0, -1)` gives 5, 4, 3, 2, 1 — start at 5, stop before 0, step back by 1.",
          "Here is the classic trap: the stop value is still excluded when counting down. `range(5, 0, -1)` never reaches 0, just like `range(5)` never reaches 5.",
          "This is one rule that holds in every direction: the start is included, the stop is not."
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
      },
      {
        "term": "iteration",
        "def": "One single pass through the loop — one trip around the cycle."
      },
      {
        "term": "step",
        "def": "The optional third number in `range()` — how far to jump between values."
      },
      {
        "term": "lazy evaluation",
        "def": "Producing values one at a time only when asked, instead of building them all up front."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "range(2, 6) — start at 2, stop before 6",
        "runnable": true,
        "source": "for n in range(2, 6):\n    print(n)"
      },
      {
        "language": "python",
        "caption": "range(0, 10, 2) — count up by 2, skipping the odd numbers",
        "runnable": true,
        "source": "for n in range(0, 10, 2):\n    print(n)"
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
    "knowledgeCheck": [
      {
        "q": "What numbers does `range(3)` produce?",
        "options": [
          {
            "text": "0, 1, 2",
            "correct": true
          },
          {
            "text": "1, 2, 3",
            "correct": false
          },
          {
            "text": "0, 1, 2, 3",
            "correct": false
          },
          {
            "text": "3",
            "correct": false
          }
        ],
        "feedback": "`range(3)` starts at 0 and stops before 3, giving 0, 1, 2 — three numbers in total."
      },
      {
        "q": "How many times does the body of `for i in range(2, 7):` run?",
        "options": [
          {
            "text": "5 times",
            "correct": true
          },
          {
            "text": "7 times",
            "correct": false
          },
          {
            "text": "6 times",
            "correct": false
          },
          {
            "text": "2 times",
            "correct": false
          }
        ],
        "feedback": "It counts 2, 3, 4, 5, 6 — start at 2, stop before 7. That is 5 values, so the body runs 5 times."
      },
      {
        "q": "What does `range(10, 0, -2)` count through?",
        "options": [
          {
            "text": "10, 8, 6, 4, 2",
            "correct": true
          },
          {
            "text": "10, 8, 6, 4, 2, 0",
            "correct": false
          },
          {
            "text": "0, 2, 4, 6, 8, 10",
            "correct": false
          },
          {
            "text": "10, 9, 8, 7, 6, 5, 4, 3, 2, 1",
            "correct": false
          }
        ],
        "feedback": "The step is -2, so it counts down by 2 from 10. The stop value 0 is excluded, just like always — so it ends at 2, not 0."
      }
    ],
    "caseStudy": {
      "title": "How a spreadsheet fills 1,000 rows",
      "body": [
        "When a tool processes a list — 1,000 customers, say — it does not write the code 1,000 times.",
        "It writes a `for` loop once and lets `range()` count through every row.",
        "Take a real example: a payroll system at month's end. It loops over each employee record, calculates tax, and writes one payslip per pass.",
        "If the company hires 200 more people, nobody touches the loop. The same code now runs 1,200 times instead of 1,000.",
        "Because `range()` hands out numbers lazily, a loop over a million rows uses almost no extra memory — Python never holds all million numbers at once.",
        "Change 1,000 to a million and the same three lines still work."
      ],
      "bridge": "A `for` loop is how one short instruction does a job thousands of times over."
    },
    "takeaways": [
      "A `for` loop repeats a fixed number of times.",
      "`range(5)` gives 0, 1, 2, 3, 4 — it stops before the number you pass.",
      "The loop variable holds the current number each time around.",
      "`range()` can take a third number, the step, to skip values or count backwards.",
      "`range()` is lazy — it hands out numbers one at a time, so even huge ranges cost almost no memory."
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
    "estMinutes": 12,
    "title": "Adding Things Up in a Loop",
    "coreIdea": "Keep a running total in a variable, and add to it on every pass through the loop.",
    "plainEnglish": [
      "Often you want to combine many numbers into one — a sum, a count, a tally.",
      "The trick is a running total: a variable that grows as the loop runs.",
      "You start it at 0 before the loop. That is the empty starting point.",
      "Each time around, you add the current number to it. When the loop ends, the total holds the answer.",
      "The `[4, 3, 8]` is a list — just a few values in a row inside square brackets, which the loop walks through one at a time. You'll meet lists properly in the next module.",
      "You can pass `print()` several things separated by commas, like `print(\"You spent\", total)`. Python prints them in order with a space between, and unlike `+` it happily mixes text and numbers.",
      "Here is what is happening under the hood. The name `total` is a label that points at a number in memory.",
      "When Python runs `total = total + price`, it first works out the right side — the old number plus the price — and only then moves the `total` label onto that brand-new number.",
      "So the loop does not magically remember anything. It just keeps overwriting one variable with a slightly bigger value, again and again, until the list runs out."
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
      },
      {
        "title": "Two classic mistakes: resetting inside, and forgetting to start",
        "teaser": "where the line is placed changes everything",
        "body": [
          "The single most common bug here is putting `total = 0` in the wrong place.",
          "If you write `total = 0` *inside* the loop, it resets to 0 on every single pass.",
          "Then each pass throws away the previous work, and at the end `total` only holds the last number — not the sum.",
          "The fix is indentation: `total = 0` must sit to the left of the loop body, so it runs once, before the loop starts.",
          "The opposite mistake is leaving the line out entirely. If `total` was never created, the first `total = total + n` fails because Python has no old `total` to read.",
          "Python stops and shows `NameError: name 'total' is not defined` — its way of saying you used a label that points at nothing.",
          "So the rule is simple: create the accumulator once, before the loop, and grow it inside.",
          "This same shape powers a count too. To count items instead of summing them, start `count = 0` and run `count = count + 1` each pass — you are accumulating ones instead of prices."
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
      },
      {
        "term": "initialise",
        "def": "To give a variable its first value before you use it — here, setting `total = 0` before the loop."
      },
      {
        "term": "NameError",
        "def": "Python's error when you use a variable name that was never given a value, like adding to a `total` that does not exist yet."
      },
      {
        "term": "+= (plus-equals)",
        "def": "A shorthand: `total += n` means exactly the same as `total = total + n`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Add up three prices in a basket",
        "runnable": true,
        "source": "total = 0\nfor price in [4, 3, 8]:\n    total = total + price\nprint(\"You spent\", total)"
      },
      {
        "language": "python",
        "caption": "Same idea with the `+=` shorthand",
        "runnable": true,
        "source": "total = 0\nfor price in [4, 3, 8]:\n    total += price\nprint(\"You spent\", total)"
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
    "knowledgeCheck": [
      {
        "q": "Where should the line `total = 0` go so the loop sums correctly?",
        "options": [
          {
            "text": "Before the loop, so it runs once as the empty starting point.",
            "correct": true
          },
          {
            "text": "Inside the loop body, so it refreshes on every pass.",
            "correct": false
          },
          {
            "text": "After the loop, just before you print the total.",
            "correct": false
          }
        ],
        "feedback": "Create the accumulator once, before the loop. Putting `total = 0` inside the loop resets it every pass, so only the last number survives."
      },
      {
        "q": "After this loop, what does `total` hold?\n\n`total = 0`\n`for n in [2, 5, 1]:`\n    `total = total + n`",
        "options": [
          {
            "text": "8 — each number is added to the running total.",
            "correct": true
          },
          {
            "text": "1 — the last number replaces the total.",
            "correct": false
          },
          {
            "text": "0 — the total never changes.",
            "correct": false
          }
        ],
        "feedback": "Each pass grows the total: 0+2 is 2, then 2+5 is 7, then 7+1 is 8."
      },
      {
        "q": "What does `total += price` mean?",
        "options": [
          {
            "text": "Exactly the same as `total = total + price`.",
            "correct": true
          },
          {
            "text": "It prints `price` and leaves `total` unchanged.",
            "correct": false
          },
          {
            "text": "It sets `total` equal to `price`, replacing the old value.",
            "correct": false
          }
        ],
        "feedback": "`+=` is just shorthand for 'add this on top of what's already there', identical to `total = total + price`."
      }
    ],
    "caseStudy": {
      "title": "Every shopping cart total online",
      "body": [
        "When you check out at Amazon, your cart's subtotal starts at zero.",
        "For each line item in the cart, the code adds that item's price (times its quantity) onto a running total.",
        "That accumulator is built one item at a time — the exact pattern in this lesson.",
        "Then the same idea stacks up: a second accumulator adds the tax on each item, a third sums the shipping, and the order total is just those running totals combined.",
        "The grand total you finally pay is not stored anywhere in advance — it is recomputed by accumulating line by line every time your cart changes."
      ],
      "bridge": "Start at 0, add on each pass — the same pattern behind every total you have ever paid online."
    },
    "takeaways": [
      "Start the total at 0 before the loop.",
      "Add the current number to it on every pass.",
      "When the loop ends, the variable holds the full total.",
      "Putting `total = 0` inside the loop is the classic bug — it resets every pass."
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
    "estMinutes": 12,
    "title": "break and continue",
    "coreIdea": "`break` stops a loop early; `continue` skips the rest of one pass and jumps to the next.",
    "plainEnglish": [
      "Sometimes you do not want a loop to run all the way through.",
      "`break` ends the loop immediately — Python leaves it and moves on.",
      "`continue` is gentler: it skips the rest of this one pass, then keeps looping.",
      "Both are used inside an `if`, so they only fire when a condition is met.",
      "Under the hood, a `for` loop pulls one value at a time from a source like `range(1, 6)`.",
      "`continue` jumps straight back to that 'pull the next value' step, skipping any code below it in the loop.",
      "`break` throws the whole pulling process away — Python stops asking for the next value at all."
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
      },
      {
        "title": "The pitfall: continue can skip the line that ends the loop",
        "teaser": "why a continue inside a while loop sometimes hangs forever",
        "body": [
          "`continue` does not just skip one print line — it skips *every* line below it in the loop body for that pass.",
          "In a `for` loop this is usually safe, because the `for` automatically grabs the next value for you.",
          "But a `while` loop is different: it keeps going as long as its condition is `True`, and *you* have to change the value yourself.",
          "Imagine `i = 0` and `while i < 5:`, where you only do `i = i + 1` at the bottom of the loop.",
          "If a `continue` fires before that line, the `i = i + 1` is skipped, so `i` never changes.",
          "Now the condition `i < 5` is always `True`, and the loop runs forever — this is called an infinite loop.",
          "The fix is to update your counter *before* the `continue`, or to prefer a `for` loop with `range()` when you can."
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
      },
      {
        "term": "iteration",
        "def": "One single pass through the loop — one trip around, handling one item."
      },
      {
        "term": "loop body",
        "def": "The indented lines under the loop that run on each pass."
      },
      {
        "term": "infinite loop",
        "def": "A loop whose stop condition never becomes false, so it runs forever and never ends on its own."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "break stops early; continue skips one number",
        "runnable": true,
        "source": "for n in range(1, 6):\n    if n == 3:\n        continue\n    print(n)"
      },
      {
        "language": "python",
        "caption": "break out of a loop once you find the first even number",
        "runnable": true,
        "source": "for n in [7, 3, 9, 4, 5, 8]:\n    if n % 2 == 0:\n        print(\"first even:\", n)\n        break"
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
    "knowledgeCheck": [
      {
        "q": "Inside a `for` loop, Python reaches a `continue`. What happens next?",
        "options": [
          {
            "text": "The whole loop ends and nothing else in it runs.",
            "correct": false
          },
          {
            "text": "The rest of this pass is skipped and the loop moves to the next item.",
            "correct": true
          },
          {
            "text": "Python restarts the loop from the very first item again.",
            "correct": false
          },
          {
            "text": "The program crashes with an error.",
            "correct": false
          }
        ],
        "feedback": "`continue` only cuts short the current pass. The loop then grabs the next item and keeps going — it does not end the loop or start over."
      },
      {
        "q": "You loop over a list of names to find the first one that starts with 'A', then stop. Which statement do you use to stop?",
        "options": [
          {
            "text": "`break`, because you want to leave the loop as soon as you find it.",
            "correct": true
          },
          {
            "text": "`continue`, because you want to skip the rest of the names.",
            "correct": false
          },
          {
            "text": "`print`, because printing ends the loop.",
            "correct": false
          },
          {
            "text": "Neither — loops always run to the end no matter what.",
            "correct": false
          }
        ],
        "feedback": "`break` exits the loop immediately once you've found what you need, so you don't waste time checking the remaining names."
      },
      {
        "q": "Why can a `continue` inside a `while` loop accidentally cause an infinite loop?",
        "options": [
          {
            "text": "Because `continue` secretly resets every variable to zero.",
            "correct": false
          },
          {
            "text": "Because `while` loops are not allowed to use `continue` at all.",
            "correct": false
          },
          {
            "text": "Because `continue` can skip the line that updates the counter, so the stop condition never becomes false.",
            "correct": true
          },
          {
            "text": "Because `continue` doubles the loop's speed until it overflows.",
            "correct": false
          }
        ],
        "feedback": "`continue` skips every line below it for that pass. If the line that changes your counter sits below it, the counter never updates and the condition stays `True` forever."
      }
    ],
    "caseStudy": {
      "title": "How search engines stop early",
      "body": [
        "A search engine like Google does not always scan every page it has indexed before showing you results.",
        "It works through candidate pages and, once it has gathered enough strong matches to fill the first results page, it can `break` out and return them fast.",
        "This early-exit idea has a name in computer science: 'short-circuiting' — stop as soon as the answer is settled.",
        "It also uses `continue`-style skipping: a quick, cheap filter throws out pages that obviously don't fit (wrong language, spam, blocked), without running the slow, expensive ranking on them.",
        "Skipping the junk early and stopping once you have enough is how a search can feel instant across billions of pages."
      ],
      "bridge": "`break` to quit once you're done, `continue` to skip what doesn't fit — control that makes loops fast and smart."
    },
    "takeaways": [
      "`break` ends the whole loop on the spot.",
      "`continue` skips just the current pass and keeps going.",
      "Both sit inside an `if`, so they fire only when your condition is met.",
      "Watch out: a `continue` in a `while` loop can skip your counter update and loop forever."
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
    "estMinutes": 12,
    "title": "Lists",
    "coreIdea": "A list holds many values in order, inside square brackets.",
    "plainEnglish": [
      "So far, a name has held one value. A list lets one name hold many.",
      "You write a list with square brackets and commas: `[3, 1, 2]`.",
      "The order is kept exactly as you wrote it.",
      "Lists come with handy tools: `len()` counts the items, `.append()` adds one, and `sorted()` returns a tidy, ordered copy.",
      "Under the hood, the name `scores` does not hold the list itself — it holds a label pointing at the list in memory.",
      "That is why two names can point at the same list: change it through one name, and the other sees the change too.",
      "A list can grow or shrink at any time, and it can even hold a mix of types, like `[1, \"two\", 3.0]` — though keeping one type is usually clearer."
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
      },
      {
        "title": "Two names, one list: the shared-label trap",
        "teaser": "why a copy that isn't a copy can bite you",
        "body": [
          "A list name is a label, not a box. It points at the list rather than holding it.",
          "So `b = a` does not make a second list. It makes a second label pointing at the *same* list.",
          "Now `a.append(99)` changes the one shared list — and `b` shows the `99` too, because `b` was never separate.",
          "This surprises almost every beginner. They expected `b` to be a snapshot of `a`, and it isn't.",
          "When you truly want an independent copy, ask for one: `b = a.copy()` (or `b = list(a)`).",
          "A handy rule of thumb: if you wrote `=` between two list names and expected a copy, you probably got a shared label instead.",
          "This is also why `.append()` is described as changing the list 'in place' — there is only ever one list, and every label pointing at it sees the change."
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
      },
      {
        "term": "in place",
        "def": "A change that edits the existing list itself, rather than building a fresh copy."
      },
      {
        "term": "method",
        "def": "An action that belongs to a value and is called with a dot, like `fruits.append(...)`."
      },
      {
        "term": "element",
        "def": "A single item stored inside a list."
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
      },
      {
        "language": "python",
        "caption": "Two names, one list: changing one changes both",
        "runnable": true,
        "source": "a = [1, 2]\nb = a\na.append(3)\nprint(a)\nprint(b)"
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
    "knowledgeCheck": [
      {
        "q": "Given `colors = [\"red\", \"green\", \"blue\"]`, what does `colors[1]` give you?",
        "options": [
          {
            "text": "\"red\"",
            "correct": false
          },
          {
            "text": "\"green\"",
            "correct": true
          },
          {
            "text": "\"blue\"",
            "correct": false
          },
          {
            "text": "An error, because lists start at 1",
            "correct": false
          }
        ],
        "feedback": "Indexing starts at 0, so `colors[0]` is \"red\" and `colors[1]` is the second item, \"green\"."
      },
      {
        "q": "You run `tidy = sorted(nums)`. What happens to the original `nums`?",
        "options": [
          {
            "text": "It is left unchanged; `sorted()` returns a new ordered list",
            "correct": true
          },
          {
            "text": "It is sorted in place and `tidy` is just another name for it",
            "correct": false
          },
          {
            "text": "It is emptied, with all items moved into `tidy`",
            "correct": false
          },
          {
            "text": "It is deleted to save memory",
            "correct": false
          }
        ],
        "feedback": "`sorted()` builds and returns a fresh ordered copy. Your original list stays exactly as it was."
      },
      {
        "q": "After `a = [1, 2]`, `b = a`, then `a.append(3)`, what does `print(b)` show?",
        "options": [
          {
            "text": "[1, 2]",
            "correct": false
          },
          {
            "text": "[1, 2, 3]",
            "correct": true
          },
          {
            "text": "[3]",
            "correct": false
          },
          {
            "text": "An error",
            "correct": false
          }
        ],
        "feedback": "`b = a` makes a second label for the same list, not a copy. So appending through `a` also shows up in `b`: [1, 2, 3]."
      }
    ],
    "caseStudy": {
      "title": "Spotify's queue is a list",
      "body": [
        "When you line up songs in Spotify, you are building a list.",
        "Each song has a position, and the order is what plays next — the song at index 0 plays first.",
        "Tapping 'Add to queue' is an `.append()`: the song joins the end, leaving the order so far untouched.",
        "Skipping a track removes the item at the front, so the next one shifts up to play.",
        "Shuffle hands you a reordered version of the same songs, much like `sorted()` returns a freshly ordered copy.",
        "Spotify even shows you the count of upcoming songs — that count is a `len()` of the queue."
      ],
      "bridge": "The `[3, 1, 2]` you just sorted is the same idea that powers a music queue."
    },
    "takeaways": [
      "A list holds many values in order, inside `[ ]`.",
      "Items are numbered from `0` — the first is index `0`.",
      "`sorted()` gives you a tidy copy; `len()` counts; `.append()` adds.",
      "A list name is a label, not a box: `b = a` shares one list, so use `a.copy()` for a real copy."
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
    "estMinutes": 12,
    "title": "Looping Over a List",
    "coreIdea": "A `for` loop visits each item in a list, one at a time.",
    "plainEnglish": [
      "You rarely want to handle a list item by item by hand.",
      "A `for` loop does it for you: it walks through the list, one item at a time.",
      "You pick a name for the current item — say `fruit` — and Python fills it in on each pass.",
      "The indented lines run once for every item in the list.",
      "Under the hood, Python does not jump straight to position 5 or 10.",
      "It asks the list for its next item, runs the body, then asks for the next, and so on until there are no items left.",
      "This is why the loop always moves forward through the list and never skips ahead on its own."
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
      },
      {
        "title": "The loop variable lingers after the loop ends",
        "teaser": "what is `fruit` once the loop is done?",
        "body": [
          "A common surprise: the loop variable does not vanish when the loop finishes.",
          "After `for fruit in ['apple', 'pear']:` ends, `fruit` still exists and holds `'pear'` — the last item it saw.",
          "Python does not reset or delete it for you.",
          "This trips people up when they reuse a name like `n` or `item` later in the same program and forget it is still holding the final value.",
          "If you only need the loop variable inside the loop, just do not use it afterwards.",
          "One more pitfall: do not change the size of a list while you loop over it. Adding or removing items mid-loop can make Python skip items or visit some twice."
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
      },
      {
        "term": "loop body",
        "def": "The indented lines under the `for` line — the code that repeats once per item."
      },
      {
        "term": "iteration",
        "def": "One single pass through the loop body, handling one item."
      },
      {
        "term": "accumulator",
        "def": "A variable you set before the loop and update each pass, like `total`, to build up a running result."
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
      },
      {
        "language": "python",
        "caption": "The loop variable still holds the last item afterwards",
        "runnable": true,
        "source": "fruits = [\"apple\", \"pear\"]\nfor fruit in fruits:\n    print(fruit)\nprint(\"last seen:\", fruit)"
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
    "knowledgeCheck": [
      {
        "q": "In `for fruit in fruits:`, what is `fruit`?",
        "options": [
          {
            "text": "The whole list, copied",
            "correct": false
          },
          {
            "text": "A name that holds the current item on each pass",
            "correct": true
          },
          {
            "text": "A built-in Python keyword you must spell exactly",
            "correct": false
          }
        ],
        "feedback": "`fruit` is a name you invent. On each pass Python fills it with the current item from the list."
      },
      {
        "q": "Which lines run once per item in the list?",
        "options": [
          {
            "text": "The indented lines under the `for` line",
            "correct": true
          },
          {
            "text": "Every line in the whole program",
            "correct": false
          },
          {
            "text": "Only the `for` line itself",
            "correct": false
          }
        ],
        "feedback": "The indented loop body repeats once per item. Unindented lines run once, after the loop finishes."
      },
      {
        "q": "After `for n in [10, 20, 30]:` finishes, what does `n` hold?",
        "options": [
          {
            "text": "Nothing — Python deletes `n` when the loop ends",
            "correct": false
          },
          {
            "text": "`30`, the last item the loop saw",
            "correct": true
          },
          {
            "text": "`10`, the first item the loop saw",
            "correct": false
          }
        ],
        "feedback": "The loop variable lingers after the loop. It keeps the last value it was given — here, `30`."
      }
    ],
    "caseStudy": {
      "title": "How an email blast reaches everyone",
      "body": [
        "A newsletter tool like Mailchimp holds a list of subscribers.",
        "To send a campaign, it loops over that list and sends one personalised email per person.",
        "On each pass the loop variable holds one subscriber, so the tool can drop their first name into the greeting and their address into the 'to' field.",
        "Mailchimp routinely sends campaigns to lists of millions of contacts this way.",
        "One loop, a million recipients — no copy-pasting required."
      ],
      "bridge": "Printing each fruit on its own line is the same move as sending each subscriber their own email."
    },
    "takeaways": [
      "A `for` loop runs your code once per item.",
      "The loop variable holds the current item each pass.",
      "Indented lines repeat; unindented lines run once at the end.",
      "The loop variable still holds the last item after the loop finishes."
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
    "estMinutes": 14,
    "title": "Dictionaries: Labelled Data",
    "coreIdea": "A dictionary stores values under labels, so you look things up by name instead of by position.",
    "plainEnglish": [
      "A list finds things by position. A dictionary finds things by label.",
      "Each entry is a pair: a key (the label) and a value (what it holds).",
      "You write it with curly braces: `{'cat': 'meow'}`.",
      "To get a value, you ask for its key: `sounds['cat']` gives you `'meow'`.",
      "Under the hood, Python does not scan every entry one by one.",
      "It runs the key through a quick maths trick called hashing to jump almost straight to the slot where the value lives.",
      "That is why a lookup stays fast even when the dictionary holds a million entries."
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
      },
      {
        "title": "Asking for a key that isn't there",
        "teaser": "`[ ]` crashes, `.get()` stays calm",
        "body": [
          "If you ask for a key that does not exist, `sounds['fox']` raises a `KeyError` and stops your program.",
          "A `KeyError` is Python's way of saying 'there is no such label here'.",
          "To avoid the crash, use `.get()` instead: `sounds.get('fox')` returns `None` when the key is missing.",
          "You can even supply a fallback: `sounds.get('fox', 'unknown')` returns `'unknown'` instead of `None`.",
          "This is why `.get()` is the safer choice when you are not certain the key is present."
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
      },
      {
        "term": "key-value pair",
        "def": "One label joined to one piece of data, like `'cat'` joined to `'meow'`."
      },
      {
        "term": "KeyError",
        "def": "The error Python raises when you ask for a key the dictionary does not have."
      },
      {
        "term": "hashing",
        "def": "A quick maths trick that turns a key into a number, so Python can jump near-straight to where its value is stored instead of searching one by one."
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
      },
      {
        "language": "python",
        "caption": "Use .get() with a fallback so a missing key doesn't crash",
        "runnable": true,
        "source": "sounds = {\"cat\": \"meow\", \"dog\": \"woof\"}\nprint(sounds.get(\"fox\", \"unknown\"))"
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
    "knowledgeCheck": [
      {
        "q": "Given `sounds = {'cat': 'meow', 'dog': 'woof'}`, what does `sounds['dog']` give you?",
        "options": [
          {
            "text": "'woof'",
            "correct": true
          },
          {
            "text": "'dog'",
            "correct": false
          },
          {
            "text": "1 (its position in the dictionary)",
            "correct": false
          },
          {
            "text": "'meow'",
            "correct": false
          }
        ],
        "feedback": "You fetch a value by its key. The key `'dog'` points to the value `'woof'`, so you get `'woof'` back — not the key, and not a position number."
      },
      {
        "q": "You run `sounds['fox']` but `'fox'` is not a key in the dictionary. What happens?",
        "options": [
          {
            "text": "Python raises a KeyError and stops the program",
            "correct": true
          },
          {
            "text": "Python returns an empty string",
            "correct": false
          },
          {
            "text": "Python adds 'fox' with an empty value",
            "correct": false
          },
          {
            "text": "Python returns the first value in the dictionary",
            "correct": false
          }
        ],
        "feedback": "Looking up a missing key with square brackets raises a KeyError. To avoid the crash, use `.get('fox')`, which returns `None` instead."
      },
      {
        "q": "Starting from `ages = {'Ada': 36}`, what does `ages['Ada'] = 40` do?",
        "options": [
          {
            "text": "It overwrites the value for 'Ada', so it becomes 40",
            "correct": true
          },
          {
            "text": "It adds a second 'Ada' entry, keeping both 36 and 40",
            "correct": false
          },
          {
            "text": "It raises an error because 'Ada' already exists",
            "correct": false
          },
          {
            "text": "It leaves the dictionary unchanged",
            "correct": false
          }
        ],
        "feedback": "Keys are unique. Assigning to a key that already exists overwrites its value, so `ages` becomes `{'Ada': 40}` — one label, one value."
      }
    ],
    "caseStudy": {
      "title": "Your phone's contacts app",
      "body": [
        "Your contacts are a dictionary: a name points to a number.",
        "You do not scroll to position 240 — you look up 'Mum'.",
        "The name is the key; the phone number is the value.",
        "This is also why typing a name into the search bar feels instant.",
        "The app does not read every contact in turn; it jumps to the match the way a dictionary jumps to a key.",
        "If you save a new number under a name you already have, it overwrites the old one — exactly like assigning to an existing key."
      ],
      "bridge": "Looking up `'cat'` to get `'meow'` is the same move as tapping a name to get a number."
    },
    "takeaways": [
      "A dictionary stores key-value pairs in `{ }`.",
      "You fetch a value by its key: `d['key']`.",
      "Each key is unique — one label, one value.",
      "A missing key in `[ ]` raises a `KeyError`; use `.get()` for a safe fallback."
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
    "estMinutes": 14,
    "title": "Putting Collections Together",
    "coreIdea": "Once data is in a collection, tools like `sum()` and `.values()` do the heavy lifting for you.",
    "plainEnglish": [
      "You now have two collections: lists for ordered items, dictionaries for labelled ones.",
      "Often you want a single answer out of them — like a total.",
      "A dictionary's `.values()` hands you just the values.",
      "`sum()` then adds them all up in one step. No loop needed.",
      "Under the hood, `sum()` still walks through every value one at a time — it just hides that loop inside a single, tested function so you don't have to write it.",
      "This is the real win of built-in tools: less code to write means fewer places for a typo to creep in.",
      "Python calls these one-at-a-time walks 'iterating', and most collections know how to be iterated over."
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
      },
      {
        "title": "Why sum() can choke — and how to keep it happy",
        "teaser": "one stray word turns a total into an error",
        "body": [
          "`sum()` only knows how to add numbers together.",
          "If even one value is text — say a price was stored as `\"6\"` with quotes instead of `6` — Python stops and raises a `TypeError`.",
          "The message reads something like `unsupported operand type(s) for +: 'int' and 'str'`, which is Python's way of saying 'I can't add a number and a word'.",
          "This is a common pitfall when numbers arrive from a web form or a file, because that data usually shows up as text by default.",
          "The fix is to make sure every value is a real number before summing — for example, convert text like `\"6\"` to the number `6` with `int()` first.",
          "There is also a quiet detail worth knowing: `sum()` starts its running total at `0` by default, so `sum([])` on an empty collection returns `0`, not an error.",
          "That default start value is why an empty cart cleanly shows a total of `0` instead of crashing."
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
      },
      {
        "term": "iterate",
        "def": "To go through a collection one item at a time. `sum()` iterates over the values for you behind the scenes."
      },
      {
        "term": "TypeError",
        "def": "Python's complaint when you mix incompatible types — like trying to add a number and a word together."
      },
      {
        "term": "int()",
        "def": "Turns text that looks like a whole number, such as `\"6\"`, into the actual number `6` you can do maths with."
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
      },
      {
        "language": "python",
        "caption": "An empty collection totals to 0, not an error",
        "runnable": true,
        "source": "empty_cart = {}\nprint(sum(empty_cart.values()))"
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
    "knowledgeCheck": [
      {
        "q": "You have `prices = {\"tea\": 3, \"scone\": 5}`. How do you print the total cost?",
        "options": [
          {
            "text": "print(sum(prices.values()))",
            "correct": true
          },
          {
            "text": "print(sum(prices))",
            "correct": false
          },
          {
            "text": "print(prices.sum())",
            "correct": false
          }
        ],
        "feedback": "`sum(prices.values())` adds the numbers. `sum(prices)` would try to add the keys (words), and dictionaries have no `.sum()` method."
      },
      {
        "q": "What does `sum([])` return when the list is empty?",
        "options": [
          {
            "text": "0",
            "correct": true
          },
          {
            "text": "An error, because there is nothing to add",
            "correct": false
          },
          {
            "text": "An empty list `[]`",
            "correct": false
          }
        ],
        "feedback": "`sum()` starts its running total at `0`, so an empty collection cleanly returns `0` rather than crashing."
      },
      {
        "q": "One value in your dictionary is the text `\"6\"` (with quotes) instead of the number `6`. What happens when you call `sum()` on the values?",
        "options": [
          {
            "text": "Python raises a TypeError because it can't add a number and a word",
            "correct": true
          },
          {
            "text": "Python quietly skips the text value and totals the rest",
            "correct": false
          },
          {
            "text": "Python turns the text into a number automatically and adds it",
            "correct": false
          }
        ],
        "feedback": "`sum()` only adds numbers. Mixing in text like `\"6\"` raises a TypeError. Convert it first with `int(\"6\")` to get the number `6`."
      }
    ],
    "caseStudy": {
      "title": "How a checkout shows your total",
      "body": [
        "An online cart, like Amazon's, stores items and their prices.",
        "To show the total, it sums all the price values.",
        "Same pattern, whether the cart has two items or two hundred.",
        "When you remove the last item, the cart becomes empty — and because `sum()` of nothing is `0`, the page shows a clean $0.00 instead of breaking.",
        "Prices typed into a web form arrive as text, so the checkout converts each one to a number before summing — skipping that step is exactly what triggers a TypeError.",
        "The shipping estimate, loyalty points, and tax line all use the same trick: take the values, hand them to `sum()`, show one number."
      ],
      "bridge": "Summing `{'a': 2, 'b': 3}` to get `5` is exactly what a checkout does to your basket."
    },
    "takeaways": [
      "`.values()` pulls just the values out of a dictionary.",
      "`sum()` adds a collection of numbers in one step.",
      "`sum()` of an empty collection is `0`, not an error.",
      "Mixing text into the numbers raises a TypeError — convert with `int()` first.",
      "Use a list for order, a dictionary for labels."
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
    "estMinutes": 12,
    "title": "Defining and Calling a Function",
    "coreIdea": "A function is a named block of code; `def` defines it, and using its name runs it.",
    "plainEnglish": [
      "A function is a chunk of code you give a name.",
      "You write it once with `def`, then run it later by calling its name.",
      "Defining a function does not run it. Calling it does.",
      "This lets you write a set of steps once and trigger them whenever you want.",
      "Under the hood, Python stores the function as an object in memory, just like it stores a number or a string in a variable.",
      "The name `greet` is really a label that points at that stored block of code.",
      "When you write `greet()`, the parentheses are the signal that says \"run the thing this name points to, right now.\""
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
      },
      {
        "title": "The name and the parentheses do two different jobs",
        "teaser": "why `greet` alone does nothing, but `greet()` runs the code",
        "body": [
          "Writing the name on its own — just `greet` — only points at the function. It does not run it.",
          "The parentheses `()` are the part that actually triggers the code to run. People call this 'invoking' or 'calling'.",
          "This is a real and common bug: someone writes `greet` instead of `greet()` and wonders why nothing happens.",
          "Python does not warn you. The line `greet` is valid — it just evaluates the function and throws the result away, so it looks like nothing happened.",
          "Tip to remember it: a name with no parentheses is like reading the recipe; a name with parentheses is like cooking it."
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
      },
      {
        "term": "body",
        "def": "The indented lines underneath the def line — the actual steps the function runs."
      },
      {
        "term": "indentation",
        "def": "The blank space at the start of a line; in Python it shows which lines belong inside the function."
      },
      {
        "term": "parentheses",
        "def": "The round brackets () after a function name; writing them is what tells Python to run the function."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Define once, call twice — the second call is free",
        "runnable": true,
        "source": "def greet():\n    print(\"Welcome!\")\n\ngreet()\ngreet()"
      },
      {
        "language": "python",
        "caption": "The name alone does nothing — only the parentheses run it",
        "runnable": true,
        "source": "def greet():\n    print(\"Welcome!\")\n\ngreet\nprint(\"Still here, nothing printed above\")\ngreet()"
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
    "knowledgeCheck": [
      {
        "q": "You write `def greet():` with `print(\"hi\")` indented underneath, then run the file. Nothing prints. Why?",
        "options": [
          {
            "text": "You defined the function but never called it with greet()",
            "correct": true
          },
          {
            "text": "Python ran the function but hid the output",
            "correct": false
          },
          {
            "text": "The function name greet is not allowed in Python",
            "correct": false
          }
        ],
        "feedback": "Defining a function only stores it. You have to call it — write greet() on its own line — to actually run the code inside."
      },
      {
        "q": "What is the difference between writing `greet` and writing `greet()`?",
        "options": [
          {
            "text": "greet just points at the function; greet() actually runs it",
            "correct": true
          },
          {
            "text": "There is no difference; both run the function",
            "correct": false
          },
          {
            "text": "greet runs the function and greet() defines it",
            "correct": false
          }
        ],
        "feedback": "The parentheses do the work. `greet` alone just refers to the function; `greet()` calls it and runs the code inside."
      },
      {
        "q": "In Python, how does the language know which lines belong inside a function?",
        "options": [
          {
            "text": "The lines are indented underneath the def line",
            "correct": true
          },
          {
            "text": "The lines are wrapped in curly braces { }",
            "correct": false
          },
          {
            "text": "The lines each end with the word end",
            "correct": false
          }
        ],
        "feedback": "Python uses indentation. The indented lines under `def greet():` form the function's body. Curly braces are used by other languages like Java, not Python."
      }
    ],
    "caseStudy": {
      "title": "Instagram's \"like\" button is one function, called billions of times",
      "body": [
        "When you tap the heart on a photo, the same block of code runs every time.",
        "Engineers wrote that \"record a like\" logic once, inside a function.",
        "It is then called for every user, on every post — Instagram has reported over 4.2 billion likes per day.",
        "Nobody rewrites the like logic for each tap; the function name is just called again and again.",
        "This is why functions matter at scale: one definition, fixed and tested in a single place, can serve billions of calls."
      ],
      "bridge": "Define a useful action once, call it as often as you need — that is exactly what you just did with greet()."
    },
    "takeaways": [
      "`def` defines a function; the indented lines are its body.",
      "Defining a function does not run it.",
      "Calling it by name — `greet()` — is what makes it run.",
      "The parentheses are the part that triggers the code; the name alone does nothing."
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
    "estMinutes": 15,
    "title": "Inputs and Outputs: Arguments and return",
    "coreIdea": "Arguments pass information into a function; `return` hands a result back out.",
    "plainEnglish": [
      "Most functions take in some information and give back a result.",
      "The information you pass in is called an argument.",
      "The result the function hands back is created with `return`.",
      "Think of it as a machine: you feed something in, you get something out.",
      "Under the hood, each argument is copied into a parameter when the call starts.",
      "The moment Python reaches a `return`, the function stops immediately and that value travels back to wherever the call happened.",
      "If a function never reaches a `return`, Python quietly hands back a special value called `None`."
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
      },
      {
        "title": "return ends the function on the spot",
        "teaser": "any code after a return that runs never executes",
        "body": [
          "`return` does two things at once: it hands a value back, and it stops the function right there.",
          "Lines written after a `return` that runs are simply skipped — they never execute.",
          "This is useful for an early exit: you can `return` as soon as you have your answer.",
          "If your function reaches its last line without hitting any `return`, Python automatically returns `None`.",
          "`None` is Python's word for nothing — an empty seat where a value would normally sit.",
          "A classic beginner trap is writing `print(a + b)` inside the function instead of `return a + b`.",
          "It looks right because you see the number on screen, but the caller gets `None` back and the math falls apart."
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
      },
      {
        "term": "return value",
        "def": "The actual result a function gives back — the thing you can store in a variable or use in more math."
      },
      {
        "term": "None",
        "def": "Python's built-in value for nothing; what a function hands back if it never reaches a `return`."
      },
      {
        "term": "function call",
        "def": "Writing a function's name followed by parentheses, like `add(2, 3)`, to actually run it."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "The function returns a value; we capture it in a variable",
        "runnable": true,
        "source": "def add(a, b):\n    return a + b\n\ntotal = add(10, 5)\nprint(total)"
      },
      {
        "language": "python",
        "caption": "A function with no return hands back None",
        "runnable": true,
        "source": "def show(x):\n    print(x)\n\nresult = show(7)\nprint(result)"
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
    "knowledgeCheck": [
      {
        "q": "In `def add(a, b):` followed by the call `add(2, 3)`, which are the arguments?",
        "options": [
          {
            "text": "`a` and `b`",
            "correct": false
          },
          {
            "text": "`2` and `3`",
            "correct": true
          },
          {
            "text": "`add`",
            "correct": false
          },
          {
            "text": "`def`",
            "correct": false
          }
        ],
        "feedback": "`2` and `3` are the arguments — the real values you pass in. `a` and `b` are the parameters, the placeholders that receive them."
      },
      {
        "q": "A function only does `print(a + b)` inside and has no `return`. What does the calling code get back from it?",
        "options": [
          {
            "text": "The sum of `a` and `b`",
            "correct": false
          },
          {
            "text": "`None`",
            "correct": true
          },
          {
            "text": "The text it printed",
            "correct": false
          },
          {
            "text": "An error",
            "correct": false
          }
        ],
        "feedback": "Printing shows text on screen but does not hand a value back. With no `return`, the function gives back `None` — Python's word for nothing."
      },
      {
        "q": "What happens to a line of code written right after a `return` that runs?",
        "options": [
          {
            "text": "It runs first, then the return happens",
            "correct": false
          },
          {
            "text": "It never runs, because `return` ends the function immediately",
            "correct": true
          },
          {
            "text": "It runs twice",
            "correct": false
          },
          {
            "text": "It causes a syntax error",
            "correct": false
          }
        ],
        "feedback": "`return` stops the function on the spot and hands its value back. Any line after a return that runs is simply skipped."
      }
    ],
    "caseStudy": {
      "title": "Google Sheets' SUM is a function with arguments and a return",
      "body": [
        "When you type =SUM(B2, B3) in a spreadsheet, you pass two arguments in: the cell references B2 and B3.",
        "SUM reads the numbers in those cells, adds them, and returns one number to the cell holding the formula.",
        "That returned number is a real value, not just text on screen — you can feed it straight into another formula, like =SUM(B2, B3) * 1.1 to add 10% tax.",
        "If SUM merely displayed the total without returning it, you could never chain it into bigger calculations, and spreadsheets would be far less powerful.",
        "Behind the scenes, that is the same idea as add(2, 3): arguments go in, one value comes back out, ready to reuse."
      ],
      "bridge": "You just built your own tiny SUM: arguments in, a returned answer out — a value you can store and reuse, not just print."
    },
    "takeaways": [
      "Arguments carry information into a function.",
      "`return` hands a result back out.",
      "`return` is different from `print()` — one gives back a value, the other just shows text.",
      "`return` also ends the function immediately; a function with no `return` hands back `None`."
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
    "estMinutes": 13,
    "title": "Reuse and Not Repeating Yourself",
    "coreIdea": "Functions let you write logic once and reuse it everywhere, instead of copying the same code.",
    "plainEnglish": [
      "Copying and pasting the same code is risky.",
      "If you need to fix it, you have to fix every copy.",
      "A function lets you write that logic once and call it everywhere.",
      "Programmers call this DRY: Don't Repeat Yourself.",
      "Under the hood, a function is stored in memory once.",
      "When you call its name, Python jumps to that one stored block, runs it, then comes back.",
      "So every caller shares the exact same instructions — there is only ever one copy to trust."
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
      },
      {
        "title": "The trap: don't get DRY-obsessed",
        "teaser": "two things that just happen to look alike are not the same thing",
        "body": [
          "DRY is about removing one idea written many times.",
          "It is not about merging two ideas that only look similar today.",
          "Imagine a `tax` calculation and a `tip` calculation that both happen to be `amount * 0.1`.",
          "Forcing them into one shared function feels clever, but it is a trap.",
          "The day the tax rate changes to `0.15`, your shared function now breaks the tip too.",
          "Programmers call this a wrong abstraction: code that is glued together for a reason that was never real.",
          "The rule of thumb: only pull code into a function once you see the *same idea* repeated, not just the same characters."
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
      },
      {
        "term": "call",
        "def": "Running a function by writing its name with parentheses, like `square(4)`."
      },
      {
        "term": "single source of truth",
        "def": "One place that holds the real version of something, so everything else points to it instead of keeping its own copy."
      },
      {
        "term": "abstraction",
        "def": "Hiding the messy details behind a simple name, so you can use a thing without re-reading how it works."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "One function, reused on three different numbers",
        "runnable": true,
        "source": "def square(n):\n    return n * n\n\nprint(square(2))\nprint(square(5))\nprint(square(9))"
      },
      {
        "language": "python",
        "caption": "Fix the function once, and every caller improves",
        "runnable": true,
        "source": "def greet(name):\n    return \"Hello, \" + name + \"!\"\n\nprint(greet(\"Ada\"))\nprint(greet(\"Grace\"))\nprint(greet(\"Linus\"))"
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
    "knowledgeCheck": [
      {
        "q": "What does DRY stand for in programming?",
        "options": [
          {
            "text": "Don't Repeat Yourself",
            "correct": true
          },
          {
            "text": "Do Run Yearly",
            "correct": false
          },
          {
            "text": "Delete Redundant YAML",
            "correct": false
          }
        ],
        "feedback": "DRY means \"Don't Repeat Yourself\" — write logic once and reuse it instead of copying it."
      },
      {
        "q": "You have the same calculation copied into 8 places and find a bug in it. Why does putting it in one function help?",
        "options": [
          {
            "text": "You fix it in one place and all 8 callers update automatically",
            "correct": true
          },
          {
            "text": "It makes the program run 8 times faster",
            "correct": false
          },
          {
            "text": "It deletes the other 7 files for you",
            "correct": false
          }
        ],
        "feedback": "A function is one shared block. Fix it once and every place that calls it gets the fix — no hunting for the other copies."
      },
      {
        "q": "When is it a BAD idea to merge two pieces of code into one shared function?",
        "options": [
          {
            "text": "When they only look alike today but are really two different ideas that can change separately",
            "correct": true
          },
          {
            "text": "Whenever the two pieces of code are longer than one line",
            "correct": false
          },
          {
            "text": "Whenever the function would be called more than once",
            "correct": false
          }
        ],
        "feedback": "DRY removes the same idea written twice — not two different ideas that happen to look similar. Merging them creates a wrong abstraction that breaks when one needs to change but the other doesn't."
      }
    ],
    "caseStudy": {
      "title": "Stripe charges every business with the same payment function",
      "body": [
        "Stripe processes payments for millions of companies, from corner shops to Amazon and Shopify.",
        "It does not write fresh \"charge a card\" code for each one.",
        "Instead, a business sends one request to a shared endpoint — `POST /v1/charges` (now the Payment Intents API) — and Stripe's own code does the work.",
        "That one well-tested path handles fraud checks, currency conversion, and bank rules for everybody.",
        "So when Stripe upgrades its fraud detection, every merchant on Earth gets the upgrade at once — nobody has to copy new code into their app."
      ],
      "bridge": "Writing square(n) once and reusing it is the same instinct that keeps huge systems safe and consistent."
    },
    "takeaways": [
      "Copy-pasted code is duplication you have to maintain in many places.",
      "A function lets you write logic once and reuse it.",
      "DRY means one place to fix, one place to improve.",
      "But only share code when it's truly the same idea — not when it just looks alike."
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
    "estMinutes": 14,
    "title": "Using Libraries: import",
    "coreIdea": "`import` brings in ready-made code so you can use functions other people already wrote.",
    "plainEnglish": [
      "You do not have to build everything yourself.",
      "Python comes with libraries — bundles of useful functions.",
      "`import` pulls a library into your program.",
      "Then you reach its functions with a dot, like `math.sqrt`.",
      "Under the hood, `import math` runs the library's code once and stores it under the name `math`.",
      "From then on, that name is a label pointing at the whole toolbox.",
      "The dot then digs inside that label to grab one named piece."
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
      },
      {
        "title": "What import actually does the first time you run it",
        "teaser": "Python runs the library once, then remembers it",
        "body": [
          "The first time you write `import math`, Python finds the library and runs its code.",
          "It stores the result in a hidden cache called `sys.modules`.",
          "So if you write `import math` again later, Python skips the work and reuses the cached copy.",
          "This is why importing the same library twice is fast and harmless — it does not load twice.",
          "A common pitfall: writing `import Math` with a capital M.",
          "Python names are case-sensitive, so `Math` is treated as a different, unknown library.",
          "That mistake raises a `ModuleNotFoundError` — the fix is simply lowercase `math`."
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
      },
      {
        "term": "module",
        "def": "A single file of Python code you can import; the math library is one module."
      },
      {
        "term": "standard library",
        "def": "The set of modules that ship with Python, so you can import them without installing anything."
      },
      {
        "term": "ModuleNotFoundError",
        "def": "The error Python shows when you import a name it cannot find, often from a typo or a missing install."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Import once, then reach inside with a dot",
        "runnable": true,
        "source": "import math\n\nprint(math.isqrt(25))\nprint(math.isqrt(81))"
      },
      {
        "language": "python",
        "caption": "One import unlocks many tools inside the same library",
        "runnable": true,
        "source": "import math\n\nprint(math.isqrt(100))\nprint(math.floor(3.7))\nprint(math.gcd(12, 8))"
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
    "knowledgeCheck": [
      {
        "q": "After writing `import math`, how do you call the `isqrt` function?",
        "options": [
          {
            "text": "math.isqrt(16)",
            "correct": true
          },
          {
            "text": "isqrt.math(16)",
            "correct": false
          },
          {
            "text": "import.isqrt(16)",
            "correct": false
          }
        ],
        "feedback": "You reach a library's function with the library name, a dot, then the function: `math.isqrt(16)`."
      },
      {
        "q": "What is the difference between `math.sqrt(16)` and `math.isqrt(16)`?",
        "options": [
          {
            "text": "sqrt returns 4.0 (a decimal) and isqrt returns 4 (a whole number)",
            "correct": true
          },
          {
            "text": "They are identical and both return 4.0",
            "correct": false
          },
          {
            "text": "sqrt only works on negative numbers",
            "correct": false
          }
        ],
        "feedback": "`math.sqrt` gives a decimal like `4.0`; `math.isqrt` gives a plain whole number like `4`."
      },
      {
        "q": "Why do programmers import libraries like `math` instead of writing the math themselves?",
        "options": [
          {
            "text": "To reuse proven, ready-made functions instead of reinventing them",
            "correct": true
          },
          {
            "text": "Because Python forbids you from doing any math without importing",
            "correct": false
          },
          {
            "text": "Because importing makes the program run on a different computer",
            "correct": false
          }
        ],
        "feedback": "Libraries are tested, ready-made tools — importing lets you reuse them instead of building from scratch."
      }
    ],
    "caseStudy": {
      "title": "Data scientists import NumPy instead of reinventing math",
      "body": [
        "NumPy is a free, open-source library used across science, finance, and AI.",
        "It was first released in 2006 and grew out of earlier projects called Numeric and Numarray.",
        "Researchers import it to do heavy math on large tables of numbers in a single line.",
        "In 2020 the team published a paper in the journal Nature describing NumPy's role in modern science.",
        "It was even used in the analysis behind the first image of a black hole and the LIGO gravitational-wave discovery.",
        "Nobody on those teams rewrote square roots or averages from scratch — they imported proven tools."
      ],
      "bridge": "Typing import math is the first step toward the same superpower the pros use every day."
    },
    "takeaways": [
      "Libraries are bundles of functions other people already wrote.",
      "`import` brings a library into your program.",
      "Reach a library's functions with a dot, like `math.isqrt`."
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
    "estMinutes": 14,
    "title": "Reading and Writing Files",
    "coreIdea": "A program forgets everything when it stops; saving to a file lets it remember.",
    "plainEnglish": [
      "When your program ends, the values it held vanish.",
      "A file is how a program writes something down to keep.",
      "`open()` opens a file. You can write to it or read from it.",
      "Write once, and the text stays on disk. Read it back later, even after the program restarts.",
      "In this in-browser playground each run starts fresh, so write and read the file in the same run. On a real computer the file would still be there tomorrow.",
      "Under the hood, your computer has two kinds of memory. RAM is fast but temporary — it is wiped clean when the program ends. Disk is slower but permanent — it survives a restart.",
      "Variables live in RAM. Writing to a file copies their value onto disk, which is why it lasts.",
      "`open()` does not hand you the text directly. It hands you a file object — a small helper you call `.write()` and `.read()` on to move text between your program and the disk."
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
      },
      {
        "title": "\"w\" erases — when you want \"a\" instead",
        "teaser": "the surprise that deletes your data",
        "body": [
          "Here is the pitfall that catches every beginner once.",
          "`open(name, \"w\")` does not add to the file — it empties it first.",
          "So if you open an existing diary in `\"w\"` mode, everything already inside is gone the instant you open it, even before you write a single word.",
          "When you want to keep the old text and tack new text onto the end, use `\"a\"` for append instead.",
          "`open(\"diary.txt\", \"a\")` opens the file and points at the very end, so `f.write(...)` adds without erasing.",
          "Why does `\"w\"` behave this way? Because \"write\" means \"this is now the file's content\", not \"add to it\". The mode is a promise about what the whole file should look like when you are done.",
          "Rule of thumb: `\"w\"` for a fresh start, `\"a\"` to keep history (like a log), `\"r\"` to just look."
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
      },
      {
        "term": "file object",
        "def": "The helper that open() hands back; you call .write() and .read() on it to move text to and from the disk."
      },
      {
        "term": "append mode (\"a\")",
        "def": "A mode that opens a file and adds new text at the end without erasing what's already there."
      },
      {
        "term": "disk",
        "def": "The permanent storage that keeps your files even after the computer is switched off, unlike memory which is wiped."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Write a line, then read it straight back",
        "runnable": true,
        "source": "with open(\"diary.txt\", \"w\") as f:\n    f.write(\"Today I learned files.\")\n\nwith open(\"diary.txt\", \"r\") as f:\n    print(f.read())"
      },
      {
        "language": "python",
        "caption": "Append adds to the end instead of erasing",
        "runnable": true,
        "source": "with open(\"log.txt\", \"w\") as f:\n    f.write(\"line one\\n\")\n\nwith open(\"log.txt\", \"a\") as f:\n    f.write(\"line two\\n\")\n\nwith open(\"log.txt\", \"r\") as f:\n    print(f.read())"
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
    "knowledgeCheck": [
      {
        "q": "You run `open(\"notes.txt\", \"w\")` on a file that already has text in it. What happens to the old text?",
        "options": [
          {
            "text": "It is erased — \"w\" starts the file fresh.",
            "correct": true
          },
          {
            "text": "The new text is added after the old text.",
            "correct": false
          },
          {
            "text": "Python raises an error because the file is not empty.",
            "correct": false
          }
        ],
        "feedback": "\"w\" (write) empties the file the moment you open it, before you write anything. To keep the old text and add to it, use \"a\" (append)."
      },
      {
        "q": "Why do professionals prefer `with open(...) as f:` over opening a file by hand?",
        "options": [
          {
            "text": "It closes the file for you when the block ends, so you never forget.",
            "correct": true
          },
          {
            "text": "It makes the file load faster.",
            "correct": false
          },
          {
            "text": "It lets you skip choosing a mode like \"w\" or \"r\".",
            "correct": false
          }
        ],
        "feedback": "`with` automatically closes the file when the indented block finishes. An unclosed file may not finish saving its text, so this habit prevents lost data."
      },
      {
        "q": "Your program sets `score = 100` in a variable, then ends. Tomorrow the score is gone. Why?",
        "options": [
          {
            "text": "The variable lived in memory (RAM), which is wiped when the program stops; it was never written to disk.",
            "correct": true
          },
          {
            "text": "Python deletes all variables named `score` for security.",
            "correct": false
          },
          {
            "text": "Numbers cannot be remembered, only text can.",
            "correct": false
          }
        ],
        "feedback": "Variables live in fast but temporary memory. To survive a restart, the value must be copied onto disk with a file (or a database) using something like `f.write(str(score))`."
      }
    ],
    "caseStudy": {
      "title": "How Spotify remembers your playlists",
      "body": [
        "Close the Spotify app and your playlists are still there when you return.",
        "That is because they are written to storage, not held in memory.",
        "On your phone, Spotify saves data in a local database file (it uses SQLite, a file-based database) so your library and recently played list load instantly, even offline.",
        "The master copy lives on Spotify's servers too, so the same playlists appear when you sign in on a different device.",
        "Every app that remembers anything — notes, scores, settings — saves it to a file or database first.",
        "A database is really just a clever set of files with rules for searching them fast; the same write-it-down-then-read-it-back idea sits underneath."
      ],
      "bridge": "You just did the same thing at the smallest scale: write it down, read it back, remember it."
    },
    "takeaways": [
      "Programs forget when they stop; files let them remember.",
      "`open()` with `\"w\"` writes; with `\"r\"` reads.",
      "`\"w\"` erases the file first; use `\"a\"` to add without erasing.",
      "Use `with open(...)` so the file closes itself safely."
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
    "estMinutes": 12,
    "title": "The Standard Library",
    "coreIdea": "Python ships with ready-made tools you can use just by importing them.",
    "plainEnglish": [
      "You do not have to build everything from scratch.",
      "Python comes with a big set of free tools called the standard library.",
      "Each tool is a module you bring in with `import`.",
      "`datetime` handles dates. `math` handles numbers. `random` picks random things. They are already installed.",
      "When you write `import math`, Python finds the module's code, runs it once, and hands you a name you can use.",
      "After that first load, the module is cached in memory — so importing it again in the same program is basically free.",
      "Nothing gets downloaded from the internet. These tools live on your machine the moment Python is installed."
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
      },
      {
        "title": "Where does Python find a module?",
        "teaser": "the import system, and the trap of naming your own file `math.py`",
        "body": [
          "When you run `import math`, Python does not magically know where `math` lives.",
          "It searches a list of folders, in order, until it finds a match.",
          "That list is stored in `sys.path`. The very first place it looks is the folder your own script is in.",
          "This is a classic beginner trap. If you name your own file `random.py` and then write `import random`, Python finds YOUR file first.",
          "Your file does not have the real tools inside it, so you get a confusing error like `module 'random' has no attribute 'randint'`.",
          "The fix is simple: never name your own file the same as a standard library module.",
          "There is one more subtlety worth knowing. The first time a module is imported, Python runs all of its top-level code.",
          "After that, the loaded module is stored in `sys.modules`, a cache. A second `import` of the same module just reuses the cached copy instead of running it again."
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
      },
      {
        "term": "batteries included",
        "def": "Python's slogan meaning the most useful tools already come in the box, ready to use."
      },
      {
        "term": "sys.path",
        "def": "The ordered list of folders Python searches through to find a module you import."
      },
      {
        "term": "attribute",
        "def": "A named thing that lives inside a module or object, reached with a dot — like the `sqrt` in `math.sqrt`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Borrow tools instead of building them",
        "runnable": true,
        "source": "import math\nfrom datetime import date\n\nprint(math.sqrt(81))\nprint(date(2020, 7, 15))"
      },
      {
        "language": "python",
        "caption": "Three different drawers, three different jobs",
        "runnable": true,
        "source": "import math\nimport random\n\nrandom.seed(7)\nprint(math.floor(3.9))\nprint(random.randint(1, 6))"
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
    "knowledgeCheck": [
      {
        "q": "What does `from datetime import date` do that plain `import datetime` does not?",
        "options": [
          {
            "text": "It lets you write `date(...)` directly, without the `datetime.` prefix.",
            "correct": true
          },
          {
            "text": "It downloads the datetime module from the internet first.",
            "correct": false
          },
          {
            "text": "It makes the date calculations run faster.",
            "correct": false
          }
        ],
        "feedback": "`from datetime import date` pulls just the `date` piece into your code, so you can call it by its short name. Plain `import datetime` brings in the whole module, and you reach the date with `datetime.date(...)`."
      },
      {
        "q": "You save a file called `random.py` and inside it write `import random`. Why does it break?",
        "options": [
          {
            "text": "Python searches your own folder first and finds your file instead of the real `random` module.",
            "correct": true
          },
          {
            "text": "You are not allowed to use the word `import` in a file named after a module.",
            "correct": false
          },
          {
            "text": "The real `random` module was never installed with Python.",
            "correct": false
          }
        ],
        "feedback": "Python's search path looks in your script's own folder first. Your `random.py` shadows the real one, so the genuine tools like `randint` are missing. The fix: rename your file."
      },
      {
        "q": "What does \"batteries included\" mean for the standard library?",
        "options": [
          {
            "text": "The most useful tools ship with Python already, with no separate download.",
            "correct": true
          },
          {
            "text": "Python needs an external battery pack to run modules.",
            "correct": false
          },
          {
            "text": "Every module must be turned on before the program starts.",
            "correct": false
          }
        ],
        "feedback": "\"Batteries included\" is Python's way of saying the common tools — dates, math, random, files — come in the box and are ready the moment Python is installed."
      }
    ],
    "caseStudy": {
      "title": "Instagram runs on Python's batteries",
      "body": [
        "Instagram is one of the largest Python applications in the world, serving billions of users from a Django backend.",
        "Its engineers lean heavily on the standard library for everyday tasks like dates, files, and collections.",
        "When Instagram's team wrote a well-known engineering blog post about scaling, a big theme was leaning on Python's mature, built-in tooling rather than rewriting it.",
        "They even used the standard `gc` (garbage collection) module to tune memory and squeeze more performance out of each server.",
        "Reaching for built-in tools instead of reinventing them is how real teams move fast and keep code easy to trust."
      ],
      "bridge": "You just reached into the same toolbox a billion-user app uses every day."
    },
    "takeaways": [
      "Python comes with a huge standard library, already installed.",
      "`import` loads a module so you can use its tools.",
      "`datetime` gives you dates without any extra setup.",
      "Never name your own file after a standard library module, or it will shadow the real one."
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
    "estMinutes": 12,
    "title": "A First Taste of an AI Function",
    "coreIdea": "An AI model is, at heart, a function: text goes in, a prediction comes out.",
    "plainEnglish": [
      "AI can feel like magic. Under the hood, it has a familiar shape.",
      "A model takes an input and returns an output. That is a function.",
      "You give it text; it gives back a prediction.",
      "We will fake the model with a simple function so you can see the shape clearly — no real AI needed.",
      "What changes between our fake and a real one is only the middle part.",
      "Our function does one tiny step; a real model runs billions of calculations.",
      "But the doorway is identical: something goes in one end and an answer comes out the other.",
      "Once that shape clicks, every AI tool you ever call feels like an old friend."
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
      },
      {
        "title": "What actually happens when you call predict()",
        "teaser": "the line that runs, the value that returns",
        "body": [
          "When Python reaches `predict(\"hello\")`, it pauses your current line.",
          "It jumps inside the function and runs its code with `text` set to `\"hello\"`.",
          "The moment it hits `return`, the function stops and hands the value back.",
          "That returned value drops into the exact spot where you called it — as if you had typed `\"HELLO\"` there yourself.",
          "A common pitfall trips up beginners here: `print` inside a function is not the same as `return`.",
          "`print` only shows text on screen; it gives nothing back for your code to reuse.",
          "If `predict` used `print(text.upper())` instead of `return text.upper()`, then `result = predict(\"hello\")` would leave `result` empty (the special value `None`).",
          "Rule of thumb: use `return` when other code needs the answer, and `print` only when a human needs to read it.",
          "Real AI libraries always `return` the prediction, so you can store it, check it, or pass it on."
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
      },
      {
        "term": "argument",
        "def": "The actual value you hand to a function when you call it — here, the text in the brackets."
      },
      {
        "term": "parameter",
        "def": "The named slot inside the function that receives the argument — here, the word `text`."
      },
      {
        "term": "None",
        "def": "Python's word for 'nothing here' — what a function gives back when it has no `return`."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "A tiny \"model\" that returns a prediction",
        "runnable": true,
        "source": "def predict(text):\n    return text.upper()\n\nprint(predict(\"hello\"))\nprint(predict(\"models are functions\"))"
      },
      {
        "language": "python",
        "caption": "Storing the prediction first, then using it — because return hands a value back",
        "runnable": true,
        "source": "def predict(text):\n    return text.upper()\n\nresult = predict(\"ai is a function\")\nprint(result)\nprint(\"Length:\", len(result))"
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
    "knowledgeCheck": [
      {
        "q": "In `predict(\"hello\")`, what is `\"hello\"` called?",
        "options": [
          {
            "text": "The argument — the value you hand to the function",
            "correct": true
          },
          {
            "text": "The return value the function gives back",
            "correct": false
          },
          {
            "text": "The name of the function",
            "correct": false
          }
        ],
        "feedback": "`\"hello\"` is the argument: the actual value you pass in. The function receives it through its parameter `text` and returns a result."
      },
      {
        "q": "If `predict` used `print(text.upper())` instead of `return text.upper()`, what would `result = predict(\"hi\")` store in `result`?",
        "options": [
          {
            "text": "`None` — print shows text but hands nothing back",
            "correct": true
          },
          {
            "text": "`\"HI\"` — print and return do the same thing",
            "correct": false
          },
          {
            "text": "An error, because functions must use return",
            "correct": false
          }
        ],
        "feedback": "`print` only displays text; it returns nothing, so `result` becomes `None`. Use `return` when other code needs the answer."
      },
      {
        "q": "Why do we say an AI model is 'a function'?",
        "options": [
          {
            "text": "It takes an input and returns an output — the same shape as a function",
            "correct": true
          },
          {
            "text": "Because it is written in Python like our `predict`",
            "correct": false
          },
          {
            "text": "Because it never makes mistakes",
            "correct": false
          }
        ],
        "feedback": "The key idea is the shape: input in, prediction out. A real model is far more capable inside, but you call it the same simple way."
      }
    ],
    "caseStudy": {
      "title": "Calling GPT is calling a function",
      "body": [
        "When engineers use OpenAI's API, they call something like `client.responses.create(model=\"gpt-4o\", input=\"...\")`.",
        "Your text goes in as the `input` argument; a predicted response object comes back, and you read the text from it — the exact shape you just built.",
        "Behind that one call, OpenAI's servers run a model with hundreds of billions of internal numbers to produce the answer.",
        "Yet from your code's point of view it is still one call in, one value returned.",
        "The same pattern shows up everywhere: Anthropic's Claude API uses `client.messages.create(...)`, and Google's Gemini uses `model.generate_content(...)`.",
        "Different companies, different names — identical idea: pass text, receive a prediction.",
        "The real model is vastly more capable, but the way you talk to it is this simple."
      ],
      "bridge": "You wrote a function that takes input and returns a prediction. That is how every AI model is used."
    },
    "takeaways": [
      "A model is a function: input in, prediction out.",
      "`return` hands the answer back to the caller.",
      "`print` shows text; `return` gives a value your code can reuse.",
      "Master calling functions and you can call real AI models the same way."
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
    "estMinutes": 12,
    "title": "Putting It All Together",
    "coreIdea": "Real programs combine variables, lists, and calculations into one small machine.",
    "plainEnglish": [
      "Each idea you have learned is a building block.",
      "A real program snaps several blocks together.",
      "Here we store numbers in a list, add them up, and divide to get an average.",
      "Add up with `sum()`, count with `len()`, divide — that is an average.",
      "Under the hood, Python reads your lines from top to bottom, one at a time.",
      "Each line leaves a result behind in a variable, and the next line picks it up.",
      "So `total` has to be calculated before the division can use it — order matters."
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
      },
      {
        "title": "Why the answer ends in .0 — and the trap of an empty list",
        "teaser": "the / operator, and dividing by zero",
        "body": [
          "Python has two divide signs, and they behave differently.",
          "The single slash `/` is 'true division' — it always returns a decimal, even when the numbers divide evenly.",
          "That is why `60 / 3` gives `20.0` and not `20`. The `.0` is Python telling you the result is a decimal number, called a `float`.",
          "There is also a double slash `//` called 'floor division', which throws away the decimal part and keeps a whole number.",
          "Now the trap: an average needs you to divide by the count.",
          "If the list is empty, the count is `0`, and dividing by zero is impossible.",
          "Python stops the program and shows `ZeroDivisionError`.",
          "Real apps guard against this by checking `if len(scores) > 0` before dividing — never assume a list has anything in it."
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
      },
      {
        "term": "float",
        "def": "A number with a decimal point, like 20.0 or 3.5, as opposed to a whole number."
      },
      {
        "term": "variable",
        "def": "A named box that holds a value so you can use it again later by its name."
      },
      {
        "term": "ZeroDivisionError",
        "def": "The error Python shows when you try to divide by zero, which has no answer."
      }
    ],
    "codeExamples": [
      {
        "language": "python",
        "caption": "Combine a list and a calculation",
        "runnable": true,
        "source": "prices = [4, 6, 8, 2]\ntotal = sum(prices)\ncount = len(prices)\nprint(total / count)"
      },
      {
        "language": "python",
        "caption": "Same three blocks, with friendly labels in the output",
        "runnable": true,
        "source": "scores = [10, 20, 30]\ntotal = sum(scores)\ncount = len(scores)\nprint(\"Total:\", total)\nprint(\"Count:\", count)\nprint(\"Average:\", total / count)"
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
    "knowledgeCheck": [
      {
        "q": "What does `len([10, 20, 30])` return?",
        "options": [
          {
            "text": "3",
            "correct": true
          },
          {
            "text": "60",
            "correct": false
          },
          {
            "text": "20.0",
            "correct": false
          }
        ],
        "feedback": "`len()` counts how many items are in the list. There are three numbers, so it returns 3 — not their total."
      },
      {
        "q": "Why does `sum([10, 20, 30]) / len([10, 20, 30])` print `20.0` and not `20`?",
        "options": [
          {
            "text": "Because the single slash `/` always gives a decimal (a float) in Python",
            "correct": true
          },
          {
            "text": "Because `sum()` rounds the answer up",
            "correct": false
          },
          {
            "text": "Because the list has three items",
            "correct": false
          }
        ],
        "feedback": "The `/` operator is true division and always returns a float, so even an even result shows a trailing `.0`."
      },
      {
        "q": "What happens if you try to compute the average of an empty list with `sum(items) / len(items)`?",
        "options": [
          {
            "text": "Python raises a ZeroDivisionError because the count is 0",
            "correct": true
          },
          {
            "text": "Python returns 0.0",
            "correct": false
          },
          {
            "text": "Python returns an empty list",
            "correct": false
          }
        ],
        "feedback": "An empty list has length 0, and dividing by zero is impossible, so Python stops with a ZeroDivisionError. Guard with `if len(items) > 0` first."
      }
    ],
    "caseStudy": {
      "title": "How a fitness app shows your weekly average",
      "body": [
        "Apps like Strava store each run as a record, including its pace and distance.",
        "For a weekly summary, the app gathers that week's runs into a list of numbers — one pace per run.",
        "To show your average pace, it sums those numbers and divides by how many runs there were.",
        "It is the same three blocks you just used: a list, a sum from `sum()`, and a division by a count from `len()`.",
        "If you had a rest week with no runs, the list is empty — so the app must skip the divide, or it would hit a ZeroDivisionError and crash that screen.",
        "That is why a 'no activity this week' message exists: it is the empty-list guard, shown to you as friendly text."
      ],
      "bridge": "You combined variables, a list, and a calculation — the core of nearly every program ever written."
    },
    "takeaways": [
      "Programs combine simple blocks into something useful.",
      "`sum()` totals a list; `len()` counts it.",
      "Total divided by count gives the average — and Python returns a decimal (`float`).",
      "Always guard against an empty list before dividing, or you get a ZeroDivisionError."
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
    "estMinutes": 14,
    "title": "Your First Program: Hello from Java",
    "coreIdea": "Java displays text with `System.out.println()`, wrapped in a little required structure.",
    "plainEnglish": [
      "Like Python, a Java program runs instructions in order.",
      "Java's way to display text is `System.out.println()`. It means: print this line to the output.",
      "Java also needs some structure around your instruction: a class and a `main` method.",
      "For now, treat that structure as a frame you write once. Your real instruction lives inside it.",
      "Every instruction in Java ends with a semicolon `;`. It tells Java that one statement is finished, like a full stop ends a sentence.",
      "The words `public static void` and `(String[] args)` are part of the required frame. You'll meet each later — for now, copy them exactly and focus on the line inside.",
      "Under the hood, Java does not run your code directly. A tool called the compiler first translates your whole file into a lower-level form called bytecode.",
      "That bytecode then runs on the Java Virtual Machine, a kind of universal player installed on the computer. That two-step path is why Java feels more formal than Python — but it is also why the same program runs unchanged on Windows, a Mac, or a phone.",
      "So when you press Run here, two things happen in order: your text is compiled, then the result is executed. If you forget a semicolon or a brace, the compiler catches it before anything runs at all."
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
      },
      {
        "title": "Compile first, run second — and why that helps you",
        "teaser": "Java checks your whole program before it runs a single line",
        "body": [
          "Python reads and runs your file one line at a time, as it goes.",
          "Java works differently. First the compiler reads your entire file and translates it into bytecode. Only then does it run.",
          "This means Java refuses to run a program that does not fit the rules. Miss a semicolon, drop a curly brace, or misspell `System`, and the compiler stops with an error before any output appears.",
          "That can feel strict. But it is a safety net: the compiler catches many mistakes up front, instead of letting them blow up halfway through a running program.",
          "There is a useful split here. A compile error means your code broke a grammar rule and never ran. A runtime error means your code ran but hit a problem partway through.",
          "`println` versus `print`: `println` adds a line break at the end, so the next output starts on a fresh line. `print` does not — the next text continues on the same line. The `ln` literally stands for \"line\"."
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
      },
      {
        "term": "compiler",
        "def": "The tool that reads your whole Java file and translates it into bytecode before anything runs. It also reports grammar mistakes up front."
      },
      {
        "term": "bytecode",
        "def": "The lower-level form your Java code is turned into. It is not machine code yet — it runs on the Java Virtual Machine."
      },
      {
        "term": "Java Virtual Machine (JVM)",
        "def": "A program installed on the computer that runs Java bytecode. Because every device has its own JVM, the same bytecode runs unchanged everywhere."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Run it, then change the message inside the quotes",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, world!\");\n        System.out.println(\"Java is running too.\");\n    }\n}"
      },
      {
        "language": "java",
        "caption": "print vs println — notice how only println starts a new line",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.print(\"Same \");\n        System.out.print(\"line.\");\n        System.out.println();\n        System.out.println(\"New line.\");\n    }\n}"
      }
    ],
    "caseStudy": {
      "title": "Why Android and banks run on Java",
      "body": [
        "Java arrived in 1995 from Sun Microsystems with a now-famous promise: \"write once, run anywhere\".",
        "The trick was the JVM. You compile your code to bytecode once, and any device with a JVM can run it — no rewrite needed.",
        "That portability, plus its strict structure, made Java the backbone of enterprise software. Banks, airlines, and payment systems still run huge Java systems today.",
        "Java was also the original language of Android apps. When Android launched in 2008, app developers wrote in Java, and it powered the rise to billions of devices.",
        "Even now, with Kotlin the newer favourite for Android, vast amounts of existing app and server code are still Java — so the language you are touching now is everywhere."
      ],
      "bridge": "The extra structure is not busywork. It is the discipline that lets Java scale to enormous systems. You just wrote your first piece of it."
    },
    "takeaways": [
      "Java displays text with `System.out.println()`.",
      "Your instructions live inside a class and a `main` method.",
      "Java compiles your whole file to bytecode first, then runs it — so the compiler catches mistakes before anything appears.",
      "The structure feels heavier than Python — and that is the point: it scales."
    ],
    "knowledgeCheck": [
      {
        "q": "What does `System.out.println(\"Hi\");` do?",
        "options": [
          {
            "text": "Displays the text Hi on its own line in the output",
            "correct": true
          },
          {
            "text": "Saves the text Hi to a file",
            "correct": false
          },
          {
            "text": "Asks the user to type the word Hi",
            "correct": false
          },
          {
            "text": "Renames the program to Hi",
            "correct": false
          }
        ],
        "feedback": "`System.out.println()` prints one line of text to the output. The `ln` means it also moves to a new line afterwards."
      },
      {
        "q": "You leave the semicolon off the end of a statement. What happens?",
        "options": [
          {
            "text": "The compiler reports an error and the program does not run",
            "correct": true
          },
          {
            "text": "Java guesses where the semicolon should go and runs anyway",
            "correct": false
          },
          {
            "text": "The program runs but prints nothing",
            "correct": false
          },
          {
            "text": "The line is silently skipped and the rest runs fine",
            "correct": false
          }
        ],
        "feedback": "Java compiles the whole file first. A missing semicolon breaks a grammar rule, so the compiler stops with an error before any output appears."
      },
      {
        "q": "Why can the same Java program run on Windows, a Mac, and an Android phone without being rewritten?",
        "options": [
          {
            "text": "It is compiled to bytecode, which runs on the Java Virtual Machine present on each device",
            "correct": true
          },
          {
            "text": "Java code is stored in the cloud and streamed to each device",
            "correct": false
          },
          {
            "text": "Each device automatically translates the program into its own language as a user reads it",
            "correct": false
          },
          {
            "text": "Java programs only ever run on one type of computer",
            "correct": false
          }
        ],
        "feedback": "Java's \"write once, run anywhere\" works because your code compiles to bytecode, and every device's own JVM knows how to run that bytecode."
      }
    ],
    "challenge": {
      "language": "java",
      "prompt": "Finish the program so it prints the greeting. The frame is written for you — add the line inside main.",
      "starter": "public class Main {\n    public static void main(String[] args) {\n        // write your line here\n    }\n}",
      "expectedOutput": "Hello, Java!",
      "check": "equals",
      "hint": "Use System.out.println(\"Hello, Java!\"); inside main."
    },
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
    "estMinutes": 14,
    "title": "Variables and Types",
    "coreIdea": "A variable is a labelled box that holds a value, and in Java you must say what type of value goes in it.",
    "plainEnglish": [
      "A variable is a named place to store a value so you can use it later.",
      "Java is a typed language. Before you store a value, you say what kind it is.",
      "An `int` holds whole numbers. A `double` holds decimals. A `String` holds text. A `boolean` holds true or false.",
      "You declare a variable by writing the type, then the name, then the value: `int x = 9;`.",
      "Once it has a type, that box can only hold that kind of value.",
      "Behind the scenes, declaring `int age` reserves a small slot of memory sized for a whole number, and the name `age` is just a label pointing at that slot.",
      "The type is read by the compiler — the program that turns your Java into runnable instructions — long before the program runs.",
      "So the type isn't a comment or a hint. It is a rule the compiler enforces, and breaking it stops your code from building at all."
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
      },
      {
        "title": "Why int and double behave so differently",
        "teaser": "whole numbers are exact, decimals are not",
        "body": [
          "An `int` stores a whole number exactly — there is no rounding.",
          "But an `int` divided by an `int` throws away the remainder, so `7 / 2` gives `3`, not `3.5`.",
          "If you want the `.5`, at least one side must be a `double`, like `7.0 / 2`, which gives `3.5`.",
          "A `double` can hold the decimal, but it stores numbers in binary and cannot represent every fraction perfectly.",
          "That is why `0.1 + 0.2` prints `0.30000000000000004` in Java — a tiny rounding error, not a Java bug.",
          "The pitfall: never use `double` for money. A fraction of a cent that vanishes turns into a real mismatch on a real invoice.",
          "Banks store money as whole cents in an `int`-like type, or use a special exact-decimal type, exactly to dodge this."
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
      },
      {
        "term": "double",
        "def": "A type for numbers with a decimal point, like 3.14 or 4.50."
      },
      {
        "term": "compiler",
        "def": "The program that checks your Java and turns it into instructions the computer can run; it enforces type rules before the program starts."
      },
      {
        "term": "value",
        "def": "The actual piece of data stored in a variable, such as the number 9 or the text \"Sam\"."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "One box per type — run it and watch each print",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int age = 30;\n        double price = 4.50;\n        String city = \"Sydney\";\n        boolean isOpen = true;\n        System.out.println(age);\n        System.out.println(price);\n        System.out.println(city);\n        System.out.println(isOpen);\n    }\n}"
      },
      {
        "language": "java",
        "caption": "Whole-number division drops the remainder — run it and see 3, not 3.5",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int wholeDivision = 7 / 2;\n        double realDivision = 7.0 / 2;\n        System.out.println(wholeDivision);\n        System.out.println(realDivision);\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "Which type should you use to store a customer's name, like \"Sam\"?",
        "options": [
          {
            "text": "int",
            "correct": false
          },
          {
            "text": "String",
            "correct": true
          },
          {
            "text": "boolean",
            "correct": false
          },
          {
            "text": "double",
            "correct": false
          }
        ],
        "feedback": "`String` holds text, written in double quotes. `int` and `double` are for numbers, and `boolean` is only true or false."
      },
      {
        "q": "In Java, what does `7 / 2` evaluate to when both numbers are ints?",
        "options": [
          {
            "text": "3.5",
            "correct": false
          },
          {
            "text": "3",
            "correct": true
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "An error",
            "correct": false
          }
        ],
        "feedback": "Dividing an int by an int throws away the remainder, so `7 / 2` is `3`. Make one side a double, like `7.0 / 2`, to get `3.5`."
      },
      {
        "q": "Why does Java make you write the type, as in `int x = 9;`?",
        "options": [
          {
            "text": "It is just an optional comment for other people to read.",
            "correct": false
          },
          {
            "text": "It is a rule the compiler checks before the program runs, catching wrong-type mistakes early.",
            "correct": true
          },
          {
            "text": "It makes the program run faster every time it prints.",
            "correct": false
          },
          {
            "text": "It lets the variable hold any kind of value later on.",
            "correct": false
          }
        ],
        "feedback": "The type is a promise the compiler enforces before your code runs, so a whole class of mistakes is caught at build time rather than in production."
      }
    ],
    "caseStudy": {
      "title": "How a banking app keeps cents straight",
      "body": [
        "A bank's balance is a number, a customer's name is text, and \"account frozen?\" is a yes/no flag.",
        "Java code at banks like JPMorgan declares each as a type — a number, a `String`, a `boolean`.",
        "Because the types are fixed, you can't accidentally add a name to a balance.",
        "Banks go one step further: they avoid `double` for money, because a `double` can lose a fraction of a cent to rounding.",
        "Instead they store amounts as whole cents (a balance of $4.50 becomes the integer 450 cents) or use Java's exact-decimal `BigDecimal` type.",
        "That choice is why your statement always adds up to the last cent, even across millions of transactions a day."
      ],
      "bridge": "The type you wrote on `int x` is the same discipline that keeps real money safe in production systems."
    },
    "takeaways": [
      "A variable is a named box for a value.",
      "Java is typed: you state `int`, `double`, `String`, or `boolean` before the name.",
      "Declare with type, then name, then value: `int x = 9;`.",
      "int division drops the remainder; use a double for exact decimals — and never use double for money."
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
    "estMinutes": 14,
    "title": "Numbers and Math",
    "coreIdea": "Java does arithmetic with `+ - * /`, but dividing two whole numbers throws away the remainder.",
    "plainEnglish": [
      "Java can do maths like a calculator: add, subtract, multiply, and divide.",
      "The symbols are `+`, `-`, `*` for times, and `/` for divide.",
      "Whole numbers are `int`. Numbers with a decimal point are `double`.",
      "Watch out: dividing one `int` by another `int` drops the part after the decimal.",
      "So `7 / 2` gives `3`, not `3.5`. This surprises almost everyone once.",
      "Under the hood, every value in Java has a fixed type, and that type decides how the maths is done.",
      "When both numbers are `int`, Java promises to give you back an `int` — so it must drop the fraction to keep that promise.",
      "The moment you mix in a `double`, Java quietly upgrades the whole sum to decimal maths, and the fraction survives."
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
      },
      {
        "title": "Meet the modulo operator: %",
        "teaser": "The leftover that integer division throws away",
        "body": [
          "Integer division throws the remainder away. The `%` operator hands it back.",
          "`%` is called the modulo (or remainder) operator.",
          "`9 % 4` is `1`, because 4 goes into 9 twice with `1` left over.",
          "`7 % 2` is `1`, because 2 goes into 7 three times with `1` left over.",
          "Here is the mechanism: `9 / 4` gives the `2` (how many whole groups), and `9 % 4` gives the `1` (what is left after those groups).",
          "Together they fully describe the division, with nothing lost.",
          "A classic everyday use: `number % 2`. If it is `0`, the number is even; if it is `1`, the number is odd.",
          "Another: `%` is how clocks wrap around. `(10 + 5) % 12` is `3`, which is how 10 o'clock plus 5 hours lands on 3 o'clock."
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
      },
      {
        "term": "int",
        "def": "A type that holds whole numbers only, with no decimal point, like 3 or -42."
      },
      {
        "term": "double",
        "def": "A type that holds numbers with a decimal point, like 3.5 or 2.25."
      },
      {
        "term": "modulo (%)",
        "def": "An operator that gives the remainder left over after dividing, so 9 % 4 is 1."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "The same division, two ways — run it and compare",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(8 * 5);\n        System.out.println(9 / 4);\n        System.out.println(9.0 / 4);\n    }\n}"
      },
      {
        "language": "java",
        "caption": "Division and remainder side by side — the quotient and what's left over",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(9 / 4);\n        System.out.println(9 % 4);\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "In Java, what does `7 / 2` evaluate to?",
        "options": [
          {
            "text": "3",
            "correct": true
          },
          {
            "text": "3.5",
            "correct": false
          },
          {
            "text": "4",
            "correct": false
          },
          {
            "text": "1",
            "correct": false
          }
        ],
        "feedback": "Both `7` and `2` are whole numbers (`int`), so Java does integer division and throws away the `.5`. The answer is `3`. To get `3.5`, write `7.0 / 2`."
      },
      {
        "q": "You want `9 / 4` to give `2.25` instead of `2`. What is the simplest fix?",
        "options": [
          {
            "text": "Make one side a decimal, like `9.0 / 4`",
            "correct": true
          },
          {
            "text": "Use `%` instead of `/`",
            "correct": false
          },
          {
            "text": "Swap the order to `4 / 9`",
            "correct": false
          },
          {
            "text": "Nothing — `9 / 4` already gives `2.25`",
            "correct": false
          }
        ],
        "feedback": "If either side is a `double`, Java switches to decimal maths and keeps the fraction. `9.0 / 4` gives `2.25`. The `%` operator gives the remainder, not the decimal answer."
      },
      {
        "q": "What does `9 % 4` evaluate to?",
        "options": [
          {
            "text": "1",
            "correct": true
          },
          {
            "text": "2",
            "correct": false
          },
          {
            "text": "2.25",
            "correct": false
          },
          {
            "text": "0",
            "correct": false
          }
        ],
        "feedback": "`%` is the modulo operator: it gives the remainder. 4 goes into 9 twice, leaving `1` left over, so `9 % 4` is `1`. (`9 / 4` would give the `2`.)"
      }
    ],
    "caseStudy": {
      "title": "Splitting a bill in a payments app",
      "body": [
        "Apps like Splitwise divide a total bill among friends.",
        "If they used `int` division, a $10 bill split three ways would show $3 each and quietly lose a dollar.",
        "So they avoid plain `int / int` for money. Many finance systems store amounts as whole cents (1000 cents for $10) and divide carefully.",
        "Dividing 1000 cents by 3 gives 333 cents each, and `1000 % 3` reveals the `1` cent left over.",
        "That leftover cent has to go somewhere — a real app assigns it to one person so the parts add back up to exactly $10.00.",
        "This is also why serious money code avoids `double`: tiny rounding errors in decimals can make cents drift, so types like `BigDecimal` are used for exact arithmetic."
      ],
      "bridge": "Knowing that `int / int` drops the remainder — and that `%` hands that remainder back — is exactly the trap, and the tool, real money apps rely on."
    },
    "takeaways": [
      "Java's maths operators are `+`, `-`, `*`, and `/`.",
      "`int / int` throws away the decimal part.",
      "Use a `double` like `9.0 / 4` when you need the fraction.",
      "The `%` operator gives the remainder that division throws away (`9 % 4` is `1`)."
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
    "estMinutes": 14,
    "title": "Strings in Java",
    "coreIdea": "A `String` holds text, and the `+` sign glues two pieces of text together.",
    "plainEnglish": [
      "A `String` is text: a name, a sentence, anything in double quotes.",
      "You store it like any variable: `String name = \"Sam\";`.",
      "To join text together, use `+`. This is called concatenation.",
      "`\"Hi, \" + name` builds the single text `Hi, Sam`.",
      "You can keep gluing with more `+` signs: `\"Welcome aboard, \" + name + \"!\"` joins three pieces in order. The quoted parts are literal text; `name` with no quotes is replaced by the value stored in it.",
      "Mind the spaces inside the quotes — Java glues exactly what you wrote.",
      "Under the hood, a `String` is really a fixed sequence of characters that Java stores in memory and never edits in place.",
      "When you write `\"Hi, \" + name`, Java doesn't change either piece — it builds a brand-new `String` that contains both, and the originals stay exactly as they were.",
      "That is why we say strings are immutable: every join, every change, quietly produces a fresh piece of text rather than rewriting an old one."
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
      },
      {
        "title": "Why strings are immutable (and why + makes a new one)",
        "teaser": "every join builds a fresh String — the old ones never change",
        "body": [
          "In Java a `String` is immutable. That word means it can never be changed after it is created.",
          "So `+` does not edit either side. It builds a completely new `String` and leaves the originals untouched.",
          "Picture it: `String greeting = \"Hi, \" + name;` reads `\"Hi, \"` and the value in `name`, then makes a third strip of paper that holds both. The first two strips are unchanged.",
          "This is also why one common beginner mistake is silent: writing `name + 1` does not error. Java turns the number `1` into the text `\"1\"` and glues it on, giving `Sam1`, not arithmetic.",
          "The handy rule: if either side of `+` is a `String`, Java treats `+` as glue, not addition.",
          "A real-world cost: if you glue text inside a loop that runs thousands of times, each `+` quietly makes a new `String`, which can pile up. For heavy looping, Java offers `StringBuilder`, a kind of scratch pad you can edit in place — but for everyday greetings, plain `+` is perfectly fine."
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
      },
      {
        "term": "immutable",
        "def": "Cannot be changed after it is created. Every edit to a String actually makes a brand-new String."
      },
      {
        "term": "string literal",
        "def": "Text you type directly in your code between double quotes, like \"Hi, \"."
      },
      {
        "term": "StringBuilder",
        "def": "A built-in Java tool that lets you build up text step by step without making a new String each time — useful when joining a lot of text in a loop."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Glue text together with + — note the space inside the quotes",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        String name = \"Sam\";\n        System.out.println(\"Hi, \" + name);\n        System.out.println(\"Welcome aboard, \" + name + \"!\");\n    }\n}"
      },
      {
        "language": "java",
        "caption": "A number glued to text becomes text, not arithmetic",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        String name = \"Sam\";\n        System.out.println(name + 1);\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "What does `\"Hi,\" + \"Sam\"` print?",
        "options": [
          {
            "text": "Hi,Sam",
            "correct": true
          },
          {
            "text": "Hi, Sam",
            "correct": false
          },
          {
            "text": "Hi, + Sam",
            "correct": false
          }
        ],
        "feedback": "There is no space inside the quotes, so Java glues the strips exactly as written: `Hi,Sam`. To get a gap you must type the space yourself, like `\"Hi, \"`."
      },
      {
        "q": "A `String` in Java is immutable. What does that mean for `\"Hi, \" + name`?",
        "options": [
          {
            "text": "Java edits the original \"Hi, \" text in place to add the name",
            "correct": false
          },
          {
            "text": "Java builds a brand-new String and leaves the originals unchanged",
            "correct": true
          },
          {
            "text": "Java refuses to run because strings cannot be joined",
            "correct": false
          }
        ],
        "feedback": "Immutable means a String never changes after it is made. So `+` does not edit either side — it creates a new String holding both, and the originals stay exactly as they were."
      },
      {
        "q": "If `name` holds `\"Sam\"`, what does `System.out.println(name + 1);` print?",
        "options": [
          {
            "text": "Sam1",
            "correct": true
          },
          {
            "text": "An error, because you can't add a number to text",
            "correct": false
          },
          {
            "text": "Sam (the 1 is ignored)",
            "correct": false
          }
        ],
        "feedback": "When one side of `+` is a String, Java treats `+` as glue, not addition. It turns the number `1` into the text `\"1\"` and joins it on, giving `Sam1`."
      }
    ],
    "caseStudy": {
      "title": "How an email greeting gets your name",
      "body": [
        "Marketing tools like Mailchimp send \"Hi, Sam\" to thousands of people at once.",
        "They store your name as a `String` and concatenate it into a template.",
        "The template is one fixed piece of text with a placeholder — Mailchimp calls these merge tags, written like `*|FNAME|*`.",
        "When the email is sent, the tool swaps the placeholder for your stored first name, which is exactly a concatenation: fixed text plus your name.",
        "Because each recipient's name produces its own new String, one template quietly becomes thousands of personalised greetings.",
        "One line of text plus your name produces a personal-feeling greeting."
      ],
      "bridge": "The `\"Hi, \" + name` you just wrote is the exact trick behind every personalised email you receive."
    },
    "takeaways": [
      "A `String` holds text inside double quotes.",
      "`+` joins strings together — this is concatenation.",
      "Spaces only appear if you type them inside the quotes.",
      "Strings are immutable: every join makes a new String rather than editing an old one.",
      "If either side of `+` is a String, Java glues rather than adds — so `name + 1` becomes text."
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
    "estMinutes": 14,
    "title": "if and else",
    "coreIdea": "An `if` runs a block of code only when a condition is true; `else` runs when it is not.",
    "plainEnglish": [
      "Programs often need to make a choice.",
      "An `if` checks a question that is either true or false.",
      "If the answer is true, Java runs the code in the braces right after it.",
      "Add an `else` to say what to do when the answer is false.",
      "Only one of the two blocks ever runs — never both.",
      "Under the hood, Java first works out the condition into a single `boolean` value: just `true` or `false`.",
      "Then it looks at that value and jumps to the matching block, skipping the other one entirely.",
      "So the lines you skip are not run slowly — they are not run at all."
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
      },
      {
        "title": "The classic = vs == trap",
        "teaser": "one equals sign assigns; two equals signs compare",
        "body": [
          "A single `=` means \"put this value into this box\" — that is assignment.",
          "A double `==` means \"are these two things equal?\" — that is a comparison.",
          "Inside an `if`, you almost always want the comparison `==`, not the assignment `=`.",
          "In many languages, writing `if (x = 5)` silently does the wrong thing and is a famous source of bugs.",
          "Java protects you here: the condition in an `if` must be a `boolean`, so `if (x = 5)` simply will not compile for an `int`.",
          "The fix is to slow down and read it aloud: \"is x equal to 5?\" tells you to use `==`."
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
      },
      {
        "term": "boolean",
        "def": "A value that can only be true or false — the kind of value an if condition must produce."
      },
      {
        "term": "block",
        "def": "The group of statements inside a pair of curly braces { } that run together."
      },
      {
        "term": "==",
        "def": "\"Is equal to\" — compares two values and is true when they match (different from a single = which assigns)."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Change the temperature and run again to see the other branch",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int temperature = 30;\n        if (temperature >= 25) {\n            System.out.println(\"hot\");\n        } else {\n            System.out.println(\"mild\");\n        }\n    }\n}"
      },
      {
        "language": "java",
        "caption": "== compares for equality; change the password to see the other branch",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int code = 1234;\n        if (code == 1234) {\n            System.out.println(\"unlocked\");\n        } else {\n            System.out.println(\"denied\");\n        }\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "In an if/else, how many of the two blocks run for a single check?",
        "options": [
          {
            "text": "Exactly one — Java picks the matching block and skips the other.",
            "correct": true
          },
          {
            "text": "Both blocks always run, one after the other.",
            "correct": false
          },
          {
            "text": "Neither block runs unless you call them by name.",
            "correct": false
          }
        ],
        "feedback": "The condition becomes true or false, and Java runs only the matching block. The other is skipped entirely."
      },
      {
        "q": "You want to check whether `score` equals 10 inside an if. Which symbol do you use?",
        "options": [
          {
            "text": "`==`, because two equals signs compare two values.",
            "correct": true
          },
          {
            "text": "`=`, because one equals sign asks if they are equal.",
            "correct": false
          },
          {
            "text": "`>=`, because that means equal.",
            "correct": false
          }
        ],
        "feedback": "A single `=` assigns a value; `==` compares. To test equality use `if (score == 10)`."
      },
      {
        "q": "What is the job of the curly braces `{ }` right after an `if (...)`?",
        "options": [
          {
            "text": "They mark exactly which lines belong to the true branch.",
            "correct": true
          },
          {
            "text": "They are just decoration and can always be left out.",
            "correct": false
          },
          {
            "text": "They turn the condition from false into true.",
            "correct": false
          }
        ],
        "feedback": "The braces group the statements of the branch. Code after the closing brace runs no matter what the condition was."
      }
    ],
    "caseStudy": {
      "title": "How Gmail decides what is spam",
      "body": [
        "Every email Gmail receives faces a decision.",
        "Simplified, it is one giant `if`: does this message look like spam?",
        "If yes, it goes to the Spam folder; if no, it lands in your inbox.",
        "In reality Google's filter scores each message on signals like the sender's reputation, suspicious links, and words common in scams.",
        "If that score crosses a threshold, the `if` fires and the message is routed to Spam; otherwise the `else` path delivers it.",
        "Google has said this kind of filtering blocks the large majority of spam before it ever reaches an inbox."
      ],
      "bridge": "That folder choice is the same `if`/`else` you just wrote — only with a smarter condition."
    },
    "takeaways": [
      "`if` runs its block only when the condition is true.",
      "`else` covers the false case — exactly one block runs.",
      "The curly braces `{ }` mark which lines belong to the choice.",
      "Use `==` to compare for equality; a single `=` assigns instead."
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
    "estMinutes": 12,
    "title": "Comparisons and Booleans",
    "coreIdea": "Comparing two values gives a boolean — a value that is always either `true` or `false`.",
    "plainEnglish": [
      "A comparison asks a yes-or-no question about values.",
      "`5 > 2` asks: is 5 greater than 2?",
      "The answer is a boolean: either `true` or `false`.",
      "These are the questions an `if` uses to decide what to do.",
      "You can even print a boolean to see the answer directly.",
      "Under the hood, the computer does not store the words \"true\" and \"false\".",
      "It stores a single bit: a 1 for `true` or a 0 for `false`.",
      "So a comparison is really the computer reducing a whole question down to one tiny on/off flag."
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
      },
      {
        "title": "Why `==` is dangerous with text",
        "teaser": "the trap that bites everyone the first time they compare words",
        "body": [
          "With numbers, `==` works exactly as you expect: `5 == 5` is `true`.",
          "But text in Java is a different kind of value, called a `String`.",
          "For a `String`, `==` does not ask \"do these words read the same?\".",
          "It asks \"are these the very same object in memory?\" — a much pickier question.",
          "Two strings that look identical can live in two different memory slots, so `==` returns `false`.",
          "To compare the actual letters, Java gives you a method: `\"cat\".equals(\"cat\")` returns `true`.",
          "Rule of thumb: use `==` for numbers and booleans, use `.equals(...)` for text.",
          "This single gotcha is one of the most common bugs in beginner Java — now you know to expect it."
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
      },
      {
        "term": "operator",
        "def": "A symbol that does something to values, like `>` (compare) or `+` (add)."
      },
      {
        "term": "String",
        "def": "Java's type for text — a piece of writing like \"cat\" or \"hello\"."
      },
      {
        "term": ".equals(...)",
        "def": "The method used to check whether two pieces of text read the same. Safer than `==` for words."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Each line prints a boolean — try changing the numbers",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        System.out.println(10 > 3);\n        System.out.println(4 == 5);\n        System.out.println(7 <= 7);\n    }\n}"
      },
      {
        "language": "java",
        "caption": "Save a comparison's answer in a boolean, then print it",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        boolean isAdult = 21 >= 18;\n        System.out.println(isAdult);\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "What does the expression `7 == 7` evaluate to?",
        "options": [
          {
            "text": "true",
            "correct": true
          },
          {
            "text": "false",
            "correct": false
          },
          {
            "text": "7",
            "correct": false
          },
          {
            "text": "It causes an error",
            "correct": false
          }
        ],
        "feedback": "`==` asks \"are these equal?\". Seven equals seven, so the boolean answer is `true`."
      },
      {
        "q": "You want to check if `age` is at least 18. Which line is correct?",
        "options": [
          {
            "text": "age >= 18",
            "correct": true
          },
          {
            "text": "age = 18",
            "correct": false
          },
          {
            "text": "age => 18",
            "correct": false
          },
          {
            "text": "age < 18",
            "correct": false
          }
        ],
        "feedback": "`>=` means greater-or-equal, which captures \"at least\". A single `=` would assign 18 instead of comparing, and `=>` is not a Java operator."
      },
      {
        "q": "Why might `\"cat\" == \"cat\"` not reliably return `true` for text in Java?",
        "options": [
          {
            "text": "Because `==` checks if two strings are the same object in memory, not whether the letters match",
            "correct": true
          },
          {
            "text": "Because Java cannot compare text at all",
            "correct": false
          },
          {
            "text": "Because text comparisons always return `false`",
            "correct": false
          },
          {
            "text": "Because `==` only works on numbers above zero",
            "correct": false
          }
        ],
        "feedback": "For text, `==` asks an identity question (same memory slot?), not a content question. Use `\"cat\".equals(\"cat\")` to compare the actual letters."
      }
    ],
    "caseStudy": {
      "title": "The boolean behind every online filter",
      "body": [
        "When you shop on Amazon and slide the price filter to \"under $50\", every product in the results gets checked one by one.",
        "Behind the scenes it is a comparison: `price < 50`.",
        "Each product where that boolean is `true` stays on the page; the `false` ones are hidden.",
        "Stack several filters — price, star rating, \"Prime eligible\" — and each one is its own boolean.",
        "A product is shown only when every boolean is `true` at the same time.",
        "Databases like the ones behind Amazon turn the same comparisons into a query, then run them across millions of rows in milliseconds."
      ],
      "bridge": "Every filter you have ever used is millions of these true/false comparisons running at once."
    },
    "takeaways": [
      "A comparison always produces a boolean: `true` or `false`.",
      "`==` compares; a single `=` assigns — keep them straight.",
      "For text, prefer `.equals(...)` over `==`.",
      "Booleans are the answers that `if` statements depend on."
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
    "estMinutes": 14,
    "title": "while Loops",
    "coreIdea": "A `while` loop repeats a block of code over and over, as long as its condition stays true.",
    "plainEnglish": [
      "Sometimes you want to repeat the same work many times.",
      "A `while` loop checks a condition, then runs its block if the condition is true.",
      "Then it checks again, and runs again — over and over.",
      "It stops the moment the condition becomes false.",
      "Something inside the loop must change, or it would run forever.",
      "Under the hood, the computer is just jumping back to the top of the loop and re-checking the same `boolean` question.",
      "The condition is tested first, so if it starts false the block runs zero times — the loop can be skipped entirely.",
      "Each full pass through the block is called one iteration."
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
      },
      {
        "title": "Off-by-one: the classic loop bug",
        "teaser": "why your loop ran one time too many — or one too few",
        "body": [
          "The most common loop bug after the infinite loop is the off-by-one error.",
          "It happens when your condition uses the wrong comparison.",
          "Say you want to print 1 to 5, so you write `while (i <= 5)` starting at `i = 1`.",
          "Change it to `while (i < 5)` and you print only 1 to 4 — one short.",
          "Change the start to `i = 0` and you print 0 to 5 — one too many, and an extra line.",
          "The fix is simple: trace the loop on paper for the first and last pass.",
          "Write down the value of `i` and ask \"does the block run on this value?\" — that catches the bug before you run anything."
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
      },
      {
        "term": "iteration",
        "def": "One full run through the loop's block of code."
      },
      {
        "term": "condition",
        "def": "A true-or-false question the loop checks before each pass."
      },
      {
        "term": "off-by-one error",
        "def": "A bug where the loop runs one time too many or one too few, usually from the wrong comparison like `<` instead of `<=`."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Counts down from 3 — watch the condition turn false",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int count = 3;\n        while (count > 0) {\n            System.out.println(count);\n            count = count - 1;\n        }\n        System.out.println(\"liftoff\");\n    }\n}"
      },
      {
        "language": "java",
        "caption": "A false condition means the block never runs at all",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int i = 10;\n        while (i < 5) {\n            System.out.println(\"this never prints\");\n        }\n        System.out.println(\"loop was skipped\");\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "A `while` loop checks its condition before each pass. What happens if the condition is false the very first time it is checked?",
        "options": [
          {
            "text": "The block runs zero times — the loop is skipped entirely.",
            "correct": true
          },
          {
            "text": "The block always runs at least once, then stops.",
            "correct": false
          },
          {
            "text": "The program crashes because the loop never started.",
            "correct": false
          }
        ],
        "feedback": "A `while` loop tests its condition first. If that test is false at the start, the block is skipped and the program moves on — it can run zero times."
      },
      {
        "q": "You write `int i = 1; while (i <= 3) { System.out.println(i); }` but forget the line `i = i + 1`. What goes wrong?",
        "options": [
          {
            "text": "It prints 1 forever — an infinite loop, because `i` never changes.",
            "correct": true
          },
          {
            "text": "It prints 1, 2, 3 and then stops normally.",
            "correct": false
          },
          {
            "text": "It prints nothing because `i` was never updated.",
            "correct": false
          }
        ],
        "feedback": "Nothing inside the loop changes `i`, so `i <= 3` stays true forever. The loop keeps printing 1 — that is an infinite loop."
      },
      {
        "q": "You want to print the numbers 1, 2, 3, 4, 5. Starting at `int i = 1`, which condition prints exactly those five numbers?",
        "options": [
          {
            "text": "`while (i <= 5)`",
            "correct": true
          },
          {
            "text": "`while (i < 5)`",
            "correct": false
          },
          {
            "text": "`while (i > 5)`",
            "correct": false
          }
        ],
        "feedback": "Starting at 1, `i <= 5` runs for 1, 2, 3, 4, 5 and stops at 6. Using `i < 5` stops at 5 and prints only 1 to 4 — a classic off-by-one error."
      }
    ],
    "caseStudy": {
      "title": "How a download bar keeps going",
      "body": [
        "When you download a file in a browser like Chrome, the progress bar updates again and again.",
        "Behind it is a loop: while the file is not fully received, keep reading the next chunk of bytes.",
        "Files arrive in small pieces, not all at once — a 10 MB file might come as thousands of small chunks over the network.",
        "Each pass through the loop reads one chunk, writes it to disk, and nudges the progress bar forward a little.",
        "The condition being checked is something like \"have we received fewer bytes than the file's total size?\"",
        "The instant the last chunk arrives and the byte count matches the total, the condition turns false and the loop ends.",
        "That is also why a download can stall: if a chunk never arrives, the condition stays true and the loop just waits."
      ],
      "bridge": "\"Keep going while there is more to do\" is exactly the `while` loop you just wrote."
    },
    "takeaways": [
      "A `while` loop repeats its block while the condition is true.",
      "Change something inside the loop so it can eventually stop.",
      "A condition that never turns false is an infinite loop.",
      "The condition is checked first, so a loop can run zero times.",
      "Watch your comparison (`<` vs `<=`) to avoid off-by-one errors."
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
    "estMinutes": 14,
    "title": "for Loops",
    "coreIdea": "A `for` loop packs the start, the check, and the change of a counting loop onto one tidy line.",
    "plainEnglish": [
      "A `for` loop does the same job as a `while` loop.",
      "It just keeps all three loop parts together in one place.",
      "You write the start, the condition, and the change, separated by semicolons.",
      "Java runs the block once for each value of the counter.",
      "It is the go-to loop whenever you are counting.",
      "Under the hood, Java is not doing anything magic — it runs the three parts in a fixed order, over and over.",
      "First the start runs one time, then the condition is tested, and if it is true the block runs, then the change runs, then the condition is tested again.",
      "Keeping all three parts on one line means you can see the whole loop at a glance, so it is harder to forget to move the counter forward and get stuck looping forever."
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
      },
      {
        "title": "The order the three parts run in",
        "teaser": "Why the change happens at the bottom, not the top",
        "body": [
          "People often assume the three parts run left to right on every pass — they do not.",
          "Java runs the start (`int i = 0`) exactly once, before anything else.",
          "Then it loops this cycle: check the condition, run the block, run the change.",
          "So the change (`i++`) actually happens after the block, even though you wrote it in the middle of the line.",
          "This is why the very first pass uses the start value — on pass one, `i` is still 0, not 1.",
          "A common pitfall is forgetting the change part: leave out `i++` and `i` never moves, the condition stays true, and the loop runs forever.",
          "A loop that never ends is called an infinite loop, and it will hang your program until you stop it."
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
      },
      {
        "term": "iteration",
        "def": "One full pass through the loop's block — five iterations means the block ran five times."
      },
      {
        "term": "infinite loop",
        "def": "A loop whose condition never becomes false, so it runs forever and hangs the program."
      },
      {
        "term": "i--",
        "def": "Shorthand for i = i - 1 — subtracts one from the counter, used to count down."
      }
    ],
    "codeExamples": [
      {
        "language": "java",
        "caption": "Prints a 5-line countdown using a for loop",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        for (int i = 5; i > 0; i--) {\n            System.out.println(i);\n        }\n        System.out.println(\"go\");\n    }\n}"
      },
      {
        "language": "java",
        "caption": "Adds up 1 through 5 with a running total",
        "runnable": true,
        "source": "public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int i = 1; i <= 5; i++) {\n            total = total + i;\n        }\n        System.out.println(total);\n    }\n}"
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
    "knowledgeCheck": [
      {
        "q": "How many times does `for (int i = 0; i < 5; i++)` run its block?",
        "options": [
          {
            "text": "Four times",
            "correct": false
          },
          {
            "text": "Five times",
            "correct": true
          },
          {
            "text": "Six times",
            "correct": false
          }
        ],
        "feedback": "It uses the values 0, 1, 2, 3, 4 and stops before 5 — that is exactly five passes."
      },
      {
        "q": "In a `for` loop, when does the change part (like `i++`) run?",
        "options": [
          {
            "text": "Once, before the loop starts",
            "correct": false
          },
          {
            "text": "After the block runs, on each pass",
            "correct": true
          },
          {
            "text": "Only when the condition is false",
            "correct": false
          }
        ],
        "feedback": "The start runs once. Then each pass is: check the condition, run the block, then run the change."
      },
      {
        "q": "What happens if you forget the change part and `i` never moves?",
        "options": [
          {
            "text": "The loop runs forever as an infinite loop",
            "correct": true
          },
          {
            "text": "Java skips the loop entirely",
            "correct": false
          },
          {
            "text": "The loop runs exactly once and stops",
            "correct": false
          }
        ],
        "feedback": "With no change, the condition stays true forever, so the loop never ends — that is an infinite loop."
      }
    ],
    "caseStudy": {
      "title": "The loop behind every slideshow",
      "body": [
        "When a photo app builds a slideshow, it has a fixed set of images.",
        "It uses a `for` loop: for each photo from the first to the last, show it.",
        "The counter walks through the photos one at a time, in order.",
        "Say there are 12 photos stored in order, numbered 0 through 11.",
        "The app writes `for (int i = 0; i < 12; i++)` and shows photo number `i` each pass.",
        "Because the counter starts at 0 and stops before 12, it lands on every photo exactly once.",
        "This is also why the counter starts at 0 — in Java, the first item in a list of photos is item number 0, not 1."
      ],
      "bridge": "Whenever there is a known number of things to step through, a `for` loop is the natural fit — just like the one you wrote."
    },
    "takeaways": [
      "A `for` loop bundles start, condition, and change onto one line.",
      "`i++` is the usual way to step the counter forward.",
      "It is the standard choice when you know how many times to repeat.",
      "The start runs once; then it checks, runs the block, and changes — in that order.",
      "Forget the change and you get an infinite loop that never stops."
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
