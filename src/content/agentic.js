// Agentic Engineering & Coding track. Auto-assembled by scripts/assemble-agentic.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = {
  "ag-m1-l1": {
    "coreIdea": "A large language model is a next-word predictor trained on vast text — given some input it generates the most plausible continuation, one token at a time, so it is fluent and usually right but never looking anything up.",
    "estMinutes": 9,
    "plainEnglish": [
      "A large language model, or `LLM`, is the engine behind tools like ChatGPT and Claude.",
      "Strip away the magic and it does one thing: it predicts what text most plausibly comes next.",
      "You give it some text, and it continues that text one small piece at a time — each piece is called a `token`, roughly a word or part of a word.",
      "It learned to do this by reading an enormous amount of writing and getting very, very good at guessing the next token.",
      "That is the whole trick — and understanding it tells you exactly when to trust the output and when to check it."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture the autocomplete on your phone, but scaled up almost beyond recognition — instead of suggesting the next word in a text message, it can continue an essay, a contract, or working code, and it does it astonishingly well.",
        "It is always answering the same quiet question: given everything so far, what word most plausibly comes next?",
        "Where the metaphor breaks: phone autocomplete just replays your own past habits, while an LLM has absorbed patterns from a huge slice of human writing — so it can produce things it was never directly shown, which is also why it can confidently produce things that are simply wrong."
      ]
    },
    "deepSections": [
      {
        "title": "One token at a time",
        "teaser": "How a sentence actually gets built",
        "body": [
          "An LLM does not write a whole answer at once.",
          "It writes one `token` — a word or word-fragment — then feeds everything so far back in and predicts the next one, over and over.",
          "At each step it isn't choosing the single 'true' next token; it is ranking the plausible options by probability and picking from the top.",
          "A setting called `temperature` controls how adventurous that pick is: low temperature stays safe and repetitive, higher temperature takes more creative risks.",
          "This is why the same prompt can give different answers twice, and why a wrong turn early can snowball into a confidently wrong paragraph."
        ]
      },
      {
        "title": "Not a database, not a calculator",
        "teaser": "It generates plausibility, it does not retrieve facts",
        "body": [
          "A database stores exact records and looks them up; an LLM stores no records — it has only the statistical patterns of language it absorbed in training.",
          "So when it gives you a fact, it is not retrieving it; it is generating the most plausible-sounding continuation, which is usually but not always the true one.",
          "When the plausible answer happens to be false, we call it a `hallucination` — fluent, confident, and wrong.",
          "It is also not a calculator: it predicts what the answer to `27 x 48` tends to look like rather than computing it, so arithmetic and precise counting are weak spots.",
          "The practical rule: an LLM is brilliant at shaping language and reasoning over text, and unreliable as a source of hard facts or exact math unless you give it the data or a tool."
        ]
      },
      {
        "title": "Fluent, plausible, and only usually right",
        "teaser": "Why it is still astonishingly useful",
        "body": [
          "Because it is a next-token predictor, its confidence and its correctness are two separate things — it sounds equally sure whether it is right or wrong.",
          "It is also not deterministic by default: ask twice and you may get two different (both reasonable) answers.",
          "That sounds like a fatal flaw, but for a huge class of work — drafting, summarising, rewriting, translating, explaining, brainstorming, generating first-draft code — 'fluent and usually right' is genuinely transformative.",
          "The skill is matching the task to the tool: lean on it where a strong draft you will review beats a blank page, and add verification where being wrong is expensive.",
          "Everything else in this track — prompting, giving it real data to read, giving it tools — is built to push 'usually right' closer to 'reliably right'."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "Large Language Model (LLM)",
        "def": "A system trained on a vast amount of text to predict the next piece of text, used to generate fluent language, answers, and code."
      },
      {
        "term": "Token",
        "def": "The small unit an LLM reads and writes — roughly a word or part of a word — built up one at a time into a full response."
      },
      {
        "term": "Next-token prediction",
        "def": "The core thing an LLM does: given the text so far, estimate which token most plausibly comes next, then repeat."
      },
      {
        "term": "Hallucination",
        "def": "When a model produces a confident, fluent statement that is simply false — a side effect of generating plausible text rather than looking facts up."
      },
      {
        "term": "Temperature",
        "def": "A dial controlling how much randomness the model uses when picking the next token — low is safe and predictable, high is more varied and creative."
      },
      {
        "term": "Deterministic",
        "def": "Giving the exact same output every time for the same input — something LLMs are NOT by default, which is why answers can vary between runs."
      }
    ],
    "pmAngle": {
      "body": [
        "If you own a product built on an LLM, you are shipping something fluent and usually right, not a system that returns the same correct answer every time — so your real job is deciding where 'usually right' is good enough and where it is not.",
        "That single judgement drives everything downstream: where you need human review, where you must feed the model trusted data or a real calculator, and what you promise users about accuracy.",
        "Treating the model as if it 'looks things up' is the most expensive mistake a team can make — it leads to shipping confident hallucinations into places where being wrong has real cost."
      ]
    },
    "caseStudy": {
      "title": "Air Canada's chatbot invents a refund policy",
      "body": [
        "In 2022 a grieving passenger asked Air Canada's website chatbot about bereavement fares and was told he could claim a discount retroactively after booking.",
        "That policy did not exist — the LLM-style bot had generated a plausible-sounding answer rather than retrieving the airline's actual rules.",
        "When Air Canada refused the refund, the passenger took it to a Canadian tribunal, which in 2024 ruled the airline was bound by what its bot said and ordered it to pay.",
        "The bot was fluent, confident, and wrong — a textbook hallucination presented to a customer as fact."
      ],
      "bridge": "The failure wasn't a bug in the chatbot; it was treating a next-token predictor as if it were looking up policy in a database — the exact mental-model mistake this lesson is built to prevent."
    },
    "takeaways": [
      "An LLM is a next-token predictor: given text, it generates the most plausible continuation one token at a time.",
      "It is not a database, not a calculator, and not deterministic — it produces fluent text that is usually, not always, right.",
      "Confidence and correctness are separate: it sounds just as sure when it is wrong (a hallucination) as when it is right.",
      "It is still transformative for drafting, summarising, translating, and explaining — match the task to the tool and verify where being wrong is costly."
    ],
    "knowledgeCheck": [
      {
        "q": "At its core, what is a large language model actually doing when it answers you?",
        "options": [
          {
            "text": "Predicting the most plausible next token, one at a time, given the text so far",
            "correct": true
          },
          {
            "text": "Searching a database of stored facts and returning the matching record",
            "correct": false
          },
          {
            "text": "Running a calculation to derive the single correct answer",
            "correct": false
          }
        ],
        "feedback": "Right — an LLM is fundamentally a next-token predictor; it generates a plausible continuation rather than retrieving or computing a fixed answer."
      },
      {
        "q": "A model confidently states a refund policy that turns out not to exist. What is the best explanation?",
        "options": [
          {
            "text": "It generated a fluent, plausible-sounding answer rather than looking the policy up — a hallucination",
            "correct": true
          },
          {
            "text": "Its policy database was temporarily out of date and needs refreshing",
            "correct": false
          },
          {
            "text": "The model is broken and should always be expected to fail on facts",
            "correct": false
          }
        ],
        "feedback": "Exactly — the model has no policy database to consult; it produced a plausible continuation that happened to be false, which is a hallucination, not a stale lookup."
      },
      {
        "q": "Why might the same prompt give you two different answers on two tries?",
        "options": [
          {
            "text": "LLMs are not deterministic by default — they sample from plausible next tokens, so output can vary between runs",
            "correct": true
          },
          {
            "text": "The model rewrites its stored record each time you ask",
            "correct": false
          },
          {
            "text": "Different answers always mean one of them is a hallucination",
            "correct": false
          }
        ],
        "feedback": "Correct — because the model picks from probable next tokens (tuned by temperature), it is not deterministic, so reasonable answers can differ run to run."
      }
    ],
    "id": "ag-m1-l1",
    "trackId": "agentic",
    "moduleId": "ag-m1",
    "order": 1,
    "title": "What an LLM Is, for a Practitioner"
  },
  "ag-m1-l2": {
    "coreIdea": "Claude, ChatGPT, and Gemini are the same kind of tool — capable LLM assistants — so you pick on fit for your task, not loyalty, and the durable skill is knowing how to evaluate one rather than memorising today's leader.",
    "estMinutes": 9,
    "plainEnglish": [
      "Claude (from Anthropic), ChatGPT (from OpenAI), and Gemini (from Google) are the three best-known frontier chat assistants.",
      "A `frontier` model just means one of the most capable models available right now, made by a lab pushing the edge of what's possible.",
      "They are far more alike than different: all three can write, summarise, answer questions, write code, and hold a conversation.",
      "Picking between them is not about which brand is \"best\" in the abstract — it is about which one fits the specific task in front of you.",
      "And because they leapfrog each other every few months, the skill worth having is knowing how to judge one for your own work, not remembering who led last quarter."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Think of them like three premium car brands — say a BMW, a Mercedes, and an Audi.",
        "They are all genuinely good, they all get you there comfortably, and for most trips you'd be happy in any of them; the right choice depends on this journey — the cargo, the terrain, the price you'll pay.",
        "Where the metaphor bends: cars barely change between model years, but these assistants get materially better every few months, so last year's clear winner can be this year's runner-up — you re-test, you don't just re-buy."
      ]
    },
    "deepSections": [
      {
        "title": "Same kind of tool — choose on fit, not fandom",
        "teaser": "They are siblings, not opposites",
        "body": [
          "All three are `LLMs` — large language models — wrapped in a friendly chat interface.",
          "That means under the hood they do the same core thing: predict useful text from the words you give them.",
          "So the honest starting point is that for everyday work, any of the three will usually do a fine job.",
          "Fandom — \"I'm a Claude person\" or \"GPT or nothing\" — is how you end up using the wrong tool for a task out of habit.",
          "The useful question is never \"which is best?\" but \"which is the best fit for this job, today?\""
        ]
      },
      {
        "title": "The dimensions that actually decide it",
        "teaser": "Six levers worth checking before you commit",
        "body": [
          "Task type: some jobs reward careful long-form reasoning and writing, others reward quick factual lookups — match the model to the shape of the work.",
          "Context window: how much text the model can hold in mind at once (covered fully in the next lesson) — bigger windows let you paste a whole report or codebase.",
          "Multimodality: whether it can also read images, listen to audio, or look at a screenshot, not just handle text.",
          "Ecosystem integration: whether it already lives inside the tools you use — your email, your documents, your code editor — so you don't have to copy-paste between apps.",
          "Tooling: extras built around the model, like coding agents that can edit files for you (covered later in this track).",
          "Cost: the price per use, which matters enormously once you're sending thousands of requests, far less for casual personal use."
        ]
      },
      {
        "title": "The frontier leapfrogs — so build the skill, not the loyalty",
        "teaser": "Why benchmark numbers expire faster than milk",
        "body": [
          "A `benchmark` is a standard test used to score models — handy, but it captures a single moment and ages fast.",
          "These three labs release major upgrades every few months, and the lead changes hands constantly.",
          "So a lesson that said \"Model X wins\" would be wrong within a quarter — which is exactly why this one refuses to name a winner.",
          "The durable move is to keep a small set of your own real tasks and try a new model on them when it ships.",
          "Better still: run the same prompt through two assistants side by side and compare the answers — five minutes of testing beats any leaderboard for your specific work."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "frontier model",
        "def": "One of the most capable AI models available at a given moment, built by a lab pushing the leading edge — Claude, ChatGPT, and Gemini are the best-known examples."
      },
      {
        "term": "LLM (large language model)",
        "def": "The kind of AI that powers all three assistants: a system trained on huge amounts of text that responds by predicting useful words."
      },
      {
        "term": "context window",
        "def": "How much text a model can hold in mind at once — its short-term working memory; a bigger window means you can give it more material to work with in one go."
      },
      {
        "term": "multimodality",
        "def": "A model's ability to handle more than just text — for example reading an image, looking at a screenshot, or processing audio."
      },
      {
        "term": "ecosystem integration",
        "def": "How well an assistant plugs into the apps you already use, like your email, documents, or code editor, so you don't have to copy work between tools."
      },
      {
        "term": "benchmark",
        "def": "A standard test used to score and compare AI models — useful as a snapshot, but it ages quickly as new models ship."
      }
    ],
    "pmAngle": {
      "body": [
        "If you own the product or the bill, picking a default assistant is a real decision, but it should be made on fit and cost for your actual workload — not on which brand made headlines this month.",
        "Treat it as reversible: keep a short list of your own representative tasks, re-test on them when a major upgrade lands, and be ready to switch defaults without drama.",
        "And watch the cost dimension closely — a model that's a few cents pricier per request is irrelevant for personal use but can dominate the budget once it runs at production scale."
      ]
    },
    "caseStudy": {
      "title": "GitHub Copilot opens the door to multiple models",
      "body": [
        "GitHub Copilot launched in 2021 powered by a single OpenAI model, and for years that was the only engine under the hood.",
        "By 2024–2025, GitHub had added a model picker — letting developers choose between OpenAI's GPT models, Anthropic's Claude, and Google's Gemini for the same coding tasks.",
        "GitHub's own framing was telling: there is no one best model, so they put the choice in the user's hands rather than betting the product on a single provider.",
        "Developers reported reaching for different models for different jobs — one for a quick edit, another for a gnarly refactor."
      ],
      "bridge": "Even a product built on one model concluded that the right answer is choose-on-fit, and gave users a switch — exactly the mindset to bring to your own work."
    },
    "takeaways": [
      "Claude, ChatGPT, and Gemini are the same kind of tool — capable LLM assistants — so choose on fit for the task, not brand loyalty.",
      "The levers that actually decide it: task type, context-window size, multimodality, ecosystem integration, tooling, and cost.",
      "Benchmark rankings age in months because the three labs leapfrog constantly — so don't memorise today's leader.",
      "The durable skill is evaluating a model on your own real tasks; run the same prompt through two and compare."
    ],
    "knowledgeCheck": [
      {
        "q": "What is the best mental model for choosing between Claude, ChatGPT, and Gemini?",
        "options": [
          {
            "text": "They are broadly similar capable assistants, so pick the best fit for the specific task rather than picking a favourite brand",
            "correct": true
          },
          {
            "text": "One of them is permanently the best, so the job is to find it once and always use it",
            "correct": false
          },
          {
            "text": "They are fundamentally different kinds of technology, so the choice rarely matters",
            "correct": false
          }
        ],
        "feedback": "Right — all three are capable LLM assistants of the same kind, so the useful question is fit-for-this-task, not which brand to be loyal to."
      },
      {
        "q": "Which of these is a dimension that actually matters when picking an assistant for a job?",
        "options": [
          {
            "text": "Context-window size — how much text it can hold in mind at once",
            "correct": true
          },
          {
            "text": "Which company has the most recognisable logo",
            "correct": false
          },
          {
            "text": "How long the company has existed",
            "correct": false
          }
        ],
        "feedback": "Correct — context-window size is one of the real levers, alongside task type, multimodality, ecosystem integration, tooling, and cost."
      },
      {
        "q": "Why does this lesson refuse to name a single \"best\" model or quote benchmark scores?",
        "options": [
          {
            "text": "Because the three labs leapfrog each other constantly, so any ranking ages fast — the durable skill is evaluating a model on your own tasks",
            "correct": true
          },
          {
            "text": "Because the models are all identical, so comparing them is pointless",
            "correct": false
          },
          {
            "text": "Because benchmark scores are secret and never published",
            "correct": false
          }
        ],
        "feedback": "Exactly — the frontier shifts every few months, so memorising today's leader is a trap; testing the same prompt across two assistants on your real work is what lasts."
      }
    ],
    "sources": [
      {
        "label": "Anthropic — Meet Claude",
        "url": "https://www.anthropic.com/claude"
      },
      {
        "label": "GitHub — Bringing developer choice to Copilot with multiple models",
        "url": "https://github.blog/news-insights/product-news/bringing-developer-choice-to-copilot/"
      },
      {
        "label": "Google — Gemini models overview",
        "url": "https://ai.google.dev/gemini-api/docs/models"
      }
    ],
    "id": "ag-m1-l2",
    "trackId": "agentic",
    "moduleId": "ag-m1",
    "order": 2,
    "title": "Claude vs ChatGPT vs Gemini: When to Use Which"
  },
  "ag-m1-l3": {
    "coreIdea": "An LLM only knows what is inside its context window right now plus what it absorbed in training — so what you put in the window largely decides the quality of what comes out.",
    "estMinutes": 9,
    "plainEnglish": [
      "A large language model has no memory of you between conversations.",
      "Each time you talk to it, the model reads one block of text — your prompt, the chat so far, and anything you paste in — and answers based on just that.",
      "That block of text is called the `context window`: the model's short-term working memory.",
      "Whatever is in the window, the model can \"see\" right now; whatever is not in it, the model has no idea about — unless it happened to learn it during training.",
      "So getting good answers is less about clever wording and more about putting the right information in front of the model."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a brilliant consultant working at a small desk with no filing cabinet and no memory of yesterday.",
        "They can only reason about the papers currently spread on the desk — the moment a page slides off the edge, it is gone, and they will confidently carry on without it.",
        "The metaphor bends in one place: a real desk has soft limits, but the context window has a hard, countable ceiling measured in `tokens`, and the model does not feel the pages slipping off — it just quietly works with whatever is left."
      ]
    },
    "deepSections": [
      {
        "title": "What is actually in the window",
        "teaser": "Everything the model can \"see\" this turn lives here",
        "body": [
          "The `context window` is all the text the model is looking at for a single response.",
          "It holds three things stacked together: any `system prompt` (standing instructions like \"you are a helpful tutor\"), the conversation so far (your messages and the model's replies), and anything you pasted in (a document, an email, some code).",
          "The model reads this whole block top to bottom and predicts what comes next.",
          "Crucially, the model knows only two things: what is in the window, plus the general patterns it absorbed during `training` — its frozen, built-in knowledge from before it was released.",
          "It has no live access to your files, your past chats, or today's news unless that text is sitting in the window right now."
        ]
      },
      {
        "title": "It is measured in tokens, and the window is finite",
        "teaser": "A desk with a fixed surface area, counted in pieces of words",
        "body": [
          "The window is not measured in pages but in `tokens` — chunks of text, where one token is roughly three-quarters of an English word.",
          "Every model has a maximum window size: an illustrative model might hold around 200,000 tokens, very roughly 150,000 words, or a few long books' worth.",
          "That sounds huge, but a long working session — big documents, hours of back-and-forth, pasted logs — can fill it.",
          "When the conversation grows past the limit, the oldest text gets pushed out to make room, and the model simply stops being able to see it.",
          "From your side it looks like the model suddenly \"forgot\" something you agreed on an hour ago — it did not forget, that page just slid off the desk."
        ]
      },
      {
        "title": "Why the window dominates the result",
        "teaser": "Relevant context in beats hoping it remembers",
        "body": [
          "Because the model reasons only over what is in the window, the contents of that window largely determine the quality of the answer.",
          "Give it the actual contract clause and it can quote it; ask it to \"remember the clause from earlier\" after that text has scrolled out, and it will guess.",
          "A model guessing from missing context produces a confident, fluent, wrong answer — a `hallucination` — and it will not warn you.",
          "So the reliable move is to bring the relevant material into the window, not to hope the model \"still remembers\" it.",
          "This is why two people can get wildly different results from the same model: one fed it the right context, the other did not."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "context window",
        "def": "The single block of text a model can read for one response — your prompt, the conversation so far, and any documents pasted in. It is the model's short-term working memory."
      },
      {
        "term": "token",
        "def": "The unit the window is measured in — a chunk of text roughly three-quarters of an English word. Window sizes and AI bills are both counted in tokens."
      },
      {
        "term": "system prompt",
        "def": "Standing instructions placed at the top of the window that set the model's role and rules, like \"you are a concise legal assistant.\""
      },
      {
        "term": "training knowledge",
        "def": "The general, frozen knowledge a model absorbed before release. It is fixed and offline — separate from the live text in the window."
      },
      {
        "term": "context overflow",
        "def": "What happens when a conversation grows past the window's token limit: the oldest text is pushed out, so the model can no longer see it."
      },
      {
        "term": "hallucination",
        "def": "A confident, fluent answer the model invents when it lacks the real context — it does not flag that it is guessing."
      }
    ],
    "pmAngle": {
      "body": [
        "If your AI feature gives flaky answers, the first question is rarely \"is the model dumb?\" — it is \"did the right information reach the window?\"",
        "Tokens are also the meter: every token in the window is something you pay for, so a bigger window means better grounding but a higher bill, and that trade-off is yours to own.",
        "Treating the window as the product surface — deciding what gets loaded, what gets dropped, and when a long chat should be reset — is what separates a reliable feature from one that mysteriously \"forgets.\""
      ]
    },
    "caseStudy": {
      "title": "Anthropic's Claude raises the window to 100,000 tokens",
      "body": [
        "In May 2023, Anthropic expanded its Claude model's context window to 100,000 tokens, around 75,000 words at the time — a large jump over typical windows then.",
        "Anthropic showed it by pasting the entire text of The Great Gatsby into a single prompt and asking questions about specific passages.",
        "The model could answer because the whole novel sat inside the window; nothing had to be \"remembered\" from training.",
        "Drop even one chapter out of the window and questions about that chapter would have to be guessed at instead of read."
      ],
      "bridge": "The demo makes the rule concrete: the model can reason brilliantly about a whole book — but only the part of it that is actually inside the window."
    },
    "takeaways": [
      "The context window is the model's short-term working memory: your prompt, the chat so far, and any pasted text — everything it can \"see\" right now.",
      "The model knows only what is in the window plus its frozen training knowledge; it has no memory of past chats unless you bring it back.",
      "Windows are finite and measured in tokens, so very long chats or huge documents overflow and the earliest parts silently drop out.",
      "What you put in the window largely determines the answer — relevant context in beats hoping the model remembers."
    ],
    "knowledgeCheck": [
      {
        "q": "What does a large language model actually \"know\" when it answers you?",
        "options": [
          {
            "text": "Only the text in its context window right now, plus the frozen knowledge it absorbed during training",
            "correct": true
          },
          {
            "text": "Everything from all your previous conversations, which it stores and recalls automatically",
            "correct": false
          },
          {
            "text": "Your files and the live internet, which it reads in the background as needed",
            "correct": false
          }
        ],
        "feedback": "Right — the model reasons over what is in the window plus its training knowledge. It has no memory of past chats and no live access to your files unless that text is in the window."
      },
      {
        "q": "During a very long conversation, the model suddenly seems to \"forget\" a detail you agreed on near the start. What most likely happened?",
        "options": [
          {
            "text": "The conversation grew past the window's token limit, so the earliest text was pushed out and the model can no longer see it",
            "correct": true
          },
          {
            "text": "The model deliberately deleted that detail because it judged it unimportant",
            "correct": false
          },
          {
            "text": "The model's training knowledge expired and needs to be refreshed",
            "correct": false
          }
        ],
        "feedback": "Correct — the window is finite, measured in tokens. When a chat overflows it, the oldest text drops out, which looks like forgetting but is really the page sliding off the desk."
      },
      {
        "q": "You want a reliable answer about a specific clause in a contract. What is the better approach?",
        "options": [
          {
            "text": "Paste the actual clause into the window so the model can read it directly",
            "correct": true
          },
          {
            "text": "Ask the model to recall the clause from a document you discussed in an earlier chat",
            "correct": false
          },
          {
            "text": "Trust that a clause this important is part of the model's built-in training knowledge",
            "correct": false
          }
        ],
        "feedback": "Right — relevant context in beats hoping it remembers. With the clause in the window the model can quote it; without it, the model guesses and may hallucinate a confident, wrong answer."
      }
    ],
    "sources": [
      {
        "label": "Anthropic — Introducing 100K Context Windows",
        "url": "https://www.anthropic.com/news/100k-context-windows"
      },
      {
        "label": "Anthropic — Context windows (model documentation)",
        "url": "https://docs.anthropic.com/en/docs/build-with-claude/context-windows"
      }
    ],
    "id": "ag-m1-l3",
    "trackId": "agentic",
    "moduleId": "ag-m1",
    "order": 3,
    "title": "Context Is Everything: the Window as Working Memory"
  },
  "ag-m1-l4": {
    "coreIdea": "An LLM generates plausible-sounding text rather than looking up truth, and only knows the world up to its training cutoff — so verifying anything load-bearing is the core discipline, not an optional extra.",
    "estMinutes": 9,
    "plainEnglish": [
      "An LLM does not look facts up the way a search engine does.",
      "It predicts the next likely words, one after another, based on patterns it learned in training.",
      "Most of the time those patterns happen to be true — but the model is optimising for what *sounds* right, not for what *is* right.",
      "So it can state a wrong fact, invent a quote, or cite a source that does not exist — all in the same fluent, confident voice it uses for correct answers.",
      "On top of that, it only knows what existed before its training cutoff date, so it is simply blind to anything newer unless you tell it or let it search.",
      "That is why verification is not a nice-to-have. It is the habit that separates people who use these tools well from people who get burned."
    ],
    "metaphor": {
      "title": "🧭 Think of it like…",
      "body": [
        "Picture a brilliant improv actor playing a doctor. Given any cue, they will produce a smooth, confident, medical-sounding answer — because their job is to keep the scene believable, not to be a real doctor.",
        "An LLM is that actor: it is rewarded for fluent, plausible continuations, so it never breaks character to say \"I actually don't know.\" It fills the gap with something that fits.",
        "The metaphor breaks here: the actor knows they are improvising, while the model has no inner sense of \"I'm making this up\" versus \"I looked this up\" — to it, both feel identical."
      ]
    },
    "deepSections": [
      {
        "title": "Hallucination: confident text, no truth check",
        "teaser": "The model writes what's plausible, not what's verified",
        "body": [
          "A `hallucination` is when a model states something false as if it were fact.",
          "It is not lying and not glitching — it is doing exactly what it was built to do: produce the most likely-looking next words.",
          "If the most plausible-sounding answer happens to be wrong, you get a wrong answer delivered with full confidence.",
          "Common forms: invented citations and book titles, fake API methods or function names that *look* real, made-up statistics, and wrong dates.",
          "The danger is that hallucinations are not flagged or shaded differently — a fabricated court case reads exactly like a real one.",
          "Rule of thumb: the more specific and checkable a claim is (a number, a name, a quote, a URL), the more you should actually check it."
        ]
      },
      {
        "title": "Knowledge cutoff: a model frozen in time",
        "teaser": "It can't know what happened after its training ended",
        "body": [
          "A `knowledge cutoff` is the date after which the model has seen no data.",
          "Training is a one-off snapshot of text, not a live connection to the internet — once it ends, the model's knowledge stops growing.",
          "So a model trained with a 2024 cutoff genuinely does not know who won an election in 2025, or that a library released a breaking change last month.",
          "Worse, asking it about events after the cutoff often produces a confident *guess* rather than an honest \"I don't know\" — cutoff blindness and hallucination compound each other.",
          "The fix is to bring the fresh information to the model: paste in the doc, link the changelog, or use a tool that lets it search the live web.",
          "Always sanity-check the cutoff for anything time-sensitive — prices, versions, current events, recent people and roles."
        ]
      },
      {
        "title": "The verify discipline: four habits that scale",
        "teaser": "Treat confident tone as zero evidence of correctness",
        "body": [
          "Habit one: check anything load-bearing against a real source — if a decision, a line of code, or a published claim depends on it, confirm it independently.",
          "Habit two: ask for sources, then actually open them; a model can fabricate a citation as easily as the fact it supposedly supports.",
          "Habit three: prefer to have the model *reason from material you provide* rather than recall from memory — paste the contract, the docs, the data, and ask it to work from that.",
          "Habit four: decouple confidence from correctness — a fluent, assertive tone is produced the same way whether the answer is right or wrong, so it tells you nothing.",
          "Notice this is risk-based, not paranoid: a brainstorm or a first draft barely needs checking, while a legal claim, a medical fact, or production code needs it every time.",
          "The skill you are building is calibrated trust — knowing *which* outputs to lean on and *which* to verify before you act."
        ]
      }
    ],
    "keyTerms": [
      {
        "term": "hallucination",
        "def": "When a model states something false as if it were fact — an invented citation, a fake function name, a wrong date — delivered in the same confident voice as a correct answer."
      },
      {
        "term": "knowledge cutoff",
        "def": "The date after which a model has seen no training data, so it is unaware of anything that happened later unless you supply it or let it search."
      },
      {
        "term": "training data",
        "def": "The large body of text a model learned patterns from; it is a fixed snapshot, not a live feed, which is why the model's knowledge freezes at the cutoff."
      },
      {
        "term": "load-bearing claim",
        "def": "A fact or output that something real depends on — a decision, a payment, a legal filing, a line of production code — and therefore must be verified before you act on it."
      },
      {
        "term": "grounding",
        "def": "Giving the model the actual source material (documents, data, a live search result) so it answers *from that* instead of from possibly-stale or invented memory."
      },
      {
        "term": "calibrated trust",
        "def": "Knowing which outputs you can lean on and which you must check first — matching how much you verify to how much is at stake."
      }
    ],
    "pmAngle": {
      "body": [
        "If your product or workflow puts an LLM's output in front of users or into a downstream system, hallucination is a quality and liability risk you now own — \"the model said so\" is not a defence.",
        "The product question is rarely \"is the model accurate?\" and almost always \"what is our verification step, and who or what performs it?\" — a human reviewer, a citation the user can click, or a tool that grounds the answer in real data.",
        "Building that check-step in from the start is cheaper than the apology, the correction, and the lost trust that follow a confidently wrong answer shipped at scale."
      ]
    },
    "caseStudy": {
      "title": "The lawyer who cited cases that never existed (Mata v. Avianca, 2023)",
      "body": [
        "In 2023, a New York lawyer used ChatGPT to research a personal-injury case against the airline Avianca and submitted a brief citing several supporting court decisions.",
        "The decisions were fabricated — ChatGPT had invented the case names, the quotes, and the citations, all in convincing legal style.",
        "When opposing counsel and the judge could not find the cases, the lawyer asked ChatGPT to confirm they were real, and it confidently said yes — a hallucination vouching for a hallucination.",
        "The court sanctioned the lawyers and fined them $5,000, and the episode became a widely cited cautionary tale about trusting AI output unverified."
      ],
      "bridge": "Every failure here was preventable by one habit — opening the cited sources to check they existed — which is exactly the verify discipline this lesson is about."
    },
    "takeaways": [
      "An LLM generates plausible text, not looked-up truth, so it can state false things — hallucinations — with total confidence.",
      "A model only knows the world up to its knowledge cutoff and is blind to anything newer unless you supply it or let it search.",
      "Confident tone is produced the same way for right and wrong answers, so it is no evidence of correctness.",
      "Verify anything load-bearing: check real sources, ask for and open citations, and prefer reasoning from material you provide."
    ],
    "knowledgeCheck": [
      {
        "q": "Why can an LLM state a false fact with complete confidence?",
        "options": [
          {
            "text": "Because it generates the most plausible-sounding next words rather than looking up verified truth",
            "correct": true
          },
          {
            "text": "Because it is deliberately programmed to occasionally deceive the user",
            "correct": false
          },
          {
            "text": "Because it ran out of memory and substituted random text",
            "correct": false
          }
        ],
        "feedback": "Right — a hallucination is the model doing its core job (producing plausible text), so when the plausible answer is wrong, it still arrives in a confident voice."
      },
      {
        "q": "A model has a knowledge cutoff in 2024. You ask it about a library update released last month. What is the safe assumption?",
        "options": [
          {
            "text": "It cannot reliably know — you should paste the changelog or let it search, then verify",
            "correct": true
          },
          {
            "text": "It automatically pulled the latest version from the internet while answering",
            "correct": false
          },
          {
            "text": "Its confident, detailed answer proves it has the up-to-date information",
            "correct": false
          }
        ],
        "feedback": "Correct — the model's knowledge freezes at its cutoff, so for anything newer you must ground it with fresh material or a search tool, then check the result."
      },
      {
        "q": "Which habit best reflects the verify discipline for a load-bearing claim?",
        "options": [
          {
            "text": "Ask for the sources, open them yourself, and confirm the claim against real material before acting on it",
            "correct": true
          },
          {
            "text": "Trust it if the answer is detailed and stated with confidence",
            "correct": false
          },
          {
            "text": "Re-ask the same model whether its own answer is correct and accept its yes",
            "correct": false
          }
        ],
        "feedback": "Exactly — confident tone is no evidence, and a model can vouch for its own hallucination, so verification means checking against a real, independent source."
      }
    ],
    "sources": [
      {
        "label": "Reuters — New York lawyers sanctioned for using fake ChatGPT cases in legal brief",
        "url": "https://www.reuters.com/legal/new-york-lawyers-sanctioned-using-fake-chatgpt-cases-legal-brief-2023-06-22/"
      },
      {
        "label": "IBM — What are AI hallucinations?",
        "url": "https://www.ibm.com/think/topics/ai-hallucinations"
      },
      {
        "label": "Anthropic — Reducing hallucinations (prompt engineering guidance)",
        "url": "https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/reduce-hallucinations"
      }
    ],
    "id": "ag-m1-l4",
    "trackId": "agentic",
    "moduleId": "ag-m1",
    "order": 4,
    "title": "Why You Always Verify: Hallucination & Knowledge Cutoff"
  }
}

const tracks = [
  {
    "id": "agentic",
    "title": "Agentic Engineering & Coding",
    "tagline": "Get 10× from Claude, ChatGPT, Gemini and coding agents — and understand the engineering underneath well enough to build your own.",
    "accent": "agent",
    "accentVar": "var(--agent)",
    "modules": [
      {
        "id": "ag-m1",
        "title": "Module 1 — Foundations: Working with LLMs",
        "goal": "A practitioner’s mental model of what these models are — and are not — so you can use them well.",
        "lessonIds": [
          "ag-m1-l1",
          "ag-m1-l2",
          "ag-m1-l3",
          "ag-m1-l4"
        ]
      }
    ]
  }
]

const agenticGlossary = {}

export default { tracks, lessons, agenticGlossary }
