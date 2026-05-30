// Pilot diagrams, attached to lessons by id in index.js. A diagram is an ordered
// list of steps; each step is a row of nodes + the sentence explaining it. One step
// renders static; multiple steps animate as a progressive build-up (see Diagram.jsx).
// Kept as an overlay so it works for both hand-authored and auto-assembled tracks.
export const diagrams = {
  'eng-m1-l1': {
    title: 'How a model writes one word at a time',
    direction: 'vertical',
    caption: 'The same loop runs again for every single token — that is the whole machine.',
    steps: [
      { note: "Everything written so far becomes the input.", nodes: [{ id: 'prompt', label: 'Prompt', sub: '"The cat sat on the…"' }] },
      { note: 'The model scores every possible next token by plausibility — not by truth.', nodes: [{ id: 'model', label: 'Model', sub: 'a plausibility engine' }] },
      { note: 'It picks the most likely token and writes it.', nodes: [{ id: 'token', label: 'Next token', sub: '"mat"', accent: true }] },
      { note: 'That token is added to the text — then the entire loop runs again for the next one.', nodes: [{ id: 'loop', label: 'Append & repeat ↺' }] },
    ],
  },

  'eng-m2-l2': {
    title: 'Retrieval: finding the right passage before answering',
    direction: 'vertical',
    caption: 'The model never "remembers" your documents — the system hands it the relevant ones at question time.',
    steps: [
      { note: 'The user asks a question.', nodes: [{ id: 'q', label: 'Question', sub: '"What is our refund policy?"' }] },
      { note: 'The question is turned into an embedding — a numeric fingerprint of its meaning.', nodes: [{ id: 'emb', label: 'Embed the question' }] },
      { note: 'The system searches the index for the closest-meaning chunks.', nodes: [{ id: 'idx', label: 'Search the index', sub: 'pre-embedded documents' }] },
      { note: 'The most relevant passages come back.', nodes: [{ id: 'top', label: 'Top chunks', sub: 'best matches', accent: true }] },
      { note: 'Those chunks are pasted into the prompt as context, and the model answers from them.', nodes: [{ id: 'ans', label: 'Grounded answer' }] },
    ],
  },

  'cloud-m2-l4': {
    title: 'Encryption in transit: safe across an open network',
    direction: 'horizontal',
    caption: 'Intercepting the traffic gets you gibberish — only the holder of the matching key can read it.',
    steps: [
      { note: 'You type a message in your browser.', nodes: [{ id: 'send', label: 'Sender', sub: 'your browser' }] },
      { note: 'It is scrambled into unreadable ciphertext before it leaves your device.', nodes: [{ id: 'enc', label: 'Encrypt', sub: 'TLS' }] },
      { note: 'It crosses the public internet as gibberish — useless to anyone who grabs it.', nodes: [{ id: 'net', label: 'Internet', sub: 'ciphertext', accent: true }] },
      { note: 'The server unscrambles it with the matching key.', nodes: [{ id: 'dec', label: 'Decrypt' }] },
      { note: 'The server reads the original message.', nodes: [{ id: 'recv', label: 'Server', sub: 'plaintext again' }] },
    ],
  },

  'cloud-m3-l6': {
    title: 'A simple web app on AWS, top to bottom',
    direction: 'vertical',
    caption: 'Each box is one AWS service doing one job — the architecture is just how they connect.',
    steps: [
      { note: "A user's request starts at DNS, which finds your app's address.", nodes: [{ id: 'dns', label: 'Route 53', sub: 'DNS' }] },
      { note: 'The CDN serves cached static files fast from a location near the user.', nodes: [{ id: 'cdn', label: 'CloudFront', sub: 'CDN / edge cache' }] },
      { note: 'Dynamic requests pass to a load balancer.', nodes: [{ id: 'lb', label: 'Load balancer', sub: 'spreads traffic' }] },
      { note: '…which spreads them across several identical app servers.', nodes: [{ id: 'ec2a', label: 'App server' }, { id: 'ec2b', label: 'App server' }] },
      { note: 'The app reads and writes the managed database.', nodes: [{ id: 'db', label: 'RDS', sub: 'database', accent: true }] },
      { note: 'Big files, images, and backups live in object storage.', nodes: [{ id: 's3', label: 'S3', sub: 'object storage' }] },
    ],
  },

  'cloud-m4-l4': {
    title: 'How a request finds your app',
    direction: 'vertical',
    caption: 'DNS, CDN, and the load balancer are the three signposts between a user and your server.',
    steps: [
      { note: 'Your browser asks: where does example.com actually live?', nodes: [{ id: 'u', label: 'Browser' }] },
      { note: 'Route 53 answers with an address.', nodes: [{ id: 'r53', label: 'Route 53', sub: 'DNS lookup' }] },
      { note: 'CloudFront checks its edge cache first — a hit returns instantly, no server needed.', nodes: [{ id: 'cf', label: 'CloudFront', sub: 'CDN edge', accent: true }] },
      { note: 'A miss goes to the load balancer, which picks a healthy server.', nodes: [{ id: 'elb', label: 'Load balancer' }] },
      { note: 'The server builds the response and sends it back.', nodes: [{ id: 'srv', label: 'Your server' }] },
    ],
  },

  'cloud-m6-l3': {
    title: 'The FinOps lifecycle: a loop, not a project',
    direction: 'horizontal',
    caption: 'You never "finish" — each lap through the loop makes spend more visible and more efficient.',
    steps: [
      { note: 'Inform: make spend visible — who spent what, on what, and is it worth it.', nodes: [{ id: 'inform', label: 'Inform', sub: 'visibility & allocation' }] },
      { note: 'Optimize: cut waste and lower rates — rightsizing, scheduling, commitments.', nodes: [{ id: 'opt', label: 'Optimize', sub: 'rightsize, RIs / Savings Plans' }] },
      { note: 'Operate: build the habits, policies, and ownership that keep it going.', nodes: [{ id: 'oper', label: 'Operate', sub: 'governance & culture' }] },
      { note: 'Then loop back to Inform with what you learned — continuously.', nodes: [{ id: 'loop', label: 'Repeat ↺', sub: 'continuous', accent: true }] },
    ],
  },
}
