# Cloud, AWS & FinOps — Track Syllabus (approved design)

**Status:** Outline approved 2026-05-31. Lessons NOT yet authored — build queued.
**Audience:** smart but non-technical, fluency-first ("hold the room"); same voice as the AI Engineering & Product tracks.

## Decisions (from brainstorming)
- **Approach:** Hybrid — plain-English concepts + metaphors + case studies, PLUS concrete "here's what an engineer sets up / what it costs" walkthroughs. Nothing required to run.
- **Depth:** Comprehensive — 7 modules, **43 lessons**.
- **Emphasis:** Even thirds across Cloud / AWS / FinOps (currently lands ~11 / 13 / 19 because billing bridges AWS↔FinOps — a slight, intentional FinOps lean that fits the product-leader angle).
- **Cert mapping:** AWS Certified Cloud Practitioner (CLF-C02) + FinOps Certified Practitioner.

## Track identity
- **Name:** Cloud, AWS & FinOps
- **Tagline:** "Understand the machine you're renting — and the bill it generates — well enough to lead the people who run it."
- **Accent:** new `--cloud` token, an AWS-warm orange in `oklch` (no hard-coded hex; follow Lumen).
- Registered in `src/content/` and appended to the braided order after the coding tracks (same pattern as Python/Java).

## Modules & lessons

### M1 — Cloud Foundations · *Cloud* · CLF-C02 Cloud Concepts
1. Someone Else's Computer — and Why That Misses the Point
2. Renting Beats Owning: the CapEx → OpEx Shift That Changed IT
3. Pizza as a Service: IaaS, PaaS & SaaS Made Obvious
4. Buy for Peak No More: Elasticity, Scaling & Pay-for-What-You-Use
5. Where the Cloud Physically Lives: Regions, Availability Zones & Edge
6. Public, Private, Hybrid, Multi-Cloud: Picking a Home for Workloads

### M2 — Cloud Security & Operating Concepts · *Cloud* · CLF-C02 Security & Compliance
1. The Shared Responsibility Model: Who Guards What
2. Identity Is the New Perimeter: Authentication vs Authorization
3. Least Privilege & Blast Radius: the Two Ideas Behind Safe Access
4. Locks Everywhere: Encryption at Rest and in Transit, in Plain English
5. Built to Survive: Availability, Redundancy & Designing for Failure

### M3 — The AWS Platform & Its Mental Model · *AWS* · CLF-C02 Cloud Technology
1. 200 Services, One Map: Navigating AWS Without Drowning
2. The Account Is the Boundary: Accounts, Organizations & the Root User
3. Global, Regional, Zonal: Which Services Live Where
4. Four Doors In: Console, CLI, SDK & Infrastructure-as-Code
5. The Well-Architected Frame: the Six Pillars AWS Judges Every Design By
6. A Simple App, Drawn Box by Box: Your First AWS Architecture

### M4 — The AWS Core Services You Must Know · *AWS* · CLF-C02 Cloud Technology
1. Compute Three Ways: Servers (EC2), Functions (Lambda) & Containers
2. Storage That Fits the Job: S3, EBS, EFS — and S3 Storage Classes
3. The Private Network: VPCs, Subnets & Security Groups Without Fear
4. Getting Found: DNS (Route 53), Load Balancers & the CDN (CloudFront)
5. Databases Without the PhD: RDS, Aurora & DynamoDB — SQL vs NoSQL
6. The Glue: Queues, Events & APIs (SQS, SNS, EventBridge, API Gateway)
7. Watching It Run: CloudWatch Metrics, Logs & Alarms

### M5 — How the Cloud Bill Actually Works · *Bridge: AWS → FinOps* · CLF-C02 Billing & Pricing
1. Pay-As-You-Go, Decoded — and the Free-Tier Traps
2. Four Ways to Pay for Compute: On-Demand, Spot, Reserved & Savings Plans
3. The Bill Nobody Predicts: Data Transfer & Egress
4. Reading the Bill: Cost Explorer & the Cost and Usage Report (CUR)
5. Tags Are Money: Cost Allocation Tags & Accounts as Cost Boundaries
6. The Safety Net: Budgets, Alerts & Stopping a Runaway Bill

### M6 — FinOps Foundations · *FinOps* · FinOps Certified Practitioner
1. What FinOps Really Is: Financial Accountability for Variable Spend
2. The Six FinOps Principles: the Shared Belief System
3. Inform → Optimize → Operate: the FinOps Lifecycle
4. Everyone Owns the Bill: the Personas (Eng, Finance, Product, Leadership)
5. Why Cloud Cost Is Different: Variable, Decentralized & Engineer-Driven
6. Crawl, Walk, Run: Maturing a FinOps Practice

### M7 — FinOps in Practice · *FinOps* · FinOps Certified Practitioner (capabilities)
1. Showback vs Chargeback: Making Teams See Their Spend
2. Unit Economics: Cost per Customer, Feature & Transaction
3. Rate Optimization: Committing Wisely with RIs & Savings Plans
4. Usage Optimization: Rightsizing, Scheduling & Killing Zombie Resources
5. Forecasting a Bill That Changes Daily
6. Anomaly Detection: Catching the $40k Surprise on Day One
7. The Culture Problem: Cost-Aware Engineering Without Killing Velocity

## Per-lesson shape (8-part, hybrid-flavored)
core idea → plain-English → metaphor → deep sections (incl. a concrete "what it looks like / what it costs" walkthrough) → keyTerms → cost/ownership **PM angle** → real case study → takeaways → knowledge check (FinOps lessons get a small **cost-calculation challenge**) → glossary terms + sources. Match the seed-lesson writing bar; define every term before it's used (per the comprehension-audit lessons).

## Build approach (when greenlit)
Same pipeline as the other tracks: research briefs → authoring workflow (one agent per lesson, schema-validated) → deterministic assemble script → register track + add `--cloud` token + append to braided order + merge glossary → `npm test` green + prod-preview render check → commit → deploy.

## Open item
Even out the thirds (trim M7 by one, add a Cloud lesson) vs. keep the slight FinOps lean. Currently keeping the lean.
