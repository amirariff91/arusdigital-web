# arusdigital.com

Marketing site for **Arus Digital** — the AI-native marketing agency.
Astro static site, built with Bun, served by nginx in a container.

## Stack

- **Astro 5** — static output, content collections, near-zero JS
- **Bun** — package manager and build runner
- **nginx** — serves the static `/dist` (see `nginx.conf`)
- **Docker** — multi-stage build (`Dockerfile`), deployed on Coolify

## Develop

```bash
bun install
bun run dev      # http://localhost:4321
bun run build    # static output to dist/
bun run preview  # serve the built site
bun run check    # astro type / content check
```

## Project layout

```
src/
  layouts/Base.astro        page shell — head, SEO, nav, footer, consent
  components/               Nav, Footer, Hero parts, ServiceCard, AuditForm, ...
  data/                     site config, nav, comparison table, proof stack
  content/
    services/*.md           the 6 marketing service pages (Zod-validated)
    case-studies/*.md        real case studies only — empty until supplied
    insights/*.md            blog articles
  pages/                    routes
public/                     favicon, og images, robots.txt
legacy/                     the old hand-built site + Miccy decks (reference only)
```

## Before launch — TODO

Edit `src/data/site.ts`:

- `registrationNo` — real SSM company registration number
- `formspreeEndpoint` — real Formspree form id (audit/contact lead capture)
- `gaMeasurementId` — real GA4 measurement id (analytics stays off until set)

Service package prices in `src/content/services/*.md` are indicative drafts —
confirm real numbers before launch.

## Deploy (Coolify)

1. In Coolify, create an Application from this git repo.
2. Build pack: **Dockerfile** (Coolify uses the repo `Dockerfile` directly).
3. Port: **80**. Health check path: `/`.
4. Point the `arusdigital.com` domain at the app; keep Cloudflare in front.
5. On each deploy, **purge the Cloudflare cache** so new HTML/OG tags serve.

The container runs `bun install --frozen-lockfile && bun run build`, then nginx
serves the static output with the legacy redirects (`/index.html`, `/about.html`),
trailing-slash normalisation, asset caching and a custom 404.
