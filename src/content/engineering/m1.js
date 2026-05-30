// Module 1 — What an LLM Actually Is
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m1-l1": {
    "id": "eng-m1-l1",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 1,
    "estMinutes": 8,
    "title": "The Improv Actor: Next-Token Prediction",
    "coreIdea": "A language model predicts the next chunk of text — nothing more.",
    "plainEnglish": [
      "An LLM is not a thinking machine or a database of facts. It is a statistical engine that predicts the most likely next piece of text, one chunk at a time, over and over.",
      "Almost every strength (its fluency) and every flaw (inventing facts, giving different answers to the same question) follows from this single mechanism."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "An immensely well-read improv actor who has speed-read most of the internet and now plays an endless game of \"finish my sentence.\" It never looks anything up mid-sentence — it just produces the most plausible next few letters based on the rhythm of everything it has ever read.",
        "It is spectacular at sounding right because sounding right is literally the only thing it was trained to do."
      ]
    },
    "deepSections": [
      {
        "title": "The math without the math",
        "teaser": "rolling weighted dice, not looking up answers",
        "body": [
          "At each step the model assigns a probability to every possible next chunk of text, then picks from that list of options — a bit like rolling dice that are weighted by everything it has ever read.",
          "There is no separate \"fact store\" it consults. The knowledge is blurred into those probabilities, which is why it can be fluent and wrong at the same time."
        ]
      },
      {
        "title": "Temperature: why the same prompt gives different answers",
        "teaser": "a creativity dial from cautious to wild",
        "body": [
          "\"Temperature\" is a setting that controls how adventurously the model picks. Low temperature makes it choose the single safest next chunk every time — repetitive but predictable. High temperature lets it take more risks — more creative, but more likely to wander.",
          "This is why you can ask the exact same question twice and get two different answers. It is a feature of how it works, not a malfunction."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "If you do not internalise that the model is a plausibility engine, not a truth engine, you will over-promise to customers and stakeholders.",
        "The single most common AI-product failure is treating fluent output as if it were verified output. Your entire roadmap of trust features — citations, review steps, guardrails — exists because of this one fact."
      ]
    },
    "caseStudy": {
      "title": "ChatGPT reaches 100 million users in two months",
      "body": [
        "When ChatGPT launched in November 2022, the model underneath it had been trained on one deceptively simple goal: predict the next chunk of text. Nothing about \"being correct\" or \"telling the truth\" was in that goal.",
        "It still became the fastest-growing consumer app in history at the time, because predicting text well enough, at a large enough scale, produces something that feels like it understands you."
      ],
      "bridge": "Next-token prediction at scale produced something that feels like understanding — without ever being designed to be true. Hold onto that gap; the rest of the track is about closing it."
    },
    "takeaways": [
      "Generating fluent text is mostly solved; being correct is a separate, harder problem.",
      "Getting different answers to the same question is expected behaviour, not a bug.",
      "\"It sounds confident\" tells you nothing about whether it is right."
    ],
    "knowledgeCheck": [
      {
        "q": "What is a large language model fundamentally doing when it answers you?",
        "options": [
          {
            "text": "Looking up the answer in a database of facts",
            "correct": false
          },
          {
            "text": "Predicting the most plausible next chunk of text",
            "correct": true
          },
          {
            "text": "Reasoning from first principles the way a person does",
            "correct": false
          }
        ],
        "feedback": "Exactly — it is a plausibility engine. Almost everything else about LLMs follows from that one idea."
      }
    ],
    "glossaryTerms": [
      "token",
      "temperature",
      "inference",
      "large-language-model"
    ],
    "sources": [
      {
        "label": "Andrej Karpathy — Deep Dive into LLMs (2025)",
        "url": "https://lawwu.github.io/posts/2025-02-24-karpathy-deep-dive-llms/index.html"
      },
      {
        "label": "Next-token prediction, explained",
        "url": "https://www.wwwinsights.com/ai/llm-next-token-prediction/"
      }
    ]
  },
  "eng-m1-l2": {
    "id": "eng-m1-l2",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 2,
    "title": "The Jet-Lagged Consultant: Capabilities, Limits, and the Map You Must Draw",
    "estMinutes": 9,
    "coreIdea": "Shipping good AI is mostly the skill of matching the model to tasks it's genuinely great at and engineering around the handful of things it can't do.",
    "plainEnglish": [
      "An LLM is brilliant at some things and surprisingly bad at others, and the gap between the two is not random — it's predictable. It's superhuman at anything that's fundamentally about language: summarizing, drafting, translating, rewriting, explaining, and writing code. Give it a fuzzy, open-ended request and it produces a polished first draft in seconds.",
      "But it has hard edges. Its knowledge stops at a cutoff date, so it knows nothing about last week. It can't reliably do exact arithmetic. It struggles with genuinely novel problems that aren't echoed anywhere in its training. And it has never seen your company's private data. Crucially, it doesn't announce these limits — it improvises confidently right past them.",
      "So the real job isn't 'use AI.' It's drawing a map: here's what the model does brilliantly on its own, here's where it needs a folder of facts handed to it, here's where it needs a calculator or a live data feed. Every technique in the rest of this track is a deliberate answer to one specific limit on that map."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a charismatic, jet-lagged expert consultant who has read essentially everything published up to last year — and who just stepped off a 14-hour flight with a dead phone and no files. Ask them to draft a memo, explain a concept, translate a clause, or sketch an argument, and they're dazzling: fluent, fast, and genuinely insightful.",
        "Now ask them for today's stock price, your company's internal travel policy, or an exact 12-digit multiplication. They don't say 'I can't.' They smile and improvise something that sounds completely plausible — and may be completely wrong. The fix isn't a smarter consultant. It's handing them the relevant folder (that's retrieval), or a calculator and a working phone (that's tools). The entire skill is knowing, before you ask, which questions need the folder."
      ]
    },
    "deepSections": [
      {
        "title": "Strengths and limits, side by side",
        "teaser": "a cheat-sheet you can route features against",
        "body": [
          "On the strengths side: fluent writing and rewriting, summarizing long text, translation, explaining ideas at any reading level, generating and debugging code, extracting structure from messy text, and brainstorming. These all share a trait — they're transformations of language the model has seen patterns of a million times. The answer doesn't need to be the one true fact; it needs to be a good piece of language.",
          "On the limits side: anything requiring fresh information after the knowledge cutoff, exact calculation, your private or proprietary data, truly original reasoning with no precedent, and reliable factual recall of obscure specifics. The pattern is the mirror image — these need a ground truth the model simply doesn't carry. The practical move is to read every feature request and ask: is this a language transformation (it'll be great) or a ground-truth lookup (it needs help)?"
        ]
      },
      {
        "title": "Emergent abilities: real capability jump or measurement artifact?",
        "teaser": "why 'it suddenly got good at X' is contested",
        "body": [
          "As models got bigger, researchers noticed some abilities seemed to appear suddenly at a certain scale — arithmetic, multi-step reasoning, following complex instructions — rather than improving smoothly. These were dubbed 'emergent abilities,' and they fed a lot of excited 'the model woke up' narratives.",
          "A 2023 Stanford paper (Schaeffer et al.) pushed back hard: many of these 'jumps' are artifacts of how we measure. If you grade an arithmetic task as all-or-nothing (get every digit right or score zero), progress looks like a sudden cliff. Switch to a smoother metric (partial credit per digit) and the same models improve gradually. The lesson for a builder is humbling and useful: be skeptical of dramatic capability claims, and always ask how the thing was measured before you believe the curve."
        ]
      },
      {
        "title": "Why benchmarks can be gamed (a teaser for Module 4's 'benchmark trap')",
        "teaser": "a 92% score can mean almost nothing",
        "body": [
          "Vendors love a leaderboard number: '92% on MMLU,' 'state of the art on coding.' But benchmarks are static test sets, and if a test's questions (or close paraphrases) leaked into a model's training data, the model can ace the test by memorization rather than skill — a problem called contamination. There's also direct incentive to tune a model toward whatever the famous benchmarks measure.",
          "The result is that a headline benchmark score tells you how a model does on that frozen test, not how it'll do on your actual users' messy, novel requests. We'll devote real time to this in Module 4, but plant the flag now: a benchmark is a starting hypothesis, never proof your feature will work. The only score that matters is performance on a private evaluation set you build from your own tasks."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This lesson is the whole job of an AI product manager compressed into one idea. Before you design a single screen, you draw the map: what can the model do unaided, what needs grounding in real data, what needs a tool. Then you route each feature accordingly. That map is the difference between a roadmap of deliberate engineering and a pile of buzzwords.",
        "It also sets up everything that follows. When we get to retrieval, tools, and evaluations later in the track, none of it should feel like a random grab-bag of techniques. Each one is the answer to a specific limit you just put on the map: retrieval answers 'no access to your data,' tools answer 'can't do math or see live info,' evals answer 'I can't trust the benchmark.' Limits first, techniques second — that ordering is what keeps a team honest."
      ]
    },
    "caseStudy": {
      "title": "Harvey and CoCounsel: turning a hallucinating model into auditable legal software",
      "body": [
        "Raw LLMs are notoriously unreliable on case law — they'll invent realistic-looking citations, a failure made infamous when two New York lawyers filed a brief full of fake cases ChatGPT made up (Mata v. Avianca, 2023, and the judge sanctioned them). Yet by 2025, legal AI is a real, fast-growing product category. Harvey — used by firms like Allen & Overy and by PwC — and Thomson Reuters' CoCounsel are deployed inside serious enterprises.",
        "How? They don't trust the model's memory of the law at all. They wrap the LLM in retrieval over verified legal databases, then make every answer cite the specific source it pulled from, so a lawyer can click through and check. The model does what it's genuinely great at — reading, summarizing, drafting in fluent legalese — while the grounding layer supplies the ground truth it can't be trusted to hold. Same underlying model that hallucinated case law; completely different reliability, because the system designed around its limits."
      ],
      "bridge": "The map you draw in this lesson is exactly what Harvey drew: 'great at legal language, terrible at remembering the law,' then engineered around it. That grounding move is the entire subject of Module 2."
    },
    "takeaways": [
      "If a task is a language transformation, the model is probably great at it; if it's a ground-truth lookup, it needs help.",
      "The model never tells you it's hit a limit — it improvises past it confidently, so you must map the limits in advance.",
      "A headline benchmark score is a hypothesis about your feature, never proof — only a private eval set tells the truth."
    ],
    "knowledgeCheck": [
      {
        "q": "Which task is an LLM most likely to handle well on its own, with no extra tooling?",
        "options": [
          {
            "text": "Telling you your company's current internal expense policy",
            "correct": false
          },
          {
            "text": "Rewriting a clunky paragraph into clear, friendly prose",
            "correct": true
          },
          {
            "text": "Multiplying two exact 12-digit numbers reliably",
            "correct": false
          }
        ],
        "feedback": "Rewriting is a pure language transformation — exactly the kind of task the model excels at unaided; private data and exact math both need extra help."
      },
      {
        "q": "Why should you be cautious about a vendor's '92% on a famous benchmark' claim?",
        "options": [
          {
            "text": "Benchmarks are illegal to publish, so the number is probably faked",
            "correct": false
          },
          {
            "text": "Test questions can leak into training data, so a high score may reflect memorization, not skill on your tasks",
            "correct": true
          },
          {
            "text": "Benchmarks only measure speed, never accuracy",
            "correct": false
          }
        ],
        "feedback": "Contamination means a model can ace a leaked test by memorization — the score describes that frozen test, not your real, novel user requests."
      }
    ],
    "glossaryTerms": [
      "knowledge-cutoff",
      "rag",
      "hallucination",
      "emergent-abilities",
      "benchmark",
      "tool-use"
    ],
    "sources": [
      {
        "label": "RAG in 2025: from quick fix to core architecture",
        "url": "https://medium.com/@hrk84ya/rag-in-2025-from-quick-fix-to-core-architecture-9a9eb0a42493"
      },
      {
        "label": "MinIO — Retrieval-Augmented Generation explained",
        "url": "https://www.min.io/learn/retrieval-augmented-generation"
      },
      {
        "label": "LXT — A guide to LLM benchmarks",
        "url": "https://www.lxt.ai/blog/llm-benchmarks/"
      },
      {
        "label": "Are emergent abilities a mirage? (arXiv)",
        "url": "https://arxiv.org/html/2503.05788v2"
      }
    ]
  },
  "eng-m1-l3": {
    "id": "eng-m1-l3",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 3,
    "title": "LEGO Bricks and the Desk: Tokens and the Context Window",
    "estMinutes": 9,
    "coreIdea": "The model reads text as sub-word chunks called tokens, and the context window is the limited 'desk' of everything it can see at once.",
    "plainEnglish": [
      "The model doesn't read letters, and it doesn't quite read words either. It reads tokens — sub-word chunks. A common word like 'the' is one token; a longer or rarer word like 'unbelievable' gets split into a few pieces. Tokens are the model's actual unit of currency: you pay per token, the model's speed is measured in tokens, and what fits in a single request is counted in tokens.",
      "The context window is the model's working memory — the total amount of text (your instructions, the documents you paste in, the conversation so far, and its own reply) that it can 'see' at one time. Think of it as a desk with a fixed surface area. Everything the model is reasoning about right now has to be physically spread out on that desk.",
      "Misunderstanding these two ideas is the single most common source of broken AI products and shocking bills. People assume the model 'remembers' past chats (it doesn't, unless you resend them) and expect flawless recall of a 500-page document (it won't). Get tokens and the context window right and you can scope features that are genuinely buildable and affordable."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Tokens are the LEGO bricks of language. Words aren't read whole — they're snapped together from a standard set of sub-word pieces. This is exactly why a model can confidently count how many bricks are in a sentence but fumble counting the studs on a single brick: it sees the chunks, not the individual letters inside them. Asking it to spell or count letters is asking it to see inside a brick it only ever handled as one piece.",
        "The context window is the model's desk. It can only work with the papers physically spread out on the surface right now — anything filed away in a drawer (an old conversation you didn't resend) might as well not exist. A bigger desk lets you spread out more papers, but it costs more to scan every time, and papers buried in the middle of a huge stack get glanced over rather than read carefully. A 2-million-token desk is roughly fifteen novels of surface area — impressive, and not free."
      ]
    },
    "deepSections": [
      {
        "title": "Why models miscount the letters in 'DEEPSEEK': tokens vs characters",
        "teaser": "the famous 'how many R's in strawberry' failure, explained",
        "body": [
          "When a model gets asked 'how many R's are in strawberry?' and answers wrong, it isn't being dumb — it's a direct consequence of tokenization. The word 'strawberry' might arrive as two or three tokens ('straw' + 'berry', say), and the model never sees the individual letters as separate things it can tally. It's reasoning about chunks, not characters. Counting letters is one of the few tasks where the very unit the model thinks in works against it.",
          "This matters in practice more than it first appears. Tasks like spelling, character counting, reversing strings, simple ciphers, or precise formatting of specific characters are all surprisingly error-prone for the same reason. The fix is almost always to hand the job to a tool (code that operates on real characters) rather than expecting the model to do it in its head. Knowing why it fails tells you exactly when to reach for that tool."
        ]
      },
      {
        "title": "From 4K to 2M: the context-window arms race and what it cost",
        "teaser": "desks went from a notepad to a banquet table in three years",
        "body": [
          "In 2020, a typical context window was a few thousand tokens — a couple of pages. By 2023 that was tens of thousands. By 2024–2025, Google's Gemini models shipped windows of one and then two million tokens, and competitors raced to follow. Two million tokens is roughly fifteen full-length novels you can drop into a single request, which opens genuinely new product shapes: analyze an entire codebase, a whole contract set, or a long meeting transcript in one shot.",
          "But the size race came with a bill and an asterisk. Bigger windows demand far more memory and compute to process, which is why long-context requests are slower and more expensive, and why providers price them carefully. The point isn't that big context is bad — it's that big context is a capability you spend money to use, not a free upgrade. Treat each extra thousand tokens you stuff onto the desk as a line item, because it is one."
        ]
      },
      {
        "title": "Quadratic attention and 'lost in the middle': why bigger isn't free or perfect",
        "teaser": "doubling the desk roughly quadruples the work — and the middle gets ignored",
        "body": [
          "Under the hood, the mechanism that lets the model relate every token to every other token (called attention) scales quadratically: double the context and you roughly quadruple the work. That's the deep reason long context costs what it does — it's not a pricing whim, it's the math of the architecture. Researchers have worked hard to soften this, but the basic pressure is real.",
          "There's also a quality catch. A widely documented effect called 'lost in the middle' shows that models recall facts placed at the very start or very end of a long context far more reliably than facts buried in the middle. So you can't just dump 500 pages in and trust perfect recall — placement matters, and critical instructions belong near the edges. A bigger desk helps, but a cluttered desk still buries the page you needed most."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Token economics is the unit economics of an AI feature. You pay per token, forever, on every single request — there's no point where the feature becomes free. A chat feature that resends a long history on every turn, or a 'summarize this document' button that quietly pastes 200 pages each time, can have a per-use cost that destroys the business case. Estimating tokens-per-request early is as fundamental as estimating server costs in a classic product.",
        "It also corrects the two assumptions that quietly break AI products. First, the model has no memory between requests unless you re-send the relevant context — 'it should just remember what I told it yesterday' is engineering work, not a default. Second, a huge context window is not a magic 'it read everything perfectly' guarantee, because of cost and the lost-in-the-middle effect. Knowing the true limits of the desk is what lets you scope features that are both buildable and affordable."
      ]
    },
    "caseStudy": {
      "title": "Gemini finds one sentence hidden inside Les Misérables",
      "body": [
        "When Google demonstrated long context in Gemini 1.5 and then 2.5, they ran the 'needle in a haystack' test: feed the model a context of up to two million tokens and hide a single specific sentence somewhere inside it — for instance, inside the roughly 700,000-word text of Victor Hugo's Les Misérables — then ask the model to find it. Gemini retrieved the exact needle with near-perfect accuracy, a genuinely jaw-dropping demonstration of scale.",
        "But the same era of research surfaced the counterweight. The 'lost in the middle' studies showed that when relevant facts sit in the middle of a long document rather than at the ends, recall drops measurably — sometimes sharply. So the honest picture is two truths at once: long context can pull a clean needle out of an enormous haystack, and long context can also quietly under-read the middle of that haystack depending on the task. A great builder holds both facts and tests their own use case rather than trusting the demo."
      ],
      "bridge": "The needle-in-a-haystack demo is the desk at its most impressive; 'lost in the middle' is the desk's hidden limit. Together they're why you measure recall on your own documents instead of trusting the headline."
    },
    "takeaways": [
      "Tokens are sub-word chunks and the model's true unit of cost, speed, and capacity — not letters or words.",
      "The context window is a desk: everything the model reasons about must be on it now, and it has no memory of anything you didn't resend.",
      "Bigger context costs more (attention scales quadratically) and isn't perfect (facts in the middle get under-read)."
    ],
    "knowledgeCheck": [
      {
        "q": "Why does an LLM often miscount the letters in a word like 'strawberry'?",
        "options": [
          {
            "text": "It reads text as sub-word tokens, so it never sees individual letters as separate things to count",
            "correct": true
          },
          {
            "text": "It's deliberately programmed to avoid spelling tasks",
            "correct": false
          },
          {
            "text": "The context window is too small to hold one word",
            "correct": false
          }
        ],
        "feedback": "Tokenization means the model thinks in chunks, not characters — counting letters works against the very unit it reasons in."
      },
      {
        "q": "What's true about an LLM's memory of a conversation between separate requests?",
        "options": [
          {
            "text": "It permanently remembers everything you've ever told it",
            "correct": false
          },
          {
            "text": "It remembers nothing unless the relevant context is re-sent in the new request",
            "correct": true
          },
          {
            "text": "It remembers only the first message of every conversation",
            "correct": false
          }
        ],
        "feedback": "The model only sees what's on the desk right now — anything not re-sent in the request might as well not exist."
      }
    ],
    "glossaryTerms": [
      "token",
      "context-window",
      "tokenization",
      "attention",
      "lost-in-the-middle"
    ],
    "sources": [
      {
        "label": "IBM — What is a context window?",
        "url": "https://www.ibm.com/think/topics/context-window"
      },
      {
        "label": "Wikipedia — Context window",
        "url": "https://en.wikipedia.org/wiki/Context_window"
      },
      {
        "label": "Codingscape — LLMs with the largest context windows",
        "url": "https://codingscape.com/blog/llms-with-largest-context-windows"
      },
      {
        "label": "Introl — Long-context LLM infrastructure guide",
        "url": "https://introl.com/blog/long-context-llm-infrastructure-million-token-windows-guide"
      }
    ]
  },
  "eng-m1-l4": {
    "id": "eng-m1-l4",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 4,
    "title": "A City Where Ideas Have Addresses: Embeddings and Meaning-as-Coordinates",
    "estMinutes": 9,
    "coreIdea": "An embedding turns a piece of meaning into a list of numbers that places it as a point in a space where similar things sit close together.",
    "plainEnglish": [
      "An embedding is how a machine turns meaning into numbers. Take a word, a sentence, or a whole document, and the model converts it into a long list of coordinates — a point in a vast 'meaning space.' The magic is in the geometry: things that mean similar things end up close together, and things that mean different things end up far apart.",
      "Once meaning is just coordinates, 'find things related to this' becomes 'find points near this point' — a simple, fast distance calculation. You don't have to read every document; you walk to your question's location and look at the nearest neighbors.",
      "This one trick is quietly everywhere. It powers semantic search (finding by meaning, not exact keywords), recommendations ('more like this'), deduplication, clustering, and the retrieval step inside basically every modern AI assistant. When you understand embeddings, a huge amount of 'AI magic' resolves into one elegant idea."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine a vast city where every idea has been given a street address based purely on what it means. 'King' and 'queen' live on the same block. 'Banana' is way across town in the fruit district. 'Apple' the fruit lives near banana, while 'Apple' the company has a place downtown near 'Google' and 'Microsoft.' Nobody assigned these addresses by hand — they emerged from the patterns of how the words are used.",
        "Now, to find everything related to your question, you don't walk the whole city reading every building. You go to your question's address and knock on the nearest doors. 'Similar means nearby' is the entire trick. Whole product categories — search, recommendations, AI assistants that find the right snippet of your knowledge base — are just clever ways of asking 'who lives near here?'"
      ]
    },
    "deepSections": [
      {
        "title": "Vectors, cosine similarity, and 'nearest neighbor' in plain English",
        "teaser": "distance and angle, not magic",
        "body": [
          "A 'vector' is just that list of coordinates — the address. Real embeddings live in hundreds or thousands of dimensions rather than the two of a street map, but the intuition holds: each piece of meaning is a point in a high-dimensional space. To compare two pieces of meaning, you measure how close their points are.",
          "A `dimension` is just one more number in the address: a street map uses 2 (how far east, how far north), while an embedding uses hundreds so it can capture many independent shades of meaning at once — topic, tone, formality — too many to draw, but the same 'nearby means similar' idea.",
          "The most common measure is 'cosine similarity,' which compares the angle between two vectors rather than raw distance — pointing in the same direction means similar meaning, regardless of how 'long' each vector is. 'Nearest neighbor' search is simply: given my query's point, find the handful of points with the smallest angle to it. That's it. No reading, no understanding in the human sense — just geometry over numbers that happen to encode meaning."
        ]
      },
      {
        "title": "Vector databases (Pinecone, Weaviate, pgvector): the address book of meaning",
        "teaser": "how you search millions of addresses fast",
        "body": [
          "If you have ten documents, you can compare your query to all ten and find the nearest. If you have ten million, checking every one is too slow. A vector database is a specialized store built to hold millions or billions of embeddings and answer 'find me the nearest neighbors to this point' in milliseconds, using clever indexing that avoids comparing against everything.",
          "By 2025 these are mainstream infrastructure. Pinecone and Weaviate are dedicated vector databases; pgvector is an extension that adds vector search to ordinary PostgreSQL, so teams can bolt semantic search onto a database they already run. For a builder, the vector database is the 'address book' that makes retrieval — and therefore RAG — practical at scale. Choosing one is a real architecture decision, but conceptually they all do the same job: store addresses, return nearest neighbors, fast."
        ]
      },
      {
        "title": "Beyond text: embeddings for images, audio, and mixed media",
        "teaser": "a photo and the words describing it can share an address",
        "body": [
          "Embeddings aren't limited to text. You can embed an image, a song, or a video clip into the same kind of coordinate space, so 'find similar images' or 'find songs that sound like this' become the same nearest-neighbor question. This is how reverse image search and audio fingerprinting work under the hood.",
          "The really powerful step is shared (or 'multimodal') embedding spaces, where a photo of a dog and the text 'a dog' land close together because they mean the same thing. This is what lets you search a photo library by typing a description, or match an advertisement's image to relevant text. Same elegant idea — meaning as coordinates — stretched across senses, which is a natural bridge to the multimodal models we cover later in this module."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "When a vendor says 'our AI understands what you mean, not just keywords,' they are almost always describing embeddings. Semantic search, 'find similar,' recommendation feeds, and the retrieval step of every RAG product all reduce to this one mechanism. Knowing that lets you cut through marketing: you can ask the sharp questions ('what embedding model? what vector store? how do you handle updates?') instead of nodding at 'AI-powered.'",
        "It also explains the weird results you'll inevitably see. When semantic search returns a surprising match, it's usually because two things were closer in meaning-space than a human expected — the system is doing exactly what it should, just on a notion of 'similar' that doesn't always match human intuition. Understanding the mechanism turns those moments from 'the AI is broken' into a debuggable, improvable property of your product."
      ]
    },
    "caseStudy": {
      "title": "Spotify's Discover Weekly: recommendations as nearest neighbors",
      "body": [
        "Spotify's Discover Weekly playlist became a flagship example of embeddings in a consumer product. Songs, artists, and listening sessions get turned into vectors — points in a meaning-and-taste space — so that 'tracks near this one' becomes a recommendation. If you love a particular obscure track, the system can surface other tracks sitting nearby in that space, even ones with almost no obvious metadata in common, because proximity captures a kind of latent similarity that genre tags miss.",
        "What makes this such a clean teaching example is that the exact same nearest-neighbor principle now powers things that look nothing like music. Enterprise search over a company's internal documents, AI customer support that finds the right help-center article, 'related products' on an e-commerce site — all of them embed their content into a vector space and answer queries by proximity. Learn the trick once in the friendly setting of song recommendations, and you've learned the engine behind a huge slice of modern AI products."
      ],
      "bridge": "Discover Weekly and a corporate document search are the same idea wearing different clothes — embed everything, then answer questions by finding the nearest neighbors. That retrieval step is the heart of RAG."
    },
    "takeaways": [
      "An embedding turns meaning into coordinates, so 'similar' becomes 'nearby' — a fast distance check instead of reading everything.",
      "Vector databases (Pinecone, Weaviate, pgvector) store millions of these addresses and return nearest neighbors in milliseconds.",
      "Surprising search results usually mean two things were closer in meaning-space than a human expected — that's the mechanism working, not breaking."
    ],
    "knowledgeCheck": [
      {
        "q": "In one sentence, what does an embedding do?",
        "options": [
          {
            "text": "It stores the exact original text in a compressed file",
            "correct": false
          },
          {
            "text": "It turns a piece of meaning into coordinates so similar things sit close together",
            "correct": true
          },
          {
            "text": "It translates text from one human language into another",
            "correct": false
          }
        ],
        "feedback": "Embeddings map meaning to points in a space where proximity equals similarity — that's the whole foundation of semantic search and retrieval."
      },
      {
        "q": "What is a vector database mainly for?",
        "options": [
          {
            "text": "Storing many embeddings and quickly finding the nearest neighbors to a query",
            "correct": true
          },
          {
            "text": "Training a brand-new language model from scratch",
            "correct": false
          },
          {
            "text": "Converting tokens back into the original letters",
            "correct": false
          }
        ],
        "feedback": "A vector database is the 'address book of meaning' — it holds millions of embeddings and answers nearest-neighbor queries in milliseconds."
      }
    ],
    "glossaryTerms": [
      "embedding",
      "vector",
      "cosine-similarity",
      "semantic-search",
      "vector-database",
      "rag"
    ],
    "sources": [
      {
        "label": "Iguazio — LLM embeddings glossary",
        "url": "https://www.iguazio.com/glossary/llm-embeddings/"
      },
      {
        "label": "Cloudthrill — LLM embeddings explained",
        "url": "https://cloudthrill.ca/llm_embedding-explained"
      },
      {
        "label": "Dremio — Tokens, embeddings, and transformers",
        "url": "https://www.dremio.com/blog/how-llms-work-tokens-embeddings-and-transformers/"
      },
      {
        "label": "Data Science Dojo — Embeddings and LLMs",
        "url": "https://datasciencedojo.com/blog/embeddings-and-llm/"
      }
    ]
  },
  "eng-m1-l5": {
    "id": "eng-m1-l5",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 5,
    "title": "Culinary School vs Cooking to Order: Training vs Inference",
    "estMinutes": 9,
    "coreIdea": "Building a model (training) and using a model (inference) are completely different activities with different costs, and the model does not learn from your chats in real time.",
    "plainEnglish": [
      "There are two utterly different worlds in the life of a model. Training is when the model is built — it reads an enormous amount of text and slowly adjusts its internal numbers until it's good at predicting language. It's slow, eye-wateringly expensive, and happens occasionally. Inference is when you actually use the finished model to answer a request — fast, cheap per request, and happening millions of times a day.",
      "The most important consequence: the model's knowledge is frozen at a cutoff date. It does not learn from your conversations as you go. When a chat assistant seems to 'remember' something, that's a memory feature engineered on top — the underlying model is exactly as fixed as it was the moment training finished.",
      "Finished assistants are built in three stages: pretraining (general 'schooling' on vast text), fine-tuning (a finishing course in being helpful and following instructions), and alignment (learning house style and manners). That pipeline is why a raw, just-pretrained model and the polished assistant you chat with behave so differently.",
      "A model's parameter count — the difference between a 1.3-billion and a 175-billion model — is a rough measure of its size and capacity, not a guarantee of better or more helpful answers; a smaller, well-finished model can beat a much larger raw one."
    ],
    "keyTerms": [
      {
        "term": "parameter",
        "def": "One of the billions of internal numbers a model learns during training. More parameters roughly means more capacity to store patterns — loosely, what people mean by a 'bigger' model. It is a measure of size, not of how helpful or correct the model is."
      }
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Training is the years a chef spends in culinary school, absorbing thousands of recipes and techniques. It's slow, costly, and done before the restaurant ever opens its doors. Inference is that same chef cooking your specific dish to order during the dinner rush: fast, repeated hundreds of times a night, and strictly limited to what they already learned in school. They can't taste a brand-new ingredient tonight and permanently 'know' it forever tomorrow — that would mean going back to school (retraining).",
        "And school comes in stages. Pretraining is the broad general education — read everything, learn how cooking works in general. Fine-tuning is the finishing course where the chef learns to actually plate dishes a customer wants, following orders instead of just reciting recipes. Alignment (often via a technique called RLHF) is learning the restaurant's house style and table manners — be helpful, be polite, don't serve anything dangerous. A raw pretrained model is a brilliant graduate who's never waited a table; the assistant is that graduate after the finishing course."
      ]
    },
    "deepSections": [
      {
        "title": "The three stages: pretraining, supervised fine-tuning (SFT), and RLHF/RLAIF",
        "teaser": "general school, then a finishing course, then manners",
        "body": [
          "Pretraining is the giant, expensive stage: the model reads a huge swath of text and learns to predict the next token, absorbing grammar, facts, and patterns of reasoning along the way. This produces a 'base model' that's knowledgeable but unruly — it'll happily continue your text rather than answer your question. Supervised fine-tuning (SFT) then shows the model many examples of good question-and-answer behavior, teaching it to respond like a helpful assistant instead of an autocomplete.",
          "The final stage is alignment, usually via RLHF (reinforcement learning from human feedback): humans rank competing answers, and the model is nudged toward the kinds of responses people prefer — clearer, safer, more honest. A newer variant, RLAIF, uses AI feedback to scale this up. The headline is that the helpful, well-mannered assistant you talk to is mostly the product of these post-training stages, not just raw size — which is exactly what the next case study proves."
        ]
      },
      {
        "title": "Knowledge cutoff: why the model doesn't know about last week",
        "teaser": "frozen at the moment training stopped",
        "body": [
          "Because the model's knowledge is baked in during training, it simply has no information about anything that happened after its training data was collected — that boundary is the 'knowledge cutoff.' Ask a model about an event from last week and, depending on its design, it'll either tell you it doesn't know, or worse, confidently invent something plausible. The model isn't lying; it genuinely has no window into the present.",
          "This is the single most important reason retrieval and tools exist. If you want a model to answer questions about today's news, your latest internal documents, or live prices, you can't wait for the next training run — you hand it the fresh information at request time. Understanding the cutoff is what turns 'why doesn't the AI know this?' from a frustration into a design requirement: bring the model the facts it can't possibly already hold."
        ]
      },
      {
        "title": "'SFT imitates, RL optimizes': how manners are taught",
        "teaser": "copying good examples vs being rewarded for good outcomes",
        "body": [
          "A useful slogan for the post-training stages: supervised fine-tuning imitates, reinforcement learning optimizes. SFT works by imitation — show the model thousands of examples of the behavior you want, and it learns to copy that style. It's like a trainee waiter shadowing a great one and mimicking what they do. It's effective but capped by the quality of the examples you can write.",
          "Reinforcement learning works differently: instead of copying specific examples, the model tries answers and gets rewarded for ones humans (or another AI) prefer, so it optimizes toward an outcome rather than mimicking a script. This is what lets a model improve past the exact demonstrations it was given and develop a consistent, preferred 'manner.' The combination — imitate first to get in the right ballpark, then optimize to refine — is the recipe behind the polish of every modern chat assistant."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Confusing training and inference produces both bad economics and the single most common misconception in AI products: that the thing is 'learning from our users' automatically. It isn't. Memory and personalization are engineered features — you store and resend context — not an automatic side effect of people using the product. Promising stakeholders that the model will 'get smarter as people use it' without building that machinery is a classic way to over-commit.",
        "It also clarifies your cost model. Training (or fine-tuning) is a one-time, capital-style expense; inference is a recurring per-request cost that scales directly with usage. That distinction frames the central build decision you'll wrestle with in Module 6 — prompt vs RAG vs fine-tune — which is really a question of where you spend: a clever prompt (cheap, instant), retrieval (recurring infrastructure), or fine-tuning (upfront training cost). Knowing which world a cost lives in keeps your unit economics honest."
      ]
    },
    "caseStudy": {
      "title": "InstructGPT: a 1.3B model beats raw GPT-3 because of manners",
      "body": [
        "In 2022, OpenAI published InstructGPT, the work that established the now-standard three-stage recipe — pretrain, then supervised fine-tuning, then RLHF. The striking result: human raters preferred the outputs of a 1.3-billion-parameter aligned model over the raw 175-billion-parameter GPT-3, despite the aligned model being more than a hundred times smaller. The smaller model wasn't more knowledgeable; it was more helpful, because it had been through the finishing course.",
        "This was a watershed because it reframed what makes a model feel good to use. The industry had been chasing raw scale, and InstructGPT showed that post-training 'manners' — learning to actually answer the question, follow instructions, and behave — were just as decisive as size. Every modern chat assistant, from ChatGPT onward, is a descendant of this insight: a powerful base model is necessary, but the helpfulness you experience comes overwhelmingly from the alignment stages layered on top."
      ],
      "bridge": "InstructGPT proves the assistant you love is mostly post-training, not raw size — which is why understanding the training pipeline tells you where a model's helpfulness actually comes from, and where its frozen knowledge comes from too."
    },
    "takeaways": [
      "Training builds the model (slow, expensive, occasional); inference uses it (fast, cheap per call, constant) — they're different worlds with different costs.",
      "The model's knowledge is frozen at a cutoff and does NOT update from your chats — any 'memory' is an engineered feature on top.",
      "The helpful assistant comes from three stages — pretrain, fine-tune, align — and the 'helpfulness' is mostly the post-training, not the size."
    ],
    "knowledgeCheck": [
      {
        "q": "Does an LLM learn from your conversations in real time?",
        "options": [
          {
            "text": "Yes — every chat permanently updates the underlying model",
            "correct": false
          },
          {
            "text": "No — the model's knowledge is frozen at training; any memory is an engineered feature on top",
            "correct": true
          },
          {
            "text": "Only if you ask it nicely to remember",
            "correct": false
          }
        ],
        "feedback": "The underlying model is fixed after training; real-time 'learning' would require retraining, so any memory you see is built by resending context."
      },
      {
        "q": "What did OpenAI's InstructGPT result mainly demonstrate?",
        "options": [
          {
            "text": "Bigger models are always preferred by humans, no matter the training",
            "correct": false
          },
          {
            "text": "A much smaller but aligned model can be preferred over a far larger raw model — post-training 'manners' matter enormously",
            "correct": true
          },
          {
            "text": "Fine-tuning makes models slower at inference",
            "correct": false
          }
        ],
        "feedback": "Humans preferred a 1.3B aligned model over raw 175B GPT-3, showing helpfulness comes largely from post-training, not just size."
      }
    ],
    "glossaryTerms": [
      "training",
      "inference",
      "knowledge-cutoff",
      "fine-tuning",
      "rlhf",
      "pretraining"
    ],
    "sources": [
      {
        "label": "PyTorch — A primer on LLM post-training",
        "url": "https://pytorch.org/blog/a-primer-on-llm-post-training/"
      },
      {
        "label": "Sebastian Raschka — State of LLMs 2025",
        "url": "https://magazine.sebastianraschka.com/p/state-of-llms-2025"
      },
      {
        "label": "MLOps Community — The modern LLM training pipeline",
        "url": "https://home.mlops.community/public/blogs/pretraining-breaking-down-the-modern-llm-training-pipeline"
      },
      {
        "label": "InstructGPT paper (arXiv 2203.02155)",
        "url": "https://arxiv.org/abs/2203.02155"
      }
    ]
  },
  "eng-m1-l6": {
    "id": "eng-m1-l6",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 6,
    "title": "The Student Who Never Leaves a Blank: Why Models Hallucinate",
    "estMinutes": 9,
    "coreIdea": "Hallucination — confident, plausible falsehood — isn't a mysterious bug; it's the predictable result of training and grading models in a way that rewards guessing over admitting uncertainty.",
    "plainEnglish": [
      "A hallucination is when a model produces something fluent, confident, and plausible that is simply not true — a fake citation, an invented statistic, a person or product that doesn't exist. It's the single biggest barrier to deploying LLMs in high-stakes work, because the output looks exactly as polished whether it's right or wrong.",
      "The key 2025 insight is that this isn't a baffling glitch we're waiting to patch. It's the natural consequence of how models are trained and graded: the process rewards producing a confident answer and gives no credit for honestly saying 'I don't know.' Faced with those incentives, the model learns to always guess smoothly rather than ever admit uncertainty.",
      "The uncomfortable takeaway: sounding right and being right are different things, and the model was optimized for the first one. The fluency is genuinely real. The certainty is theater — a confident tone is produced regardless of whether the underlying claim is true."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a brilliant student sitting an exam who's been told the one rule that matters: wrong answers are never penalized — only blank answers lose marks. What's the rational strategy? Fill in a confident guess for every single question, even the ones you have no idea about. A blank guarantees zero; a guess might be right, and costs nothing if it's wrong. Any smart test-taker becomes a confident guesser under that scoring.",
        "LLMs are trained and graded under almost exactly that incentive. The process consistently rewards producing a plausible answer and rarely rewards saying 'I'm not sure.' So the model learns the student's strategy: never leave a blank, always produce a smooth, assured response. That's why hallucinations feel so convincing — the model is doing precisely what it was rewarded to do. The skill it learned isn't lying; it's never abstaining."
      ]
    },
    "deepSections": [
      {
        "title": "OpenAI's exam-taking analogy: why guessing beats abstaining",
        "teaser": "the incentive math behind every confident wrong answer",
        "body": [
          "OpenAI's 2025 paper 'Why Language Models Hallucinate' makes the argument crisp with exactly this exam framing. During training and evaluation, models are overwhelmingly scored on whether they got the answer right, with no reward for appropriately saying 'I don't know.' Under that scoring, guessing is mathematically the optimal policy — abstaining can only lose you points, while a guess has upside. So models are, in effect, taught to be confident guessers.",
          "The crucial reframe is that hallucination is therefore a statistical and incentive problem, not a mysterious emergent flaw. The paper even points toward a partial fix: change the grading so that confidently wrong answers are penalized more than honest uncertainty, and you start rewarding models for knowing the limits of their knowledge. Until evaluation incentives change broadly, though, the default behavior of any model you use is to guess rather than abstain — and you should design around that."
        ]
      },
      {
        "title": "The calibration paradox: well-calibrated and still confidently wrong",
        "teaser": "the model can be statistically honest and still mislead you on one answer",
        "body": [
          "There's a subtle trap here. A model can be reasonably 'calibrated' in aggregate — meaning that across many answers, the ones it presents with high confidence really are right more often than the ones it's unsure about. That sounds reassuring. But calibration is a property of the whole distribution, not of the one answer on your screen right now.",
          "So you can have a model that's statistically well-behaved over thousands of questions and still get a single answer that is delivered in a confident, authoritative tone and is flatly wrong. The tone of any individual response is not a reliable signal of that response's truth. This is why 'but it sounded so sure' is never evidence, and why you can't fix hallucination just by asking the model how confident it is — you need external grounding and verification, not vibes."
        ]
      },
      {
        "title": "The mitigation toolkit preview: RAG, citations, tools, confidence thresholds, human review",
        "teaser": "you don't cure hallucination, you contain it",
        "body": [
          "You can't make hallucination disappear, but you can box it in, and the rest of this track is largely about how. Retrieval (RAG) grounds answers in real source documents so the model is summarizing facts rather than inventing them. Citations make every claim checkable, so a wrong answer is caught rather than trusted. Tools hand off the things the model is bad at — math, live lookups — to systems that are actually reliable.",
          "On top of those, confidence thresholds let you route uncertain answers to a fallback or a human, and human-in-the-loop review puts a person between a high-stakes answer and the customer. The art is matching the mitigation to the cost of being wrong: a casual brainstorming feature can tolerate a stray error, while anything medical, legal, or financial needs grounding, citations, and review before it ships. Treat hallucination as a constant you design for, not a defect you wait out."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Your job is to design the UX and the trust boundaries around a single hard fact: the model will sometimes be confidently wrong, and nothing in its tone will warn you. That's where you decide what needs a human in the loop, where you surface citations so users can verify, and where the cost of a confident error is simply too high to ship without grounding. These aren't nice-to-haves bolted on at the end — they're the core of a responsible AI product.",
        "The mindset shift is to treat hallucination as a designed-for constant rather than a bug you're waiting for the model vendor to fix. The best AI PMs ask, for every feature: what happens when this is confidently wrong, and who pays for that mistake? If the answer is 'a user is misled in a way that's costly or dangerous,' you've found a place that needs grounding, verification, or a human — and you've justified half your roadmap in one question."
      ]
    },
    "caseStudy": {
      "title": "Mata v. Avianca: six fake cases and a sanctioned lawyer",
      "body": [
        "In 2023, two New York lawyers used ChatGPT to do legal research for a brief in Mata v. Avianca and filed it citing six court decisions — complete with quotes and citation numbers — that did not exist. The model had invented them whole cloth because they 'looked right': realistic case names, plausible reporters, convincing legal phrasing. When the opposing counsel and the judge couldn't find the cases, the truth came out, and the lawyers were sanctioned. The episode became the canonical real-world demonstration that hallucinations are fluent, confident, and genuinely dangerous.",
        "What makes it such a sharp lesson is that nothing about the output looked wrong. The fabricated citations were formatted exactly like real ones; the fluency was flawless. That's the whole point — the model was optimized to produce confident, plausible text, and it did so perfectly, truth notwithstanding. OpenAI's 2025 'Why Language Models Hallucinate' paper later put the theory behind the anecdote: this is what you get when you reward confident guessing and never reward honest uncertainty."
      ],
      "bridge": "The fake cases looked identical to real ones because the model was built to sound right, not be right — which is exactly why every high-stakes feature needs the grounding, citations, and review the next modules build."
    },
    "takeaways": [
      "Hallucination is a predictable outcome of incentives — models are rewarded for confident guessing and not for saying 'I don't know.'",
      "A confident tone is not evidence of truth; even a well-calibrated model can be flatly wrong on the one answer in front of you.",
      "You contain hallucination rather than cure it — RAG, citations, tools, thresholds, and human review, matched to the cost of being wrong."
    ],
    "knowledgeCheck": [
      {
        "q": "According to the 2025 'exam-taking' explanation, why do models hallucinate?",
        "options": [
          {
            "text": "Because they secretly want to deceive users",
            "correct": false
          },
          {
            "text": "Because training and grading reward confident guessing and give no credit for admitting uncertainty",
            "correct": true
          },
          {
            "text": "Because their context windows are always too small",
            "correct": false
          }
        ],
        "feedback": "Like a student penalized only for blanks, the model learns to always guess confidently — it's an incentive problem, not malice or a context limit."
      },
      {
        "q": "Why can't you trust a confident tone as a sign an answer is correct?",
        "options": [
          {
            "text": "The model produces a confident tone regardless of whether the underlying claim is true",
            "correct": true
          },
          {
            "text": "Confident answers are always wrong on purpose",
            "correct": false
          },
          {
            "text": "The tone changes color to warn you when it's unsure",
            "correct": false
          }
        ],
        "feedback": "Fluency and certainty are produced independently of truth — 'it sounded so sure' is never evidence, which is why grounding and verification matter."
      }
    ],
    "glossaryTerms": [
      "hallucination",
      "calibration",
      "rag",
      "human-in-the-loop",
      "grounding"
    ],
    "sources": [
      {
        "label": "OpenAI — Why language models hallucinate",
        "url": "https://openai.com/index/why-language-models-hallucinate/"
      },
      {
        "label": "Why Language Models Hallucinate (arXiv)",
        "url": "https://arxiv.org/html/2509.04664v1"
      },
      {
        "label": "Lakera — Guide to hallucinations in LLMs",
        "url": "https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models"
      },
      {
        "label": "Arize — Vempala explains why LLMs hallucinate",
        "url": "https://arize.com/blog/openais-santosh-vempala-explains-why-language-models-hallucinate/"
      }
    ]
  },
  "eng-m1-l7": {
    "id": "eng-m1-l7",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 7,
    "title": "Stepping to the Whiteboard: Reasoning Models and Test-Time Compute",
    "estMinutes": 9,
    "coreIdea": "Reasoning models spend extra compute thinking step-by-step before answering, trading time and money for big gains on hard problems — so knowing when to use one is a core judgment call.",
    "plainEnglish": [
      "The biggest capability shift of 2024–2026 is the move from instant-answer models to 'reasoning' models. Instead of blurting the first plausible response, a reasoning model spends extra compute — extra thinking time — working through a problem step by step before it answers. This is called test-time compute: spending more effort at the moment of answering, not during training.",
      "The payoff is dramatic on the kinds of problems where one wrong step ruins everything: math, multi-step coding, logic, and planning. Letting the model 'show its working' and check itself turns a lucky guess into a worked-out solution far more often.",
      "But it isn't free. Reasoning takes longer (seconds, sometimes much longer) and costs more (you pay for all that extra thinking). For a simple task, it's wasted money and a sluggish experience. Knowing when to reach for the slow, expensive thinker versus the fast, cheap responder is one of the central judgment calls in AI engineering and product.",
      "Spending more test-time compute literally means the model generates many more words of intermediate working — its chain-of-thought — before the final answer; and because you pay per word (token) generated, more thinking is more tokens, which is more time and more money."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A standard LLM is a quiz-show contestant who slams the buzzer and blurts the first answer that pops into their head. Sometimes that snap answer is brilliant; on a hard question, it's often a confident miss. There's no working shown, no second-guessing — just an instant reflex.",
        "A reasoning model is that same contestant, but now allowed to step to a whiteboard. They scribble out the working, try an approach, notice it leads nowhere, cross it out, try another, and only then commit to a final answer. That whiteboard time isn't free — it costs seconds and dollars. For an easy question it's overkill. But for a genuinely hard problem, the whiteboard is the entire difference between a lucky guess and a solution you can actually trust."
      ]
    },
    "deepSections": [
      {
        "title": "Chain-of-thought: showing your work",
        "teaser": "writing out the steps makes the answer better",
        "body": [
          "Chain-of-thought is the technique of having the model produce its intermediate reasoning steps — literally writing out 'first this, then that, therefore…' — before giving a final answer. It turns out that for multi-step problems, generating these steps measurably improves accuracy, because each step gives the model something concrete to build the next step on, rather than trying to leap straight to the conclusion.",
          "Early on, you could coax this behavior just by adding 'let's think step by step' to a prompt. Modern reasoning models bake it in: they're specifically trained to do extended chain-of-thought as their default mode for hard problems. The mechanism is the same idea the whiteboard metaphor captures — externalizing the working so mistakes can be caught and corrected mid-stream instead of being locked into a single hasty guess."
        ]
      },
      {
        "title": "System 1 vs System 2: fast intuition vs slow deliberation",
        "teaser": "two modes of thinking, borrowed from psychology",
        "body": [
          "Psychologist Daniel Kahneman popularized two modes of human thinking: System 1 is fast, automatic, and intuitive (recognizing a face, answering 2+2); System 2 is slow, effortful, and deliberate (working through a tricky logic puzzle). It's a clean lens for these two kinds of models. A standard instant-answer LLM behaves like System 1 — quick, fluent, intuitive. A reasoning model engages something more like System 2 — deliberately stepping through a problem.",
          "The analogy is useful precisely because it mirrors good human judgment about effort. You don't deploy effortful System 2 deliberation to answer 'what's 2+2' — that would be absurdly wasteful. You save it for the genuinely hard stuff. The engineering version of that wisdom is choosing, per task, whether the cheap intuitive mode is good enough or whether the problem warrants paying for slow, deliberate reasoning."
        ]
      },
      {
        "title": "Visible vs hidden reasoning, and the 'don't overthink it' tradeoff",
        "teaser": "more thinking isn't always better — sometimes it's worse",
        "body": [
          "Models differ in whether they show their reasoning. DeepSeek-R1 famously exposes its full chain-of-thought, so you can watch it work; some commercial models hide most of the reasoning and show only a summary, partly to protect their methods and partly to keep the interface clean. As a builder, visible reasoning is great for debugging and trust, but it also means more tokens, more cost, and sometimes leaking how your system thinks.",
          "There's also a genuine 'don't overthink it' failure mode. Forcing a model to deliberate on a trivial question can waste money, add latency, and occasionally even produce worse answers as it talks itself out of the correct simple response. The 2025 state of the art is increasingly about adaptive reasoning — letting the model (or your routing logic) decide how much thinking a given query deserves, rather than always maxing it out. More compute is a dial, not a default."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Reasoning models put a direct, visible tradeoff on your desk: latency and cost on one side, answer quality on the other. 'Should this feature use the slow, expensive thinker or the fast, cheap one?' is a decision you'll make constantly, and it shapes both the user experience and the monthly bill. Route everything to the heavy reasoner and your product feels sluggish and your costs balloon; route everything to the fast model and your hard features ship wrong answers.",
        "The mature move is to match the model to the task, often within a single product — a quick fast-model response for simple queries, escalating to a reasoning model only when the problem warrants it. This is a real product lever, not just an engineering detail: it's the difference between an AI feature that's both good and economically viable and one that's only ever one of the two. Build the muscle of asking 'does this task actually need the whiteboard?' before defaulting to the most powerful model available."
      ]
    },
    "caseStudy": {
      "title": "DeepSeek-R1 rattles the market in January 2025",
      "body": [
        "In January 2025, a Chinese lab released DeepSeek-R1, an open-weight reasoning model that rivaled OpenAI's o1 on demanding math and coding benchmarks — and it did so having been trained largely through reinforcement learning rather than mountains of hand-labeled human reasoning data. It also showed its full chain-of-thought, letting anyone watch it reason through a problem step by step. The combination of strong reasoning, openness, and a far lower reported cost was a genuine shock.",
        "The market reaction was severe: the prevailing assumption had been that top-tier reasoning required enormous, expensive, closed efforts, and DeepSeek-R1 punctured it. Nvidia's stock dropped sharply as investors questioned whether quite so much expensive compute was truly necessary. Beyond the market drama, the lasting lesson for builders was twofold: high-end reasoning could be dramatically cheaper than assumed, and reinforcement learning — not just scale or human labels — could teach a model to reason. The era of treating 'thinking time' as a first-class, tunable capability had clearly arrived."
      ],
      "bridge": "DeepSeek-R1 made the whiteboard cheap and visible, proving reasoning is a capability you can buy more or less of — which is exactly why deciding how much thinking each task deserves is now a core product call."
    },
    "takeaways": [
      "Reasoning models spend extra 'test-time compute' to think step-by-step, sharply improving math, coding, and planning at the cost of time and money.",
      "It's a System 1 vs System 2 choice: use the fast intuitive model for easy tasks, save the slow deliberate one for genuinely hard ones.",
      "More thinking isn't always better — overthinking wastes money, adds latency, and can even hurt simple answers, so reasoning is a dial to tune."
    ],
    "knowledgeCheck": [
      {
        "q": "What does a reasoning model do differently from a standard instant-answer LLM?",
        "options": [
          {
            "text": "It spends extra compute working through steps before answering, improving hard problems at higher cost and latency",
            "correct": true
          },
          {
            "text": "It permanently learns from each question it's asked",
            "correct": false
          },
          {
            "text": "It uses a smaller context window to save money",
            "correct": false
          }
        ],
        "feedback": "Reasoning models trade time and money for quality by 'stepping to the whiteboard' — great for hard tasks, wasteful for trivial ones."
      },
      {
        "q": "When is reaching for a slow reasoning model usually the WRONG call?",
        "options": [
          {
            "text": "For a complex multi-step math or planning problem",
            "correct": false
          },
          {
            "text": "For a simple, quick task where the extra cost and latency aren't justified",
            "correct": true
          },
          {
            "text": "Whenever accuracy matters at all",
            "correct": false
          }
        ],
        "feedback": "Overthinking a simple task wastes money and time and can even produce worse answers — match the model to the difficulty of the task."
      }
    ],
    "glossaryTerms": [
      "reasoning-model",
      "test-time-compute",
      "chain-of-thought",
      "system-1-system-2",
      "latency"
    ],
    "sources": [
      {
        "label": "Wikipedia — Reasoning model",
        "url": "https://en.wikipedia.org/wiki/Reasoning_model"
      },
      {
        "label": "Hugging Face — Test-time compute",
        "url": "https://huggingface.co/blog/Kseniase/testtimecompute"
      },
      {
        "label": "Adaline Labs — Inside reasoning models (o3)",
        "url": "https://labs.adaline.ai/p/inside-reasoning-models-openai-o3"
      },
      {
        "label": "Sebastian Raschka — State of LLMs 2025",
        "url": "https://magazine.sebastianraschka.com/p/state-of-llms-2025"
      }
    ]
  },
  "eng-m1-l8": {
    "id": "eng-m1-l8",
    "trackId": "engineering",
    "moduleId": "eng-m1",
    "order": 8,
    "title": "Beyond Text: Multimodal Models (Vision, Voice, and Image Generation)",
    "estMinutes": 9,
    "coreIdea": "Modern models don't just read and write text — they see, hear, speak, and generate images and video, because the same 'predict the next chunk' idea extends to other kinds of data.",
    "plainEnglish": [
      "For a long time, language models only handled text. Modern ones are multimodal: they can look at an image, listen to and speak audio, and generate pictures and video. You can show a model a screenshot and ask what's wrong, talk to it out loud and have it talk back, or describe a scene and watch it draw one.",
      "The deep reason this works is elegant: the same core trick — break the input into chunks and predict the next chunk — turns out to extend beyond words. An image can be cut into patches, audio into slices, and each treated as its own kind of 'token.' Same fundamental machinery, far more senses plugged in.",
      "This hugely widens what AI products can do. But each new modality — vision, voice, generation — adds its own cost, its own latency, and its own ways to fail. The builder's job is telling apart what's genuinely reliable today from what's still a flashy demo, so you can scope features that actually ship."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Imagine a friend who, for years, you only ever knew as a pen-pal. They were a wonderful writer — every letter thoughtful and fluent — but the whole relationship lived on paper. Text in, text out. That was the early language model: brilliant with words, blind and deaf to everything else.",
        "Now that same friend has gained eyes, ears, and a voice. You can send them a photo and they'll describe it; you can call and they'll listen and reply out loud; you can ask for a sketch and they'll draw one back. It's the same mind you always knew — same underlying way of thinking — just suddenly equipped with far more senses. That's multimodality: not a different brain, but the same next-chunk engine wired up to sight, sound, and image-making."
      ]
    },
    "deepSections": [
      {
        "title": "How images and audio become tokens too",
        "teaser": "a picture is worth a few hundred tokens",
        "body": [
          "The trick that makes multimodality possible is converting other data into chunks the model can process the same way it processes text tokens. An image gets sliced into a grid of small patches, and each patch is turned into a token-like vector; audio gets chopped into short time slices and encoded similarly. Once everything is a sequence of these chunks, the same next-chunk prediction machinery applies whether the chunks came from words, pixels, or sound.",
          "This has a very practical consequence: images and audio cost tokens, often a lot of them. A single high-resolution image can consume hundreds or thousands of tokens of context, which directly affects both the bill and how much else fits on the 'desk' from the context-window lesson. So multimodal isn't just 'now it can see' — it's 'now it can see, and seeing isn't free.' Budgeting tokens for images and audio is a real part of scoping a multimodal feature."
        ]
      },
      {
        "title": "Document AI and OCR as a product surface",
        "teaser": "turning the world's messy paperwork into structured data",
        "body": [
          "One of the most commercially valuable multimodal applications is document AI: handing a model a scanned invoice, a contract, an ID, or a form, and getting back structured, usable data. This blends classic OCR (optical character recognition — reading the text off an image) with the model's ability to understand layout and meaning, so it can answer 'what's the total on this invoice?' or 'pull every party named in this contract.'",
          "This matters because so much of the real world's information is still trapped in PDFs, scans, and photos rather than tidy databases. A multimodal model that reliably reads and structures that material unlocks automation in finance, insurance, healthcare, and logistics. It's also a good example of scoping discipline: document AI works impressively well on clean, common formats and gets shakier on messy handwriting or unusual layouts, so a serious product needs evaluation on your actual documents, not a vendor's cherry-picked demo."
        ]
      },
      {
        "title": "Voice agents and image/video generation — what's production-ready",
        "teaser": "some of this ships today; some is still a demo",
        "body": [
          "Voice is having a real moment. Models like GPT-4o brought near-real-time voice conversation — you speak, it understands and replies out loud with low enough latency to feel like a phone call — which makes voice agents for support, ordering, and assistance genuinely deployable. On the generation side, image tools (Midjourney, and the image features baked into major models) are mature enough to be everyday production surfaces for marketing, design, and prototyping.",
          "Video generation, exemplified by OpenAI's Sora and Google's Veo, is the most dazzling and the least settled. The demos are spectacular, but consistency, control, cost, and the difficulty of getting exactly the shot you want keep it closer to 'powerful creative tool' than 'reliable production pipeline' for most use cases as of 2025–2026. The builder's discipline is to separate the categories: voice and image generation are largely production-ready with care; long-form, controllable video is still maturing. Knowing which is which keeps your roadmap honest."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Multimodality unlocks entire product categories that text alone couldn't reach: document AI that reads invoices and contracts, voice agents that hold real conversations, visual search, and image generation built into the workflow. For a PM, this is genuinely new territory to claim — but each modality you add brings its own cost curve, latency profile, and failure modes, and they stack rather than average out.",
        "The discipline that separates good multimodal products from disappointing ones is telling reliable-today from flashy-demo. A live keynote showing real-time voice and instant video generation is designed to dazzle; your job is to ask which parts hold up under real users, messy inputs, and a budget. Voice and document AI are often ready to ship with care; long-form controllable video frequently isn't yet. Scoping to what genuinely works — and building evaluation on your own real inputs — is how you avoid promising a demo you can't actually deliver."
      ]
    },
    "caseStudy": {
      "title": "GPT-4o's live demo: talking, seeing, and reacting in real time",
      "body": [
        "When OpenAI unveiled GPT-4o ('o' for 'omni') in May 2024, the demos made multimodality visceral. Presenters held a real-time spoken conversation with the model — interrupting it, asking it to change its tone, even to sound more dramatic — while it responded with human-like latency. They pointed a phone camera at a handwritten math problem and had it tutor them through the solution, and showed it reading screenshots and describing live camera feeds. Google's Gemini live demos in the same period pushed the same frontier of see-hear-speak interaction.",
        "Alongside these conversational models, generative tools became real product surfaces: image generators like Midjourney and the image capabilities inside major assistants moved into everyday professional use, while video generators like Sora showcased where the frontier was heading. The combined message of 2024–2025 was unmistakable — the same underlying 'predict the next chunk' engine now spanned text, vision, audio, and generation. The honest footnote, which separates hype from product, is that the polished real-time and video demos still hide real costs, latency, and reliability work before they become dependable features."
      ],
      "bridge": "GPT-4o made the pen-pal grow eyes, ears, and a voice in front of a live audience — same engine, more senses — and the gap between that dazzling demo and a dependable feature is exactly the territory a careful builder learns to scope."
    },
    "takeaways": [
      "Multimodal models see, hear, speak, and generate because images and audio get chopped into chunks and fed through the same next-chunk engine.",
      "More senses means more cost and latency — images and audio consume real tokens and stack new failure modes onto your feature.",
      "Voice and image generation are largely production-ready with care; long-form controllable video is still maturing, so scope to what actually works."
    ],
    "knowledgeCheck": [
      {
        "q": "Why can the same core 'predict the next chunk' idea handle images and audio, not just text?",
        "options": [
          {
            "text": "Images and audio are sliced into chunks (patches, time slices) and treated like tokens too",
            "correct": true
          },
          {
            "text": "The model converts every image into a written paragraph first, then reads that",
            "correct": false
          },
          {
            "text": "Multimodal models use a completely different mechanism unrelated to tokens",
            "correct": false
          }
        ],
        "feedback": "An image becomes a grid of patch tokens and audio becomes time-slice tokens, so the same next-chunk machinery applies across modalities."
      },
      {
        "q": "Which is the most accurate scoping judgment for 2025–2026 multimodal features?",
        "options": [
          {
            "text": "Everything shown in live demos is equally production-ready today",
            "correct": false
          },
          {
            "text": "Voice and image generation are often production-ready with care, while long-form controllable video is still maturing",
            "correct": true
          },
          {
            "text": "Nothing multimodal is reliable enough to ship in any product",
            "correct": false
          }
        ],
        "feedback": "Separating reliable-today from flashy-demo is the core skill — voice and image gen ship with care; controllable long-form video largely doesn't yet."
      }
    ],
    "glossaryTerms": [
      "multimodal",
      "ocr",
      "document-ai",
      "token",
      "latency"
    ],
    "sources": [
      {
        "label": "OpenAI — Hello GPT-4o",
        "url": "https://openai.com/index/hello-gpt-4o/"
      }
    ]
  }
}
