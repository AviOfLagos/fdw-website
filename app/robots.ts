import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Emits the standard /robots.txt. AI crawlers are allowed on purpose: the whole
// point of this project is being findable by the agents it is written for.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: ['GPTBot', 'ClaudeBot', 'Claude-User', 'PerplexityBot', 'Google-Extended', 'CCBot'], allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
