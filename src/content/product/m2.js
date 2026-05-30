// Module 2 — Product Discovery
// Auto-assembled from authoring workflow. Edit content via the briefs + re-run.
export default {
  "prod-m2-l1": {
    "id": "prod-m2-l1",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 1,
    "title": "Discovery vs. Delivery: Two Tracks, One Team",
    "coreIdea": "Deciding whether to build something is a different job from building it well, and great teams run both at once with the same people.",
    "plainEnglish": [
      "There are two completely different activities hiding inside the word \"product.\" One is figuring out whether something is worth building at all — talking to customers, sketching, testing small ideas. That is discovery. The other is building the chosen thing reliably and well — writing the code, shipping it, keeping it stable. That is delivery.",
      "Most product failures are not failures of delivery. The team usually builds the thing competently. The disaster is that they built the wrong thing competently — months of solid engineering poured into something customers never wanted. Naming the two tracks separately is the first defence against that, because it makes \"should we?\" a real question instead of an afterthought.",
      "The surprising part is that the best teams do not run these as two phases or two departments. They run both continuously, in parallel, with the same small cross-functional team. While engineers ship this week's work, the same group is already quietly testing next month's idea on a handful of real customers.",
      "`Dual-track agile` just means running that incremental build process (delivery) alongside a parallel learning process (discovery) — two streams at once."
    ],
    "keyTerms": [
      {
        "term": "agile",
        "def": "A way of building software in small, frequent increments with constant adjustment, instead of one big upfront plan."
      }
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Opening a restaurant. Delivery is the kitchen running smoothly every single night — the same dishes, plated the same way, on time, hot, correct. That reliability is what keeps the lights on. Discovery is the chef quietly testing tomorrow's specials on a few trusted regulars: \"try this, be honest, would you order it again?\" Neither activity replaces the other.",
        "A restaurant that only runs the kitchen serves a stale menu and slowly empties out, because tastes move and it never noticed. A restaurant that only experiments never actually feeds anyone — it's all tasting spoons and no dinner service. The smart restaurant does both at once, with one crew: the line keeps cooking tonight's orders while the chef learns what tomorrow's menu should be."
      ]
    },
    "deepSections": [
      {
        "title": "What dual-track agile is — and the handoff trap Cagan warns about",
        "teaser": "two parallel streams of work, not two teams passing a baton",
        "body": [
          "Dual-track agile means a single team runs two streams of work side by side. The discovery track produces validated product decisions — \"yes, build this, here's the evidence.\" The delivery track turns those validated decisions into shippable, production-quality software. Crucially, they are tracks, not teams: the same product manager, designer, and engineers participate in both.",
          "Marty Cagan is emphatic about the failure mode here, which he calls the handoff trap. The moment you let a \"discovery team\" research in isolation and then hand a finished spec over the wall to a separate \"delivery team\" to build, you have rebuilt the feature factory with extra steps. The discovery work loses all the feasibility insight engineers would have offered, and the delivery work loses all the customer context. The whole point of dual-track is that the people who will build it are in the room while you decide whether to build it."
        ]
      },
      {
        "title": "How validated discovery feeds delivery, and usage data feeds back into discovery",
        "teaser": "the two tracks form a loop, not a one-way pipeline",
        "body": [
          "The relationship runs in both directions, which is what makes it a continuous system rather than a stage gate. Discovery feeds delivery: only ideas that survive cheap tests earn the expensive engineering time, so delivery spends its effort on things with real evidence behind them. This is the whole economic argument — you de-risk before you commit the costly resource.",
          "But delivery also feeds discovery. The moment a feature ships, it starts generating real usage data — who adopts it, who abandons it halfway, where they get stuck. That data becomes fresh fuel for the next round of discovery, surfacing new problems and new questions to chase. A team that only watches the spec go out the door, and never watches the data come back in, is flying blind on whether any of it worked."
        ]
      },
      {
        "title": "Avoiding both 'ship junk fast' and 'analysis paralysis'",
        "teaser": "two opposite failure modes, one balanced rhythm",
        "body": [
          "Dual-track is a balance between two ditches on either side of the road. In the first ditch is \"ship junk fast\": all delivery, no discovery, building whatever the loudest voice asked for and finding out it was wrong only after launch. Speed without direction just lets you reach the wrong destination sooner.",
          "In the second ditch is analysis paralysis: all discovery, no delivery, endlessly researching and never committing because no test ever feels conclusive enough. The cure for both is a steady rhythm where discovery is small, fast, and time-boxed — enough evidence to make a confident bet, not a doctoral thesis — and delivery is always shipping something real. You want to be reducing risk every week, while still moving every week."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: \"dual-track\" does not mean a discovery team writes a document and tosses it to a delivery team. The lead engineer is in discovery from day one, precisely so that feasibility — \"can we actually build this, and what would it cost?\" — is considered before anyone falls in love with an idea. An engineer who learns feasibility only when handed a finished spec is an engineer set up to either over-promise or kill good ideas late.",
        "Your job as a leader is to keep that engineer engaged in the \"should we?\" conversation, not just the \"how?\" conversation. That takes enough technical fluency to ask real questions — \"what's the riskiest part of building this?\", \"is there a cheaper version that proves the same point?\" — and to treat the answers as input to the product decision, not just a build estimate. The most expensive talent on your team is wasted if it only ever shows up to take orders."
      ]
    },
    "caseStudy": {
      "title": "Spotify's Thoughtful Execution Framework",
      "body": [
        "Spotify's design organisation published an account of what they call the Thoughtful Execution Framework, describing how they avoid guessing at features and shipping blindly. Rather than treating research and building as separate phases, they run discovery in parallel with delivery — for example, studying the sign-up flow with both qualitative tests (watching real people try to sign up) and instrumentation analysis (the usage data showing exactly where people drop off).",
        "The two feed each other continuously: the quantitative data points to where the problem is, the qualitative work explains why it's happening, and only validated changes graduate into delivery. The same team carries an idea from \"is this even a real problem?\" through to \"here's the shipped, measured result.\" It is dual-track in practice, not as a slogan."
      ],
      "bridge": "Spotify doesn't build first and learn later, or research forever and never ship — the same people run the \"should we?\" track and the \"build it well\" track at the same time, which is exactly what dual-track means."
    },
    "takeaways": [
      "Discovery decides whether to build; delivery builds it well — most failures are building the wrong thing competently.",
      "Run both tracks continuously and in parallel with the same team — never hand a spec from a discovery team to a delivery team.",
      "Aim for a steady weekly rhythm that reduces risk without sliding into either \"ship junk fast\" or analysis paralysis."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the \"handoff trap\" that Cagan warns about in dual-track agile?",
        "options": [
          {
            "text": "Letting a separate discovery team hand a finished spec to a separate delivery team",
            "correct": true
          },
          {
            "text": "Shipping features before they have been fully tested in production",
            "correct": false
          },
          {
            "text": "Letting engineers estimate work before the design is complete",
            "correct": false
          }
        ],
        "feedback": "Right — the trap is splitting discovery and delivery into separate teams; dual-track means the same people run both tracks so feasibility and customer context never get lost."
      },
      {
        "q": "Why do the best teams run discovery and delivery in parallel rather than as sequential phases?",
        "options": [
          {
            "text": "Because validated discovery de-risks ideas before delivery commits expensive engineering, and usage data flows back to fuel new discovery",
            "correct": true
          },
          {
            "text": "Because it lets the team skip customer research and ship faster",
            "correct": false
          },
          {
            "text": "Because it lets executives write more detailed roadmaps in advance",
            "correct": false
          }
        ],
        "feedback": "Correct — the two tracks form a loop: discovery feeds delivery the evidence to build the right thing, and delivery feeds discovery the real usage data to find the next problem."
      }
    ],
    "glossaryTerms": [
      "discovery",
      "delivery",
      "dual-track-agile",
      "feature-factory",
      "feasibility",
      "cross-functional-team"
    ],
    "sources": [
      {
        "label": "SVPG — Dual-Track Agile",
        "url": "https://www.svpg.com/dual-track-agile/"
      },
      {
        "label": "ProductPlan — Dual-Track Agile glossary",
        "url": "https://www.productplan.com/glossary/dual-track-agile"
      },
      {
        "label": "Spotify Design — The Thoughtful Execution Framework",
        "url": "https://spotify.design/article/from-gut-to-plan-the-thoughtful-execution-framework"
      },
      {
        "label": "Product School — Dual-Track Agile",
        "url": "https://productschool.com/blog/skills/dual-track-agile"
      }
    ],
    "estMinutes": 9
  },
  "prod-m2-l2": {
    "id": "prod-m2-l2",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 2,
    "title": "The Four Big Risks: How Every Idea Can Fail",
    "coreIdea": "Every product idea can fail in four distinct ways — value, usability, feasibility, viability — and discovery's job is to test each before building.",
    "plainEnglish": [
      "Marty Cagan boiled \"all the ways a product idea can die\" down to four risks, and naming them gives a team a shared checklist. Value risk: will customers actually buy or use it? Usability risk: can they figure out how to use it? Feasibility risk: can we actually build it with the people, time, and technology we have? Viability risk: does it work for our business — legally, financially, for our brand and our other teams?",
      "The power of the list is that it turns a vague worry (\"will this work?\") into four specific, testable questions. For any idea, you can ask: which of these four could kill it, and have we tested that one yet? Most teams discover they've only seriously checked one or two.",
      "And not all four are equally dangerous. The two that quietly sink the most products — value and viability — are also the two teams are most tempted to skip, because they're harder and less fun to test than the others."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Greenlighting a $200 million blockbuster. Before the studio commits, a sane executive asks four separate questions. Will anyone buy a ticket — is there an audience for this story at all (value)? Will the audience be able to follow the plot, or will they walk out confused (usability)? Can we actually film these stunts on this budget with this crew (feasibility)? And after marketing spend and the theatre's cut, does the whole thing make money and fit our studio's brand (viability)?",
        "Skipping any one of the four is exactly how studios produce expensive flops. A film can be perfectly shootable, easy to follow, and beautifully made — and still lose $100 million because nobody wanted to see it (value) or because the economics never closed after everyone took their cut (viability). The four questions are not a formality; each one has buried a real movie."
      ]
    },
    "deepSections": [
      {
        "title": "Which teammate owns which risk",
        "teaser": "the four risks map cleanly onto the cross-functional trio",
        "body": [
          "The four risks are not abstract — each has a natural owner on an empowered team. Value risk is the product manager's to own: is this worth our customers' time and money? Usability risk belongs to the product designer: can a real person actually figure this out? Feasibility risk is the engineers': can we build this, with our stack and our timeline?",
          "Viability risk is the product manager's again, but it's the broadest: it covers whether the idea works for the rest of the business — sales, marketing, finance, legal, security, and the other teams who'll be affected. Knowing the ownership map matters because it tells you who needs to be in the room during discovery. If your designer isn't there, usability goes untested; if your engineer isn't there, feasibility is a guess."
        ]
      },
      {
        "title": "Why teams over-test the easy risks (usability) and under-test the dangerous ones (value, viability)",
        "teaser": "the risks that are easiest to test are rarely the ones that kill you",
        "body": [
          "There's a gravitational pull toward testing whatever is easy and comfortable. Usability is testable in an afternoon — sit five people in front of a prototype and watch them click. It produces clear, satisfying findings. So teams test it a lot, and feel productive.",
          "Value and viability are the opposite: slow, ambiguous, and uncomfortable. Proving people will actually pay, or that the business model and legal constraints truly close, takes real work and can deliver answers you don't want. So they get quietly deferred — and these are precisely the two risks that bury the most products. A beautifully usable product that nobody values is still dead. The discipline is to spend your discovery energy in proportion to the danger, not in proportion to the ease."
        ]
      },
      {
        "title": "Matching the test type to the risk",
        "teaser": "different risks demand different kinds of evidence",
        "body": [
          "Each risk calls for a different test, and using the wrong one gives false comfort. Value risk wants demand evidence — fake-door tests, landing pages, willingness-to-pay signals, customer interviews about real past behaviour. Usability risk wants a prototype and watching real users attempt real tasks. Feasibility risk wants an engineering spike or technical prototype that proves the hard part can actually be built.",
          "Viability risk is tested less by a single experiment and more by structured conversations with the stakeholders who could veto the idea — legal on compliance, finance on the economics, security on the data, sales on whether they can actually sell it. A clean usability test tells you nothing about whether the business can support the product. Matching the test to the risk is what separates real evidence from theatre."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: feasibility risk is tested through engineering spikes and technical prototypes — short, time-boxed builds whose only job is to prove the hard part is buildable before you commit to the whole thing. The most common imbalance on a team is over-indexing on feasibility, because engineers genuinely enjoy a juicy technical spike, while value and viability sit neglected.",
        "Your job is to recognise that pattern and rebalance. When you hear \"we just need a couple more weeks to nail the architecture\" but nobody has confirmed customers want the thing at all, that's the smell of feasibility crowding out value. You need enough technical literacy to respect the spike and still ask, gently but firmly, \"and what have we done this week to prove anyone will use it?\""
      ]
    },
    "caseStudy": {
      "title": "42% of startups die of \"no market need\" — and an AI hiring tool that nobody trusted",
      "body": [
        "CB Insights' widely-cited post-mortem analysis of failed startups found that the single most common cause — about 42% — was \"no market need.\" That is value risk made brutally concrete: companies built competent products, sometimes brilliant ones, for a problem customers didn't actually have or care enough about to pay for. It is the leading cause of death, and it's the risk teams test least.",
        "Contrast that with a coaching example in the SVPG world: an HR-tech team spent roughly six months building an AI candidate-ranking tool — solid engineering, working model — before discovering that the HR managers it was built for distrusted the black-box output and wouldn't act on it. That's value risk (they didn't want a ranking they couldn't explain) compounded by viability risk (an unexplainable hiring decision is a legal and brand hazard). Six months of feasibility, beautifully executed, on an idea that was dead at the value and viability layers."
      ],
      "bridge": "Both stories are the same lesson: the risks that kill products are usually value and viability, not feasibility — yet feasibility is the one teams instinctively pour their energy into."
    },
    "takeaways": [
      "Every idea can fail four ways: value (will they buy it?), usability (can they use it?), feasibility (can we build it?), viability (does it work for the business?).",
      "Value and viability kill the most products yet get tested the least, because they're harder and less fun than usability and feasibility.",
      "Watch for teams over-indexing on engineering spikes (feasibility) while nobody proves anyone actually wants the thing."
    ],
    "knowledgeCheck": [
      {
        "q": "According to CB Insights, what is the most common reason startups fail, and which of the four risks does it map to?",
        "options": [
          {
            "text": "\"No market need\" — value risk",
            "correct": true
          },
          {
            "text": "\"Ran out of engineers\" — feasibility risk",
            "correct": false
          },
          {
            "text": "\"Confusing interface\" — usability risk",
            "correct": false
          }
        ],
        "feedback": "Correct — about 42% of failures trace to \"no market need,\" the textbook example of value risk, the one teams test least."
      },
      {
        "q": "Why do teams tend to under-test value and viability risk?",
        "options": [
          {
            "text": "Those risks are slow, ambiguous, and uncomfortable to test, while usability and feasibility are faster and more satisfying",
            "correct": true
          },
          {
            "text": "Value and viability can only be tested after launch, so there's no choice",
            "correct": false
          },
          {
            "text": "Cagan's framework only requires testing two of the four risks",
            "correct": false
          }
        ],
        "feedback": "Right — the dangerous risks are the hard, unpleasant ones to test, so they get deferred in favour of the easy, satisfying ones."
      }
    ],
    "glossaryTerms": [
      "four-big-risks",
      "value-risk",
      "usability-risk",
      "feasibility-risk",
      "viability-risk",
      "engineering-spike"
    ],
    "sources": [
      {
        "label": "SVPG — The Four Big Risks",
        "url": "https://www.svpg.com/four-big-risks/"
      },
      {
        "label": "Roadmap.one — SVPG product risks",
        "url": "https://roadmap.one/blog/posts/blog6-6-svpg-product-risks/"
      },
      {
        "label": "Aakash Gupta — Identify and validate product risk",
        "url": "https://www.news.aakashg.com/p/how-to-identify-and-validate-product"
      },
      {
        "label": "Internet Gardener — The Four Big Product Risks",
        "url": "https://internetgardener.substack.com/p/the-four-big-product-risks"
      }
    ],
    "estMinutes": 9
  },
  "prod-m2-l3": {
    "id": "prod-m2-l3",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 3,
    "title": "Continuous Discovery: A Weekly Habit, Not a Phase",
    "coreIdea": "Discovery is a weekly rhythm of contact with real customers by the team building the product, not a one-time project kickoff.",
    "plainEnglish": [
      "It's tempting to think of discovery as a phase: you research at the start of a project, write up what you learned, then move on to building. Teresa Torres argues that's a recipe for stale, opinion-driven decisions. Her definition of continuous discovery is sharper: weekly touchpoints with customers, by the team building the product, running small research activities, in pursuit of a clear desired outcome.",
      "Every clause in that sentence matters. Weekly, because the world changes and a six-month-old insight is already out of date. By the team building the product, because handing research to a separate group strips out the context. Small activities, because the goal is a steady drip of evidence, not an occasional flood. In pursuit of an outcome, because random customer chats with no goal just generate noise.",
      "The habit is what separates evidence-driven leaders from opinion-driven ones. When discovery is a weekly reflex, decisions get made from a fresh, accumulating picture of real customer behaviour — not from the highest-paid person's gut feeling in the room."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "The difference between cramming for one annual medical check-up and wearing a fitness tracker every day. The annual physical gives you a single snapshot that's already out of date the moment you leave the clinic — and you spend a frantic week beforehand pretending to be healthy so the numbers look good. It tells you how you were on one Tuesday a year ago.",
        "The daily tracker is unglamorous by comparison — no dramatic verdict, just a steady stream of small readings. But it catches a worrying trend early, builds a real trend line over time, and lets you adjust this week instead of next year. Continuous discovery is the fitness tracker: small, frequent, slightly boring, and far more useful than the big annual event."
      ]
    },
    "deepSections": [
      {
        "title": "Story-based interviewing: 'tell me about the last time you...' instead of opinions",
        "teaser": "ask about real past behaviour, not predicted future behaviour",
        "body": [
          "The single biggest upgrade to your interviews is to stop asking for opinions and start collecting stories. Opinion questions — \"would you use a feature that did X?\", \"how important is speed to you?\" — produce confident, useless answers, because people are terrible at predicting their own future behaviour and tend to be polite. You'll hear \"oh yes, I'd definitely use that,\" and then nobody does.",
          "Story-based interviewing asks instead about a specific real event: \"tell me about the last time you tried to do X.\" A concrete past story can't be faked the way an opinion can — it surfaces what actually happened, the workarounds they actually used, the moment they actually gave up. From real stories you extract real needs, pains, and desires; from opinions you extract flattery and guesswork."
        ]
      },
      {
        "title": "The interview snapshot so learning accumulates instead of being lost",
        "teaser": "a one-page capture that turns scattered chats into a growing body of knowledge",
        "body": [
          "Without a capture habit, interview learning evaporates. The person who did the interview remembers a vivid quote for a week, then forgets; the rest of the team never really absorbed it; six interviews later nobody can compare what they heard. Torres's antidote is the interview snapshot — a single, standardised one-page summary of each interview, capturing the customer, a memorable quote, the key insight, and the opportunities it surfaced.",
          "The point of a consistent template is that learning accumulates. Snapshots pin to a wall or a board, the whole team can scan them, and patterns across many interviews become visible that no single conversation would reveal. It turns discovery from a series of forgettable one-off chats into a compounding asset the whole team can build on."
        ]
      },
      {
        "title": "Research questions vs. the single interview question you actually ask",
        "teaser": "what you want to learn is not what you say out loud",
        "body": [
          "Beginners make the mistake of marching into an interview with a list of research questions and asking them directly: \"what are the main barriers to you completing checkout?\" That's the thing you want to learn — but asked out loud it invites a theorised, generalised, unreliable answer.",
          "The craft is to translate your research questions into one good interview question that triggers a story — usually some form of \"tell me about the last time you checked out and didn't finish.\" You hold your research questions in your head as the things you're listening for, while the customer simply tells you a story. You then mine the story for the answers, rather than asking for them. The research question is your private goal; the interview question is the open door you walk them through."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: the weekly loop is strongest when qualitative interviews are paired with quantitative signal from product instrumentation — the analytics events your product fires as people use it. The two triangulate: the data tells you where people drop off (say, 60% abandon at the payment step), and the interviews tell you why (they don't trust entering a card on a page that looks unfinished).",
        "Knowing what your analytics can and can't tell you is a semi-technical skill that makes your interviews far sharper. If you know the data shows a cliff at one specific step, you walk into the interview already hunting for the story behind that step, rather than fishing in the dark. Conversely, if you understand that a particular event isn't even instrumented, you know the data simply can't answer your question and you lean harder on the conversation. The PM who can read the usage data and read the customer is twice as effective as one who can only do either."
      ]
    },
    "caseStudy": {
      "title": "Stack Overflow's platform team adopts a weekly discovery cadence",
      "body": [
        "In July 2025, Stack Overflow's engineering blog documented their platform team's deliberate shift to continuous discovery. Previously, their research had been sporadic and ad-hoc — bursts of customer contact when a big decision loomed, then long silences. They described moving to a steady weekly cadence of customer conversations specifically to shape their platform roadmap on an ongoing basis.",
        "The change was framed not as a one-off project but as a habit baked into how the team works each week — a regular drumbeat of talking to the people who build on their platform, so that roadmap decisions rested on a fresh, accumulating picture rather than occasional snapshots. It's a concrete, recent example of a real engineering organisation treating discovery as a rhythm rather than a phase."
      ],
      "bridge": "Stack Overflow didn't add a research phase — they added a weekly habit, which is exactly the distinction continuous discovery is built on."
    },
    "takeaways": [
      "Continuous discovery means weekly customer touchpoints by the team building the product, in pursuit of a clear outcome.",
      "Ask for stories about real past behaviour (\"tell me about the last time…\"), not opinions about hypothetical futures.",
      "Capture every interview in a standard snapshot so learning compounds, and triangulate what customers say against the usage data."
    ],
    "knowledgeCheck": [
      {
        "q": "What's the key difference between a story-based interview question and an opinion question?",
        "options": [
          {
            "text": "A story question asks about a specific real past event, which can't be faked the way a predicted opinion can",
            "correct": true
          },
          {
            "text": "A story question is longer and uses more technical vocabulary",
            "correct": false
          },
          {
            "text": "A story question asks the customer to rate features on a scale",
            "correct": false
          }
        ],
        "feedback": "Right — \"tell me about the last time you…\" surfaces real behaviour, whereas \"would you use…\" invites polite, unreliable guesses about the future."
      },
      {
        "q": "In Torres's definition, why does it matter that discovery is done \"by the team building the product\"?",
        "options": [
          {
            "text": "Because handing research to a separate group strips out the context the builders need",
            "correct": true
          },
          {
            "text": "Because builders run interviews faster than trained researchers",
            "correct": false
          },
          {
            "text": "Because it lets the company avoid hiring any researchers at all",
            "correct": false
          }
        ],
        "feedback": "Correct — the value is keeping the people who will build the product in direct, weekly contact with customers, so insight isn't lost in a handoff."
      }
    ],
    "glossaryTerms": [
      "continuous-discovery",
      "story-based-interview",
      "interview-snapshot",
      "product-instrumentation",
      "research-question",
      "outcome"
    ],
    "sources": [
      {
        "label": "Product Talk — Story-based customer interviews",
        "url": "https://www.producttalk.org/story-based-customer-interviews/"
      },
      {
        "label": "Product Talk — The interview snapshot",
        "url": "https://www.producttalk.org/interview-snapshot/"
      },
      {
        "label": "Stack Overflow Blog — Building better platforms with continuous discovery",
        "url": "https://stackoverflow.blog/2025/07/23/building-better-platforms-with-continuous-discovery/"
      },
      {
        "label": "Product School — Continuous discovery",
        "url": "https://productschool.com/blog/product-fundamentals/continuous-discovery"
      }
    ],
    "estMinutes": 9
  },
  "prod-m2-l4": {
    "id": "prod-m2-l4",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 4,
    "title": "The Opportunity Solution Tree: Mapping Outcomes to Ideas",
    "coreIdea": "The opportunity solution tree forces you to explore many problems and many solutions before committing, instead of marrying the first idea you meet.",
    "plainEnglish": [
      "The opportunity solution tree is Teresa Torres's signature visual, and it has four layers. At the root sits a single measurable outcome — the one thing you're trying to move, like \"more people finish signing up.\" Branching beneath it are opportunities: the customer problems and unmet needs that, if solved, would move that outcome. Under each opportunity hang several candidate solutions. And under the solutions sit small assumption tests — the cheap experiments that tell you whether a solution will actually work.",
      "The tree's real job is to fight a deep human habit: falling in love with the first idea. Left to instinct, a team hears one problem, leaps to one solution, and builds it. The tree makes you slow down and survey the whole landscape — many problems, and for each, many possible fixes — before betting on any one.",
      "It's also a thinking tool, not a poster. Drawing the tree out loud, as a team, surfaces disagreement about what the outcome even is, which problems matter most, and which solutions are worth testing. The structure does the arguing for you."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "A family tree, but for ideas. At the very top sits your one true goal — say, \"more people finish signing up.\" Branching directly beneath it are the frustrations standing in the way: \"I don't trust giving them my card,\" \"the form is too long,\" \"I wasn't sure it was free.\" And beneath each of those frustrations hang several possible fixes you could try.",
        "The discipline of the family tree is that you don't marry the very first idea you bump into at the family reunion. You survey the whole family — all the branches, all the cousins — and then pick the most promising lineage to pursue. A team without the tree meets one idea, falls for it on the spot, and builds it; a team with the tree sees the whole family first and chooses deliberately."
      ]
    },
    "deepSections": [
      {
        "title": "The four layers: outcome, opportunities, solutions, assumption tests",
        "teaser": "root, branches, twigs, leaves — each layer answers a different question",
        "body": [
          "The four layers are strictly ordered, and each answers its own question. The outcome (the root) answers \"what are we trying to move?\" — it must be a single measurable result, not a feature. Opportunities (the main branches) answer \"what customer problems, if solved, would move that outcome?\" — these come straight from your interviews, phrased in the customer's own language as needs and pains, never as solutions in disguise.",
          "Solutions (the twigs) answer \"what could we build to address this opportunity?\" — and the tree insists on several per opportunity, so you're comparing options rather than rationalising your favourite. Assumption tests (the leaves) answer \"what would have to be true for this solution to work, and how do we cheaply check?\" Keeping the layers distinct is what stops a team from skipping straight from a vague goal to a pet feature with nothing in between."
        ]
      },
      {
        "title": "Picking which branch to pursue (importance, size, fit to the outcome)",
        "teaser": "you can't chase every opportunity — choose deliberately",
        "body": [
          "A healthy tree has more opportunities than you could ever pursue, which means choosing becomes the real work. Torres offers practical criteria: how important is this opportunity to customers, how large is the segment it affects, and how well does solving it actually fit the outcome at the root? An opportunity that's intensely painful but only for a tiny sliver of users may matter less than a milder pain felt by everyone.",
          "The fit-to-outcome check is the one teams most often skip. A genuinely real customer problem that, even if solved, wouldn't move your target metric is a distraction dressed up as discovery. Choosing the branch is an explicit, defensible decision — \"we're pursuing this opportunity because it's widely felt and directly tied to sign-up completion\" — rather than a quiet drift toward whatever the team already wanted to build."
        ]
      },
      {
        "title": "Keeping the tree a living map, not a one-time deliverable",
        "teaser": "the tree grows and prunes as you learn, week to week",
        "body": [
          "The most common way teams misuse the tree is to draw it once, present it in a deck, and never touch it again — at which point it's just another static artifact. The tree is meant to be a living map that changes every week as discovery rolls on. New interviews add opportunities; failed assumption tests prune dead solution branches; a shifting strategy can even change the outcome at the root.",
          "Treated this way, the tree becomes the team's shared, evolving model of the problem space — a single picture that shows where you've explored, what you've ruled out, and what you're betting on next. It's the visible memory of your continuous discovery work. A tree that hasn't changed in two months isn't a map; it's a fossil."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: the root of every tree is a metric your team can actually influence and instrument. Choosing a good outcome means understanding how the product is instrumented — what events get tracked, what counts as a clean, attributable signal versus a noisy or vanity number. \"More sign-ups\" is only a usable root if your analytics can reliably tell completed sign-ups from bot traffic and accidental double-counts. Picking an outcome you can't measure cleanly poisons the whole tree.",
        "In 2026, AI tools can help draft and maintain trees — suggesting opportunities from interview transcripts, proposing solutions, even flagging untested assumptions. That's genuinely useful for the grunt work. But you must own the judgement about which opportunities actually matter and which outcome is the right one to chase. The AI can populate the branches; deciding which lineage is worth pursuing is the part that's still your job, and it rests on understanding both the customer and the data."
      ]
    },
    "caseStudy": {
      "title": "Spotify mapping retention with opportunity-solution-style discovery",
      "body": [
        "Spotify is a frequently-cited example of opportunity-solution-tree-style discovery in service of a clear outcome: improving user retention and engagement. Rather than shipping one feature on a hunch, that root outcome branches into opportunities such as \"help people personalise their listening experience\" — a real customer need, not a solution in disguise.",
        "Beneath that opportunity, Spotify compares multiple candidate solutions rather than committing to the first: better music discovery, more personalised playlists, smarter recommendations. Each can be tested against the same outcome, so the team is choosing among options with evidence rather than rationalising a single pet idea. The structure keeps them honest about exploring the whole space before they commit expensive engineering to any one branch."
      ],
      "bridge": "Spotify's discovery shows the tree's core discipline in action: one measurable outcome at the root, several real problems beneath it, and multiple competing solutions under each — chosen with evidence, not on a hunch."
    },
    "takeaways": [
      "The tree has four layers: a measurable outcome at the root, customer opportunities beneath, multiple solutions under each, and cheap assumption tests at the leaves.",
      "Its job is to force exploration of many problems and many solutions, so you don't marry the first idea you meet.",
      "Keep it living — pruned and grown weekly by your discovery work — and root it in a metric you can actually instrument and influence."
    ],
    "knowledgeCheck": [
      {
        "q": "What sits at the root of an opportunity solution tree?",
        "options": [
          {
            "text": "A single measurable outcome the team can influence",
            "correct": true
          },
          {
            "text": "The team's favourite feature idea",
            "correct": false
          },
          {
            "text": "A list of competitor products",
            "correct": false
          }
        ],
        "feedback": "Right — the root is one measurable outcome (like \"more people finish signing up\"); everything else branches from it."
      },
      {
        "q": "Why does the tree insist on placing multiple solutions under each opportunity?",
        "options": [
          {
            "text": "To force you to compare options with evidence instead of rationalising the first idea you fell for",
            "correct": true
          },
          {
            "text": "To make the diagram look more thorough in a presentation",
            "correct": false
          },
          {
            "text": "Because every opportunity legally requires at least three solutions",
            "correct": false
          }
        ],
        "feedback": "Correct — surveying several solutions per opportunity is the tree's defence against marrying the first idea you meet."
      }
    ],
    "glossaryTerms": [
      "opportunity-solution-tree",
      "outcome",
      "opportunity",
      "solution",
      "assumption-test",
      "product-instrumentation"
    ],
    "sources": [
      {
        "label": "Product Talk — Opportunity Solution Trees",
        "url": "https://www.producttalk.org/opportunity-solution-trees/"
      },
      {
        "label": "Amplitude — Opportunity Solution Tree",
        "url": "https://amplitude.com/blog/opportunity-solution-tree"
      },
      {
        "label": "LogRocket — Opportunity solution trees explained",
        "url": "https://blog.logrocket.com/product-management/opportunity-solution-trees-definition-examples-how-to/"
      },
      {
        "label": "Shortform — Teresa Torres' Opportunity Solution Tree",
        "url": "https://www.shortform.com/blog/teresa-torres-opportunity-solution-tree/"
      }
    ],
    "estMinutes": 9
  },
  "prod-m2-l5": {
    "id": "prod-m2-l5",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 5,
    "title": "Assumption Mapping: Find the One Belief That Could Sink You",
    "coreIdea": "Every idea rests on hidden beliefs; assumption mapping surfaces them and ranks them so you test the one leap of faith that could sink everything.",
    "plainEnglish": [
      "Every product idea quietly rests on a pile of beliefs that all have to be true for it to work — beliefs about what customers want, what they'll pay, what you can build, and whether the whole thing is even allowed. Most of these stay hidden, which is dangerous, because the one that's both load-bearing and wrong is the one that kills you.",
      "Assumption mapping drags those beliefs into the open. You brainstorm everything that must be true, then plot each one on a simple grid: how important is it (would the idea collapse if this were false?) against how much evidence you already have (do we actually know this, or are we guessing?). The beliefs that are both critical and unproven are your \"leap of faith\" assumptions.",
      "Then you test those — and only those — first. The whole point is to avoid burning weeks validating safe, obvious things while the one belief that could sink everything sits unexamined."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Crossing a frozen lake. You don't tap the ice randomly, everywhere, with equal care — that wastes the morning and tells you little. You find the one spot, out in the middle, where if the ice is thin you will definitely fall through, and you tap that spot first. The shore is obviously solid; nobody needs to test the shore.",
        "The 2x2 map is exactly that instinct made deliberate. It asks two questions of every belief: is this load-bearing — would I fall through if it's wrong? And is it untested — have I actually tapped it yet? The beliefs that are both load-bearing and untested are the thin middle of the lake. That's where you tap first, before you take a single step onto the ice."
      ]
    },
    "deepSections": [
      {
        "title": "The five assumption categories: desirability, viability, feasibility, usability, ethical",
        "teaser": "a checklist so you don't forget an entire class of hidden belief",
        "body": [
          "Assumptions cluster into five categories, and the categories exist so you don't miss a whole class of risk. Desirability: do customers actually want this? Viability: does it work for the business — the economics, the legal and brand fit? Feasibility: can we actually build it with our data, technology, and team? Usability: can people figure out how to use it? These four mirror the Four Big Risks from earlier in the module.",
          "The fifth — ethical — is increasingly the one that bites in 2026: is this fair, safe, privacy-respecting, and free of harm we'd be ashamed of? An AI feature might be desirable, viable, feasible, and usable, and still rest on an ethical assumption (\"users are fine with us training on their data\") that, if wrong, becomes a front-page scandal. Walking the five categories forces every type of hidden belief into the light before you rank them."
        ]
      },
      {
        "title": "The 2x2 map: importance vs. evidence, and the top-right 'leap of faith' zone",
        "teaser": "two axes split your beliefs into four very different to-do lists",
        "body": [
          "The map has two axes: importance (how central is this belief to the idea working?) running one way, and evidence (how much do we already know it's true?) running the other. That splits every assumption into four zones. Important-but-well-evidenced: fine, you already know it. Unimportant-and-unproven: ignore it, it doesn't matter enough to test. Unimportant-and-proven: irrelevant.",
          "The zone that matters is the top-right corner: important and unproven — high stakes, low evidence. These are your leap-of-faith assumptions, the ones where being wrong is fatal and you currently have nothing but hope. The map's entire value is concentrating your scarce testing effort there, instead of spreading it evenly or, worse, testing the safe stuff because it's easier. Test the top-right corner first, always."
        ]
      },
      {
        "title": "Riskiest Assumption Test (RAT) vs. MVP",
        "teaser": "test the one fatal belief before building even a minimum product",
        "body": [
          "A Riskiest Assumption Test (RAT) and a Minimum Viable Product (MVP) are often confused, but they answer different questions. An MVP is the smallest real version of the product you can ship to start learning from actual usage — it's still a product, and still costs real building. A RAT is narrower and cheaper: an experiment designed to test only your single riskiest assumption, with no obligation to build anything resembling the real product.",
          "The order matters. If your leap-of-faith assumption is \"people will pay strangers to sleep in their homes,\" you don't need an MVP with payments, reviews, and search — you need the cheapest possible test of that one belief. Running the RAT first means that if the core assumption is false, you find out for almost nothing, before you ever invest in an MVP. RAT before MVP keeps the cost of being wrong tiny."
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: assumptions span all five categories, including feasibility (\"can we actually build this with our data and our tech?\") and ethical risk. You need enough technical judgement to tell which feasibility assumptions are genuine leaps of faith — the never-been-done-before, might-not-work parts — versus the routine ones your engineers have shipped a hundred times. Treating a routine build as a scary risk wastes a spike; treating a genuine unknown as routine blows up your timeline.",
        "That judgement also tells you when an engineering spike is the right test. If a feasibility assumption lands in the top-right \"leap of faith\" corner — critical and genuinely unproven — a short, time-boxed technical prototype is exactly how you tap that ice before stepping on it. Knowing the difference between \"we're not sure we can build this\" and \"we just haven't built it yet\" is a core piece of technical literacy for a product leader, and it's what lets you prioritise the right tests."
      ]
    },
    "caseStudy": {
      "title": "Airbnb's air mattresses: testing the one belief everything depended on",
      "body": [
        "When Brian Chesky and Joe Gebbia started what became Airbnb, their riskiest assumption wasn't \"can we build a booking website\" — it was something far scarier: \"will strangers pay to sleep in another stranger's home?\" If that belief was false, no amount of slick engineering would save them. Everything else — payments, reviews, search, scale — depended entirely on that one leap of faith being true.",
        "So in 2007 they tested exactly that, and nothing else. During a design conference in San Francisco when hotels were sold out, they threw up a hacked-together site, put a few air mattresses on their floor, and offered them to attendees. Three people actually paid to stay. It was a tiny, cheap, unscalable test — but it validated the single load-bearing assumption before they built any real platform. They tapped the thin middle of the ice first."
      ],
      "bridge": "Airbnb didn't build the product to find out if the idea worked — they isolated the one belief that could sink everything and tested just that, for almost nothing, which is the entire discipline of assumption mapping."
    },
    "takeaways": [
      "Every idea rests on hidden beliefs across five categories: desirability, viability, feasibility, usability, and ethical.",
      "Plot each belief on importance vs. evidence; the top-right \"leap of faith\" zone (critical and unproven) is what you test first.",
      "Run a cheap Riskiest Assumption Test on the one fatal belief before investing in even an MVP."
    ],
    "knowledgeCheck": [
      {
        "q": "On the assumption map, which assumptions should you test first?",
        "options": [
          {
            "text": "Those in the top-right \"leap of faith\" zone — critical to the idea and currently unproven",
            "correct": true
          },
          {
            "text": "The ones you already have strong evidence for, to confirm them",
            "correct": false
          },
          {
            "text": "The unimportant ones, because they're quickest to check",
            "correct": false
          }
        ],
        "feedback": "Right — concentrate scarce testing effort on beliefs that are both load-bearing and unproven, not the safe or trivial ones."
      },
      {
        "q": "How does a Riskiest Assumption Test (RAT) differ from a Minimum Viable Product (MVP)?",
        "options": [
          {
            "text": "A RAT cheaply tests only the single riskiest belief; an MVP is a real, costlier minimal product you ship to learn from usage",
            "correct": true
          },
          {
            "text": "A RAT and an MVP are two names for the same thing",
            "correct": false
          },
          {
            "text": "A RAT is always more expensive than an MVP",
            "correct": false
          }
        ],
        "feedback": "Correct — the RAT isolates and tests your one fatal assumption for almost nothing, ideally before you ever build an MVP."
      }
    ],
    "glossaryTerms": [
      "assumption-mapping",
      "leap-of-faith-assumption",
      "riskiest-assumption-test",
      "mvp",
      "desirability",
      "ethical-risk"
    ],
    "sources": [
      {
        "label": "Shortform — The product discovery process",
        "url": "https://www.shortform.com/blog/product-discovery-process/"
      },
      {
        "label": "Product Compass — Assumption Prioritization Canvas",
        "url": "https://www.productcompass.pm/p/assumption-prioritization-canvas"
      },
      {
        "label": "Maven (Precoil) — Assumptions Mapping",
        "url": "https://maven.com/precoil/assumptions-mapping"
      },
      {
        "label": "Clutch — Riskiest Assumption Test vs MVP",
        "url": "https://clutch.co/resources/riskiest-assumption-test-vs-mvp-whats-the-difference"
      }
    ],
    "estMinutes": 9
  },
  "prod-m2-l6": {
    "id": "prod-m2-l6",
    "trackId": "product",
    "moduleId": "prod-m2",
    "order": 6,
    "title": "Cheap Tests: Prototypes, Fake Doors, and Wizard of Oz",
    "coreIdea": "Once you know your riskiest assumption, the skill is finding the cheapest, fastest way to test it without building the real thing.",
    "plainEnglish": [
      "Knowing your riskiest assumption is half the battle; the other half is testing it for almost nothing. There's a whole menu of techniques designed to generate real evidence in days instead of betting months of engineering on a hunch. A fake door tests demand by advertising a feature that doesn't exist yet and counting who clicks. Wizard of Oz fakes automation by secretly having a human do the work the customer thinks a machine is doing. A concierge test delivers the service by hand, high-touch, to learn what people actually value.",
      "The common thread is that none of them require building the real product. They trade engineering for cleverness — a landing page, a human pretending to be software, a manually delivered service — to answer the one question you most need answered.",
      "Pick the technique that matches the risk you're testing, and keep the cost of being wrong tiny. The goal is never a perfect test; it's a fast, cheap signal that lets you bet — or fold — with evidence instead of opinion."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Three classic tricks of show business. A movie trailer is a fake-door test: the studio releases the trailer and watches whether audiences get excited — buzz, pre-sales, shares — before committing to the full marketing push. The trailer is cheap; the wrong blockbuster is not. A chef-run tasting menu is a concierge test: hand-made, high-touch, one table at a time, to learn exactly which dishes diners fall in love with before scaling them to the whole restaurant.",
        "And a carnival fortune-teller machine, secretly operated by a person hidden inside, is a Wizard of Oz: the customer thinks they're talking to a magic box, but it's a human pulling the levers. It proves people want the experience — and will pay for it — long before anyone spends a fortune building the actual machine. In all three, the audience gets a real experience while the producer learns the truth cheaply."
      ]
    },
    "deepSections": [
      {
        "title": "Fake door, Wizard of Oz, concierge, smoke/landing-page tests",
        "teaser": "four cheap tricks, each answering a different question",
        "body": [
          "Each technique answers a slightly different question. A fake-door test puts a button or menu item for a not-yet-built feature in front of real users and measures clicks — it answers \"is there demand?\" without building the feature (just be honest when they click, or you'll burn trust). A smoke or landing-page test is the marketing-page cousin: a page advertising the product with a sign-up or pre-order button, measuring whether anyone wants it before it exists — this is how Dropbox and many others tested demand.",
          "Wizard of Oz fakes the automation: the product looks fully automated to the user, but behind the curtain a human is doing the work. It answers \"will people value the outcome?\" before you build the hard automation. A concierge test goes further and is openly manual — you personally deliver the service by hand to a few customers, learning intimately what they value and where they struggle. Concierge is high-touch and transparent; Wizard of Oz is hidden and looks automated. Both let you learn before building."
        ]
      },
      {
        "title": "The prototype fidelity ladder",
        "teaser": "from rough sketch to a real working slice — climb only as high as the question needs",
        "body": [
          "Prototypes exist on a fidelity ladder, from cheapest and roughest to most expensive and most real. At the bottom: paper sketches and static wireframes, good for testing basic flow and concept. A rung up: clickable mockups in a tool like Figma, which feel interactive enough to test usability without a line of code. Higher still: high-fidelity prototypes that look and behave almost like the real thing. At the top: a live-data prototype or a genuine thin slice of working product.",
          "The discipline is to climb only as high as your question requires. If you're testing whether people understand a new flow, a clickable mockup answers it — building a working version would be wasteful over-investment. If you're testing whether the hard technical part is even possible, only a real working slice (a feasibility spike) will do. Matching the rung to the question is how you avoid both under-testing (too rough to be convincing) and over-testing (so real you've half-built the product just to run an experiment)."
        ]
      },
      {
        "title": "Matching test type to the specific risk and keeping the cost of being wrong low",
        "teaser": "the right test is the cheapest one that genuinely answers your question",
        "body": [
          "There's no universally \"best\" test — only the cheapest test that genuinely answers the specific risk in front of you. Value risk? Reach for demand tests: fake doors, landing pages, willingness-to-pay signals. Usability risk? A clickable prototype with real users attempting real tasks. Feasibility risk? A technical spike. Viability? Structured conversations with the stakeholders who could veto it. Using a usability prototype to test value, or a landing page to test feasibility, gives confident but meaningless results.",
          "Underneath every choice is one principle: keep the cost of being wrong low. The entire reason these techniques exist is that they let you be wrong cheaply and often. A fake door that flops cost you a landing page, not six months of engineering. The mature discovery instinct isn't \"how do I prove I'm right?\" — it's \"what's the cheapest experiment that could prove me wrong before I commit real money?\""
        ]
      }
    ],
    "pmAngle": {
      "body": [
        "Technical-literacy angle: most of these tests need zero production code, which is exactly where a non-technical PM can be enormously effective. You can build a fake door, stand up a landing page, run a concierge test, or play the human behind a Wizard of Oz without writing a line of software — and generate evidence that saves the engineering team months of misdirected work.",
        "But to choose well you must understand the fidelity ladder: which rung — clickable mockup, high-fidelity prototype, or a real working slice — actually answers your specific question. The classic mistake is over-investing engineering on a test that a Figma mockup would have settled, or under-investing with a flimsy test that can't really answer a feasibility question. Knowing how much fidelity a given risk demands, and no more, is the technical judgement that makes a non-technical PM's cheap tests genuinely trustworthy."
      ]
    },
    "caseStudy": {
      "title": "Dropbox's explainer video: 5,000 to 75,000 overnight",
      "body": [
        "In 2007-08, Drew Houston faced a feasibility-heavy product: building reliable file sync across operating systems is genuinely hard engineering. The temptation was to build it first and hope people cared. Instead, Dropbox ran a demand test that needed almost none of that engineering. Houston recorded a short explainer video showing how the product would work — much of it staged rather than fully built — and posted it to test one question: do people even feel this pain badly enough to want a fix?",
        "The answer was emphatic. The beta waitlist jumped from around 5,000 to 75,000 people essentially overnight. That single cheap test validated the value risk — there was real, intense demand — before Dropbox committed the hard sync engineering. (A sibling story: Zappos founder Nick Swinmurn tested \"will people buy shoes online?\" by photographing shoes in local stores and only buying a pair after a customer ordered it — proving demand before building any inventory system at all.)",
        ""
      ],
      "bridge": "Dropbox tested the riskiest belief — that people wanted this badly enough — with a video instead of a finished product, which is the whole point of cheap tests: real evidence, almost no engineering."
    },
    "takeaways": [
      "Fake doors test demand, Wizard of Oz fakes automation with a hidden human, concierge delivers by hand — all without building the real thing.",
      "Climb the fidelity ladder only as high as your question needs — from paper sketch to clickable mockup to a real working slice.",
      "Match the test to the specific risk and keep the cost of being wrong tiny — the best test is the cheapest one that could prove you wrong."
    ],
    "knowledgeCheck": [
      {
        "q": "What is a Wizard of Oz test?",
        "options": [
          {
            "text": "A test where the product looks automated to the user, but a hidden human secretly does the work behind the scenes",
            "correct": true
          },
          {
            "text": "A test where you openly deliver the service by hand and tell the customer it's manual",
            "correct": false
          },
          {
            "text": "A test where you ship the fully built feature to a small group first",
            "correct": false
          }
        ],
        "feedback": "Right — Wizard of Oz fakes the automation with a hidden human, so you can prove people value the outcome before building the hard technology (the openly-manual version is a concierge test)."
      },
      {
        "q": "What did Dropbox's 2007-08 explainer video actually test?",
        "options": [
          {
            "text": "Value/demand risk — whether people felt the pain badly enough to want the product — before building the hard sync engineering",
            "correct": true
          },
          {
            "text": "Feasibility risk — whether file sync was technically possible",
            "correct": false
          },
          {
            "text": "Usability risk — whether the final interface was easy to navigate",
            "correct": false
          }
        ],
        "feedback": "Correct — the video tested demand cheaply (the waitlist leapt from ~5,000 to ~75,000) before Dropbox invested in the difficult sync engineering."
      }
    ],
    "glossaryTerms": [
      "fake-door-test",
      "wizard-of-oz-test",
      "concierge-test",
      "smoke-test",
      "fidelity-ladder",
      "mvp"
    ],
    "sources": [
      {
        "label": "Learning Loop — Fake-door testing",
        "url": "https://learningloop.io/plays/fake-door-testing"
      },
      {
        "label": "Learning Loop — Wizard of Oz",
        "url": "https://learningloop.io/plays/wizard-of-oz"
      },
      {
        "label": "Kromatic — Concierge vs Wizard of Oz test",
        "url": "https://kromatic.com/blog/concierge-vs-wizard-of-oz-test/"
      },
      {
        "label": "Medium — How Uber, Airbnb & Dropbox released MVPs",
        "url": "https://medium.com/@LoganTjm/how-uber-airbnb-dropbox-released-mvps-to-achieve-rapid-growth-d823ac6eaed5"
      }
    ],
    "estMinutes": 9
  }
}
