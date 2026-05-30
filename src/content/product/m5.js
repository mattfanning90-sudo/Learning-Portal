// Module 5 — Managing AI Products
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "prod-m5-l1": {
    "id": "prod-m5-l1",
    "trackId": "product",
    "moduleId": "prod-m5",
    "order": 1,
    "title": "From Deterministic to Probabilistic: Why AI Is Different",
    "estMinutes": 9,
    "coreIdea": "AI products don't always give the same answer to the same question, so being occasionally wrong is normal — and that one fact rewrites how you plan, measure, and staff.",
    "plainEnglish": [
      "Traditional software is built on rules: if the user clicks this, then show that. The same input always produces the same output, every single time. If it doesn't, you've found a bug. A whole generation of product management was built on this certainty — you could write a spec, set a deadline, and know exactly what 'done' looked like.",
      "AI products break that certainty. Give the same model the same question twice and you can get two different answers, both usually good, occasionally embarrassing. This isn't a defect to be fixed; it's how the technology fundamentally works. 'Mostly right' is the design target, not a failure.",
      "That single shift quietly breaks the PM's usual toolkit. You can't promise a fixed accuracy by a fixed date. Your success metrics need to grow beyond 'did it ship.' And your team now includes data scientists and ML engineers whose work you have to understand well enough to lead — even if you never write a line of their code."
    ],
    "keyTerms": [
      {
        "term": "fine-tuning",
        "def": "Taking a model that was already trained on broad, general data and giving it extra training on your own narrower examples, so it gets better at your specific task — like sending an experienced cook on a one-week course about just your restaurant's menu, rather than teaching them to cook from scratch."
      }
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Traditional software is a vending machine. Press B4 and you get the same chocolate bar, today, tomorrow, and a thousand presses from now. If a different bar drops, the machine is broken. You manage a vending machine by checking the mechanism: did the right slot fire, did the coin register, is the output exactly as specified.",
        "An AI product is a talented but slightly unpredictable junior chef. Hand them the same recipe twice and you'll get two slightly different dishes — usually delicious, occasionally too salty. You don't manage a chef by scripting the exact movement of their wrists. You manage them by tasting the food, giving feedback, and trusting that across a hundred dishes the average is excellent. The job changes from inspecting a mechanism to judging a performance."
      ]
    },
    "deepSections": [
      {
        "title": "Deterministic vs. probabilistic systems",
        "teaser": "the same input, two different outputs — and why that's the whole game",
        "body": [
          "A deterministic system maps each input to exactly one output. A tax calculator, a login form, a shopping cart — feed them the same data and they return identical results forever. This predictability is what made software feel trustworthy and testable: you could write a test that says 'input X must equal output Y' and it would either pass or fail cleanly.",
          "A probabilistic system, like a large language model, samples from a range of possible outputs. Under the hood it is predicting likely next words, and there is deliberate randomness in how it picks. The same prompt can yield phrasing A on Monday and phrasing B on Tuesday — and crucially, sometimes a confidently stated wrong answer. The right mental model is not 'is the output correct?' but 'across many runs, how often is the output good enough, and how bad are the failures when they happen?' Everything else in this module flows from internalising that question."
        ]
      },
      {
        "title": "Why delivery timelines for AI are non-linear and uncertain",
        "teaser": "you can't guarantee accuracy by a deadline the way you guarantee a button",
        "body": [
          "With deterministic software, effort and outcome are roughly linear: more engineering hours generally means more features shipped, and you can estimate a release date with decent confidence. AI quality doesn't work that way. Getting a model from 70% to 85% accuracy on your task might take a week; getting from 85% to 92% might take three months, or might be impossible with the current approach. The last few points of quality often hide the hardest, longest, least predictable work.",
          "This is why AI roadmaps look more like research timelines than construction schedules. The model lifecycle — gathering data, training or fine-tuning, monitoring for drift (the silent decay of quality as the world changes around a fixed model), and retraining — is ongoing roadmap work, not a one-time build. A PM who promises 'we'll hit 95% accuracy by Q3' is making a promise the technology may not let them keep. The honest version is 'we'll run experiments toward higher accuracy and measure progress every two weeks,' which feels uncomfortable but is the truth."
        ]
      },
      {
        "title": "Expanded success metrics: accuracy, fairness, explainability, trust alongside adoption",
        "teaser": "shipping and clicks aren't enough when the product can be confidently wrong",
        "body": [
          "In classic product work, success metrics cluster around adoption and engagement: signups, retention, daily active users, conversion. Those still matter for AI products — but on their own they're dangerous, because a product can be heavily used and quietly harmful. A hiring-screening AI with great adoption that systematically disadvantages one group of candidates is a catastrophe wearing the mask of a success.",
          "So the AI PM's scorecard expands. Accuracy: how often is the output actually right on the cases that matter? Fairness: does quality hold across different groups of users, or does it quietly degrade for some? Explainability: can a user or auditor understand why the system did what it did? Trust: do people rely on it appropriately — not over-trusting confident nonsense, not abandoning it after one bad answer? These aren't soft 'ethics extras.' They are core product metrics, and learning to weigh them against plain adoption is the defining judgment of the role."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This entire module is the technical-literacy core for an AI PM, and it starts here. You don't need to train models, but you must genuinely understand the model lifecycle — training, monitoring, drift, retraining — because it is your roadmap now. The work of keeping an AI product good never ends the way shipping a button ends; quality decays as the world shifts, and that decay is a planning reality you own.",
        "It also reshapes who's in the room. Your team now includes data scientists and ML engineers, and you can't lead people whose constraints you don't understand. When an engineer says 'we can't guarantee that accuracy by that date,' the literate PM hears a true statement about probabilistic systems, not an excuse — and translates it into honest expectations for executives and customers. That translation is the job."
      ]
    },
    "caseStudy": {
      "title": "The pilot-to-production gap: why most AI projects never graduate",
      "body": [
        "Across 2024 and 2025, industry analysts at Gartner and others reported a sobering pattern: only roughly half of AI pilots ever reach production, and at least 30% of generative-AI projects get abandoned after the proof-of-concept stage. The striking part isn't the failure rate — it's the cause. These projects rarely die because the model was too weak. They die because teams treated a probabilistic system like a deterministic one.",
        "A demo that wows in a controlled room is the easy part; a model will happily produce ten dazzling examples. What kills the pilot is everything probabilistic-product discipline is built to handle: no systematic way to measure whether the model is good enough, no plan for what happens when it's confidently wrong, no governance for fairness or drift, and no honest conversation about timelines. The teams that cross the gap are the ones who stopped asking 'is the demo impressive?' and started asking 'how often is it right, how bad are the failures, and can we keep it good over time?'"
      ],
      "bridge": "The pilot-to-production gap exists precisely because deterministic instincts fail on probabilistic products — and closing it is what every remaining lesson in this module teaches you to do."
    },
    "takeaways": [
      "Deterministic software gives one answer; probabilistic AI gives a range, so 'mostly right' is the design target, not a bug.",
      "AI timelines are non-linear — you cannot promise a fixed accuracy by a fixed date the way you promise a button.",
      "Success now means accuracy, fairness, explainability, and trust alongside plain adoption — and weighing them is the job."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the single biggest shift when managing an AI product versus traditional software?",
        "options": [
          {
            "text": "Outputs are probabilistic — the same input can give different results, and being occasionally wrong is expected",
            "correct": true
          },
          {
            "text": "AI products always require larger engineering teams",
            "correct": false
          },
          {
            "text": "AI products don't need success metrics because the model handles quality",
            "correct": false
          }
        ],
        "feedback": "Right — the move from deterministic to probabilistic is the root shift, and it rewrites how you plan, measure, and staff everything else."
      },
      {
        "q": "Why can't an AI PM safely promise 'we'll hit 95% accuracy by Q3'?",
        "options": [
          {
            "text": "AI quality improves non-linearly and unpredictably, so the last accuracy points may take far longer or be impossible on the current approach",
            "correct": true
          },
          {
            "text": "Accuracy is never measurable in AI products",
            "correct": false
          },
          {
            "text": "Because 95% is always achievable, so the promise is too easy",
            "correct": false
          }
        ],
        "feedback": "Correct — effort and quality aren't linear for AI, so a fixed accuracy by a fixed date is a promise the technology may not let you keep."
      }
    ],
    "glossaryTerms": [
      "deterministic",
      "probabilistic",
      "model-lifecycle",
      "drift",
      "model-accuracy"
    ],
    "sources": [
      {
        "label": "ProductPlan — AI Product Management",
        "url": "https://www.productplan.com/learn/ai-product-management"
      },
      {
        "label": "AI-Native PM: What Changed in 2026",
        "url": "https://erdeniztunch.medium.com/ai-native-product-management-what-actually-changed-in-2026-44685f4c9afc"
      },
      {
        "label": "Product School — Guide to the AI PM",
        "url": "https://productschool.com/blog/artificial-intelligence/guide-ai-product-manager"
      },
      {
        "label": "Product-Led Alliance — Think Like an AI PM",
        "url": "https://www.productledalliance.com/think-like-an-ai-pm-what-ai-first-products-change-for-pms/"
      }
    ]
  },
  "prod-m5-l2": {
    "id": "prod-m5-l2",
    "trackId": "product",
    "moduleId": "prod-m5",
    "order": 2,
    "title": "Evals as a PM Responsibility: Beyond the Vibe Check",
    "estMinutes": 9,
    "coreIdea": "Because AI output varies, the only honest way to know if a change made the product better or worse is a systematic test — an 'eval' — and owning it is the defining AI-PM skill.",
    "plainEnglish": [
      "When you change something in an AI product — a new prompt, a new model, a tweak to how it retrieves information — how do you know it actually got better? In deterministic software you'd run a test that passes or fails. With a probabilistic system you can't eyeball one or two outputs and call it a win, because the next run might be different.",
      "The answer is an evaluation, or 'eval': a structured test that scores your AI's behaviour against a set of real examples, so you can prove whether a change helped or hurt. This became the defining AI-PM skill of 2025-26. And here's the crucial part — it's a product-judgment task, not a coding task.",
      "You don't have to write the eval code. But you own the decisions that make an eval meaningful: what to measure, which real examples go into the test set, how high the bar should be, and ultimately the ship-or-don't-ship call. Those are product judgments, and no engineer can make them for you."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "An eval is the exam you write for your AI before you let it graduate into production. A vibe check is glancing at one homework answer and shrugging, 'Looks smart enough to me.' That's how you get fooled by a student who happened to know the one question you asked.",
        "A real eval is a graded test bank: a hundred carefully chosen questions, an answer key, and a clear passing score. Now when you swap in a new student — a new model, a new prompt — you can prove whether it actually got smarter or just got lucky on the day. The exam is reusable, so every future change gets graded against the same bar, and you stop arguing about opinions and start reading a scoreboard."
      ]
    },
    "deepSections": [
      {
        "title": "Vibe checks vs. rigorous evals",
        "teaser": "one lucky answer feels like proof and isn't",
        "body": [
          "A vibe check is the natural human instinct: type a prompt, read the output, decide it 'feels good,' and ship. It's fast and it's seductive, because a strong model produces impressive-looking answers most of the time. The problem is that 'most of the time' is exactly what a vibe check can't see. You looked at one or two outputs; the product will produce thousands, including the ones that fail in ways you never thought to type.",
          "A rigorous eval replaces gut feel with a scoreboard. You assemble a fixed set of representative examples — including the gnarly edge cases — define what a good answer looks like for each, and score every change against that same set. The payoff is comparability: when you go from prompt v1 to prompt v2, you don't debate whose anecdote is more convincing. You read two numbers. The eval turns 'I think it's better' into 'it scored 84% versus 79% on the same 100 cases,' which is the difference between an opinion and a decision."
        ]
      },
      {
        "title": "The three approaches: human, code-based, LLM-as-a-judge",
        "teaser": "people, rules, or another AI — each with a real trade-off",
        "body": [
          "There are three ways to grade an eval, and a good PM knows which to reach for. Human evaluation means people read the outputs and score them. It's the gold standard for nuance — tone, helpfulness, subtle correctness — but it's slow and expensive, so you can't run it on every change. Code-based evaluation uses deterministic rules: did the answer contain the required phone number, is it valid JSON, did it stay under the word limit? It's instant and free to re-run, but it can only check things that are mechanically checkable.",
          "The third approach, LLM-as-a-judge, uses a strong model to grade the outputs of your production model against criteria you define. It captures more nuance than code-based checks and runs far faster and cheaper than humans, which makes it the workhorse of fast iteration. Its catch is that the judge is itself probabilistic, so you must calibrate it against human review to trust its scores. The mature workflow uses all three: code-based checks for the mechanical stuff, an LLM judge for nuanced scoring at scale, and periodic human spot-checks to keep the judge honest."
        ]
      },
      {
        "title": "The four-part LLM-judge framework (Aman Khan): role, context, goal, terminology",
        "teaser": "a vague grader gives vague grades — so brief it like a contractor",
        "body": [
          "When you use an LLM as a judge, the quality of your scores depends entirely on how well you instruct it. Aman Khan of Arize popularised a clean four-part framework for writing that instruction. Role: tell the judge who it is ('You are an expert travel-booking reviewer'). Context: give it the information it needs to grade fairly (the user's request, the constraints, the correct answer if you have one). Goal: state exactly what it's deciding ('Decide whether the booking matches every detail of the user's request'). Terminology: define your fuzzy words precisely, so 'correct' or 'helpful' mean the same thing to the judge that they mean to you.",
          "This is squarely a PM skill, because every part of that brief is a product judgment. What counts as 'correct' for your specific product? Which constraints actually matter to your users? What's the difference between a minor wording miss and a launch-blocking failure? Writing a sharp judge prompt is really just writing down, with unusual precision, what 'good' means for your product — and that has always been the product manager's job."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "The technical-literacy bar here is real but reachable. You need to understand the three eval approaches — human, code-based, and LLM-as-a-judge — and their trade-offs well enough to choose the right mix for your product. You don't write the grading code, but you have to know why a code-based check can't judge tone and why an LLM judge needs human calibration, or you'll be steered by whoever does.",
        "The recommended on-ramp is genuinely hands-on: sit down and hand-label 50 to 100 real outputs from your product as good or bad, writing a one-line reason each time. By example 40 you'll have discovered what 'good' actually means for your users — usually something more specific and surprising than you'd have guessed in a meeting. That hand-labelling is the semi-technical exercise every AI PM should be able to run themselves; it's where your eval, and your product taste, are born."
      ]
    },
    "caseStudy": {
      "title": "The trip-planner that booked San Diego instead of San Francisco",
      "body": [
        "Aman Khan of Arize tells a now-canonical story, recounted in Lenny's Newsletter: a trip-planning AI agent confidently booked a user flights to San Diego when they had asked for San Francisco. SAN versus SFO — a one-airport-code slip that produces a flight to the wrong city, real money spent, and a furious user. In a demo, that same agent would have looked dazzling, because most of its bookings were flawless. The vibe check passed.",
        "An eval would have caught it. A proper test set for a booking agent includes cases that probe exactly this failure mode — ambiguous city names, similar airport codes, dates near month boundaries — and grades whether the booking matches every detail of the request. Run before launch, that eval surfaces the San Diego error as a red cell on the scoreboard, not as a customer's ruined trip. The lesson isn't that the model was bad; it's that nobody had written the exam that would have failed it."
      ],
      "bridge": "One confident, wrong booking is everything a vibe check misses and everything a PM-owned eval is built to catch — which is why writing the exam is now part of the job."
    },
    "takeaways": [
      "An eval is a reusable graded test set that proves whether a change made the AI better or worse — replacing 'it feels good' with a score.",
      "Know the three grading approaches: human (nuanced, slow), code-based (instant, mechanical), and LLM-as-a-judge (fast, needs calibration).",
      "The PM owns what to measure, which examples to include, and the ship call — start by hand-labelling 50-100 real outputs yourself."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the PM's actual ownership in an AI eval?",
        "options": [
          {
            "text": "Deciding what to measure, curating the test set, setting the bar, and making the ship/no-ship call",
            "correct": true
          },
          {
            "text": "Writing all of the eval grading code in Python",
            "correct": false
          },
          {
            "text": "Reading a single output and confirming it looks smart",
            "correct": false
          }
        ],
        "feedback": "Right — the eval is a product-judgment task; you own the decisions about good-ness and shipping, not the code."
      },
      {
        "q": "Why use an LLM-as-a-judge rather than only human evaluation?",
        "options": [
          {
            "text": "It captures more nuance than rigid code checks and runs far faster and cheaper than humans, though it must be calibrated against human review",
            "correct": true
          },
          {
            "text": "It is always more accurate than a human and never needs checking",
            "correct": false
          },
          {
            "text": "It removes the need to ever define what 'good' means",
            "correct": false
          }
        ],
        "feedback": "Correct — the LLM judge is the fast, scalable workhorse, but because it's itself probabilistic you calibrate it against human spot-checks."
      }
    ],
    "glossaryTerms": [
      "eval",
      "vibe-check",
      "llm-as-a-judge",
      "test-set",
      "ship-no-ship"
    ],
    "sources": [
      {
        "label": "Lenny's Newsletter — Beyond Vibe Checks",
        "url": "https://www.lennysnewsletter.com/p/beyond-vibe-checks-a-pms-complete"
      },
      {
        "label": "Creator Economy — Aman Khan on the PM Eval Skill",
        "url": "https://creatoreconomy.so/p/ai-skill-that-will-define-your-pm-career-aman-khan"
      },
      {
        "label": "Productboard — AI Evals for PMs",
        "url": "https://www.productboard.com/blog/ai-evals-for-product-managers/"
      },
      {
        "label": "Evidently AI — LLM Evaluation Guide",
        "url": "https://www.evidentlyai.com/llm-guide/llm-evaluation"
      }
    ]
  },
  "prod-m5-l3": {
    "id": "prod-m5-l3",
    "trackId": "product",
    "moduleId": "prod-m5",
    "order": 3,
    "title": "Probabilistic UX: Designing for Uncertainty and Graceful Failure",
    "estMinutes": 9,
    "coreIdea": "Good AI design assumes the answer might be wrong and builds for it — showing confidence, explaining plainly, and always leaving the user in control.",
    "plainEnglish": [
      "Classic interface design assumes a predictable reaction to every action: click Save, the file saves; click Send, the message sends. AI interfaces can't make that assumption, because the output varies and can simply be wrong. If you design as though every answer is correct, you set users up to be burned.",
      "The danger cuts two ways. Hide the uncertainty behind a confident-looking answer, and users over-trust it — acting on a wrong result because the interface gave them no reason to doubt it. Or, after one bad experience with a feature that pretended to be infallible, they abandon it entirely. Both failures come from the same root: designing for certainty the system doesn't have.",
      "Good AI UX does the opposite. It surfaces how confident the system is, explains its reasoning in plain language, gives the user easy controls to override or undo, and fails gracefully when it can't deliver — degrading into something still useful instead of collapsing into a confident lie or a dead end."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A good GPS that finds a faster route doesn't silently teleport your car onto a new road and hope you don't notice. It says, 'There's a faster route that saves eight minutes — want it?', shows you the alternative on the map, and lets you tap 'No thanks.' Your hands stay on the wheel the whole time. You're informed, you're in control, and a wrong suggestion costs you nothing but a tap.",
        "Probabilistic UX is building that GPS for every AI feature. It tells you how sure it is, shows enough of its reasoning that you can sanity-check it, and never takes an irreversible action on your behalf without a way to decline or undo. The goal isn't to make the AI look perfect — it's to make a sometimes-wrong AI safe and pleasant to rely on, the way a good navigator is even when traffic surprises everyone."
      ]
    },
    "deepSections": [
      {
        "title": "Confidence UI and plain-language explainability (microcopy)",
        "teaser": "tell users how sure you are, in words they can act on",
        "body": [
          "A confidence UI communicates how much the system trusts its own answer, so the user can calibrate how much to trust it back. This can be explicit ('I'm fairly confident,' a star rating, a highlighted-uncertain phrase) or structural (showing three options instead of one when the model is unsure). The hard part is honesty: the signal only helps if it actually tracks reality, which means a PM has to understand what kind of confidence the model can really report and how reliable it is — not just slap a percentage on the screen to look rigorous.",
          "Explainability is the partner skill, and it lives mostly in microcopy — the small bits of interface text. 'Based on your last three orders, I suggest…' tells the user why the AI did what it did, in a sentence, in plain language. That single line lets a user spot when the reasoning is off ('but those orders were gifts, not for me') and correct course. Good AI microcopy is less about admitting 'the AI might be wrong' in scary terms and more about quietly handing the user the context they need to be the final judge."
        ]
      },
      {
        "title": "Graceful degradation and elegant fallback states",
        "teaser": "when the AI can't deliver, fail into something still useful",
        "body": [
          "Graceful degradation means that when the AI can't produce a confident, good answer, the experience steps down to something still useful instead of breaking. A search feature that can't find a great AI answer should fall back to plain keyword results, not a blank screen. An assistant that doesn't understand the request should say so and offer a path forward — 'I'm not sure I follow; did you mean X or Y?' — rather than confidently inventing an answer.",
          "Designing fallback states is where AI products earn long-term trust, because failures are inevitable in a probabilistic system and users forgive an honest 'I'm not sure' far more readily than a confident mistake. The PM's job is to enumerate the ways the feature can fall short — low confidence, no good answer, a request outside its abilities, a downstream system being down — and design a dignified, useful response for each. A product that fails gracefully a hundred times keeps the user; one that fails confidently once may lose them."
        ]
      },
      {
        "title": "Agentic Experience (AX): transparency and override controls for autonomous AI",
        "teaser": "when the AI acts on its own, the user needs a window and a brake",
        "body": [
          "Agentic experiences are ones where the AI doesn't just answer but takes actions on the user's behalf — booking the flight, sending the email, editing the file, calling other tools in a chain. The stakes jump, because a wrong answer you can ignore, but a wrong action has already happened. Agentic UX (sometimes called AX) is the discipline of keeping autonomous AI transparent and controllable: showing what the agent is doing and why, and giving the user a way to intervene before harm is done.",
          "Two patterns matter most. Transparency: surface the agent's plan and progress ('I'll search flights, then hold the best one for your approval') so the user isn't staring at a black box that may be spending their money. Override and human-in-the-loop checkpoints: insert approval gates before consequential or irreversible steps, so a human confirms before the booking is paid for. Deciding where those checkpoints go is a technical judgment as much as a design one — you need to understand what the agent can do, where it tends to fail, and which actions are genuinely irreversible — and getting it right is the core of trustworthy agentic products."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Surfacing 'confidence' in the interface sounds like a design task, but it rests on a technical question only a literate PM can interrogate: what confidence can this model actually report, and is that number trustworthy? Some models give calibrated probabilities; some give numbers that look meaningful but aren't. Show a confident-looking 92% that the model can't really back up and you've built a more sophisticated way to mislead users. You need to know enough to ask 'where does this confidence come from?' before you design around it.",
        "Agentic experiences raise the bar further. To decide where a human-in-the-loop checkpoint is technically necessary, you have to understand what the agent can do, where it can fail, and which actions can't be taken back. That's an engineering conversation you must be able to lead — mapping the agent's capabilities and failure modes to the approval gates and override controls that keep users safe. The design of autonomy is inseparable from understanding the autonomy."
      ]
    },
    "caseStudy": {
      "title": "GitHub Copilot's ghost text: uncertainty you can wave away",
      "body": [
        "GitHub Copilot suggests code right inside the editor, and the way it presents those suggestions is a masterclass in probabilistic UX. The suggested code appears as faint gray 'ghost text' — visually marked as a proposal, not a commitment. The developer accepts it with Tab, dismisses it with Esc, cycles through alternative suggestions, or even accepts it word by word. The AI is frequently right and sometimes wrong, and the design makes both outcomes cheap.",
        "What makes this pattern so widely studied is how it dissolves the over-trust-versus-abandon trap. Because the suggestion is low-commitment and trivially dismissable, a wrong suggestion costs the developer a single keystroke, so they don't lose faith in the tool. And because it's clearly distinct from code they wrote, they don't blindly absorb it as truth. The uncertain output is framed as an easy-to-decline offer rather than a forced, confident action — exactly the GPS principle, rendered in an editor: tell me your suggestion, but leave my hands on the wheel."
      ],
      "bridge": "Copilot wins not by being always right but by making 'sometimes wrong' nearly free to dismiss — the whole point of designing for uncertainty."
    },
    "takeaways": [
      "Hidden uncertainty breeds over-trust or abandonment — surface confidence, explain in plain microcopy, and keep the user in control.",
      "Design explicit fallback states: an honest 'I'm not sure' keeps users that a confident mistake would lose.",
      "For agentic AI, add transparency and human-in-the-loop checkpoints before any consequential or irreversible action."
    ],
    "knowledgeCheck": [
      {
        "q": "What's the core risk of hiding an AI's uncertainty behind a confident-looking answer?",
        "options": [
          {
            "text": "Users either over-trust a confident wrong answer or abandon the product after one bad experience",
            "correct": true
          },
          {
            "text": "The model runs slower when it has to show confidence",
            "correct": false
          },
          {
            "text": "It makes the product impossible to A/B test",
            "correct": false
          }
        ],
        "feedback": "Right — both failure modes trace to designing for a certainty the probabilistic system doesn't have."
      },
      {
        "q": "When should an agentic AI insert a human-in-the-loop checkpoint?",
        "options": [
          {
            "text": "Before consequential or irreversible actions, so a person can confirm before harm is done",
            "correct": true
          },
          {
            "text": "Only after the action has already been taken",
            "correct": false
          },
          {
            "text": "Never — autonomy means the AI should act without interruption",
            "correct": false
          }
        ],
        "feedback": "Correct — the checkpoint belongs before irreversible steps, which is why you must understand which actions can't be undone."
      }
    ],
    "glossaryTerms": [
      "probabilistic-ux",
      "confidence-ui",
      "graceful-degradation",
      "agentic-experience",
      "human-in-the-loop",
      "microcopy"
    ],
    "sources": [
      {
        "label": "Think Design — UX for AI Products in 2025",
        "url": "https://think.design/blog/what-ux-for-ai-products-must-solve-in-2025/"
      },
      {
        "label": "CoCreate — Probabilistic UX Design Patterns",
        "url": "https://cocreate.consulting/field-notes/probabilistic-ux-design-patterns"
      },
      {
        "label": "Notch — What Is Agentic Experience?",
        "url": "https://wearenotch.com/blog/what-is-agentic-experience/"
      },
      {
        "label": "GitHub Docs — Copilot Code Suggestions",
        "url": "https://docs.github.com/en/copilot/concepts/completions/code-suggestions"
      }
    ]
  },
  "prod-m5-l4": {
    "id": "prod-m5-l4",
    "trackId": "product",
    "moduleId": "prod-m5",
    "order": 4,
    "title": "Build-Measure-Learn with Models: Experimentation at AI Speed",
    "estMinutes": 9,
    "coreIdea": "Building got cheap, so the real advantage is learning speed — change one variable, measure it with evals and A/B tests, and decide.",
    "plainEnglish": [
      "Coding agents and prototyping tools have collapsed the cost of building. Spinning up a new version of an AI feature — a different prompt, a different model, a different way of pulling in information — that used to take a sprint can now take an afternoon. So the bottleneck moved. The hard question is no longer 'can we build it?' It's 'can we tell whether the new version is actually better?'",
      "That makes learning speed the new competitive edge. The team that can run a clean experiment — change one thing, measure the effect honestly, and decide — out-learns the team that ships a flurry of changes and guesses. But speed cuts both ways. Without discipline, fast building just lets you create and discard wrong versions faster than ever, burning time while feeling productive.",
      "The discipline is simple to state and hard to hold: change one variable at a time, measure it against a reliable yardstick, and keep that yardstick consistent so today's result is comparable to last week's."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "It's the scientific method with the slow parts removed. The old way of building was baking one big cake, waiting a week for guests to come eat it, and then asking whether they liked it — a single, slow, expensive experiment. Now you can bake a hundred mini-cakes in an afternoon and taste-test them all before dinner.",
        "But here's the trap that ruins it: if you change the flour, the sugar, and the oven temperature all at the same time, and the cake comes out better, you have no idea which change did it — so you've learned nothing you can repeat. Change one ingredient at a time, keep a reliable taste-tester who grades every cake the same way, and your hundred fast experiments actually compound into knowledge. Speed without that discipline is just baking junk faster."
      ]
    },
    "deepSections": [
      {
        "title": "The Build-Measure-Learn loop adapted for probabilistic systems",
        "teaser": "the classic loop survives — but 'measure' gets much harder",
        "body": [
          "Build-Measure-Learn, the engine of Lean Startup, says: build the smallest thing that tests an idea, measure how it does, learn from the result, repeat. For deterministic software the loop is well-worn. For AI products, the 'Build' step got radically cheaper — so cheap that the constraint shifted entirely onto 'Measure.' When the output is probabilistic, measuring whether v2 beats v1 is no longer a glance; it's an eval plus, often, a real-world test.",
          "Adapting the loop means anchoring it to a single changed variable. The three big levers are the prompt (the instructions you give the model), the model itself (swapping GPT-class for Claude-class, or a smaller cheaper model), and retrieval (which documents or data you feed the model alongside the question). If you change two at once and the result improves, you can't attribute the win, and an unattributable win can't be repeated or built on. Disciplined Build-Measure-Learn for AI is therefore the relentless habit of isolating one lever, measuring its effect against a stable eval, and only then moving to the next."
        ]
      },
      {
        "title": "LLM-as-a-judge as the fast, cheap 'Measure' engine",
        "teaser": "let a stronger model grade your cheaper one in minutes, not weeks",
        "body": [
          "The reason experimentation can now run at AI speed is that the measuring step itself got automated. Instead of waiting days for humans to score outputs, teams use a stronger model — a GPT-4-class or Claude-class judge — to grade the outputs of the cheaper model running in production. You change the prompt, run your hundred test cases, and have a comparative score in minutes. That's what turns a week-long evaluation cycle into an afternoon's worth of iterations.",
          "The catch, as always with probabilistic graders, is trust. An LLM judge is itself a model that can be wrong or biased, so you calibrate it against human review: periodically have people score a sample, compare their scores to the judge's, and adjust the judge's instructions until they agree. Done right, the judge becomes a fast, cheap proxy for human judgment that you can run on every experiment — the measurement engine that makes the whole high-speed loop possible. Done carelessly, it's a confident grader that quietly steers you toward worse products."
        ]
      },
      {
        "title": "Coupling offline evals with online A/B tests and edge-case monitoring",
        "teaser": "the lab score and the real-world score are both necessary and neither is enough",
        "body": [
          "An offline eval — your test set, graded in the lab — tells you whether a change improved behaviour on the cases you thought to include. It's fast, repeatable, and safe, but it can only measure what you anticipated. Real users are more creative and stranger than any test set, so a change that scores beautifully offline can still flop in production. That's why offline evals must be coupled with online A/B tests: ship the new version to a slice of real users, hold the old version for the rest, and compare what actually happens — task success, satisfaction, escalations, whatever truly matters.",
          "The third leg is edge-case monitoring: watching live traffic for the weird, rare, high-stakes failures that neither your eval nor your A/B headline metrics will surface on their own. A booking agent might score 90% offline, win its A/B test on average, and still be quietly mangling every request that involves an unusual date format — a small slice of users having a terrible time, invisible in the averages. Mature AI teams run all three together: offline evals to iterate fast and safely, online A/B tests to confirm real impact, and edge-case monitoring to catch the rare failures that destroy trust. Each covers what the others miss."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "'Change one variable' is a technical instruction in disguise, and you can only follow it if you understand the levers. You need to know what a prompt does versus what the model choice does versus what retrieval strategy does — because attributing a result to the right cause depends on knowing which knob you turned. A PM who can't distinguish these will keep changing three things at once and learning nothing, no matter how fast the team can build.",
        "Using an LLM-as-a-judge as your measurement engine, calibrated against human review, is a workflow you should be able to reason about and direct even though you won't code it. You should be able to ask the sharp questions: how do we know the judge agrees with humans? When did we last check? Which cases does it grade poorly? Directing that calibration loop — and insisting offline scores are confirmed by real-user A/B tests — is the AI PM's version of running a tight experiment program."
      ]
    },
    "caseStudy": {
      "title": "Lean AI's weekly experiment cadence",
      "body": [
        "Across 2025-26, practitioner playbooks under the banner of 'Lean AI' documented a now-common rhythm: teams running a fresh batch of experiments every week, with the measurement step fully automated. The key move that makes the cadence possible is using a stronger model as an automated judge to score the cheaper model that runs in production. Where a team once waited on human evaluators and could test maybe one or two ideas a week, they can now iterate on prompts and models in hours.",
        "The discipline inside the speed is what separates the playbooks worth reading from the hype. The good ones insist on isolating one variable per experiment so each weekly result is attributable, and on calibrating the automated judge against human spot-checks so the scores stay trustworthy. The cadence isn't 'ship more stuff faster'; it's 'learn one clean thing per cycle, reliably.' That's the difference between a team that compounds knowledge week over week and one that just generates more discarded versions at higher velocity."
      ],
      "bridge": "Lean AI's weekly loop only works because it pairs collapsed build cost with an automated, calibrated 'Measure' step — speed harnessed by discipline, which is the whole lesson."
    },
    "takeaways": [
      "Building got cheap, so learning speed is the new edge — but only if you change one variable at a time and measure it honestly.",
      "An LLM-as-a-judge, calibrated against human review, is the fast 'Measure' engine that turns week-long cycles into afternoons.",
      "Couple offline evals (fast, safe), online A/B tests (real impact), and edge-case monitoring (rare failures) — each catches what the others miss."
    ],
    "knowledgeCheck": [
      {
        "q": "Why is 'change one variable at a time' the central discipline of AI experimentation?",
        "options": [
          {
            "text": "If you change prompt, model, and retrieval at once and results improve, you can't tell which change caused it — so you can't repeat the win",
            "correct": true
          },
          {
            "text": "Models can only process one change per day",
            "correct": false
          },
          {
            "text": "It makes the build step cheaper",
            "correct": false
          }
        ],
        "feedback": "Right — attribution requires isolation; an unattributable improvement can't be repeated or built on."
      },
      {
        "q": "Why couple offline evals with online A/B tests and edge-case monitoring instead of relying on the eval alone?",
        "options": [
          {
            "text": "Offline evals only measure cases you anticipated; A/B tests confirm real-user impact and monitoring catches rare high-stakes failures hidden in averages",
            "correct": true
          },
          {
            "text": "Offline evals are always wrong and should be discarded once you have A/B tests",
            "correct": false
          },
          {
            "text": "A/B tests replace the need to ever measure quality offline",
            "correct": false
          }
        ],
        "feedback": "Correct — each method covers a blind spot of the others, so mature teams run all three together."
      }
    ],
    "glossaryTerms": [
      "build-measure-learn",
      "ab-test",
      "llm-as-a-judge",
      "retrieval",
      "edge-case-monitoring",
      "prompt"
    ],
    "sources": [
      {
        "label": "Lean Pivot — Build-Measure-Learn for AI",
        "url": "https://leanpivot.ai/blog/build-measure-learn-for-ai-products-the-experiment/"
      },
      {
        "label": "Product School — AI Experimentation",
        "url": "https://productschool.com/blog/artificial-intelligence/ai-experimentation-how-ai-pms-test-and-learn-faster"
      },
      {
        "label": "Userpilot — Build-Measure-Learn",
        "url": "https://userpilot.com/blog/build-measure-learn/"
      },
      {
        "label": "Maxim AI — Building AI Products in 2025",
        "url": "https://www.getmaxim.ai/articles/building-ai-products-in-2025-a-practical-blueprint-for-speed-reliability-and-scale/"
      }
    ]
  },
  "prod-m5-l5": {
    "id": "prod-m5-l5",
    "trackId": "product",
    "moduleId": "prod-m5",
    "order": 5,
    "title": "AI-Accelerated Discovery: Faster Tests, Same Discipline",
    "estMinutes": 9,
    "coreIdea": "AI makes prototyping and synthesis nearly instant, which makes the human disciplines of discovery — talking to customers and judging evidence — more valuable, not less.",
    "plainEnglish": [
      "The defining 2026 shift for product discovery is that AI collapsed the cost of two slow things: prototyping and synthesis. Tools like Figma Make, Lovable, Cursor, and Claude Code let a PM 'vibe code' a working prototype straight from a written prompt in minutes — no engineer required for the first cut. And AI can draft interview summaries and opportunity trees in seconds where it used to take an afternoon.",
      "It's tempting to read that as 'AI does discovery now.' It's the opposite. When prototyping and summarising get cheap, the bottleneck moves to the parts only a human can do well: actually talking to real customers, judging whether the evidence supports a belief, and preserving genuine empathy for the people you're building for.",
      "So the human disciplines don't shrink — they become the whole ballgame. AI hands you a power tool for the repetitive work; it doesn't tell you whether you're building the right thing or whether you've truly understood the customer. Those judgments are where good discovery lives, and they're exactly what AI can't do for you."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "AI is like getting a power drill after years of using a hand screwdriver. The repetitive, effortful work — driving in a hundred screws — becomes astonishingly fast. Everyone on the worksite suddenly has one, and the sheer speed is intoxicating. You can frame out the whole structure in a fraction of the time.",
        "But the drill doesn't tell you where to put the holes, or whether you're even building the right piece of furniture for the room. The carpenter's judgment — understanding what the customer actually needs, choosing the right design, knowing when the measurements are off — is untouched by the drill. In fact it matters more now, precisely because everyone has the drill and speed is no longer the differentiator. The thinking is."
      ]
    },
    "deepSections": [
      {
        "title": "Vibe coding: building testable prototypes from plain English",
        "teaser": "describe the product in words, get a working thing to test",
        "body": [
          "'Vibe coding' is building software by describing what you want in plain English and letting an AI tool generate the working code. With Figma Make, Lovable, Cursor, or Claude Code, a PM can type 'a page where a user uploads a receipt and sees the expense categorised' and get a clickable, testable prototype in minutes — without writing the code or waiting on an engineering sprint. For discovery, that's transformative: you can put a real, interactive thing in front of a customer instead of a static mockup or a hand-wave.",
          "The point isn't that PMs become engineers; it's that the cost of testing an idea concretely has nearly vanished. A working prototype surfaces problems a slide deck never will — users click where you didn't expect, get confused by flows that read fine on paper, and react to a real interaction. Vibe coding makes that level of fidelity available early and often, which means discovery can be grounded in 'we watched five people use it' far sooner than before. The skill to acquire is describing what you want precisely enough to get something testable, then iterating on it in conversation with the AI."
        ]
      },
      {
        "title": "What to keep human (Torres): synthesis review, judging disproof, deciding what matters",
        "teaser": "the parts of discovery you must not delegate to the machine",
        "body": [
          "Teresa Torres draws a sharp line around what stays human even as AI accelerates everything around it. First, synthesis review: AI can draft a summary of ten customer interviews, but Torres notes those summaries can miss 20-40% of the important detail — the offhand comment, the hesitation, the contradiction that turns out to be the real insight. So the PM must read the raw material and check the AI's synthesis, not trust it blindly. The machine drafts; the human verifies.",
          "Second, judging disproof: good discovery actively hunts for evidence that your belief is wrong, and deciding whether a piece of evidence truly disproves an assumption is a judgment call AI can't make for you. Third, deciding what matters: out of everything you learn, which problems are worth solving and which insights are signal versus noise? That prioritisation is the essence of product judgment. AI can widen the funnel of information enormously, but choosing what to act on — and being willing to kill an idea your own evidence just disproved — remains stubbornly, valuably human."
        ]
      },
      {
        "title": "Discovery for AI products: the five-step discipline and the error-analysis loop",
        "teaser": "building AI products adds genuinely technical discovery work",
        "body": [
          "Discovering an AI product isn't just classic discovery sped up; it adds new, genuinely technical disciplines. Torres and others frame a roughly five-step discipline specific to AI products: context engineering (deciding what information the model gets and how), orchestration (coordinating the model with tools and steps to accomplish a task), observability (being able to see what the system actually did in production), evals (the systematic measurement from Lesson 2), and maintenance (keeping quality up as models and the world drift). Each is partly a PM responsibility, and together they're the connective tissue between 'good discovery' and 'a working AI product.'",
          "At the heart of it sits the error-analysis loop, which is where discovery and engineering fuse. You look at real failures, tag what went wrong and why, group the failures into patterns, and then write automated checks (evals) that catch each pattern going forward. It's a humble, hands-on loop — much closer to reading customer interviews than to writing algorithms — and it's exactly the intersection of being a PM and an AI engineer. You bring product judgment to deciding which failures matter, and you stay technical enough to turn that judgment into checks the system can run forever."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "This lesson is the exact point where 'AI engineer' and 'product leader' become the same person. 'Vibe coding' a testable prototype used to be impossible without engineering; now it's a PM skill, and the PMs who develop it can run discovery loops their peers can't. You don't need to understand every line the AI generates, but you do need to describe what you want precisely and judge whether what came back is testable and honest.",
        "Discovery for AI products also adds disciplines that are genuinely technical: context engineering, orchestration, observability, evals, and the error-analysis loop where humans tag failures and then encode them as automated checks. These aren't things you can hand entirely to engineers and stay a good AI PM — they're where product judgment about 'which failures matter' meets the technical work of measuring them. Sitting in that intersection comfortably is the whole point of learning both crafts at once."
      ]
    },
    "caseStudy": {
      "title": "Teresa Torres builds her first AI product, in public",
      "body": [
        "In 2025-26, across webinars and an appearance on Aakash Gupta's podcast, discovery expert Teresa Torres walked through building her first AI product live and in public. The notable thing wasn't that she used AI heavily — she did, to speed up synthesis and prototyping — but how deliberately she kept humans in the loop. She was candid that AI-generated interview summaries can miss 20-40% of the important detail, so she read the raw material herself rather than trusting the tidy summary, and she insisted on human judgment at every point where evidence had to be weighed.",
        "Out of the experience she codified a five-step discipline specific to AI products — context engineering, orchestration, observability, evals, and maintenance — arguing that discovery doesn't disappear in the AI era, it gains new technical muscles. The throughline of her account is the lesson's thesis made concrete: she let AI do the fast, repetitive work and reserved the judgment-heavy work — what to test, what the evidence really showed, what to build — for herself. Faster tests, same discipline."
      ],
      "bridge": "Torres used AI to go faster precisely so she could spend more of her attention on the human judgments AI can't make — which is what 'faster tests, same discipline' means in practice."
    },
    "takeaways": [
      "Vibe coding lets a PM turn a plain-English prompt into a testable prototype in minutes — discovery can be grounded in real use far sooner.",
      "Keep the judgment human: review AI synthesis (it misses 20-40%), decide what disproves a belief, and choose what matters.",
      "AI-product discovery adds technical disciplines — context engineering, orchestration, observability, evals, maintenance — and the error-analysis loop where humans tag failures, then automate the checks."
    ],
    "knowledgeCheck": [
      {
        "q": "Why do human discovery skills become MORE valuable as AI accelerates prototyping and synthesis?",
        "options": [
          {
            "text": "When building and summarising get cheap, the bottleneck moves to talking to customers, judging evidence, and deciding what matters — which only humans do well",
            "correct": true
          },
          {
            "text": "AI prototyping is so unreliable it can't be used in real discovery",
            "correct": false
          },
          {
            "text": "Human skills become irrelevant once AI can vibe-code prototypes",
            "correct": false
          }
        ],
        "feedback": "Right — the drill speeds the repetitive work, but the carpenter's judgment about what to build matters more, not less."
      },
      {
        "q": "According to Teresa Torres, why must a PM still read raw interviews rather than trust an AI summary?",
        "options": [
          {
            "text": "AI summaries can miss 20-40% of the important detail — the offhand comment or contradiction that holds the real insight",
            "correct": true
          },
          {
            "text": "AI cannot read interview transcripts at all",
            "correct": false
          },
          {
            "text": "Reading raw interviews is faster than generating a summary",
            "correct": false
          }
        ],
        "feedback": "Correct — the machine drafts the synthesis, but the human must verify it because a large share of the signal can be lost."
      }
    ],
    "glossaryTerms": [
      "vibe-coding",
      "product-discovery",
      "error-analysis-loop",
      "context-engineering",
      "orchestration",
      "observability"
    ],
    "sources": [
      {
        "label": "Aakash Gupta — Teresa Torres Podcast",
        "url": "https://www.news.aakashg.com/p/teresa-torres-podcast"
      },
      {
        "label": "Productside — AI PM Workflows 2026",
        "url": "https://productside.com/the-ai-product-management-workflows-2026/"
      },
      {
        "label": "Institute of PM — Vibe Coding for PMs",
        "url": "https://www.institutepm.com/knowledge-hub/vibe-coding-for-product-managers"
      },
      {
        "label": "airfocus — Torres' First AI Product",
        "url": "https://airfocus.com/resources/events/behind-the-build-teresa-torres-first-ai-product/"
      }
    ]
  }
}
