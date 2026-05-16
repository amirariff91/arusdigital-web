/**
 * Central site configuration. Anything that might change — contact details,
 * analytics id, lead-capture endpoint — lives here, not hardcoded in components.
 */

export const site = {
  name: 'Arus Digital',
  legalName: 'Arus Digital Sdn Bhd',
  /** SSM company registration number — TODO: confirm real number before launch. */
  registrationNo: 'SSM TBD',
  domain: 'https://arusdigital.com',
  tagline: 'The agency that runs on AI.',
  description:
    'Arus Digital is an AI-native marketing agency. SEO, paid, content and CRO delivered by autonomous AI agents — faster, sharper, and a fraction of the cost.',

  /** Lead capture. WhatsApp is primary; Formspree is the parallel safety net. */
  whatsapp: {
    number: '60139844412',
    display: '+60 13-984 4412',
  },
  email: 'hello@arusdigital.com',
  location: 'Kuala Lumpur, Malaysia',

  /** Phase-1 lead capture goes to Formspree in parallel with the WhatsApp open.
   *  TODO: replace with the real Formspree form id before launch. */
  formspreeEndpoint: 'https://formspree.io/f/REPLACE_ME',

  /** GA4 — loaded only after consent (Consent Mode v2). TODO: real measurement id. */
  gaMeasurementId: 'G-REPLACE_ME',

  /** Existing Miccy product app — the /miccy page links out to this. */
  miccyAppUrl: 'https://miccy.arusdigital.com',

  social: {
    linkedin: 'https://www.linkedin.com/company/arus-digital',
  },
} as const;

/** Build a wa.me click-to-chat link with a prefilled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
