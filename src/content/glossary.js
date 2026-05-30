// Plain-English glossary. termId -> { term, plain, seeAlso: [lessonId] }.
export default {
  "token": {
    "term": "Token",
    "plain": "The small chunk of text — often a word-piece, not a whole word — that a language model reads and writes one at a time. Tokens are the unit you pay for and the unit that fills the model’s limited working memory.",
    "seeAlso": [
      "eng-m1-l1",
      "eng-m1-l3",
      "eng-m1-l8",
      "eng-m2-l1",
      "eng-m3-l7",
      "eng-m6-l3"
    ]
  },
  "temperature": {
    "term": "Temperature",
    "plain": "A setting that controls how adventurously a model picks its next chunk of text. Low = safe and repetitive; high = creative and more likely to wander. It’s why the same question can get different answers.",
    "seeAlso": [
      "eng-m1-l1"
    ]
  },
  "inference": {
    "term": "Inference",
    "plain": "Using a trained model to produce an answer — the per-request work (and per-request cost) that happens every time someone uses the product. Distinct from training, which builds the model once.",
    "seeAlso": [
      "eng-m1-l1",
      "eng-m1-l5"
    ]
  },
  "large-language-model": {
    "term": "Large Language Model (LLM)",
    "plain": "An AI system trained on enormous amounts of text to predict the next chunk of text. The engine behind tools like ChatGPT and Claude. Fluent by design; truthful only when you engineer it to be.",
    "seeAlso": [
      "eng-m1-l1"
    ]
  },
  "product-operating-model": {
    "term": "Product Operating Model",
    "plain": "The way the best tech companies run: small empowered teams are given problems to solve and judged on outcomes, rather than handed a list of features to build.",
    "seeAlso": [
      "prod-m1-l1"
    ]
  },
  "feature-factory": {
    "term": "Feature Factory",
    "plain": "An organisation where executives decide the solutions and hand teams a roadmap of features to execute. Measures success by features shipped, not problems solved.",
    "seeAlso": [
      "prod-m1-l1",
      "prod-m1-l3",
      "prod-m2-l1"
    ]
  },
  "empowered-team": {
    "term": "Empowered Team",
    "plain": "A cross-functional team (product, design, engineering) given a problem to solve and the freedom to find the best solution — the opposite of a team that just builds a handed-down spec.",
    "seeAlso": [
      "prod-m1-l1",
      "prod-m1-l2",
      "prod-m3-l1",
      "prod-m4-l1"
    ]
  },
  "outcome": {
    "term": "Outcome (vs Output)",
    "plain": "A measurable change in customer behaviour or business results (the goal), as opposed to output — features shipped (the activity). You can produce lots of output and move no outcome.",
    "seeAlso": [
      "prod-m1-l1",
      "prod-m1-l3",
      "prod-m2-l3",
      "prod-m2-l4"
    ]
  },
  "knowledge-cutoff": {
    "term": "Knowledge cutoff",
    "plain": "The date after which a model knows nothing, because its knowledge was frozen when its training data was collected. It has no awareness of events that happened later unless you supply that information at request time.",
    "seeAlso": [
      "eng-m1-l2",
      "eng-m1-l5"
    ]
  },
  "rag": {
    "term": "Retrieval-augmented generation (RAG)",
    "plain": "A technique that fetches relevant documents and hands them to the model so it answers from real sources instead of relying on its frozen memory. It's the main way to give a model access to fresh or private information and to reduce hallucination.",
    "seeAlso": [
      "eng-m1-l2",
      "eng-m1-l4",
      "eng-m1-l6",
      "eng-m2-l2",
      "eng-m6-l1",
      "eng-m6-l4"
    ]
  },
  "hallucination": {
    "term": "Hallucination",
    "plain": "When a model produces fluent, confident, plausible output that is simply false — like an invented fact, statistic, or citation. It happens because the model is optimized to sound right, not to be right.",
    "seeAlso": [
      "eng-m1-l2",
      "eng-m1-l6",
      "eng-m6-l4",
      "prod-m6-l3"
    ]
  },
  "emergent-abilities": {
    "term": "Emergent abilities",
    "plain": "Skills that appear to show up suddenly once a model reaches a certain size, rather than improving smoothly. Some of these 'jumps' turn out to be artifacts of how the ability was measured rather than real cliffs in capability.",
    "seeAlso": [
      "eng-m1-l2"
    ]
  },
  "benchmark": {
    "term": "Benchmark",
    "plain": "A standardized test set used to compare models, like a leaderboard score. A high benchmark number can be misleading if the test questions leaked into training data or don't resemble your real users' tasks.",
    "seeAlso": [
      "eng-m1-l2",
      "eng-m4-l2"
    ]
  },
  "tool-use": {
    "term": "Tool use",
    "plain": "Letting a model call external systems — a calculator, a search engine, a database, code — to do things it can't do reliably on its own, like exact math or fetching live data.",
    "seeAlso": [
      "eng-m1-l2",
      "eng-m2-l3",
      "eng-m3-l1",
      "eng-m3-l2"
    ]
  },
  "context-window": {
    "term": "Context window",
    "plain": "The total amount of text a model can 'see' at once in a single request — its working memory or 'desk.' Anything not included in the current request, including past conversation, is invisible to the model.",
    "seeAlso": [
      "eng-m1-l3",
      "eng-m2-l1",
      "eng-m2-l3",
      "eng-m2-l5",
      "eng-m3-l3",
      "eng-m3-l7"
    ]
  },
  "tokenization": {
    "term": "Tokenization",
    "plain": "The process of breaking text into tokens before the model processes it. Because the model sees chunks rather than individual letters, it struggles with tasks like counting the letters in a word.",
    "seeAlso": [
      "eng-m1-l3"
    ]
  },
  "attention": {
    "term": "Attention",
    "plain": "The mechanism that lets a model relate every token to every other token when processing text. Its cost grows quadratically with context length, which is why longer contexts are slower and more expensive.",
    "seeAlso": [
      "eng-m1-l3"
    ]
  },
  "lost-in-the-middle": {
    "term": "Lost in the middle",
    "plain": "A documented effect where models recall information placed at the start or end of a long context more reliably than facts buried in the middle. It means a big context window doesn't guarantee perfect recall.",
    "seeAlso": [
      "eng-m1-l3"
    ]
  },
  "embedding": {
    "term": "Embedding",
    "plain": "A list of numbers (coordinates) that represents the meaning of a word, sentence, image, or document as a point in a 'meaning space.' Things with similar meaning end up close together.",
    "seeAlso": [
      "eng-m1-l4",
      "eng-m2-l2"
    ]
  },
  "vector": {
    "term": "Vector",
    "plain": "The list of coordinates that makes up an embedding — essentially the 'address' of a piece of meaning in a high-dimensional space. Comparing vectors is how machines measure similarity.",
    "seeAlso": [
      "eng-m1-l4"
    ]
  },
  "cosine-similarity": {
    "term": "Cosine similarity",
    "plain": "A common way to measure how similar two embeddings are by comparing the angle between their vectors. A smaller angle means more similar meaning, regardless of how 'long' the vectors are.",
    "seeAlso": [
      "eng-m1-l4"
    ]
  },
  "semantic-search": {
    "term": "Semantic search",
    "plain": "Searching by meaning rather than exact keyword match, powered by embeddings. It can find relevant results even when they share no exact words with the query.",
    "seeAlso": [
      "eng-m1-l4"
    ]
  },
  "vector-database": {
    "term": "Vector database",
    "plain": "A specialized store that holds millions of embeddings and quickly returns the nearest neighbors to a query. Examples include Pinecone, Weaviate, and the pgvector extension for PostgreSQL; it's the engine behind practical retrieval and RAG.",
    "seeAlso": [
      "eng-m1-l4"
    ]
  },
  "training": {
    "term": "Training",
    "plain": "The slow, expensive, occasional process of building a model by feeding it enormous amounts of data and adjusting its internal numbers. It's a one-time, capital-style cost rather than a per-request one.",
    "seeAlso": [
      "eng-m1-l5"
    ]
  },
  "fine-tuning": {
    "term": "Fine-tuning",
    "plain": "Further training a model on focused examples to specialize its behavior or style after the broad pretraining stage. It's one of the three main options for adapting a model, alongside prompting and retrieval.",
    "seeAlso": [
      "eng-m1-l5",
      "eng-m6-l1"
    ]
  },
  "rlhf": {
    "term": "RLHF (reinforcement learning from human feedback)",
    "plain": "An alignment stage where humans rank a model's answers and the model is nudged toward the preferred ones, teaching it to be more helpful, safe, and polite. It's a big part of why a chat assistant feels well-mannered.",
    "seeAlso": [
      "eng-m1-l5"
    ]
  },
  "pretraining": {
    "term": "Pretraining",
    "plain": "The first and most expensive training stage, where a model reads vast amounts of text and learns to predict the next token, absorbing grammar, facts, and patterns. It produces a knowledgeable but unpolished 'base model.'",
    "seeAlso": [
      "eng-m1-l5"
    ]
  },
  "calibration": {
    "term": "Calibration",
    "plain": "How well a model's expressed confidence matches its actual accuracy across many answers. A model can be well-calibrated overall and still be confidently wrong on any single answer, so tone is never proof of truth.",
    "seeAlso": [
      "eng-m1-l6",
      "eng-m4-l4"
    ]
  },
  "human-in-the-loop": {
    "term": "Human in the loop",
    "plain": "A design where a person reviews or approves a model's output before it's acted on, especially for high-stakes decisions. It's a key way to contain the risk of confident, plausible errors.",
    "seeAlso": [
      "eng-m1-l6",
      "eng-m5-l4",
      "prod-m5-l3"
    ]
  },
  "grounding": {
    "term": "Grounding",
    "plain": "Tying a model's answers to real, verifiable sources — usually via retrieval — so it summarizes facts instead of inventing them. Grounding plus citations is the standard defense against hallucination.",
    "seeAlso": [
      "eng-m1-l6",
      "eng-m6-l4",
      "prod-m6-l3"
    ]
  },
  "reasoning-model": {
    "term": "Reasoning model",
    "plain": "A model that spends extra compute thinking step-by-step before answering, improving hard math, coding, and planning at the cost of more time and money. You choose it when a task genuinely needs deliberation.",
    "seeAlso": [
      "eng-m1-l7"
    ]
  },
  "test-time-compute": {
    "term": "Test-time compute",
    "plain": "Spending extra computational effort at the moment of answering (rather than during training) so the model can think longer about a hard problem. More of it generally means better answers on difficult tasks but higher cost and latency.",
    "seeAlso": [
      "eng-m1-l7"
    ]
  },
  "chain-of-thought": {
    "term": "Chain of thought",
    "plain": "Having a model write out its intermediate reasoning steps before giving a final answer, which improves accuracy on multi-step problems. Modern reasoning models do this by default for hard tasks.",
    "seeAlso": [
      "eng-m1-l7"
    ]
  },
  "system-1-system-2": {
    "term": "System 1 vs System 2",
    "plain": "A psychology framing where System 1 is fast, intuitive thinking and System 2 is slow, deliberate thinking. Standard LLMs act like System 1; reasoning models engage something more like System 2.",
    "seeAlso": [
      "eng-m1-l7"
    ]
  },
  "latency": {
    "term": "Latency",
    "plain": "How long a model takes to respond. Reasoning and multimodal features generally add latency, which is a real part of the user experience and a tradeoff against answer quality.",
    "seeAlso": [
      "eng-m1-l7",
      "eng-m1-l8",
      "eng-m4-l5",
      "eng-m6-l5"
    ]
  },
  "multimodal": {
    "term": "Multimodal",
    "plain": "A model that handles more than one type of data — text plus images, audio, or video — by turning each into chunks the same next-chunk engine can process. It unlocks vision, voice, and image generation features.",
    "seeAlso": [
      "eng-m1-l8"
    ]
  },
  "ocr": {
    "term": "OCR (optical character recognition)",
    "plain": "Reading the text off an image or scan, such as a photographed invoice or a PDF. Combined with a model's understanding of layout and meaning, it powers document AI.",
    "seeAlso": [
      "eng-m1-l8"
    ]
  },
  "document-ai": {
    "term": "Document AI",
    "plain": "Using multimodal models to turn messy documents like invoices, contracts, and forms into structured, usable data. It works well on clean common formats and gets shakier on messy or unusual ones, so it needs evaluation on your real documents.",
    "seeAlso": [
      "eng-m1-l8"
    ]
  },
  "context-engineering": {
    "term": "Context Engineering",
    "plain": "The craft of curating everything a model sees on each step — instructions, documents, history, tools, and their order — so it has just the right information to do the job. Anthropic calls it the #1 job of building AI agents.",
    "seeAlso": [
      "eng-m2-l1",
      "eng-m3-l3",
      "prod-m5-l5"
    ]
  },
  "prompt-engineering": {
    "term": "Prompt Engineering",
    "plain": "The narrower craft of writing one good instruction or prompt for the model. It's a subset of the broader job of context engineering.",
    "seeAlso": [
      "eng-m2-l1"
    ]
  },
  "context-rot": {
    "term": "Context Rot",
    "plain": "The tendency of a model to use information less reliably as the context grows larger, including the 'lost in the middle' effect where it skims the middle of a long input.",
    "seeAlso": [
      "eng-m2-l1",
      "eng-m3-l3"
    ]
  },
  "system-prompt": {
    "term": "System Prompt",
    "plain": "The standing set of instructions placed at the top of the context on every turn, defining who the model is and how it should behave.",
    "seeAlso": [
      "eng-m2-l1"
    ]
  },
  "vector-search": {
    "term": "Vector Search",
    "plain": "Finding documents by meaning rather than exact keywords, by comparing the numeric embeddings of the question and the stored passages.",
    "seeAlso": [
      "eng-m2-l2"
    ]
  },
  "chunking": {
    "term": "Chunking",
    "plain": "Splitting long documents into bite-sized passages so a retrieval system can fetch the relevant slice instead of a whole manual.",
    "seeAlso": [
      "eng-m2-l2",
      "eng-m6-l4"
    ]
  },
  "reranker": {
    "term": "Reranker",
    "plain": "A second, more careful model that re-scores retrieved passages for how well they answer the specific question, pushing the best evidence to the top.",
    "seeAlso": [
      "eng-m2-l2"
    ]
  },
  "groundedness": {
    "term": "Groundedness",
    "plain": "Whether an answer is actually supported by the retrieved source documents rather than invented by the model. Citations let you verify it.",
    "seeAlso": [
      "eng-m2-l2"
    ]
  },
  "hybrid-search": {
    "term": "Hybrid Search",
    "plain": "Combining meaning-based (vector) search with exact keyword search and blending the results, to catch both what the user meant and the exact terms they typed.",
    "seeAlso": [
      "eng-m2-l2"
    ]
  },
  "function-calling": {
    "term": "Function Calling",
    "plain": "The mechanism behind tool use: the model emits a structured request to run a named function, your code runs it, and the result is fed back to the model.",
    "seeAlso": [
      "eng-m2-l3",
      "eng-m2-l4"
    ]
  },
  "mcp": {
    "term": "MCP (Model Context Protocol)",
    "plain": "An open standard, launched by Anthropic and donated to the Linux Foundation, for how models discover and use tools — a shared 'plug shape' so you build an integration once.",
    "seeAlso": [
      "eng-m2-l3"
    ]
  },
  "agent": {
    "term": "Agent",
    "plain": "An AI system where the model itself decides the steps and which tools to call, looping toward a goal rather than following a fixed pre-written script.",
    "seeAlso": [
      "eng-m2-l3",
      "eng-m2-l6",
      "eng-m3-l1",
      "eng-m3-l5",
      "eng-m4-l6",
      "eng-m5-l4"
    ]
  },
  "structured-output": {
    "term": "Structured Output",
    "plain": "Getting a model's answer in a strict, predictable, machine-readable format (usually JSON) so it can feed reliably into other software.",
    "seeAlso": [
      "eng-m2-l4"
    ]
  },
  "json-schema": {
    "term": "JSON Schema",
    "plain": "A specification that declares exactly which fields an output must have and what type each holds — the labelled blank form the model fills in.",
    "seeAlso": [
      "eng-m2-l4"
    ]
  },
  "constrained-decoding": {
    "term": "Constrained Decoding",
    "plain": "A technique that controls the model's word-by-word generation so output that breaks the required format is literally impossible to produce — a guide rail on the form.",
    "seeAlso": [
      "eng-m2-l4"
    ]
  },
  "evals": {
    "term": "Evals (Evaluations)",
    "plain": "Systematic tests that check whether a model's output is actually correct in content, not just valid in format. Covered in depth in Module 4.",
    "seeAlso": [
      "eng-m2-l4",
      "prod-m6-l5"
    ]
  },
  "stateless": {
    "term": "Stateless",
    "plain": "Having no built-in memory between interactions. LLMs are stateless by default: they forget everything once a session ends unless memory is deliberately engineered.",
    "seeAlso": [
      "eng-m2-l5"
    ]
  },
  "short-term-memory": {
    "term": "Short-Term Memory",
    "plain": "Information currently inside the context window — the model's working desk. It's immediate but small and disappears when the session ends.",
    "seeAlso": [
      "eng-m2-l5"
    ]
  },
  "long-term-memory": {
    "term": "Long-Term Memory",
    "plain": "Information stored outside the context (the filing cabinet) that survives across sessions and must be deliberately saved and retrieved to reach the model.",
    "seeAlso": [
      "eng-m2-l5"
    ]
  },
  "compaction": {
    "term": "Compaction",
    "plain": "Summarising older, bulkier parts of a conversation into a tight recap so they take up less space in the context while preserving the gist.",
    "seeAlso": [
      "eng-m2-l5",
      "eng-m3-l3"
    ]
  },
  "just-in-time-retrieval": {
    "term": "Just-in-Time Retrieval",
    "plain": "Pulling a specific piece of information into the context only at the moment it's needed, rather than loading everything upfront in case it's useful.",
    "seeAlso": [
      "eng-m2-l5",
      "eng-m3-l3"
    ]
  },
  "chain": {
    "term": "Chain (Pipeline)",
    "plain": "A fixed, pre-defined sequence of model steps run in the same order every time — predictable and easy to debug, like an assembly line.",
    "seeAlso": [
      "eng-m2-l6"
    ]
  },
  "sub-agent": {
    "term": "Sub-Agent",
    "plain": "A separate agent that a main agent hands a focused slice of work to, with its own clean context, returning just the result. Helps keep each context tidy.",
    "seeAlso": [
      "eng-m2-l6",
      "eng-m3-l7"
    ]
  },
  "error-compounding": {
    "term": "Error Compounding",
    "plain": "How small per-step error rates multiply across a multi-step process, so even 95%-reliable steps can drop overall reliability sharply over many steps.",
    "seeAlso": [
      "eng-m2-l6"
    ]
  },
  "workflow": {
    "term": "Workflow",
    "plain": "An orchestrated set of model and tool steps designed to accomplish a task; a fixed workflow is a chain, while a more autonomous one shades into an agent.",
    "seeAlso": [
      "eng-m2-l6",
      "eng-m3-l1"
    ]
  },
  "react-loop": {
    "term": "ReAct Loop",
    "plain": "The core agent cycle of Reason → Act → Observe → repeat, where the model interleaves thinking with real tool actions so each step stays grounded in reality.",
    "seeAlso": [
      "eng-m3-l1"
    ]
  },
  "agent-taxonomy": {
    "term": "Agent Taxonomy",
    "plain": "A way to classify any agent along three axes: how much autonomy it has, what environment it can interact with, and whether it works alone or collaborates with other agents.",
    "seeAlso": [
      "eng-m3-l1"
    ]
  },
  "stopping-condition": {
    "term": "Stopping Condition",
    "plain": "The 'done' signal that tells an agent when to stop looping — such as tests passing, a question being answered, or a step limit being reached; without one, agents loop forever or quit too early.",
    "seeAlso": [
      "eng-m3-l1"
    ]
  },
  "agent-computer-interface": {
    "term": "Agent-Computer Interface (ACI)",
    "plain": "The set of tools and commands an agent uses to touch the world; designing it well is like designing good UX, except the user is the AI, and it can swing a fixed model from useless to capable.",
    "seeAlso": [
      "eng-m3-l2"
    ]
  },
  "poka-yoke": {
    "term": "Poka-yoke",
    "plain": "A Toyota manufacturing idea meaning 'mistake-proofing' — designing tools so a dangerous action simply can't happen, like an editor that refuses to save broken code, rather than just warning about it.",
    "seeAlso": [
      "eng-m3-l2"
    ]
  },
  "swe-bench": {
    "term": "SWE-bench",
    "plain": "A benchmark that tests agents on fixing real, verified bugs from open-source GitHub projects; its scores (e.g. the jump from near-zero to 78.4%) are a standard yardstick for coding-agent progress.",
    "seeAlso": [
      "eng-m3-l2",
      "eng-m3-l4",
      "eng-m3-l6",
      "eng-m4-l2"
    ]
  },
  "guardrail": {
    "term": "Guardrail",
    "plain": "A hard limit built into an agent's tools or environment that prevents whole categories of disaster — like a budget cap or a delete command scoped only to a sandbox — that the agent can't bypass.",
    "seeAlso": [
      "eng-m3-l2"
    ]
  },
  "external-memory": {
    "term": "External Memory",
    "plain": "Durable notes an agent writes outside its context window — goals, decisions, a map of the codebase — that let it survive context resets and run for hours or across sessions.",
    "seeAlso": [
      "eng-m3-l3"
    ]
  },
  "synchronous-agent": {
    "term": "Synchronous Agent",
    "plain": "A coding agent you steer in real time, like a co-pilot in your terminal — you watch, redirect, and approve as it works, giving you autonomy over the process.",
    "seeAlso": [
      "eng-m3-l4"
    ]
  },
  "asynchronous-agent": {
    "term": "Asynchronous Agent",
    "plain": "A coding agent that takes a task, goes off to a remote machine, and returns finished work (like a pull request) for you to inspect — giving you autonomy from the process.",
    "seeAlso": [
      "eng-m3-l4"
    ]
  },
  "coding-agent": {
    "term": "Coding Agent",
    "plain": "An AI agent specialised in software work — reading code, editing files, running tests — such as Claude Code, Devin, Codex, Jules, or SWE-agent.",
    "seeAlso": [
      "eng-m3-l4",
      "eng-m7-l1",
      "prod-m6-l4"
    ]
  },
  "scaffolding": {
    "term": "Scaffolding",
    "plain": "The tools, retry logic, context management, and orchestration built around a model; strong scaffolding often matters more to an agent's performance than a few points of raw model benchmark score.",
    "seeAlso": [
      "eng-m3-l4",
      "eng-m4-l2"
    ]
  },
  "programming-with-trust": {
    "term": "Programming with Trust",
    "plain": "The cultural shift where an engineer's job becomes delegating work to agents and then verifying and owning the result, rather than typing every line themselves.",
    "seeAlso": [
      "eng-m3-l4",
      "eng-m7-l2"
    ]
  },
  "autonomy-levels": {
    "term": "Levels of Autonomy",
    "plain": "A five-rung dial (Assistive → Pair → Task Agent → Teammate → full autonomy), modelled on self-driving car levels, describing how much rope an agent gets and where the human sits.",
    "seeAlso": [
      "eng-m3-l5"
    ]
  },
  "conditional-autonomy": {
    "term": "Conditional Autonomy (Level 3)",
    "plain": "The recommended production default where an agent handles whole tasks on its own while a human stays alert and ready to take over — enough speed to be useful, enough supervision to be safe.",
    "seeAlso": [
      "eng-m3-l5"
    ]
  },
  "silent-drift": {
    "term": "Silent Drift",
    "plain": "A failure mode of over-autonomous agents where changes no one closely reviews slowly steer a codebase or product somewhere unintended, with the damage invisible until it's large.",
    "seeAlso": [
      "eng-m3-l5"
    ]
  },
  "skill-atrophy": {
    "term": "Skill Atrophy",
    "plain": "The risk that as a team hands more work to autonomous agents and stops doing it themselves, they lose the understanding needed to tell whether the agent is even right.",
    "seeAlso": [
      "eng-m3-l5"
    ]
  },
  "agentic-sdlc": {
    "term": "Agentic SDLC (A-SDLC)",
    "plain": "The software development lifecycle rebuilt around agents executing whole tasks autonomously between human checkpoints, shifting the bottleneck from writing code to reviewing it.",
    "seeAlso": [
      "eng-m3-l6",
      "eng-m7-l1",
      "eng-m7-l2"
    ]
  },
  "economics-of-attention": {
    "term": "Economics of Attention",
    "plain": "The insight that as agents make generating code cheap, expert human review time becomes the scarce resource that actually limits how fast a team can safely ship.",
    "seeAlso": [
      "eng-m3-l6",
      "eng-m7-l1"
    ]
  },
  "reference-architecture": {
    "term": "Reference Architecture",
    "plain": "A shared blueprint — here, the six-layer model for agentic software engineering — that turns vague 'we use AI' claims into an inspectable checklist of what a system must have.",
    "seeAlso": [
      "eng-m3-l6"
    ]
  },
  "delegated-execution": {
    "term": "Delegated Execution Under Supervision",
    "plain": "The reframing where you hand an agent a whole bounded task to execute autonomously and a human supervises the result at a checkpoint, rather than the agent just generating snippets of code.",
    "seeAlso": [
      "eng-m3-l6"
    ]
  },
  "change-owner": {
    "term": "Change Owner",
    "plain": "The human role of being accountable for verifying and owning agent-produced changes they didn't personally write — the new core role as authoring shrinks and reviewing grows.",
    "seeAlso": [
      "eng-m3-l6",
      "eng-m7-l1",
      "eng-m7-l2"
    ]
  },
  "multi-agent-system": {
    "term": "Multi-Agent System",
    "plain": "An architecture that splits work across several agents — an orchestrator plus worker sub-agents — to gain parallelism and focus, at roughly 15 times the token cost of a single agent.",
    "seeAlso": [
      "eng-m3-l7"
    ]
  },
  "orchestrator-worker": {
    "term": "Orchestrator-Worker Pattern",
    "plain": "The dominant multi-agent design where a lead agent plans and delegates pieces to worker sub-agents, which filter and condense their findings into tight summaries the lead synthesises.",
    "seeAlso": [
      "eng-m3-l7"
    ]
  },
  "eval": {
    "term": "Eval",
    "plain": "A systematic, repeatable way to measure whether an AI feature is good enough — a set of example inputs, a definition of a good output, and a way to score each result automatically. Evals are the AI equivalent of unit tests.",
    "seeAlso": [
      "eng-m4-l1",
      "prod-m5-l2"
    ]
  },
  "error-analysis": {
    "term": "Error Analysis",
    "plain": "The practice of reading real AI outputs, labelling each failure in plain words, grouping the labels, and fixing the most common failures first. It turns vague worry into a ranked, evidence-based list and needs no coding.",
    "seeAlso": [
      "eng-m4-l1"
    ]
  },
  "golden-dataset": {
    "term": "Golden Dataset",
    "plain": "A hand-curated set of example inputs paired with what a good response should look like — the standard your evals score against. It grows every time a real failure is captured and added back.",
    "seeAlso": [
      "eng-m4-l1"
    ]
  },
  "llm-as-judge": {
    "term": "LLM-as-Judge",
    "plain": "Using a strong language model to automatically score other models' outputs against a rubric, making large-scale evaluation affordable. It's fast and cheap but has systematic biases that must be corrected for.",
    "seeAlso": [
      "eng-m4-l1",
      "eng-m4-l3",
      "eng-m4-l4"
    ]
  },
  "regression": {
    "term": "Regression",
    "plain": "When a change meant to improve something quietly breaks something else that used to work. Evals run automatically act as a regression gate that catches these before users do.",
    "seeAlso": [
      "eng-m4-l1"
    ]
  },
  "ci-cd": {
    "term": "CI/CD",
    "plain": "Continuous Integration / Continuous Delivery — the automated pipeline that builds and tests software on every change. Running an eval suite here makes it your automatic quality gate before anything ships.",
    "seeAlso": [
      "eng-m4-l1",
      "prod-m4-l4"
    ]
  },
  "ab-test": {
    "term": "A/B Test",
    "plain": "Splitting real users between two versions of a feature and measuring which produces better real-world outcomes. It's the strongest proof that a change actually helped, because a better eval score alone doesn't guarantee users are better off.",
    "seeAlso": [
      "eng-m4-l1",
      "eng-m4-l3",
      "prod-m1-l6",
      "prod-m5-l4"
    ]
  },
  "contamination": {
    "term": "Contamination",
    "plain": "When a benchmark's questions and answers leak into a model's training data, so the model recalls answers rather than genuinely solving the problems — inflating its score.",
    "seeAlso": [
      "eng-m4-l2"
    ]
  },
  "goodharts-law": {
    "term": "Goodhart's Law",
    "plain": "The principle that 'when a measure becomes a target, it ceases to be a good measure.' Once a benchmark is the number everyone chases, optimizing for it detaches it from the real skill it was meant to track.",
    "seeAlso": [
      "eng-m4-l2"
    ]
  },
  "saturation": {
    "term": "Saturation",
    "plain": "When the top models all cluster near a benchmark's ceiling, so the test can no longer tell the leaders apart and stops being useful for comparison.",
    "seeAlso": [
      "eng-m4-l2"
    ]
  },
  "domain-eval": {
    "term": "Domain Eval",
    "plain": "An evaluation built from your own real tasks and data, scored against what 'good' means in your specific product — because a generic public leaderboard rarely predicts performance on your use case.",
    "seeAlso": [
      "eng-m4-l2"
    ]
  },
  "offline-eval": {
    "term": "Offline Evaluation",
    "plain": "Running an AI feature against a fixed dataset before launch. It's cheap, fast, and repeatable, and catches the failures you anticipated — but only those you put in the dataset.",
    "seeAlso": [
      "eng-m4-l3"
    ]
  },
  "online-eval": {
    "term": "Online Evaluation",
    "plain": "Scoring an AI feature's live production traffic after launch. It's the only thing that catches surprises from real-user behaviour and a changing world that no pre-launch test could anticipate.",
    "seeAlso": [
      "eng-m4-l3"
    ]
  },
  "shadow-mode": {
    "term": "Shadow Mode",
    "plain": "Running a new model or version on real production traffic while discarding its output and taking no action, so you can compare what it would have done against reality at zero risk.",
    "seeAlso": [
      "eng-m4-l3"
    ]
  },
  "canary-release": {
    "term": "Canary Release",
    "plain": "Exposing a new version to a small slice of live traffic first (say 1-5%), watching quality and errors closely, and widening the slice only if it holds up — so a problem affects few users and can be rolled back fast.",
    "seeAlso": [
      "eng-m4-l3"
    ]
  },
  "position-bias": {
    "term": "Position Bias",
    "plain": "An LLM judge's tendency to favour whichever answer it sees first (or last), regardless of content. You cancel it by shuffling answer order and averaging the results.",
    "seeAlso": [
      "eng-m4-l4"
    ]
  },
  "verbosity-bias": {
    "term": "Verbosity Bias",
    "plain": "An LLM judge's tendency to reward longer answers even when the extra length adds nothing of real value. You counter it by controlling or normalizing for length.",
    "seeAlso": [
      "eng-m4-l4"
    ]
  },
  "self-preference-bias": {
    "term": "Self-Preference Bias",
    "plain": "An LLM judge's tendency to rate text that resembles its own style or output more highly. You dampen it by using a judge from a different model family than the one being graded.",
    "seeAlso": [
      "eng-m4-l4"
    ]
  },
  "rubric": {
    "term": "Rubric",
    "plain": "An explicit, written list of what a good output looks like, given to a judge (human or model) so its scoring is concrete, consistent, and explainable. A sharp rubric does most of the work of good evaluation.",
    "seeAlso": [
      "eng-m4-l4"
    ]
  },
  "pairwise-judging": {
    "term": "Pairwise Judging",
    "plain": "Asking a judge which of two outputs is better, rather than scoring one in isolation. Relative comparison is often more reliable than producing an absolute score from scratch.",
    "seeAlso": [
      "eng-m4-l4"
    ]
  },
  "observability": {
    "term": "Observability",
    "plain": "Instrumentation that records every step inside an AI app — each model call, tool call, retry, its latency, token cost, inputs and outputs — so you can see why something happened instead of guessing.",
    "seeAlso": [
      "eng-m4-l5",
      "eng-m6-l5",
      "prod-m5-l5"
    ]
  },
  "trace": {
    "term": "Trace",
    "plain": "The complete record of a single request from start to finish — the whole journey of how an app handled one user interaction, made up of individual spans.",
    "seeAlso": [
      "eng-m4-l5",
      "eng-m6-l5"
    ]
  },
  "span": {
    "term": "Span",
    "plain": "One labeled step inside a trace — a single model call, tool call, or retrieval — with its own start time, duration, inputs, and outputs.",
    "seeAlso": [
      "eng-m4-l5"
    ]
  },
  "opentelemetry": {
    "term": "OpenTelemetry (OTel)",
    "plain": "A widely adopted open standard for how software emits traces, metrics, and logs. Its 2026 GenAI conventions let you instrument an AI app once and read the data in any monitoring tool, avoiding vendor lock-in.",
    "seeAlso": [
      "eng-m4-l5"
    ]
  },
  "drift": {
    "term": "Drift",
    "plain": "The gradual degradation of an AI feature's quality over time as the world, the data, or user behaviour changes. Drift monitoring catches a slow decline before users revolt.",
    "seeAlso": [
      "eng-m4-l5",
      "prod-m5-l1"
    ]
  },
  "pii": {
    "term": "PII",
    "plain": "Personally Identifiable Information — personal or sensitive data about real people. Observability logs often contain it, so it must be redacted, masked, or hashed before storage to avoid a privacy liability.",
    "seeAlso": [
      "eng-m4-l5"
    ]
  },
  "state-based-evaluation": {
    "term": "State-Based Evaluation",
    "plain": "Judging an agent by the final state of the world it produced (was the right flight actually booked?) rather than by whether its sequence of steps looked reasonable.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "policy-adherence": {
    "term": "Policy Adherence",
    "plain": "Whether an agent followed every required rule while completing a task. A 'success' that violates a required rule is counted as a failure, because the broken rule is the part that causes real harm.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "pass-k": {
    "term": "pass^k",
    "plain": "The chance an agent succeeds on all of k repeated attempts at the same task — a measure of consistent reliability, as opposed to pass^1, which only measures a single lucky attempt.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "reliability-gap": {
    "term": "Reliability Gap",
    "plain": "The difference between an agent's flattering single-attempt score (pass^1) and its real reliability across retries (pass^k) — often around 20 points, and the variance enterprises actually feel in production.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "trajectory": {
    "term": "Trajectory",
    "plain": "The full sequence of steps and messages an agent produced while doing a task. A reasonable-looking trajectory can still end in the wrong result, which is why final state matters more.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "tau-bench": {
    "term": "τ²-bench (tau-squared-bench)",
    "plain": "Sierra's agent benchmark that measures policy adherence and reports pass^k reliability, revealing that agents scoring ~90% on a single attempt can drop to ~70% reliability when retried.",
    "seeAlso": [
      "eng-m4-l6"
    ]
  },
  "prompt-injection": {
    "term": "Prompt injection",
    "plain": "An attack where malicious instructions are slipped into the text a model reads, so the model follows the attacker's commands instead of (or on top of) yours. It's the #1 LLM security risk and has no foolproof fix.",
    "seeAlso": [
      "eng-m5-l1",
      "prod-m6-l3"
    ]
  },
  "indirect-prompt-injection": {
    "term": "Indirect prompt injection",
    "plain": "Prompt injection where the malicious instructions are hidden inside content the model fetches on your behalf — an email, web page, or document — so an ordinary user triggers the attack just by using a normal feature.",
    "seeAlso": [
      "eng-m5-l1"
    ]
  },
  "jailbreak": {
    "term": "Jailbreak",
    "plain": "A prompt crafted to talk a model out of its safety rules, getting it to produce content or take actions it's supposed to refuse.",
    "seeAlso": [
      "eng-m5-l1",
      "eng-m5-l3"
    ]
  },
  "excessive-agency": {
    "term": "Excessive agency",
    "plain": "OWASP's term for giving a model more power, tools, or access than its task needs. It's the multiplier that turns a successful prompt injection from embarrassing into damaging.",
    "seeAlso": [
      "eng-m5-l1",
      "eng-m5-l4"
    ]
  },
  "owasp-llm-top-10": {
    "term": "OWASP LLM Top 10",
    "plain": "A free, community-maintained checklist of the ten biggest security risks specific to LLM applications — the shared vocabulary every AI engineer and PM should know.",
    "seeAlso": [
      "eng-m5-l1",
      "eng-m5-l2"
    ]
  },
  "zero-click": {
    "term": "Zero-click attack",
    "plain": "An attack that requires no action from the victim — no link to click, nothing to open. The harm happens just because the system processed attacker-controlled content in its normal course of work.",
    "seeAlso": [
      "eng-m5-l1"
    ]
  },
  "guardrails": {
    "term": "Guardrails",
    "plain": "The safety layers wrapped around a model that check what goes in, check what comes out, and constrain what the system can do — built because a raw model has no immune system of its own.",
    "seeAlso": [
      "eng-m5-l2",
      "eng-m7-l2",
      "prod-m6-l3"
    ]
  },
  "defense-in-depth": {
    "term": "Defense in depth",
    "plain": "The security principle of stacking several independent, imperfect layers so that something slipping past one is caught by the next — like airport security rather than one magic gate.",
    "seeAlso": [
      "eng-m5-l2"
    ]
  },
  "input-scanner": {
    "term": "Input scanner",
    "plain": "A guardrail that runs before the model sees a request, screening incoming text for jailbreak attempts, prompt injection, or sensitive data you don't want sent to the model.",
    "seeAlso": [
      "eng-m5-l2"
    ]
  },
  "output-validation": {
    "term": "Output validation",
    "plain": "A guardrail that runs after the model produces a response but before the user sees it, catching leaked secrets, personal data, policy violations, or wrong answers.",
    "seeAlso": [
      "eng-m5-l2"
    ]
  },
  "self-correction-loop": {
    "term": "Self-correction loop",
    "plain": "A pattern where the system checks its own output, and if it fails the criteria, hands it back to the model to fix — so the user only ever sees a version that passed. It improves safety and quality at once.",
    "seeAlso": [
      "eng-m5-l2"
    ]
  },
  "llama-guard": {
    "term": "Llama Guard",
    "plain": "A content-classifier model (from Meta) used as a guardrail to inspect text for harmful content — the 'bag X-ray' layer in a defense-in-depth setup.",
    "seeAlso": [
      "eng-m5-l2"
    ]
  },
  "red-teaming": {
    "term": "Red-teaming",
    "plain": "Deliberately attacking your own AI — jailbreaking it, probing for dangerous capabilities — to find weaknesses before real adversaries or accidents do.",
    "seeAlso": [
      "eng-m5-l3"
    ]
  },
  "system-card": {
    "term": "System card",
    "plain": "A public document a lab releases with a model describing how it was tested, what attacks it withstood, and what risks remain — the closest thing AI has to a safety nutrition label.",
    "seeAlso": [
      "eng-m5-l3"
    ]
  },
  "attack-success-rate": {
    "term": "Attack-success-rate (ASR)",
    "plain": "The fraction of attack attempts that get through a model's defenses. Measured over many adaptive attempts, it's the number that best predicts real-world risk.",
    "seeAlso": [
      "eng-m5-l3"
    ]
  },
  "frontier-model": {
    "term": "Frontier model",
    "plain": "One of the most capable, cutting-edge AI models (like GPT-5 or Claude Opus). A hard lesson of 2026 is that under sustained automated attack, every frontier model eventually breaks.",
    "seeAlso": [
      "eng-m5-l3",
      "eng-m6-l2"
    ]
  },
  "least-privilege": {
    "term": "Least privilege",
    "plain": "The security principle of giving a system only the minimum access it needs to do its job and nothing more, so any single failure or hijack has the smallest possible blast radius.",
    "seeAlso": [
      "eng-m5-l4"
    ]
  },
  "sandboxing": {
    "term": "Sandboxing",
    "plain": "Running an agent inside an isolated environment walled off from the things you care about (network, files, secrets, config) so even a hijacked agent hits walls instead of the open building.",
    "seeAlso": [
      "eng-m5-l4"
    ]
  },
  "containment": {
    "term": "Containment",
    "plain": "The ability to actually stop an agent from doing harm — not just watch it. The defining 2026 mistake was installing monitoring (cameras) but forgetting containment (locks).",
    "seeAlso": [
      "eng-m5-l4"
    ]
  },
  "allowlisting": {
    "term": "Allowlisting",
    "plain": "Explicitly listing the small set of actions an agent is permitted to take and forbidding everything else by default, instead of trying to block known-bad actions one by one.",
    "seeAlso": [
      "eng-m5-l4"
    ]
  },
  "algorithmic-bias": {
    "term": "Algorithmic bias",
    "plain": "When a model produces systematically unfair outcomes for some groups because it learned (and amplified) biased patterns from its training data — harmful even when no one intended it.",
    "seeAlso": [
      "eng-m5-l5"
    ]
  },
  "responsible-ai": {
    "term": "Responsible AI",
    "plain": "The practice of finding and reducing an AI system's potential for harm — bias, unfairness, unsafe outputs — before it reaches users, treating fairness and safety as requirements rather than afterthoughts.",
    "seeAlso": [
      "eng-m5-l5"
    ]
  },
  "fairness-metric": {
    "term": "Fairness metric",
    "plain": "A mathematical definition of what 'fair' means for a model. Several competing definitions exist and can't all be satisfied at once, so choosing one is partly a values decision.",
    "seeAlso": [
      "eng-m5-l5"
    ]
  },
  "disparate-impact": {
    "term": "Disparate impact",
    "plain": "When a model's outcomes systematically advantage or disadvantage a particular group. Testing for it before launch — and treating a significant gap as a release blocker — is a core fairness mitigation.",
    "seeAlso": [
      "eng-m5-l5"
    ]
  },
  "feedback-loop": {
    "term": "Feedback loop (bias)",
    "plain": "When a deployed biased model's own decisions shape future data, which trains the next model to be even more biased — a self-reinforcing spiral that's hard to break.",
    "seeAlso": [
      "eng-m5-l5",
      "eng-m7-l2"
    ]
  },
  "nist-ai-rmf": {
    "term": "NIST AI Risk Management Framework",
    "plain": "A U.S. government framework for managing AI risk systematically — identify, measure, mitigate, monitor, and document — widely used to make responsible-AI practices concrete.",
    "seeAlso": [
      "eng-m5-l5"
    ]
  },
  "eu-ai-act": {
    "term": "EU AI Act",
    "plain": "The world's most comprehensive AI law (phasing in 2024-2026), which sorts AI uses into risk tiers — banned, high-risk, limited, and minimal — and regulates each accordingly.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "gdpr": {
    "term": "GDPR",
    "plain": "Europe's data-protection law. Though written before the LLM boom, it applies fully to AI, governing what personal data you may use and giving individuals rights over their own data.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "data-residency": {
    "term": "Data residency",
    "plain": "Rules requiring that certain data stay physically within a region, which constrains where you're allowed to send a prompt or store a result — an architectural decision, not just paperwork.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "right-to-explanation": {
    "term": "Right to explanation",
    "plain": "The principle that a person subject to a consequential automated decision (like a loan denial) may be entitled to a meaningful explanation of how it was reached — which collides with the black-box nature of large models.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "fair-use": {
    "term": "Fair use",
    "plain": "A legal doctrine permitting some use of copyrighted material without permission. AI companies argue training on copyrighted data is transformative fair use; that claim is being tested in court right now.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "high-risk-ai": {
    "term": "High-risk AI",
    "plain": "Under the EU AI Act, AI used in sensitive domains like hiring, lending, education, and law enforcement. It's allowed but heavily regulated — requiring risk assessments, human oversight, and documentation.",
    "seeAlso": [
      "eng-m5-l6"
    ]
  },
  "prompting": {
    "term": "Prompting",
    "plain": "Shaping a model's behaviour by writing better instructions, examples, and context in the request itself — the fastest, cheapest way to steer an AI.",
    "seeAlso": [
      "eng-m6-l1"
    ]
  },
  "lora": {
    "term": "LoRA (Low-Rank Adaptation)",
    "plain": "A cheap way to fine-tune that freezes the original model and trains a tiny add-on layer instead of rewriting the whole thing — like clipping a small patch onto a finished engine.",
    "seeAlso": [
      "eng-m6-l1"
    ]
  },
  "weights": {
    "term": "Weights",
    "plain": "The billions of internal numbers a model learned during training; adjusting them is what fine-tuning does.",
    "seeAlso": [
      "eng-m6-l1"
    ]
  },
  "parameter-efficient-fine-tuning": {
    "term": "Parameter-Efficient Fine-Tuning",
    "plain": "A family of methods (LoRA is the famous one) that fine-tune only a small fraction of a model, making it far cheaper and faster than full retraining.",
    "seeAlso": [
      "eng-m6-l1"
    ]
  },
  "model-routing": {
    "term": "Model Routing",
    "plain": "Deciding, per request, which model should handle it — sending easy work to small cheap models and reserving expensive frontier models for hard cases.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "model-mesh": {
    "term": "Model Mesh",
    "plain": "An architecture with a fleet of models (small, medium, frontier) plus a lightweight classifier in front that directs each request to the cheapest one that can handle it.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "small-language-model": {
    "term": "Small Language Model (SLM)",
    "plain": "A deliberately compact model that's far cheaper and faster than a frontier model and increasingly capable on narrow, well-defined tasks.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "open-weight-model": {
    "term": "Open-Weight Model",
    "plain": "A model whose internals you can download and run yourself, trading some peak capability for control, privacy, and keeping data inside your own infrastructure.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "distillation": {
    "term": "Distillation",
    "plain": "Training a small 'student' model to mimic a big 'teacher' model on a specific task, getting near-teacher quality at much lower cost.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "semantic-caching": {
    "term": "Semantic Caching",
    "plain": "Recognising when a new question means the same thing as one already answered — even if worded differently — and serving the stored answer for almost no cost.",
    "seeAlso": [
      "eng-m6-l2"
    ]
  },
  "time-to-first-token": {
    "term": "Time-to-First-Token",
    "plain": "How long a user waits before the answer starts appearing — the latency metric people actually feel, often more important than total response time.",
    "seeAlso": [
      "eng-m6-l3"
    ]
  },
  "cogs": {
    "term": "COGS (Cost of Goods Sold)",
    "plain": "The direct cost of serving your product; for AI it's variable, rising and falling with how much customers use the feature.",
    "seeAlso": [
      "eng-m6-l3",
      "prod-m6-l2"
    ]
  },
  "gross-margin": {
    "term": "Gross Margin",
    "plain": "What's left of revenue after the direct cost of serving the product — for AI features, it depends heavily on per-task token cost and usage patterns.",
    "seeAlso": [
      "eng-m6-l3",
      "prod-m6-l2"
    ]
  },
  "usage-based-pricing": {
    "term": "Usage-Based Pricing",
    "plain": "Charging customers in proportion to how much they use, so revenue tracks the usage-scaling cost of serving them — unlike a flat per-seat fee.",
    "seeAlso": [
      "eng-m6-l3",
      "prod-m6-l2"
    ]
  },
  "vendor-lock-in": {
    "term": "Vendor Lock-In",
    "plain": "The cost and difficulty of switching away from a provider you depend on, a key risk when you build on someone else's model API.",
    "seeAlso": [
      "eng-m6-l3"
    ]
  },
  "batching": {
    "term": "Batching",
    "plain": "Grouping many requests together so they're processed more efficiently and cheaply, used when you don't need an instant answer.",
    "seeAlso": [
      "eng-m6-l3"
    ]
  },
  "semantic-chunking": {
    "term": "Semantic Chunking",
    "plain": "Splitting documents along meaning — at topic or idea boundaries — so each chunk is a coherent, self-contained thought rather than a severed fragment.",
    "seeAlso": [
      "eng-m6-l4"
    ]
  },
  "reranking": {
    "term": "Reranking",
    "plain": "A second pass that re-scores and reorders retrieved candidates, pushing the genuinely best ones to the top before they reach the model.",
    "seeAlso": [
      "eng-m6-l4"
    ]
  },
  "golden-query-set": {
    "term": "Golden-Query Test Set",
    "plain": "A fixed list of real questions paired with the documents that should be retrieved, used to measure and improve retrieval quality objectively.",
    "seeAlso": [
      "eng-m6-l4"
    ]
  },
  "retrieval-drift": {
    "term": "Retrieval Drift",
    "plain": "The slow decay where a search index falls out of sync with changing documents, so a RAG system quietly retrieves stale or wrong information over time.",
    "seeAlso": [
      "eng-m6-l4"
    ]
  },
  "ai-agent": {
    "term": "AI Agent",
    "plain": "An AI system that takes many steps in sequence — calling tools, reading results, deciding what to do next — rather than answering in a single shot.",
    "seeAlso": [
      "eng-m6-l5"
    ]
  },
  "semantic-failure": {
    "term": "Semantic Failure",
    "plain": "When every component runs fine and returns a healthy HTTP-200, but the agent's answer is still wrong — a failure normal monitoring won't catch.",
    "seeAlso": [
      "eng-m6-l5"
    ]
  },
  "regression-dataset": {
    "term": "Regression Dataset",
    "plain": "A growing collection of past failures turned into test cases, run before each release to make sure old problems don't come back.",
    "seeAlso": [
      "eng-m6-l5"
    ]
  },
  "data-flywheel": {
    "term": "Data Flywheel",
    "plain": "The compounding loop where usage generates data that improves the product, which drives more usage — a durable advantage competitors can't easily copy.",
    "seeAlso": [
      "eng-m6-l5",
      "prod-m6-l1"
    ]
  },
  "ai-teammate": {
    "term": "AI Teammate",
    "plain": "An AI coding agent that does real, whole units of work on a software team — like opening its own pull requests — rather than just suggesting the next line of code. A human still decides whether to accept its work.",
    "seeAlso": [
      "eng-m7-l1"
    ]
  },
  "pull-request": {
    "term": "Pull Request (PR)",
    "plain": "A proposed bundle of code changes submitted for review before it becomes part of the main codebase. A human reviewer reads it and decides whether to merge (accept) or reject it.",
    "seeAlso": [
      "eng-m7-l1"
    ]
  },
  "acceptance-rate": {
    "term": "Acceptance Rate",
    "plain": "The share of proposed changes (pull requests) that actually get accepted and merged. AI agents produce many PRs quickly but have a lower acceptance rate than humans, meaning more of their work gets sent back.",
    "seeAlso": [
      "eng-m7-l1"
    ]
  },
  "vision-values-vocabulary": {
    "term": "Vision, Values, Vocabulary",
    "plain": "Three foundations for aligning a human-AI team: a shared picture of what you're building (vision), shared principles for trade-offs (values), and shared, well-defined language so terms like 'done' and 'risky' mean the same thing to everyone (vocabulary).",
    "seeAlso": [
      "eng-m7-l2"
    ]
  },
  "evaluation": {
    "term": "Evaluation (Evals)",
    "plain": "The practice of measuring, in numbers, whether an AI system's output is actually good — before and after launch. Evals are how you replace 'it sounds right' with evidence, and they are core to building trust.",
    "seeAlso": [
      "eng-m7-l2"
    ]
  },
  "governance": {
    "term": "Governance",
    "plain": "The rules and controls that scope what an AI agent is allowed to do, make its actions attributable, and keep an auditable record — so you can prove who did what and limit the blast radius of any single action.",
    "seeAlso": [
      "eng-m7-l2"
    ]
  },
  "moat": {
    "term": "Moat",
    "plain": "A durable competitive advantage that makes a product hard to copy. In AI, the moat is rarely the model (everyone can rent the same one) — it's usually proprietary data, a strong feedback loop, and workflows users won't switch away from.",
    "seeAlso": [
      "eng-m7-l2",
      "prod-m6-l1"
    ]
  },
  "feature-team": {
    "term": "Feature team",
    "plain": "A team handed a roadmap of features (decided by executives) and told to build them on schedule. It owns delivery but not whether the features actually solve a problem.",
    "seeAlso": [
      "prod-m1-l2"
    ]
  },
  "delivery-team": {
    "term": "Delivery team",
    "plain": "A team that exists purely to ship a backlog someone else wrote, like a contractor following a blueprint, with no say in what gets built or why.",
    "seeAlso": [
      "prod-m1-l2"
    ]
  },
  "missionaries-vs-mercenaries": {
    "term": "Missionaries vs. mercenaries",
    "plain": "John Doerr's phrase, popularized by Cagan: missionaries believe in the problem they're solving and care whether it works; mercenaries just build whatever ticket they're handed and feel nothing about the result.",
    "seeAlso": [
      "prod-m1-l2",
      "prod-m4-l3",
      "prod-m4-l4"
    ]
  },
  "two-pizza-team": {
    "term": "Two-pizza team",
    "plain": "Amazon's rule of thumb that a team should be small enough to be fed by two pizzas, so it can share full context and move fast without heavy coordination.",
    "seeAlso": [
      "prod-m1-l2"
    ]
  },
  "product-risks": {
    "term": "The four product risks",
    "plain": "The four risks every product idea must clear: value (will people want it?), usability (can they use it?), feasibility (can we build it?), and viability (does it work for our business?).",
    "seeAlso": [
      "prod-m1-l2",
      "prod-m1-l4",
      "prod-m4-l3"
    ]
  },
  "output": {
    "term": "Output",
    "plain": "The stuff you produced — features shipped, tickets closed, things launched on time. You can have lots of output and still cause zero outcome.",
    "seeAlso": [
      "prod-m1-l3"
    ]
  },
  "okr": {
    "term": "OKR (Objectives and Key Results)",
    "plain": "A simple way to write down an outcome: an Objective states the result you want in plain words, and the Key Results are the measurable signals that prove you achieved it.",
    "seeAlso": [
      "prod-m1-l3",
      "prod-m3-l4"
    ]
  },
  "working-backwards": {
    "term": "Working Backwards",
    "plain": "Amazon's practice of writing the customer-facing press release and FAQ for a product before building it, forcing the team to define the outcome and value first.",
    "seeAlso": [
      "prod-m1-l3",
      "prod-m3-l1"
    ]
  },
  "instrumentation": {
    "term": "Instrumentation",
    "plain": "The analytics events and logging that engineers build into a product so usage can be measured. If something isn't instrumented, its effect on users is invisible.",
    "seeAlso": [
      "prod-m1-l3",
      "prod-m3-l4"
    ]
  },
  "product-trio": {
    "term": "Product trio",
    "plain": "The product manager, product designer, and engineers working together continuously to discover and build solutions — named and popularized by Teresa Torres from the collaboration Cagan described in INSPIRED.",
    "seeAlso": [
      "prod-m1-l4",
      "prod-m1-l5"
    ]
  },
  "feasibility": {
    "term": "Feasibility",
    "plain": "Whether a solution can realistically be built with the team's time, skills, and technology. In the trio, the engineers own this risk.",
    "seeAlso": [
      "prod-m1-l4",
      "prod-m2-l1"
    ]
  },
  "viability": {
    "term": "Viability",
    "plain": "Whether a solution works for the rest of the business — its sales, legal, financial, brand, and regulatory realities. The product manager owns this risk.",
    "seeAlso": [
      "prod-m1-l4",
      "prod-m1-l5"
    ]
  },
  "continuous-discovery": {
    "term": "Continuous discovery",
    "plain": "The practice (associated with Teresa Torres) of the product trio talking to customers and testing ideas regularly, week in and week out, rather than doing research once at the start of a project.",
    "seeAlso": [
      "prod-m1-l4",
      "prod-m2-l3",
      "prod-m6-l5"
    ]
  },
  "usability": {
    "term": "Usability",
    "plain": "Whether people can actually figure out how to use a product and enjoy doing so. In the trio, the designer owns this risk.",
    "seeAlso": [
      "prod-m1-l4"
    ]
  },
  "product-management-theater": {
    "term": "Product management theater",
    "plain": "Cagan's term for going through the rituals of product management — standups, backlog grooming, ticket-writing — without the substance, while someone else makes the real decisions.",
    "seeAlso": [
      "prod-m1-l5"
    ]
  },
  "product-owner": {
    "term": "Product Owner",
    "plain": "A specific, narrow role from the Scrum framework focused on managing and prioritizing the backlog. It is one administrative slice of the product management job, not the whole thing.",
    "seeAlso": [
      "prod-m1-l5"
    ]
  },
  "value-risk": {
    "term": "Value risk",
    "plain": "The risk that customers won't actually want, choose, or buy what you build. It's one of the two hardest risks and is owned by the product manager.",
    "seeAlso": [
      "prod-m1-l5",
      "prod-m2-l2"
    ]
  },
  "backlog": {
    "term": "Backlog",
    "plain": "The prioritized list of work items waiting to be built. Administering it is necessary but is only a small part of real product management.",
    "seeAlso": [
      "prod-m1-l5"
    ]
  },
  "statistical-significance": {
    "term": "Statistical significance",
    "plain": "A check on whether a difference between two groups is big enough, over enough users, that it's unlikely to be down to random luck. Tools compute it for you; the skill is not trusting a result until it clears the bar.",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "funnel": {
    "term": "Funnel",
    "plain": "A view of users moving through a sequence of steps (e.g. visit → sign up → pay) that shows exactly where people drop off, turning 'conversion is low' into 'conversion is low specifically here.'",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "cohort": {
    "term": "Cohort",
    "plain": "A group of users defined by something they share, usually when they joined, so you can compare like with like — for example, this month's new users versus last month's at the same age.",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "retention-curve": {
    "term": "Retention curve",
    "plain": "A chart showing what fraction of a cohort keeps coming back over time. A healthy curve flattens at a stable level; a leaky one slides toward zero.",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "leading-vs-lagging-indicator": {
    "term": "Leading vs. lagging indicator",
    "plain": "A lagging indicator is the after-the-fact scoreboard (revenue, churn); a leading indicator is an early signal that predicts it (like first-week activation) and that you can still act on.",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "vanity-metric": {
    "term": "Vanity metric",
    "plain": "A number that looks impressive but doesn't inform any decision (like all-time total registered users), as opposed to an actionable metric that tells you what to do differently when it moves.",
    "seeAlso": [
      "prod-m1-l6"
    ]
  },
  "discovery": {
    "term": "Discovery",
    "plain": "The work of figuring out whether something is worth building at all — testing ideas with customers before committing engineering time.",
    "seeAlso": [
      "prod-m2-l1",
      "prod-m4-l3"
    ]
  },
  "delivery": {
    "term": "Delivery",
    "plain": "The work of building a chosen product idea reliably and well — turning a validated decision into shippable, production-quality software.",
    "seeAlso": [
      "prod-m2-l1"
    ]
  },
  "dual-track-agile": {
    "term": "Dual-Track Agile",
    "plain": "Running discovery and delivery as two parallel streams of work within the same team, rather than as separate phases or separate teams.",
    "seeAlso": [
      "prod-m2-l1"
    ]
  },
  "cross-functional-team": {
    "term": "Cross-Functional Team",
    "plain": "A small team combining product, design, and engineering so the people who decide what to build are the same people who build it.",
    "seeAlso": [
      "prod-m2-l1"
    ]
  },
  "four-big-risks": {
    "term": "The Four Big Risks",
    "plain": "Cagan's checklist of the four ways any product idea can fail: value, usability, feasibility, and viability risk.",
    "seeAlso": [
      "prod-m2-l2"
    ]
  },
  "usability-risk": {
    "term": "Usability Risk",
    "plain": "The risk that customers can't figure out how to use the product even though they might want it.",
    "seeAlso": [
      "prod-m2-l2"
    ]
  },
  "feasibility-risk": {
    "term": "Feasibility Risk",
    "plain": "The risk that the team can't actually build the product with the technology, data, time, or skills they have.",
    "seeAlso": [
      "prod-m2-l2"
    ]
  },
  "viability-risk": {
    "term": "Viability Risk",
    "plain": "The risk that the product doesn't work for the business — its economics, legal constraints, brand, or other internal teams.",
    "seeAlso": [
      "prod-m2-l2",
      "prod-m4-l3"
    ]
  },
  "engineering-spike": {
    "term": "Engineering Spike",
    "plain": "A short, time-boxed technical build whose only job is to prove the hard part of an idea is feasible before committing to the full thing.",
    "seeAlso": [
      "prod-m2-l2"
    ]
  },
  "story-based-interview": {
    "term": "Story-Based Interview",
    "plain": "A customer interview that asks about a specific real past event (\"tell me about the last time you…\") instead of opinions about hypothetical futures.",
    "seeAlso": [
      "prod-m2-l3"
    ]
  },
  "interview-snapshot": {
    "term": "Interview Snapshot",
    "plain": "A standardised one-page summary of each customer interview, so learning accumulates across many conversations instead of being forgotten.",
    "seeAlso": [
      "prod-m2-l3"
    ]
  },
  "product-instrumentation": {
    "term": "Product Instrumentation",
    "plain": "The analytics events a product fires as people use it, providing quantitative signal about where users succeed, struggle, or drop off.",
    "seeAlso": [
      "prod-m2-l3",
      "prod-m2-l4"
    ]
  },
  "research-question": {
    "term": "Research Question",
    "plain": "The thing you privately want to learn from an interview, which you translate into a different, story-triggering question you actually ask out loud.",
    "seeAlso": [
      "prod-m2-l3"
    ]
  },
  "opportunity-solution-tree": {
    "term": "Opportunity Solution Tree",
    "plain": "Teresa Torres's visual map with a measurable outcome at the root, customer opportunities branching beneath, solutions under each, and assumption tests at the leaves.",
    "seeAlso": [
      "prod-m2-l4"
    ]
  },
  "opportunity": {
    "term": "Opportunity",
    "plain": "A customer problem, need, or pain — phrased in the customer's language — that, if solved, would move the target outcome.",
    "seeAlso": [
      "prod-m2-l4"
    ]
  },
  "solution": {
    "term": "Solution",
    "plain": "A candidate thing you could build to address an opportunity; the tree insists on comparing several per opportunity.",
    "seeAlso": [
      "prod-m2-l4"
    ]
  },
  "assumption-test": {
    "term": "Assumption Test",
    "plain": "A small, cheap experiment that checks whether a belief underlying a solution is actually true before you build it.",
    "seeAlso": [
      "prod-m2-l4"
    ]
  },
  "assumption-mapping": {
    "term": "Assumption Mapping",
    "plain": "Surfacing the hidden beliefs an idea depends on and plotting them by importance versus evidence to find the riskiest ones to test.",
    "seeAlso": [
      "prod-m2-l5"
    ]
  },
  "leap-of-faith-assumption": {
    "term": "Leap-of-Faith Assumption",
    "plain": "A belief that is both critical to the idea working and currently unproven — the top-right corner of the assumption map, and what you test first.",
    "seeAlso": [
      "prod-m2-l5"
    ]
  },
  "riskiest-assumption-test": {
    "term": "Riskiest Assumption Test (RAT)",
    "plain": "A cheap, narrow experiment designed to test only an idea's single riskiest belief, ideally run before building any minimum product.",
    "seeAlso": [
      "prod-m2-l5"
    ]
  },
  "mvp": {
    "term": "Minimum Viable Product (MVP)",
    "plain": "The smallest real version of a product you can ship to start learning from actual customer usage.",
    "seeAlso": [
      "prod-m2-l5",
      "prod-m2-l6"
    ]
  },
  "desirability": {
    "term": "Desirability",
    "plain": "Whether customers actually want the product — the assumption-mapping equivalent of value risk.",
    "seeAlso": [
      "prod-m2-l5"
    ]
  },
  "ethical-risk": {
    "term": "Ethical Risk",
    "plain": "The risk that a product is unfair, unsafe, privacy-violating, or otherwise harmful — increasingly central for AI features in 2026.",
    "seeAlso": [
      "prod-m2-l5"
    ]
  },
  "fake-door-test": {
    "term": "Fake-Door Test",
    "plain": "Advertising a feature that doesn't exist yet (such as a button or menu item) and measuring how many people click, to gauge demand before building.",
    "seeAlso": [
      "prod-m2-l6"
    ]
  },
  "wizard-of-oz-test": {
    "term": "Wizard of Oz Test",
    "plain": "A test where the product looks fully automated to the user, but a hidden human secretly does the work, proving people value the outcome before the automation is built.",
    "seeAlso": [
      "prod-m2-l6"
    ]
  },
  "concierge-test": {
    "term": "Concierge Test",
    "plain": "Openly delivering a service by hand to a few customers, high-touch and transparent, to learn intimately what they value before building anything.",
    "seeAlso": [
      "prod-m2-l6"
    ]
  },
  "smoke-test": {
    "term": "Smoke Test",
    "plain": "A landing or marketing page advertising a product with a sign-up or pre-order button, used to measure demand before the product exists.",
    "seeAlso": [
      "prod-m2-l6"
    ]
  },
  "fidelity-ladder": {
    "term": "Fidelity Ladder",
    "plain": "The range of prototype realism from rough paper sketch to clickable mockup to a real working slice; you climb only as high as your question requires.",
    "seeAlso": [
      "prod-m2-l6"
    ]
  },
  "product-vision": {
    "term": "Product Vision",
    "plain": "A clear, inspiring 5-10 year picture of how customers' lives get better because of what you build. It's the shared destination everyone aligns on, not a plan or feature list.",
    "seeAlso": [
      "prod-m3-l1"
    ]
  },
  "mission": {
    "term": "Mission",
    "plain": "The durable purpose a company exists to serve — the 'why' behind everything. It stays largely fixed while visions and strategies change underneath it.",
    "seeAlso": [
      "prod-m3-l1"
    ]
  },
  "product-strategy": {
    "term": "Product Strategy",
    "plain": "The set of choices about which problems to solve, in what order, to make the vision real. Its output is a short, prioritized list of problems — not a feature list.",
    "seeAlso": [
      "prod-m3-l1",
      "prod-m3-l2"
    ]
  },
  "insight": {
    "term": "Insight",
    "plain": "A non-obvious truth discovered about your customers, data, technology, or market that makes one problem clearly more important to solve than others. Insight is what separates strategic companies from merely busy ones.",
    "seeAlso": [
      "prod-m3-l2"
    ]
  },
  "ab-testing": {
    "term": "A/B Testing",
    "plain": "A controlled experiment where some users see version A and others see version B, so you can measure which actually performs better rather than guessing.",
    "seeAlso": [
      "prod-m3-l2"
    ]
  },
  "enabling-technology": {
    "term": "Enabling Technology",
    "plain": "A new technical capability that has just made a previously impossible or impractical problem solvable — one of the four sources of strategic insight.",
    "seeAlso": [
      "prod-m3-l2"
    ]
  },
  "ten-x-thinking": {
    "term": "10x Thinking",
    "plain": "Asking how to make something ten times better rather than 10% better. The bigger question forces you to abandon the current approach and find a genuinely new one.",
    "seeAlso": [
      "prod-m3-l2"
    ]
  },
  "focus": {
    "term": "Focus",
    "plain": "Deliberately choosing a few things to do exceptionally well and consciously saying no to the rest, so your real bets get the attention they need to win.",
    "seeAlso": [
      "prod-m3-l3"
    ]
  },
  "opportunity-cost": {
    "term": "Opportunity Cost",
    "plain": "The value of the best alternative you gave up by choosing something else. Because team capacity is fixed, every 'yes' is automatically a 'no' to whatever else that team could have done.",
    "seeAlso": [
      "prod-m3-l3"
    ]
  },
  "technical-debt": {
    "term": "Technical Debt",
    "plain": "The future cost of shortcuts, accumulated code, and complexity that you have to keep maintaining. Every feature you ship adds some, which is why each 'yes' has a long-term price.",
    "seeAlso": [
      "prod-m3-l3"
    ]
  },
  "sunsetting": {
    "term": "Sunsetting",
    "plain": "Deliberately retiring a feature or product that no longer earns its keep, freeing engineers from maintaining it and users from clutter. A distinct and underused leadership skill.",
    "seeAlso": [
      "prod-m3-l3"
    ]
  },
  "priority": {
    "term": "Priority",
    "plain": "By origin a singular thing — the one item that comes before all others. The moment you claim five 'top priorities', you effectively have none.",
    "seeAlso": [
      "prod-m3-l3"
    ]
  },
  "objective": {
    "term": "Objective",
    "plain": "The inspirational, qualitative 'what' in an OKR — a memorable direction the team is aiming for, deliberately not specifying how to get there.",
    "seeAlso": [
      "prod-m3-l4"
    ]
  },
  "key-result": {
    "term": "Key Result",
    "plain": "A measurable outcome that proves an Objective was achieved. A good one is a number you could genuinely fail against — if you can't lose it, it isn't measuring anything.",
    "seeAlso": [
      "prod-m3-l4"
    ]
  },
  "leading-indicator": {
    "term": "Leading Indicator",
    "plain": "An early signal that predicts a later result — like 'users who complete setup' pointing toward future retention. It moves before the final outcome does.",
    "seeAlso": [
      "prod-m3-l4"
    ]
  },
  "lagging-indicator": {
    "term": "Lagging Indicator",
    "plain": "A final outcome metric that arrives later, like 90-day retention or revenue. It confirms results but tells you too late to change course alone.",
    "seeAlso": [
      "prod-m3-l4"
    ]
  },
  "rice-scoring": {
    "term": "RICE Scoring",
    "plain": "A prioritization formula: Reach times Impact times Confidence, divided by Effort. It turns subjective arguments into comparable scores, created and popularized by Intercom.",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "ice-scoring": {
    "term": "ICE Scoring",
    "plain": "A lighter prioritization score — Impact, Confidence, Ease — used for quick decisions when the fuller RICE calculation would be overkill.",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "wsjf": {
    "term": "WSJF (Weighted Shortest Job First)",
    "plain": "A 'Cost of Delay' prioritization method that asks how much value you lose for every period you delay a piece of work, favoring high-value work that's also fast to do. Useful when timing and sequencing dominate.",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "kano-model": {
    "term": "Kano Model",
    "plain": "A framework sorting features by their effect on satisfaction: basic expectations (their absence angers users), performance features (more is better), and delighters (unexpected wins that create love).",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "confidence": {
    "term": "Confidence",
    "plain": "An explicit, scored variable in RICE that forces you to state how sure you actually are about your reach and impact estimates — a structural defense against overconfidence and inflated pitches.",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "garbage-in-garbage-out": {
    "term": "Garbage In, Garbage Out",
    "plain": "The principle that a precise-looking output is only as good as its inputs. Feed a scoring framework sloppy estimates and you get a confident, sloppy — and dangerously authoritative-looking — answer.",
    "seeAlso": [
      "prod-m3-l5"
    ]
  },
  "now-next-later": {
    "term": "Now-Next-Later Roadmap",
    "plain": "An outcome-based roadmap with three confidence horizons: committed solutions now, problems and opportunities next, and target outcomes later. Invented by Janna Bastow in 2012.",
    "seeAlso": [
      "prod-m3-l6"
    ]
  },
  "outcome-based-roadmap": {
    "term": "Outcome-Based Roadmap",
    "plain": "A roadmap organized around the results you want to achieve rather than specific features and dates, keeping near-term work certain and far-term work honestly fuzzy.",
    "seeAlso": [
      "prod-m3-l6"
    ]
  },
  "gantt-chart": {
    "term": "Gantt Chart",
    "plain": "A timeline chart pinning specific features to specific dates across quarters. Treated as a contract in traditional roadmapping, but its distant dates are usually fiction.",
    "seeAlso": [
      "prod-m3-l6"
    ]
  },
  "false-contract": {
    "term": "False Contract",
    "plain": "Teresa Torres's term for feature/timeline roadmaps — they promise both the right solution and the exact date, neither of which is knowable far out, so they set everyone up for broken promises.",
    "seeAlso": [
      "prod-m3-l6"
    ]
  },
  "product-discovery": {
    "term": "Product Discovery",
    "plain": "The work of validating which problems are worth solving and which solutions actually work, before committing to build them. It's why far-out roadmap commitments are guesses.",
    "seeAlso": [
      "prod-m3-l6",
      "prod-m5-l5"
    ]
  },
  "team-topology": {
    "term": "Team Topology",
    "plain": "The deliberate way you divide work between teams so each can mostly operate independently, drawing team boundaries where the system has natural seams to minimize cross-team dependencies.",
    "seeAlso": [
      "prod-m4-l1"
    ]
  },
  "conways-law": {
    "term": "Conway's Law",
    "plain": "The observation that an organization tends to build systems that mirror its own communication structure — so org structure and system architecture end up reflecting each other.",
    "seeAlso": [
      "prod-m4-l1",
      "prod-m4-l5"
    ]
  },
  "team-objectives": {
    "term": "Team Objectives",
    "plain": "The specific outcomes a leader assigns each empowered team to chase, ideally shaped through a back-and-forth dialogue so the team owns a realistic, ambitious goal rather than a dictated one.",
    "seeAlso": [
      "prod-m4-l1"
    ]
  },
  "context-not-control": {
    "term": "Context, Not Control",
    "plain": "Netflix's leadership principle: instead of making decisions for people, give them enough context (strategy, economics, customer insight) to make great decisions themselves.",
    "seeAlso": [
      "prod-m4-l1"
    ]
  },
  "influence-without-authority": {
    "term": "Influence Without Authority",
    "plain": "The skill of getting people who don't report to you to align and act, earned through credibility, data, and trust rather than positional power.",
    "seeAlso": [
      "prod-m4-l2"
    ]
  },
  "power-interest-grid": {
    "term": "Power-Interest (Mendelow) Grid",
    "plain": "A stakeholder map that sorts people by how much power they hold and how much they care about your project, helping you decide who to manage closely versus merely keep informed.",
    "seeAlso": [
      "prod-m4-l2"
    ]
  },
  "raci": {
    "term": "RACI",
    "plain": "A clarity tool that labels, for each decision, who is Responsible (does the work), Accountable (owns the outcome — exactly one person), Consulted (gives input before), and Informed (told after).",
    "seeAlso": [
      "prod-m4-l2"
    ]
  },
  "disagree-and-commit": {
    "term": "Disagree and Commit",
    "plain": "The discipline of arguing your case fully, then fully committing to the group's decision even if you lost the argument — so teams can move fast without endless relitigation.",
    "seeAlso": [
      "prod-m4-l2"
    ]
  },
  "technical-credibility": {
    "term": "Technical Credibility",
    "plain": "The trust an engineering team grants a product leader who genuinely understands the system, respects its constraints, and can debate trade-offs — a PM's strongest currency of influence with engineers.",
    "seeAlso": [
      "prod-m4-l2"
    ]
  },
  "stakeholder": {
    "term": "Stakeholder",
    "plain": "A person or group with an interest in or influence over a product — such as legal, finance, sales, or executives — who often owns business knowledge and constraints a product team needs.",
    "seeAlso": [
      "prod-m4-l2",
      "prod-m4-l3"
    ]
  },
  "product-model": {
    "term": "Product Operating Model",
    "plain": "The way great product companies work: giving empowered teams problems to solve and holding them to outcomes, rather than handing down features to build.",
    "seeAlso": [
      "prod-m4-l3"
    ]
  },
  "product-culture": {
    "term": "Product Culture",
    "plain": "The shared values and behaviors of a product organization, strongest when it combines a culture of innovation (experiment and discover) with a culture of execution (ship reliably).",
    "seeAlso": [
      "prod-m4-l4"
    ]
  },
  "psychological-safety": {
    "term": "Psychological Safety",
    "plain": "The shared belief that you can take interpersonal risks — ask questions, admit mistakes, challenge the boss — without being punished or humiliated; found to be the top factor in effective teams.",
    "seeAlso": [
      "prod-m4-l4"
    ]
  },
  "autonomy": {
    "term": "Autonomy",
    "plain": "Giving teams genuine freedom over how they solve their problems — the practical expression of 'context, not control' — which is a precondition for both innovation and ownership of execution.",
    "seeAlso": [
      "prod-m4-l4"
    ]
  },
  "innovation-vs-execution": {
    "term": "Innovation vs. Execution",
    "plain": "The two halves of a strong product culture: innovation is the willingness to explore and experiment, while execution is the discipline to ship reliably at quality — great companies need both.",
    "seeAlso": [
      "prod-m4-l4"
    ]
  },
  "product-transformation": {
    "term": "Product Transformation",
    "plain": "The hard process of moving a company from a feature-factory or command-and-control model to a true product operating model — which most attempts fail at, usually on the human side.",
    "seeAlso": [
      "prod-m4-l5"
    ]
  },
  "coaching": {
    "term": "Coaching",
    "plain": "A leader's central responsibility in the product model: developing each person's judgment and skill over time so they can make great decisions themselves, rather than just being told what to do.",
    "seeAlso": [
      "prod-m4-l5"
    ]
  },
  "okrs": {
    "term": "OKRs",
    "plain": "Objectives and Key Results — a goal-setting framework of ambitious objectives paired with measurable results; valuable when used for real outcomes, but often misused as disguised feature lists.",
    "seeAlso": [
      "prod-m4-l5"
    ]
  },
  "middle-management-resistance": {
    "term": "Middle-Management Resistance",
    "plain": "The often-sincere pushback from managers whose status came from giving orders, who feel devalued by a model that asks them to coach instead — a force transformations must actively manage.",
    "seeAlso": [
      "prod-m4-l5"
    ]
  },
  "monolith": {
    "term": "Monolith",
    "plain": "A software system built as one large, tightly-coupled unit where most changes require coordinating many teams — a structure that can quietly enforce old dependencies and block real team independence.",
    "seeAlso": [
      "prod-m4-l5"
    ]
  },
  "deterministic": {
    "term": "Deterministic",
    "plain": "A system where the same input always produces exactly the same output — like a calculator or a login form. Traditional software is deterministic, which is what made it easy to test and predict.",
    "seeAlso": [
      "prod-m5-l1"
    ]
  },
  "probabilistic": {
    "term": "Probabilistic",
    "plain": "A system that samples from a range of possible outputs, so the same input can give different results on different runs. AI models are probabilistic, which is why 'mostly right' is the target rather than 'always identical.'",
    "seeAlso": [
      "prod-m5-l1"
    ]
  },
  "model-lifecycle": {
    "term": "Model Lifecycle",
    "plain": "The ongoing cycle of building, deploying, monitoring, and retraining an AI model. Unlike a feature you ship once, a model needs continual care because its quality decays as the world changes.",
    "seeAlso": [
      "prod-m5-l1"
    ]
  },
  "model-accuracy": {
    "term": "Model Accuracy",
    "plain": "A measure of how often an AI model produces correct or good-enough outputs on the cases that matter. It improves non-linearly, so the last few percentage points are often the hardest and slowest to win.",
    "seeAlso": [
      "prod-m5-l1"
    ]
  },
  "vibe-check": {
    "term": "Vibe Check",
    "plain": "Judging an AI by glancing at one or two outputs and deciding it 'feels good.' It's fast but unreliable, because it can't see how the product behaves across the thousands of cases real users will produce.",
    "seeAlso": [
      "prod-m5-l2"
    ]
  },
  "llm-as-a-judge": {
    "term": "LLM-as-a-Judge",
    "plain": "Using a strong AI model to automatically grade the outputs of another model against criteria you define. It's the fast, cheap measurement engine for experiments, but it must be calibrated against human review to stay trustworthy.",
    "seeAlso": [
      "prod-m5-l2",
      "prod-m5-l4"
    ]
  },
  "test-set": {
    "term": "Test Set",
    "plain": "The fixed collection of representative examples — including tricky edge cases — that an eval runs against. Keeping the test set consistent is what lets you compare today's result to last week's.",
    "seeAlso": [
      "prod-m5-l2"
    ]
  },
  "ship-no-ship": {
    "term": "Ship / No-Ship Call",
    "plain": "The product decision about whether a change is good enough to release, based on how it scored against the eval. It's a judgment the PM owns, not something the code decides.",
    "seeAlso": [
      "prod-m5-l2"
    ]
  },
  "probabilistic-ux": {
    "term": "Probabilistic UX",
    "plain": "Interface design that assumes the AI's answer might vary or be wrong, and builds for it — surfacing confidence, explaining reasoning, offering overrides, and failing gracefully.",
    "seeAlso": [
      "prod-m5-l3",
      "prod-m6-l5"
    ]
  },
  "confidence-ui": {
    "term": "Confidence UI",
    "plain": "Interface elements that communicate how sure the AI is of its answer, so users can calibrate how much to trust it. It only helps if the confidence signal actually tracks reality.",
    "seeAlso": [
      "prod-m5-l3"
    ]
  },
  "graceful-degradation": {
    "term": "Graceful Degradation",
    "plain": "Designing an AI feature so that when it can't deliver a confident, good answer, it steps down to something still useful — like falling back to plain search results — rather than breaking or inventing an answer.",
    "seeAlso": [
      "prod-m5-l3"
    ]
  },
  "agentic-experience": {
    "term": "Agentic Experience (AX)",
    "plain": "The design discipline for AI that takes actions on the user's behalf, not just answers questions. It centres on keeping autonomous AI transparent and controllable, with override controls and approval checkpoints.",
    "seeAlso": [
      "prod-m5-l3"
    ]
  },
  "microcopy": {
    "term": "Microcopy",
    "plain": "The small bits of interface text — labels, hints, one-line explanations — that carry a lot of an AI product's trust. Good microcopy explains the AI's reasoning in plain language so users can judge it.",
    "seeAlso": [
      "prod-m5-l3"
    ]
  },
  "build-measure-learn": {
    "term": "Build-Measure-Learn",
    "plain": "The Lean Startup loop of building the smallest thing that tests an idea, measuring how it does, and learning from the result. For AI the 'Build' step got cheap, so the constraint moved to 'Measure.'",
    "seeAlso": [
      "prod-m5-l4"
    ]
  },
  "retrieval": {
    "term": "Retrieval",
    "plain": "The strategy for which documents or data the AI pulls in to answer a question. It's one of the three main experimental levers, alongside the prompt and the model choice.",
    "seeAlso": [
      "prod-m5-l4"
    ]
  },
  "edge-case-monitoring": {
    "term": "Edge-Case Monitoring",
    "plain": "Watching live AI traffic for rare, weird, high-stakes failures that average metrics and offline evals miss — like a small slice of users having a terrible experience that's invisible in the overall numbers.",
    "seeAlso": [
      "prod-m5-l4"
    ]
  },
  "prompt": {
    "term": "Prompt",
    "plain": "The instructions you give an AI model to shape its behaviour. It's the cheapest and most common experimental lever, and rewriting it can change outputs dramatically.",
    "seeAlso": [
      "prod-m5-l4"
    ]
  },
  "vibe-coding": {
    "term": "Vibe Coding",
    "plain": "Building working software by describing what you want in plain English and letting an AI tool generate the code. It lets a PM turn an idea into a testable prototype in minutes without an engineering sprint.",
    "seeAlso": [
      "prod-m5-l5"
    ]
  },
  "error-analysis-loop": {
    "term": "Error-Analysis Loop",
    "plain": "The hands-on cycle of looking at real AI failures, tagging what went wrong, grouping them into patterns, and writing automated checks (evals) to catch each pattern going forward. It's where product judgment meets engineering.",
    "seeAlso": [
      "prod-m5-l5"
    ]
  },
  "orchestration": {
    "term": "Orchestration",
    "plain": "Coordinating an AI model with tools and multiple steps to accomplish a larger task. It's part of the technical discipline of building reliable AI products, especially agentic ones.",
    "seeAlso": [
      "prod-m5-l5",
      "prod-m6-l4"
    ]
  },
  "foundation-model": {
    "term": "Foundation Model",
    "plain": "A large, general-purpose AI model (like GPT- or Claude-class systems) trained on huge amounts of data and accessed through an API. Because competitors can rent the same one, building on top of it alone is not defensible.",
    "seeAlso": [
      "prod-m6-l1"
    ]
  },
  "switching-cost": {
    "term": "Switching Cost",
    "plain": "What a customer loses by moving to a competitor — time, data, embedded workflows, or accumulated context. High switching costs make a product hard to leave even when rivals copy its features.",
    "seeAlso": [
      "prod-m6-l1"
    ]
  },
  "network-effect": {
    "term": "Network Effect",
    "plain": "When a product gets more valuable as more people use it. A classic moat because the advantage grows automatically with the user base rather than having to be rebuilt.",
    "seeAlso": [
      "prod-m6-l1"
    ]
  },
  "data-governance": {
    "term": "Data Governance",
    "plain": "The rules and controls over how customer data is collected, consented to, stored, and used — including whether you are allowed to train models on it. Getting it wrong turns a data advantage into a legal liability.",
    "seeAlso": [
      "prod-m6-l1"
    ]
  },
  "outcome-based-pricing": {
    "term": "Outcome-Based Pricing",
    "plain": "Charging only when the AI delivers a result the customer values, like a resolved support ticket. Most attractive to buyers, but riskiest for you because you absorb the cost of every attempt that didn't succeed.",
    "seeAlso": [
      "prod-m6-l2"
    ]
  },
  "token-economics": {
    "term": "Token Economics",
    "plain": "The math of what an AI feature actually costs to run, measured in the tokens (text chunks) the model reads and writes, plus related compute. Understanding it is essential to pricing AI features above a margin floor.",
    "seeAlso": [
      "prod-m6-l2"
    ]
  },
  "margin-floor": {
    "term": "Margin Floor",
    "plain": "The minimum margin you commit never to price below, set above your fully-loaded cost per unit. It protects the business from offering plans that lose money on heavy users.",
    "seeAlso": [
      "prod-m6-l2"
    ]
  },
  "constitutional-ai": {
    "term": "Constitutional / Principle-Based AI",
    "plain": "An approach where the model is given an explicit set of written principles (a 'constitution') it must follow and can use to critique its own answers before they go out, catching off-policy or unsafe output by design.",
    "seeAlso": [
      "prod-m6-l3"
    ]
  },
  "automated-reasoning-verification": {
    "term": "Automated-Reasoning Verification",
    "plain": "Encoding your policies as formal logical rules and using an engine that can mathematically prove whether an answer is consistent with them — a stronger check than asking another AI to guess. AWS reports up to 99% verification accuracy with it.",
    "seeAlso": [
      "prod-m6-l3"
    ]
  },
  "agents-md": {
    "term": "AGENTS.md",
    "plain": "An instruction file kept in a codebase that tells coding agents how a team builds — its conventions, standards, libraries, and definition of 'done.' The team's style guide made machine-readable.",
    "seeAlso": [
      "prod-m6-l4"
    ]
  },
  "hallucination-check": {
    "term": "Hallucination Check",
    "plain": "The code-review step of verifying that a coding agent didn't invent a fake library, call a made-up API, or produce confident code that quietly breaks the logic. The new core skill in AI-native engineering.",
    "seeAlso": [
      "prod-m6-l4"
    ]
  },
  "defect-capture-rate": {
    "term": "Defect-Capture Rate",
    "plain": "A quality metric measuring how many bugs review catches before they ship. It's a far better signal than commit volume for an AI-native team, where agents can produce huge amounts of code cheaply.",
    "seeAlso": [
      "prod-m6-l4"
    ]
  },
  "shipyard-team": {
    "term": "Shipyard Team",
    "plain": "An emerging org structure: a small, senior, cross-functional group that orchestrates fleets of AI agents to ship at a volume that used to require a much larger headcount, concentrating seniority on judgment and verification.",
    "seeAlso": [
      "prod-m6-l4"
    ]
  },
  "operating-loop": {
    "term": "Operating Loop",
    "plain": "The continuous cycle an AI product leader runs — strategy, discovery, build, evals, UX, pricing, safety, outcomes — where each stage feeds the next and the outcomes loop back to sharpen strategy.",
    "seeAlso": [
      "prod-m6-l5"
    ]
  },
  "four-risks": {
    "term": "The Four Risks",
    "plain": "The four questions product discovery must answer about any idea: will customers value it (value), can they use it (usability), can we build it (feasibility), and does it work for the business (viability).",
    "seeAlso": [
      "prod-m6-l5"
    ]
  },
  "product-judgment": {
    "term": "Product Judgment",
    "plain": "The integrated ability to decide which problem matters, synthesise messy customer evidence into a clear bet, and weigh value, feasibility, margin, and risk at once. The part of the PM role AI can't absorb.",
    "seeAlso": [
      "prod-m6-l5"
    ]
  },
  "product-led-growth": {
    "term": "Product-Led Growth (PLG)",
    "plain": "A growth strategy where the product itself drives acquisition, activation, and retention — users reach real value on their own (often free) before any sales conversation, and using the product naturally invites others.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  },
  "aarrr-funnel": {
    "term": "AARRR Funnel (Pirate Metrics)",
    "plain": "The five stages of a user's journey — Acquisition, Activation, Retention, Referral, Revenue — each with its own metric, turning the vague goal of 'grow' into specific, measurable questions.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  },
  "activation": {
    "term": "Activation",
    "plain": "The moment a new user first experiences real value from a product. Strong activation is what turns a sign-up into someone likely to stay; weak activation makes acquisition spend leak away.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  },
  "retention": {
    "term": "Retention",
    "plain": "Whether users keep coming back over time. Often the most important growth metric, because a product people stay in makes every acquisition dollar worth far more and is the precondition for referral to work.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  },
  "referral-loop": {
    "term": "Referral Loop",
    "plain": "A loop where one user's normal use of the product naturally brings in new users, who bring in more still — like Dropbox's give-get storage program. Designed into the core action, not bolted on as a campaign.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  },
  "positioning": {
    "term": "Positioning",
    "plain": "The frame around a product — who it's for, what category it's in, what alternative it beats. The same features can read as essential or irrelevant depending entirely on how they're positioned.",
    "seeAlso": [
      "prod-m6-l6"
    ]
  }
}
