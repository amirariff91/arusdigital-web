# Design

## Theme

Light + Blue. White-to-blue-tinted backgrounds, deep navy ink, brand blue (#1F49EE) as the primary accent. The logo gradient (#1F49EE → #20E0C3) is the brand signature — it lives on the logo mark, not scattered as decorative flourishes. Stripe / Linear clarity.

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `--paper` | `#F0F4FF` | Page background |
| `--paper-2` | `#E8EEFF` | Alternating section background |
| `--surface` | `#FFFFFF` | Cards, raised elements |
| `--surface-2` | `#F5F8FF` | Sunken panels, insets |
| `--ink` | `#0A0F2E` | Headings, primary text (deep navy) |
| `--ink-2` | `#2D3460` | Body text, secondary |
| `--ink-3` | `#6B74A8` | Muted, captions, meta |
| `--accent` | `#1F49EE` | Buttons, links, highlights |
| `--accent-deep` | `#1538C8` | Hover / pressed states |
| `--accent-soft` | `#D6E0FF` | Tint backgrounds |
| `--accent-faint` | `#EBF0FF` | Very soft tints |
| `--on-accent` | `#FFFFFF` | Text on filled buttons |
| `--border` | `#D0D8F0` | Card and input borders |
| `--border-strong` | `#B0BCEB` | Stronger dividers |
| `--dark` | `#0A0F2E` | Footer, dark sections |
| `--dark-2` | `#111835` | Darker footer variant |
| `--on-dark` | `#F0F4FF` | Primary text on dark |
| `--on-dark-2` | `#B8C5F0` | Secondary text on dark |
| `--on-dark-mute` | `#7B8EC8` | Muted text on dark |
| `--gradient` | `linear-gradient(135deg, #1F49EE, #246EFF, #20E0C3)` | Logo gradient (reserved) |
| `--teal` | `#20E0C3` | Gradient endpoint |
| `--cyan` | `#24BDFF` | Gradient midpoint |
| `--status-watch` | `#C79A3A` | Amber warning |
| `--status-ok` | `#5A7D52` | Green opportunity |
| `--error` | `#B4472D` | Form validation error |

## Typography

- **Display**: Fraunces Variable — h1–h4, weight 540, letter-spacing -0.014em, line-height 1.08
- **Body**: Inter Variable — all body, UI, nav
- Scale: fluid `clamp()`, xs 0.78rem through 4xl ~5.1rem max
- Headings: `text-wrap: balance` for even line breaks
- Body max-width: 65ch

## Components

### Logo mark
Geometric angular "A" — two gradient polygon segments:
- Left segment: `#1F49EE → #24BDFF`
- Right segment: `#246EFF → #20E0C3`
Source: `public/logo.svg` (2048×2048 viewBox, transparent background).
Inlined in `Wordmark.astro` at 28×28px. Favicon version: same mark on `#0A0F2E` rounded square.

### Buttons
- **Primary** `.btn--accent`: solid `#1F49EE` fill, white text. Hover: `#1538C8`. No gradient.
- **Ghost** `.btn--ghost`: transparent background, `#B0BCEB` border, `#0A0F2E` text. Hover: `#EBF0FF` background, `#1F49EE` border.
- All buttons: 0.78rem 1.45rem padding, 6px radius, `translateY(-2px)` hover lift, 0.24s ease.

### Cards `.card`
White (`#FFFFFF`) background, 1px `#D0D8F0` border, 11px radius. Blue-tinted shadow on hover.

### Eyebrow kicker `.eyebrow`
Used selectively — not on every section. Brand blue `#1F49EE`, uppercase, letter-spacing 0.16em, 1.6rem rule preceding.

### Sections
- `.section`: standard `--section-y` vertical padding
- `.section--alt`: `#E8EEFF` background (subtle blue tint)
- `.section--dark`: `#0A0F2E` background, light text (footer, key CTAs)

## Shadows

Blue-tinted, soft:
- `--shadow-sm`: `0 1px 2px rgba(10,15,46,0.06)`
- `--shadow`: `0 6px 24px -10px rgba(10,15,46,0.16)`
- `--shadow-lg`: `0 24px 60px -24px rgba(31,73,238,0.18)`

## Motion

- Ease: `cubic-bezier(0.22, 1, 0.36, 1)`, duration 0.24s
- Scroll reveal: 0.6s opacity + translateY, progressive enhancement (no-JS stays visible)
- Stagger reveals within lists; unique entrance per section type
- `prefers-reduced-motion`: immediate, no animation

## Layout

- Container: 1180px max-width
- Narrow container: 760px
- Gutter: `clamp(1.15rem, 5vw, 3rem)`
- Section spacing: `clamp(3.5rem, 7vw, 6.5rem)`
- Responsive grids: `repeat(auto-fit, minmax(280px, 1fr))` for card grids
