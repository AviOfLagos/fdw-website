import { SITE, SITE_URL } from '@/lib/site'

export const dynamic = 'force-static'

// Markdown mirror. A model that follows a link and gets a JavaScript shell learns nothing.
export function GET() {
  const body = `# ${SITE.name}

${SITE.tagline}

${SITE.description}

## Install

\`\`\`
${SITE.install}
\`\`\`

## What it does that an aesthetic skill does not

1. **Competitor and adjacent-niche research.** The reference pool is validated 3-of-6 against evidence. Adjacent niches are mined for structure nobody in your category has used.
2. **Information architecture before the stack.** Pages, content model and route shape are decided first. The framework is chosen to fit them.
3. **The rendering decision, scored.** SSR, SSG or SPA judged against ten signals before any code exists.
4. **Verification of what got built.** Every route, breakpoint and theme screenshotted. Horizontal overflow, console errors, invisible focus and reduced-motion violations fail the run.

## Seven phases, each with an exit condition

| # | Phase | Output |
|---|---|---|
| 0 | Frame | docs/BRIEF.md |
| 1 | Research | validated reference pool, adjacent-niche donors |
| 2 | Direction | docs/DIRECTION.md plus rendered sample pages |
| 3 | Architecture | page inventory, content model, stack decision record |
| 4 | Design system | tokens, theming, accessibility |
| 5 | Build | routes, components, motion, metadata |
| 6 | Verify | Playwright across routes, breakpoints, themes |

Source: ${SITE.repo}
Canonical: ${SITE_URL}/
MIT. Built by ${SITE.author}.
`
  return new Response(body, { headers: { 'content-type': 'text/markdown; charset=utf-8' } })
}
