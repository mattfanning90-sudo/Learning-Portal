// Module 6 — Production AI & LLMOps
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m6-l1": {
    "id": "eng-m6-l1",
    "trackId": "engineering",
    "moduleId": "eng-m6",
    "order": 1,
    "title": "Sticky Note, Filing Cabinet, or Retraining: Prompt vs RAG vs Fine-Tuning",
    "estMinutes": 9,
    "coreIdea": "Prompting, retrieval, and fine-tuning aren't rivals — they're a stack, and matching each one to the right job is the most consequential (and most expensive-to-get-wrong) decision in any AI product.",
    "plainEnglish": [
      "When you want an AI to do something specific, there are three main ways to shape its behaviour, and people constantly reach for the wrong one. You can write better instructions (prompting). You can give the model a way to look things up before it answers (retrieval, usually called RAG). Or you can re-train the model itself on your examples until the new behaviour is baked in (fine-tuning).",
      "The trap is treating these as a ranked list where fine-tuning is the 'serious' option and prompting is the beginner move. In reality they solve different problems. Prompting is fast and free-ish and handles instructions and orchestration. RAG handles facts that change — today's prices, this customer's order history, last week's policy update. Fine-tuning handles stable behaviour and tone that you want the model to do instinctively every time, like always answering in your company's house style.",
      "The 2026 consensus is blunt: volatile knowledge goes in retrieval, stable behaviour goes in fine-tuning, and orchestration goes in the prompt. Reach for the cheapest tool that solves the problem first. Fine-tuning is the expensive last resort, not the opening move — and picking it too early is how teams quietly burn tens of thousands of dollars and weeks of calendar time on a problem a one-paragraph prompt could have solved."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Hiring a new employee. Prompting is the sticky note you hand them for today's task: 'Reply to these three emails, keep it short, cc me.' It costs nothing and takes thirty seconds. RAG is giving them a key to the company filing cabinet so they can look things up before they answer — they don't memorise every contract, they just go and find the right one when a question comes up. Fine-tuning is the months of on-the-job training that slowly change how they instinctively think, write, and carry themselves.",
        "Once you see it this way, the wrong choices look absurd. You would never put someone through months of retraining just to tell them when today's meeting is — you'd write it on a sticky note. And you would never rely on a sticky note to teach someone your company's entire way of working — that's what the training is for. Almost every expensive AI mistake is some version of using the retraining when a sticky note would do, or using a sticky note where you actually needed the filing cabinet."
      ]
    },
    "deepSections": [
      {
        "title": "The 2026 rule: volatile→retrieval, stable→fine-tune, orchestration→prompt",
        "teaser": "a three-line rule that prevents most architecture mistakes",
        "body": [
          "The clean way to make this decision is to ask one question about your information: how often does it change? If it changes frequently — prices, inventory, this user's account, a policy that gets updated every quarter — it is volatile, and it belongs in retrieval (RAG). You never want fresh facts baked into the model, because the moment they change, the model is confidently wrong and you have to retrain to fix it.",
          "If the thing you want is stable behaviour — a consistent tone of voice, always producing valid JSON, reliably following a niche format the model fumbles by default — that is what fine-tuning is for. It bakes a habit in so deeply you don't have to re-explain it every single call. And the prompt is where orchestration lives: the step-by-step instructions, the role, the constraints, the 'first do this, then that.' Most real products use all three at once — a fine-tuned tone, retrieved facts, and a prompt that stitches them together — which is exactly why thinking of them as a stack rather than a competition is the unlock."
        ]
      },
      {
        "title": "Fine-tuning, LoRA, and parameter-efficient methods in plain English",
        "teaser": "you rarely retrain the whole brain — you bolt on a small patch",
        "body": [
          "Classic fine-tuning means continuing to train the model on your own examples until its behaviour shifts. Done the old, full way, it's enormously expensive — you're nudging billions of internal numbers (the model's 'weights') and you need a lot of examples and a lot of compute to do it well. That cost is why fine-tuning earned its reputation as the heavyweight option.",
          "What changed the economics is parameter-efficient fine-tuning, and the famous version is LoRA (Low-Rank Adaptation). Instead of rewriting the entire model, LoRA freezes the original and trains a tiny add-on layer — think of it as a small patch clipped onto a finished engine rather than rebuilding the engine. It's dramatically cheaper, faster, and you can keep many small patches around for different tasks. This is why 'fine-tuning' in 2026 usually means LoRA-style adaptation, not full retraining — but even cheap fine-tuning is still slower and pricier than a prompt, so the decision rule above still holds."
        ]
      },
      {
        "title": "Cost/time tradeoffs and when compliance forces RAG",
        "teaser": "hours vs weeks, dollars vs tens of thousands — and sometimes the law decides for you",
        "body": [
          "Roughly: prompting takes hours and costs almost nothing, so it's where you should always start. RAG takes days to a few weeks to build properly — you have to ingest documents, chunk them, set up a way to search them, and keep that index fresh — but it gives you accurate, current, source-backed answers. Fine-tuning takes weeks and can cost thousands of dollars in compute and data preparation, and it only pays off when the behaviour you're encoding is genuinely stable.",
          "There's also a non-cost reason RAG often wins: compliance and auditability. In regulated settings — finance, healthcare, legal — you frequently need to show where an answer came from. RAG can cite the exact document and passage it used; a fine-tuned model just 'knows' the answer with no receipt, which is a problem when an auditor or a regulator asks you to prove it. So even when fine-tuning would technically work, the need to trace and update facts on demand can force a retrieval-based design."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This is the decision that sets an AI feature's cost, timeline, and how maintainable it'll be a year from now — and it is genuinely a product-level call, not something to quietly defer to an engineer. If you know in your bones that prompting is hours, RAG is days-to-weeks, and fine-tuning is weeks-plus-thousands-of-dollars (and only earns its keep for stable behaviour), you can scope a feature realistically in a planning meeting instead of discovering the truth six weeks and $20k later.",
        "It also lets you push back constructively. When an engineer says 'we should fine-tune a model for this,' the right product question is: 'Is this information that changes? Then shouldn't it be retrieval?' and 'Have we tried just improving the prompt first?' Most of the time, asking those two questions out loud is worth more than any amount of technical depth — it's the cheapest way to avoid the most expensive mistake in the category."
      ]
    },
    "caseStudy": {
      "title": "The startup that burned $20,000 fine-tuning what a prompt could fix",
      "body": [
        "A widely-cited 2026 essay ('I Watched a Startup Burn $20k on Fine-Tuning — A Simple Prompt Fixed It,' from the AI Research to Reality series) tells a story that has become the cautionary tale of the field. A team wanted their model to produce output in a particular structured format, decided fine-tuning was the 'proper' engineering answer, and spent weeks assembling training data and running fine-tuning jobs. The bill came to roughly $20,000 — and the results were still inconsistent.",
        "The fix, once someone stepped back, was a better prompt: clear instructions, a couple of worked examples shown inline, and an explicit description of the format. It cost effectively nothing and worked more reliably than the fine-tuned model. The lesson isn't that fine-tuning is bad — it's that the team skipped straight to the heaviest, most expensive tool for a problem that lived squarely in the prompt. They retrained the employee to tell them today's meeting time."
      ],
      "bridge": "Always climb the ladder in order — prompt, then retrieval, then fine-tuning — and stop at the first rung that works. The $20k was the price of skipping rungs."
    },
    "takeaways": [
      "Volatile facts → retrieval (RAG); stable behaviour and tone → fine-tuning; instructions and orchestration → the prompt.",
      "Start with the cheapest tool: prompting is hours, RAG is days-to-weeks, fine-tuning is weeks plus thousands of dollars.",
      "When you need to cite or update facts (compliance, audits), RAG usually beats fine-tuning even when both could technically work."
    ],
    "knowledgeCheck": [
      {
        "q": "Your AI product needs to answer questions using prices that change every day. Which tool fits best?",
        "options": [
          {
            "text": "Fine-tune the model on the current prices",
            "correct": false
          },
          {
            "text": "Use retrieval (RAG) so it looks the prices up fresh each time",
            "correct": true
          },
          {
            "text": "Write the prices into the system prompt",
            "correct": false
          }
        ],
        "feedback": "Prices are volatile, and volatile facts belong in retrieval — baking them into the model or the prompt means they're wrong the moment they change."
      },
      {
        "q": "When is fine-tuning the right choice?",
        "options": [
          {
            "text": "Whenever you want the most serious, professional solution",
            "correct": false
          },
          {
            "text": "To encode stable behaviour or tone you want the model to do instinctively every time",
            "correct": true
          },
          {
            "text": "Any time prompting feels too simple for the problem",
            "correct": false
          }
        ],
        "feedback": "Fine-tuning earns its cost only for stable behaviour — consistent tone, formats, habits — not for facts that change or problems a prompt can solve."
      }
    ],
    "glossaryTerms": [
      "prompting",
      "rag",
      "fine-tuning",
      "lora",
      "weights",
      "parameter-efficient-fine-tuning"
    ],
    "sources": [
      {
        "label": "How a startup burned $20k fine-tuning (AI Research to Reality)",
        "url": "https://medium.com/ai-research-to-reality/i-watched-a-startup-burn-20k-on-fine-tuning-a-simple-prompt-fixed-it-6070afcbf341"
      },
      {
        "label": "RAG vs fine-tuning vs prompt engineering (Aakash Gupta)",
        "url": "https://www.news.aakashg.com/p/rag-vs-fine-tuning-vs-prompt-engineering"
      },
      {
        "label": "RAG vs fine-tuning in 2026 (Umesh Malik)",
        "url": "https://umesh-malik.com/blog/rag-vs-fine-tuning-llms-2026"
      }
    ]
  },
  "eng-m6-l2": {
    "id": "eng-m6-l2",
    "trackId": "engineering",
    "moduleId": "eng-m6",
    "order": 2,
    "title": "The Triage Nurse: Model Selection and Routing",
    "estMinutes": 9,
    "coreIdea": "The biggest lever on AI cost and speed isn't squeezing one model harder — it's sending each request to the cheapest model that can actually handle it.",
    "plainEnglish": [
      "Most teams pick one big, impressive 'frontier' model and run every single request through it. That feels safe, but it's like sending every hospital patient to a brain surgeon. The vast majority of real traffic is simple and repetitive — classifying an email, summarising a short note, answering a FAQ — and using a top-tier model for that is paying surgeon rates to apply a band-aid.",
      "Routing flips this. You look at each incoming request, decide how hard it actually is, and send it to the smallest, cheapest model that can do the job. Easy high-volume stuff goes to a small, fast model. Genuinely hard reasoning goes to the expensive frontier model. The model becomes a per-request decision instead of a one-time platform choice.",
      "The savings aren't marginal. At serious scale — say 100,000 queries a day — routing the bulk of traffic to cheap models instead of a frontier model can save well over $150,000 a year, while also making most responses faster. In 2026 this stopped being a clever optimisation and became the default way to architect an AI product."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A hospital triage desk. When you walk in, you don't go straight to the most expensive specialist. A triage nurse takes one look and sorts you: a paper cut gets a band-aid from the nurse, a sore throat gets a GP, and only the genuinely serious cases get sent through to the surgeon whose time costs a fortune and whose schedule is precious.",
        "Routing is the triage nurse for your AI traffic. The surgeon — your frontier model — is your most expensive, slowest resource, so you protect their time fiercely and only call them in when the case actually demands it. A well-run desk keeps the simple cases moving fast and cheap, and the whole hospital runs better because the expensive expert isn't bottlenecked on paper cuts."
      ]
    },
    "deepSections": [
      {
        "title": "The model-mesh pattern: classify, then route to the cheapest that works",
        "teaser": "a small, fast classifier sits in front and directs traffic",
        "body": [
          "The 'model mesh' is the architecture that makes routing real. Instead of one model, you have a little fleet of them — small, medium, and frontier — plus a lightweight classifier at the front whose only job is to look at a request and decide where it should go. That classifier is itself cheap and fast, so the routing step adds almost no cost or delay.",
          "The discipline is to route to the cheapest model that still produces an acceptable answer — not the cheapest model overall, and not the best model overall. You figure out, per type of request, where 'good enough' lives. Many products discover that 70–90% of their traffic is handled perfectly well by a small model, and only a slim tail of hard cases ever needs the frontier model at all. That distribution is the whole reason routing pays off so dramatically."
        ]
      },
      {
        "title": "Frontier vs small language models vs open-weight; distillation",
        "teaser": "big-and-brilliant, small-and-cheap, or yours-to-control — plus a trick to get the best of both",
        "body": [
          "Three broad categories matter. Frontier models are the biggest, smartest, priciest — great at hard reasoning, overkill for routine work. Small language models (SLMs) are deliberately compact: far cheaper and faster, and increasingly capable on narrow tasks. Open-weight models are ones whose internals you can download and run yourself, trading some peak capability for control, privacy, and the ability to keep data inside your own walls (data residency).",
          "Distillation is the clever bridge between big and small. You take a large, capable 'teacher' model and use it to train a small 'student' model to mimic its answers on your specific task. The student ends up far smaller and cheaper to run but surprisingly close to the teacher's quality on that narrow job. It's how teams get frontier-ish performance at small-model prices — a graduate trained by a world expert to handle one job extremely well, without the expert's salary."
        ]
      },
      {
        "title": "Semantic caching for near-zero-cost repeats",
        "teaser": "if you've answered this question before, don't pay to answer it again",
        "body": [
          "A normal cache only catches identical requests. Semantic caching is smarter: it recognises when a new question means the same thing as one you've already answered, even if the wording is different. 'What's your refund window?' and 'How long do I have to return something?' are different strings but the same question — a semantic cache spots that and serves the stored answer for essentially nothing, no model call required.",
          "For products with repetitive traffic — support bots, FAQs, internal tools — this can quietly remove a huge slice of cost and latency, because a large share of real questions are reworded versions of a small core set. The trade-off to manage is staleness: you have to make sure cached answers are still correct, and invalidate them when the underlying facts change. Used carefully, it's one of the highest-return moves in the whole cost toolkit."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Model choice per request is a margin lever you control directly, and it's invisible to users when done right — they just get fast, good answers. Understanding the model mesh, distillation, and semantic caching lets you design features that stay profitable as they scale, rather than features that look great in a demo and bleed money at a million users. When someone proposes a new AI feature, 'what's the cheapest model that clears the quality bar here, and how much of this traffic repeats?' is a sharper product question than 'which model is best.'",
        "It also surfaces a strategic trade-off worth owning: closed frontier models give you peak capability with zero infrastructure, while open-weight models give you control, privacy, and data residency at the cost of running them yourself. For an enterprise deal where the customer won't let data leave their cloud, that trade-off can decide whether you win the contract — so it belongs in product strategy, not just the engineering backlog."
      ]
    },
    "caseStudy": {
      "title": "GPT-5 ships with routing built in",
      "body": [
        "When OpenAI launched GPT-5 in 2025, it didn't just ship a single model — it shipped an automatic, real-time router. For each message, the system decides on the fly whether to answer with a fast, cheap path or kick the request over to a slower, deeper-reasoning path, without the user having to choose. The decision that used to be a manual 'which model should I pick' setting became an invisible, per-message judgement made by the product itself.",
        "This mattered far beyond OpenAI's own numbers. By baking routing into a flagship mass-market product, it validated routing as the default architecture for AI products rather than a niche cost hack for big spenders. If the company with the most capable models in the world routes per message to save cost and time, that's permission — and pressure — for everyone else to do the same."
      ],
      "bridge": "When the frontier lab itself triages every message, you can stop treating routing as advanced and start treating it as table stakes."
    },
    "takeaways": [
      "Route each request to the cheapest model that clears the quality bar — most traffic is simple and doesn't need a frontier model.",
      "Distillation lets a small cheap 'student' model mimic a big 'teacher' on your specific task, and semantic caching serves repeat questions for near-zero cost.",
      "At scale, routing can save six figures a year and speed up most responses — it's the default architecture in 2026, not a niche trick."
    ],
    "knowledgeCheck": [
      {
        "q": "Why does routing save so much money compared with running one frontier model for everything?",
        "options": [
          {
            "text": "Frontier models are slower, so routing skips them to save time",
            "correct": false
          },
          {
            "text": "Most real traffic is simple and repetitive, so a small cheap model handles the bulk of it just as well",
            "correct": true
          },
          {
            "text": "Routing compresses the model so it uses less memory",
            "correct": false
          }
        ],
        "feedback": "The win comes from the traffic mix: the majority of requests are easy, so reserving the expensive model for the hard minority cuts cost dramatically."
      },
      {
        "q": "What does distillation do?",
        "options": [
          {
            "text": "Trains a small 'student' model to mimic a big 'teacher' model on a specific task",
            "correct": true
          },
          {
            "text": "Removes duplicate requests before they reach the model",
            "correct": false
          },
          {
            "text": "Encrypts data so it never leaves your own cloud",
            "correct": false
          }
        ],
        "feedback": "Distillation transfers a big model's skill on a narrow task into a much smaller, cheaper model — near-teacher quality at student-model cost."
      }
    ],
    "glossaryTerms": [
      "model-routing",
      "model-mesh",
      "frontier-model",
      "small-language-model",
      "open-weight-model",
      "distillation",
      "semantic-caching"
    ],
    "sources": [
      {
        "label": "Small language models vs LLMs",
        "url": "https://lucas8.com/small-language-models-vs-llms/"
      },
      {
        "label": "Model distillation: an LLM guide (Redis)",
        "url": "https://redis.io/blog/model-distillation-llm-guide/"
      },
      {
        "label": "LLM cost per token (Silicon Data)",
        "url": "https://www.silicondata.com/blog/llm-cost-per-token"
      },
      {
        "label": "LLM API pricing comparison 2026",
        "url": "https://www.aimagicx.com/blog/llm-api-pricing-comparison-2026"
      }
    ]
  },
  "eng-m6-l3": {
    "id": "eng-m6-l3",
    "trackId": "engineering",
    "moduleId": "eng-m6",
    "order": 3,
    "title": "Toll Bridge vs Taxi Meter: The Economics of Building with AI",
    "estMinutes": 9,
    "coreIdea": "Unlike traditional software, every AI request costs real money each time it runs — so you have to understand unit economics or your best customers will bankrupt you.",
    "plainEnglish": [
      "In traditional software, the hard part is building it. Once it's built, serving one more user costs almost nothing — copying bits is basically free. AI products break this comfortable assumption. Every single use burns 'tokens' (chunks of text the model processes), and tokens cost money, so your costs scale up with usage in a way classic software never did.",
      "That changes how you have to think about the business. You now care about cost-per-task, gross margin (what's left after you pay for the AI to serve a request), and your pricing model — because if you charge a flat monthly fee but your costs scale with how much people use the feature, your heaviest users can cost you more than they pay. That's a genuinely new failure mode for a software product.",
      "There's one big tailwind: the price of tokens has been falling fast and unpredictably — dropping something like 100x to 1000x over a few years. So you're playing a strange game: price your product to survive today's costs, while betting that the fuel gets much cheaper tomorrow. Over-engineering to shave a cost that'll halve next quarter can be just as wasteful as ignoring costs entirely."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Traditional software is a toll bridge. It costs an enormous amount to build, but once it's standing, each extra car that crosses costs you almost nothing — so you just need enough traffic to pay back the construction. The whole business model rests on that near-zero cost per crossing.",
        "AI products are more like running a taxi company. There's no free crossing — every single trip burns fuel (tokens), and that fuel is a real, recurring cost on every ride. Worse, the price of fuel keeps lurching downward in big unpredictable jumps. So you have to price your rides to stay profitable at today's fuel price, while making strategic bets about how cheap fuel will be next year. A taxi company that priced every ride as if fuel were free would go broke on its busiest customers — and that's exactly the trap flat-fee AI products fall into."
      ]
    },
    "deepSections": [
      {
        "title": "Tokens as the unit of cost; time-to-first-token as the latency metric",
        "teaser": "you pay per chunk of text in and out, and speed is measured by how fast the first word appears",
        "body": [
          "Models read and write in tokens — small chunks of text, very roughly three-quarters of a word each. You're billed for tokens going in (the prompt, the retrieved documents, the conversation history) and tokens coming out (the answer). This is why a feature that stuffs huge documents into every request gets expensive fast: you're paying for every token of context, every time, even if the user only reads one line of the answer.",
          "On the speed side, the metric users actually feel is time-to-first-token: how long they stare at a blank screen before the answer starts streaming in. People tolerate a long total response if words start appearing quickly, and hate a short response that makes them wait in silence first. So latency in AI isn't one number — 'how fast does it start' often matters more to the experience than 'how fast does it finish.'"
        ]
      },
      {
        "title": "Variable COGS, gross margin, and the price war",
        "teaser": "your cost-of-goods now moves with usage, and the price of inputs is collapsing under you",
        "body": [
          "In AI products, your cost of goods sold (COGS) — the direct cost of serving the product — is variable: it rises and falls with how much people use the feature. Gross margin is what's left after that cost. If a task costs you 30 cents in tokens and you charge a flat $10/month, a user who runs 50 tasks a day is wildly unprofitable, no matter how healthy your average margin looks. You have to watch the distribution, not just the average.",
          "The price war is the force pushing the other way. The major model providers keep undercutting each other, and token prices have fallen by orders of magnitude in just a few years. That's a gift — yesterday's unprofitable feature can become profitable with no work on your part — but it's also a planning hazard, because a margin calculation you do today may be obsolete next quarter. The skill is holding both truths at once: be disciplined about today's costs, but don't pour engineering effort into optimisations the price curve will make irrelevant."
        ]
      },
      {
        "title": "Batching, caching, and build-vs-buy / lock-in trade-offs",
        "teaser": "the levers to cut cost, and the strategic choice of whose model you depend on",
        "body": [
          "On the cost-cutting side, two big levers: batching (grouping many requests together so they're processed more efficiently and cheaply, when you don't need an instant answer) and caching (not paying to recompute answers or context you've already produced — prompt caching and semantic caching both live here). Together they can take a meaningful bite out of the bill without changing what the user sees.",
          "The bigger strategic question is build-vs-buy. Buying — calling a provider's API — is fast, gives you the best models, and requires no infrastructure, but you're exposed to their pricing, their rate limits, and lock-in (the cost and pain of switching away later). Building or self-hosting open-weight models gives you control and insulation from price changes, but you take on the operational burden. There's no universally right answer; it's a deliberate trade-off between speed and capability now versus control and independence later — and it's exactly the kind of call that should be made with eyes open, not by default."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This is the most directly product-owned lesson in the track. Variable cost-of-goods, gross margin, and pricing model (per-seat versus usage-based) all have to reconcile with the fact that costs scale with usage — and if they don't, the product loses money precisely on its most engaged customers, which is the worst possible group to lose money on. A PM who can read a cost-per-task number and connect it to the pricing page is doing core product work, not finance trivia.",
        "The collapsing cost curve adds a second judgement only an economically-literate PM can make well: knowing which optimisations to skip. If token prices are halving roughly every several months, spending two engineering sprints to shave a cost that'll halve on its own is a poor trade. Deciding 'we'll just eat this cost for now because the curve is on our side' is a strategic call — and getting it right separates teams that move fast from teams that polish the wrong things."
      ]
    },
    "caseStudy": {
      "title": "GitHub Copilot loses money on its power users",
      "body": [
        "GitHub Copilot, the AI coding assistant, reportedly ran at a per-user loss in its earlier period. The subscription was around $10 a month, but some power users — developers leaning on it constantly all day — consumed far more in compute than that flat fee covered. On average the maths might have looked survivable, but the heaviest, most loyal users were the most expensive ones to serve, which is exactly backwards from how a healthy subscription business usually works.",
        "This is the textbook unit-economics trap of usage-scaling costs sitting under a flat fee: the customers who love your product most are the ones who cost you the most, and a simple per-seat price quietly bleeds money on them. It's a big part of why the industry has been moving toward usage-based and tiered pricing — structures where what a customer pays actually tracks what they cost to serve."
      ],
      "bridge": "When your cost scales with usage, a flat fee turns your best customers into your biggest losses — which is why pricing model is an engineering-economics decision, not just a marketing one."
    },
    "takeaways": [
      "AI costs scale with usage (tokens per request), unlike traditional software where extra users are nearly free.",
      "Watch the distribution, not the average: a flat fee can lose money badly on heavy users even when average margin looks fine.",
      "Token prices are collapsing fast — price for today's costs, but don't over-engineer against a cost the price war will shrink anyway."
    ],
    "knowledgeCheck": [
      {
        "q": "Why can a flat monthly subscription be dangerous for a usage-heavy AI feature?",
        "options": [
          {
            "text": "Flat fees are illegal for AI products",
            "correct": false
          },
          {
            "text": "Costs scale with usage, so the heaviest users can cost more to serve than they pay",
            "correct": true
          },
          {
            "text": "Subscriptions can't be changed once launched",
            "correct": false
          }
        ],
        "feedback": "Because AI cost scales with use, a flat fee means your most engaged power users can quietly become your most unprofitable ones."
      },
      {
        "q": "What does 'time-to-first-token' measure, and why does it matter?",
        "options": [
          {
            "text": "The total cost of a request; it sets your gross margin",
            "correct": false
          },
          {
            "text": "How long before the answer starts appearing; it's the latency users actually feel",
            "correct": true
          },
          {
            "text": "How many tokens the model can store; it limits document size",
            "correct": false
          }
        ],
        "feedback": "Users judge speed by how fast words start streaming, so time-to-first-token often matters more to the experience than total response time."
      }
    ],
    "glossaryTerms": [
      "token",
      "time-to-first-token",
      "cogs",
      "gross-margin",
      "usage-based-pricing",
      "vendor-lock-in",
      "batching"
    ],
    "sources": [
      {
        "label": "LLM API pricing 2026 (TLDL)",
        "url": "https://www.tldl.io/resources/llm-api-pricing-2026"
      },
      {
        "label": "LLM cost per token (Silicon Data)",
        "url": "https://www.silicondata.com/blog/llm-cost-per-token"
      },
      {
        "label": "LLM API pricing comparison 2026",
        "url": "https://www.aimagicx.com/blog/llm-api-pricing-comparison-2026"
      }
    ]
  },
  "eng-m6-l4": {
    "id": "eng-m6-l4",
    "trackId": "engineering",
    "moduleId": "eng-m6",
    "order": 4,
    "title": "The Open-Book Exam at Scale: RAG Done Right in Production",
    "estMinutes": 9,
    "coreIdea": "RAG works beautifully in a demo and fails quietly in production unless you sweat the unglamorous details — how you split documents, how you measure retrieval, and whether the system will admit when it doesn't know.",
    "plainEnglish": [
      "RAG — retrieval-augmented generation — is the workhorse of enterprise AI. The idea is simple: before the model answers, you fetch the relevant facts from your own documents and hand them over, so the model answers from real sources instead of from vague memory. A weekend project can make a RAG demo that looks magical.",
      "The gap between that demo and something you can put in front of customers is enormous, and it lives entirely in details nobody finds exciting. How do you chop your documents into pieces? How do you know if the system is actually retrieving the right pieces? What happens when the answer genuinely isn't in your documents — does the system say 'I don't know,' or does it confidently make something up?",
      "This is where most enterprise AI projects actually succeed or fail. A naive RAG pipeline hallucinates, slowly gets worse as your documents change, and gives no warning before it does. Production RAG is the discipline of measuring retrieval quality, keeping the search index fresh, and enforcing a hard rule that the model may only answer from what it actually found."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "RAG is an open-book exam. The model is a clever student who hasn't memorised your specific textbook. Chunking is how you tear that textbook into index cards. Retrieval is how quickly and accurately the student finds the right card when a question comes up. Grounding is the strict exam rule: you may only write down what's actually on a card you found — no inventing, no half-remembering.",
        "Now picture a badly run open-book exam. The textbook was shredded mid-sentence, the cards are shuffled into nonsense, and the student can't find anything relevant. A weak student would leave the page blank — but an LLM isn't a weak student; it's an over-confident one. Faced with no useful card, it doesn't say 'I can't find this.' It writes down a fluent, plausible, completely invented answer. Production RAG is the work of making sure the cards are clean, findable, and that the student is forbidden from answering when no good card exists."
      ]
    },
    "deepSections": [
      {
        "title": "Chunking strategies and why semantic chunking helps",
        "teaser": "how you cut up documents quietly decides whether retrieval can work at all",
        "body": [
          "Models can't search a 200-page PDF directly, so you split documents into smaller pieces ('chunks') and store each so it can be found later. The naive approach cuts every N characters — but that blindly slices through the middle of sentences, tables, and ideas, leaving you with chunks that are half one thought and half another. Retrieve one of those and you've handed the model a fragment that makes no sense on its own.",
          "Semantic chunking splits along meaning instead — at the boundaries between topics, sections, or complete ideas — so each chunk is a coherent, self-contained unit. The payoff is that when the system retrieves a chunk, it's retrieving a whole thought the model can actually use, not a severed fragment. It's unglamorous plumbing, but it's often the single biggest driver of whether a RAG system feels sharp or vague, because everything downstream depends on the quality of the pieces you created at the start."
        ]
      },
      {
        "title": "Golden-query test sets and reranking",
        "teaser": "you can't improve retrieval you don't measure — and a second pass can sharpen what you found",
        "body": [
          "A golden-query test set is a fixed list of real questions paired with the documents that should be retrieved to answer them — the right answers, written down in advance. With it, you can measure retrieval quality objectively: when you change your chunking or your search, does it find the right documents more often or less? Without it, you're flying blind, tweaking settings on vibes and hoping. This test set is the unglamorous asset that turns RAG from guesswork into engineering.",
          "Reranking is a second-pass refinement. The first retrieval step is fast but rough — it grabs a handful of plausibly-relevant chunks. A reranker then re-scores those candidates more carefully and reorders them, pushing the genuinely best chunks to the top before they reach the model. It's like a librarian who first pulls ten books off the shelf quickly, then reads the blurbs to decide which three to actually hand you. That extra pass meaningfully lifts answer quality for a small added cost."
        ]
      },
      {
        "title": "The 'no evidence, no answer' clause",
        "teaser": "the one rule that turns a confident liar into a trustworthy assistant",
        "body": [
          "The most important rule in production RAG is also the simplest to state: if the system didn't retrieve good supporting evidence, it must not answer — it should say it doesn't know. This sounds obvious, but it cuts against the model's deepest instinct, which is to always produce a fluent answer. Left unconstrained, an LLM with no relevant context will happily invent a confident, specific, completely false reply.",
          "Enforcing 'no evidence, no answer' means designing the system to recognise when retrieval came back weak or empty and to refuse gracefully rather than improvise. In an enterprise setting this is the difference between a tool people trust and a tool that occasionally fabricates policy. A correct 'I don't have that information' is vastly more valuable than a confident wrong answer — because the confident wrong answer is the one that ends up in a contract, a support ticket, or a courtroom."
        ]
      },
      {
        "title": "Retrieval drift and index hygiene",
        "teaser": "a RAG system that worked at launch can quietly rot as your documents change",
        "body": [
          "RAG isn't a build-once system. Your documents change — policies update, products launch, old pages get deleted — and your search index has to keep up. Retrieval drift is the slow decay where the index falls out of sync with reality: it still confidently retrieves last year's policy, or misses the new document entirely, and the answers degrade without anyone touching the code. Nothing 'broke'; the world moved and the index didn't.",
          "Index hygiene is the ongoing discipline that prevents this: re-embedding and re-indexing documents when they change, removing stale entries, and periodically re-running your golden-query test set to catch quality slipping before users do. It's maintenance, not a feature, which is exactly why it gets skipped — and why so many RAG systems are excellent at launch and mediocre six months later. Budgeting for index hygiene up front is what keeps a production RAG trustworthy over time."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "RAG quality is usually the line between a trustworthy enterprise product and a legal liability — and the failure modes are invisible in a demo, which is precisely what makes them dangerous on a roadmap. The unsexy line items — building a golden-query test set, measuring retrieval, funding the re-embedding pipeline, enforcing 'no evidence, no answer' — are roadmap decisions, and a PM who treats them as optional polish is signing up for the Air Canada outcome. These belong in the plan from the start, not in a 'hardening' phase that never gets prioritised.",
        "It also gives you a concrete tool for the moment someone wants to skip grounding to ship faster. You don't have to win an abstract argument about hallucination — you point at Air Canada, where a chatbot's invented policy created real legal and brand damage, and ask whether shipping a week earlier is worth that risk. Knowing how RAG actually fails lets you make that trade-off explicit instead of discovering it in a tribunal."
      ]
    },
    "caseStudy": {
      "title": "Air Canada is held liable for its chatbot's invented policy",
      "body": [
        "In 2024, a grieving passenger asked Air Canada's website chatbot about bereavement fares. The bot confidently described a refund policy under which he could book now and claim the bereavement discount retroactively. That policy did not exist — the bot had made it up. When Air Canada refused the refund, the passenger took them to a tribunal, and Air Canada argued, remarkably, that the chatbot was a separate entity responsible for its own statements.",
        "The tribunal rejected that and held the airline liable for what its bot said. It's now the canonical real-world example of an ungrounded assistant hallucinating its way into legal and brand damage. The failure wasn't exotic: the model had no real policy document in front of it, so it did what unconstrained LLMs do — it invented a fluent, plausible, wrong answer. A 'no evidence, no answer' rule and proper grounding are designed to prevent exactly this."
      ],
      "bridge": "An ungrounded assistant doesn't fail by going silent — it fails by confidently inventing policy you're then legally on the hook for, which is why grounding is a requirement, not a refinement."
    },
    "takeaways": [
      "Semantic chunking — splitting documents along meaning, not arbitrary character counts — is often the biggest driver of RAG quality.",
      "Measure retrieval with a golden-query test set and sharpen it with reranking; you can't improve what you don't measure.",
      "Enforce 'no evidence, no answer' and keep the index fresh — a confident wrong answer (see Air Canada) is far worse than an honest 'I don't know.'"
    ],
    "knowledgeCheck": [
      {
        "q": "What does the 'no evidence, no answer' rule protect against?",
        "options": [
          {
            "text": "The system running too slowly under heavy load",
            "correct": false
          },
          {
            "text": "The model confidently inventing an answer when retrieval found nothing relevant",
            "correct": true
          },
          {
            "text": "Documents being too large to fit in the index",
            "correct": false
          }
        ],
        "feedback": "Without that rule, an LLM with no relevant context will fabricate a fluent, confident, wrong answer — exactly the Air Canada failure."
      },
      {
        "q": "Why does semantic chunking beat cutting documents every N characters?",
        "options": [
          {
            "text": "It produces coherent, self-contained chunks instead of slicing through the middle of ideas",
            "correct": true
          },
          {
            "text": "It makes the documents smaller so they cost less to store",
            "correct": false
          },
          {
            "text": "It encrypts each chunk for compliance",
            "correct": false
          }
        ],
        "feedback": "Semantic chunking splits along meaning, so each retrieved chunk is a whole usable thought rather than a severed fragment."
      }
    ],
    "glossaryTerms": [
      "rag",
      "chunking",
      "semantic-chunking",
      "reranking",
      "golden-query-set",
      "grounding",
      "retrieval-drift",
      "hallucination"
    ],
    "sources": [
      {
        "label": "Chunking strategies for RAG (Weaviate)",
        "url": "https://weaviate.io/blog/chunking-strategies-for-rag"
      },
      {
        "label": "Production RAG: chunking & retrieval 2025 (Elysiate)",
        "url": "https://www.elysiate.com/blog/rag-systems-production-guide-chunking-retrieval-2025"
      },
      {
        "label": "RAG pipeline challenges, ingestion to retrieval (Unstructured)",
        "url": "https://unstructured.io/insights/rag-pipeline-challenges-from-data-ingestion-to-retrieval"
      }
    ]
  },
  "eng-m6-l5": {
    "id": "eng-m6-l5",
    "trackId": "engineering",
    "moduleId": "eng-m6",
    "order": 5,
    "title": "The Body-Cam on a 30-Step Errand: Agent Reliability and Observability in Production",
    "estMinutes": 9,
    "coreIdea": "Once an AI becomes a multi-step agent, failures stop looking like crashes and start looking like bad decisions — so you have to record and replay every step, because you can't fix what you can't see.",
    "plainEnglish": [
      "A single prompt is easy to debug: it failed or it didn't. But products are increasingly built as agents that take many steps in a row — call a tool, read the result, decide what to do next, call another tool, and so on for dozens or hundreds of steps. When one of these breaks, there's no neat error message. Nothing 'crashed.' The agent just reasoned its way to a wrong destination over two minutes and 180 steps.",
      "That's a fundamentally different kind of failure, and you can't troubleshoot it by reading a stack trace, because there isn't one. The only way to understand what went wrong is to have recorded every step the agent took — every decision, every tool call, every piece of reasoning in between — so you can replay it and find the exact moment it went off the rails.",
      "This recording-and-replaying discipline is called observability, and by 2026 it's table stakes: around 89% of teams building agents use it, rising to roughly 94% among teams running agents in production. Latency has climbed to the #2 barrier to shipping agents as they go customer-facing, right behind reliability. You simply can't operate what you can't see."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "An AI agent is a brand-new junior employee you send off alone to complete a 30-step errand across town: go to the bank, then the post office, then pick up a part, then drop it at a workshop. If they come back empty-handed and all they can tell you is 'I failed,' you've learned nothing. Where did it go wrong? The bank? A wrong turn? Did they go to the wrong workshop entirely?",
        "Observability is the body-cam and GPS log strapped to that employee. Now when they come back empty-handed, you replay the footage and see the exact moment it went sideways — they walked into the wrong building at step 14 and everything after was wasted. You fix that one step instead of guessing, or worse, re-explaining the entire errand and hoping it goes better next time. Without the body-cam, every failure is a mystery; with it, every failure is a specific, fixable step."
      ]
    },
    "deepSections": [
      {
        "title": "Tracing every step, tool call, and intermediate reasoning",
        "teaser": "the body-cam footage: a full replayable record of what the agent did and why",
        "body": [
          "A trace is the complete, ordered record of an agent's run: every step it took, every tool it called, what it sent and got back, and the reasoning it produced in between. Where a traditional log might say 'request failed,' a trace lets you scroll through the agent's entire decision path and watch it think. This is the raw material of all agent debugging — without it, you're reduced to re-running the agent and hoping the failure repeats.",
          "The reason this matters so much for agents specifically is that the failure is almost never in a single line of code — it's in a decision. The agent searched for the wrong thing, misread a tool's output, or chose a bad next action. Only a step-by-step trace shows you which decision was the bad one. Capturing intermediate reasoning, not just final outputs, is what turns 'the agent sometimes fails' into 'the agent misinterprets empty search results at step 14,' which is something you can actually fix."
        ]
      },
      {
        "title": "Semantic vs system failures: the confident HTTP-200",
        "teaser": "the scariest failures are the ones where everything technically 'worked'",
        "body": [
          "A system failure is the familiar kind: something errored, a service timed out, a request returned a 500. Your monitoring catches these, because the machinery itself broke. A semantic failure is sneakier and unique to AI: every component ran perfectly, every call returned a healthy 'HTTP 200 OK' — and the answer is still wrong. The plumbing worked flawlessly; the agent just did the wrong thing, confidently, with no error anywhere.",
          "This is why traditional monitoring isn't enough for agents. Your dashboards can be all green while the product is quietly giving customers wrong answers, because nothing technically failed. Catching semantic failures requires evaluating the quality of what the agent actually did — not just whether the requests succeeded. The 'confident HTTP-200' is the defining failure mode of agentic products: success by every system metric, failure by every human one."
        ]
      },
      {
        "title": "Latency, time-to-first-token, and feature-level cost tracking",
        "teaser": "agents are slow and expensive by nature, so you have to watch speed and spend per feature",
        "body": [
          "Agents are inherently slower and pricier than single calls — every step is another model call, another tool round-trip, more tokens. As agents go customer-facing, latency has become a top barrier to shipping, because users won't wait a long time for a result with no feedback. Time-to-first-token (how fast something starts happening) and overall step latency are product qualities you have to actively manage, not afterthoughts.",
          "Cost has to be tracked at the feature level, not just as one big monthly bill. When a single agent run can fan out into hundreds of model calls, an innocent-looking feature can quietly drain the budget while the topline number hides it. Attributing cost and latency to specific features tells you exactly where the money and the milliseconds are going — turning a vague 'our AI bill is too high' into 'this one workflow accounts for 60% of the spend,' which is a problem you can act on."
        ]
      },
      {
        "title": "Closing the loop: production trace → regression dataset",
        "teaser": "every real failure becomes a permanent test that stops it recurring",
        "body": [
          "The highest-leverage move in agent observability is closing the loop: when a real failure shows up in production, you capture that trace and turn it into a test case in a regression dataset — a growing collection of 'here's an input that broke us, here's what should have happened.' Before you ship any change, you run against that dataset to make sure you haven't reintroduced an old failure. Your real-world mistakes become a permanent immune system.",
          "This is also where reliability work starts compounding into a competitive moat. Every production failure makes your test set richer, which makes the next version more robust, which is hard for a competitor to replicate because they don't have your accumulated failures. It's the front edge of the data flywheel — the idea that usage generates data that improves the product that drives more usage — which the next module picks up in full. Observability isn't just defence; it's the raw material for getting durably better."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Latency and reliability are now the top barriers to shipping customer-facing agents, and both are product qualities you own, not engineering internals to delegate. Being able to distinguish a semantic failure (a confident HTTP-200 that's simply wrong) from a system failure (something errored) tells you where the product is actually breaking — and tracking cost and latency at the feature level tells you where the budget is draining. That's how you turn 'it sometimes fails' from a shrug into a measured, prioritisable problem.",
        "It also reframes observability spend on the roadmap. It looks like pure infrastructure cost, but it's the thing that lets you debug, measure, and improve a product whose failures are otherwise invisible — and, by feeding the regression dataset, it's the start of a durable quality advantage. A PM who can argue for observability as a product investment, not an engineering luxury, is the one whose agents actually make it to customers and stay reliable once they're there."
      ]
    },
    "caseStudy": {
      "title": "Cursor instruments every accept and reject",
      "body": [
        "Cursor, the AI coding tool that became one of the breakout developer products of 2024–2025, treats observability as a core competitive capability rather than a nice-to-have. It instruments every single accept or reject of a code suggestion — when a developer takes its proposed code, and when they throw it away. That stream of signals serves two jobs at once: it lets the team debug exactly where and why the agent's suggestions go wrong, and it feeds the improvement loop that makes the next suggestion better.",
        "That dual use is the point. The same body-cam footage that helps them fix today's failures is also the training signal that compounds into a better product over time. Reject a suggestion and you've told Cursor something; thousands of those signals a day become a flywheel competitors without that instrumentation can't easily match. Production-grade observability stopped being hygiene and became a genuine edge — which is exactly why it seeds the data-flywheel story of the next module."
      ],
      "bridge": "When every accept and reject is recorded, observability stops being defence and becomes the raw fuel for a product that durably outpaces rivals — the bridge into the data flywheel."
    },
    "takeaways": [
      "Agent failures are bad decisions, not crashes — you need a full step-by-step trace to find the one step that went wrong.",
      "Watch for semantic failures: a confident HTTP-200 where every system metric is green but the answer is still wrong.",
      "Track cost and latency per feature, and turn every production failure into a regression test so it can't recur."
    ],
    "knowledgeCheck": [
      {
        "q": "Why can't you debug a failed AI agent the way you'd debug normal software?",
        "options": [
          {
            "text": "Agents run too fast to log anything useful",
            "correct": false
          },
          {
            "text": "There's often no crash or stack trace — the agent simply made a wrong decision across many steps",
            "correct": true
          },
          {
            "text": "Agents delete their own error messages for security",
            "correct": false
          }
        ],
        "feedback": "Agent failures are usually bad reasoning, not crashes, so you need a step-by-step trace to find the decision that went wrong."
      },
      {
        "q": "What is a 'semantic failure' in an AI agent?",
        "options": [
          {
            "text": "A network timeout that returns an error code",
            "correct": false
          },
          {
            "text": "Every component returns a healthy HTTP-200 but the agent's answer is still wrong",
            "correct": true
          },
          {
            "text": "The agent runs out of tokens mid-response",
            "correct": false
          }
        ],
        "feedback": "A semantic failure is the 'confident HTTP-200': nothing technically errored, but the agent did the wrong thing — which normal monitoring won't catch."
      }
    ],
    "glossaryTerms": [
      "ai-agent",
      "observability",
      "trace",
      "semantic-failure",
      "regression-dataset",
      "data-flywheel",
      "latency"
    ],
    "sources": [
      {
        "label": "State of Agent Engineering (LangChain)",
        "url": "https://www.langchain.com/state-of-agent-engineering"
      },
      {
        "label": "Agent observability complete guide 2026 (Braintrust)",
        "url": "https://www.braintrust.dev/articles/agent-observability-complete-guide-2026"
      },
      {
        "label": "Agentic AI observability playbook 2026 (Arthur)",
        "url": "https://www.arthur.ai/column/agentic-ai-observability-playbook-2026"
      }
    ]
  }
}
