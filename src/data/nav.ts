/** Primary navigation. Insights stays out of the main nav until it has >=3 posts. */

export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}
export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const services: NavChild[] = [
  { label: 'SEO & AI Search', href: '/services/seo', desc: 'Rank on Google and get cited by AI' },
  { label: 'Paid Advertising', href: '/services/paid', desc: 'Google, Meta, LinkedIn, TikTok' },
  { label: 'Content & Creative', href: '/services/content', desc: 'Briefs to publish-ready, in days' },
  { label: 'Conversion Optimization', href: '/services/cro', desc: 'Fix the leaks between click and customer' },
  { label: 'Web Design & Development', href: '/services/web', desc: 'Fast, modern sites that convert' },
  { label: 'Social & Video', href: '/services/social', desc: 'Organic growth on YouTube, TikTok, LinkedIn' },
];

export const aiSolutions: NavChild[] = [
  { label: 'AI Solutions', href: '/ai-solutions', desc: 'On-premise LLMs & custom AI agents' },
  { label: 'Miccy', href: '/miccy', desc: 'Our AI intelligence officer for CEOs' },
];

export const mainNav: NavItem[] = [
  { label: 'Services', href: '/services', children: services },
  { label: 'AI Solutions', href: '/ai-solutions', children: aiSolutions },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
];

/** Footer link groups — Insights lives here until the blog has real posts. */
export const footerNav = [
  {
    title: 'Services',
    links: services.map((s) => ({ label: s.label, href: s.href })),
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Work', href: '/work' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'AI Solutions',
    links: [
      { label: 'AI Solutions', href: '/ai-solutions' },
      { label: 'Miccy', href: '/miccy' },
      { label: 'Free AI audit', href: '/audit' },
    ],
  },
];
