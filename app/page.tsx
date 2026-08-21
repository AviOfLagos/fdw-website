import s from './home.module.css'

const INSTALL = [
  { id: 'skills', label: 'skills', cmd: 'npx skills add avioflagos/frontend-design-workflow' },
  { id: 'claude', label: 'claude', cmd: '/plugin marketplace add AviOfLagos/frontend-design-workflow' },
  { id: 'gh', label: 'gh', cmd: 'gh skill install AviOfLagos/frontend-design-workflow frontend-design-workflow' },
  { id: 'gemini', label: 'gemini', cmd: 'gemini skills install https://github.com/AviOfLagos/frontend-design-workflow.git --consent' },
]

const PHASES = [
  ['0', 'Frame', 'docs/BRIEF.md — product, audience, task, trust posture, interaction budget'],
  ['1', 'Research', 'Competitors as constraints. Adjacent-niche donors for novelty. References validated against evidence, not listicles'],
  ['2', 'Direction', 'One recommendation, rendered as sample pages you can look at instead of imagine'],
  ['3', 'Architecture', 'Page inventory and content model before the stack, then a ten-signal rendering decision'],
  ['4', 'Design system', 'Tokens in three layers, theming, accessibility baked in rather than retrofitted'],
  ['5', 'Build', 'One route finished properly, then repeated'],
  ['6', 'Verify', 'Playwright across routes, breakpoints and themes. Screenshots read, not assumed'],
] as const

const CLAIMS = [
  ['Competitor and adjacent-niche research', 'The reference pool is validated 3-of-6 against evidence. Adjacent niches are mined for structure nobody in your category has used.'],
  ['Information architecture before the stack', 'Pages, content model and route shape are decided first. The framework is chosen to fit them, not the other way round.'],
  ['The rendering decision, scored', 'SSR, SSG or SPA judged against ten signals before any code exists. Migrating later moves routing, data, auth and metadata at once.'],
  ['Verification of what got built', 'Every route, breakpoint and theme screenshotted. Horizontal overflow, console errors, invisible focus and reduced-motion violations fail the run.'],
] as const

export default function Home() {
  return (
    <div className={s.frame}>
      <div className={s.col}>
        <header className={s.head}>
          <a className={s.mark} href="/">
            <b>fdw</b><span className={s.markDim}>/frontend-design-workflow</span>
          </a>
          <nav className={s.nav}>
            <a href="#workflow">Workflow</a>
            <a href="#why">Why</a>
            <a href="https://github.com/AviOfLagos/frontend-design-workflow">GitHub</a>
          </nav>
          <a className={s.action} href="#install">Install</a>
        </header>

        <section className={s.hero}>
          <p className={s.announce}>
            <span className={s.badge}>v1.1</span>
            Route shape, agent discoverability and rendered direction samples.
            <a className={s.announceLink} href="https://github.com/AviOfLagos/frontend-design-workflow/blob/main/CHANGELOG.md">Changelog</a>
          </p>

          <h1 className={s.h1}>Your agent skips the design phase</h1>

          <p className={s.sub}>
            Competitor research, art direction, information architecture and the rendering
            decision — before your agent writes a single line of markup. Then it verifies
            what actually got built.
          </p>

          <div className={s.install} id="install">
            <div className={s.tabs}>
              {INSTALL.map((t, i) => (
                <span key={t.id} className={i === 0 ? s.tabOn : s.tab}>{t.label}</span>
              ))}
            </div>
            <div className={s.cmd}>
              <span className={s.cmdText}>npx skills add <b>avioflagos/frontend-design-workflow</b></span>
            </div>
          </div>
        </section>

        <section className={s.section} id="why">
          <h2 className={s.h2}>What it does that an aesthetic skill does not</h2>
          <div className={s.claims}>
            {CLAIMS.map(([t, d], i) => (
              <div key={t} className={s.claim}>
                <span className={s.claimNum}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className={s.claimTitle}>{t}</h3>
                <p className={s.claimBody}>{d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={s.section} id="workflow">
          <h2 className={s.h2}>Seven phases, each with an exit condition</h2>
          <ol className={s.phases}>
            {PHASES.map(([n, name, desc]) => (
              <li key={n} className={s.phase}>
                <span className={s.phaseNum}>{n}</span>
                <span className={s.phaseName}>{name}</span>
                <span className={s.phaseDesc}>{desc}</span>
              </li>
            ))}
          </ol>
        </section>

        <footer className={s.foot}>
          <div className={s.footRow}>
            <span className={s.footK}>Runs on</span>
            <span className={s.footV}>Claude Code · Cursor · Codex · Gemini CLI · Copilot · OpenCode · Windsurf</span>
          </div>
          <div className={s.footRow}>
            <span className={s.footK}>Licence</span>
            <span className={s.footV}>MIT · no account · no telemetry</span>
          </div>
          <div className={s.footRow}>
            <span className={s.footK}>Built by</span>
            <span className={s.footV}>David Olatunji</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
