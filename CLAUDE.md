# Blck Prty Website

Pre-order / hype site for Jon's flat-pack street ramp (the OBP — Original Blck Prty). Marketing site only; the parametric ramp designer lives in the sibling `block-party-ramps` repo.

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Brand fonts: Big Shoulders Stencil Display (display), Archivo (body), JetBrains Mono (mono)
- No router — variation is `?v=safe|loud` URL param, single-page

## Variations

Two visual treatments, same content:

- **Safe** (default) — DTC polish, single yellow accent, generous whitespace
- **Loud** — flyer-on-a-pole: caution tape, polaroid w/ masking tape, wanted-poster kit card, sticker collage, sticky-note quote wall

Switch via the toggle in the nav, or `?v=loud` / `?v=safe`.

## Architecture

```
src/
  App.tsx                       — reads ?v, swaps between SafeVariation / LoudVariation
  data/content.ts               — single source of truth for headline, price, ship date, kit specs, quotes, steps
  styles/
    tokens.css                  — brand tokens (colors, type, shadows, spacing)
    components.css              — buttons, chips, stamps, nav, toggle
    site.css                    — countdown, signup, scrubber (shared by both variations)
  components/
    Countdown.tsx               — ticks every 1s against ship date
    Scrubber.tsx                — 6-step build step picker
    SignupForm.tsx              — email + stencil-stamp confirmation
    HeroPhoto.tsx               — halftone b&w action-shot SVG placeholder
    RampDiagram.tsx             — side-profile spec drawing
    VariationToggle.tsx         — safe/loud switch (sits in both navs)
  variations/
    safe.css + SafeVariation.tsx
    loud.css + LoudVariation.tsx
```

CSS for each variation is scoped under `.safe` / `.loud` so the two styles don't fight when imported into the same bundle.

## Replace the placeholder photo

The hero "action shot" is an SVG illustration (`components/HeroPhoto.tsx`). When Jon shoots a real photo of the prototype, replace the `<HeroPhoto />` call sites in `SafeVariation.tsx` and `LoudVariation.tsx` with `<img src="/assets/jon-driveway.jpg" />`.

## Wiring email signup

`SignupForm` swallows submits client-side and shows the stamp. Point it at Klaviyo / Mailchimp / Beehiiv by adding a fetch in the submit handler in `src/components/SignupForm.tsx`.

## Deploy

Static build — works with Netlify Drop, Vercel, Cloudflare Pages, GitHub Pages. `npm run build` → drag `dist/` to any of them.

## Design source

The bundle from claude.ai/design lives outside the repo at `/tmp/design-extract/blck-prty-website/`. Read its `chats/chat1.md` for the original intent and design choices.
