# arusdigital.com — Homepage Repositioning Plan

## Problem
The current homepage is 100% a Miccy product landing page. Arus Digital as a digital services
company is invisible. No mention of digital marketing, SEO, web design, app development, or
AI integration services. Visitors who don't need an AI intelligence officer have nothing to engage with.

## Goal
Reposition arusdigital.com as a digital agency that also builds AI products. Show both:
1. Arus Digital = full-service digital agency (services homepage)
2. Miccy = flagship AI product (dedicated product section / separate page)

## Proposed Changes to index.html

### 1. Hero — rewrite copy
- From: "We built Miccy — an AI intelligence officer…"
- To: Company-first positioning, e.g. "Digital services, powered by AI." or "We build, grow, and automate digital businesses."
- Keep the bold/dark design aesthetic
- Subtext: Brief company descriptor — digital agency + AI product studio
- Stats: keep 4 stats but update to reflect company (not just Miccy): e.g. clients served, years in digital, AI-powered, PDPA compliant

### 2. Services section — full expansion
Currently only 2 cards (Custom AI Agents + AI Transformation). Expand to 8 service cards:
1. Digital Marketing (Meta Ads, Google Ads, TikTok Ads)
2. SEO & Content
3. Web Design & Development
4. Mobile App Development (iOS & Android)
5. AI Integration & Automation
6. On-Premise LLM Deployment
7. Custom AI Agents
8. AI Company Transformation

### 3. Navigation — add Services anchor
Current nav: Miccy | Pricing | Local LLM | About | Contact
Updated nav: Services | Miccy | Local LLM | About | Contact
Move "Get Miccy →" CTA to stay, but ensure Services is discoverable first

### 4. Miccy section — reposition as "our flagship product"
- Keep the section but add clear label: "OUR FLAGSHIP PRODUCT"
- Tone shift: "We built Miccy for ourselves, then opened it to clients" narrative
- Pricing section stays but move below Services

### 5. Section order (revised)
1. Nav
2. Hero (company-first)
3. Services (8 cards — the main company offering)
4. Miccy Product (flagship product showcase)
5. Pricing (Miccy tiers)
6. On-Premise LLM
7. We Are The Proof (internal stack)
8. CTA / Contact
9. Footer

### 6. About page — light update
- Update hero copy to reflect digital agency + AI company dual identity
- Add digital services to "What we do" section

## Technical Constraints
- Pure static HTML + inline CSS — no framework, no build step
- Dark theme must be preserved (black/gold palette, DM Serif Display + Plus Jakarta Sans)
- Must remain single-file (index.html) for Coolify deployment
- No JS dependencies to add
- Responsive layout (same CSS grid/flex patterns already in use)
- Deploy via git push → Coolify auto-deploys

## Success Criteria
- A visitor landing on arusdigital.com understands within 5 seconds that Arus Digital offers digital marketing, web, app, and AI services
- Miccy is clearly a product of Arus Digital, not the entire company identity
- All 8 service categories visible without scrolling past the fold on desktop
- Existing Miccy pricing and Local LLM sections fully preserved
- CTA for both services enquiry (WhatsApp) and Miccy signup remain prominent
