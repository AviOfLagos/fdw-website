# Direction — frontend-design-workflow website

> Phase 2. Written after the first attempt failed, which is itself the finding.

## What went wrong first

Three samples were built with no BRIEF and no DIRECTION. All three landed on attractor states named
in `references/direction.md`:

| Sample | Attractor it hit |
|---|---|
| A "Specimen" | #1 — warm cream ground, high-contrast serif display, terracotta accent. Tokens `#faf8f4` / `#b4451f` sit almost exactly on the named values |
| B "Console" | Dev-tool monospace-on-near-black. The skill's note on neo-brutalism applies: it is now a convention, not a rebellion |
| C "Exhibit" | #5 — centred hero over a three-card row, which the sample literally drew as its own "before" image |

A was preferred on look. That is consistent rather than contradictory: it is a well-executed
instance of the most common look in the category. Competent and interchangeable is the exact
failure mode the product exists to prevent.

## Who I studied

- **biomejs.dev** — one claim, one command, no ornament. Signature move: restraint as confidence.
- **bun.sh** — a blunt comparison table doing the persuasion instead of adjectives.
- **vercel.com/design/guidelines** — the document *is* the install surface.
- **tailwindcss.com/showcase** — category labels let a visitor find their own case.
- **uizze.com** — before/after as the hero. Gated, which is the opening we have.

## Adjacent-niche donors

The uncommon step. What other field's artefacts mean "decisions recorded before the work begins"?

| Donor | Why isomorphic | What we take |
|---|---|---|
| **Architectural drawing sets** | Plans, sections and annotations exist so construction does not improvise. Exactly this product's thesis | Hairline rules, leader lines and callouts, dimension brackets, a title block carrying provenance |
| **Press proofs / proofreader markup** | A correction layer applied over a draft before it is committed to a run | The idea of the correction being *visible*, not hidden behind a before/after slider |
| **Type specimen sheets** | Show, do not describe | Large statement type carrying the argument alone |

## What I am rejecting

Warm-cream-plus-serif-plus-terracotta, monospace-on-black dev-tool default, and centred-hero-plus-
cards. Named explicitly so the critique pass can check against them.

## The DNA blend

≈55% architectural drawing set (structure, annotation system, title block) · ≈25% type specimen
(statement scale and restraint) · ≈20% biome/bun (one claim, one command, evidence over adjectives).

## Art direction

**Signature move: the page is annotated like a drawing.** Leader lines and small monospace callouts
point at the parts of the statement that carry the argument. The annotation layer is the only place
colour appears.

**Supporting system:**
- One stroke weight for every rule and leader line — 1px hairline at `rgba(ink, .18)`.
- One accent, `#C2352B`, used **only** in the annotation layer: leader lines, tick marks, callout
  labels. Never a button fill, never a background. Primary CTA is solid ink.
- Ground is neutral paper `#F2F1ED`, deliberately not warm — warmth is the attractor.
- No grain, no gradient, no shadow. Depth comes from rules and spacing.
- Type pairing: one grotesque with real character for the statement, one mono for the annotation
  layer. Never a third family.

**Consistency is not uniformity:** the CTA is a hard rectangle against the hairline system; that
contrast is deliberate and the system underneath does not vary.

## Interaction budget

Marketing tier. Permitted: one hero moment. Forbidden: scroll-reveal on the headline, any motion on
the install command, anything that delays LCP.

## The axis for the samples

**Does the page diagram the thesis, or perform it?**

- **D — Plan sheet.** Diagrams it. The page is a drawing of its own argument.
- **E — Proof.** Performs it. The generic headline is shown being corrected into the designed one,
  in typographic markup rather than fake browser screenshots — which is what made C weak.

## One question

Which of those two, D or E.

---

## Revision — 21 Aug: adopt the opencode.ai system

User instruction: use opencode.ai's design style, font, colour, everything. The plan-sheet and
proof directions are retired. Tokens below were **extracted from the live site by reading computed
styles**, not eyeballed.

| Token | Value | Source |
|---|---|---|
| `--bg` | `#0c0c0e` | `getComputedStyle(html).backgroundColor` |
| `--panel` | `#1b1818` | code block background |
| `--text` | `#f2eded` | `h1` colour, 45 elements |
| `--text-2` | `#b8b2b2` | hero subhead |
| `--text-3` | `#7f7a7a` | idle tab, 17 elements |
| `--text-4` | `#716b6a` | tertiary labels |
| `--border` | `#3d3838` | the vertical column rules |
| `--invert-fg` | `#131010` | badge text on light ground |
| container | `1080px` | measured on the bounded column |
| type | Berkeley Mono → **IBM Plex Mono** → ui-monospace | their own declared stack |
| h1 | 38px / 700 / lh 1.5 | measured |
| sub | 16px / 400 / lh 2.0 | measured |
| badge | `#f2eded` on `#131010`, padding 4px 8px | measured |
| tabs | active `#f2eded` + 2px bottom border; idle `#7f7a7a` | measured |

Berkeley Mono is commercial, so we load **IBM Plex Mono** — which is the next entry in opencode's
own font stack, meaning we match what most of their visitors already see.

**The defining property of this system is that it has no chromatic accent at all.** Every colour is
a warm-neutral grey. Emphasis is carried by weight and by inverting foreground and background, never
by hue. That is the single rule to hold: the moment a blue or a green appears, it stops being this
system.

**What carries over from the retired directions:** the bounded column with vertical rules is
structurally the plan-sheet frame, and the footer is its title block. Both survive because opencode
independently arrived at the same device.

**The honest risk.** This is now closer to homage than to a distinct identity. `references/direction.md`
asks: *could this be any other product's site?* Against opencode specifically, the answer is
partly yes. It is a deliberate, instructed trade — a coherent borrowed system beats an incoherent
original one — but the differentiation now has to come from content and from the eventual
before/after gallery, not from the surface.
