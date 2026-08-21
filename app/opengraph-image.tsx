import { ImageResponse } from 'next/og'
import { SITE } from '@/lib/site'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = `${SITE.name} — ${SITE.tagline}`

export default function OG() {
  return new ImageResponse(
    (
      <div style={{
        width: '100%', height: '100%', background: '#0c0c0e', color: '#f2eded',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: 72, fontFamily: 'monospace', border: '1px solid #3d3838',
      }}>
        <div style={{ display: 'flex', fontSize: 26, color: '#7f7a7a' }}>
          fdw/frontend-design-workflow
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <div style={{ display: 'flex', flexDirection: 'column', fontSize: 62, fontWeight: 700, lineHeight: 1.2 }}>
            <span>Your agent skips</span>
            <span>the design phase</span>
          </div>
          <div style={{ fontSize: 27, color: '#b8b2b2', lineHeight: 1.5, maxWidth: 940 }}>
            Research, art direction, IA and the rendering decision — before any markup.
          </div>
        </div>
        <div style={{ display: 'flex', fontSize: 24, color: '#7f7a7a' }}>
          npx skills add avioflagos/frontend-design-workflow
        </div>
      </div>
    ),
    size,
  )
}
