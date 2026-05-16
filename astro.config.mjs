// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Single canonical host. The apex domain, no www, no trailing slash.
// nginx (see Dockerfile) enforces the redirects to match this.
export default defineConfig({
  site: 'https://arusdigital.com',
  trailingSlash: 'never',
  build: {
    // dist/about/index.html — nginx serves it at /about via try_files
    format: 'directory',
  },
  integrations: [
    sitemap({
      // Placeholder routes stay out of the sitemap until they hold real content.
      filter: (page) => !page.includes('/work/') || page.endsWith('/work'),
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
