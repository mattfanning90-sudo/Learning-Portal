// Product · Module 1 — How Great Product Companies Work
// Seed lesson (the content exemplar). Remaining M1 lessons are authored in Phase B.

const lessons = {
  'prod-m1-l1': {
    id: 'prod-m1-l1', trackId: 'product', moduleId: 'prod-m1', order: 1, estMinutes: 9,
    title: 'The Product Operating Model vs the Feature Factory',
    coreIdea: 'Great companies give teams problems to solve, not features to build.',
    plainEnglish: [
      'The best tech companies do not hand their teams a list of features to ship. They give small teams a hard problem and the freedom to find the best solution, then judge them on whether the business result actually moved.',
      'Most companies do the opposite: executives decide the solutions and hand them down as a roadmap to execute. This is a "feature factory," and the difference between these two models explains a huge amount of why companies win or lose.',
    ],
    metaphor: {
      title: '🧭 Think of it like…',
      body: [
        'Two restaurant chains. The first mails every kitchen a fixed menu to cook exactly as written, no changes allowed. The second tells each kitchen the goal — "delight these diners, hit these margins" — and trusts the chefs, who actually talk to the diners every night, to invent the menu themselves.',
        'The second restaurant adapts to what real customers want. The first ships the same dish everywhere and wonders why some locations empty out.',
      ],
    },
    deepSections: [
      {
        title: 'The three questions the model answers',
        teaser: 'which problems, how to solve them, how to build and deliver',
        body: [
          'A real product operating model answers three questions deliberately: which problems are worth solving (strategy), how to solve them (discovery), and how to build and deliver the solution (delivery).',
          'A feature factory collapses all three into one: an executive names a feature, and the team just builds it. The hardest, most valuable questions — "is this even the right problem?" — never get asked.',
        ],
      },
      {
        title: 'Why AI makes this gap bigger, not smaller',
        teaser: 'when building gets cheap, knowing what to build is the bottleneck',
        body: [
          'As AI coding tools make building dramatically cheaper and faster, the scarce skill shifts from "can we build it?" to "are we building the right thing?"',
          'A feature factory with faster tools just produces the wrong features faster. The product operating model — which is organised entirely around finding the right problem — becomes the real advantage.',
        ],
      },
    ],
    pmAngle: {
      body: [
        'Technical-literacy angle: understand why an organisation that treats engineering as an order-taking "IT cost centre" structurally wastes its most expensive talent.',
        'Engineers are a source of solution ideas, not just a build function — and the operating model decides whether you ever get access to that value. To lead well you need to grasp this even before you can code.',
      ],
    },
    caseStudy: {
      title: 'Trainline: from spec-takers to the UK’s #1 travel app',
      body: [
        'Trainline used to have its marketing team write specifications and hand them to outsourced engineers to build — a textbook feature factory.',
        'It shifted to empowered, cross-functional squads given outcomes to chase rather than features to ship. It became the UK’s number-one travel app and floated on the London Stock Exchange in 2019. The transformation is a headline case in Marty Cagan’s book TRANSFORMED.',
      ],
      bridge: 'The product did not get better because they hired better builders. It got better because they changed who decides what to build, and how that decision is made.',
    },
    takeaways: [
      'Empowered teams are given problems to solve; feature teams are given features to build.',
      'The operating model decides whether you ever tap your engineers’ best ideas.',
      'Cheaper building (AI) raises the value of knowing what to build — the core of this model.',
    ],
    knowledgeCheck: [
      {
        q: 'What most distinguishes a real product operating model from a feature factory?',
        options: [
          { text: 'Teams are given problems to solve and held to outcomes', correct: true },
          { text: 'Teams ship more features per quarter', correct: false },
          { text: 'Executives write more detailed specifications', correct: false },
        ],
        feedback: 'Right — problems and outcomes, not handed-down features. That single shift is the foundation of everything else in this track.',
      },
    ],
    glossaryTerms: ['product-operating-model', 'feature-factory', 'empowered-team', 'outcome'],
    sources: [
      { label: 'SVPG — The Product Operating Model', url: 'https://www.svpg.com/the-product-operating-model-an-introduction/' },
      { label: 'Product Compass — TRANSFORMED summary', url: 'https://www.productcompass.pm/p/transformed-product-operating-model-marty-cagan' },
    ],
  },
}

export default lessons
