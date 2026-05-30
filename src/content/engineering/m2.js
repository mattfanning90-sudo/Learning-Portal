// Module 2 — Building Reliable AI Features
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m2-l1": {
    "id": "eng-m2-l1",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 1,
    "estMinutes": 9,
    "title": "The Chief of Staff: Prompt Engineering and Context Engineering",
    "coreIdea": "Most agent failures are not the model being dumb — they are the model being handed the wrong information, too much of it, or in the wrong order.",
    "plainEnglish": [
      "When an AI feature works one minute and flakes out the next, our instinct is to blame the model and reach for a bigger, smarter one. But through 2025 and 2026 the people who build these systems for a living found that most failures are not the model thinking badly — they are the model being fed badly. It got the wrong documents, or far too many, or the right ones buried in the wrong place.",
      "Prompt engineering is the craft of writing one good instruction: the sentence or paragraph you type. Context engineering is the bigger job of curating EVERYTHING the model sees on each step — the instruction, plus the retrieved documents, the past conversation, the tool descriptions, the examples, and the order they all arrive in.",
      "Anthropic now calls context engineering 'effectively the #1 job of engineers building AI agents.' The model is only as good as the briefing you assemble for it, and assembling that briefing well is a real, learnable skill — not a magic phrase."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "The model is a brilliant new consultant with total amnesia. They are sharp, fast, and astonishingly well-read — but they walk into every single meeting with a completely blank mind, remembering nothing from before. Prompt engineering is writing them one crisp instruction on a sticky note. Context engineering is preparing their entire briefing folder before they sit down: which three documents go in, in what order, which notes carry over from last time, and which tools you lay out on the desk in front of them.",
        "Here is the counter-intuitive part: a genius handed a messy, disorganised 500-page folder performs WORSE than the same genius handed a tight, well-ordered two-pager. More paper is not more help. Your job is the great chief of staff who decides exactly what goes in that folder and what stays out, so the brilliant amnesiac can do their best work the moment they sit down."
      ]
    },
    "deepSections": [
      {
        "title": "'The smallest set of high-signal tokens': the core maxim",
        "teaser": "give it just enough, and no more",
        "body": [
          "The guiding maxim of context engineering is to find the smallest set of high-signal tokens that lets the model do the job. A token is just a chunk of text the model reads — roughly a word or part of a word. 'High-signal' means every token earns its place: it actually helps the model answer. The opposite is filler — five near-duplicate documents, a giant boilerplate policy nobody needs, three old turns of chit-chat — that dilutes the signal and pushes the useful stuff further away.",
          "This matters for two reasons at once. First, quality: a tight, relevant context produces sharper, more consistent answers. Second, money: every token costs latency and dollars, and a bloated context burns both on every single call. The chief-of-staff move is ruthless editing — ask of each piece, 'does this actually change the answer?' and if not, leave it out of the folder."
        ]
      },
      {
        "title": "Context rot and 'lost in the middle': why more context can hurt",
        "teaser": "models skim the middle and forget the edges",
        "body": [
          "You might assume that if a model can technically read 200,000 tokens, you should fill all 200,000. In practice, models suffer from 'context rot': as the context grows, their ability to use any single piece of it reliably degrades. They pay closest attention to the very beginning and the very end of what you give them, and skim the middle — a well-documented effect researchers nicknamed 'lost in the middle.' Bury the critical clause on page 40 of a 60-page dump and the model may genuinely never act on it.",
          "The practical lesson is that context is a budget, not a bucket. You are not trying to fill the window; you are trying to spend it. Put the most important instructions and evidence where attention is strongest — near the top and near the bottom — and cut the low-value middle padding entirely. This is exactly why the 'smallest high-signal set' maxim is not just about saving money; it is about the model actually performing better."
        ]
      },
      {
        "title": "System-prompt 'altitude' and structuring with sections and tags",
        "teaser": "fly at the right height — not too vague, not too rigid",
        "body": [
          "The system prompt is the standing brief that sits at the top of the context on every turn — the 'who you are and how you behave' note for the consultant. The skill is finding the right 'altitude.' Fly too high and the instructions are vague platitudes ('be helpful, be accurate') that give the model nothing to grip. Fly too low and you hand-script every edge case in brittle if-this-then-that detail, which breaks the moment reality differs from your script. Good prompts sit in the middle: clear principles plus a few concrete examples.",
          "Structure is the other lever. Models follow a long brief far more reliably when it is organised into labelled sections — using headings or simple tags like <instructions>, <context>, and <examples> — instead of one wall of text. The tags act like tabs in the briefing folder: they tell the model what each part is for and where one section ends and the next begins. Same words, dramatically clearer, simply because they are sorted."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Context engineering is the single biggest lever on whether a feature feels reliable or flaky — and it is invisible in a demo, which is exactly why it bites you at launch. When a feature is 'almost good but maddeningly inconsistent,' the fix is almost never a smarter model. It is better context: the right documents, trimmed, ordered, and labelled.",
        "Knowing this saves you from expensive model-upgrade goose chases. Before anyone proposes jumping to a pricier flagship model to fix flakiness, ask what context that model is being handed on each call. Most of the time the cheaper, faster win is to clean up the briefing folder — which also lowers your token bill, since every wasted token is real latency and real money on every request you serve."
      ]
    },
    "caseStudy": {
      "title": "Anthropic names context engineering the #1 job (October 2025)",
      "body": [
        "In October 2025, Anthropic published an engineering essay titled 'Effective context engineering for AI agents' that crystallised a shift the whole industry had been feeling. Drawing directly on how Claude Code and Anthropic's internal agents are built, it laid out the working techniques: just-in-time retrieval (fetch documents only when needed, not all upfront), compaction (summarise old turns to free up room), NOTES.md-style note-taking (let the agent write a running handover file), and sub-agents (hand a focused slice of work to a fresh context).",
        "The essay landed because it gave a name and a discipline to something practitioners already knew in their bones: the limiting factor was rarely the model's intelligence, it was the quality of what the model was being shown. Almost overnight it became the reference text people cite for why 'context engineering' had quietly replaced 'prompt engineering' as the central skill of building reliable AI features."
      ],
      "bridge": "The takeaway that runs through this entire module: you do not get reliability by finding a smarter model — you get it by becoming a better chief of staff for the one you have."
    },
    "takeaways": [
      "Most AI flakiness is a context problem, not a model problem — fix the briefing before upgrading the brain.",
      "More context can make answers worse: models skim the middle and lose the edges, so trim ruthlessly.",
      "Every token costs latency and money, so the smallest high-signal set wins on both quality and cost."
    ],
    "knowledgeCheck": [
      {
        "q": "A feature gives great answers in the demo but inconsistent ones in production. What is the most likely fix?",
        "options": [
          {
            "text": "Upgrade to a larger, more expensive model",
            "correct": false
          },
          {
            "text": "Improve the context — the documents, order, and instructions the model receives each call",
            "correct": true
          },
          {
            "text": "Raise the temperature setting so it is more creative",
            "correct": false
          }
        ],
        "feedback": "Inconsistency is almost always a context failure — the model is being fed the wrong or poorly-ordered information, not thinking badly."
      },
      {
        "q": "Why can adding MORE documents to the context sometimes make answers worse?",
        "options": [
          {
            "text": "Models get tired and slow down with each extra document",
            "correct": false
          },
          {
            "text": "Models pay most attention to the start and end and skim the middle, so key facts get 'lost in the middle'",
            "correct": true
          },
          {
            "text": "Extra documents always contradict each other",
            "correct": false
          }
        ],
        "feedback": "The 'lost in the middle' effect means buried information is often ignored — context is a budget to spend wisely, not a bucket to fill."
      }
    ],
    "glossaryTerms": [
      "context-engineering",
      "prompt-engineering",
      "token",
      "context-window",
      "context-rot",
      "system-prompt"
    ],
    "sources": [
      {
        "label": "Anthropic — Effective Context Engineering for AI Agents",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      },
      {
        "label": "Neo4j — Context Engineering vs Prompt Engineering",
        "url": "https://neo4j.com/blog/agentic-ai/context-engineering-vs-prompt-engineering/"
      },
      {
        "label": "Mem0 — Context Engineering for AI Agents Guide",
        "url": "https://mem0.ai/blog/context-engineering-ai-agents-guide"
      },
      {
        "label": "deepset — Context Engineering: The Next Frontier",
        "url": "https://www.deepset.ai/blog/context-engineering-the-next-frontier-beyond-prompt-engineering"
      }
    ]
  },
  "eng-m2-l2": {
    "id": "eng-m2-l2",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 2,
    "estMinutes": 9,
    "title": "The Open-Book Exam: Retrieval-Augmented Generation (RAG)",
    "coreIdea": "Instead of trusting the model's fuzzy memory, you fetch the real, current documents at question time and make it answer from those.",
    "plainEnglish": [
      "An LLM only 'knows' what it happened to see during training, frozen at some cutoff date. Ask it about your company's refund policy, this quarter's prices, or a contract signed last week, and it will do what it always does — produce the most plausible-sounding text — which means it will confidently invent an answer. That is fine for brainstorming and dangerous for facts.",
      "Retrieval-Augmented Generation, or RAG, fixes this by giving the model an open book. At the moment a question comes in, the system searches your real documents, pulls out the few passages that actually matter, and hands them to the model along with the question. The model then answers from those passages — and can quote and cite them — instead of from hazy memory.",
      "RAG is the workhorse pattern behind almost every enterprise AI assistant: support bots, internal search, policy Q&A, 'chat with your docs.' And the part that decides whether it is trustworthy or a liability is rarely the model — it is the quality of the retrieval step that fetched the pages."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "RAG turns a closed-book exam into an open-book one. A closed-book LLM answers from fuzzy memory and bluffs smoothly when it is unsure — and it is always smooth, which is the trap. RAG lets the same student walk into the exam, look up the exact relevant pages, and answer with the book open, pointing to the page they used. Suddenly the answer is grounded in something real and checkable.",
        "But the open book comes with a catch: the answer is only as good as the librarian who fetched the pages. If the librarian grabs the wrong book or the wrong chapter, the student will confidently give a wrong answer from the wrong page — and still cite it, which makes the mistake look authoritative. That is why so much of RAG engineering is not about the student at all. It is about making the librarian reliably fetch the RIGHT pages, which is where retrieval quality and reranking earn their keep."
      ]
    },
    "deepSections": [
      {
        "title": "Chunking, embeddings, and vector search: how documents get found",
        "teaser": "the plumbing that turns a pile of docs into searchable meaning",
        "body": [
          "First, long documents are split into bite-sized passages called chunks — a page or a few paragraphs each — because you want to retrieve the relevant slice, not a whole 80-page manual. Then each chunk is run through an embedding model, which converts its meaning into a list of numbers (a vector). Passages about similar ideas end up with similar numbers, even if they use different words — 'reimbursement' and 'getting your money back' land near each other.",
          "When a question arrives, it gets converted to a vector the same way, and the system does a vector search: it finds the chunks whose numbers are closest to the question's numbers. This is search by meaning rather than by exact keyword match, which is why RAG can find the right passage even when the user phrases things nothing like the document does. Chunk too big and you bury the answer in noise; chunk too small and you slice it in half — getting chunking right is unglamorous and quietly decisive."
        ]
      },
      {
        "title": "Hybrid search and rerankers: getting the BEST evidence on top",
        "teaser": "two kinds of search, then a second judge to sort the winners",
        "body": [
          "Vector (meaning-based) search is powerful but sometimes misses exact terms — a specific product code, an error number, a person's name — because those are about literal characters, not vibes. Hybrid search runs both meaning-based search AND old-fashioned keyword search, then blends the results, so you catch both 'what they meant' and 'the exact string they typed.' It is a belt-and-braces move that meaningfully lifts retrieval quality.",
          "Even then, the top results are not always in the best order. A reranker is a second, more careful model that takes the handful of candidate passages and re-scores them for how well each one actually answers THIS question, pushing the truly best evidence to the top. Since the model often leans hardest on the first passage it sees, getting the genuinely best chunk into the number-one slot — rather than merely a relevant one — is one of the highest-leverage upgrades in a production RAG system."
        ]
      },
      {
        "title": "Groundedness, citations, and the 'no evidence, no answer' rule",
        "teaser": "make the model show its receipts — or stay quiet",
        "body": [
          "Groundedness means the answer is actually supported by the retrieved passages, not by the model's imagination. The reliability win of RAG is not just fetching documents — it is forcing the model to answer ONLY from them and to cite which passage each claim came from. Citations are not decoration; they let a user (or an automated check) verify the answer against the source, which is what turns a confident paragraph into a trustworthy one.",
          "The other half is the 'no evidence, no answer' rule: if retrieval comes back empty or weak, the right behaviour is to say 'I don't have a source for that' rather than fall back to bluffing from memory. This is the single most important guardrail in enterprise RAG, because a system that admits a gap is safe, while one that papers over the gap with a fluent guess is a liability dressed up as an answer."
        ]
      },
      {
        "title": "Knowledge freshness and Corrective RAG (CRAG)",
        "teaser": "keep the book current, and double-check the pages you grabbed",
        "body": [
          "A RAG system is only as current as its index. If prices changed yesterday but the documents were last indexed last month, the open book is open to the wrong edition — and the model will faithfully quote the stale page. Knowledge freshness is the discipline of re-indexing on a schedule and tracking which sources are current, so the librarian is fetching from today's shelf, not last quarter's.",
          "Corrective RAG (CRAG) goes a step further: after retrieving, the system checks whether the fetched passages are actually good enough to answer the question. If they look weak or off-topic, it can re-search, broaden to the web, or decline rather than charging ahead with bad evidence. It is the librarian glancing at the pages and saying 'this isn't right, let me look again' before handing them over — a self-correcting loop that catches the wrong-book failure before it reaches the user."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "RAG is how you ship an AI feature over private or fast-changing data without it making things up — and it is the answer to the most common request you will hear: 'can the AI just know about OUR stuff?' Yes, via RAG, without retraining anything. That makes it one of the most important patterns in your toolkit to understand at a feature level.",
        "The trap is that a demo RAG and a production RAG are worlds apart, and the gap lives entirely in the unglamorous details: chunking, hybrid search, reranking, freshness, and the 'no evidence, no answer' rule. A weekend prototype that wows in the meeting can quietly hallucinate at scale because nobody budgeted for retrieval quality. If you sponsor a RAG feature, sponsor the boring 80% too — or your launch becomes the liability you were trying to avoid."
      ]
    },
    "caseStudy": {
      "title": "Five poisoned documents, 90% manipulation: RAG poisoning (2025)",
      "body": [
        "A widely-cited 2025 security finding put a hard number on the danger of poor retrieval hygiene. Researchers showed that inserting just FIVE carefully crafted, malicious documents into a knowledge base could steer a RAG system's answers in the attacker's favour roughly 90% of the time — an attack nicknamed 'RAG poisoning.' The model itself was never hacked; it was simply handed corrupted pages and, being a faithful open-book student, answered from them.",
        "The lesson is vivid: WHAT you retrieve is at least as important as which model you use. A flagship model fed five poisoned passages will produce a fluent, confident, and wrong answer — and cite the poison as its source, which makes it look more credible, not less. Retrieval is not a plumbing detail you can wave away; it is a security and trust surface that deserves the same scrutiny as any other input to your system."
      ],
      "bridge": "RAG's superpower and its weakness are the same thing: the model answers from whatever you put in front of it — so the whole game is making sure the right pages, and only the right pages, land on the desk."
    },
    "takeaways": [
      "RAG fetches real, current documents at question time so the model answers from sources, not from fuzzy memory.",
      "Retrieval quality — chunking, hybrid search, reranking — usually decides whether RAG is trustworthy or a liability.",
      "Enforce 'no evidence, no answer': a system that admits a gap is safe; one that bluffs over it is a liability."
    ],
    "knowledgeCheck": [
      {
        "q": "What problem does RAG primarily solve?",
        "options": [
          {
            "text": "It makes the model run faster and cheaper",
            "correct": false
          },
          {
            "text": "It grounds answers in real, current documents instead of the model's fuzzy training memory",
            "correct": true
          },
          {
            "text": "It permanently retrains the model on your company data",
            "correct": false
          }
        ],
        "feedback": "RAG fetches relevant documents at question time so the model answers from real, citable sources rather than inventing them."
      },
      {
        "q": "The 'RAG poisoning' finding showed that five malicious documents could manipulate answers ~90% of the time. What is the core lesson?",
        "options": [
          {
            "text": "What you retrieve matters as much as which model you use",
            "correct": true
          },
          {
            "text": "You should always use the largest available model",
            "correct": false
          },
          {
            "text": "Citations make RAG systems unsafe",
            "correct": false
          }
        ],
        "feedback": "The model answers from whatever you retrieve, so corrupting the retrieved documents corrupts the answer — retrieval is a real trust and security surface."
      }
    ],
    "glossaryTerms": [
      "rag",
      "embedding",
      "vector-search",
      "chunking",
      "reranker",
      "groundedness",
      "hybrid-search"
    ],
    "sources": [
      {
        "label": "arXiv — RAG poisoning / retrieval security (2501.07391)",
        "url": "https://arxiv.org/abs/2501.07391"
      },
      {
        "label": "Eden AI — The 2025 Guide to RAG",
        "url": "https://www.edenai.co/post/the-2025-guide-to-retrieval-augmented-generation-rag"
      },
      {
        "label": "Building Production-Ready RAG Systems",
        "url": "https://medium.com/@meeran03/building-production-ready-rag-systems-best-practices-and-latest-tools-581cae9518e7"
      },
      {
        "label": "MDPI Information — RAG survey",
        "url": "https://www.mdpi.com/2078-2489/17/1/54"
      }
    ]
  },
  "eng-m2-l3": {
    "id": "eng-m2-l3",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 3,
    "estMinutes": 9,
    "title": "The Phone and the Buttons: Tool Use, Function Calling, and MCP",
    "coreIdea": "Tool use lets the model decide to call real software — and act in the world — instead of only producing text.",
    "plainEnglish": [
      "On its own, an LLM can only do one thing: produce text. It cannot check today's weather, look up a customer in your database, send an email, or book a flight. It can write a beautiful sentence ABOUT booking a flight, but it cannot actually book one. That ceiling is what separates a clever chatbot from a product that does real work.",
      "Tool use — also called function calling — breaks the ceiling. You describe the tools available ('look up an order,' 'send a message,' 'search the web'), and the model can decide to call one, read the result it gets back, and keep going. The model still only outputs text; the trick is that some of that text is a structured request your code recognises as 'please run this tool,' runs, and feeds the answer back in.",
      "MCP — the Model Context Protocol, an open standard Anthropic launched and later donated to the Linux Foundation — standardises HOW models discover and use tools. Instead of building a custom connector for every model-and-tool pair, everyone agrees on one shape, so you build an integration once."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "The LLM is a smart but housebound office worker who can only write notes — never leave the room, never pick up a phone. Function calling gives them a desk phone with a row of clearly labelled buttons: 'call the warehouse,' 'look up a customer,' 'send the email.' They read the situation, decide which button fits, press it, read the answer that comes back, and carry on. They are still just a note-writer — but now their notes can summon real action.",
        "MCP is the standard wall socket and plug shape behind all those buttons. Without it, every tool needs a custom adapter for every different model — a tangle of one-off wiring. With it, everyone agrees on one plug, so any tool can connect to any model the way any appliance fits any outlet. That is precisely why standard power outlets, and before them USB and HTTP, let whole ecosystems explode: once the plug is agreed, thousands of people can build things that all just work together."
      ]
    },
    "deepSections": [
      {
        "title": "Function calling: how the model asks your code to run something",
        "teaser": "the model writes a request; your code does the doing",
        "body": [
          "Here is the actual dance. You give the model a list of tools, each with a name, a description, and the inputs it expects ('get_weather needs a city'). When the model decides it needs one, it does not run anything itself — it cannot. Instead it emits a structured message that says, in effect, 'call get_weather with city=Sydney.' Your code sees that, actually runs the real weather lookup, and passes the result back into the conversation. The model then reads the result and continues, perhaps calling another tool or writing the final answer.",
          "The crucial mental model is that the model decides and your code does. The model is the brain choosing which button to press; your software is the hand that presses it and the wire that carries the answer back. This separation is also why tool use is safe-able: every actual action runs through your code, where you can check permissions, validate inputs, and refuse — the model never reaches past the buttons you chose to give it."
        ]
      },
      {
        "title": "MCP and the N×M integration problem",
        "teaser": "why one standard plug beats a drawer full of adapters",
        "body": [
          "Before a standard, connecting tools to models was an N×M nightmare. If you had N models and M tools, you potentially needed N×M separate custom integrations — every model wired by hand to every tool, and every new model or tool multiplying the work. It was the same mess as the era before USB, when every device needed its own special cable and port.",
          "MCP collapses N×M into N+M. A tool author writes ONE MCP 'server' describing their tool, and any MCP-speaking model can use it; a model vendor supports MCP once and instantly reaches every MCP tool. Build the integration a single time and it works everywhere the standard is spoken. That is the whole reason a protocol like this unlocks an ecosystem: the cost of connecting drops from 'rewrite for every pair' to 'implement the standard once.'"
        ]
      },
      {
        "title": "Good tool design: small, distinct, token-efficient, always-loaded vs discovered",
        "teaser": "tools are a UI for the model — design them like one",
        "body": [
          "Tools are not a backend afterthought; they are a user interface, except the user is the model. The model picks the wrong tool for the same reasons a person clicks the wrong button: the labels are vague, two buttons do nearly the same thing, or there are forty of them crammed together. Good tools are small (one clear job each), distinct (no overlapping twins the model has to guess between), and token-efficient (their descriptions and outputs are tight, because everything they emit eats into the context budget from the last lesson).",
          "There is also a choice between always-loaded and discovered tools. A handful of core tools can sit in the context on every call ('always loaded'), but if you have hundreds, listing them all would blow the budget and confuse the model. So you let it discover the right tools just-in-time — search for or load only the relevant ones for the task at hand. Either way, tool design is a genuine product decision with direct reliability consequences: the better the buttons, the more often the model presses the right one."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Tools are what turn 'a chatbot' into 'a product that does real work,' and they are the literal foundation of every AI agent you will meet in Module 5 — an agent is mostly a model deciding which tools to call in a loop. If you want a feature that takes action rather than just talks, you are asking for tool use, whether or not anyone uses the word.",
        "The flip side is that every tool you grant is a new permission and a new risk surface — a button the model can now press on your behalf, including pressing it when it shouldn't (you will see exactly how this goes wrong in Module 7). So tool design is a product decision, not just an engineering one: small, distinct, well-described tools are more reliable AND safer, while a sprawling pile of overlapping, over-powered tools is both flakier and more dangerous. Choosing what NOT to expose is as important as what you do."
      ]
    },
    "caseStudy": {
      "title": "Fierce rivals standardise on MCP, then hand it to the Linux Foundation (2024–2025)",
      "body": [
        "Anthropic launched the Model Context Protocol in November 2024 as an open way for models to connect to tools and data. What happened next is the rare part: through 2025 it was adopted by OpenAI and Google — direct competitors — grew to more than 10,000 public MCP servers, and at the end of 2025 was donated to a new Agentic AI Foundation under the neutral Linux Foundation, co-founded with Block and OpenAI and backed by AWS, Google, Microsoft, Cloudflare, and Bloomberg.",
        "Competitors do not standardise on a rival's protocol unless the value of one shared plug clearly beats the value of owning a proprietary one. It happened before with USB and with HTTP: once an ecosystem is big enough, everyone wins more from interoperability than from lock-in. MCP becoming neutral infrastructure is the moment tool use stopped being one company's feature and became the industry's wiring standard."
      ],
      "bridge": "Once the plug shape is agreed, the model's row of buttons can connect to anything — which is what makes tools the launchpad for real agents in Module 5."
    },
    "takeaways": [
      "Tool use lets the model call real software and take action; without it, an LLM can only produce text.",
      "The model decides which tool to call, but your code actually runs it — which is where permissions and safety live.",
      "MCP is the standard plug that turns an N×M integration mess into build-once, connect-anywhere."
    ],
    "knowledgeCheck": [
      {
        "q": "When a model 'uses a tool' like looking up a customer, what actually happens?",
        "options": [
          {
            "text": "The model runs the database query itself directly",
            "correct": false
          },
          {
            "text": "The model emits a structured request, your code runs the real lookup, and the result is fed back to the model",
            "correct": true
          },
          {
            "text": "The model recalls the customer from its training data",
            "correct": false
          }
        ],
        "feedback": "The model only decides which tool to call; your code does the actual work and returns the result — which is exactly why tool use can be permissioned and made safe."
      },
      {
        "q": "What problem does MCP (the Model Context Protocol) solve?",
        "options": [
          {
            "text": "It makes the model reason better",
            "correct": false
          },
          {
            "text": "It standardises how models and tools connect, turning N×M custom integrations into build-once",
            "correct": true
          },
          {
            "text": "It encrypts the model's outputs",
            "correct": false
          }
        ],
        "feedback": "MCP is the shared 'plug shape': build a tool integration once and any MCP-speaking model can use it, like USB did for devices."
      }
    ],
    "glossaryTerms": [
      "tool-use",
      "function-calling",
      "mcp",
      "agent",
      "context-window"
    ],
    "sources": [
      {
        "label": "ByteByteGo — Connecting LLMs to the Real World",
        "url": "https://blog.bytebytego.com/p/connecting-llms-to-the-real-world"
      },
      {
        "label": "Descope — What Is MCP?",
        "url": "https://www.descope.com/learn/post/mcp"
      },
      {
        "label": "Data Science Dojo — Guide to the Model Context Protocol",
        "url": "https://datasciencedojo.com/blog/guide-to-model-context-protocol/"
      },
      {
        "label": "Obot — MCP vs Function Calling",
        "url": "https://obot.ai/resources/learning-center/mcp-vs-function-calling/"
      }
    ]
  },
  "eng-m2-l4": {
    "id": "eng-m2-l4",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 4,
    "estMinutes": 9,
    "title": "The Form With Guide Rails: Structured Output",
    "coreIdea": "When an AI's answer feeds other software, you need it in a strict, predictable format like JSON — not a chatty paragraph.",
    "plainEnglish": [
      "A chat reply can be a friendly paragraph because a human reads it. But the moment an AI's output feeds into other software — saved to a database, sent to an API, rendered in a UI — that software needs a strict, predictable shape. The standard shape is JSON: data laid out in clearly named fields, like a filled-in form, that code can read without guessing.",
      "The catch is that naively asking a model to 'please reply in JSON' fails surprisingly often — somewhere between 5% and 20% of the time it adds a chatty preamble, drops a required field, or produces almost-but-not-quite-valid output. And because the next piece of software expects clean data, one malformed reply can silently break the whole downstream chain.",
      "Reliable structured output is what makes LLMs safe to wire into real systems. But there is a load-bearing warning attached: a perfectly formatted answer can still be completely wrong. Valid format is not correct content — the form being filled in neatly tells you nothing about whether the numbers in it are true."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine hiring someone to fill out a tax form. If you just say 'write me the answer,' you get back a rambling letter — accurate or not, you cannot file it. Hand them a blank form with labelled boxes (that is a JSON schema: a spec saying which fields must exist and what type each holds) and you are in far better shape. Constrained decoding goes one step further: it is a form with a physical guide rail that won't let the pen leave the box or skip a required field. They literally cannot fill it out in the wrong shape.",
        "But here is the trap that catches teams over and over: a perfectly completed form, every box filled, every rule obeyed, can still have the WRONG numbers in the boxes. The guide rail guarantees the shape, never the truth. 'income: 95000' is valid JSON whether or not the person actually earned 95,000. Correct format does not mean correct content — and confusing the two is one of the most expensive mistakes in shipping AI features."
      ]
    },
    "deepSections": [
      {
        "title": "Four generations of reliability: asking nicely → function calling → native schema → constrained decoding",
        "teaser": "the same goal, four steadily-more-bulletproof ways to reach it",
        "body": [
          "Getting reliable structure has evolved through four generations. Generation one was asking nicely: putting 'respond in JSON' in the prompt and hoping. It works most of the time, which is exactly the problem — 'most of the time' breaks software. Generation two repurposed function calling: because tool calls already produce structured arguments, you could smuggle your data out as a fake tool call, which was sturdier but a bit of a hack.",
          "Generation three was native schema support — providers added a first-class 'give me output matching this exact schema' mode, so you declare the shape and the API enforces it. Generation four, constrained decoding, is the strongest: it controls the model's word-by-word generation so that producing invalid output is literally impossible, not just discouraged. Each generation traded 'hope it complies' for 'guarantee it complies,' and modern systems lean on the last two."
        ]
      },
      {
        "title": "Constrained decoding: making invalid output literally impossible",
        "teaser": "the guide rail that removes the wrong moves before they happen",
        "body": [
          "Recall that a model generates text one chunk at a time, each time choosing from all possible next chunks. Constrained decoding intervenes at that exact step: at each pick, it masks out — removes from consideration — any chunk that would violate the required schema. If the schema says the next thing must be a number, every non-number option is simply taken off the table before the model chooses. The model cannot wander off-format because the off-format paths no longer exist.",
          "This is a categorical upgrade over asking nicely. 'Please use JSON' is a request the model can fumble; constrained decoding is a rail it cannot cross. The result is output that is valid by construction — guaranteed to parse, guaranteed to have the required fields, every single time. That guarantee is what lets engineers stop writing defensive 'what if the JSON is broken' cleanup code and trust the shape completely. Just remember the rail governs shape only."
        ]
      },
      {
        "title": "Schema design and the syntactic-vs-semantic trap",
        "teaser": "two kinds of 'wrong' — and only one of them is the model's shape",
        "body": [
          "There are two completely different ways an output can be wrong, and conflating them burns teams. A syntactic error is a shape error: malformed JSON, a missing field, the wrong type — the form is filled out badly. Constrained decoding kills syntactic errors. A semantic error is a content error: the form is perfectly shaped but the values are false — the model confidently put '95000' in the income box when the true figure was '59000.' No amount of format enforcement catches that, because the shape is flawless.",
          "Good schema design helps a little — tight field definitions, enums that limit a field to a fixed list of allowed values, sensible required-vs-optional choices all reduce ways the model can go subtly astray. But schema design cannot make content true. That job belongs to evaluations on the actual values (Module 4), where you check whether the numbers in the boxes are right, not just whether the boxes are filled. The syntactic-vs-semantic trap is assuming a parsing success is a correctness success. It is not."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Structured output is the 'default contract' between the AI and the rest of your app — it is what lets an AI feature plug into existing systems and workflows instead of being trapped in a chat box. If you want the model's answer to populate a record, trigger a workflow, or drive a UI, you are relying on structured output whether or not it is named in the spec. Treat it as the interface between the smart-but-unpredictable part and the rest of your reliable software.",
        "The load-bearing lesson for a PM is the trap: 'the JSON was valid' is not 'the answer was right.' It is genuinely common for a team to celebrate that parsing errors hit zero and quietly assume the feature is therefore correct — but a flawlessly-shaped form full of wrong numbers passes every format check and fails every customer. You still need evaluations on the content (Module 4), not just the shape. When someone reports 'the integration is solid now,' the right follow-up is 'solid format, or solid answers?'"
      ]
    },
    "caseStudy": {
      "title": "32% errors to 0.4%: OpenAI Structured Outputs in production (2024–2025)",
      "body": [
        "In 2024–2025 OpenAI shipped Structured Outputs with a strict JSON Schema mode — native, enforced schema compliance rather than 'please format nicely.' One production write-up reported that switching to constrained JSON decoding cut their post-processing errors from 32% down to 0.4%. That is the difference between an integration that needs constant manual babysitting and cleanup code, and one engineers can actually trust to parse every time.",
        "The trajectory is industry-wide: Gartner has predicted that by 2027, 95% of enterprise LLM deployments will use constrained decoding. It is becoming the boring default, the way HTTPS became the boring default for the web — invisible when it works, and the obvious right call in hindsight. But the same write-ups are careful to repeat the caveat: zero parsing errors solved the SHAPE problem, and said nothing about whether the values were correct."
      ],
      "bridge": "Constrained decoding nails the shape so completely that the only failures left are about content — which is exactly why the next big skill in this track is evaluating whether the answers are actually true."
    },
    "takeaways": [
      "Structured output (usually JSON) is the contract that lets an AI feature plug into real software instead of a chat box.",
      "Constrained decoding makes invalid format literally impossible — the model cannot leave the boxes.",
      "Valid format is not correct content: a perfectly-shaped answer can still be flat wrong, so you still need content evals."
    ],
    "knowledgeCheck": [
      {
        "q": "What does constrained decoding guarantee?",
        "options": [
          {
            "text": "That the answer's content is factually correct",
            "correct": false
          },
          {
            "text": "That the output's format (shape/fields/types) is valid every time",
            "correct": true
          },
          {
            "text": "That the model runs faster",
            "correct": false
          }
        ],
        "feedback": "Constrained decoding makes invalid FORMAT impossible by masking off-schema options as the model generates — but it says nothing about whether the values are true."
      },
      {
        "q": "A team reports their AI integration now has zero JSON parsing errors. What should you still check?",
        "options": [
          {
            "text": "Nothing — valid JSON means the feature is correct",
            "correct": false
          },
          {
            "text": "Whether the CONTENT (the actual values) is correct, via evaluations",
            "correct": true
          },
          {
            "text": "Whether the model is using enough tokens",
            "correct": false
          }
        ],
        "feedback": "Zero parsing errors fixes shape, not truth — a perfectly-formatted answer can still contain wrong values, so content evals are still required."
      }
    ],
    "glossaryTerms": [
      "structured-output",
      "json-schema",
      "constrained-decoding",
      "function-calling",
      "evals"
    ],
    "sources": [
      {
        "label": "Structured Outputs in LLM Production",
        "url": "https://tianpan.co/blog/2025-10-29-structured-outputs-llm-production"
      },
      {
        "label": "G360 — Structured Outputs as the Default Contract",
        "url": "https://g360technologies.com/structured-outputs-are-becoming-the-default-contract-for-llm-integrations/"
      },
      {
        "label": "arXiv — Constrained decoding for structured output",
        "url": "https://arxiv.org/pdf/2501.10868"
      },
      {
        "label": "Rotascale — Structured Output Isn't Reliable Output",
        "url": "https://rotascale.com/blog/structured-output-isnt-reliable-output/"
      }
    ]
  },
  "eng-m2-l5": {
    "id": "eng-m2-l5",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 5,
    "estMinutes": 9,
    "title": "The Desk and the Filing Cabinet: Memory Across Turns and Sessions",
    "coreIdea": "Models forget everything by default, so making a product feel personal and handle long work means deliberately engineering what to keep, summarise, and forget.",
    "plainEnglish": [
      "LLMs are stateless. That word means: by default they remember nothing once a conversation ends — and even within one long conversation, they eventually run out of room and start losing the earliest parts. Out of the box, a chatbot is a goldfish: charming, capable, and utterly amnesiac the moment you walk away.",
      "To build products that feel personal ('welcome back, here's where we left off') and that can handle long, multi-step work without falling apart, you have to engineer memory deliberately. That means making explicit decisions: what to keep in front of the model right now, what to summarise to save space, what to store away for next time, and — crucially — what to forget.",
      "This is the difference between a goldfish chatbot and an assistant that genuinely remembers you. Memory is not a setting you switch on; it is a system you design, with real consequences for how the product feels, what it costs, and how private it is."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "The context window is a small desk. Everything the model is actively working on has to fit on that desk at once — the current question, the recent conversation, the documents it pulled. The desk is finite: once it is full, the next paper you add pushes an old one off the far edge, where it is simply gone. What is on the desk right now is short-term memory.",
        "Long-term memory is the filing cabinet behind the desk. The model cannot see inside it directly — out of sight is out of mind — so it (or you) must deliberately file important things away, and just as deliberately pull the right folder back onto the desk when it is needed again. A great assistant also keeps a running handover note at the edge of the desk, so even if someone clears the whole surface, it can rebuild its place in seconds rather than starting from nothing."
      ]
    },
    "deepSections": [
      {
        "title": "Short-term vs long-term memory",
        "teaser": "the desk you can see versus the cabinet you have to reach for",
        "body": [
          "Short-term memory is everything currently inside the context window — the desk. It is immediate and effortless: the model 'just knows' it because it is right there in front of it. But it is small and temporary; it lasts only as long as this session and only as far as the desk's edge. Within a single chat, short-term memory is why the model can refer back to something you said three messages ago.",
          "Long-term memory is information stored outside the context — in the filing cabinet — that survives across sessions and can be retrieved later: your preferences, key facts, decisions from last week. The catch is that long-term memory is never automatic. Something has to decide to write it down, and something has to decide to fetch it back at the right moment. That deliberate save-and-retrieve loop is the entire engineering job; nothing reaches the desk from the cabinet by magic."
        ]
      },
      {
        "title": "Compaction, structured note-taking (NOTES.md), and just-in-time retrieval",
        "teaser": "three moves to keep a crowded desk usable",
        "body": [
          "Compaction is summarising the older, bulkier parts of a conversation into a tight recap so they take up less desk space while keeping the gist — like replacing a thick stack of meeting transcripts with a one-page summary. It is how an agent works through a long task without the desk overflowing, and it directly fights the context rot from Lesson 1, because a compact, high-signal summary beats a sprawling raw transcript.",
          "Structured note-taking is the agent keeping its own running handover file — Anthropic's agents literally maintain a NOTES.md — where it jots key decisions and state as it goes. If the desk gets cleared, it reloads the note and is instantly back up to speed. Just-in-time retrieval is the partner move: rather than dumping everything onto the desk upfront 'in case it's needed,' the agent pulls the specific folder from the cabinet only at the moment it is needed. Together these keep the desk tidy AND informed."
        ]
      },
      {
        "title": "Forgetting policies and memory-as-tools",
        "teaser": "remembering everything is a bug, not a feature",
        "body": [
          "Counter-intuitively, a good memory system must forget on purpose. Hoarding every detail forever bloats cost, surfaces stale or wrong facts ('you said you lived in Sydney' — two years and one move ago), and creates a privacy liability where sensitive data lingers long past its usefulness. A forgetting policy decides what expires, what gets overwritten when it changes, and what should never have been stored at all. Deliberate forgetting is a feature, not a failure.",
          "Memory-as-tools is the clean way to wire this up: instead of memory being some opaque background magic, you give the agent explicit tools — save_memory, search_memory, delete_memory — so storing and recalling become deliberate, inspectable actions (and connect straight back to tool use in Lesson 3). The agent decides what is worth filing and when to pull it back, and because every memory operation runs through a tool, you can see, audit, and govern exactly what is being remembered and forgotten."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Customers now expect the product to 'remember' them — past chats, preferences, where they left off — and they are quietly annoyed when it doesn't. But memory is engineered, not free: it has direct cost (storing and retrieving memories adds tokens and infrastructure on every relevant call), privacy (whatever you remember, you now hold and must protect), and accuracy (a confidently-recalled stale fact is worse than no memory) consequences.",
        "So 'what should the product remember, summarise, and forget?' is a product decision, not a technical detail to delegate and forget. It shapes both the experience and the bill, and it is the direct enabler of the long-running agents in Module 5 — an agent that can work for an hour needs to remember what it did in minute one. Owning that trade-off deliberately is what separates a memory feature that delights from one that quietly leaks money and trust."
      ]
    },
    "caseStudy": {
      "title": "Memory graduates to platform: AWS Bedrock AgentCore and Mem0 (2025)",
      "body": [
        "In 2025 Amazon launched Bedrock AgentCore Memory: managed infrastructure that explicitly splits short-term memory (within a session) from long-term memory (cross-session preferences and insights) for production agents. When a hyperscaler ships a managed product for something, it is a clear signal that the thing has graduated from research curiosity to commercial necessity — companies were hitting the goldfish problem in production and needed real plumbing for it, not a clever prompt.",
        "Around the same time, startups like Mem0 built their entire product around being 'the memory layer for AI agents' — a dedicated service whose only job is deciding what to store, summarise, retrieve, and forget on an agent's behalf. A whole company existing to do nothing but memory is the strongest possible evidence that this is hard, valuable, and very much its own engineering discipline rather than a feature you get for free."
      ],
      "bridge": "Memory stopped being a side-effect of the prompt and became its own engineered layer — because the long-running agents coming in Module 5 are impossible without it."
    },
    "takeaways": [
      "Models are stateless: they forget everything by default, so memory must be deliberately engineered.",
      "Short-term memory is the desk (the context window); long-term memory is the filing cabinet you must save to and fetch from.",
      "A good memory system forgets on purpose — hoarding everything raises cost, surfaces stale facts, and creates privacy risk."
    ],
    "knowledgeCheck": [
      {
        "q": "Why don't AI chatbots remember you between conversations by default?",
        "options": [
          {
            "text": "Because LLMs are stateless — they retain nothing once a session ends unless memory is engineered",
            "correct": true
          },
          {
            "text": "Because companies disable memory to save money",
            "correct": false
          },
          {
            "text": "Because the model deletes its training data after each chat",
            "correct": false
          }
        ],
        "feedback": "LLMs are stateless by default; cross-session memory only exists if you deliberately store and retrieve it, like filing folders in a cabinet."
      },
      {
        "q": "Why is deliberately forgetting part of a good memory system?",
        "options": [
          {
            "text": "It is not — a good system remembers everything forever",
            "correct": false
          },
          {
            "text": "Hoarding everything raises cost, surfaces stale or wrong facts, and creates privacy risk",
            "correct": true
          },
          {
            "text": "Forgetting makes the model run faster on unrelated tasks",
            "correct": false
          }
        ],
        "feedback": "Remembering everything is a liability — a forgetting policy controls cost, prevents confidently recalling outdated facts, and limits privacy exposure."
      }
    ],
    "glossaryTerms": [
      "stateless",
      "context-window",
      "short-term-memory",
      "long-term-memory",
      "compaction",
      "just-in-time-retrieval"
    ],
    "sources": [
      {
        "label": "AWS — Bedrock AgentCore Memory for Context-Aware Agents",
        "url": "https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-memory-building-context-aware-agents/"
      },
      {
        "label": "arXiv — Memory for AI agents (2601.01885)",
        "url": "https://arxiv.org/abs/2601.01885"
      },
      {
        "label": "Weaviate — Context Engineering",
        "url": "https://weaviate.io/blog/context-engineering"
      },
      {
        "label": "Mem0 — Context Engineering for AI Agents Guide",
        "url": "https://mem0.ai/blog/context-engineering-ai-agents-guide"
      }
    ]
  },
  "eng-m2-l6": {
    "id": "eng-m2-l6",
    "trackId": "engineering",
    "moduleId": "eng-m2",
    "order": 6,
    "estMinutes": 9,
    "title": "Assembly Line vs Handyman: Multi-Step Chains and Workflows",
    "coreIdea": "Real tasks need multiple steps, and the key design call is when to follow a fixed script versus let the model loop freely — because every extra step adds cost and risk.",
    "plainEnglish": [
      "Most real tasks don't finish in one model call. They need a sequence: plan the work, retrieve some documents, call a tool, check the result, revise, maybe loop again. Stringing these steps together is how you tackle genuinely complex work that a single prompt could never handle.",
      "The big design decision is how much freedom to give. A chain (or workflow) is a fixed script — step 1, then 2, then 3 — that you wrote in advance. An agent is the model deciding the steps for itself in a loop, choosing tools and when to stop. Fixed scripts are predictable and cheap; free-roaming agents are flexible and powerful. Most of the craft is knowing which one a given feature actually needs.",
      "And there is a tax on complexity: every extra step compounds error and adds cost and latency. Choosing the simplest architecture that gets the job done — rather than the most impressive — turned out to be one of the most important and most argued-about design calls of 2025 and 2026."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A single LLM call is one swing of a hammer — useful, but only good for one nail. A chain is a fixed recipe: step 1, step 2, step 3, in the same order every time, like an assembly line. Assembly lines are wonderfully reliable and easy to inspect, because you always know which station a part is at and where a defect crept in — but they are rigid, and they only build the one thing they were laid out to build.",
        "An agent is a handyman you send into a house with a toolbox and a goal — 'fix the leak' — trusting them to figure out the steps as they go. That is enormously powerful for messy, unpredictable jobs no fixed recipe could anticipate. But the handyman might also wander: try the wrong tool, go down a dead end, take the scenic route, or get stuck. The real design question is never 'agents good or bad?' It is: does this particular job actually need the flexible handyman, or will the predictable assembly line do it cheaper and more reliably?"
      ]
    },
    "deepSections": [
      {
        "title": "Chains/pipelines vs agents vs sub-agents",
        "teaser": "three points on a freedom-versus-control dial",
        "body": [
          "A chain (or pipeline) is a fixed sequence of steps that you, the engineer, defined in advance — the model fills in each station but never decides the order. It is the assembly line: predictable, cheap, and easy to debug, because the path is known. An agent flips that: you give the model a goal and a set of tools and let it choose the steps itself, looping until it decides it is done. That is the handyman — flexible enough for open-ended work, but harder to predict and to debug.",
          "Sub-agents sit on top: a main agent hands a focused slice of work to a fresh, separate agent with its own clean context, gets back just the result, and continues. This is powerful because each sub-agent works on the cleanest possible desk (tying straight back to context engineering in Lesson 1) — but it also adds coordination overhead and more moving parts. The design is a dial from full control (chain) to full autonomy (agent), and good engineers pick the least autonomy that still does the job."
        ]
      },
      {
        "title": "Error compounding and the cost of every extra step",
        "teaser": "small reliabilities multiply into big unreliability",
        "body": [
          "Here is the maths that should haunt every multi-step design. If each step is 95% reliable, that sounds great — but reliability multiplies across steps. Two steps at 95% give about 90% overall; five steps give about 77%; ten steps drop you to roughly 60%. Each step is a place an error can creep in, and errors compound — a small mistake early can quietly cascade into a wrong final answer, with no single station obviously at fault.",
          "On top of accuracy, every extra step costs real money and real time: another model call, more tokens, more latency the user waits through. So adding steps is never free on either axis. The discipline is to add a step only when it earns its keep — when the capability it unlocks outweighs the reliability it spends and the cost it adds. This is the single best argument against over-engineering: the fanciest architecture is often the least reliable one."
        ]
      },
      {
        "title": "The single-vs-multi-agent debate without the ideology",
        "teaser": "two famous essays that actually agreed underneath",
        "body": [
          "In 2025 this became a genuinely heated public argument, and it is the clearest lesson in the whole module. Cognition (makers of the Devin coding agent) published 'Don't Build Multi-Agents,' warning that splitting work across multiple agents fractures the shared context and leads them to make conflicting decisions. Almost simultaneously, Anthropic published 'How we built our multi-agent research system,' explaining cases where parallel sub-agents clearly DO win — like fanning out a research question across many independent searches at once.",
          "The headlines looked like a brawl, but underneath, both essays largely agreed: architecture is a trade-off, not a religion. Multi-agent shines when work splits into genuinely independent parallel pieces; it hurts when the pieces are tightly coupled and need to share context. The mature takeaway is to resist picking a 'team' and instead ask, for this specific task, whether the work is parallel-and-independent (lean multi) or sequential-and-coupled (lean single). Anyone selling you one answer for all problems is selling ideology, not engineering."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "More steps and more agents mean more cost, more latency, and more ways to fail — but also more raw capability. Knowing that a fixed pipeline is cheaper, faster, and far easier to debug than a free-roaming agent gives you the language to push back when a team reaches for an impressive multi-agent design for a task a simple chain would nail. 'What is the simplest thing that works?' is one of the most valuable questions a PM can ask in this space.",
        "This is also the conceptual on-ramp to the full agents module. You do not need to architect the system, but you do need to recognise when a feature genuinely calls for an autonomous, looping agent versus a predictable script — because that single choice drives the cost, the latency, the reliability, and how hard the thing will be to debug at 2am. Scoping a feature to the least autonomy that does the job is product leadership, not just engineering taste."
      ]
    },
    "caseStudy": {
      "title": "Cognition vs Anthropic: the multi-agent clash that secretly agreed (June 2025)",
      "body": [
        "In June 2025 the AI-engineering world watched what looked like a public showdown. Cognition published 'Don't Build Multi-Agents,' arguing that handing pieces of a task to separate agents fractures context and produces conflicting, hard-to-reconcile decisions — and that a single, coherent agent is usually the safer bet. Days later, Anthropic published 'How we built our multi-agent research system,' detailing exactly when parallel sub-agents pay off, such as a research task that naturally splits into many independent lookups run at once.",
        "Read past the opposing headlines and the two essays were strikingly compatible. Both agreed that splitting work is costly when the pieces are coupled and need shared context, and valuable when the pieces are genuinely independent. The 'fight' was really two teams describing different ends of the same trade-off curve. For practitioners it became the canonical reminder that in AI engineering, the honest answer to almost every architecture question is 'it depends on the task' — and that confident, one-size-fits-all advice is the thing to be suspicious of."
      ],
      "bridge": "Architecture is a trade-off, not a tribe — which is exactly the mindset you carry into the full agents module, where these chains and loops grow into real autonomous systems."
    },
    "takeaways": [
      "Chains are predictable assembly lines; agents are flexible handymen — pick the least autonomy that does the job.",
      "Errors compound: even 95%-reliable steps multiply down to ~60% over ten steps, and every step adds cost and latency.",
      "The single-vs-multi-agent debate has no universal winner — it depends on whether the work is independent or coupled."
    ],
    "knowledgeCheck": [
      {
        "q": "If each step in a 10-step chain is 95% reliable, roughly how reliable is the whole chain?",
        "options": [
          {
            "text": "About 95% — the steps don't affect each other",
            "correct": false
          },
          {
            "text": "About 60% — reliabilities multiply, so errors compound across steps",
            "correct": true
          },
          {
            "text": "About 99% — more steps means more chances to fix mistakes",
            "correct": false
          }
        ],
        "feedback": "Reliability multiplies across steps (0.95 to the 10th power is roughly 0.60), which is why every extra step is a real reliability cost, not a free one."
      },
      {
        "q": "What was the real lesson of the 2025 Cognition vs Anthropic multi-agent debate?",
        "options": [
          {
            "text": "Multi-agent systems are always wrong",
            "correct": false
          },
          {
            "text": "Single-agent systems are always wrong",
            "correct": false
          },
          {
            "text": "Architecture is a task-dependent trade-off — multi shines for independent work, single for coupled work",
            "correct": true
          }
        ],
        "feedback": "Beneath the opposing headlines both essays agreed: it depends on whether the work splits into independent pieces or is tightly coupled — there's no universal winner."
      }
    ],
    "glossaryTerms": [
      "chain",
      "agent",
      "sub-agent",
      "error-compounding",
      "workflow"
    ],
    "sources": [
      {
        "label": "Smol AI — Cognition vs Anthropic (multi-agent debate)",
        "url": "https://news.smol.ai/issues/25-06-13-cognition-vs-anthropic"
      },
      {
        "label": "Phil Schmid — Single vs Multi-Agents",
        "url": "https://www.philschmid.de/single-vs-multi-agents"
      },
      {
        "label": "Anthropic — Effective Context Engineering for AI Agents",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      },
      {
        "label": "arXiv — Multi-agent systems analysis (2604.02460)",
        "url": "https://arxiv.org/pdf/2604.02460"
      }
    ]
  }
}
