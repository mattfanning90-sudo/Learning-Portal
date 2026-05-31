// Shared domain typedefs. Import in JSDoc with:
//   /** @typedef {import('./types.js').Lesson} Lesson */
// These power editor IntelliSense + the `npm run typecheck` (jsconfig checkJs) pass.

/**
 * @typedef {Object} KCOption
 * @property {string} text
 * @property {boolean} correct
 */

/**
 * @typedef {Object} KnowledgeCheck
 * @property {string} q
 * @property {KCOption[]} options
 * @property {string} [feedback]
 */

/**
 * @typedef {Object} Challenge
 * @property {string} language
 * @property {string} prompt
 * @property {string} expectedOutput
 * @property {string} [starter]
 * @property {string} [check]
 * @property {string} [hint]
 * @property {string} [solution]
 */

/**
 * @typedef {Object} DiagramNode
 * @property {string} id
 * @property {string} label
 * @property {string} [sub]
 * @property {string} [icon]
 * @property {boolean} [accent]
 */

/**
 * @typedef {Object} Diagram
 * @property {string} [title]
 * @property {string} [caption]
 * @property {'vertical'|'horizontal'} [direction]
 * @property {Array<{ note?: string, edgeLabel?: string, nodes: DiagramNode[] }>} steps
 */

/**
 * @typedef {Object} Lesson
 * @property {string} id
 * @property {string} trackId
 * @property {string} moduleId
 * @property {number} order
 * @property {string} title
 * @property {string} coreIdea
 * @property {string[]} plainEnglish
 * @property {{ title: string, body: string[] }} metaphor
 * @property {{ title: string, body: string[], bridge?: string }} caseStudy
 * @property {string[]} takeaways
 * @property {KnowledgeCheck[]} [knowledgeCheck]
 * @property {Challenge} [challenge]
 * @property {Array<{ title: string, teaser?: string, body: string[] }>} [deepSections]
 * @property {Array<{ term: string, def: string }>} [keyTerms]
 * @property {{ body: string[] }} [pmAngle]
 * @property {Diagram} [diagram]
 * @property {Array<{ language: string, caption?: string, source: string, runnable?: boolean }>} [codeExamples]
 * @property {string[]} [glossaryTerms]
 * @property {Array<{ label: string, url: string }>} [sources]
 * @property {number} [estMinutes]
 */

/**
 * @typedef {Object} Module
 * @property {string} id
 * @property {string} title
 * @property {string} [goal]
 * @property {string[]} lessonIds
 */

/**
 * @typedef {Object} Track
 * @property {string} id
 * @property {string} title
 * @property {string} [tagline]
 * @property {string} [accent]
 * @property {string} [accentVar]
 * @property {Module[]} modules
 */

export {}
