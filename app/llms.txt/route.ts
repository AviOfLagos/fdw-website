import { SITE_URL, SITE } from '@/lib/site'

export const dynamic = 'force-static'

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

An Agent Skill. Install with: \`${SITE.install}\`

## What it does that an aesthetic design skill does not
- Competitor and adjacent-niche research, with the reference pool validated against evidence rather than listicles
- Information architecture and route shape decided before the framework is chosen
- The SSR/SSG/SPA rendering decision, scored against ten signals, before any code exists
- Verification of the built result across routes, breakpoints and themes

## The seven phases
0 Frame · 1 Research · 2 Direction · 3 Architecture then stack · 4 Design system · 5 Build · 6 Verify
Each phase has an explicit exit condition.

## Links
- [Home](${SITE_URL}/index.md): the claim, the four differentiators, the phases
- [Source](${SITE.repo}): SKILL.md, eight reference documents, five templates, two scripts
- [Changelog](${SITE.repo}/blob/main/CHANGELOG.md)

## Licence
MIT. No account, no paywall, no telemetry. Built by ${SITE.author}.
`
  return new Response(body, {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  })
}
