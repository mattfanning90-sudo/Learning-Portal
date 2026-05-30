// Engineering · Module 1 — What an LLM Actually Is
// Seed lesson (the content exemplar). Remaining M1 lessons are authored in Phase B.

const lessons = {
  'eng-m1-l1': {
    id: 'eng-m1-l1', trackId: 'engineering', moduleId: 'eng-m1', order: 1, estMinutes: 8,
    title: 'The Improv Actor: Next-Token Prediction',
    coreIdea: 'A language model predicts the next chunk of text — nothing more.',
    plainEnglish: [
      'An LLM is not a thinking machine or a database of facts. It is a statistical engine that predicts the most likely next piece of text, one chunk at a time, over and over.',
      'Almost every strength (its fluency) and every flaw (inventing facts, giving different answers to the same question) follows from this single mechanism.',
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        'An immensely well-read improv actor who has speed-read most of the internet and now plays an endless game of "finish my sentence." It never looks anything up mid-sentence — it just produces the most plausible next few letters based on the rhythm of everything it has ever read.',
        'It is spectacular at sounding right because sounding right is literally the only thing it was trained to do.',
      ],
    },
    deepSections: [
      {
        title: 'The math without the math',
        teaser: 'rolling weighted dice, not looking up answers',
        body: [
          'At each step the model assigns a probability to every possible next chunk of text, then picks from that list of options — a bit like rolling dice that are weighted by everything it has ever read.',
          'There is no separate "fact store" it consults. The knowledge is blurred into those probabilities, which is why it can be fluent and wrong at the same time.',
        ],
      },
      {
        title: 'Temperature: why the same prompt gives different answers',
        teaser: 'a creativity dial from cautious to wild',
        body: [
          '"Temperature" is a setting that controls how adventurously the model picks. Low temperature makes it choose the single safest next chunk every time — repetitive but predictable. High temperature lets it take more risks — more creative, but more likely to wander.',
          'This is why you can ask the exact same question twice and get two different answers. It is a feature of how it works, not a malfunction.',
        ],
      },
    ],
    pmAngle: {
      body: [
        'If you do not internalise that the model is a plausibility engine, not a truth engine, you will over-promise to customers and stakeholders.',
        'The single most common AI-product failure is treating fluent output as if it were verified output. Your entire roadmap of trust features — citations, review steps, guardrails — exists because of this one fact.',
      ],
    },
    caseStudy: {
      title: 'ChatGPT reaches 100 million users in two months',
      body: [
        'When ChatGPT launched in November 2022, the model underneath it had been trained on one deceptively simple goal: predict the next chunk of text. Nothing about "being correct" or "telling the truth" was in that goal.',
        'It still became the fastest-growing consumer app in history at the time, because predicting text well enough, at a large enough scale, produces something that feels like it understands you.',
      ],
      bridge: 'Next-token prediction at scale produced something that feels like understanding — without ever being designed to be true. Hold onto that gap; the rest of the track is about closing it.',
    },
    takeaways: [
      'Generating fluent text is mostly solved; being correct is a separate, harder problem.',
      'Getting different answers to the same question is expected behaviour, not a bug.',
      '"It sounds confident" tells you nothing about whether it is right.',
    ],
    knowledgeCheck: [
      {
        q: 'What is a large language model fundamentally doing when it answers you?',
        options: [
          { text: 'Looking up the answer in a database of facts', correct: false },
          { text: 'Predicting the most plausible next chunk of text', correct: true },
          { text: 'Reasoning from first principles the way a person does', correct: false },
        ],
        feedback: 'Exactly — it is a plausibility engine. Almost everything else about LLMs follows from that one idea.',
      },
    ],
    glossaryTerms: ['token', 'temperature', 'inference', 'large-language-model'],
    sources: [
      { label: 'Andrej Karpathy — Deep Dive into LLMs (2025)', url: 'https://lawwu.github.io/posts/2025-02-24-karpathy-deep-dive-llms/index.html' },
      { label: 'Next-token prediction, explained', url: 'https://www.wwwinsights.com/ai/llm-next-token-prediction/' },
    ],
  },
}

export default lessons
