import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { SITE, SITE_URL } from '@/lib/site'
import './globals.css'

const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'agent skill', 'claude code', 'cursor', 'codex', 'AI slop design',
    'frontend design workflow', 'art direction', 'information architecture',
    'design system', 'anti ai slop',
  ],
  authors: [{ name: SITE.author }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#software`,
      name: SITE.name,
      description: SITE.description,
      applicationCategory: 'DeveloperApplication',
      operatingSystem: 'Any',
      license: 'https://opensource.org/licenses/MIT',
      codeRepository: SITE.repo,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      author: { '@id': `${SITE_URL}/#author` },
    },
    { '@type': 'Person', '@id': `${SITE_URL}/#author`, name: SITE.author },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#site`, url: SITE_URL, name: SITE.name },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plex.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        {children}
      </body>
    </html>
  )
}
