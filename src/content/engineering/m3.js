// Module 3 — Agents & Agentic Software Engineering
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m3-l1": {
    "id": "eng-m3-l1",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 1,
    "title": "The Chef Who Cooks, Not Recites: What an Agent Is and the Agent Loop",
    "estMinutes": 9,
    "coreIdea": "An AI agent is just a model that thinks, uses a tool, looks at what happened, and repeats until the job is done.",
    "plainEnglish": [
      "An AI agent is not a smarter chatbot. It is a language model wrapped in a simple loop: it reasons about what to do next, takes an action using a tool (search the web, run a command, edit a file), observes the result, and then loops back to reason again with that new information. It keeps cycling until it decides the goal is met.",
      "That one loop is the whole secret. A chatbot answers in a single shot from whatever it already knows. An agent gets to try something, see if it worked, and course-correct — which is why agents can actually finish multi-step jobs that a single answer never could.",
      "Once you see the loop, agents stop feeling like magic. Every impressive demo and every embarrassing failure traces back to the same four moves: reason, act, observe, repeat. The most common mistake people make is calling something an 'agent' when it is really just a chatbot with a longer prompt — which sets expectations no product can meet."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a chef working from a goal — 'make dinner' — instead of a fixed printed recipe. They open the fridge to see what's there (observe), decide to chop an onion (act with a tool), taste the sauce (observe again), realise it needs salt, and adjust. They keep cooking, tasting, and fixing until the dish is actually good. The goal is fixed; the steps are improvised in response to what's really happening in the pan.",
        "A chatbot is the cookbook on the shelf: ask it and it recites a recipe, perfectly worded, never having touched a stove. An agent is the chef who actually cooks — which means it can burn the garlic, notice the smell, and start that step over. That ability to fail mid-task and recover is exactly what makes an agent useful, and exactly why it needs guardrails a cookbook never did."
      ]
    },
    "deepSections": [
      {
        "title": "The ReAct loop: Reason → Act → Observe → repeat",
        "teaser": "the four-beat heartbeat inside every agent",
        "body": [
          "ReAct is shorthand for 'Reason and Act,' and it describes the loop precisely. First the model reasons in plain text about what it should do ('I need the current population of Tokyo, so I'll search for it'). Then it acts by calling a tool. Then it reads the tool's output as a new observation. Then it loops — reasoning again, now armed with what it just learned. The magic is that reasoning and acting are interleaved, not separated: the model thinks a little, does a little, sees the result, and thinks again.",
          "This interleaving is what lets an agent stay grounded in reality instead of confidently making things up. A model that only reasons can talk itself into a wrong answer with no reality check. A model that only acts is flailing without a plan. ReAct alternates the two so each step of action is steered by fresh thinking, and each step of thinking is corrected by a real-world result."
        ]
      },
      {
        "title": "Plan-and-Execute vs reason-as-you-go",
        "teaser": "draft the whole plan first, or improvise each step?",
        "body": [
          "There are two broad styles for running the loop. 'Reason-as-you-go' (classic ReAct) decides only the very next action each cycle — flexible and adaptive, but it can wander or lose the thread on long tasks. 'Plan-and-Execute' has the agent draft a full multi-step plan up front, then march through it, only re-planning when something breaks. Planning first keeps long tasks coherent and saves money (fewer expensive 'what now?' moments), but it can be brittle when reality doesn't match the plan.",
          "Most strong 2026 agents blend the two: they sketch a rough plan, execute step by step in a ReAct loop, and re-plan when an observation surprises them. The right balance depends on the task — a tightly-scoped bug fix wants more planning; an open-ended research question wants more improvisation."
        ]
      },
      {
        "title": "Agents vs workflows, and the 'done' signal",
        "teaser": "who decides the next step — your code, or the model?",
        "body": [
          "A workflow is a fixed pipeline where your code decides each step in advance: do A, then B, then C. An agent hands that control to the model — it decides at runtime what to do next and when to stop. That distinction matters enormously for reliability and cost. Workflows are predictable and cheap; agents are flexible but can loop forever or take a wrong turn. A huge share of real engineering systems are better off as workflows with one or two agentic steps, not fully autonomous agents.",
          "The 'done' signal is the most underrated part of the loop. An agent needs a clear stopping condition: the tests pass, the question is answered, a maximum number of steps is reached. Without a crisp definition of done, agents burn tokens going in circles or stop too early with a half-finished job. Designing the done signal is a real engineering decision, not an afterthought."
        ]
      },
      {
        "title": "The agent taxonomy: autonomy, environment, collaboration",
        "teaser": "three dials that describe any agent you'll meet",
        "body": [
          "The 2025 survey 'A Survey on Code Generation with LLM-based Agents' organises the whole zoo along three axes. Autonomy: how much the agent decides for itself versus how much a human steers. Environment interaction: what the agent can actually touch — just text, or a shell, a browser, a real codebase. Collaboration: whether it works alone or as part of a team of agents passing work back and forth.",
          "These three dials are a cheat sheet for sizing up any agent product. When a vendor says 'autonomous AI engineer,' you can ask: how much autonomy, really? What environment can it reach? Does it work solo or in a swarm? Almost every meaningful difference between agent products lives in those three answers."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "'Agent' is the single most overloaded word your stakeholders will use, and that vagueness costs real money. When everyone in the room means something different by 'agent,' you scope the wrong thing, promise the wrong thing, and ship something that disappoints. Being able to say precisely 'it's a model in a Reason-Act-Observe loop, with these three tools, and it stops when the tests pass' instantly turns a hype conversation into a buildable spec.",
        "That precision is also your hype filter. A vendor demo of an 'autonomous agent' is really a claim about autonomy, environment, and stopping conditions — three things you can now interrogate. Knowing the loop lets you tell the difference between a genuinely agentic product and a chatbot in a trench coat, which is the difference between a roadmap that works and one that collapses on contact with users."
      ]
    },
    "caseStudy": {
      "title": "ReAct: the 2022 Princeton paper that quietly invented every coding agent",
      "body": [
        "In 2022, researchers from Princeton and Google published a paper called ReAct. The setup was deceptively simple: instead of asking a language model to either reason through a question OR look things up, they let it do both, interleaved — reason a step, look up a fact on live Wikipedia, reason again with that fact in hand. The result was striking. The model that combined reasoning with live action beat models that only reasoned and models that only acted, and it hallucinated far less because every claim got a reality check from a real lookup.",
        "That little loop — reason, act, observe, repeat — is now the beating heart of Claude Code, Devin, Cursor, and essentially every coding agent shipped in 2025 and 2026. The 2025 survey 'A Survey on Code Generation with LLM-based Agents' traces the whole field's family tree back to this idea and lays out the taxonomy of autonomy, environment, and collaboration that the rest of this module builds on. A four-line idea from a research paper became the architecture of an industry."
      ],
      "bridge": "Every agent you will ever use, buy, or build is running some version of that 2022 loop — so if you understand reason-act-observe-repeat, you understand the whole field's foundation."
    },
    "takeaways": [
      "An agent is a model in a loop: reason, act with a tool, observe, repeat until done.",
      "A chatbot recites; an agent acts, fails, and recovers — that recovery is the whole point.",
      "Most reliable systems are workflows with one or two agentic steps, not fully autonomous agents."
    ],
    "knowledgeCheck": [
      {
        "q": "What fundamentally separates an AI agent from a chatbot?",
        "options": [
          {
            "text": "The agent uses a bigger, smarter model",
            "correct": false
          },
          {
            "text": "The agent runs a loop — it acts with a tool, observes the result, and repeats",
            "correct": true
          },
          {
            "text": "The agent has a longer, more detailed prompt",
            "correct": false
          }
        ],
        "feedback": "Correct — it's the loop, not the model size or prompt length, that makes something an agent: it acts, observes, and course-corrects."
      },
      {
        "q": "Why does interleaving reasoning with action (ReAct) reduce hallucination?",
        "options": [
          {
            "text": "Each action gives a real-world observation that checks the model's thinking",
            "correct": true
          },
          {
            "text": "Reasoning steps are disabled once the model starts acting",
            "correct": false
          },
          {
            "text": "The model stops generating text and only runs code",
            "correct": false
          }
        ],
        "feedback": "Right — alternating thinking with real tool results keeps the model grounded instead of letting it talk itself into a wrong answer."
      }
    ],
    "glossaryTerms": [
      "agent",
      "react-loop",
      "tool-use",
      "workflow",
      "agent-taxonomy",
      "stopping-condition"
    ],
    "sources": [
      {
        "label": "Anthropic — Effective Context Engineering for AI Agents",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      },
      {
        "label": "MindStudio — What Is the ReAct Loop?",
        "url": "https://www.mindstudio.ai/blog/what-is-react-loop-ai-agent-reasoning"
      },
      {
        "label": "Oracle — The AI Agent Loop Explained",
        "url": "https://blogs.oracle.com/developers/what-is-the-ai-agent-loop-the-core-architecture-behind-autonomous-ai-systems"
      },
      {
        "label": "Survey on Code Generation with LLM-based Agents (arXiv 2508.00083)",
        "url": "https://arxiv.org/abs/2508.00083"
      }
    ]
  },
  "eng-m3-l2": {
    "id": "eng-m3-l2",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 2,
    "title": "Same Chef, Different Kitchen: The Agent-Computer Interface (ACI)",
    "estMinutes": 9,
    "coreIdea": "The same model performs dramatically better or worse depending on how its tools are designed, so building good tools for the AI is the highest-leverage skill in agent work.",
    "plainEnglish": [
      "Here is one of the most useful and least intuitive findings in the whole field: take one fixed model, change nothing about its brain, and just redesign the tools you hand it — and its performance can swing from near-useless to genuinely capable. The intelligence didn't change. The interface did.",
      "The Agent-Computer Interface, or ACI, is the set of tools and commands an agent uses to touch the world: how it reads files, edits code, runs searches. The ACI is to an agent what a well-designed app is to a human user. A cluttered, confusing toolset makes a smart model stumble; a clean, well-labelled one makes the same model shine.",
      "This is the cheapest, highest-return lever you have. When an agent underperforms, the instinct is to reach for a bigger, more expensive model. Usually the better move is to fix the tools — clearer commands, better error messages, guardrails that make dumb mistakes impossible. It costs almost nothing and often beats the model upgrade."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Take two cooks with identical skill. Put one in a chaotic kitchen: knives hidden in random drawers, the oven dial unlabelled, ingredients with no names. Put the other in a clean kitchen: everything within reach, clearly marked, a timer that beeps. Same skill, wildly different dinners — and it's entirely the kitchen's fault, not the cook's. The ACI is the kitchen you build for the AI.",
        "Now add a guardrail. In the good kitchen, the oven physically cannot be turned past 250°C — so the cook literally can't burn the dish that way, no matter how distracted they get. That's the deepest move in interface design: don't just make the right action easy, make the catastrophic action impossible. A tool that won't let an agent delete the wrong file beats a warning the agent might ignore."
      ]
    },
    "deepSections": [
      {
        "title": "ACI as the AI's UX: simplicity, efficiency, error-prevention",
        "teaser": "good UX, but the user is the model",
        "body": [
          "Everything you know about good user experience applies here, with one twist: the user is the AI. Simplicity means fewer, clearer tools rather than a sprawling menu the model has to reason its way through. Efficiency means each tool returns exactly what's useful — a focused result, not a wall of noise the model has to wade through. Error-prevention means designing tools so the common mistakes simply can't happen.",
          "The reason this matters so much is that an agent's only window onto the world is its tools and their outputs. A confusing tool name, a cryptic error message, or output that buries the signal in noise all degrade the model's reasoning just as surely as a bad UI confuses a person. Treating tool design as a UX problem — and iterating on it the way you'd iterate on a screen — is the core ACI discipline."
        ]
      },
      {
        "title": "Poka-yoke: making mistakes impossible by design",
        "teaser": "the Toyota idea that the wrong move shouldn't be possible",
        "body": [
          "'Poka-yoke' is a Japanese manufacturing term, popularised by Toyota, meaning 'mistake-proofing': designing a process so the error literally cannot occur. A SIM card that only fits one way. A plug that won't go in upside down. In agent design, poka-yoke means shaping tools so the agent can't take the dangerous path even if its reasoning slips.",
          "Concretely: an edit tool that refuses to save code that doesn't parse, so the agent can't commit broken syntax. A file-deletion command scoped so it can only touch a sandbox. A budget cap that stops the loop before it spends $500. These aren't warnings the model might ignore — they're walls. The best agent systems lean heavily on poka-yoke because a guardrail you can't bypass is worth a hundred polite instructions you hope the model follows."
        ]
      },
      {
        "title": "Worked example: a 100-line file viewer that beats raw 'cat'",
        "teaser": "how a tiny tool tweak unlocked a model that was already capable",
        "body": [
          "Imagine an agent trying to fix a bug in a 2,000-line file. The naive tool is the Unix command 'cat', which dumps the entire file at once. That floods the agent's limited context with thousands of lines, most irrelevant, and the agent loses track of where it is. The agent isn't dumb — it's drowning. Swap in a paged viewer: a tool that shows 100 lines at a time, with line numbers and a way to scroll or jump. Suddenly the agent can navigate the file like a human reading a book, holding only the relevant page in mind.",
          "That single change — a small custom file viewer instead of raw 'cat' — is the kind of edit that moves agents from failing to succeeding, with zero change to the underlying model. Pair it with a syntax-checking editor (won't let you save broken code) and a concise search command (returns matches, not the whole haystack), and you've built an ACI that turns a stumbling model into a competent engineer."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This maps almost perfectly onto a product manager's instinct for good UX — except the user you're designing for is the AI. When an agentic feature underperforms, the team's first reflex is to ask for a bigger model, which is slow and expensive. Knowing about the ACI reframes that conversation: the cheapest fix is almost always better tools and clearer feedback, and it's something your team can ship in a day rather than waiting on a model upgrade.",
        "It also reshapes where you point your improvement budget. Model swaps are a blunt, costly instrument; interface design is precise and nearly free. A PM who understands the ACI steers the roadmap toward high-leverage tooling work — the file viewers, the guardrails, the mistake-proofing — and treats 'throw a bigger model at it' as the expensive last resort, not the first move."
      ]
    },
    "caseStudy": {
      "title": "SWE-agent: Princeton wraps a Linux shell and lifts a model from near-zero to 12.5%",
      "body": [
        "In 2024, Princeton researchers building SWE-agent (published at NeurIPS 2024) coined the term 'Agent-Computer Interface' and then proved its power with a clean experiment. They started with a model trying to fix real GitHub issues using a normal Linux shell — and it scored near zero on SWE-bench, a benchmark of genuine open-source bug fixes. The model wasn't incapable; the raw shell was a terrible interface for it.",
        "So they redesigned the tools without touching the model. They added a paged file viewer instead of raw dumps, a syntax-checking editor that wouldn't let the agent save broken code, and a concise search command. With those agent-friendly tools, the same model jumped to 12.5% on SWE-bench — a transformational gain that came entirely from the interface. SWE-agent became the foundational 'tooling beats model tweaks' result, and the ACI has been a first-class design concern in every serious coding agent since."
      ],
      "bridge": "The model never got smarter — the kitchen got cleaner. That's the whole lesson: when an agent struggles, look at the tools you handed it before you reach for a bigger brain."
    },
    "takeaways": [
      "The same model can swing from useless to capable based purely on how its tools are designed.",
      "Treat tool design as UX for the AI: simple, focused, and mistake-proofed (poka-yoke).",
      "When an agent underperforms, fixing tools is usually cheaper and faster than a bigger model."
    ],
    "knowledgeCheck": [
      {
        "q": "An agent is failing at a task. According to the ACI lesson, what's usually the cheapest fix to try first?",
        "options": [
          {
            "text": "Upgrade to a larger, more expensive model",
            "correct": false
          },
          {
            "text": "Improve the tools and feedback the agent works with",
            "correct": true
          },
          {
            "text": "Give the agent a longer system prompt",
            "correct": false
          }
        ],
        "feedback": "Correct — better tools and clearer feedback are the highest-leverage, lowest-cost fix, often outperforming a model upgrade."
      },
      {
        "q": "What does 'poka-yoke' mean in the context of designing tools for agents?",
        "options": [
          {
            "text": "Letting the agent self-correct after it makes a mistake",
            "correct": false
          },
          {
            "text": "Designing tools so a dangerous mistake simply can't happen",
            "correct": true
          },
          {
            "text": "Adding a warning message before risky actions",
            "correct": false
          }
        ],
        "feedback": "Right — poka-yoke means mistake-proofing by design, like an editor that refuses to save broken code, not just a warning the model might ignore."
      }
    ],
    "glossaryTerms": [
      "agent-computer-interface",
      "poka-yoke",
      "swe-bench",
      "tool-use",
      "guardrail"
    ],
    "sources": [
      {
        "label": "SWE-agent — Background: The Agent-Computer Interface",
        "url": "https://swe-agent.com/0.7/background/aci/"
      },
      {
        "label": "SWE-agent paper (arXiv 2405.15793)",
        "url": "https://arxiv.org/abs/2405.15793"
      },
      {
        "label": "Agent Patterns — Agent-Computer Interface",
        "url": "https://agentpatterns.ai/tool-engineering/agent-computer-interface/"
      },
      {
        "label": "Anthropic — Effective Context Engineering for AI Agents",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      }
    ]
  },
  "eng-m3-l3": {
    "id": "eng-m3-l3",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 3,
    "title": "The Whiteboard That Fills Up: Context Engineering for Long-Running Agents",
    "estMinutes": 9,
    "coreIdea": "Agents fail less from being dumb and more from drowning in their own history, so managing what's in their limited memory is what lets them run for hours.",
    "plainEnglish": [
      "A model can only hold so much text in mind at once — its 'context window.' As an agent works through a long task, that window fills up with everything it has read, tried, and said. And here's the catch: as it fills, the model actually gets worse, losing track of what matters. This decay has a name — 'context rot.'",
      "Context engineering is the 2026 successor to prompt engineering. Prompt engineering was about wording a single request well. Context engineering is about managing the whole stream of information an agent sees over a long task — wiping the board clean when it clutters, keeping notes outside the window, and pulling in only what's needed right now.",
      "Get this right and an agent can run for hours or work across an entire codebase. Get it wrong and it confidently falls apart halfway through. There's also a deeper insight lurking here: as codebases get huge, the hard part isn't writing code — it's reading and understanding the code that already exists. Comprehension, not generation, becomes the real ceiling."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "An agent's context window is a single small whiteboard. At the start it's clean and useful — plenty of room to think. But as the agent works, it scribbles down everything: files it read, commands it ran, dead ends it hit. Soon the board is a mess of overlapping notes, and the agent can't find the one fact that matters. It starts making mistakes not because it got dumber, but because it can't see its own thinking anymore.",
        "Context engineering is the discipline of keeping that whiteboard usable. You wipe it down to the essentials when it clutters (compaction). You keep a tidy notebook on the desk beside it for things you'll need later (external memory). And you only copy onto the board what you need for the step you're on right now (just-in-time retrieval). The agent's raw intelligence never changes — but a managed whiteboard lets it work for hours instead of minutes."
      ]
    },
    "deepSections": [
      {
        "title": "Context rot and the finite attention budget",
        "teaser": "why a fuller window makes a worse model",
        "body": [
          "A model's attention is a finite budget spread across everything in its context window. The more you cram in, the thinner that attention spreads — and crucially, the model gets measurably worse at using any single piece of it. This is 'context rot': performance degrades as the window fills, even when the relevant fact is technically still in there. The model isn't broken; its attention is just stretched too thin to reliably find the needle in a growing haystack.",
          "The practical lesson is counterintuitive: more context is not better. A long-running agent that naively keeps appending everything it sees will slowly poison its own window. The skill is keeping context lean — treating that attention budget as the scarce resource it is, and spending it only on what the current step genuinely needs."
        ]
      },
      {
        "title": "Compaction, external memory, and just-in-time retrieval",
        "teaser": "the three core moves for keeping a window clean",
        "body": [
          "Compaction is summarising and discarding. When the window gets crowded, the agent (or the system around it) condenses the long history into a short summary — 'here's what I've done and learned so far' — and throws away the raw transcript. The whiteboard gets wiped down to its essence so there's room to keep working.",
          "External memory is the tidy notebook beside the board: durable notes the agent writes to files or a store outside the context window — goals, decisions, a map of the codebase. Just-in-time retrieval is the habit of not loading everything up front, but fetching the specific file, fact, or note only at the moment it's needed. Together these three moves — compact what's stale, store what's durable, retrieve what's relevant — are what separate an agent that fizzles after twenty minutes from one that runs for hours."
        ]
      },
      {
        "title": "Why code READING is the dominant bottleneck at scale (SWE-AGI/MoonBit)",
        "teaser": "the real ceiling isn't writing code — it's understanding it",
        "body": [
          "The 2026 SWE-AGI/MoonBit work tackled building software from scratch off a written spec, and it surfaced a striking insight: as systems grow, the bottleneck shifts from generating code to comprehending it. Writing a new function is easy; understanding how it fits into a sprawling existing codebase — what calls it, what assumptions it relies on, what breaks if you change it — is the genuinely hard part, for both humans and agents.",
          "This reframes where the difficulty lives. An agent that can churn out plausible code is common; an agent that can read a large unfamiliar codebase, build an accurate mental model of it, and make a safe change is rare and valuable. As codebases scale, comprehension — fed by good memory and context management — overtakes generation as the real measure of an agent's usefulness. That's also why the whiteboard discipline above matters so much: comprehension lives or dies on what the agent can hold in mind."
        ]
      },
      {
        "title": "Anthropic's Memory for Managed Agents (April 2026): persistent, auditable, shareable",
        "teaser": "external memory grows up into a real product feature",
        "body": [
          "By April 2026, external memory had matured from a clever hack into a first-class platform feature. Anthropic's Memory for Managed Agents gives agents memory that persists across sessions (the agent remembers what it learned yesterday), is auditable (you can inspect exactly what it has stored and why), and is shareable (multiple agents or runs can draw on the same memory).",
          "Those three properties matter for very different reasons. Persistence unlocks genuinely long-horizon work that spans days. Auditability is what makes memory safe to use in production — you can see and correct what the agent believes, rather than trusting a black box. Shareability lets a fleet of agents build on each other's knowledge instead of each starting from scratch. This is external memory growing up: the tidy notebook beside the whiteboard becomes a shared, inspectable institution."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Whether an agent can finish a big multi-hour task is rarely a question of model IQ — it's a question of memory discipline. That reframes how you reason about your most ambitious agentic features. If a feature needs the agent to work across a whole codebase or a long session, the binding constraint is context management, and that's where the engineering effort and the risk both live. Asking 'how does this agent manage its context?' is often more predictive of success than 'which model does it use?'.",
        "The comprehension-bottleneck insight reshapes where you spend review time as systems grow. If reading and understanding code is the real ceiling, then your scarce expert attention should be aimed at comprehension-heavy work — reviewing changes to gnarly legacy code, validating that an agent actually understood the system it touched — not at rubber-stamping freshly generated boilerplate. As the codebase scales, that's where the leverage and the danger both concentrate."
      ]
    },
    "caseStudy": {
      "title": "Claude plays Pokémon: thousands of steps held together by notes outside the window",
      "body": [
        "Anthropic ran an agent built to play Pokémon — a game that demands thousands of sequential decisions across hours of play, far more than any context window could hold. The naive expectation is that the agent would lose the plot the moment its window filled and it had to be reset. Instead, it stayed coherent across thousands of game steps and multiple context resets.",
        "The trick wasn't a bigger brain. The agent kept self-generated notes outside its context window — a map of where it had been, a running list of goals, a record of what it had already tried. Every time the window was wiped, it could rebuild its situation from those external notes and carry on as if nothing had happened. It was a vivid demonstration that memory, not raw intelligence, is what unlocks long-horizon tasks. Pair it with the SWE-AGI/MoonBit finding that comprehension overtakes generation at scale, and the same theme rings through: what an agent can remember and understand matters more than how clever it is in any single moment."
      ],
      "bridge": "The agent's intelligence never changed between resets — its notebook did all the work. Long-horizon agents live or die on memory discipline, not on model IQ."
    },
    "takeaways": [
      "More context isn't better: as the window fills, the model degrades — that's context rot.",
      "Compaction, external memory, and just-in-time retrieval are what let agents run for hours.",
      "At scale, reading and understanding code beats writing it as the real bottleneck."
    ],
    "knowledgeCheck": [
      {
        "q": "What is 'context rot'?",
        "options": [
          {
            "text": "A bug where the model forgets its system prompt",
            "correct": false
          },
          {
            "text": "The model getting worse as its context window fills with history",
            "correct": true
          },
          {
            "text": "Old training data making the model outdated",
            "correct": false
          }
        ],
        "feedback": "Correct — context rot is the degradation in performance as a model's finite attention gets stretched across an ever-fuller window."
      },
      {
        "q": "How did the 'Claude plays Pokémon' agent stay coherent across thousands of steps and context resets?",
        "options": [
          {
            "text": "It used a model with an unlimited context window",
            "correct": false
          },
          {
            "text": "It kept self-generated notes (map, goals, attempts) outside the context window",
            "correct": true
          },
          {
            "text": "It restarted the game from scratch after each reset",
            "correct": false
          }
        ],
        "feedback": "Right — external memory, not raw intelligence, let it rebuild its situation after every reset and keep going."
      }
    ],
    "glossaryTerms": [
      "context-engineering",
      "context-window",
      "context-rot",
      "compaction",
      "external-memory",
      "just-in-time-retrieval"
    ],
    "sources": [
      {
        "label": "Anthropic — Effective Context Engineering for AI Agents",
        "url": "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents"
      },
      {
        "label": "SWE-AGI / MoonBit spec-driven construction (arXiv 2602.09447)",
        "url": "https://arxiv.org/abs/2602.09447"
      },
      {
        "label": "Wire — Anthropic Managed Agents Memory & Context Engineering",
        "url": "https://usewire.io/blog/anthropic-managed-agents-memory-context-engineering/"
      },
      {
        "label": "Context rot research (arXiv 2510.12635)",
        "url": "https://arxiv.org/pdf/2510.12635"
      }
    ]
  },
  "eng-m3-l4": {
    "id": "eng-m3-l4",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 4,
    "title": "Hiring Help for Your House: Coding Agents in the Wild",
    "estMinutes": 9,
    "coreIdea": "The coding agents you'll actually use split into two camps — synchronous ones you steer in real time and asynchronous ones that go away and return finished work — and picking the wrong type costs more than picking a slightly weaker model.",
    "plainEnglish": [
      "Claude Code, Devin, Codex, Jules, and SWE-agent are the names you'll encounter when you actually start using, buying, or competing with coding agents. They differ in model quality, but the difference that matters most day to day is architectural — how you work with them.",
      "There are two camps. Synchronous agents are like a co-pilot sitting in your terminal: you watch them work, redirect them, and approve steps in real time. Asynchronous agents are cloud workers: you hand them a task, they disappear to a remote machine, and they come back later with a finished pull request for you to inspect.",
      "Choosing the wrong type for your workflow is a more expensive mistake than choosing a slightly less capable model. A synchronous tool forced into a fire-and-forget workflow wastes everyone's attention; an asynchronous tool used for work that needs constant steering produces confident garbage. Most strong teams in 2026 run one of each in parallel."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think about hiring help for your house. A synchronous agent like Claude Code is the contractor working right beside you: you're in the room, watching them swing the hammer, saying 'actually, move that left' as they go, approving each step. You get tight control and instant correction, but it costs your attention — you have to be there.",
        "An asynchronous agent like Jules is the contractor you text a job to. They head off to their own workshop, do the work on their own time, and come back with a finished cabinet for you to inspect and accept or reject. You get your time back while they work, but you give up the ability to redirect mid-job. Same skill set, completely different management style — and the right choice depends entirely on how much you want to be in the room."
      ]
    },
    "deepSections": [
      {
        "title": "Synchronous (autonomy OVER the process) vs asynchronous (autonomy FROM it)",
        "teaser": "two opposite meanings of 'autonomy'",
        "body": [
          "The cleanest way to hold the distinction is which kind of autonomy you're getting. A synchronous agent gives you autonomy OVER the process: you stay in control, steering and approving as it works, with the agent as a fast pair of hands. An asynchronous agent gives you autonomy FROM the process: it frees you from the work entirely while it runs elsewhere, and you only re-engage to judge the result.",
          "This shapes everything downstream. Synchronous agents fit exploratory, ambiguous work where you'll want to course-correct — debugging something gnarly, designing as you go. Asynchronous agents fit well-specified, self-contained jobs you can describe once and walk away from — 'fix all the failing lint errors,' 'implement this clearly-scoped ticket.' Match the autonomy style to how much steering the task actually needs."
        ]
      },
      {
        "title": "The product landscape: Devin, SWE-agent, Claude Code, Codex, Jules",
        "teaser": "who's who in the 2026 coding-agent zoo",
        "body": [
          "Cognition's Devin (launched March 2024) defined the autonomous-coding-agent category — the cloud worker that takes a task and returns a result. SWE-agent is the Princeton research system that pioneered the agent-computer interface and remains a reference point for the field. Claude Code is Anthropic's terminal-based agent, the archetypal synchronous co-pilot you steer in real time. Codex (OpenAI) and Jules (Google) round out the field, with Jules leaning asynchronous — text it a task, get a pull request back.",
          "The honest 2026 picture is a benchmark matrix, not a single winner: Claude Code leads interactive SWE-bench Verified at around 80.8%, while Codex leads autonomous Terminal-Bench. 'Best agent' is meaningless without naming the job. The survey 'Toward Agentic Software Engineering Beyond Code' (arXiv 2510.19692) maps this whole landscape and frames the deeper shift the field is undergoing."
        ]
      },
      {
        "title": "Why scaffolding/orchestration beats raw model score",
        "teaser": "the harness around the model often matters more than the model",
        "body": [
          "It's tempting to rank agents by the raw intelligence of the model inside them, but that misses where most of the performance comes from. The 'scaffolding' — the tools, the file viewers, the retry logic, the orchestration that decides what the model does next — frequently matters more than a few points of model benchmark score. This is the same lesson as the ACI: a great harness around a good model beats a great model in a bad harness.",
          "That's why two products built on similar underlying models can perform very differently, and why a vendor's claim about their model is only half the story. When you evaluate or build a coding agent, scrutinise the scaffolding — how it manages context, how it recovers from errors, how cleanly it interfaces with the codebase — as much as the model it runs on."
        ]
      },
      {
        "title": "'Programming with trust': vision, values, vocabulary",
        "teaser": "the cultural shift from writing code to delegating it",
        "body": [
          "The arXiv survey 'Toward Agentic Software Engineering Beyond Code' frames the bigger change as a shift to 'programming with trust.' The job of a software engineer increasingly isn't to type every line — it's to delegate work to agents and then trust, verify, and own the result. That demands a new vision of the role, new values around what good work looks like, and a new shared vocabulary for talking about it.",
          "This is more than a tooling change; it's a cultural one. When engineers spend more time directing and reviewing than authoring, what counts as 'a good engineer' shifts toward judgment, clarity of intent, and the discipline of verification. The survey deliberately surveys the field's tools — Jules, Codex, Devin, SWE-agent, AutoCodeRover, Claude Code — in service of describing this larger transition, which the next lessons in this module pick up."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Tool selection here is a genuine product and operations decision, not just a developer-tooling preference. Synchronous versus asynchronous changes your team's whole workflow: where humans sit, how much real-time attention each task consumes, and where the review load lands. A team that standardises on the wrong type for its work will feel the friction in throughput and morale long before it shows up in any benchmark.",
        "In practice, most effective teams run two tools in parallel — an interactive co-pilot for exploratory work and a long-running asynchronous worker for well-specified jobs. Knowing the landscape does double duty: it lets you choose the right tools for your own team, and it lets you position your own product sharply against Devin, Claude Code, Codex, and Jules instead of waving vaguely at 'AI coding.'"
      ]
    },
    "caseStudy": {
      "title": "From Devin's 2024 debut to the 2026 benchmark matrix: 'best agent' depends on the job",
      "body": [
        "When Cognition launched Devin in March 2024, it crystallised a new category: the autonomous coding agent you hand a task and leave alone. The launch set off a wave of competitors and a race that, for a while, looked like a simple contest for 'the best agent.' By the second quarter of 2026, that framing had collapsed under its own evidence. The field matured into a benchmark matrix where the leader changes with the task.",
        "Claude Code leads interactive SWE-bench Verified at roughly 80.8% — the workflow where a human steers in real time. Codex leads autonomous Terminal-Bench — the fire-and-forget workflow. There is no single 'best'; there is only best-for-this-job. The survey 'Toward Agentic Software Engineering Beyond Code' (arXiv 2510.19692) catalogues Jules, Codex, Devin, SWE-agent, AutoCodeRover, and Claude Code precisely to make this point and to frame the field's shift toward 'programming with trust.'"
      ],
      "bridge": "Because the leaderboard flips depending on whether a human is steering, the architectural choice — synchronous or asynchronous — matters more than chasing whichever model tops a single benchmark this month."
    },
    "takeaways": [
      "Coding agents split into synchronous (steer in real time) and asynchronous (returns finished work).",
      "Choosing the wrong architecture for your workflow costs more than a slightly weaker model.",
      "Scaffolding and orchestration often matter more than raw model benchmark score."
    ],
    "knowledgeCheck": [
      {
        "q": "What's the key architectural difference between Claude Code and an asynchronous agent like Jules?",
        "options": [
          {
            "text": "Claude Code uses a smarter model than Jules",
            "correct": false
          },
          {
            "text": "Claude Code is steered in real time; Jules goes away and returns finished work",
            "correct": true
          },
          {
            "text": "Jules only works on smaller codebases",
            "correct": false
          }
        ],
        "feedback": "Correct — the distinction is synchronous (real-time steering) versus asynchronous (fire-and-forget that returns a pull request), not model quality."
      },
      {
        "q": "Why is there no single 'best coding agent' by Q2 2026?",
        "options": [
          {
            "text": "All agents now score identically on every benchmark",
            "correct": false
          },
          {
            "text": "The leader changes with the task — Claude Code leads interactive, Codex leads autonomous",
            "correct": true
          },
          {
            "text": "Benchmarks have been abandoned by the industry",
            "correct": false
          }
        ],
        "feedback": "Right — 'best' depends entirely on the job, which is exactly why the architectural fit to your workflow matters most."
      }
    ],
    "glossaryTerms": [
      "synchronous-agent",
      "asynchronous-agent",
      "coding-agent",
      "scaffolding",
      "swe-bench",
      "programming-with-trust"
    ],
    "sources": [
      {
        "label": "Digital Applied — Claude Code vs Codex vs Jules Q2 2026 Matrix",
        "url": "https://www.digitalapplied.com/blog/claude-code-vs-codex-vs-jules-q2-2026-matrix"
      },
      {
        "label": "Toward Agentic SE Beyond Code (arXiv 2510.19692)",
        "url": "https://arxiv.org/abs/2510.19692"
      },
      {
        "label": "Developers Digest — Codex vs Claude Code (April 2026)",
        "url": "https://www.developersdigest.tech/blog/codex-vs-claude-code-april-2026"
      },
      {
        "label": "Artificial Analysis — Coding Agents Leaderboard",
        "url": "https://artificialanalysis.ai/agents/coding"
      }
    ]
  },
  "eng-m3-l5": {
    "id": "eng-m3-l5",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 5,
    "title": "Self-Driving Levels for Code: The Autonomy Dial",
    "estMinutes": 9,
    "coreIdea": "Agent autonomy is a dial, not a switch, and the counterintuitive truth is that more autonomy is not better — conditional autonomy with a human ready to step in is the safe production default.",
    "plainEnglish": [
      "We talk about agents being 'autonomous' as if it's on or off. It isn't. Autonomy is a dial, and the clearest way to picture it is the levels used for self-driving cars — from cruise control where you steer everything, up to a car with no steering wheel at all. The same spectrum applies to coding agents, and it gives teams a shared language for how much rope to give an agent and where the human sits.",
      "The level you pick decides where humans review, how fast you ship, and how much risk you're carrying. And here's the lesson that surprises people: higher autonomy is not automatically better. Cranking the dial to maximum on a messy real codebase invites silent drift — the agent quietly doing the wrong thing — and human skill atrophy, where the team forgets how the system works because they stopped looking.",
      "The recommended production default in 2026 is Level 3: conditional autonomy. The agent handles whole tasks on its own, but a human stays alert and ready to grab the wheel. Pushing to Level 4 or 5 without strong testing and isolation is, as practitioners put it, like putting a middle-schooler in the CEO chair."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Borrow the self-driving car levels directly. Level 1 is cruise control: the car holds your speed, but you steer everything and your hands never leave the wheel. Level 3 is a car that can drive the highway on its own while you stay alert in the driver's seat, ready to take over the instant it asks. Level 5 is a car with no steering wheel — it handles everything, everywhere, and you're just a passenger.",
        "The catch is the same for cars and for code: Level 5 isn't safe everywhere yet. A car that drives itself flawlessly on a sunny highway can still be lethal on a chaotic, unmapped backstreet. A Level 5 coding agent set loose on a sprawling, messy, real-world codebase is the same kind of danger — confident, unsupervised, and capable of quietly steering off a cliff. Putting 'a middle-schooler in the CEO chair' is how one practitioner described it, and the image sticks."
      ]
    },
    "deepSections": [
      {
        "title": "L1 Assistive → L2 Pair → L3 Task Agent → L4 Teammate → L5 'avalanche'",
        "teaser": "the five rungs of the coding-autonomy ladder",
        "body": [
          "Level 1, Assistive, is autocomplete and suggestions — the human writes, the agent helps. Level 2, Pair, is a true pair-programmer working alongside you in real time, like the synchronous co-pilots from the last lesson. Level 3, Task Agent, is the agent taking a whole bounded task end to end while you supervise — write the feature, fix the bug, with you reviewing the result. Level 4, Teammate, is the agent picking up work off a backlog and handling it with minimal direction. Level 5 is full autonomy with no human in the loop — sometimes nicknamed the 'avalanche' level because of how fast unsupervised changes can pile up and bury you.",
          "The ladder isn't a goal to climb as high as possible — it's a vocabulary for choosing deliberately. Each rung trades human attention for speed, and each rung raises the stakes if something goes wrong. The right level for a task is a decision, not a default."
        ]
      },
      {
        "title": "The human role shift: Driver → Reviewer → Change Owner → Auditor → Consumer",
        "teaser": "as the dial turns, your job changes shape",
        "body": [
          "What's quietly profound about the autonomy ladder is that it redefines the human's job at every rung. At Level 1 you're the Driver, hands on the wheel for everything. By Level 3 you're the Reviewer, checking the agent's completed work rather than producing it. At Level 4 you become the Change Owner and Auditor — accountable for changes you didn't write, responsible for spot-checking a body of work you can no longer read line by line. At Level 5 you're merely the Consumer of output you didn't supervise at all.",
          "This shift is the heart of why autonomy is a product decision and not just a technical one. Moving up the dial doesn't remove the human — it transforms what they do, and it concentrates their remaining attention on review and accountability. A team that climbs the ladder without consciously redesigning these roles ends up with no one truly owning the agent's changes, which is exactly how silent drift becomes a silent disaster."
        ]
      },
      {
        "title": "Why L3 is the sensible default and the risks of over-autonomy",
        "teaser": "conditional autonomy, and the two failure modes above it",
        "body": [
          "Level 3 — conditional autonomy, human ready to take the wheel — is the sweet spot for most production work because it captures most of the speed of automation while keeping a competent human in the loop to catch the wrong turns. It's the same reason Level 3 is where self-driving cars actually ship: enough autonomy to be useful, enough supervision to be safe.",
          "Push past it carelessly and you meet two failure modes. The first is silent drift: a highly autonomous agent making changes no one closely reviews, slowly steering the codebase or the product somewhere no one intended, with the damage invisible until it's large. The second is human skill atrophy: when the team stops doing the work, it stops understanding the system, until no one is left who can tell whether the agent is right. Both are reasons to match autonomy to how clearly the task is defined and verifiable — not to how capable the model happens to be."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "The autonomy level is itself a product decision, and it's one you'll make for every agentic feature you ship. It directly sets where humans review, how fast the team can move, and how much risk the organisation absorbs. Treating it as a dial you tune deliberately — rather than a capability you maximise — is one of the most important mental shifts in agentic product work.",
        "The discipline is to match autonomy to the task, not to the model. A narrow, clearly-defined, easily-verified task (like fixing a failing test) can safely run at high autonomy. A sprawling, ambiguous change to critical code should stay at Level 3 no matter how impressive the model is. Higher isn't better; appropriate is better. The PM who internalises this stops asking 'how autonomous can we make it?' and starts asking 'how autonomous should this specific task be?'"
      ]
    },
    "caseStudy": {
      "title": "Uber's FlakyGuard vs Cursor's million-line push: bounded high autonomy beats the frontier",
      "body": [
        "Uber built FlakyGuard, an agent that hunts down 'flaky' tests — tests that pass and fail unpredictably — and fixes them autonomously, pulling work straight off a backlog with no human assigning each job. That's Level-4-style autonomy, and it works precisely because the task is narrow and verifiable: a flaky test is easy to identify, and a fix either makes it reliable or doesn't. The bounds make the high autonomy safe. The agent can be trusted to run on its own because the blast radius and the success criteria are both tightly defined.",
        "Contrast that with Cursor's ambitious 'FastRender' push, a million-line multi-agent effort operating near the Level 5 frontier — vastly more autonomy aimed at vastly more open-ended work. The comparison isn't about which company is better; it's the whole point of the lesson. Bounded, verifiable autonomy at Level 4 can be genuinely production-safe, while pushing the dial to the frontier on sprawling, hard-to-verify work is where the silent-drift and skill-atrophy risks bite hardest. Autonomy should follow the shape of the task, not the ambition of the team."
      ],
      "bridge": "FlakyGuard is safe at high autonomy because its task is narrow and checkable; the same dial setting on open-ended work would be reckless. Match the level to the task, not to the model."
    },
    "takeaways": [
      "Autonomy is a five-level dial, not an on/off switch — and the human's role changes at each level.",
      "Higher autonomy isn't better; Level 3 (conditional, human ready to take over) is the production default.",
      "Over-autonomy invites silent drift and skill atrophy — match the level to how verifiable the task is."
    ],
    "knowledgeCheck": [
      {
        "q": "What's the recommended production default level of agent autonomy in 2026?",
        "options": [
          {
            "text": "Level 5 — full autonomy, no human in the loop",
            "correct": false
          },
          {
            "text": "Level 3 — conditional autonomy, with a human alert and ready to take over",
            "correct": true
          },
          {
            "text": "Level 1 — assistive autocomplete only",
            "correct": false
          }
        ],
        "feedback": "Correct — Level 3 captures most of the speed while keeping a competent human ready to catch wrong turns."
      },
      {
        "q": "Why is Uber's FlakyGuard safe to run at high autonomy when many agents aren't?",
        "options": [
          {
            "text": "It uses a far more advanced model than other agents",
            "correct": false
          },
          {
            "text": "Its task is narrow and verifiable, so the blast radius and success criteria are tightly bounded",
            "correct": true
          },
          {
            "text": "A human approves every single change it makes",
            "correct": false
          }
        ],
        "feedback": "Right — bounded, easily-verified tasks make high autonomy safe; it's the task shape, not the model, that earns the trust."
      }
    ],
    "glossaryTerms": [
      "autonomy-levels",
      "conditional-autonomy",
      "silent-drift",
      "skill-atrophy",
      "agent"
    ],
    "sources": [
      {
        "label": "Swarmia — Five Levels of AI Agent Autonomy",
        "url": "https://www.swarmia.com/blog/five-levels-ai-agent-autonomy/"
      },
      {
        "label": "ASDLC — Levels of Autonomy",
        "url": "https://asdlc.io/concepts/levels-of-autonomy/"
      },
      {
        "label": "Cloud Security Alliance — Levels of Autonomy (Jan 2026)",
        "url": "https://cloudsecurityalliance.org/blog/2026/01/28/levels-of-autonomy"
      },
      {
        "label": "MindStudio — Agentic Coding Levels Explained",
        "url": "https://www.mindstudio.ai/blog/agentic-coding-levels-explained"
      }
    ]
  },
  "eng-m3-l6": {
    "id": "eng-m3-l6",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 6,
    "title": "From Hand-Drawn to CGI: The Agentic SDLC (A-SDLC)",
    "estMinutes": 9,
    "coreIdea": "The whole software lifecycle is being rebuilt around agents executing tasks between human checkpoints, and the bottleneck is shifting from writing code to reviewing it.",
    "plainEnglish": [
      "Everything so far has been about individual agents. This lesson zooms out to the organisational shift a product owner has to understand: the entire software development lifecycle — planning, coding, review, shipping, operating — is being rebuilt around agents that execute whole tasks on their own between human checkpoints. This rebuilt lifecycle has a name: the Agentic SDLC, or A-SDLC.",
      "The work doesn't disappear. It relocates. When agents write most of the code, fewer people spend their day authoring lines and more people spend it setting intent, reviewing output, and catching the thing that 'runs correctly but does the wrong thing.' The bottleneck moves from production to review.",
      "This is the bridge between the engineering and product-leadership halves of your education. The economics flip: as agents make generating code cheap, expert human review time becomes the scarce resource that actually limits how fast you can ship. A product owner who plans capacity around lines of code is solving last year's problem."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a film studio moving from hand-drawn animation to a modern CGI pipeline. In the old world, armies of artists drew each frame by hand — production was the bottleneck, and more output meant more people drawing. In the new world, the machine renders the frames. But the work didn't vanish: it relocated. Now you need more directors and reviewers — people who set the creative intent, check that each rendered scene is right, and catch the shot that 'renders perfectly but tells the wrong story.'",
        "The Agentic SDLC is exactly that transition for software. Fewer people write each line; more people direct and review. And the most dangerous failure changes character too. A hand-drawn mistake is obvious — a wonky frame. A CGI mistake can be a scene that renders flawlessly and is technically correct in every pixel, yet tells the wrong story entirely. That's the failure mode review now exists to catch, and why review becomes the heart of the pipeline."
      ]
    },
    "deepSections": [
      {
        "title": "The six-layer reference architecture for agentic SE",
        "teaser": "a map of how an agentic engineering org is built",
        "body": [
          "The 2026 arXiv survey 'Agentic Software Engineering: A Six-Layer Reference Architecture' (arXiv 2604.26275) gives the field its first shared blueprint. Rather than treating agentic engineering as a pile of disconnected tools, it lays out the lifecycle as stacked layers — from the foundation models at the bottom, up through tools and context management, orchestration, the agents themselves, the human-supervision and governance layer, and the overall workflow that ties planning, coding, review, shipping, and operating together.",
          "A reference architecture matters because it turns hand-waving into a checklist. When you're assembling or evaluating an agentic engineering capability, the six layers tell you what you must have and where your gaps are: Do you have the right tools layer? Is context being managed? Where exactly does human supervision sit? It's the difference between 'we use AI for coding' and a deliberate, inspectable system."
        ]
      },
      {
        "title": "From 'code generation' to 'delegated execution under supervision'",
        "teaser": "the unit of work stops being a line and becomes a task",
        "body": [
          "The framing of what agents do has matured. Early on, the story was 'code generation' — the AI writes some code, a human pastes it in. The A-SDLC reframes this as 'delegated execution under supervision': you hand the agent a whole task, it executes the task autonomously, and a human supervises the result at a checkpoint. The unit of work shifts from a line or a snippet to a complete, bounded task.",
          "That reframe changes how you think about everything downstream. If the agent owns whole tasks, then your job is to define tasks crisply, place the supervision checkpoints well, and design how humans verify completed work. The skill of the organisation moves from typing speed to delegation discipline — clear intent in, rigorous review out."
        ]
      },
      {
        "title": "The 'economics of attention': review as the scarce resource",
        "teaser": "when code gets cheap, expert eyeballs become the constraint",
        "body": [
          "The survey names the central insight bluntly: the 'economics of attention.' As agents get cheaper and faster at producing code, the thing in genuinely short supply is expert human review time. You can generate ten pull requests in an hour, but you still only have so many senior engineers who can competently check that those changes are correct, safe, and actually solve the problem. Review becomes the binding constraint on shipping — the true bottleneck.",
          "This is a profound reversal of decades of software economics, where writing code was the expensive, slow part. When generation becomes nearly free, every plan, every staffing decision, every tool investment should orient around the new scarce resource. The question stops being 'how do we write more code faster?' and becomes 'how do we review more effectively, so review doesn't choke everything the agents produce?'"
        ]
      },
      {
        "title": "Five open problems: evaluation, governance, technical debt, skill redistribution, economics",
        "teaser": "the honest list of what's still unsolved",
        "body": [
          "The survey is candid that this transition is far from finished, and it names five open problems. Evaluation: how do we even measure whether an agentic engineering system is good? Governance: who is accountable when an agent ships a bad change, and how do we control what agents are allowed to do? Technical debt: agents can generate plausible code fast, which can quietly pile up debt no human chose to take on. Skill redistribution: as authoring shrinks and reviewing grows, how do teams and careers reshape? And economics: how do the costs and value actually pencil out at scale?",
          "These aren't footnotes — they're the live frontier a product owner steps into. Naming them is what separates a clear-eyed leader from a hype-chaser. You won't have neat answers to all five, but knowing they're the open questions lets you plan around them: instrument for evaluation, build governance in early, watch for silent technical debt, invest in your team's reviewing skills, and keep an eye on whether the economics actually work."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This is the theme a product manager has to own end to end, because it changes team structure, review economics, and what 'engineering work' even means. The Reviewer and Change-Owner — the human who verifies and takes accountability for agent-produced work — becomes the new core role, not a side duty. Organising your team around that reality, rather than around who writes the most code, is the central planning challenge of agentic engineering.",
        "Concretely: if review is now your scarce resource, you plan capacity around it. You invest in review tooling, you protect your senior engineers' review time the way you'd protect any bottleneck, and you measure throughput in terms of how much work you can safely verify and ship — not how many lines get generated. Every one of the five open problems lands on your desk eventually, and treating them as your problems rather than the engineers' problems is what makes you the product leader this shift demands."
      ]
    },
    "caseStudy": {
      "title": "From 1.96% to 78.4%: SWE-bench's three-year climb and the attention economy it created",
      "body": [
        "The 2026 survey 'Agentic Software Engineering: A Six-Layer Reference Architecture' (arXiv 2604.26275) documents a number that captures the whole shift in one line. On SWE-bench Verified — the benchmark of fixing real, verified open-source bugs — the field went from 1.96% in October 2023 to 78.4% by April 2026. In about two and a half years, agents went from solving roughly one in fifty real bugs to solving nearly four in five. That is not an incremental improvement; it is a change in what's possible.",
        "But the survey's sharpest contribution isn't the benchmark — it's what the benchmark implies. As agents got dramatically better and cheaper at producing fixes, the constraint on actually shipping those fixes moved entirely to human review. The paper names this the 'economics of attention': expert review time is now the binding resource. It also lays out the six-layer A-SDLC architecture and the five open problems, giving leaders a map for an org that has to be rebuilt around review rather than around authoring."
      ],
      "bridge": "When agents leap from solving 2% to 78% of real bugs, the work doesn't vanish — it moves to whoever reviews all that output, which is exactly why review becomes the role and the resource a product owner must plan around."
    },
    "takeaways": [
      "The whole software lifecycle is being rebuilt around agents executing tasks between human checkpoints.",
      "The bottleneck moves from writing code to reviewing it — the 'economics of attention.'",
      "Plan capacity, tooling, and team roles around review as your scarce resource, not lines of code."
    ],
    "knowledgeCheck": [
      {
        "q": "In the Agentic SDLC, where does the bottleneck move as agents get better and cheaper at writing code?",
        "options": [
          {
            "text": "To writing more code faster",
            "correct": false
          },
          {
            "text": "To expert human review time — the 'economics of attention'",
            "correct": true
          },
          {
            "text": "To buying enough GPU capacity",
            "correct": false
          }
        ],
        "feedback": "Correct — when generation gets cheap, expert review becomes the scarce resource that limits how fast you can safely ship."
      },
      {
        "q": "What does the SWE-bench Verified jump from 1.96% (Oct 2023) to 78.4% (Apr 2026) primarily demonstrate?",
        "options": [
          {
            "text": "Benchmarks have become too easy to be meaningful",
            "correct": false
          },
          {
            "text": "Agents went from solving almost no real bugs to solving most of them, shifting the constraint to review",
            "correct": true
          },
          {
            "text": "Human engineers are no longer needed in software teams",
            "correct": false
          }
        ],
        "feedback": "Right — the leap shows agentic generation is now highly capable, which is exactly why review, not generation, becomes the binding constraint."
      }
    ],
    "glossaryTerms": [
      "agentic-sdlc",
      "economics-of-attention",
      "reference-architecture",
      "delegated-execution",
      "swe-bench",
      "change-owner"
    ],
    "sources": [
      {
        "label": "Agentic SE: A Six-Layer Reference Architecture (arXiv 2604.26275)",
        "url": "https://arxiv.org/abs/2604.26275"
      },
      {
        "label": "CodeRabbit — Guide to the Agentic SDLC",
        "url": "https://www.coderabbit.ai/guides/agentic-sdlc"
      },
      {
        "label": "Augment Code — Agentic SDLC Guide",
        "url": "https://www.augmentcode.com/guides/agentic-sdlc"
      },
      {
        "label": "CIO — How Agentic AI Will Reshape Engineering Workflows in 2026",
        "url": "https://www.cio.com/article/4134741/how-agentic-ai-will-reshape-engineering-workflows-in-2026.html"
      }
    ]
  },
  "eng-m3-l7": {
    "id": "eng-m3-l7",
    "trackId": "engineering",
    "moduleId": "eng-m3",
    "order": 7,
    "title": "The Newsroom on a Breaking Story: Multi-Agent Systems",
    "estMinutes": 9,
    "coreIdea": "When one agent hits its limits, you can split work across multiple specialized agents with a coordinator — gaining parallelism and focus but paying roughly 15 times the token cost.",
    "plainEnglish": [
      "A single agent eventually hits a ceiling: its context window fills, or a task is just too broad for one mind to hold. The next architectural move is to split the work across several agents — an orchestrator (the lead) that plans and delegates, and a set of worker sub-agents that each tackle one piece with its own clean, uncluttered context.",
      "The upside is real: the workers run in parallel, so you get speed, and each one stays focused on a single thread without its context getting muddied by everyone else's. It's separation of concerns for AI. The catch is brutal — running several agents instead of one costs roughly 15 times the tokens. Three reporters means three salaries.",
      "So the entire skill is knowing when that 15x bill is worth paying. For broad, parallelizable work like deep research across many sources, it can win decisively. For simple tasks, or tightly-coupled ones where the pieces depend heavily on each other, it's expensive overkill. Multi-agent is the most powerful and the most over-applied architecture in the toolkit."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a newsroom when a big story breaks. The editor — the orchestrator — doesn't personally chase every lead. They dispatch three reporters at once: one to the courthouse, one to the witnesses, one to the official statement. Each reporter fills their own notebook from their own source, undistracted by the others. Then they bring their findings back, and the editor weaves the three accounts into one coherent article. It's faster and deeper than a single journalist trying to do it all alone.",
        "But notice what just happened to the budget. You're now paying three reporters' salaries instead of one, plus the editor's time to coordinate and synthesise. If the story is genuinely big and sprawling, that's money well spent — three sources in parallel beats one source serially. If the 'story' is a quick weather update, sending three reporters is absurd. The newsroom only scales up the team when the depth of the story justifies the payroll, and multi-agent systems work exactly the same way."
      ]
    },
    "deepSections": [
      {
        "title": "Orchestrator-worker: lead plans, workers filter and condense",
        "teaser": "one mind delegates, many minds dig and compress",
        "body": [
          "The dominant pattern is orchestrator-worker. A lead agent receives the goal and breaks it into pieces — 'investigate these three threads' — then spawns a worker sub-agent for each. Crucially, the workers don't just fetch raw information; their job is to filter and condense. Each worker chases its thread through potentially huge amounts of material and returns a tight, distilled summary to the lead. The lead never sees the raw firehose; it sees three clean digests it can synthesise.",
          "This division of labour is what makes the architecture powerful. The lead stays at a high altitude, planning and integrating, while the workers do the heavy, context-hungry digging in parallel. The filtering step is essential — if workers returned everything they read, the lead's context would flood instantly and you'd be back to the context-rot problem from earlier in this module."
        ]
      },
      {
        "title": "Why each sub-agent needs its own clean context",
        "teaser": "separate whiteboards so no one drowns in everyone else's notes",
        "body": [
          "Recall the whiteboard from the context-engineering lesson. A single agent doing a broad task fills one whiteboard with everything from every thread at once, and drowns. The multi-agent answer is to give each worker its own fresh whiteboard. The courthouse reporter's notes never clutter the witness reporter's board. Each sub-agent reasons clearly within its own focused context, which is precisely why the architecture can handle breadth a single agent can't.",
          "This is the deep reason multi-agent exists at all — it's not really about having 'more brains,' it's about having more clean context windows working in parallel. The orchestrator's small, tidy context holds the plan and the distilled summaries; each worker's separate context holds the messy details of just one thread. Separation of context is the whole trick."
        ]
      },
      {
        "title": "The ~15x cost and when NOT to use multi-agent",
        "teaser": "the price tag and the tasks that don't justify it",
        "body": [
          "Anthropic reported that their multi-agent research system burned roughly 15 times the tokens of a single chat interaction. That's the headline cost, and it's the discipline-forcing number. Multi-agent is the most expensive architecture you can choose, so the default should be skepticism: is this task actually broad and parallelizable enough to earn a 15x bill?",
          "It usually isn't worth it for two kinds of work. Simple tasks don't need a team — one agent handles them fine, and the coordination overhead is pure waste. Tightly-coupled tasks, where each piece depends heavily on the others, fight the architecture: the workers can't run independently because they constantly need each other's in-progress results, so you lose the parallelism that justified the cost while still paying for it. Multi-agent shines for broad research where threads are genuinely independent; it's a trap for everything else."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Multi-agent is simultaneously the most expensive architecture in your toolkit and the most over-applied — a dangerous combination. Engineers and vendors are drawn to it because it sounds sophisticated, and it's easy to reach for when a simpler workflow would do. Knowing the roughly 15x token cost gives you the spine to say no: for simple or tightly-coupled tasks, multi-agent is burning money for a result a single agent would deliver more cheaply.",
        "The flip side is knowing when to say yes. When a task is genuinely broad and parallelizable — deep research sweeping many sources, exploring several independent options at once — the depth a multi-agent system reaches can decisively justify the bill. The PM's job is to hold both truths: this is a premium architecture, and premium is occasionally exactly what the problem deserves. That judgment, applied case by case, is the whole skill."
      ]
    },
    "caseStudy": {
      "title": "Anthropic's Research feature: 90.2% better than a single agent — at 15x the cost",
      "body": [
        "In April 2025, Anthropic shipped a Research feature built on a multi-agent architecture. A lead agent receives the user's research question and spawns parallel sub-agents, each given its own context window and sent to chase one thread of the question independently. Each sub-agent digs through its sources, condenses what it finds, and reports a tight summary back to the lead, which synthesises everything into a final answer. It's the newsroom, implemented.",
        "On Anthropic's internal evaluations, this multi-agent system outperformed single-agent Claude Opus 4 by about 90.2% — a decisive win on broad, open-ended research where many independent threads can be pursued at once. But the same write-up was refreshingly honest about the price: it consumed roughly 15 times the tokens of an ordinary chat interaction. That pairing — a large performance gain on the right kind of task, bought at a steep and explicit cost — is the canonical real-world example of the multi-agent power-versus-price trade-off."
      ],
      "bridge": "A 90% quality gain that costs 15x only makes sense for broad, parallelizable work like research — which is exactly why the architecture is a triumph there and a money-pit for simple or tightly-coupled tasks."
    },
    "takeaways": [
      "Multi-agent splits work across an orchestrator and worker sub-agents, each with its own clean context.",
      "The upside is parallelism and focus; the cost is roughly 15x the tokens of a single agent.",
      "Use it for broad, parallelizable research — not for simple or tightly-coupled tasks."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the main trade-off of a multi-agent system versus a single agent?",
        "options": [
          {
            "text": "It's slower but cheaper to run",
            "correct": false
          },
          {
            "text": "It gains parallelism and focus but costs roughly 15x the tokens",
            "correct": true
          },
          {
            "text": "It uses a smaller model so it's less capable",
            "correct": false
          }
        ],
        "feedback": "Correct — multi-agent buys parallelism and clean separate contexts at roughly 15 times the token cost."
      },
      {
        "q": "For which kind of task is a multi-agent system usually the WRONG choice?",
        "options": [
          {
            "text": "Broad research that sweeps many independent sources",
            "correct": false
          },
          {
            "text": "A simple or tightly-coupled task where pieces depend heavily on each other",
            "correct": true
          },
          {
            "text": "Exploring several independent options in parallel",
            "correct": false
          }
        ],
        "feedback": "Right — tightly-coupled or simple tasks can't exploit parallelism, so you pay the 15x cost without the benefit."
      }
    ],
    "glossaryTerms": [
      "multi-agent-system",
      "orchestrator-worker",
      "sub-agent",
      "token",
      "context-window"
    ],
    "sources": [
      {
        "label": "Anthropic — How We Built a Multi-Agent Research System",
        "url": "https://www.anthropic.com/engineering/multi-agent-research-system"
      },
      {
        "label": "ByteByteGo — How Anthropic Built a Multi-Agent System",
        "url": "https://blog.bytebytego.com/p/how-anthropic-built-a-multi-agent"
      },
      {
        "label": "The AI Engineer — How Anthropic Built Multi-Agent Deep Research",
        "url": "https://theaiengineer.substack.com/p/how-anthropic-built-multi-agent-deep"
      },
      {
        "label": "ZenML — Building a Multi-Agent Research System",
        "url": "https://www.zenml.io/llmops-database/building-a-multi-agent-research-system-for-complex-information-tasks"
      }
    ]
  }
}
