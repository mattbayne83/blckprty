# Changelog

All notable changes to the Blck Prty Website. Follows [Keep a Changelog](https://keepachangelog.com/) conventions.

## [0.1.0] — 2026-05-16

Initial scaffold + both visual variations built from the claude.ai/design handoff bundle.

### Added
- Vite 7 + React 19 + TS 5.9 + Tailwind 4 scaffold.
- Brand tokens (colors, type, shadows, spacing) at `src/styles/tokens.css`, plus shared component + site CSS.
- Brand fonts wired (Big Shoulders Stencil Display, Archivo, Archivo Narrow, JetBrains Mono).
- Shared content module `src/data/content.ts` (headline, $50 deposit / $249 retail, ship date 2026-06-21, kit specs, 6 build steps, 3 neighbor quotes).
- Shared components: `Countdown` (1s tick), `Scrubber` (6-step build picker), `SignupForm` (email → stencil-stamp confirm), `HeroPhoto` (halftone SVG action-shot placeholder), `RampDiagram`, `VariationToggle`.
- `SafeVariation` — DTC polish: dark hero, light body, single yellow accent, generous whitespace.
- `LoudVariation` — flyer-on-a-pole: caution-tape bands, polaroid w/ masking tape + sticker collage, wanted-poster kit card, sticky-note quote wall, photocopy speckle background.
- URL-driven variation routing (`?v=safe|loud`), toggle in both navs, `history.replaceState` keeps URL shareable.
- `CLAUDE.md` with architecture map + next-step pointers.

### Planned
- Replace `<HeroPhoto />` SVG placeholder with real photo of Jon's prototype.
- Wire `SignupForm` to Klaviyo / Mailchimp / Beehiiv.
- Back `$50` reserve CTA with Stripe Checkout or Shopify.
- Deploy first review URL (Netlify Drop or Cloudflare Pages).
