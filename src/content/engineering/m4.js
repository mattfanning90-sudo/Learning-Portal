// Module 4 — Proving It Works: Evals & Observability
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "eng-m4-l1": {
    "id": "eng-m4-l1",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 1,
    "title": "The Tasting Routine: Evals Are the New Unit Tests",
    "estMinutes": 9,
    "coreIdea": "Because an AI feature's quality is variable and subjective, you need a systematic, repeatable way to measure whether it is actually good enough — that is what an eval is.",
    "plainEnglish": [
      "In traditional software, a test passes or fails forever. Two plus two equals four today and it will equal four next year, so you write the test once and trust it. Language models are not like that. Ask the same question twice and you can get two different answers, and 'good' is often a matter of judgement — was that summary clear? was that tone right? You cannot prove an AI feature works just by reading a few outputs and nodding.",
      "An eval is the disciplined answer to that problem. It is a collection of example inputs, a definition of what a good output looks like, and a way to score whether each output meets that bar — run automatically, over and over. Evals are to AI features what unit tests are to ordinary code: the thing that tells you, before your users do, whether a change made the product better or quietly broke something.",
      "Without evals, teams fall into whack-a-mole. You notice the assistant got a date wrong, you tweak the prompt to fix it, you ship — and three other things break that nobody checked. Evals turn that guessing game into a measurable, improvable process. They are the single most important habit that separates a polished product from a demo that only works when the founder is driving."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A restaurant's tasting routine before service. With a fixed recipe — measured flour, a timed oven — a head chef tastes it once, confirms it is right, and trusts it forever. But a chef cooking with fresh, variable ingredients is in a different world: today's tomatoes are sweeter, today's stock is saltier. Before any plate leaves the kitchen, the chef tastes it against a written standard. That tasting, done every service, every dish, is an eval.",
        "Error analysis is what the chef does on a slow afternoon with a stack of returned plates from the past week. Reading the complaints, they notice a pattern: 'the soup comes back too salty about 40% of the time.' That single observation is worth more than a hundred vague worries, because it points to one fixable thing. So they add a permanent salt-check to the line — a new step in the routine that catches that exact failure forever. Evals plus error analysis is how a kitchen gets reliably good instead of occasionally lucky."
      ]
    },
    "deepSections": [
      {
        "title": "The three levels: code assertions, human/LLM-judge review, live A/B",
        "teaser": "cheap automatic checks at the bottom, expensive human judgement at the top",
        "body": [
          "Not every eval costs the same, and a good eval suite is a pyramid. At the bottom are code assertions — dirt-cheap, instant checks that need no model and no human. Did the output include a phone number when one was required? Is the JSON valid? Did it stay under 200 words? These catch the dumb, mechanical failures and run on every single output for free.",
          "The middle layer is review by a human or by an LLM-judge (a strong model scoring the output against a rubric). This is where you check the subjective stuff — was the tone right, was the answer actually helpful — that no simple assertion can capture. It is slower and costs money, so you run it on samples, not everything. The top of the pyramid is the live A/B test: you ship two versions to real users and measure which one performs better on real outcomes. It is the most expensive and the slowest, but it is the only thing that proves the change helped real people, not just your eval set."
        ]
      },
      {
        "title": "Error analysis: read, label, group, target",
        "teaser": "the most PM-friendly practice in all of AI — and the one teams skip",
        "body": [
          "Error analysis is unglamorous and devastatingly effective: sit down with a few dozen real outputs and actually read them. For each one that is wrong, write a short label describing what went wrong in plain words — 'invented a price,' 'wrong tone,' 'ignored the user's city.' Then group the labels and count them. Almost always, a handful of failure types account for the majority of the pain, and most of your imagined problems barely show up.",
          "This is the step that turns vague anxiety ('the assistant feels unreliable') into a ranked, fixable list ('38% of failures are it hallucinating availability; fix that first'). It is data-driven without being technical — anyone who can read can do it — which is exactly why it is the most PM-friendly habit in the field. The output of error analysis becomes the targets for your evals: every dominant failure mode earns a permanent check so it can never silently come back."
        ]
      },
      {
        "title": "Golden datasets and the eval-data flywheel",
        "teaser": "a curated set of examples that grows every time something breaks",
        "body": [
          "A golden dataset is your hand-curated collection of example inputs paired with what a good response should look like — the standard you taste every dish against. You seed it with realistic cases, ideally pulled from actual usage rather than invented at a desk, and you keep it small enough that a human has genuinely vetted every entry.",
          "The flywheel is the magic. Every time a real failure slips through to production, you capture that input, add it to the golden dataset with the correct expected behaviour, and now your suite catches that exact failure forever. Over months, your eval set becomes a precise fingerprint of everything that has ever gone wrong with your product. New team members inherit it, model upgrades get tested against it, and your ability to ship confidently compounds. The dataset is the asset; the model is replaceable."
        ]
      },
      {
        "title": "Why binary beats arbitrary 1-5 scores",
        "teaser": "'pass or fail' forces a real definition of good; '3 out of 5' hides confusion",
        "body": [
          "It is tempting to score outputs on a 1-to-5 scale — it feels nuanced. In practice it is a trap. Nobody agrees on what separates a 3 from a 4, two reviewers will score the same output differently, and the average drifts meaninglessly over time. The number gives an illusion of precision while measuring nothing stable.",
          "Binary pass/fail is harder to write and far more useful. To label something 'fail' you are forced to state exactly what 'good' means and where the line is — and that act of definition is most of the value. Binary results are unambiguous, they aggregate into a clean percentage ('84% pass'), and they let two people agree. When you genuinely need more nuance, the right move is several binary checks ('factually correct? yes/no', 'right tone? yes/no'), not one blurry five-point scale."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Error analysis is the most data-driven practice in AI that requires zero coding: read real outputs, label the failures, group them, and fix the most common and costly ones first. If you manage an AI product and you do nothing else technical, do this — it will tell you more about your product's true quality than any dashboard, and it gives you a ranked roadmap grounded in evidence rather than the loudest complaint in the room.",
        "Binary pass/fail evals force the whole team to agree on what 'good' even means, which is half the job of a PM. And once an eval suite runs automatically in your build pipeline (CI/CD), it becomes your regression gate — the safety net that lets you change a prompt or upgrade a model without crossing your fingers. The difference between a team that ships AI features weekly and one that is terrified to touch anything is almost always whether they have this gate in place."
      ]
    },
    "caseStudy": {
      "title": "Rechat's 'Lucy' and Nurture Boss hit the whack-a-mole wall",
      "body": [
        "Rechat built 'Lucy,' an AI assistant for real-estate agents, and like most teams in 2024 they improved it by tweaking prompts. For a while it worked — until it didn't. Every fix to one problem seemed to break something else, and they had no way to know whether a change had truly helped or just moved the bug around. The AI consultant Hamel Husain documented this exact pattern across Rechat and Nurture Boss (a property-management AI): prompt-tweaking alone hits a hard wall of whack-a-mole regressions.",
        "What broke the wall was discipline, not cleverness. They did systematic error analysis — reading real outputs, labelling and grouping the failures — and discovered the failures clustered into a small number of dominant modes. Then they built tiered evals: cheap code assertions to catch the mechanical errors, human and LLM-judge review for the subjective ones, and live A/B tests for the changes that mattered. Suddenly they could see the biggest problems and prove whether a fix worked. Iteration speed jumped, because they were no longer guessing in the dark."
      ],
      "bridge": "Prompt-tweaking gets you to a demo; systematic error analysis and tiered evals are what get you to a product you can keep improving without breaking. That discipline is the whole point of this module."
    },
    "takeaways": [
      "Evals are unit tests for probabilistic, subjective AI output — they catch regressions before users do.",
      "Error analysis (read, label, group, target) is the highest-leverage and most PM-friendly habit in AI.",
      "Prefer binary pass/fail over 1-5 scores: it forces a real definition of 'good' and aggregates cleanly."
    ],
    "knowledgeCheck": [
      {
        "q": "Why can't you evaluate an LLM feature the way you'd test ordinary software — checking it once and trusting it forever?",
        "options": [
          {
            "text": "LLMs are too slow to run a test suite against",
            "correct": false
          },
          {
            "text": "Their output is variable and 'good' is often subjective, so correctness can't be proven by a one-time check",
            "correct": true
          },
          {
            "text": "Unit tests don't exist for the languages LLMs are written in",
            "correct": false
          }
        ],
        "feedback": "Right — because output varies and quality is a judgement call, you need repeated, systematic measurement rather than a single inspection."
      },
      {
        "q": "What is error analysis, in practice?",
        "options": [
          {
            "text": "Reading real outputs, labelling each failure, grouping the labels, and fixing the most common ones first",
            "correct": true
          },
          {
            "text": "Letting the model grade its own answers on a 1-5 scale",
            "correct": false
          },
          {
            "text": "Running the app until it crashes and reading the stack trace",
            "correct": false
          }
        ],
        "feedback": "Exactly — it turns vague worry into a ranked, evidence-based list of what to fix, and anyone who can read can do it."
      }
    ],
    "glossaryTerms": [
      "eval",
      "error-analysis",
      "golden-dataset",
      "llm-as-judge",
      "regression",
      "ci-cd",
      "ab-test"
    ],
    "sources": [
      {
        "label": "Hamel Husain — Your AI Product Needs Evals",
        "url": "https://hamel.dev/blog/posts/evals/"
      },
      {
        "label": "Hamel Husain — Evals FAQ",
        "url": "https://hamel.dev/blog/posts/evals-faq/"
      },
      {
        "label": "Lenny's Newsletter — Evals, error analysis, and better prompts",
        "url": "https://www.lennysnewsletter.com/p/evals-error-analysis-and-better-prompts"
      },
      {
        "label": "The Pragmatic Engineer — Evals",
        "url": "https://newsletter.pragmaticengineer.com/p/evals"
      }
    ]
  },
  "eng-m4-l2": {
    "id": "eng-m4-l2",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 2,
    "title": "The Leaked Answer Key: Benchmarks vs Reality (SWE-bench vs SWE-Bench Pro)",
    "estMinutes": 9,
    "coreIdea": "A high score on a public benchmark can be dangerously misleading, because models often memorize leaked answers rather than truly solve problems.",
    "plainEnglish": [
      "Public AI leaderboards drive billions in valuation and shape what companies buy. A model that tops SWE-bench or sits at the front of a chatbot ranking gets quoted in pitch decks and procurement meetings as if the number were a guarantee. It usually isn't.",
      "There are two big reasons a leaderboard number can lie. The first is contamination: benchmark questions and answers leak onto the internet, get swept into the next model's training data, and now the model has effectively seen the exam in advance — it recalls answers rather than reasoning to them. The second is scaffolding: clever engineering wrapped around the model (retry loops, special tooling, hand-tuned prompts) can pump up a score without the underlying model getting any smarter.",
      "A learner who understands these two effects can cut through a lot of marketing. The headline number is a starting point for questions, not an answer. The right instinct is to ask: was this benchmark fresh and held out, or could the model have memorized it? And how well does a generic test predict performance on my specific problem?"
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A driving test where the examiner uses the exact same route every single year. Word gets out. Soon every student knows 'turn left at the bakery, the hill start is on Maple Street, parallel park outside number 14.' They ace the test with flying colours — and some of them still can't actually drive, because they memorized one route instead of learning to handle a road. That memorization is contamination: the test got into the study notes, so the score measures recall, not skill.",
        "SWE-Bench Pro is the examiner who finally gets wise and switches to fresh, unseen routes — then adds highway merging and parallel parking on a busy street for good measure. Scores collapse overnight. The students who only memorized are exposed; the few who genuinely learned to drive still pass. Nothing about the students changed between Tuesday and Wednesday — only the honesty of the test did. That collapse in scores is the most useful number on the page, because it tells you who can actually drive in the real world."
      ]
    },
    "deepSections": [
      {
        "title": "Contamination: when the test is in the training data",
        "teaser": "the model already saw the answer key, so the score measures memory, not skill",
        "body": [
          "Models are trained on enormous scrapes of the public internet, and popular benchmarks live on that same internet — in GitHub repos, blog posts, papers, and forum discussions. So the very problems and solutions used to score a model often end up inside the next model's training data. When that happens, a high score can reflect memorization rather than genuine problem-solving. This is contamination, and it is one of the central credibility problems in AI evaluation.",
          "The fix is to build benchmarks the models could not have seen: fresh problems drawn from private, held-out sources that were never published. SWE-Bench Pro does exactly this, sourcing 1,865 enterprise problems from private repositories specifically to resist contamination. The dramatic score drops it produces are not the models getting worse — they are the first honest look at how much of the old number was memory."
        ]
      },
      {
        "title": "Saturation and Goodhart's Law",
        "teaser": "once everyone optimizes for a benchmark, it stops measuring what it used to",
        "body": [
          "A benchmark saturates when the top models all cluster near the ceiling — everyone scores 90-something, and the test can no longer tell the leaders apart. At that point it has stopped being useful, because the differences that matter are now invisible to it. SWE-bench Verified became crowded near the top, which is part of why a harder, fresher benchmark was needed.",
          "Underneath this sits Goodhart's Law: 'when a measure becomes a target, it ceases to be a good measure.' The moment a benchmark becomes the number labs publicly chase, teams start optimizing for the benchmark itself — sometimes in ways that don't transfer to real work at all. The score keeps climbing while the real-world skill it was supposed to track quietly detaches from it. This is why no single leaderboard can stay trustworthy for long once it becomes the trophy everyone is competing for."
        ]
      },
      {
        "title": "The scaffolding effect: harness vs raw model skill",
        "teaser": "a clever wrapper can inflate the score without the model improving at all",
        "body": [
          "When you see 'Model X scores 70% on SWE-bench,' that number is almost never the raw model alone. It's the model plus a harness — the surrounding code that feeds it the problem, lets it run tools, retries when it fails, and formats its answers. A well-engineered harness can lift a score substantially, and two teams can report very different numbers for the same underlying model purely because their scaffolding differs.",
          "This matters because the harness is not what you're buying when you buy a model, and it may not match the setup you'll actually run. A score achieved with elaborate, hand-tuned scaffolding can evaporate in your own plainer environment. When comparing models, you want to know how much of the score is the model's raw capability and how much is the harness around it — otherwise you're comparing two different products and calling them the same thing."
        ]
      },
      {
        "title": "Why you must build your own domain evals",
        "teaser": "a generic leaderboard rarely predicts performance on your specific use case",
        "body": [
          "Generic benchmarks test generic skills. Your product is not generic — it has your data, your edge cases, your tone, your compliance rules, your weird customers. A model that tops a public coding leaderboard might be mediocre at the specific kind of work your users actually do, and a lower-ranked model might be perfect for it. The leaderboard simply cannot know.",
          "That is why the experienced move is to build your own domain evals: a golden dataset drawn from your real tasks, scored against what good looks like in your world. This connects straight back to Lesson 1 — your eval suite is the asset, and the public benchmark is at most a rough filter for which models are worth testing. When a stakeholder waves a leaderboard number at you, the honest response is: 'Great, now let's see how it does on our evals.'"
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Stakeholders quote benchmark numbers as if they were product guarantees — 'this model is 70% on SWE-bench, so we're covered.' Understanding contamination, saturation, and Goodhart's Law lets you reset that expectation honestly without sounding like a sceptic for its own sake. You can explain, concretely, why a headline number might be inflated and why a fresher benchmark like SWE-Bench Pro showing frontier models dropping below 45% is the more trustworthy signal.",
        "The practical conclusion for a PM is simple and firm: insist on your own domain evals before betting the roadmap on any model. A generic leaderboard is a coarse filter, not a verdict. Pair this with Module 1's 'benchmarks can be gamed' warning and Module 3's SWE-bench progress story, and you'll have the vocabulary to make buying decisions that survive contact with reality."
      ]
    },
    "caseStudy": {
      "title": "SWE-Bench Pro exposes the inflated headline number",
      "body": [
        "In 2025, Scale AI released SWE-Bench Pro (arXiv 2509.16941), a benchmark of 1,865 real enterprise software problems deliberately drawn from private, held-out repositories so that the models being tested could not have already absorbed the answers from the public internet. It also added harder, more realistic engineering tasks than the familiar SWE-bench Verified. The point was not to be cruel to the models — it was to ask an honest question: how much of the famous score is skill, and how much is memory?",
        "The answer was sobering. Frontier models that comfortably scored above 70% on the old SWE-bench Verified fell to under 45% Pass@1 on the held-out set, and to around 23% on the public Pro set. Nothing about the models changed between the two tests; only the honesty of the test did. The gap between '70%+' and 'under 45%' is, in effect, the size of the illusion that the contaminated, saturated benchmark had been selling."
      ],
      "bridge": "When a fresher, contamination-resistant benchmark cuts the headline number roughly in half, you've just seen how much trust to place in a leaderboard — and why your own evals are the only number that truly speaks for your product."
    },
    "takeaways": [
      "Contamination means a model may have memorized the benchmark answers, so a high score can measure recall, not skill.",
      "Goodhart's Law: once a benchmark becomes the target everyone chases, it stops being a good measure.",
      "A high public score and a clever harness don't guarantee performance on your domain — build your own evals."
    ],
    "knowledgeCheck": [
      {
        "q": "Why did frontier models drop from 70%+ on SWE-bench Verified to under 45% on SWE-Bench Pro's held-out set?",
        "options": [
          {
            "text": "The models were temporarily downgraded for the test",
            "correct": false
          },
          {
            "text": "SWE-Bench Pro used fresh, private problems the models couldn't have memorized, exposing how much of the old score was contamination",
            "correct": true
          },
          {
            "text": "SWE-Bench Pro allowed the models less time to answer",
            "correct": false
          }
        ],
        "feedback": "Correct — held-out, contamination-resistant problems reveal genuine skill, and the gap is the size of the inflation in the old number."
      },
      {
        "q": "What does Goodhart's Law warn about benchmarks?",
        "options": [
          {
            "text": "Benchmarks become more accurate the more they are used",
            "correct": false
          },
          {
            "text": "When a benchmark becomes the target everyone optimizes for, it stops being a good measure of real skill",
            "correct": true
          },
          {
            "text": "Benchmarks should always be scored on a 1-5 scale",
            "correct": false
          }
        ],
        "feedback": "Right — optimizing directly for the metric detaches it from the real-world ability it was meant to track."
      }
    ],
    "glossaryTerms": [
      "benchmark",
      "contamination",
      "goodharts-law",
      "saturation",
      "scaffolding",
      "swe-bench",
      "domain-eval"
    ],
    "sources": [
      {
        "label": "SWE-Bench Pro (arXiv 2509.16941, Scale AI)",
        "url": "https://arxiv.org/abs/2509.16941"
      },
      {
        "label": "Scale AI — SWE-Bench Pro public leaderboard",
        "url": "https://labs.scale.com/leaderboard/swe_bench_pro_public"
      },
      {
        "label": "CodeSota — The SWE-bench contamination debate",
        "url": "https://www.codesota.com/news/swe-bench-contamination-debate"
      },
      {
        "label": "LLM-Stats — SWE-Bench Pro overview",
        "url": "https://llm-stats.com/benchmarks/swe-bench-pro"
      }
    ]
  },
  "eng-m4-l3": {
    "id": "eng-m4-l3",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 3,
    "title": "Flight Simulator vs Live Cockpit: Offline vs Online Evaluation",
    "estMinutes": 9,
    "coreIdea": "Offline evals catch the failures you anticipated before launch; online evals catch the surprises real users create after launch — you need both.",
    "plainEnglish": [
      "An AI feature can pass every test you wrote and still fall apart in the wild. The reason is simple: real users do things you never imagined, and the world keeps changing underneath you — new slang, new products, a new policy, a model update. Your pre-launch tests can only check for problems you thought to anticipate.",
      "Offline evaluation runs your feature against a fixed dataset before launch. It is cheap, fast, repeatable, and it catches the known failure modes you've curated into your golden dataset. Online evaluation scores live traffic after launch — real requests from real users — and it is the only thing that catches the surprises. Offline answers 'is it correct on what we expected?'; online answers 'is it working for actual people right now?'",
      "Crucially, you don't have to choose between shipping fast and shipping safely. Rollout patterns like shadow mode (running the new feature invisibly alongside the old one) and canaries (exposing it to a tiny slice of traffic first) let you gather real-world evidence before betting the business on it. The combination — offline to rehearse, online to verify, safe rollout to de-risk — is how mature teams move quickly without blowing things up."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Offline evaluation is a flight simulator. On the ground, in perfect safety, you rehearse known emergencies — engine failure, sudden crosswind, instrument fault — as many times as you like, for almost nothing, before anyone leaves the runway. It's the ideal place to drill the situations you can foresee. But a simulator can only test the scenarios its designers thought to program. The real sky always has something new.",
        "Online evaluation is the live cockpit. Your instruments stream real readings from a real flight, and a new co-pilot flies 'shadow' — watching every situation and quietly calling out what they would do — while the veteran captain still has full control of the plane. Nobody is in danger, because the trainee isn't touching the controls yet. Only once the trainee's shadow decisions consistently match the captain's do you hand over a little real authority: a canary first, then, when that holds up, the full rollout. Simulator to rehearse, shadow to verify, canary to hand over — that's the whole flight plan."
      ]
    },
    "deepSections": [
      {
        "title": "Offline vs online: what each catches",
        "teaser": "rehearsed emergencies vs the surprises only real users produce",
        "body": [
          "Offline evaluation is fast, cheap, and perfectly repeatable. You run the feature against the same fixed dataset every time, so you can compare versions apples-to-apples and catch regressions the instant they appear. Its blind spot is built in: it can only test for situations you already put in the dataset. It will never warn you about the strange thing a user does next Tuesday that nobody on the team imagined.",
          "Online evaluation scores actual production traffic — real inputs, real context, the messy distribution of how people genuinely use the thing. It catches the surprises offline never could: new user behaviours, shifting data, the slow drift of the world. The cost is that it's noisier, runs on live systems, and arrives after the fact. The two are complementary, not competitors. Offline is your rehearsal; online is your reality check. A team that only does one is either slow and blind to surprises, or fast and blind to regressions."
        ]
      },
      {
        "title": "Shadow mode: testing at 0% exposure",
        "teaser": "run the new system on real traffic while it touches nothing",
        "body": [
          "Shadow mode is the safest way to test a change on real data. You run the new model or new version on live production traffic, but you throw its output away — the user never sees it and it never takes any action. Meanwhile you record what it would have done and compare that against what the current system actually did (or what a human actually decided). You get real-world evidence at zero risk, because the new system is touching nothing.",
          "This is invaluable when the cost of a mistake is high — money, safety, compliance. You can let a new agent 'experience' thousands of real cases and measure exactly how often it would have agreed with the trusted decision, all before it ever has the authority to act. When shadow performance crosses a threshold you set in advance, you've earned the confidence to give it a little real exposure. Until then, it watches."
        ]
      },
      {
        "title": "Canary and A/B: proving real-world improvement, not just eval-score wins",
        "teaser": "a tiny live slice first — because a better eval score isn't proof users are better off",
        "body": [
          "A canary release sends the new version to a small slice of live traffic — say 1% or 5% — and watches closely. If quality, cost, latency, and error rates all hold up, you widen the slice step by step until it's the default. If something goes wrong, only a tiny fraction of users were affected and you roll back fast. The name comes from canaries in coal mines: a small, early warning before the whole operation is at risk.",
          "An A/B test goes further: it splits real users between the old and new versions and measures which one produces better real outcomes — more tasks completed, fewer escalations, happier users. This matters because a higher eval score is not the same as a better product. A change can win on your offline dataset and still annoy real people, or move a number that doesn't translate into anything users feel. The canary and the A/B test are how you prove improvement in the only court that counts: live traffic, real outcomes."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Launch readiness is a core PM call, and offline-versus-online tells you precisely which evidence you need to make it. Offline answers 'is it correct on the cases we anticipated?' Online answers 'is it actually working for real users now?' If you only have offline evidence, you are signing off on a flight using only the simulator results — defensible for low-stakes features, reckless for anything that touches money, safety, or trust.",
        "Shadow mode and canary releases are the tools that let you de-risk a launch with real traffic before full exposure, which means you can ship faster, not slower, because you're no longer forced to choose between caution and speed. Knowing this vocabulary lets you ask the right question in a launch review: 'What did shadow mode show? What's the canary plan and the rollback trigger?' Those questions are the difference between a confident launch and a hopeful one."
      ]
    },
    "caseStudy": {
      "title": "Ramp shadow-tests transaction agents on real money",
      "body": [
        "Ramp, the corporate-spend fintech, faces a brutal version of this problem: its AI agents handle real financial transactions, where a wrong action isn't an awkward chatbot reply — it's actual money moving incorrectly. You cannot responsibly let an unproven agent loose on live finances, but you also can't truly evaluate it without real financial data, which is far messier and more varied than anything you'd invent for a test set.",
        "Their answer is shadow mode. The agent runs on real transactions and predicts the action it would take, but it takes no action — the prediction is recorded, not executed. An LLM judge then compares the agent's predicted action against what the human actually did on that transaction. Only once the agent's shadow accuracy crosses a pre-set threshold do they enable it to act on live traffic. It's a way to stress-test guardrails against real money without ever risking a single dollar — exactly the flight simulator and the shadowing co-pilot, applied to corporate finance."
      ],
      "bridge": "Ramp proves you don't have to choose between real-world rigour and safety: shadow mode lets the world's messiness teach you everything, while the new system still touches nothing."
    },
    "takeaways": [
      "Offline evals catch anticipated failures cheaply; online evals catch the surprises real users create.",
      "Shadow mode tests a new system on real traffic at zero exposure — it predicts but never acts.",
      "A canary or A/B test proves real-world improvement; a higher eval score alone does not."
    ],
    "knowledgeCheck": [
      {
        "q": "What does online evaluation catch that offline evaluation cannot?",
        "options": [
          {
            "text": "Regressions against a fixed, repeatable dataset",
            "correct": false
          },
          {
            "text": "Surprises from real-user behaviour and a changing world that nobody put in the test set",
            "correct": true
          },
          {
            "text": "Syntax errors in the model's code",
            "correct": false
          }
        ],
        "feedback": "Correct — offline can only test what you anticipated; online scores live traffic and surfaces the unanticipated."
      },
      {
        "q": "What makes shadow mode a safe way to test a new agent on real data?",
        "options": [
          {
            "text": "It runs on real traffic but discards its output and takes no action, so it can be compared to reality at zero risk",
            "correct": true
          },
          {
            "text": "It only runs on a copy of last year's data",
            "correct": false
          },
          {
            "text": "It lets the agent act but caps the dollar amount per transaction",
            "correct": false
          }
        ],
        "feedback": "Right — the agent predicts what it would do without ever acting, giving real-world evidence with no exposure."
      }
    ],
    "glossaryTerms": [
      "offline-eval",
      "online-eval",
      "shadow-mode",
      "canary-release",
      "ab-test",
      "llm-as-judge"
    ],
    "sources": [
      {
        "label": "Rhesis — Offline vs online evaluation for LLM apps",
        "url": "https://rhesis.ai/post/offline-vs-online-evaluation-llm-applications"
      },
      {
        "label": "Statsig — Offline vs online evals",
        "url": "https://www.statsig.com/perspectives/offline-vs-online-evals"
      },
      {
        "label": "Label Studio — Offline vs online evaluation: when to use each",
        "url": "https://labelstud.io/learningcenter/offline-evaluation-vs-online-evaluation-when-to-use-each/"
      },
      {
        "label": "Survey on LLM evaluation methods (arXiv 2411.13768)",
        "url": "https://arxiv.org/html/2411.13768v3"
      }
    ]
  },
  "eng-m4-l4": {
    "id": "eng-m4-l4",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 4,
    "title": "The Fast, Cheap, Quirky Grader: LLM-as-Judge",
    "estMinutes": 9,
    "coreIdea": "Using a strong model to grade outputs makes large-scale evaluation affordable, but the judge has systematic biases you must correct for before trusting it.",
    "plainEnglish": [
      "Human review is the gold standard for judging AI quality — but humans are slow and expensive, and you cannot pay people to read millions of outputs a day. That ceiling is what makes continuous, large-scale evaluation feel impossible. LLM-as-judge is the breakthrough that makes it possible: you ask a strong model to score outputs against a rubric, automatically and at scale, for a tiny fraction of the cost.",
      "This is genuinely powerful. It's what lets you score every output in production, run evals on every code change, and monitor quality continuously instead of sampling a handful by hand. Most of the modern eval stack quietly runs on LLM judges.",
      "But the judge has quirks — and they are systematic, not random. Models tend to prefer whichever answer they see first, reward longer answers regardless of quality, and favour text that looks like their own. If you trust an un-calibrated judge, every downstream number is built on a tilted instrument. The skill is knowing how to keep the judge honest: anchor it to human grades, correct for its known habits, and never assume it's neutral just because it's automated."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A grader who can mark a million exam papers overnight for almost nothing — a miracle compared to the human examiner who needs a week for a few hundred. You'd be mad not to use them at scale. But this grader has odd, consistent habits. They tend to give higher marks to whichever essay sits first in the pile. They reward longer essays even when the extra pages add nothing. And they warm to writing that sounds like their own style. None of this is malice; it's just how they mark.",
        "So you don't fire them — you manage them. First you spot-check their marking against a senior examiner's grades on the same papers, to see exactly where they drift. Then you correct for the habits you found: shuffle the pile so position can't matter, hide or normalize the length, vary the phrasing. Now the fast, cheap grader is also a trustworthy one. That management routine — calibrate, then debias — is the entire discipline of using an LLM as a judge."
      ]
    },
    "deepSections": [
      {
        "title": "Pairwise vs pointwise judging with rubrics",
        "teaser": "'which of these two is better?' is easier to get right than 'rate this one'",
        "body": [
          "There are two main ways to ask a model to judge. Pointwise judging hands the model one output and asks it to score it, ideally against an explicit rubric — a written list of what good looks like ('factually correct? appropriate tone? answers the question?'). Pairwise judging shows the model two outputs and asks which is better. Pairwise is often more reliable, because relative comparison ('A is clearer than B') is an easier and steadier judgement than producing an absolute score from thin air.",
          "Either way, the rubric is doing most of the work. A vague instruction like 'rate the quality 1-10' invites exactly the blurry, drifting scores we warned against in Lesson 1. A sharp rubric with clear, ideally binary criteria gives the judge something concrete to check against, makes its decisions explainable, and dramatically tightens agreement with human reviewers. Garbage rubric, garbage judge — no matter how strong the model."
        ]
      },
      {
        "title": "The bias zoo: position, verbosity, self-preference, bandwagon",
        "teaser": "the judge's habits are systematic and well-documented — name them so you can cancel them",
        "body": [
          "Position bias is the tendency to favour whichever answer appears first (or sometimes last), regardless of content — documented carefully in the 'Judging the Judges' study. Verbosity bias is rewarding longer answers even when length adds nothing real. Self-preference (or self-enhancement) bias is a model rating text that resembles its own output more highly. Bandwagon bias is being swayed by what the answer claims is the popular or majority view rather than by whether it's correct.",
          "These are not occasional glitches; they are consistent, measurable tilts in the instrument. The 2025 LLM-as-a-Judge survey catalogued them into a taxonomy now used across industry to design debiased pipelines. The practical value of naming them is that each named bias has a countermeasure: swap the order of answers and average the result to cancel position bias; control for length to neutralize verbosity; use a different model family as judge to dampen self-preference. You can't correct a bias you haven't named."
        ]
      },
      {
        "title": "Debiasing and aligning the judge to human labels",
        "teaser": "before you trust the judge, prove it agrees with humans on a labeled set",
        "body": [
          "The non-negotiable first step is calibration: take a set of outputs that humans have carefully labeled, run the judge on the same set, and measure how well they agree. If the judge agrees with humans 92% of the time, you have a known, trustworthy instrument. If it agrees 60% of the time, you've just discovered that every number it would have produced was noise — and you fix the rubric or the setup before going further.",
          "On top of calibration sit the active debiasing techniques: shuffle answer positions and average to cancel position bias, normalize for length, and pick a judge from a different model family than the one being graded to reduce self-preference. The throughline is that an LLM judge is an instrument, and you never fly on an instrument you haven't checked against a known reference. Anchor it to human labels, correct its known tilts, then — and only then — trust it at scale."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "LLM-as-judge is the workhorse that makes continuous, large-scale evaluation affordable — without it, the online monitoring from Lesson 3 and the agent reliability metrics in Lesson 6 simply wouldn't be economical. It deserves real respect as an enabler. But its quirks mean that if you trust an un-calibrated judge, you are flying on a broken instrument, and every downstream quality number inherits the lie.",
        "The discipline to insist on is simple to state and easy to skip: anchor the judge to a human-labeled set before trusting it, and re-check that anchoring whenever the judge model changes. As a PM, this is a quality gate you can ask about in plain language — 'How well does our judge agree with human reviewers, and when did we last check?' If nobody can answer, treat every quality dashboard downstream with suspicion."
      ]
    },
    "caseStudy": {
      "title": "'Judging the Judges' catches position bias in the act",
      "body": [
        "The 'Judging the Judges' position-bias study (arXiv 2406.07791) did something elegantly simple: it took LLM evaluators and showed them the same pairs of answers, but swapped which one appeared first. If the judges were neutral, the order wouldn't matter. It mattered a lot. The judges systematically favoured answers by position rather than by content — meaning a non-trivial share of their verdicts were decided by where an answer sat on the page, not how good it was.",
        "That finding wasn't a one-off curiosity. The 2025 LLM-as-a-Judge survey (arXiv 2411.15594) pulled together position, verbosity, self-preference, bandwagon and more into a single bias taxonomy that teams across the industry now use to design debiased evaluation pipelines. Together these two papers turned 'the judge is a bit unreliable' from a vague worry into a named, measurable, correctable set of problems — which is exactly what you need to actually fix them."
      ],
      "bridge": "Once you can name the judge's biases and measure them, you can cancel them — turning a fast, cheap, quirky grader into a fast, cheap, trustworthy one."
    },
    "takeaways": [
      "LLM-as-judge makes large-scale, continuous evaluation affordable — it's the workhorse of the modern eval stack.",
      "Judges have systematic biases (position, verbosity, self-preference, bandwagon), not random noise.",
      "Always calibrate the judge against human labels before trusting it, and debias for its known habits."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the essential first step before trusting an LLM-as-judge's scores?",
        "options": [
          {
            "text": "Run it on as many outputs as possible to average out errors",
            "correct": false
          },
          {
            "text": "Calibrate it against a human-labeled set to measure how well it agrees with humans",
            "correct": true
          },
          {
            "text": "Use the most expensive available model as the judge",
            "correct": false
          }
        ],
        "feedback": "Correct — you anchor the judge to known human grades first, because every downstream number depends on the judge being accurate."
      },
      {
        "q": "Which of these is a well-documented LLM-judge bias?",
        "options": [
          {
            "text": "Position bias — favouring whichever answer appears first, regardless of content",
            "correct": true
          },
          {
            "text": "A refusal to ever score two answers as equal",
            "correct": false
          },
          {
            "text": "Always preferring the shortest possible answer",
            "correct": false
          }
        ],
        "feedback": "Right — position bias was demonstrated in the 'Judging the Judges' study, and you cancel it by shuffling answer order and averaging."
      }
    ],
    "glossaryTerms": [
      "llm-as-judge",
      "position-bias",
      "verbosity-bias",
      "self-preference-bias",
      "rubric",
      "calibration",
      "pairwise-judging"
    ],
    "sources": [
      {
        "label": "LLM-as-a-Judge survey (arXiv 2411.15594)",
        "url": "https://arxiv.org/abs/2411.15594"
      },
      {
        "label": "Judging the Judges — position bias (arXiv 2406.07791)",
        "url": "https://arxiv.org/abs/2406.07791"
      },
      {
        "label": "Galileo — LLM-as-a-judge vs human evaluation",
        "url": "https://galileo.ai/blog/llm-as-a-judge-vs-human-evaluation"
      },
      {
        "label": "Emergent Mind — LLM-as-a-judge evaluations",
        "url": "https://www.emergentmind.com/topics/llm-as-a-judge-evaluations"
      }
    ]
  },
  "eng-m4-l5": {
    "id": "eng-m4-l5",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 5,
    "title": "The Flight Data Recorder: Observability and Production Monitoring",
    "estMinutes": 9,
    "coreIdea": "Observability records every step inside an AI app — each model call, tool call, and retry, with its cost and latency — so you can see why something happened instead of guessing.",
    "plainEnglish": [
      "When an AI app misbehaves, the cause is buried inside a chain of events: a model call, then a tool call, then a document retrieval, maybe a retry or two, then another model call. From the outside you just see a slow or wrong answer. Without instrumentation, debugging it is pure guesswork — and there's no neat error message to read, because the app didn't crash, it just did the wrong thing.",
      "Observability is the X-ray. It records every step of every request: what went in, what came out, how long each step took, how many tokens it burned, and how much it cost. When something goes wrong, you don't theorize — you open the recording and watch exactly what happened, step by step.",
      "In 2026 this stopped being a per-vendor mess and standardized around OpenTelemetry's GenAI conventions — one shared 'wiring diagram' so any monitoring tool can read any app's data. The stakes are large: Gartner projects observability will be roughly half of all GenAI deployment investment by 2028. This is not a nice-to-have; it's becoming the largest single line item in running AI in production."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A flight data recorder bolted onto a glass-bottomed view of the kitchen. A customer complains their meal came out slow. Without the recorder, the manager shrugs and guesses — 'busy night, maybe?' With it, they replay the exact order and see everything: the salad took 8 seconds (fine), but the agent re-fired the grill three times for no reason (a retry loop), and then sat waiting 40 seconds on a slow supplier (a tool call to a sluggish external service). The mystery dissolves into a precise, fixable picture.",
        "OpenTelemetry is the industry agreeing on one standard wiring diagram for that recorder. Before it, every kitchen wired its black box differently, so an inspector's equipment could only read the kitchens it was built for. Now any inspector's gear can plug into any kitchen's recorder and read it. You wire your app for observability once, in the standard way, and any monitoring tool you choose — today's or next year's — can read it. Vendor-neutral instrumentation: set up once, never re-wired."
      ]
    },
    "deepSections": [
      {
        "title": "Traces and spans: one request, its steps",
        "teaser": "a trace is the whole journey; a span is one labeled step inside it",
        "body": [
          "The core idea is beautifully simple. A trace is the complete record of a single request from start to finish — the whole journey of 'user asked X, app eventually answered Y.' Inside that trace, each individual step is a span: one model call, one tool call, one retrieval, each with its own start time, duration, inputs, and outputs. Stack the spans up and you have a timeline of exactly what the app did and how long each piece took.",
          "This structure is what makes the X-ray readable. A slow request isn't a vague 'it was slow' — it's a trace where you can see the one span that ate 40 seconds. A wrong answer isn't a shrug — it's a trace where you can see the retrieval span pulled the wrong document. Traces and spans turn an opaque chain of events into something you can read like a story, which is the whole point of observability."
        ]
      },
      {
        "title": "OpenTelemetry GenAI conventions and vendor-neutral instrumentation",
        "teaser": "one open standard so your monitoring data isn't locked to a single tool",
        "body": [
          "OpenTelemetry (often shortened to OTel) is a widely adopted open standard for how software emits traces, metrics, and logs. In 2026 it released GenAI-specific conventions: an agreed way to record AI-specific things like model name, token counts, operation duration, and tool calls. Because it's an open standard rather than one company's format, instrumenting your app this way means your data isn't trapped in a single vendor's tool.",
          "The practical payoff is freedom and longevity. You wire your app once, in the standard format, and you can point that data at whichever observability tool you like — and switch later without re-instrumenting everything. It also means tools and libraries can interoperate out of the box. This standardization is a big part of why observability matured so fast in 2025-2026: everyone stopped reinventing the plumbing and started building on a shared foundation."
        ]
      },
      {
        "title": "Token, cost, latency, and drift monitoring; PII-safe logging",
        "teaser": "watch the money and the speed in real time — without logging customers' private data",
        "body": [
          "Once every step is recorded, you can monitor the things that actually run a business. Token usage and cost tell you where the money is going — often one runaway agent loop or one over-stuffed prompt is quietly burning the budget. Latency tells you which steps make the product feel slow. Drift monitoring watches for quality silently degrading over time as the world or the inputs change, so you catch a slow decline before users revolt. These are the dashboards a team actually lives on day to day.",
          "There's a catch that matters: those recordings contain real user inputs, which often include personal or sensitive information (PII — personally identifiable information). Logging everything naively can turn your observability system into a privacy and compliance liability. PII-safe logging — redacting, masking, or hashing sensitive fields before they're stored — is the discipline that lets you keep the X-ray's diagnostic power without hoarding data you shouldn't. Observability done right sees the steps, not the secrets."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Observability is your source of truth on cost, latency, and quality in production. It's the dashboard that answers 'why did this response succeed or fail?' and 'where is the money actually going?' — questions you'll be asked the moment an AI feature is live and either too slow or too expensive. With agents, there is no tidy stack trace when something goes wrong after 180 steps; the trace is the only way to reconstruct what happened, which makes it indispensable, not optional.",
        "It's also the plumbing that feeds the rest of this module. Your online evals from Lesson 3 need live traffic to score — observability is what captures that traffic. When Gartner projects observability will be about half of GenAI deployment investment by 2028, that's a signal about where the real operational work of AI products is heading: not just building the feature, but being able to see and run it reliably once it's live."
      ]
    },
    "caseStudy": {
      "title": "OpenTelemetry standardizes GenAI tracing, shown in VS Code Copilot",
      "body": [
        "In 2026, OpenTelemetry shipped its GenAI observability release — a standardized, vendor-neutral way to trace LLM and agent applications, recording things like operation duration and token usage in a common format. The significance was less the technology than the agreement: for the first time, the industry had one shared convention for what AI telemetry should look like, so that any tool could read any app's data instead of every vendor inventing its own incompatible scheme.",
        "To make it concrete, the release was demonstrated with VS Code Copilot exporting its telemetry in the new standard. Developers could watch operation duration and token usage flow onto ordinary dashboards and directly compare latency and cost across different models on the same screen — wiring it up once and reading it anywhere. That 'instrument once, read everywhere' property is exactly what turns observability from a custom engineering project into something a team can adopt off the shelf."
      ],
      "bridge": "When an open standard lets you instrument once and compare cost and latency across models on the same dashboard, observability stops being a bespoke chore and becomes shared infrastructure everyone can build on."
    },
    "takeaways": [
      "A trace records one full request; spans are its individual steps — together they're the X-ray for AI apps.",
      "OpenTelemetry's GenAI conventions let you instrument once and read your data in any tool — no lock-in.",
      "Monitor token cost, latency, and drift in production — and redact PII so observability doesn't become a privacy liability."
    ],
    "knowledgeCheck": [
      {
        "q": "What's the difference between a trace and a span?",
        "options": [
          {
            "text": "A trace is the full record of one request; a span is one individual step inside that request",
            "correct": true
          },
          {
            "text": "A trace is for errors and a span is for successes",
            "correct": false
          },
          {
            "text": "A trace runs offline and a span runs online",
            "correct": false
          }
        ],
        "feedback": "Correct — the trace is the whole journey of a request, and each model call, tool call, or retrieval inside it is a span."
      },
      {
        "q": "Why does OpenTelemetry's GenAI standard matter for an AI product team?",
        "options": [
          {
            "text": "It makes models run faster",
            "correct": false
          },
          {
            "text": "It's an open standard, so you instrument once and your monitoring data can be read by any tool, avoiding vendor lock-in",
            "correct": true
          },
          {
            "text": "It removes the need to log anything at all",
            "correct": false
          }
        ],
        "feedback": "Right — a shared convention means your telemetry isn't trapped in one vendor's format and tools interoperate out of the box."
      }
    ],
    "glossaryTerms": [
      "observability",
      "trace",
      "span",
      "opentelemetry",
      "drift",
      "pii",
      "latency"
    ],
    "sources": [
      {
        "label": "OpenTelemetry — 2026 GenAI observability release",
        "url": "https://opentelemetry.io/blog/2026/genai-observability/"
      },
      {
        "label": "LangChain — LangSmith observability",
        "url": "https://www.langchain.com/langsmith/observability"
      },
      {
        "label": "Confident AI — Top 7 LLM observability tools",
        "url": "https://www.confident-ai.com/knowledge-base/compare/top-7-llm-observability-tools"
      },
      {
        "label": "Firecrawl — Best LLM observability tools",
        "url": "https://www.firecrawl.dev/blog/best-llm-observability-tools"
      }
    ]
  },
  "eng-m4-l6": {
    "id": "eng-m4-l6",
    "trackId": "engineering",
    "moduleId": "eng-m4",
    "order": 6,
    "title": "Watching the Whole Operation: Evaluating Agents and Reliability",
    "estMinutes": 9,
    "coreIdea": "Judging an agent means checking the whole trajectory, the final state, and how consistently it succeeds on retries — not just whether the last message looked good.",
    "plainEnglish": [
      "A chatbot that gives a slightly wrong answer is annoying. An agent — software that takes real actions across many steps — that books the wrong flight, violates a refund policy, or moves the wrong money causes real harm. So evaluating agents is a different, harder job than scoring a single reply. You have to judge the whole operation: every step it took along the way, and the actual end state it left the world in — not just whether the final message read nicely.",
      "There's a second twist that catches teams off guard: variance. Run the same task five times and an agent might succeed three times and fail twice. A single successful demo proves almost nothing. What matters is how reliably it succeeds when you run it again and again — because in production you don't get to pick the lucky run.",
      "This is the central trust problem of 2026. The gap between a flashy benchmark number ('90% on the leaderboard!') and the reliability you can actually count on in production (closer to 70% when the same task is retried) is exactly what determines whether you can let an agent run unsupervised — and exactly what ends up in the headlines when it goes wrong."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Assessing a new surgeon. You would never certify them on a single multiple-choice exam about anatomy. You watch entire operations, end to end. Two things have to be true: the patient is healthy at the end (the final state is good), and the surgeon followed every safety protocol along the way — scrubbed in, counted the instruments, never cut a corner (policy adherence). A patient who happens to survive an operation where the surgeon skipped the safety checks is not a success; it's a disaster that hasn't happened yet.",
        "And you don't certify them after one good operation. You watch whether they succeed on four out of four similar cases, because a surgeon who's brilliant three times and catastrophic the fourth is not someone you let operate unsupervised. 'Usually great' is not good enough when the failure is severe and you can't predict which run will be the bad one. That insistence on consistent success across repeated attempts — not peak performance on a lucky day — is exactly how you have to judge an agent."
      ]
    },
    "deepSections": [
      {
        "title": "State-based evaluation: score the final world, not just the trajectory",
        "teaser": "did the agent actually leave the world in the right state — money moved, booking made?",
        "body": [
          "It's tempting to grade an agent on its trajectory — the sequence of steps and messages it produced — because that's what's easiest to read. But the trajectory can look perfectly reasonable while the end result is wrong, and a clumsy-looking trajectory can still land in exactly the right place. What ultimately matters is the final state of the world: was the correct flight actually booked, was the right amount actually refunded, is the database in the state it should be?",
          "State-based evaluation checks that end state directly. Instead of asking 'did the agent say the right things along the way?', it asks 'did the agent achieve the right outcome?' This is more honest and more robust, because it's outcome-focused: there are many reasonable paths to a correct result, and you don't want to penalize a good outcome for taking an unexpected route, nor reward a tidy-looking process that ended in the wrong place."
        ]
      },
      {
        "title": "Policy adherence: completing the task but breaking the rules still fails",
        "teaser": "the agent got the result — by violating a rule you absolutely needed it to follow",
        "body": [
          "An agent can complete the task and still fail, if it broke a rule it was required to follow. It issued the refund — but skipped the identity verification your compliance team mandates. It booked the flight — but used a payment method the user never approved. The task 'succeeded,' yet a policy was violated, and in regulated or high-stakes settings that's not a minor blemish; it's the exact failure that ends up in a headline or a lawsuit.",
          "This is why policy adherence is evaluated as a first-class result alongside task completion, and why Sierra's τ²-bench measures it explicitly. A robust agent eval doesn't just ask 'did it get there?' — it asks 'did it get there while following every rule it was supposed to?' A 'success' that breaks the rules is counted as a failure, because that's how it actually behaves in the real world, where the broken rule is the part that hurts you."
        ]
      },
      {
        "title": "pass^k and the reliability gap",
        "teaser": "succeeding once is easy; succeeding every time you retry is the number that matters",
        "body": [
          "Most benchmark headlines report pass^1 (sometimes written pass@1): the chance the agent succeeds on a single attempt. That number flatters agents, because in production you care whether it succeeds reliably, not whether it can succeed once on a good run. The honest metric is pass^k: the chance the agent succeeds on all of k repeated attempts at the same task. It directly measures consistency — exactly the surgeon who must succeed four times out of four.",
          "The gap between the two is the reliability gap, and it's larger than most people expect. Sierra's τ²-bench (tau-squared-bench), updated in 2026 with voice and knowledge-retrieval domains and roughly 38 model entries, showed agents scoring around 90% on pass^1 dropping to about 70% reliability when the same task is retried. That ~20-point gap is the difference between the demo and the dependable, and it's the variance enterprises actually feel in production every day."
        ]
      },
      {
        "title": "Behavioral drivers of success/failure across 33,000+ PRs",
        "teaser": "what actually separates agents that succeed from ones that fail, at real scale",
        "body": [
          "Resolution rate — did the agent solve the task? — is a blunt instrument. It tells you that an agent failed but not why, and 'why' is what you need to actually improve it. The 'Beyond Resolution Rates' research (arXiv 2604.02547) went deeper, analyzing more than 33,000 real agent pull requests to find the behavioral patterns that drive success and failure — not just the pass/fail verdict, but the habits underneath it.",
          "This matters because it connects all the way back to Lesson 1's error analysis, scaled up massively. Instead of reading a few dozen outputs by hand, researchers mined tens of thousands of real agent attempts to surface the recurring behaviors that lead to good and bad outcomes. The lesson for builders is the same at any scale: a single success-rate number is where investigation begins, not ends. The real understanding — and the real improvement — comes from studying the behavior behind the number."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Reliability, not peak capability, is what decides whether you can let an agent run unsupervised. The pass^k insight — that a 90% benchmark can mean about 70% real reliability — should directly reshape how you set service-level agreements (SLAs), decide which actions require human approval before they execute, and communicate honest expectations to customers and executives. Promising '90% reliable' because that's the leaderboard number is how you end up explaining the 30% in a crisis meeting.",
        "Pay special attention to the policy-adherence trap: an agent that completes the task while breaking a rule is exactly the failure mode that produces headlines, regulatory trouble, and lost trust, even though a naive 'did it work?' dashboard would mark it green. As a PM, the right questions are: 'What's our pass^k, not just pass^1? Which actions are gated behind human approval? And does our eval count a rule-breaking success as a failure?' Those three questions separate teams that deploy agents responsibly from teams that get surprised."
      ]
    },
    "caseStudy": {
      "title": "Sierra's τ²-bench exposes the reliability gap",
      "body": [
        "Sierra, the AI agent company co-founded by Bret Taylor, built τ²-bench (tau-squared-bench) to measure what actually matters for production agents rather than what looks good in a demo. Updated in 2026 with voice and knowledge-retrieval domains and around 38 model entries, it does two things conventional benchmarks skip: it measures policy adherence — whether the agent followed the required rules, not just whether it finished the task — and it reports pass^k, the chance of succeeding across repeated attempts at the same task.",
        "The headline finding is uncomfortable and important: agents that score around 90% on pass^1 — a single, lucky attempt — can drop to roughly 70% reliability under pass^k when the same task is retried. That's the variance enterprises actually feel in production, where you don't get to cherry-pick the good run. The companion research 'Beyond Resolution Rates' (arXiv 2604.02547) reinforced the point from another angle, analyzing 33,000+ real agent pull requests to identify the behavioral drivers behind why agents succeed and fail, rather than stopping at a single pass/fail score."
      ],
      "bridge": "When 90% on the leaderboard becomes 70% on retry, you've found the gap between a demo and a dependable product — and reliability, not peak capability, is what decides whether you can take your hands off the wheel."
    },
    "takeaways": [
      "Evaluate agents on the final state and on policy adherence — a rule-breaking 'success' still counts as a failure.",
      "pass^k (success across repeated retries) reveals real reliability; pass^1 flatters agents with a single lucky run.",
      "Reliability, not peak capability, decides whether an agent can run unsupervised — set SLAs and approvals accordingly."
    ],
    "knowledgeCheck": [
      {
        "q": "An agent completes a refund but skips the legally required identity check. How should a robust eval score it?",
        "options": [
          {
            "text": "As a success, because the user got their refund",
            "correct": false
          },
          {
            "text": "As a failure, because completing the task while breaking a required rule is a policy-adherence failure",
            "correct": true
          },
          {
            "text": "As partial credit, averaging the two",
            "correct": false
          }
        ],
        "feedback": "Correct — policy adherence is a first-class result; a 'success' that violates a required rule is exactly the failure that causes real-world harm."
      },
      {
        "q": "Why does pass^k matter more than pass^1 for deciding if an agent can run unsupervised?",
        "options": [
          {
            "text": "pass^1 is harder to compute than pass^k",
            "correct": false
          },
          {
            "text": "pass^k measures consistent success across repeated retries, exposing the reliability gap that a single lucky run hides",
            "correct": true
          },
          {
            "text": "pass^k only counts the agent's final message",
            "correct": false
          }
        ],
        "feedback": "Right — in production you don't get to pick the lucky run, so reliability across retries (pass^k) is what truly matters."
      }
    ],
    "glossaryTerms": [
      "agent",
      "state-based-evaluation",
      "policy-adherence",
      "pass-k",
      "reliability-gap",
      "trajectory",
      "tau-bench"
    ],
    "sources": [
      {
        "label": "Beyond Resolution Rates — behavioral drivers across 33,000+ agent PRs (arXiv 2604.02547)",
        "url": "https://arxiv.org/pdf/2604.02547"
      },
      {
        "label": "Decode the Future — AI agent benchmarks 2026",
        "url": "https://decodethefuture.org/en/ai-agent-benchmarks-2026/"
      },
      {
        "label": "Sierra τ²-bench research (arXiv 2510.04550)",
        "url": "https://arxiv.org/pdf/2510.04550"
      },
      {
        "label": "Domo — AI evaluations 101: testing LLMs, agents, and everything in between",
        "url": "https://www.domo.com/blog/ai-evaluations-101-testing-llms-agents-and-everything-in-between"
      }
    ]
  }
}
