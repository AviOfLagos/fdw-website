# Brief — frontend-design-workflow website

> Phase 0. Written before looking at any reference, to avoid fixation.

**Product.** The marketing and documentation site for an open-source Agent Skill that forces design,
architecture and stack decisions to happen before an AI coding agent writes markup.

**Audience.** Developers who already use a coding agent daily and have felt the output look
interchangeable. Secondary: people who write about AI tooling and decide what gets recommended.

**Primary task.** Understand the claim in about three seconds, then copy one install command. Every
other job on the page is subordinate to those two.

**Trust posture.** This category converts on **credibility, not excitement**. The product is free,
has zero installs, and sits one character away from a first-party Anthropic skill with 1.1M
installs. Enthusiasm reads as compensation. Evidence of craft reads as competence.

**Interaction budget.** Marketing / brand tier: high. A substantial hero moment is defensible. But
the above-the-fold content must read with JavaScript disabled, and scroll-reveal on headline copy is
forbidden.

**Constraints.** MIT, no login, no pricing. Next.js App Router, statically prerendered. WCAG 2.2 AA.
Domain not yet registered, so the canonical URL lives in one config value.

**Success.** A developer who has never heard of this understands what it does and why it is not the
Anthropic skill, without scrolling.

**Out of scope for v1.** Blog, changelog, enterprise anything, testimonials we do not have.

**The trap, named up front.** The product's whole claim is that it stops generic output. A generic
site is therefore not a small miss; it is a refutation.
