# MAQ Web — V2 Design System & Handoff

**Read this first before picking up the homepage redesign.** This is a handoff doc: it
states the standard to build to, what already exists, what's left, and the context
needed. The live reference implementation is
[`src/pages/HomeV2.tsx`](../src/pages/HomeV2.tsx) (route `/homev2`) — treat it as the
source of truth.

---

## 0. Orientation (what this project is)

A from-scratch redesign of the MAQ Software marketing homepage, built as an isolated
exploration at **`/homev2`** so it doesn't disturb the existing site. Changes tend to be
small and surgical (down to individual SVG path coordinates) — favor precise, minimal
edits over broad refactors.

After **every** change run `npx tsc -b` (from `MAQSoftwareWebsite-New/`) and confirm
`EXIT 0`. The file may be edited concurrently, so re-read before editing if an edit fails.

---

## 1. The standard — how to build (non-negotiables)

- **Brand red is `#BA141A`**, exposed as `var(--maq-red)`. Never hand-hex another red; use
  the token. `--maq-red-dark` (hover), `--maq-red-pale` (wash) derive from it.
- **Font is Roboto** (set globally in `theme.ts` / `styles.css`). Don't introduce Segoe.
- **Type scale is global.** Use `className="maq-h1|maq-h2|maq-h3"` (defined in
  `src/styles.css`, rem-based, 1rem = 16px). Don't redefine heading sizes per page. Body
  text has **no** font-size override on purpose (accessibility).
- **Sizes in `rem`**, not px (px only for hairline 1–2px borders / exact SVG work).
- **Color is role-based, never literal.** Text color comes from the four surface-aware
  roles: `--maq-heading-color`, `--maq-body-color`, `--maq-muted-color`,
  `--maq-faint-color`. A dark surface flips them automatically via
  [`src/components/DarkSection.tsx`](../src/components/DarkSection.tsx). Never set text to a
  raw hex.
- **Pure Fluent neutral grays, no blue tint.** HomeV2's root (`page` style) re-points the
  brand grays to Fluent `colorNeutral*` tokens so the page reads as clean gray, not cool.
- **All buttons** come from [`src/components/buttonsV2/`](../src/components/buttonsV2)
  (`PrimaryButton`, `SecondaryButton`, `OutlineButton`, `SubtleButton`,
  `TransparentButton`) — Fluent `Button` wrapped in MAQ styling. Don't hand-roll `<button>`.
- **One content width:** `--maq-container-wide` (1440px), centered. The pattern is a
  full-bleed `section` (carries 32px desktop / 22px mobile gutters + vertical rhythm) with
  an inner `wrap` that caps + centers:
  ```ts
  section: { padding: "96px 32px", "@media (max-width: 720px)": { padding: "64px 22px" } },
  wrap:    { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  ```
- **No photography.** Decoration is faint geometric SVG (dots, arcs, hexagons, stacked
  plates, clouds, dot-grids) in gray with a single red accent line per motif. Squared,
  flat, editorial.

---

## 2. What's already done

### Global infrastructure (reusable on any page now)
- **Type scale** (`.maq-h1/2/3`) — `src/styles.css`.
- **Text-role tokens + `DarkSection`** — `src/styles.css` + `src/components/DarkSection.tsx`.
- **`buttonsV2/`** button family.
- **Width tokens** `--maq-container` (1240) / `--maq-container-wide` (1440) — `src/styles.css`.
- **`HeaderV2`** (light mobile menu) and **`FooterV2`** (light footer) chrome.
- **Themes** — `src/theme.ts` (`maqLightTheme` / `maqDarkTheme`, Roboto).
- Route `/homev2` wired in `src/App.tsx`.

### HomeV2 page sections (all built, all page-local in `HomeV2.tsx`)
Top → bottom:
1. **Hero** — `colorNeutralBackground3` band, faint dot grid, headline with a feathered
   text scrim.
2. **Capabilities** — centered title, **3×2 bento** of cards. Each card: abstract SVG
   motif (see `CapArt` + `SHAPE_BY_AREA`) bleeding off a **top** corner, text at the
   **bottom**, a full-width bottom-fading `tileScrim` for legibility, and an arrow-in-circle
   button (gray circle `colorNeutralBackground5` + light `colorNeutralStroke3` border, dark
   glyph, hover → red/white). Motif convention: strokes are **3.75px**, the single darkest
   line is **red**, everything else gray; inner shapes are gray fills.
3. **Products / Accelerators** — gray band (`sectionGray` = `colorNeutralBackground2`).
   Two-column `prodLayout` (1fr 2fr): **left** = title + subtitle + "Explore all products"
   arrow CTA; **right** = 2×3 grid (`prodGrid2`) of product cards.
4. **Partnerships** — centered **white** band, small gray divider line straddling the
   section's top edge, title, then **placeholder** logo boxes (dashed) for Microsoft /
   Databricks / Snowflake. Logos are intentionally NOT real (see TODO below).
5. **Case studies** — gray band, same two-column `prodLayout`: **left** = title + subtitle +
   "Explore case studies" CTA; **right** = `cases` bento (one featured media card + two
   tiles).
6. **Industries** — title above a **3×2 grid** of cards, each = an icon (no background,
   `colorNeutralForeground4`) on the left + the industry label.
7. **CTA** — `colorNeutralBackground5` band with a decorative cloud motif (red outline +
   gray fill), "Contact us" `PrimaryButton`, band scrim behind copy.
8. **FooterV2.**

### Reusable patterns living inside HomeV2 (not yet extracted)
- **Feathered text scrim** — a masked `::before` (two gradients composited) that fades a
  translucent backing at the edges, tinted to match its surface, for text legibility over
  art. Used by hero, capability cards, CTA.
- **Arrow-in-circle CTA** (`exploreBtn` + `exploreSq`) — label + arrow glyph in a small
  circle that turns red and slides on hover. Used under section titles.
- **Two-column section** (`prodLayout`) — editorial intro left, card grid right.
- **Geometric motif system** (`CapArt(kind,color)`, `SHAPE_BY_AREA`, `motif*` placement
  styles). The cloud card uses an exact icon SVG (red outline cloud + gray
  fill cloud, viewBox `0 0 48 34`).

---

## 3. What still needs to be done

1. **Real partner logos.** The partnerships section has dashed placeholder boxes with a
   `TODO` comment. Drop in the official Microsoft / Databricks / Snowflake SVGs — use the
   real brand assets; do **not** generate logo art from memory. Likely add files under
   `public/logos/` and swap the placeholder `<div>`s for `<img>`/inline SVG.
2. **Extract the reusable patterns** out of `HomeV2.tsx` into shared components/styles so
   other pages (and the eventual real homepage) can use them without copy-paste: the
   scrim, the `exploreBtn`/`exploreSq` arrow CTA, the card shells, the `prodLayout`
   two-column section, and the `CapArt` motif set.
3. **Roll the system out to other pages** (when asked). Order that works: (a) adopt
   globals — `maq-h1/2/3`, the four role tokens, `buttonsV2`; (b) wrap content in the
   `section`+`wrap` width pair; (c) copy HomeV2's pure-gray page-root override block;
   (d) convert sizes to rem and delete per-file heading sizes; (e) swap in `HeaderV2`/
   `FooterV2`.
4. **Decide promotion path** — whether `/homev2` replaces the current home, and whether
   `--maq-container` should just become 1440 globally instead of per-page.
5. **Optional cleanup** — `HomeV2.tsx` carries some now-dead data/styles from rapid
   iteration (e.g. unused `Capability.tags`/`bigIcon`, `CAP_TONE` fields, the commented-out
   interlinked-U and dot-square CTA art). Confirm before removing — several of these were
   toggled on and off during iteration and may be reinstated.

---

## 4. Context you'll need

**Key files**
- [`src/pages/HomeV2.tsx`](../src/pages/HomeV2.tsx) — the whole page; large; primary work file.
- [`src/styles.css`](../src/styles.css) — tokens, type scale, role tokens, width tokens, mobile rules.
- [`src/theme.ts`](../src/theme.ts) — Fluent light/dark themes, Roboto.
- [`src/components/buttonsV2/`](../src/components/buttonsV2) — button wrappers.
- [`src/components/DarkSection.tsx`](../src/components/DarkSection.tsx) — surface flip island.
- [`src/components/FooterV2.tsx`](../src/components/FooterV2.tsx), [`HeaderV2.tsx`](../src/components/HeaderV2.tsx) — chrome.
- [`src/App.tsx`](../src/App.tsx) — `/homev2` route + exploration-route switch.

**Stack & gotchas**
- React 18 + TS + Vite; **Fluent UI v9** with **Griffel `makeStyles`** (CSS-in-JS).
- Griffel supports `"& svg"`, `"::before"`, mask props (`WebkitMaskImage`/`maskComposite`),
  CSS-var declarations, media queries — but **rejects some shorthands** (use
  `gridRowStart`/`gridRowEnd`, not always `gridRow`; use long-hand when an edit fails).
- Fluent neutral ramp used heavily: `colorNeutralBackground1..6`, `colorNeutralStroke1/2/3`,
  `colorNeutralForeground1/3/4`. Rough light values: bg1 #fff, bg2 #fafafa, bg3 #f5f5f5,
  bg5 #ebebeb; stroke2 #e0e0e0, stroke3 #f0f0f0 (lighter); foreground4 ~#707070.
- SVG motif work uses `vector-effect="non-scaling-stroke"` so stroke weight stays constant
  regardless of the container scale; when you move/resize a motif, watch for **viewBox
  clipping** (content must stay inside the viewBox or it gets cut).
- `npx tsc -b` is the build check. There's no test suite for visuals — correctness is
  "typechecks + matches the intended design."

**Conventions to preserve**
- Make small, surgical edits; SVG positioning is done by editing path/transform numbers
  directly.
- Keep red `#BA141A`, keep the role tokens (never literal text colors), keep Roboto.
