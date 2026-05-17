# Blck Prty Website

Pre-order / hype site for **Jon's flat-pack street ramp** — the OBP (Original Blck Prty).

Live: **https://blckprty.pages.dev/**

## Stack

React 19 · TypeScript 5.9 · Vite 7 · Tailwind 4 · Big Shoulders Stencil Display / Archivo / JetBrains Mono.

## Run

```bash
npm install
npm run dev    # vite, picks first open port from 5173+
npm run build  # static output in dist/
npm run lint
```

## Architecture

See [`CLAUDE.md`](./CLAUDE.md). TL;DR:

- `src/data/content.ts` — single source for copy, price, ship date, specs, quotes.
- `src/components/` — `Countdown`, `Scrubber`, `SignupForm`, `HeroPhoto`, `RampDiagram`.
- `src/variations/SafeVariation.tsx` + scoped `.safe` CSS — the single page treatment.
- `src/styles/{tokens,components,site}.css` — brand tokens + shared component CSS.

## Roadmap

- Drop a real photo of Jon's prototype, replace `<HeroPhoto />`.
- Wire `SignupForm` to Klaviyo / Mailchimp / Beehiiv.
- Back the `$50` reserve button with Stripe Checkout or Shopify.

## Deploy

Auto-deploys from `main` to Cloudflare Pages (https://blckprty.pages.dev/).
