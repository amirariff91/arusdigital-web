import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * A productized package tier. Price is either a number (RM) or the literal
 * "Custom" — a malformed price fails the build instead of rendering broken.
 * Placeholder/TBD numbers are review drafts only; they never ship live.
 */
const packageSchema = z.object({
  name: z.string(),
  price: z.union([z.number(), z.literal('Custom')]),
  currency: z.literal('RM').default('RM'),
  billingPeriod: z.enum(['month', 'project', 'retainer']).default('month'),
  priceNote: z.string().optional(),
  features: z.array(z.string()).min(1),
  highlighted: z.boolean().default(false),
});

const faqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

/** Marketing service pages — one markdown file per service. */
const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    navLabel: z.string(),
    order: z.number(),
    icon: z.string(),
    eyebrow: z.string(),
    heroHeadline: z.string(),
    heroSub: z.string(),
    cardSummary: z.string(),
    approach: z.string(),
    includes: z.array(z.string()).min(3),
    aiAdvantage: z.string(),
    packages: z.array(packageSchema).min(1),
    faq: z.array(faqSchema).min(1),
    seoTitle: z.string(),
    seoDescription: z.string(),
  }),
});

/** Case studies — real, owner-supplied only. `draft: true` keeps a page noindex. */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    sector: z.string(),
    summary: z.string(),
    services: z.array(z.string()),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4),
    draft: z.boolean().default(true),
    featured: z.boolean().default(false),
    publishedDate: z.coerce.date(),
  }),
});

/** Blog / insights articles. */
const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Arus Digital'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, caseStudies, insights };
