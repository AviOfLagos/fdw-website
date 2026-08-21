# fdw-website

The website for [`frontend-design-workflow`](https://github.com/AviOfLagos/frontend-design-workflow),
an Agent Skill that puts the design phase back in front of the code.

Built with Next.js (App Router), statically prerendered, no client JavaScript beyond what Next ships.

## Design system

Adopted from [opencode.ai](https://opencode.ai), extracted by reading computed styles from the live
site rather than eyeballing a screenshot. Tokens live in `app/globals.css`.

The defining rule: **there is no chromatic accent.** Every colour is a warm-neutral grey. Emphasis
comes from weight and from inverting foreground against background, never from hue.

Berkeley Mono is commercial, so we load IBM Plex Mono — the next entry in opencode's own font stack.

## The canonical URL lives in one place

`lib/site.ts`. Set `NEXT_PUBLIC_SITE_URL` in the environment, or it falls back to the Vercel
production URL, or to localhost. Nothing else hardcodes a domain.

## Local

```bash
npm install
npm run dev
npm run build
```

MIT.
