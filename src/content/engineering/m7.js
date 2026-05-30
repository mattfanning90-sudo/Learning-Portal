// Module 7 — The Product Owner’s Edge
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m7-l1": {
    "id": "eng-m7-l1",
    "trackId": "engineering",
    "moduleId": "eng-m7",
    "order": 1,
    "title": "The New Teammate: How Humans and AI Actually Collaborate",
    "estMinutes": 9,
    "coreIdea": "AI coding agents are now real co-workers who produce far more first drafts than any human, but those drafts get rejected more often and tend to be the simpler work — so humans shift from writing to directing and reviewing.",
    "plainEnglish": [
      "There is a story people like to tell about AI in software: that it is autocomplete on steroids, a fancy suggestion engine. That story is already out of date. By 2025, coding agents like OpenAI Codex, Devin, GitHub Copilot, Cursor, and Claude Code were opening their own pull requests — proposing real, whole changes to real codebases — and a human was deciding whether to accept them. That is not autocomplete. That is a teammate.",
      "But it is a very particular kind of teammate, and the honest data is more interesting than the hype. When researchers studied hundreds of thousands of real human-and-AI pull requests, a clear shape emerged. The AI teammate is astonishingly fast and tireless: one developer submitted as many code changes in three days as they previously had in three years. Yet its changes get accepted less often than a human's, and the work it does is structurally simpler. It is brilliant at volume and at the well-defined task, and weaker at the gnarly, judgement-heavy change.",
      "This reshuffles who does what on the team. The human stops being the person who types the most code and becomes the person who decides what is good enough to keep. The bottleneck moves from writing to reviewing. If you lead a team like this, your job is to get that hand-off right — because the team's real throughput depends on the review step, not on the AI simply doing more."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a junior teammate who never sleeps, never gets bored, and fires off ten times more first drafts than anyone else on the team. Hand them a clear, bounded task — 'rename this everywhere', 'add a test for this function', 'wire up this endpoint' — and a draft lands on your desk almost instantly. They are a force of nature on volume. But here is the catch: their drafts get sent back for revision more often than a senior's, and the work they reach for first is usually the tidy, well-defined stuff rather than the messy architectural call that needs taste and context.",
        "So the senior humans on the team quietly change jobs. They stop being the fastest typists in the building and become directors and editors. Their day is now about framing the task crisply, reading the incoming drafts with a sharp eye, and deciding what ships. The team does not get faster because the junior produces more — it gets faster only if the seniors can review those drafts well and quickly. Pile up more drafts than your editors can read, and you have not built a faster team; you have built a bigger inbox."
      ]
    },
    "deepSections": [
      {
        "title": "What the AIDev data actually shows: speed up, acceptance down, complexity down",
        "teaser": "456,000 real pull requests, and a very honest picture",
        "body": [
          "In 2025, Hao Li, Haoxiang Zhang and Ahmed E. Hassan released the AIDev dataset alongside a paper called 'The Rise of AI Teammates in Software Engineering.' They analysed over 456,000 pull requests from five autonomous coding agents — Codex, Devin, Copilot, Cursor, and Claude Code — across more than 61,000 repositories. This is not a demo or a vendor benchmark; it is what AI teammates actually did out in the wild, on real projects, with real humans deciding whether to merge their work.",
          "Three findings stand out and they refuse to be spun into a simple 'AI is amazing' headline. First, speed: agents are dramatically faster than humans, with the famous example of one developer shipping as many PRs in three days as in the prior three years. Second, acceptance: despite that speed, AI pull requests are accepted less frequently than human ones — a trust-and-utility gap, not a speed gap. Third, complexity: measured by code-complexity metrics, the AI's changes are structurally simpler than human-authored ones. Put together, the profile is 'lots of simple work, fast, with a higher rejection rate.' That is a genuinely useful teammate — but only if you plan around that exact profile instead of pretending it is a senior engineer in a box."
        ]
      },
      {
        "title": "The human-as-reviewer/change-owner role",
        "teaser": "you stopped writing the code and started owning the decision",
        "body": [
          "When the AI writes the first draft, the most valuable human in the loop is no longer the author — it is the reviewer and change-owner. Reviewing an agent's multi-file change is a different skill from reviewing a colleague's. You are not just reading a diff; you are reconstructing what the change is supposed to do, checking it against context the agent may not have had, and deciding whether you are willing to put your name on it when it goes to production. The CodeRabbit framing of the agentic SDLC calls this 'managing the confidence gap' — the distance between how fast code is generated and how confident anyone is that it is actually right.",
          "Crucially, the human becomes the change-owner: the accountable party. The agent does not get paged at 3am when its change breaks checkout; you do. That accountability is what makes the review step non-negotiable rather than a formality. It also means the scarce resource on your team is now senior attention — the ability to read, judge, and own changes — which is exactly the 'economics of attention' idea from earlier in the track. The team's ceiling is set by how much trustworthy review capacity you have, not by how many drafts the AI can produce."
        ]
      },
      {
        "title": "Designing healthy human-AI hand-offs",
        "teaser": "make the task crisp, make the review fast, keep the human accountable",
        "body": [
          "A healthy hand-off has three moving parts, and you can engineer each one. The first is the brief: agents shine on well-specified, bounded tasks and flounder on vague ones, so the planning step matters more than ever. As the agentic-SDLC literature puts it, an unclear ticket produces a PR that is technically correct but functionally wrong. Time spent sharpening intent up front is not overhead; it is the highest-leverage work on the team.",
          "The second part is the review pipeline: if the AI is producing ten times the drafts, your review process has to scale or it becomes the dam the whole river backs up behind. That means routing simple, low-risk changes through lighter review (and sometimes LLM-as-judge first-pass screening), while reserving precious human attention for the high-stakes changes. The third part is keeping accountability explicit: every accepted change has a named human owner. Get all three right — crisp briefs, scaled review, clear ownership — and the AI teammate genuinely multiplies the team. Get them wrong and you have just automated the easy part of a job whose hard part was always the reviewing."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "If you manage a team where AI does real work, you have to plan around its real profile, not the marketing one. The AIDev picture — great for volume and simple tasks, weaker on acceptance and complexity, with human review as the bottleneck — should directly shape how you assign work, set velocity expectations, and structure review. Point the agents at the high-volume, well-bounded work; keep your senior humans on the judgement-heavy changes and on reviewing. Budget review capacity as carefully as you budget engineering time, because it is now the true constraint.",
        "It also protects you politically. The single fastest way to lose credibility with leadership is to over-claim AI productivity — to wave around the '10x more PRs' number without mentioning that more of them get rejected and they tend to be the simpler ones. The honest, defensible claim is narrower and more durable: 'AI lets us clear far more well-defined work quickly, which frees our seniors to focus on the hard calls and on review.' That framing survives contact with reality. The inflated one gets you a very awkward quarter when someone audits the merge rate."
      ]
    },
    "caseStudy": {
      "title": "The AIDev dataset: 456,000 pull requests tell the truth about AI teammates",
      "body": [
        "In mid-2025, three researchers — Hao Li, Haoxiang Zhang, and Ahmed E. Hassan — did something the breathless AI-coding discourse mostly hadn't: they looked at what actually happened. They built the AIDev dataset by collecting more than 456,000 pull requests authored by five autonomous coding agents (Codex, Devin, Copilot, Cursor, and Claude Code) across over 61,000 real GitHub repositories, and studied how those changes fared when real maintainers decided whether to merge them. The resulting paper, 'The Rise of AI Teammates in Software Engineering,' is one of the first large-scale, empirical portraits of human-AI collaboration in production software.",
        "The headline is deliberately un-sexy and that is its strength. Yes, the agents are wildly fast — the three-days-versus-three-years anecdote is real. But their pull requests are accepted less frequently than human ones, and they are structurally simpler. So the field's actual frontier is not 'can the agent write code' (clearly yes) but 'can the team accept and trust what it writes' — a trust and utility problem, sitting squarely on the human side of the hand-off. The agents already produce more than enough. The constraint is review, judgement, and accountability."
      ],
      "bridge": "The data says the AI teammate is real, fast, and limited in exactly predictable ways — which means leading it well is mostly about designing the hand-off to human reviewers, the theme that powers the rest of this module and the whole track's idea of building trust."
    },
    "takeaways": [
      "AI agents are real teammates now: they open their own pull requests, and a human accepts or rejects them.",
      "The honest profile is speed up, acceptance down, complexity down — lots of simple work fast, with a higher rejection rate.",
      "The bottleneck moved from writing code to reviewing it, so senior human attention is the resource to manage."
    ],
    "knowledgeCheck": [
      {
        "q": "According to the AIDev study, how do AI teammates' pull requests compare to human ones?",
        "options": [
          {
            "text": "Faster to produce, but accepted less often and structurally simpler",
            "correct": true
          },
          {
            "text": "Slower, but more reliable and more complex than human work",
            "correct": false
          },
          {
            "text": "Identical to human work across speed, acceptance, and complexity",
            "correct": false
          }
        ],
        "feedback": "Correct — the study found dramatic speed, but lower acceptance rates and simpler changes than human contributors."
      },
      {
        "q": "On a team where AI writes most first drafts, where does the bottleneck move?",
        "options": [
          {
            "text": "To writing more code, since that is still the scarce skill",
            "correct": false
          },
          {
            "text": "To human review and accountability for what gets accepted",
            "correct": true
          },
          {
            "text": "Nowhere — adding more agents removes all bottlenecks",
            "correct": false
          }
        ],
        "feedback": "Right — when drafts are cheap and plentiful, the scarce resource becomes trustworthy human review and ownership."
      }
    ],
    "glossaryTerms": [
      "ai-teammate",
      "coding-agent",
      "pull-request",
      "acceptance-rate",
      "change-owner",
      "economics-of-attention",
      "agentic-sdlc"
    ],
    "sources": [
      {
        "label": "The Rise of AI Teammates in Software Engineering (arXiv, 2025)",
        "url": "https://arxiv.org/abs/2507.15003"
      },
      {
        "label": "The Agentic SDLC six-layer architecture (arXiv)",
        "url": "https://arxiv.org/abs/2604.26275"
      },
      {
        "label": "LangChain — State of Agent Engineering",
        "url": "https://www.langchain.com/state-of-agent-engineering"
      },
      {
        "label": "CIO — How agentic AI will reshape engineering workflows in 2026",
        "url": "https://www.cio.com/article/4134741/how-agentic-ai-will-reshape-engineering-workflows-in-2026.html"
      }
    ]
  },
  "eng-m7-l2": {
    "id": "eng-m7-l2",
    "trackId": "engineering",
    "moduleId": "eng-m7",
    "order": 2,
    "title": "Programming With Trust: Synthesizing the Track Into Product Strategy",
    "estMinutes": 9,
    "coreIdea": "The frontier of building software with AI is no longer writing code — it is deliberately engineering trust so an organization can safely delegate more and more work to AI over time.",
    "plainEnglish": [
      "This is the capstone — the lesson that ties the whole track together. Every module so far taught a piece: what a model actually is, how to build with one, how agents work, how to evaluate them, how to keep them safe, the economics, and now ownership. This lesson argues they all point at a single idea. The real job of building AI products is not 'make the AI write more code.' The agents can already do that. The real job is 'programming with trust' — aligning a human-and-AI team around a shared vision, shared values, and shared vocabulary, so you can hand off more work and review it smarter.",
      "Think about your own arc through this track. You went from being the best typist in the building toward being the editor-in-chief. You no longer write every word; you set the vision and the standards, you decide what is good enough to publish, and — crucially — you own the result. Trust is the currency that lets you delegate. And trust is not a vibe; it is something you build deliberately out of evaluations, guardrails, governance, and a tight feedback loop. The more of those you have, the more you can safely let the AI do.",
      "So the AI Product Owner's actual craft is trust engineering. You are not just shipping features; you are building the conditions under which your organization can keep handing more responsibility to AI without getting burned. Every trust feature you put in place — a citation here, an eval there, an audit log, a human gate on the risky path — raises the ceiling on how much you can safely delegate. That is the whole game."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "You started this track as the fastest typist in the building — the one who could bang out the code, the copy, the answer. By the end, you have a different and bigger job: editor-in-chief. You do not write every word anymore. You set the vision of what the publication is, you hold the standards for what is good enough to print, you decide what ships, and when something goes wrong it is your name on the masthead. The writers (human and AI) are fast and prolific; your value is judgement, alignment, and ownership.",
        "And here is the thing every editor-in-chief learns: how much you can delegate is exactly a function of how much you trust the process. A reporter you trust gets a quick skim; a shaky source gets fact-checked line by line. Trust is what lets you take your hands off the keyboard. You earn it the same way a newsroom does — with editorial standards (your values), shared house style (your vocabulary), fact-checking (your evals), legal review (your guardrails and governance), and a corrections process (your feedback loop). Build those well and you can run a far bigger operation than you could ever type yourself."
      ]
    },
    "deepSections": [
      {
        "title": "Vision, values, vocabulary: aligning a human-AI team",
        "teaser": "the three V's that let humans and agents pull in one direction",
        "body": [
          "In the 2025 paper 'Toward Agentic Software Engineering Beyond Code,' Rashina Hoda argues that the field's next phase is not about squeezing more code out of agents but about a 'whole of process' shift — and she frames it around three foundations: vision, values, and vocabulary. Vision is the shared picture of what you are actually trying to build and why, so humans and agents are not optimizing for different things. Values are the principles that decide trade-offs when they collide — speed versus safety, coverage versus cost. Vocabulary is shared, well-defined language so that 'done', 'tested', 'risky', and 'good enough' mean the same thing to a senior engineer, a junior, and an agent.",
          "This sounds soft until you watch it fail. An agent given a vague ticket produces a change that is technically correct and functionally wrong, because nobody aligned it on the vision. A team without shared values ships fast and then gets a safety incident, because nobody decided in advance which way to lean. A team without shared vocabulary argues endlessly about whether something is 'done.' Aligning a human-AI team on the three V's is the unglamorous backbone of programming with trust — it is what makes delegation safe rather than reckless."
        ]
      },
      {
        "title": "The five open problems of the A-SDLC",
        "teaser": "the honest list of what is still unsolved — and where you add value",
        "body": [
          "The Agentic Software Development Life Cycle (A-SDLC) work describes a layered architecture where agents participate across the whole lifecycle — planning, coding, reviewing, shipping, and operating — rather than just autocompleting code. But the same body of work is refreshingly honest that it is not a solved system. It names five open problems, and each one is a place where a thoughtful product owner earns their keep.",
          "The five are: evaluation (how do you actually know the AI's work is good?), governance (scoped access, attributable execution, auditable guardrails — who is allowed to do what, and can you prove what happened?), technical debt (agents can generate plausible code fast, quietly accumulating mess that someone pays for later), skill redistribution (as agents take the routine work, what do humans learn, and how do juniors become seniors?), and the economics of attention (human review is the scarce resource, so where you spend it determines everything). Notice that these are exactly the themes of the track — evals, safety, building craft, ownership, economics. The A-SDLC's open problems are the syllabus, restated as the frontier."
        ]
      },
      {
        "title": "A decision framework: tying every module to a real product call",
        "teaser": "turn the whole track into a checklist you run before you ship",
        "body": [
          "Here is how the modules stack into a single decision framework you can run on any AI feature before you ship it. From M1 (what an LLM is): is this output being treated as plausible or as verified — and have I told users which? From M2 (build craft): is the prompt, context, and retrieval set up so the model has what it needs to be right? From M3 (agents): does this need an autonomous loop, and if so what can it touch? From M4 (evals): how will I know it is working, in numbers, before and after launch? From M5 (safety): what is the worst thing this can do, and what guardrail stops it?",
          "Then from M6 (economics): does the value clear the cost of inference and of human review? And from M7 (ownership): who is the named change-owner accountable for this in production, and what is our moat — the data, feedback loop, or workflow lock-in that makes this hard to copy? Run those seven questions and you have converted an entire engineering track into one repeatable product call. That is the point of synthesis: not to remember every detail, but to have a reliable order of operations for deciding what to build and whether to trust it."
        ]
      },
      {
        "title": "The Product Owner as trust engineer",
        "teaser": "your real job title is the person who makes delegation safe",
        "body": [
          "Pull it all together and a job description appears that did not exist a few years ago: the AI Product Owner as trust engineer. Your deliverable is not a feature; it is a system in which the organization can keep delegating more work to AI without getting burned. You build that system out of the same parts every time — evaluations that tell you the truth, guardrails that catch the worst cases, governance that makes actions scoped and auditable, and a feedback loop that turns every mistake into a fix. Each one you add raises the ceiling on safe delegation.",
          "This is also where the strategy lives. McKinsey's work on AI competitive advantage makes the point that the durable moat is rarely the model — everyone can rent the same model. The advantage comes from the trust system and the flywheel around it: proprietary data, a tight feedback loop, and workflows people will not switch away from. So engineering trust is not just risk management; it is how you build something defensible. The Product Owner who treats trust as the product — deliberately, deal by deal, feature by feature — is the one who gets to safely hand more and more to AI, and ends up with a business that is genuinely hard to copy."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This is the integrative lesson, so the PM angle is the whole strategy. The mental model (M1), the build craft (M2), agents (M3), evals (M4), safety (M5), economics (M6), and ownership and moats (M7) are not seven separate topics — they are seven inputs into one job: shipping AI products people trust. The AI Product Owner's distinctive contribution is to engineer that trust deliberately, so the organization can safely delegate more work to AI over time. Anyone can wire up an agent; the rare skill is building the conditions under which delegating to it is a good idea.",
        "Practically, that means you treat trust features the way a traditional PM treats core features: you prioritize them, you measure them, and you defend them in the roadmap. The eval suite, the guardrail, the audit log, the human-in-the-loop gate on the risky path — these are not compliance overhead to bolt on at the end. They are the product. And because the moat in AI is the trust-and-data flywheel rather than the model itself, the product owner who invests there is also the one building durable competitive advantage. Trust is simultaneously your safety story and your strategy."
      ]
    },
    "caseStudy": {
      "title": "'Programming with trust': the field names its own next chapter",
      "body": [
        "By late 2025, the academic field studying AI software engineering had enough evidence to stop describing the present and start naming the future. In 'Toward Agentic Software Engineering Beyond Code,' Rashina Hoda surveys the landscape of coding agents — the Jules, Codex, Devin, SWE-agent, AutoCodeRover, and Claude Code generation — and argues that fixating on code generation misses the point. The agents can already generate code. What the field actually needs is a 'whole of process' approach built on vision, values, and vocabulary: the human work of alignment, judgement, and trust that surrounds the code.",
        "Read alongside the A-SDLC's six-layer architecture and its five open problems — evaluation, governance, technical debt, skill redistribution, and the economics of attention — a coherent thesis appears. The next decade of building software is 'programming with trust': humans repositioned as reviewers, change-owners, and auditors, deliberately constructing the evals, guardrails, governance, and feedback loops that let them delegate more to AI without losing control. The frontier moved off the keyboard. It now lives in the question of how much you can responsibly let go of — and that question is answered with trust you engineered on purpose."
      ],
      "bridge": "Programming with trust is the one sentence the whole track was building toward: your job is to engineer the conditions for safe delegation, and that is what makes you both a great AI engineer and a great product owner."
    },
    "takeaways": [
      "The frontier is no longer writing code — it is programming with trust: aligning a human-AI team on vision, values, and vocabulary.",
      "You can run the whole track as one checklist — model, build, agents, evals, safety, economics, ownership — before you ship any AI feature.",
      "The Product Owner's real job is trust engineering: building evals, guardrails, governance, and feedback loops so the org can safely delegate more to AI over time."
    ],
    "knowledgeCheck": [
      {
        "q": "What does 'programming with trust' say the frontier of agentic software engineering really is?",
        "options": [
          {
            "text": "Getting agents to write even more code, even faster",
            "correct": false
          },
          {
            "text": "Aligning a human-AI team on vision, values, and vocabulary so work can be safely delegated",
            "correct": true
          },
          {
            "text": "Replacing human reviewers entirely with LLM-as-judge",
            "correct": false
          }
        ],
        "feedback": "Correct — the next phase is about trust and alignment around the code, not generating more of it."
      },
      {
        "q": "According to McKinsey's view on AI advantage, where does a durable competitive moat usually come from?",
        "options": [
          {
            "text": "Owning the most powerful model, since the model is the product",
            "correct": false
          },
          {
            "text": "The trust-and-data flywheel — proprietary data, feedback loops, and sticky workflows",
            "correct": true
          },
          {
            "text": "Being first to announce an AI feature in your category",
            "correct": false
          }
        ],
        "feedback": "Right — everyone can rent the same model, so the durable advantage is the trust system and flywheel around it."
      }
    ],
    "glossaryTerms": [
      "programming-with-trust",
      "agentic-sdlc",
      "vision-values-vocabulary",
      "evaluation",
      "guardrails",
      "governance",
      "feedback-loop",
      "moat",
      "change-owner"
    ],
    "sources": [
      {
        "label": "Toward Agentic Software Engineering Beyond Code (arXiv, 2025)",
        "url": "https://arxiv.org/abs/2510.19692"
      },
      {
        "label": "The Agentic SDLC six-layer architecture (arXiv)",
        "url": "https://arxiv.org/abs/2604.26275"
      },
      {
        "label": "CodeRabbit — Guide to the Agentic SDLC",
        "url": "https://www.coderabbit.ai/guides/agentic-sdlc"
      },
      {
        "label": "McKinsey — From AI table stakes to AI advantage: building competitive moats",
        "url": "https://www.mckinsey.com/capabilities/quantumblack/our-insights/from-ai-table-stakes-to-ai-advantage-building-competitive-moats"
      }
    ]
  }
}
