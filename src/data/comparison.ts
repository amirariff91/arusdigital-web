/**
 * Homepage comparison: "What changes when your agency runs on AI".
 * Buyer-outcome framed. One row deliberately concedes to traditional agencies —
 * honesty there buys credibility for the rest of the table.
 */

export interface ComparisonRow {
  dimension: string;
  arus: string;
  traditional: string;
  /** true when the traditional agency genuinely wins this row */
  concede?: boolean;
}

export const comparisonRows: ComparisonRow[] = [
  {
    dimension: 'Turnaround',
    arus: 'Days. Agents draft, test and ship while you sleep.',
    traditional: 'Weeks. Work queues behind every other client.',
  },
  {
    dimension: 'Reporting',
    arus: 'Live. Pull a report the moment you want one.',
    traditional: 'Monthly deck, often a week late.',
  },
  {
    dimension: 'Availability',
    arus: '24/7. The work continues outside office hours.',
    traditional: 'Office hours, minus annual leave.',
  },
  {
    dimension: 'Cost structure',
    arus: 'Productized packages. You see the price before you ask.',
    traditional: 'Opaque retainers, billed against vague hours.',
  },
  {
    dimension: 'Scaling a campaign',
    arus: 'Add scope without adding headcount or delay.',
    traditional: 'Hire, onboard, wait — then pass the cost on.',
  },
  {
    dimension: 'Years of brand relationships',
    arus: "We're a young agency — hungry, and we prove it in the work.",
    traditional: 'Decades of relationships and institutional memory.',
    concede: true,
  },
];
