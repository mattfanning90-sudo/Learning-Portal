// Full-Stack Engineering track. Auto-assembled by scripts/assemble-fullstack.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = {
  "fs-m1-l1": {
    "id": "fs-m1-l1",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 1,
    "title": "What Happens When You Visit a URL",
    "estMinutes": 9,
    "coreIdea": "Loading a web page is a round trip: your browser finds the right server, asks it for the page over the internet, and the server sends back files the browser then assembles into what you see.",
    "plainEnglish": [
      "You type a web address and a page appears, seemingly instantly.",
      "Underneath, a fast conversation just happened between two computers.",
      "Your browser found the computer that holds the page, asked it for the page, and got an answer back.",
      "That answer was not a picture — it was a bundle of text files that your browser then built into the page on screen.",
      "Almost everything on the web is a version of this one pattern: ask, answer, assemble."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Visiting a URL is like ordering takeaway by phone. You look up the restaurant's number (finding the server), you call and say what you want (the request), and the kitchen cooks it and sends it over (the response).",
        "The food arrives as separate ingredients in boxes, and you plate it up at home — just as your browser receives raw files and assembles the finished page itself.",
        "Where the metaphor bends: a phone order is one slow back-and-forth, while loading a page is often dozens of these requests firing in well under a second."
      ]
    },
    "deepSections": [
      {
        "title": "The round trip: request and response",
        "teaser": "Every page load is a question and an answer",
        "body": [
          "The whole web runs on one repeating move called a `request` and a `response`.",
          "A `request` is your browser asking a specific computer for something — usually, \"please send me this page.\"",
          "A `response` is that computer sending something back — usually the files that make up the page.",
          "The computer that answers is called a `server`: a machine whose job is to wait for requests and serve back what was asked for.",
          "This one ask-and-answer pattern, repeated, is the engine under nearly everything you do online."
        ]
      },
      {
        "title": "Finding the right computer first",
        "teaser": "A name has to become an address before anyone can talk",
        "body": [
          "You typed a name like `bbc.com`, but computers on the internet find each other by number, not by name.",
          "So before anything else, your browser looks up the number that the name points to — a step handled by the `DNS` (Domain Name System), the internet's address book.",
          "Think of it as the difference between a contact's name in your phone and the actual phone number behind it.",
          "Once the browser has that number, it knows which server to call.",
          "We will not unpack how that lookup works here — that is its own lesson later in this module."
        ]
      },
      {
        "title": "Files come back, then the browser builds the page",
        "teaser": "The server sends parts; your browser does the assembly",
        "body": [
          "The server's `response` is not a finished image of the page — it is the raw materials.",
          "Those materials are mostly three kinds of text file: `HTML` (the content and structure), `CSS` (the styling), and `JavaScript` (the behaviour).",
          "Your browser reads `HTML`, sees it needs more pieces, and fires off more requests for the images, fonts, and scripts it references.",
          "As each piece arrives, the browser lays it out and paints it on screen — this assembly step is called `rendering`.",
          "So the heavy lifting is split: the server hands over parts, and your browser turns those parts into the page you actually see."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "URL",
        "def": "A web address you type or click — short for Uniform Resource Locator — that names exactly which page or file you want."
      },
      {
        "term": "browser",
        "def": "The program on your device (Chrome, Safari, Firefox) that makes web requests and turns the responses into the pages you see."
      },
      {
        "term": "server",
        "def": "A computer whose job is to wait for requests over the internet and send back what was asked for, such as a web page."
      },
      {
        "term": "request",
        "def": "A message from your browser asking a server for something specific — most often, \"send me this page.\""
      },
      {
        "term": "response",
        "def": "The server's reply, usually the bundle of files that make up the page you asked for."
      },
      {
        "term": "DNS",
        "def": "The Domain Name System — the internet's address book that turns a human name like `bbc.com` into the number a computer can dial."
      }
    ],
    "pmAngle": {
      "body": [
        "Every page load is a chain of round trips, and each link can be slow or can fail — the name lookup, the trip across the internet, the server's work, and the browser's assembly.",
        "Knowing the chain tells you where to ask questions: when a page is slow, the honest first question is \"which step is the bottleneck?\" rather than a vague \"the site is slow.\"",
        "It also frames a core build decision you will meet again — how much work the server does before sending versus how much the browser does after — which shapes speed, cost, and what your team has to maintain."
      ]
    },
    "caseStudy": {
      "title": "Tim Berners-Lee and the first web page (1991)",
      "body": [
        "In 1991 at CERN, the physics lab near Geneva, Tim Berners-Lee put the world's first web page online.",
        "He had invented the three pieces that still define a page request: the URL to name a page, HTTP as the rules for asking and answering, and HTML as the file format for the content.",
        "A browser would request that page by its URL, and Berners-Lee's server would respond with the HTML file.",
        "That exact ask-and-answer loop — request a URL, get back HTML — is still what happens when you open any site today, just far faster and with many more pieces."
      ],
      "bridge": "The web has grown enormously, but every visit to a URL is still the same round trip he designed: name a page, ask for it, and assemble what comes back."
    },
    "takeaways": [
      "Loading a page is a round trip: your browser sends a request and the server sends a response.",
      "Before talking, the browser turns the URL's name into an address using DNS, the internet's address book.",
      "The response is raw files (HTML, CSS, JavaScript), not a finished picture of the page.",
      "Your browser assembles those files into what you see — that final step is called rendering."
    ],
    "knowledgeCheck": [
      {
        "q": "At its core, what happens when you visit a URL?",
        "options": [
          {
            "text": "Your browser sends a request to a server, and the server sends back a response with the page's files",
            "correct": true
          },
          {
            "text": "Your browser already has the page stored and simply displays it from your device",
            "correct": false
          },
          {
            "text": "The server reaches into your browser and draws the finished page directly onto your screen",
            "correct": false
          }
        ],
        "feedback": "Right — the web runs on a request-and-response round trip: the browser asks, the server answers with the files that make up the page."
      },
      {
        "q": "You typed a name like `bbc.com`. Why does the browser need DNS before it can load the page?",
        "options": [
          {
            "text": "Computers find each other by number, so DNS translates the name into the address the browser can actually dial",
            "correct": true
          },
          {
            "text": "DNS downloads and stores the page so the browser does not have to ask the server",
            "correct": false
          },
          {
            "text": "DNS styles the page so the browser knows what fonts and colours to use",
            "correct": false
          }
        ],
        "feedback": "Correct — DNS is the internet's address book; it turns the human-friendly name into the number the browser uses to reach the right server."
      },
      {
        "q": "What does the server actually send back in its response?",
        "options": [
          {
            "text": "Raw files like HTML, CSS, and JavaScript that the browser then assembles into the page",
            "correct": true
          },
          {
            "text": "A single finished image of the page, ready to show with no further work",
            "correct": false
          },
          {
            "text": "Only the text, while the browser invents the layout and styling on its own",
            "correct": false
          }
        ],
        "feedback": "Exactly — the server hands over the raw materials, and the browser does the assembly (rendering) to produce what you see."
      }
    ],
    "sources": [
      {
        "label": "MDN — What is a web server?",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
      },
      {
        "label": "MDN — How the Web works",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works"
      },
      {
        "label": "CERN — The birth of the web",
        "url": "https://home.cern/science/computing/birth-web"
      }
    ]
  },
  "fs-m1-l2": {
    "coreIdea": "Every app is split into two halves — a client that the user holds and that requests and displays things, and a server, a shared remote computer that responds and guards the real logic and data.",
    "estMinutes": 9,
    "plainEnglish": [
      "Open almost any app and you are really looking at two computers talking to each other.",
      "One is the `client` — the browser tab or phone app in your hands. It asks for things and draws them on the screen.",
      "The other is the `server` — a computer in a data centre somewhere that you never see. It answers those requests and holds the shared logic and data.",
      "The client is yours alone; the server is shared by everyone using the app at once.",
      "Nearly every confusing word in web development — frontend, backend, API, deploy — is just describing which of these two halves you mean."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of a restaurant. You sit at a table (the client): you read the menu, decide what you want, and place an order — but you cannot walk into the kitchen.",
        "The kitchen (the server) holds the recipes, the ingredients, and the one head chef who keeps every dish consistent. It takes your order, does the real work out of sight, and sends a plate back.",
        "Where the metaphor bends: a restaurant has one kitchen serving a few dozen tables, while one server quietly serves thousands of clients at the same moment — and you can clone the kitchen in seconds when the dinner rush hits."
      ]
    },
    "deepSections": [
      {
        "title": "Why the split exists at all",
        "teaser": "One shared truth, many untrusted hands",
        "body": [
          "You could imagine putting everything on the user's device and skipping the server. It almost never works, for three reasons.",
          "First, there must be one shared source of truth. Your bank balance has to be the same number whether you check it on your laptop or your phone — so it lives in one place, the server, not on each device.",
          "Second, the client cannot be trusted. Anyone can open their browser's tools and change what is on their own screen, so the rules that actually matter — \"this account has enough money,\" \"this password is correct\" — must be checked on the server, where the user can't reach them.",
          "Third, there are many clients but one server. Millions of phones can talk to the same backend, and the server is what keeps them all in sync and consistent.",
          "So the split is not an accident of history — it is the only way to have a shared, trustworthy, always-consistent app."
        ]
      },
      {
        "title": "What lives where",
        "teaser": "UI on the client; logic, secrets, and data on the server",
        "body": [
          "The client's job is presentation: drawing the screen, reacting to taps and clicks, and showing what came back. This is the `user interface`, or `UI`.",
          "The server's job is everything that must be shared, protected, or trusted: the `business logic` (the rules of how the app behaves), the `database` (the permanent store of records), and the secrets like passwords and payment keys.",
          "A simple test: if it would be dangerous for a user to be able to rewrite it, it belongs on the server. The price of an item, the rule for who can see what — server.",
          "If it is purely about how things look and feel on this one device, it belongs on the client. A button's colour, a menu sliding open — client.",
          "The two halves talk over the internet by sending messages back and forth, a conversation we'll unpack in the next lesson."
        ]
      },
      {
        "title": "\"Frontend\" and \"backend\" in plain English",
        "teaser": "The two halves, renamed by the people who build them",
        "body": [
          "\"Frontend\" is simply the work that runs on the client — the part of the app the user sees and touches.",
          "\"Backend\" is the work that runs on the server — the part the user never sees, doing the logic and holding the data.",
          "A `full-stack` engineer is someone comfortable on both halves; the \"stack\" is just the pile of technologies from screen to database.",
          "These words describe a division of labour, not two separate apps — the frontend and backend are two halves of one product, in constant conversation.",
          "When someone says \"it's a frontend bug,\" they mean the problem is in how the client displayed something, not in the server's data or rules."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "client",
        "def": "The browser tab or app in the user's hands. It requests things and renders them on screen — and it is the half you cannot trust, because the user controls it."
      },
      {
        "term": "server",
        "def": "A remote computer, shared by all users, that responds to the client's requests and holds the app's shared logic, secrets, and data."
      },
      {
        "term": "frontend",
        "def": "The part of an app that runs on the client — what the user sees and interacts with."
      },
      {
        "term": "backend",
        "def": "The part of an app that runs on the server — the logic, the database, and the secrets the user never sees."
      },
      {
        "term": "user interface (UI)",
        "def": "The screen the user looks at and touches: buttons, text, and images. It lives on the client."
      },
      {
        "term": "business logic",
        "def": "The rules of how an app actually behaves — like \"only the owner can delete this\" — kept on the server so users can't rewrite them."
      }
    ],
    "pmAngle": {
      "body": [
        "Knowing which half a problem lives on is half of triaging it: a misaligned button is frontend work, but \"the total is wrong\" or \"I can see someone else's data\" is a backend problem, and they go to different people and carry very different risk.",
        "The split also shapes how fast you can move and what is safe to change — frontend tweaks are usually cheap and reversible, while backend changes to data and rules are where the real care, and the real danger, live.",
        "When a teammate says \"just move it to the frontend to make it faster,\" the right reflex is to ask whether that thing can be trusted on a device the user fully controls."
      ]
    },
    "caseStudy": {
      "title": "Ordering food in the Uber Eats app",
      "body": [
        "When you open Uber Eats and browse restaurants, the client — the app on your phone — is drawing the menus, handling your taps, and animating the cart.",
        "But the prices, which restaurants are open, and whether your payment succeeds are all decided on Uber's servers, not your phone.",
        "If your phone could set its own prices, you could order a $40 meal for $1 — so that logic lives on the server, where you cannot touch it, and the same server answers millions of hungry phones at once.",
        "Your phone simply sends \"this user wants this order\" and trusts the kitchen of servers to check it, charge the right amount, and send back a confirmation."
      ],
      "bridge": "The phone is the client that asks and displays; Uber's servers are the shared, trusted backend that decides — which is the client/server split in everyday use."
    },
    "takeaways": [
      "Every app is two halves: a client that requests and displays, and a server that responds and holds the shared logic and data.",
      "The split exists because there must be one shared source of truth, the client can't be trusted, and many clients depend on one server.",
      "UI lives on the client (the frontend); business logic, secrets, and the database live on the server (the backend).",
      "Triage starts with \"which half?\" — how it looks is usually frontend; what is true or allowed is backend."
    ],
    "knowledgeCheck": [
      {
        "q": "In the client/server split, what is the client's main job?",
        "options": [
          {
            "text": "To request things and render them on screen — the part the user holds and sees",
            "correct": true
          },
          {
            "text": "To store the shared database that every user depends on",
            "correct": false
          },
          {
            "text": "To enforce the rules that must be trusted, like checking a password",
            "correct": false
          }
        ],
        "feedback": "Right — the client is the browser or app in the user's hands; it asks for things and displays them, while the server holds the shared, trusted parts."
      },
      {
        "q": "Why is the price of an item decided on the server rather than on the user's device?",
        "options": [
          {
            "text": "Because the client can't be trusted — a user controls their own device and could change a price stored there",
            "correct": true
          },
          {
            "text": "Because phones and laptops are too slow to do simple arithmetic",
            "correct": false
          },
          {
            "text": "Because the server needs the work to justify its electricity bill",
            "correct": false
          }
        ],
        "feedback": "Correct — anything that must be trusted lives on the server, beyond the user's reach, because the client is a device the user fully controls."
      },
      {
        "q": "A teammate says \"that's a frontend bug.\" What are they most likely describing?",
        "options": [
          {
            "text": "A problem in how the client displayed something to the user",
            "correct": true
          },
          {
            "text": "A problem with the records stored in the server's database",
            "correct": false
          },
          {
            "text": "A problem in the business rules that decide who is allowed to do what",
            "correct": false
          }
        ],
        "feedback": "Exactly — \"frontend\" means the work running on the client, so a frontend bug is about how something looked or behaved on screen, not the server's data or rules."
      }
    ],
    "id": "fs-m1-l2",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 2,
    "title": "Client vs Server: the Two Halves of Every App"
  },
  "fs-m1-l3": {
    "coreIdea": "HTTP is the simple request/response language every web interaction speaks: a request says what you want with a method, address, and details, and a response answers with a status code and a body — and crucially, each exchange stands completely alone.",
    "estMinutes": 9,
    "plainEnglish": [
      "Every time you load a page, tap a button, or submit a form, your browser and a server have a tiny conversation.",
      "That conversation follows a fixed format called `HTTP` — the HyperText Transfer Protocol.",
      "It is always the same two-step shape: the browser sends a `request`, the server sends back a `response`.",
      "The request says \"here is what I want\"; the response says \"here is the result, and here is how it went.\"",
      "Learn this one pattern and almost everything else on the web — pages, apps, APIs — turns out to be the same handshake repeated."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of HTTP as ordering at a busy takeaway counter through a slot in the glass.",
        "You slide a written order through (the request): a verb like \"give me\" or \"add this\", the item you mean, a few notes, and sometimes a filled-in form. The kitchen slides back a tray with a receipt stamped `200 OK` or `404 not found` (the response).",
        "Where the metaphor breaks: a real server behind the slot has total amnesia. It does not remember you ordered two minutes ago — every single order arrives as if from a brand-new stranger."
      ]
    },
    "deepSections": [
      {
        "title": "The shape of a request: verb, address, notes, optional parcel",
        "teaser": "Four parts, and most of them are simple",
        "body": [
          "Every request has the same four parts, and only one is ever a mystery.",
          "First a `method` — the verb that says what you want to do, like `GET` (fetch this) or `POST` (here, take this).",
          "Then a `URL` — the address that says which thing you mean, such as `/products/42`.",
          "Then `headers` — short lines of extra notes about the request, like what format you can read or who you are.",
          "Finally an optional `body` — the actual parcel of data you are sending, used when you are creating or updating something, and left empty when you are just reading."
        ]
      },
      {
        "title": "The methods as plain verbs: read, create, update, delete",
        "teaser": "Four words cover most of what the web does",
        "body": [
          "The methods are just verbs, and four of them do most of the work.",
          "`GET` means read — fetch something and change nothing, like opening a profile page.",
          "`POST` means create — submit new data, like signing up or posting a comment.",
          "`PUT` means update — replace an existing thing, like editing that profile.",
          "`DELETE` means delete — remove a thing, like deleting a saved card.",
          "A useful rule: a `GET` should be safe to repeat with no side effects, while a `POST` usually changes something — which is why the browser warns you before resubmitting a form."
        ]
      },
      {
        "title": "Status codes: the response's one-glance verdict",
        "teaser": "Three digits that tell you how it went",
        "body": [
          "Every response carries a three-digit `status code`, and the first digit is the headline.",
          "`2xx` means success: `200 OK` is the everyday \"here is what you asked for.\"",
          "`3xx` means redirect: `301` says \"that has permanently moved, go here instead\" — the quiet machinery behind a renamed page still working.",
          "`4xx` means you got it wrong: `404 not found` is the famous one, `403` means \"you are not allowed.\" The mistake is on the request side.",
          "`5xx` means the server got it wrong: `500 server error` means the request was fine but something broke on their end.",
          "So `4xx` is your fault, `5xx` is their fault — a distinction that decides who has to fix it."
        ]
      },
      {
        "title": "Statelessness: every request is a stranger",
        "teaser": "The server remembers nothing on its own",
        "body": [
          "HTTP is `stateless`: by default the server keeps no memory between requests.",
          "Each request must carry everything needed to understand it, because the server treats it as the first time it has ever heard from you.",
          "This sounds like a flaw but it is a deliberate strength — it lets any of a thousand identical servers answer your next request, so the system scales easily.",
          "The catch is obvious: if the server forgets you, how does \"stay logged in\" work?",
          "The answer is that the browser re-introduces you on every request by attaching a small token or session id in the headers — a fix layered on top of HTTP, which later lessons unpack."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "HTTP",
        "def": "The HyperText Transfer Protocol — the fixed request-and-response format browsers and servers use for every web interaction."
      },
      {
        "term": "request",
        "def": "The message a client sends to ask for something: a method (verb) + a URL (address) + headers (notes) + an optional body (data)."
      },
      {
        "term": "response",
        "def": "The message a server sends back: a status code (how it went) + headers (notes) + a body (the actual content, such as a page or data)."
      },
      {
        "term": "method",
        "def": "The verb in a request that states the intent — `GET` to read, `POST` to create, `PUT` to update, `DELETE` to remove."
      },
      {
        "term": "status code",
        "def": "A three-digit number in the response signalling the outcome, grouped into families: `2xx` success, `3xx` redirect, `4xx` your mistake, `5xx` server's mistake."
      },
      {
        "term": "headers",
        "def": "Short lines of metadata attached to a request or response — extra notes about the message, like its format, length, or who is asking — separate from the body content itself."
      },
      {
        "term": "stateless",
        "def": "A property of HTTP: the server keeps no memory between requests by default, so each request must stand on its own and carry whatever it needs."
      }
    ],
    "pmAngle": {
      "body": [
        "When a feature \"breaks,\" the status code tells you instantly whose problem it is: a wave of `4xx` points at your client, your inputs, or your docs, while a wave of `5xx` points at your own servers — and that decides which team gets paged at 2am.",
        "Statelessness is why \"keep me logged in\" and personalisation are never free: because the server forgets every request, your product has to spend effort re-identifying the user each time, which is the root of the sessions, tokens, and login complexity that show up on every roadmap.",
        "Understanding the request shape also makes API and integration conversations concrete — \"we need a `POST` endpoint that returns `201`\" stops being jargon and becomes a scoping decision you can actually weigh."
      ]
    },
    "caseStudy": {
      "title": "The 404 page becomes a brand surface",
      "body": [
        "`404` is the HTTP status code a server returns when the address in a request points to nothing that exists.",
        "GitHub turned its `404` page into a playful illustration — an animated parallax character — rather than a blank error.",
        "It is more than decoration: by sending a real `404` status code, GitHub also tells search engines and other machines \"this page genuinely does not exist, do not keep linking to it.\"",
        "A page that merely looked like an error but quietly returned `200 OK` would confuse every automated system that reads the code, not the words."
      ],
      "bridge": "The lesson: the status code is the part that machines actually trust — the human-readable page is just the wrapper around a number that carries the real verdict."
    },
    "takeaways": [
      "Every web interaction is one HTTP exchange: a request (method + URL + headers + optional body) answered by a response (status code + headers + body).",
      "Methods are verbs: `GET` reads, `POST` creates, `PUT` updates, `DELETE` removes.",
      "Status codes give a one-glance verdict — `2xx` success, `3xx` redirect, `4xx` your mistake, `5xx` server's mistake.",
      "HTTP is stateless: the server remembers nothing by default, which is exactly why sessions and tokens have to exist."
    ],
    "knowledgeCheck": [
      {
        "q": "Your browser loads a product page. In HTTP terms, what is the minimum shape of what it sends and gets back?",
        "options": [
          {
            "text": "It sends a request (a method like `GET` plus a URL and headers) and gets back a response (a status code, headers, and a body)",
            "correct": true
          },
          {
            "text": "It opens a permanent connection and streams the whole site at once, with no separate request",
            "correct": false
          },
          {
            "text": "It sends only the page's text and the server replies with only an image",
            "correct": false
          }
        ],
        "feedback": "Right — every interaction is one request/response pair: the request carries a method, URL, and headers (and sometimes a body), and the response carries a status code, headers, and a body."
      },
      {
        "q": "A user submits a sign-up form and your monitoring lights up with `500` responses. Where is the problem most likely to be?",
        "options": [
          {
            "text": "On the server — `5xx` codes mean the request was fine but something broke on the server's side",
            "correct": true
          },
          {
            "text": "In the user's request — `5xx` means they sent something invalid",
            "correct": false
          },
          {
            "text": "Nowhere — `5xx` is a success family like `2xx`",
            "correct": false
          }
        ],
        "feedback": "Correct — `5xx` is the server-error family, meaning the fault is on the server's side; a client mistake would show up as a `4xx` such as `404` or `403` instead."
      },
      {
        "q": "Why do web apps need sessions or tokens to keep a user \"logged in\"?",
        "options": [
          {
            "text": "Because HTTP is stateless — the server remembers nothing between requests, so the user must be re-identified on every one",
            "correct": true
          },
          {
            "text": "Because HTTP can only send text, so passwords have to be re-typed each time",
            "correct": false
          },
          {
            "text": "Because the `GET` method is not allowed to carry any identity at all",
            "correct": false
          }
        ],
        "feedback": "Exactly — statelessness means the server forgets you between requests by default, so the browser must re-introduce the user (via a token or session id in the headers) on each request, which is what sessions and tokens are for."
      }
    ],
    "id": "fs-m1-l3",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 3,
    "title": "HTTP: the Language of the Web"
  },
  "fs-m1-l4": {
    "coreIdea": "Every web page is built from three languages with three separate jobs: `HTML` is the structure, `CSS` is the look, and `JavaScript` is the behaviour — and keeping them separate is what makes a page easy to change.",
    "estMinutes": 9,
    "plainEnglish": [
      "Open any web page and you are looking at the combined work of three different languages.",
      "`HTML` lays out the content and structure — the headings, paragraphs, images, and buttons.",
      "`CSS` controls how all of that looks — the colours, fonts, spacing, and where things sit on the page.",
      "`JavaScript` adds behaviour — what happens when you click a button, type in a box, or scroll.",
      "Each language has one job, and the browser on your phone or laptop already speaks all three with nothing to install."
    ],
    "metaphor": {
      "title": "🧭 Think of it like building a house",
      "body": [
        "`HTML` is the frame and rooms — the walls, doorways, and floors that decide what the building actually is and where each space goes.",
        "`CSS` is the paint and finishes — the colours, the tiles, the lighting that make the same frame feel like a loft or a cottage without moving a single wall.",
        "`JavaScript` is the electrics and plumbing — the switches and taps that make things happen when you flip or turn them.",
        "Where the metaphor bends: in a real house the frame is fixed once it is built, but on a web page `JavaScript` can knock down walls and add rooms while you are standing in them."
      ]
    },
    "deepSections": [
      {
        "title": "HTML: the structure and content",
        "teaser": "The nouns of the page — what each thing is",
        "body": [
          "`HTML` stands for HyperText Markup Language, and \"markup\" is the key word.",
          "You take plain content and wrap it in labels called `tags` that say what each piece is.",
          "A `<h1>` tag means \"this is the main heading,\" a `<p>` means \"this is a paragraph,\" and a `<button>` means \"this is a clickable button.\"",
          "The browser reads these labels and builds the page's skeleton from them — headings, lists, images, links, forms.",
          "`HTML` says nothing about colour or size; it only declares what exists and how it nests inside everything else.",
          "It is the nouns of the page: heading, paragraph, image, button — the things, before any styling or behaviour."
        ]
      },
      {
        "title": "CSS: the presentation",
        "teaser": "The same content, restyled without touching the structure",
        "body": [
          "`CSS` stands for Cascading Style Sheets, and its only job is how things look.",
          "You write `rules` that target parts of the `HTML` and describe their appearance.",
          "A rule has a target plus the styling — for example, \"make every paragraph dark grey and roomy.\"",
          "Because the look lives separately, you can completely redesign a page by editing only the `CSS` — the `HTML` structure never moves.",
          "This is exactly how a \"dark mode\" toggle or a brand refresh works: same content, swapped styling.",
          "Spacing, colour, fonts, and layout — where each block sits — are all `CSS`, not `HTML`."
        ]
      },
      {
        "title": "JavaScript: the behaviour",
        "teaser": "What happens when you click, type, or scroll",
        "body": [
          "`JavaScript` is the only one of the three that is a full programming language — it can make decisions and react to people.",
          "`HTML` and `CSS` describe a page; `JavaScript` makes it do things.",
          "It listens for `events` — a click, a keystroke, a scroll — and runs instructions in response.",
          "Click \"Add to cart\" and `JavaScript` updates the cart count without reloading the whole page.",
          "Type a wrong password and `JavaScript` shows the red error message the instant you finish.",
          "It is the behaviour layer: the interactivity that turns a static document into something you can use."
        ]
      },
      {
        "title": "Why the clean division matters",
        "teaser": "Three jobs, three files — so a change in one rarely breaks another",
        "body": [
          "The big idea is separation: structure, look, and behaviour are kept in three separate places.",
          "A designer can recolour the whole site in `CSS` without ever touching the `HTML` or risking the buttons.",
          "An engineer can fix what a button does in `JavaScript` without rearranging the content.",
          "Mix them together and a small visual tweak can break the structure or the logic by accident.",
          "Keeping them apart is why a large website can be restyled, re-laid-out, or made interactive by different people working in parallel.",
          "All three ship as plain text files, and every browser turns them into the living page you see and click."
        ]
      }
    ],
    "codeExamples": [
      {
        "language": "html",
        "label": "HTML — the structure (a heading and a button)",
        "source": "<h1>Welcome</h1>\n<button>Sign up</button>"
      },
      {
        "language": "css",
        "label": "CSS — the look (make the button blue)",
        "source": "button {\n  background: blue;\n  color: white;\n}"
      },
      {
        "language": "js",
        "label": "JavaScript — the behaviour (react to a click)",
        "source": "button.onclick = () => alert(\"Thanks for signing up!\");"
      }
    ],
    "keyTerms": [
      {
        "term": "HTML (HyperText Markup Language)",
        "def": "The language that defines a page's structure and content by wrapping text and images in labels (tags) that say what each piece is — a heading, a paragraph, a button."
      },
      {
        "term": "CSS (Cascading Style Sheets)",
        "def": "The language that controls how a page looks — colours, fonts, spacing, and layout — kept separate from the content so the look can change without touching the structure."
      },
      {
        "term": "JavaScript",
        "def": "The programming language that adds behaviour to a page — it runs instructions in response to clicks, typing, and scrolling, making the page interactive."
      },
      {
        "term": "tag",
        "def": "An `HTML` label like `<p>` or `<button>` that marks a piece of content and tells the browser what kind of thing it is."
      },
      {
        "term": "event",
        "def": "Something a person does on a page — a click, a keystroke, a scroll — that `JavaScript` can listen for and react to."
      },
      {
        "term": "separation of concerns",
        "def": "The practice of keeping structure (`HTML`), look (`CSS`), and behaviour (`JavaScript`) in separate places so a change to one rarely breaks the others."
      }
    ],
    "pmAngle": {
      "body": [
        "When you ask for a change, knowing which of the three layers it lives in tells you who does the work and how risky it is.",
        "\"Make the button green\" is a one-line `CSS` change; \"make the button do something new when clicked\" is `JavaScript` and carries real logic to test.",
        "A clean separation means a rebrand or design refresh can ship without re-engineering behaviour — which is why design-system and visual changes are usually cheaper and safer than they feel."
      ]
    },
    "caseStudy": {
      "title": "The CSS Zen Garden",
      "body": [
        "In 2003, designer Dave Shea launched the CSS Zen Garden, a single web page with fixed `HTML` that anyone could restyle.",
        "Designers from around the world submitted only a `CSS` file each — the underlying content and structure were identical for every entry.",
        "The result was hundreds of radically different-looking pages: lush gardens, minimalist grids, retro posters — all from the same unchanged `HTML`.",
        "It became the definitive proof that look and structure are genuinely separate layers, and is still cited as a turning point in web design."
      ],
      "bridge": "The Zen Garden is the house metaphor made real: one frame, endless paint jobs — which only works because `HTML` and `CSS` do different jobs."
    },
    "takeaways": [
      "Every web page is built from three languages with three jobs: `HTML` is structure, `CSS` is look, `JavaScript` is behaviour.",
      "`HTML` declares what things are (the nouns), `CSS` styles how they look, and `JavaScript` reacts to clicks, typing, and scrolling.",
      "Because the look lives in `CSS`, you can completely restyle a page without changing its `HTML` structure.",
      "Keeping the three separate (separation of concerns) is what lets a page be redesigned and made interactive without one change breaking another — and browsers understand all three natively."
    ],
    "knowledgeCheck": [
      {
        "q": "A designer wants to change every button on the site from grey to blue, with no change to what the buttons do. Which language handles this?",
        "options": [
          {
            "text": "CSS — it controls the look (colour, font, spacing) without touching structure or behaviour",
            "correct": true
          },
          {
            "text": "HTML — because the button is defined in HTML, the colour must be too",
            "correct": false
          },
          {
            "text": "JavaScript — any change to a button needs a programming language",
            "correct": false
          }
        ],
        "feedback": "Right — colour is presentation, which is `CSS`'s job. The `HTML` structure and the `JavaScript` behaviour stay exactly the same."
      },
      {
        "q": "What is the job of HTML on a web page?",
        "options": [
          {
            "text": "It defines the structure and content — what each thing is, like a heading, paragraph, or button",
            "correct": true
          },
          {
            "text": "It sets the colours, fonts, and spacing so the page looks polished",
            "correct": false
          },
          {
            "text": "It decides what happens when you click or type on the page",
            "correct": false
          }
        ],
        "feedback": "Correct — `HTML` is the structure and content layer, the nouns of the page. Looks are `CSS`; reactions to clicks and typing are `JavaScript`."
      },
      {
        "q": "Why is it useful to keep HTML, CSS, and JavaScript as three separate layers?",
        "options": [
          {
            "text": "A change to one layer rarely breaks the others, so the look, structure, and behaviour can be worked on independently",
            "correct": true
          },
          {
            "text": "It makes the page load faster because the browser only reads one language at a time",
            "correct": false
          },
          {
            "text": "It is required by law for every website to use exactly three files",
            "correct": false
          }
        ],
        "feedback": "Exactly — separating structure, look, and behaviour means a restyle in `CSS` or a fix in `JavaScript` won't accidentally break the rest, and different people can work in parallel."
      }
    ],
    "id": "fs-m1-l4",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 4,
    "title": "HTML, CSS & JavaScript: Structure, Style, Behaviour"
  },
  "fs-m1-l5": {
    "coreIdea": "The browser is a program that turns the HTML it receives into a live in-memory tree called the DOM and paints it to the screen; JavaScript makes pages interactive by changing that tree — and whether code runs in the browser or on a server decides what it can see, trust, and reach.",
    "estMinutes": 9,
    "plainEnglish": [
      "When a server sends a page back, the browser doesn't just \"show a file\" — it reads the `HTML` and builds something.",
      "What it builds is a live tree of every heading, button, and paragraph, held in the computer's memory.",
      "That tree is called the `DOM`, and the screen you see is a painting of it.",
      "`JavaScript` makes a page feel alive by changing the tree: change the DOM, and the picture on screen updates.",
      "The last big idea is simpler than it sounds — code can run in two places, the user's browser or your own server, and where it runs changes what it's allowed to do."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of the HTML as a flat-pack furniture instruction sheet, and the browser as the person who reads it and actually assembles the wardrobe in the room.",
        "The assembled wardrobe standing in the room is the `DOM` — a real, living thing you can open, rearrange, and add shelves to; the instruction sheet was just paper.",
        "Where the metaphor breaks: you build a wardrobe once and walk away, but the browser keeps re-assembling and re-painting as JavaScript adds, moves, and removes pieces while you watch."
      ]
    },
    "deepSections": [
      {
        "title": "The browser is a program that builds, then paints",
        "teaser": "HTML is the recipe; the DOM is the meal",
        "body": [
          "A browser like Chrome or Safari is just a program, the same way a calculator or a game is a program.",
          "Its core job is to take the `HTML` text the server sent and `parse` it — read it top to bottom and work out what it means.",
          "From that, it builds an in-memory tree: the page's title contains a heading, the heading sits above a paragraph, the paragraph sits beside a button, and so on.",
          "It does the same with the `CSS` (the styling rules) to decide colours, sizes, and positions.",
          "Then it `renders`, also called painting: it draws that tree onto the glass as the pixels you actually see.",
          "So the HTML file is never what you look at — it's the recipe, and the DOM is the finished meal on the plate."
        ]
      },
      {
        "title": "The DOM is the live tree JavaScript can change",
        "teaser": "Change the tree → the screen updates",
        "body": [
          "`DOM` stands for Document Object Model, and the key word is *live* — it's not the original file, it's a working copy the browser keeps in memory.",
          "Every element on the page — each heading, image, and button — is a node in that tree, with parents above it and children beneath.",
          "Crucially, `JavaScript` can reach into this tree and edit it: add a new node, delete one, change its text, or flip its colour.",
          "The instant JavaScript changes the DOM, the browser re-paints the affected part, and the user sees the change — no new page, no reload.",
          "That single loop is the whole secret of interactive pages: a \"like\" count ticking up, a menu sliding open, a form showing a red error — all of it is JavaScript editing the DOM.",
          "When people say a page is \"dynamic,\" they mean its DOM is being changed after it first loaded, rather than frozen as it arrived."
        ]
      },
      {
        "title": "Where the code runs: client-side vs server-side",
        "teaser": "Two places to run code, with very different rules",
        "body": [
          "Code can run in two homes. `Client-side` means it runs in the user's own browser, on their device. `Server-side` means it runs on a computer you control, back where the data lives.",
          "Client-side code is close to the user, so it feels instant — but the user can open the browser's tools, read it, and tamper with it, so you can never trust it or hide a secret in it.",
          "Server-side code is the opposite: the user never sees it, so it's trusted, and it sits next to your database and private keys — but every call to it makes a round trip over the network, which costs time.",
          "A clean rule of thumb: anything that must be *trusted* or touch private data belongs on the server; anything that's just about *how the page feels and responds* can live in the browser.",
          "So checking \"is this discount code real and unused?\" is a server job, because a clever user could fake a yes on their own machine; sliding a menu open on tap is a browser job, because it only affects what that one person sees.",
          "This is the same client/server split from earlier in the module — but now the question is sharper: not just where the *halves* sit, but where each *piece of work* should actually run."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "browser",
        "def": "A program (like Chrome, Safari, or Firefox) that fetches a web page's files and turns them into the interactive page you see and click."
      },
      {
        "term": "parse",
        "def": "To read text like HTML and work out its structure and meaning — figuring out which element contains which, like diagramming a sentence."
      },
      {
        "term": "DOM (Document Object Model)",
        "def": "The live, in-memory tree of every element on a page that the browser builds from the HTML; it's what's actually on screen, and what JavaScript reads and changes."
      },
      {
        "term": "render (paint)",
        "def": "The step where the browser draws the DOM and its styles onto the screen as the pixels you see; it re-paints whenever the DOM changes."
      },
      {
        "term": "client-side",
        "def": "Code that runs inside the user's own browser — close to them and fast to respond, but visible to them and not to be trusted with secrets."
      },
      {
        "term": "server-side",
        "def": "Code that runs on a computer you control, near your data — hidden from the user and therefore trusted, but reached only by a round trip over the network."
      }
    ],
    "pmAngle": {
      "body": [
        "\"Where does this run?\" is one of the most consequential calls in a feature, and it's a product decision as much as an engineering one — it sets the trade-off between speed and trust.",
        "Push work to the browser and the experience feels instant, but you've handed the user the keys: anyone can read or fake client-side logic, so a price, a permission, or a paywall enforced only there is no protection at all.",
        "When you hear \"we'll just check it in the browser,\" the right question is whether a determined user faking that check could cost you money or leak data — if yes, it belongs on the server, full stop."
      ]
    },
    "caseStudy": {
      "title": "Google Maps and the rise of the live DOM",
      "body": [
        "Before 2005, most web pages were static: every click — pan the map, zoom in — asked the server for a whole new page, and the screen went blank while it loaded.",
        "Google Maps, launched in February 2005, felt different — you could grab the map and drag it, and it just moved, smoothly, with no full-page reload.",
        "The trick was JavaScript running client-side: it edited the DOM on the fly to slide new map tiles into view, while quietly fetching only the new data it needed in the background.",
        "That technique (later named `AJAX`) showed the web could feel like a real application, and it set the template for Gmail, then nearly every modern site."
      ],
      "bridge": "Maps felt alive because JavaScript was changing the DOM in the browser instead of asking the server for a fresh page — the exact loop, and the exact client-vs-server choice, this lesson is about."
    },
    "takeaways": [
      "The browser is a program: it parses the HTML and CSS into a live in-memory tree (the DOM) and paints that tree to the screen.",
      "The DOM is what you actually see and what JavaScript edits; change the DOM and the browser re-paints — that loop is what makes pages interactive.",
      "Code runs in one of two homes: client-side (in the user's browser, fast but visible and untrusted) or server-side (on your machine, trusted and near the data, but a network hop away).",
      "Trust and private data belong on the server; pure look-and-feel can live in the browser — and a check that only runs client-side protects nothing."
    ],
    "knowledgeCheck": [
      {
        "q": "When a browser receives a page's HTML, what does it actually do with it?",
        "options": [
          {
            "text": "Parses it into a live in-memory tree (the DOM) and paints that tree onto the screen",
            "correct": true
          },
          {
            "text": "Displays the raw HTML text file directly, exactly as it was sent",
            "correct": false
          },
          {
            "text": "Sends the HTML back to the server to be turned into a picture there",
            "correct": false
          }
        ],
        "feedback": "Right — the browser is a program that parses the HTML (and CSS) into the DOM, a live tree in memory, then renders that tree as the pixels you see. The HTML file is the recipe; the DOM is the finished meal."
      },
      {
        "q": "How does JavaScript make a page interactive — for example, a like count that ticks up when you click?",
        "options": [
          {
            "text": "It changes the DOM, and the browser re-paints the changed part, so the user sees the update with no reload",
            "correct": true
          },
          {
            "text": "It rewrites the original HTML file stored on the server",
            "correct": false
          },
          {
            "text": "It downloads a brand-new page from the server every time anything changes on screen",
            "correct": false
          }
        ],
        "feedback": "Exactly — JavaScript edits the live DOM tree (changing text, adding or removing nodes), and the browser immediately re-paints the affected part. Change the DOM, and the screen updates."
      },
      {
        "q": "An engineer says, \"We'll just check whether the discount code is valid in the browser.\" Why is that a problem?",
        "options": [
          {
            "text": "Client-side code is visible to the user and can be tampered with, so a trust check like this belongs on the server",
            "correct": true
          },
          {
            "text": "Browsers are too slow to run a check like that, so it would make the page lag",
            "correct": false
          },
          {
            "text": "JavaScript can't compare two pieces of text, so the check would never work in a browser",
            "correct": false
          }
        ],
        "feedback": "Correct — client-side code runs on the user's machine, where they can read and fake it. Anything that must be trusted or touches private data belongs server-side; only look-and-feel safely lives in the browser."
      }
    ],
    "sources": [
      {
        "label": "MDN — Introduction to the DOM",
        "url": "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction"
      },
      {
        "label": "MDN — Populating the page: how browsers work (the critical rendering path)",
        "url": "https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/How_browsers_work"
      },
      {
        "label": "MDN — Client-side versus server-side code",
        "url": "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview"
      }
    ],
    "id": "fs-m1-l5",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 5,
    "title": "The Browser, the DOM & What Runs Where"
  },
  "fs-m1-l6": {
    "coreIdea": "Computers find each other by number, not by name, so before your browser can talk to a server it has to translate a name like `example.com` into an `IP address` — and `DNS`, the internet's phonebook, is the lookup system that does it.",
    "estMinutes": 9,
    "plainEnglish": [
      "People remember names; computers route by numbers.",
      "Every server on the internet has a numeric address called an `IP address`, the way every phone has a number.",
      "But nobody wants to type a string of digits, so we use friendly names like `example.com` instead.",
      "`DNS` — the Domain Name System — is the service that turns the friendly name into the real number behind it.",
      "So before your browser can ask a server for anything, a quick name-to-number lookup has to happen first."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "DNS is the internet's phonebook. You know the name of who you want to reach (`example.com`), but to actually place the call you need their number (the `IP address`), so you look the name up first.",
        "A domain registrar is the company you pay to claim a name in that phonebook — you do not own the name forever, you rent it, and your listing says which number the name points to.",
        "Where the metaphor bends: a paper phonebook is one fixed book, while DNS is millions of cooperating servers, and a name can point at a number that changes the moment you update your listing."
      ]
    },
    "deepSections": [
      {
        "title": "Names for humans, numbers for machines",
        "teaser": "Two addresses for the same server, kept in sync by DNS",
        "body": [
          "An `IP address` is the numeric address of a computer on the internet, like `93.184.216.34`.",
          "It is how data actually gets routed across the network — every packet needs a number to aim at, not a name.",
          "A `domain name` like `example.com` is the human-friendly label we put in front of that number so people never have to memorise digits.",
          "The whole job of `DNS` is to keep those two in sync: give it a name, it hands back the current number.",
          "This split is deliberate — it means a company can change which server its name points to without anyone having to relearn the address."
        ]
      },
      {
        "title": "The lookup chain: cache, resolver, authoritative server",
        "teaser": "Where the answer comes from, fastest source first",
        "body": [
          "When you visit a name, your browser tries the cheapest source first: its own `cache`, a short-term memory of names it looked up recently.",
          "If the answer is not cached, the question goes to a `resolver` — usually run by your internet provider — whose job is to chase down the answer on your behalf.",
          "The resolver asks the `authoritative servers`: the servers that hold the official, source-of-truth record for that exact domain.",
          "The authoritative server replies with the real number, the resolver passes it back, and your browser caches it so the next visit skips all of this.",
          "We are skipping a layer of detail on purpose — the point is the shape: check memory, ask a helper, the helper finds the official answer."
        ]
      },
      {
        "title": "Renting the name: registrars and a couple of record types",
        "teaser": "What you actually buy, and the two records you will meet first",
        "body": [
          "A `domain registrar` (such as GoDaddy, Namecheap, or Cloudflare) is the company you pay to claim a domain name — you rent it, typically year by year, rather than owning it outright.",
          "Once you hold the name, you fill in its `DNS records`: small instructions that say where the name should point.",
          "An `A record` points a name straight at an `IP address` — \"`example.com` lives at `93.184.216.34`.\"",
          "A `CNAME record` points a name at another name instead of a number — \"`www.example.com` is really just `example.com`, go look that up.\"",
          "`CNAME` is handy because if the underlying number ever changes, you update it in one place and everything pointed at that name follows automatically."
        ]
      },
      {
        "title": "Caching and propagation: why changes are not instant",
        "teaser": "The speed that makes DNS fast also makes changes slow",
        "body": [
          "Every DNS answer comes with a `TTL` (time to live): how many seconds caches are allowed to remember it before asking again.",
          "That caching is what makes the web feel fast — most lookups are answered from memory, not by chasing the authoritative server every time.",
          "The trade-off is that when you change a record, the old answer can linger in caches around the world until each one's `TTL` expires.",
          "This gradual spread of a change across the internet's caches is called `propagation`, and it can take minutes to a day or so depending on the `TTL`.",
          "So a freshly updated site might work for you but still load the old server for someone else for a while — that is propagation, not a bug."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "IP address",
        "def": "The numeric address of a computer on the internet, like `93.184.216.34` — the actual number data is routed to, the equivalent of a phone number."
      },
      {
        "term": "domain name",
        "def": "A human-friendly name for a server, like `example.com`, that stands in for its numeric `IP address` so people never have to memorise digits."
      },
      {
        "term": "DNS",
        "def": "The Domain Name System — the internet's phonebook, the lookup service that translates a domain name into the `IP address` behind it."
      },
      {
        "term": "resolver",
        "def": "The DNS helper (usually run by your internet provider) that takes your question and chases down the answer from the authoritative servers on your behalf."
      },
      {
        "term": "domain registrar",
        "def": "The company you pay to claim a domain name — you rent the name, typically per year, and set the records that say where it points."
      },
      {
        "term": "A record",
        "def": "A DNS record that points a domain name directly at an `IP address` — \"this name lives at this number.\""
      },
      {
        "term": "CNAME record",
        "def": "A DNS record that points a name at another name instead of a number, so the second name's answer is used — handy when the underlying number may change."
      },
      {
        "term": "propagation",
        "def": "The gradual spread of a DNS change across the internet's caches; old answers linger until each cache's `TTL` (time to live) expires, so updates are not instant."
      }
    ],
    "pmAngle": {
      "body": [
        "The domain name is a rented asset, not an owned one — if the registration lapses, the name can be lost or even bought out from under you, which is why \"who renews the domain?\" is a real operational risk, not a clerical chore.",
        "Propagation explains a class of \"it works for me, not for them\" reports during a launch or migration: the change is correct, but caches around the world are still serving the old answer until their `TTL` expires, so lowering the `TTL` before a planned cutover is a concrete way to make the switch faster.",
        "Because DNS is the single front door that turns your name into a server, a mistake or outage here takes the whole product offline even when every server behind it is perfectly healthy — so it belongs on the short list of things you actively monitor."
      ]
    },
    "caseStudy": {
      "title": "The 2016 Dyn DNS outage",
      "body": [
        "Dyn was a company that ran authoritative DNS for many large sites, effectively holding the phonebook entries that turn their names into numbers.",
        "On 21 October 2016, a massive flood of junk traffic (a denial-of-service attack) overwhelmed Dyn's servers so they could not answer lookups.",
        "Sites like Twitter, Reddit, Spotify, and Netflix became unreachable for many users for hours — even though those companies' own servers were running fine.",
        "The problem was not the servers; it was that browsers could no longer translate the names into the numbers needed to reach them."
      ],
      "bridge": "It shows how load-bearing DNS is: if the name-to-number lookup fails, a perfectly healthy server might as well not exist, because no one can find it."
    },
    "takeaways": [
      "Computers route by numbers (`IP address`); humans use names (`domain name`); `DNS` is the phonebook that translates one into the other.",
      "A lookup checks the browser's cache first, then asks a resolver, which fetches the official answer from the domain's authoritative servers.",
      "You rent a name from a registrar, then set records: an `A record` points a name at an `IP address`, a `CNAME` points a name at another name.",
      "DNS answers are cached for a `TTL`, so changes take time to propagate — a freshly changed site can still load the old server for others for a while."
    ],
    "knowledgeCheck": [
      {
        "q": "Why does your browser need DNS before it can load `example.com`?",
        "options": [
          {
            "text": "Computers find each other by number, so DNS translates the name `example.com` into the `IP address` the browser can actually reach",
            "correct": true
          },
          {
            "text": "DNS downloads and stores the page so the browser does not need to contact the server at all",
            "correct": false
          },
          {
            "text": "DNS encrypts the page so only your browser can read what the server sends back",
            "correct": false
          }
        ],
        "feedback": "Right — DNS is the internet's phonebook: data is routed by numeric `IP address`, so the human-friendly name has to be translated into that number before the browser can connect."
      },
      {
        "q": "You change which server `example.com` points to, and it works for you instantly but a colleague still loads the old site an hour later. What is going on?",
        "options": [
          {
            "text": "Caches still hold the old answer until their `TTL` expires — the change is propagating, which takes time and is not a bug",
            "correct": true
          },
          {
            "text": "The change failed for your colleague and must be re-entered separately for each person",
            "correct": false
          },
          {
            "text": "DNS only updates for one user at a time, so colleagues must wait their turn in a queue",
            "correct": false
          }
        ],
        "feedback": "Correct — DNS answers are cached for a `TTL`, so an updated record spreads gradually as each cache expires; that delay is propagation, not a failure."
      },
      {
        "q": "What is the difference between an `A record` and a `CNAME record`?",
        "options": [
          {
            "text": "An `A record` points a name at an `IP address` (a number); a `CNAME` points a name at another name to look up instead",
            "correct": true
          },
          {
            "text": "An `A record` is for secure sites and a `CNAME` is for insecure ones",
            "correct": false
          },
          {
            "text": "An `A record` stores the page's content while a `CNAME` stores its styling",
            "correct": false
          }
        ],
        "feedback": "Exactly — an `A record` maps a name straight to a numeric `IP address`, while a `CNAME` aliases one name to another name, so the second name's answer is used (handy when the underlying number may change)."
      }
    ],
    "sources": [
      {
        "label": "Cloudflare — What is DNS? How DNS works",
        "url": "https://www.cloudflare.com/learning/dns/what-is-dns/"
      },
      {
        "label": "MDN — What is a domain name?",
        "url": "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name"
      },
      {
        "label": "Cloudflare — What was the Dyn DNS attack? (2016)",
        "url": "https://www.cloudflare.com/learning/ddos/famous-ddos-attacks/"
      }
    ],
    "id": "fs-m1-l6",
    "trackId": "fullstack",
    "moduleId": "fs-m1",
    "order": 6,
    "title": "DNS & Domains: How a Request Finds a Server"
  }
}

const tracks = [
  {
    "id": "fullstack",
    "title": "Full-Stack Engineering",
    "tagline": "Understand how a real app is built end to end — every layer, in plain English — well enough to design it and lead the people who build it.",
    "accent": "stack",
    "accentVar": "var(--stack)",
    "modules": [
      {
        "id": "fs-m1",
        "title": "Module 1 — How the Web Actually Works",
        "goal": "Build the whole-system mental model: what happens between a click and a rendered page.",
        "lessonIds": [
          "fs-m1-l1",
          "fs-m1-l2",
          "fs-m1-l3",
          "fs-m1-l4",
          "fs-m1-l5",
          "fs-m1-l6"
        ]
      }
    ]
  }
]

const fullstackGlossary = {}

export default { tracks, lessons, fullstackGlossary }
