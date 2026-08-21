# Gaps — fdw-website build

## 2026-08-21 · Phase 0–2 · skipped entirely

- **Gap:** The agent (me) built three design samples with no `BRIEF.md`, no reference pool and no
  `DIRECTION.md`. Not a skill gap — a triggering gap. The skill was installed and not invoked.
- **Did instead:** Went straight to markup, exactly the behaviour the skill exists to prevent.
- **Cost:** All three samples landed on attractor states named in `references/direction.md`:
  A on #1 (warm cream `#faf8f4`, high-contrast serif, terracotta `#b4451f`), B on the dev-tool
  monospace convention, C on #5 (centred hero over three cards — which C literally drew as its own
  "before" image). The user preferred A, which is the most-defaulted look in the category.
- **Finding for the skill:** the blunt test — *could this be any other product's site?* — would have
  caught all three in seconds. It was never run because Phase 2 was never entered.

## 2026-08-21 · Phase 2 · the sample step works, with one caveat

- **Gap:** `references/direction.md` says "rig, don't build" but gives no guidance on how far to rig.
  First pass shipped a callout anchored with `left: 100%` inside a column flex container, so the
  annotation rendered off-screen at 1440px and was invisible in the very screenshot meant to sell it.
- **Did instead:** Shrink-wrapped the headline lines with `width: fit-content`.
- **Cost:** One wasted screenshot round. Worth a line in the reference: **screenshot at the target
  width and look at the image before presenting it** — a sample whose signature move is clipped is
  worse than no sample.

## 2026-08-21 · Phase 5 · verification caught a false pass

- **Gap:** The first `verify.mjs`-style run reported "shot ok, horizontal-overflow=false" for pages
  that were rendering in a fallback font because the font variable was never applied to `<html>`,
  and later against a stale build served by a zombie `next start`.
- **Did instead:** Added failed-response logging and checked the emitted HTML class list directly.
- **Cost:** Two rounds of screenshots that looked plausible and were wrong. `references/verification.md`
  should require asserting that the intended font family actually resolved, and that the server under
  test is the build just produced.

## 2026-08-21 · Phase 2 · "use X's style" is not covered

- **Gap:** The skill has no guidance for the very common instruction *"use <site>'s design style"*.
  `references/direction.md` is built around synthesising a direction from donors and rejecting
  attractor states; it says nothing about faithfully adopting an existing system, which is a
  legitimate and frequent brief.
- **Did instead:** Extracted the tokens by reading computed styles from live elements rather than
  guessing from a screenshot. The first attempt scraped all 107 CSS custom properties and got a
  generic Apple-ish palette that was never applied — sampling real rendered elements was the only
  reliable method.
- **Cost:** Worth a short section in `direction.md`: how to extract a system faithfully, that the
  page's *declared font fallback* is usually the free substitute to load, that a system's defining
  rule is often a negative one (here: no chromatic accent), and that the blunt "could this be any
  other product's site?" test must be answered honestly as *partly yes* and the differentiation
  moved to content.
