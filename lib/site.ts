// Single source of truth for the canonical URL.
// Change SITE_URL here (or set NEXT_PUBLIC_SITE_URL) and every route follows.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const SITE = {
  name: 'frontend-design-workflow',
  tagline: 'Your agent skips the design phase',
  description:
    'Competitor research, art direction, information architecture and the rendering decision — before your agent writes a single line of markup. Then it verifies what actually got built.',
  repo: 'https://github.com/AviOfLagos/frontend-design-workflow',
  install: 'npx skills add avioflagos/frontend-design-workflow',
  author: 'David Olatunji',
} as const
