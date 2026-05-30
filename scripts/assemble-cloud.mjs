// Consumes the cloud-authoring workflow output (one JSON per lesson under
// docs/research/cloud-jobs/) and writes src/content/cloud.js.
// Re-stamps authoritative id/trackId/moduleId/order/title from the manifest,
// validates every lesson with the real validateLesson, and reports problems.
//
// Usage: node scripts/assemble-cloud.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { validateLesson } from '../src/lib/schema.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const jobsDir = root + 'docs/research/cloud-jobs/'

const MODULES = {
  'cloud-m1': { title: 'Module 1 — Cloud Foundations', goal: "Build a jargon-free mental model of what 'the cloud' really is and why it reshaped IT economics." },
  'cloud-m2': { title: 'Module 2 — Cloud Security & Operating Concepts', goal: 'Understand who is responsible for what, and the core ideas that keep cloud systems safe and available.' },
  'cloud-m3': { title: 'Module 3 — The AWS Platform & Its Mental Model', goal: 'Reduce the sprawling AWS menu to the handful of ideas that organize all of it.' },
  'cloud-m4': { title: 'Module 4 — The AWS Core Services You Must Know', goal: 'Know the compute, storage, network and database building blocks — what each is, when to reach for it, and what it costs.' },
  'cloud-m5': { title: 'Module 5 — How the Cloud Bill Actually Works', goal: 'Read an AWS bill, understand every pricing lever, and see where the money really goes.' },
  'cloud-m6': { title: 'Module 6 — FinOps Foundations', goal: 'Learn the discipline of cloud cost: its principles, lifecycle and who is at the table.' },
  'cloud-m7': { title: 'Module 7 — FinOps in Practice', goal: 'The actual moves: allocate, optimize, forecast, and build a cost-aware culture.' },
}

// [moduleId, order, id, title] — authoritative manifest (mirrors the build workflow).
const MANIFEST = [
  ['cloud-m1', 1, 'cloud-m1-l1', "Someone Else's Computer — and Why That Misses the Point"],
  ['cloud-m1', 2, 'cloud-m1-l2', 'Renting Beats Owning: the CapEx → OpEx Shift That Changed IT'],
  ['cloud-m1', 3, 'cloud-m1-l3', 'Pizza as a Service: IaaS, PaaS & SaaS Made Obvious'],
  ['cloud-m1', 4, 'cloud-m1-l4', 'Buy for Peak No More: Elasticity, Scaling & Pay-for-What-You-Use'],
  ['cloud-m1', 5, 'cloud-m1-l5', 'Where the Cloud Physically Lives: Regions, Availability Zones & Edge'],
  ['cloud-m1', 6, 'cloud-m1-l6', 'Public, Private, Hybrid, Multi-Cloud: Picking a Home for Workloads'],
  ['cloud-m2', 1, 'cloud-m2-l1', 'The Shared Responsibility Model: Who Guards What'],
  ['cloud-m2', 2, 'cloud-m2-l2', 'Identity Is the New Perimeter: Authentication vs Authorization'],
  ['cloud-m2', 3, 'cloud-m2-l3', 'Least Privilege & Blast Radius: the Two Ideas Behind Safe Access'],
  ['cloud-m2', 4, 'cloud-m2-l4', 'Locks Everywhere: Encryption at Rest and in Transit, in Plain English'],
  ['cloud-m2', 5, 'cloud-m2-l5', 'Built to Survive: Availability, Redundancy & Designing for Failure'],
  ['cloud-m3', 1, 'cloud-m3-l1', '200 Services, One Map: Navigating AWS Without Drowning'],
  ['cloud-m3', 2, 'cloud-m3-l2', 'The Account Is the Boundary: Accounts, Organizations & the Root User'],
  ['cloud-m3', 3, 'cloud-m3-l3', 'Global, Regional, Zonal: Which Services Live Where'],
  ['cloud-m3', 4, 'cloud-m3-l4', 'Four Doors In: Console, CLI, SDK & Infrastructure-as-Code'],
  ['cloud-m3', 5, 'cloud-m3-l5', 'The Well-Architected Frame: the Six Pillars AWS Judges Every Design By'],
  ['cloud-m3', 6, 'cloud-m3-l6', 'A Simple App, Drawn Box by Box: Your First AWS Architecture'],
  ['cloud-m4', 1, 'cloud-m4-l1', 'Compute Three Ways: Servers (EC2), Functions (Lambda) & Containers'],
  ['cloud-m4', 2, 'cloud-m4-l2', 'Storage That Fits the Job: S3, EBS, EFS — and S3 Storage Classes'],
  ['cloud-m4', 3, 'cloud-m4-l3', 'The Private Network: VPCs, Subnets & Security Groups Without Fear'],
  ['cloud-m4', 4, 'cloud-m4-l4', 'Getting Found: DNS (Route 53), Load Balancers & the CDN (CloudFront)'],
  ['cloud-m4', 5, 'cloud-m4-l5', 'Databases Without the PhD: RDS, Aurora & DynamoDB — SQL vs NoSQL'],
  ['cloud-m4', 6, 'cloud-m4-l6', 'The Glue: Queues, Events & APIs (SQS, SNS, EventBridge, API Gateway)'],
  ['cloud-m4', 7, 'cloud-m4-l7', 'Watching It Run: CloudWatch Metrics, Logs & Alarms'],
  ['cloud-m5', 1, 'cloud-m5-l1', 'Pay-As-You-Go, Decoded — and the Free-Tier Traps'],
  ['cloud-m5', 2, 'cloud-m5-l2', 'Four Ways to Pay for Compute: On-Demand, Spot, Reserved & Savings Plans'],
  ['cloud-m5', 3, 'cloud-m5-l3', 'The Bill Nobody Predicts: Data Transfer & Egress'],
  ['cloud-m5', 4, 'cloud-m5-l4', 'Reading the Bill: Cost Explorer & the Cost and Usage Report (CUR)'],
  ['cloud-m5', 5, 'cloud-m5-l5', 'Tags Are Money: Cost Allocation Tags & Accounts as Cost Boundaries'],
  ['cloud-m5', 6, 'cloud-m5-l6', 'The Safety Net: Budgets, Alerts & Stopping a Runaway Bill'],
  ['cloud-m6', 1, 'cloud-m6-l1', 'What FinOps Really Is: Financial Accountability for Variable Spend'],
  ['cloud-m6', 2, 'cloud-m6-l2', 'The Six FinOps Principles: the Shared Belief System'],
  ['cloud-m6', 3, 'cloud-m6-l3', 'Inform → Optimize → Operate: the FinOps Lifecycle'],
  ['cloud-m6', 4, 'cloud-m6-l4', 'Everyone Owns the Bill: the Personas (Eng, Finance, Product, Leadership)'],
  ['cloud-m6', 5, 'cloud-m6-l5', 'Why Cloud Cost Is Different: Variable, Decentralized & Engineer-Driven'],
  ['cloud-m6', 6, 'cloud-m6-l6', 'Crawl, Walk, Run: Maturing a FinOps Practice'],
  ['cloud-m7', 1, 'cloud-m7-l1', 'Showback vs Chargeback: Making Teams See Their Spend'],
  ['cloud-m7', 2, 'cloud-m7-l2', 'Unit Economics: Cost per Customer, Feature & Transaction'],
  ['cloud-m7', 3, 'cloud-m7-l3', 'Rate Optimization: Committing Wisely with RIs & Savings Plans'],
  ['cloud-m7', 4, 'cloud-m7-l4', 'Usage Optimization: Rightsizing, Scheduling & Killing Zombie Resources'],
  ['cloud-m7', 5, 'cloud-m7-l5', 'Forecasting a Bill That Changes Daily'],
  ['cloud-m7', 6, 'cloud-m7-l6', 'Anomaly Detection: Catching the $40k Surprise on Day One'],
  ['cloud-m7', 7, 'cloud-m7-l7', 'The Culture Problem: Cost-Aware Engineering Without Killing Velocity'],
]

const lessons = {}
const problems = []
const moduleLessonIds = {}

for (const [moduleId, order, id, title] of MANIFEST) {
  const file = jobsDir + id + '.json'
  if (!existsSync(file)) { problems.push(`${id}: job file MISSING`); continue }
  let a
  try { a = JSON.parse(readFileSync(file, 'utf8')) } catch (e) { problems.push(`${id}: bad JSON (${e.message})`); continue }
  // Re-stamp authoritative fields; drop any fields we don't ship.
  const lesson = { ...a, id, trackId: 'cloud', moduleId, order, title, estMinutes: a.estMinutes || 9 }
  delete lesson.challenge
  delete lesson.glossaryTerms
  const issues = validateLesson(lesson)
  if (issues.length) problems.push(`${id}: ${issues.join(' | ')}`)
  lessons[id] = lesson
  ;(moduleLessonIds[moduleId] ||= []).push({ order, id })
}

const tracks = [{
  id: 'cloud',
  title: 'Cloud, AWS & FinOps',
  tagline: "Understand the machine you're renting — and the bill it generates — well enough to lead the people who run it.",
  accent: 'cloud',
  accentVar: 'var(--cloud)',
  modules: Object.keys(MODULES).map((mid) => ({
    id: mid,
    title: MODULES[mid].title,
    goal: MODULES[mid].goal,
    lessonIds: (moduleLessonIds[mid] || []).sort((x, y) => x.order - y.order).map((x) => x.id),
  })),
}]

const cloudGlossary = {}

const out = `// Cloud, AWS & FinOps track. Auto-assembled by scripts/assemble-cloud.mjs.
// Self-contained: index.js merges { tracks, lessons } into the registry.
const lessons = ${JSON.stringify(lessons, null, 2)}

const tracks = ${JSON.stringify(tracks, null, 2)}

const cloudGlossary = ${JSON.stringify(cloudGlossary, null, 2)}

export default { tracks, lessons, cloudGlossary }
`
writeFileSync(root + 'src/content/cloud.js', out)

console.log(`Assembled ${Object.keys(lessons).length} cloud lessons across ${tracks[0].modules.length} modules.`)
tracks[0].modules.forEach((m) => console.log(`  ${m.id}: ${m.lessonIds.length} lessons`))
console.log('--- validation ---')
console.log(problems.length ? problems.map((p) => '  ' + p).join('\n') : '  all lessons valid ✓')
if (problems.length) { console.log(`\n${problems.length} ISSUES to review.`); process.exit(1) }
