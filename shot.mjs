import { chromium } from 'playwright'
import { spawn } from 'node:child_process'
const server = spawn('npx', ['next', 'start', '-p', '3171'], { stdio: 'ignore', detached: false })
await new Promise(r => setTimeout(r, 6000))
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', args: ['--no-sandbox'] })
const p = await b.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const errs = []
p.on('response', r => { if (r.status() >= 400) errs.push(r.status() + ' ' + r.url()) })
for (const id of ['']) {
  await p.goto(`http://localhost:3171/${id}`, { waitUntil: 'load' })
  await p.waitForTimeout(900)
  await p.screenshot({ path: `shots/home.png`, fullPage: false })
  await p.screenshot({ path: `shots/home-full.png`, fullPage: true })
  await p.setViewportSize({ width: 390, height: 844 })
  await p.waitForTimeout(500)
  const mob = await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1)
  await p.screenshot({ path: 'shots/home-mobile.png' })
  console.log('mobile overflow:', mob)
  await p.emulateMedia({ reducedMotion: 'reduce' })
  await p.setViewportSize({ width: 1440, height: 900 })
  const check = await p.evaluate(() => {
    const h1 = document.querySelector('h1')
    return {
      overflow: document.documentElement.scrollWidth > window.innerWidth + 1,
      h1Font: getComputedStyle(h1).fontFamily.split(',')[0].replace(/["']/g, ''),
      bodyBg: getComputedStyle(document.body).backgroundColor,
      h1Color: getComputedStyle(h1).color,
      plexLoaded: [...document.fonts].some(f => /Plex/i.test(f.family) && f.status === 'loaded'),
    }
  })
  console.log(id || 'home', JSON.stringify(check))
}
console.log('console errors:', errs.length ? errs : 'none')
await b.close(); server.kill('SIGTERM'); process.exit(0)
