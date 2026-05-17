# Blck Prty Website

Pre-order / hype site for Jon's flat-pack street ramp (the OBP — Original Blck Prty). Marketing site only; the parametric ramp designer lives in the sibling `block-party-ramps` repo.

Live: https://blckprty.pages.dev/ (Cloudflare Pages, auto-deploys from `main`).

## Stack

- React 19 + TypeScript + Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Brand fonts: Big Shoulders Stencil Display (display), Archivo (body), JetBrains Mono (mono)
- Single page, no router

## Architecture

```
src/
  App.tsx                       — renders <SafeVariation />
  data/content.ts               — single source of truth for headline, price, ship date, kit specs, quotes, steps
  styles/
    tokens.css                  — brand tokens (colors, type, shadows, spacing)
    components.css              — buttons, chips, stamps, nav (incl. mobile wrap rule)
    site.css                    — countdown, signup form, build scrubber
  components/
    Countdown.tsx               — ticks every 1s against ship date
    Scrubber.tsx                — 6-step build step picker
    SignupForm.tsx              — email + stencil-stamp confirmation
    HeroPhoto.tsx               — halftone b&w action-shot SVG placeholder
    RampDiagram.tsx             — side-profile spec drawing
  variations/
    safe.css + SafeVariation.tsx
```

The "Safe" name in `SafeVariation` / `safe.css` is historical — there used to be a Loud variation too (removed in v0.2.0). All CSS in `safe.css` is scoped under `.safe` so the wrapper className still matters.

## Nav layout

Single sticky bar in `SafeVariation.tsx`, structured as `[brand] [links] [right side]`. At ≤760px, `components.css` wraps `.bp-nav-links` to a full-width second row (order: 99) and hides the "Pre-orders open" status pulse so Reserve still fits next to the logo.

## Replace the placeholder photo

The hero "action shot" is an SVG illustration ([components/HeroPhoto.tsx](./src/components/HeroPhoto.tsx)). When Jon shoots a real photo of the prototype, replace `<HeroPhoto />` in `SafeVariation.tsx` with `<img src="/assets/jon-driveway.jpg" />`.

## Wiring email signup

`SignupForm` swallows submits client-side and shows the stamp. Point it at Klaviyo / Mailchimp / Beehiiv by adding a fetch in the submit handler in [src/components/SignupForm.tsx](./src/components/SignupForm.tsx).

## Deploy

Auto-deploys from `main` to https://blckprty.pages.dev/ via Cloudflare Pages. See `~/.claude/projects/.../memory/cloudflare-pages-deploys.md` for known CF Pages gotchas (lockfile sync, Retry vs Create deployment, etc.).

## Design source

The bundle from claude.ai/design lives outside the repo at `/tmp/design-extract/blck-prty-website/`. Read its `chats/chat1.md` for the original intent and design choices.
