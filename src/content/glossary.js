// Plain-English glossary. termId -> { term, plain, seeAlso: [lessonId] }.
// Phase B authoring adds an entry for every term any lesson references.

const glossary = {
  'token': {
    term: 'Token',
    plain: 'The small chunk of text — often a word-piece, not a whole word — that a language model reads and writes one at a time. Tokens are the unit you pay for and the unit that fills the model’s limited working memory.',
    seeAlso: ['eng-m1-l1'],
  },
  'temperature': {
    term: 'Temperature',
    plain: 'A setting that controls how adventurously a model picks its next chunk of text. Low = safe and repetitive; high = creative and more likely to wander. It’s why the same question can get different answers.',
    seeAlso: ['eng-m1-l1'],
  },
  'inference': {
    term: 'Inference',
    plain: 'Using a trained model to produce an answer — the per-request work (and per-request cost) that happens every time someone uses the product. Distinct from training, which builds the model once.',
    seeAlso: ['eng-m1-l1'],
  },
  'large-language-model': {
    term: 'Large Language Model (LLM)',
    plain: 'An AI system trained on enormous amounts of text to predict the next chunk of text. The engine behind tools like ChatGPT and Claude. Fluent by design; truthful only when you engineer it to be.',
    seeAlso: ['eng-m1-l1'],
  },
  'product-operating-model': {
    term: 'Product Operating Model',
    plain: 'The way the best tech companies run: small empowered teams are given problems to solve and judged on outcomes, rather than handed a list of features to build.',
    seeAlso: ['prod-m1-l1'],
  },
  'feature-factory': {
    term: 'Feature Factory',
    plain: 'An organisation where executives decide the solutions and hand teams a roadmap of features to execute. Measures success by features shipped, not problems solved.',
    seeAlso: ['prod-m1-l1'],
  },
  'empowered-team': {
    term: 'Empowered Team',
    plain: 'A cross-functional team (product, design, engineering) given a problem to solve and the freedom to find the best solution — the opposite of a team that just builds a handed-down spec.',
    seeAlso: ['prod-m1-l1'],
  },
  'outcome': {
    term: 'Outcome (vs Output)',
    plain: 'A measurable change in customer behaviour or business results (the goal), as opposed to output — features shipped (the activity). You can produce lots of output and move no outcome.',
    seeAlso: ['prod-m1-l1'],
  },
}

export default glossary
