/**
 * "We are our own proof" — Arus Digital runs its own operations on AI.
 * This is the internal stack, used as Phase-1 credibility (needs no client
 * permission). Ported and reframed from the original arusdigital.com.
 */

export interface ProofFunction {
  fn: string;
  tool: string;
  desc: string;
}

export const proofStack: ProofFunction[] = [
  {
    fn: 'Intelligence',
    tool: 'Miccy',
    desc: 'A daily brief on metrics, market signals and anomalies — the AI product we built for ourselves first.',
  },
  {
    fn: 'Orchestration',
    tool: 'Agent org chart',
    desc: 'Strategy, delivery and research agents working a shared roadmap around the clock.',
  },
  {
    fn: 'Delivery',
    tool: 'AI coding & content agents',
    desc: 'Sites, campaigns and content drafted by agents, with human review gates on everything that ships.',
  },
  {
    fn: 'Research',
    tool: 'Autonomous agents',
    desc: 'Competitor monitoring, keyword and market research running continuously, not in monthly bursts.',
  },
  {
    fn: 'Infrastructure',
    tool: 'OpenClaw',
    desc: 'A persistent assistant managing servers, deployments and uptime 24/7.',
  },
  {
    fn: 'Direction',
    tool: 'Humans',
    desc: 'People set the strategy, judge the taste and own the client relationship. AI executes the rest.',
  },
];

/** Headline throughput stats — TODO: confirm real numbers with the owner. */
export const proofStats = [
  { value: '100%', label: 'of our own ops run on AI' },
  { value: '3', label: 'people delivering agency-scale output' },
  { value: '7-day', label: 'typical campaign turnaround' },
  { value: '24/7', label: 'the work never stops' },
];
