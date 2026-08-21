import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Next.js file convention: this generator emits the standard /sitemap.xml at build time.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${SITE_URL}/`, lastModified: new Date('2026-08-21'), priority: 1 }]
}
