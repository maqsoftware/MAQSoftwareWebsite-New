# Font Size Analysis Report — MAQ Software Website
**Comprehensive analysis of typography consistency across all pages and components**  
**Analysis Date:** 2026-07-15

---

## Executive Summary

The MAQ Software website has a **well-defined global type system** in `src/textStyles.ts` and `src/styles.css` with fluid font-size tokens, but **critical inconsistencies** exist across components:

- **Hero headings**: 40px hardcoded instead of dynamic `--fs-h1` token
- **Section headings**: 36px hardcoded everywhere instead of consistent token usage  
- **Card titles**: Three different sizes (17px, 18px, 20px) across similar card components
- **Intro text**: 14px vs 15px used interchangeably
- **Small labels**: 9px, 10px, 11px, 12px scattered without clear hierarchy

**Impact**: Subtle but noticeable visual inconsistency across similar content types; missed opportunity for responsive fluidity through tokens.

---

## Part 1: Global Type System (Source of Truth)

### Fluid Font Size Tokens (src/styles.css)
```css
--fs-hero:    clamp(2.75rem,   8.0vw, 5rem);      /* 44–80px desktop/mobile */
--fs-h1:      clamp(2.25rem,   5.5vw, 3.5rem);    /* 36–56px */
--fs-h2:      clamp(1.875rem,  4.5vw, 3rem);      /* 30–48px */
--fs-h3:      clamp(1.625rem,  3.4vw, 2.25rem);   /* 26–36px */
--fs-h4:      clamp(1.375rem,  2.6vw, 1.75rem);   /* 22–28px */
--fs-lead:    clamp(1.125rem,  2.05vw, 1.375rem); /* 18–22px */
--fs-body:    clamp(1rem,      1.65vw, 1.125rem); /* 16–18px */
--fs-small:   clamp(0.875rem,  1.4vw, 0.9375rem); /* 14–15px */
```

**✓ Good:** Fluid scaling with `clamp()` provides responsive sizing without media queries.

### TextStyles Object (src/textStyles.ts)

| Role | Font Size | Weight | Status |
|------|-----------|--------|--------|
| `hero` | `var(--fs-hero)` | 700 | ✓ Token |
| `pageTitle` | `var(--fs-h1)` | 700 | ✓ Token |
| `sectionHeading` | **36px** | 700 | ⚠️ Hardcoded |
| `subHeading` | `var(--fs-h4)` | 700 | ✓ Token |
| `eyebrow` | **12px** | 700 | ⚠️ Hardcoded |
| `lead` | `var(--fs-lead)` | 400 | ✓ Token |
| `body` | `var(--fs-small)` | 400 | ✓ Token |
| `cardTitle` | **17px** | 700 | ⚠️ Hardcoded |
| `cardBody` | **13.5px** | 400 | ⚠️ Hardcoded |
| `buttonText` | **14px** | 600 | ⚠️ Hardcoded |

---

## Part 2: Inconsistencies Found

### 🔴 CRITICAL: Hero/Page H1 — 40px Hardcoded Instead of Dynamic

**Problem:** Hero headings across hero sections are hardcoded at **40px**, losing the responsive fluidity of `--fs-h1` (which scales 36–56px).

**Affected Files:**
1. [src/components/service/ServiceHero.tsx](src/components/service/ServiceHero.tsx#L25-L34)
   - `h1: { fontSize: "40px", ... }`
   - Used on: All service pages (Agentic AI, Data & Analytics, etc.)

2. [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L20)
   - `h1: { ... fontSize: "40px", ... }`
   - Used on: Product pages (AI-DataLens, MigrateFAST, etc.)

3. [src/components/insights/InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L25-L34)
   - `h1: { fontSize: "40px", ... }`
   - Used on: Insights overview pages

**Impact:**
- Mobile viewport: Should scale down to ~36px but locks at 40px (oversized on small screens)
- Large desktop: Should scale up to ~56px but caps at 40px (undersized)
- Visual inconsistency with the defined type scale

**Fix:** Replace `40px` with `var(--fs-h1)` in all three locations.

---

### 🔴 CRITICAL: Section Headings — 36px Scattered, Inconsistent Usage

**Problem:** All section headings use **36px hardcoded**, but some components use `textStyles.sectionHeading` while others redefine it.

**Affected Files & Line Numbers:**

#### Using hardcoded 36px (NOT the textStyles token):
1. [src/components/service/ServiceOutcomes.tsx](src/components/service/ServiceOutcomes.tsx#L38-L46)
   - `title: { fontSize: "36px", ... }`

2. [src/components/service/ServiceCapabilities.tsx](src/components/service/ServiceCapabilities.tsx#L42-L50)
   - `title: { fontSize: "36px", ... }`

3. [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L26-L27)
   - `title: { ... fontSize: "36px", ... }`
   - `titleLg: { ... fontSize: "36px", ... }`
   - Used in: All product detail pages

4. [src/components/Products.tsx](src/components/Products.tsx#L32-L40)
   - `title: { ... fontSize: "36px", ... }`

5. [src/components/Industries.tsx](src/components/Industries.tsx#L32-L40)
   - `title: { ... fontSize: "36px", ... }`

#### Using textStyles token (CORRECT):
✓ [src/components/Services.tsx](src/components/Services.tsx#L25-L32)
   - `title: { ...textStyles.sectionHeading, ... }`

**Impact:** 
- 20+ section heading instances lack consistency point
- Services.tsx does it right; others don't follow the pattern
- Same logical element styled differently across pages

**Fix:** Replace all hardcoded `36px` with `...textStyles.sectionHeading` or create a unified token.

---

### 🟠 HIGH: Card Titles — Three Sizes (17px, 18px, 20px) for Similar Components

**Problem:** Three card component types have three different title sizes, creating visual hierarchy confusion.

| Component | File | Size | Used For |
|-----------|------|------|----------|
| **FeatureCard** | [src/components/cards/FeatureCard.tsx](src/components/cards/FeatureCard.tsx#L58) | **20px** | Service capabilities, industries, home services |
| **ProductCard** | [src/components/cards/ProductCard.tsx](src/components/cards/ProductCard.tsx#L53) | **18px** | Products grid |
| **CaseStudyCard** | [src/components/cards/CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L44) | **17px** | Case study grids |

**Example Visual:**
```
FeatureCard (Service capability):  "Agentic AI & Multi-Agent Systems"  [20px - largest]
ProductCard (Product):             "Fabric Admin Agent"                 [18px - medium]
CaseStudyCard (Case study):        "Optimizing Power BI with LoadFAST" [17px - smallest]
```

**Impact:**
- Similar-weight content has noticeably different sizes
- User reads FeatureCard titles as more important than ProductCard, though they're peers
- Home page layout jumps in card heading hierarchy

**Line-by-line breakdown:**
- FeatureCard: Line 58 `name: { fontSize: "20px", fontWeight: 700, ... }`
- ProductCard: Line 53 `name: { fontSize: "18px", fontWeight: 700, ... }`
- CaseStudyCard: Line 44 `title: { fontSize: "17px", fontWeight: 700, ... }`

**Fix:** Standardize all card titles to **18px** (middle ground, clean number, ProductCard standard).

---

### 🟠 MEDIUM: Intro/Sub-heading Text — 14px vs 15px Inconsistency

**Problem:** Intro paragraphs under section headings use **14px or 15px** without a clear standard.

**14px Usage:**
1. [src/components/service/ServiceOutcomes.tsx](src/components/service/ServiceOutcomes.tsx#L55)
   - `sub: { fontSize: "14px", ... }`

2. [src/components/service/ServiceCapabilities.tsx](src/components/service/ServiceCapabilities.tsx#L52)
   - `sub: { fontSize: "14px", ... }`

3. [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L30)
   - `sub: { ... fontSize: "14px", ... }`

**15px Usage:**
1. [src/components/service/ServiceHero.tsx](src/components/service/ServiceHero.tsx#L46-L54)
   - `sub: { fontSize: "15px", ... }`

2. [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L17)
   - `heroSub: { ... fontSize: "15px", ... }`

3. [src/components/Products.tsx](src/components/Products.tsx#L36-L44)
   - `sub: { ... fontSize: "15px", ... }`

4. [src/components/Industries.tsx](src/components/Industries.tsx#L36-L44)
   - `sub: { ... fontSize: "15px", ... }`

5. [src/components/insights/InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L26-L34)
   - `sub: { fontSize: "15px", ... }`

**Impact:**
- 1px difference subtle but noticeable across page sections
- No clear rule on when to use 14 vs 15
- Hero sections consistently use 15px (good pattern) but service sections break it

**Fix:** Standardize to **15px** (used in hero/hero-like contexts more consistently) OR adopt `var(--fs-lead)` token (18–22px, better for intro emphasis).

---

### 🟡 MEDIUM-LOW: Small Labels/Tags — 9px, 10px, 11px, 12px Scatter

**Problem:** Small labels (tags, badges, dates, micro-text) have four different sizes with no clear hierarchy.

| Size | Used For | Files |
|------|----------|-------|
| **12px** | Eyebrows, taglines | (3+ files) ✓ Consistent |
| **11px** | Small tags, tile titles, case-study tags | ServiceHero, CaseStudyCard, Industry components |
| **10px** | Micro labels (KPI labels) | InsightsHero |
| **9px** | Connector labels, very small text | IndustryFinancialServices |

**Affected Files:**
- [src/components/service/ServiceHero.tsx](src/components/service/ServiceHero.tsx#L66-L75) — `tileTitle: 11px`
- [src/components/cards/CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L30) — `tag: 11px`
- [src/components/insights/InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L60-L62) — `kpiLbl: 10px`
- [src/pages/IndustryFinancialServices.tsx](src/pages/IndustryFinancialServices.tsx#L56) — `connectorLabel: 9px`

**Impact:**
- Minor visual inconsistency; less noticeable than heading/body mismatches
- Small labels lack a clear size rule
- Hard to predict what size a new label component should use

**Fix:** Establish a clear hierarchy:
- 12px for eyebrows/overlines (already consistent ✓)
- 11px for secondary tags/dates  
- 10px for micro-labels (only for very small contexts like KPI labels)

---

## Part 3: Card Typography (Mostly Consistent)

### ✓ Card Body Copy — 13.5px (Consistent)

**Good news:** All card body text uses **13.5px**, giving consistent readability:

- [src/components/cards/ProductCard.tsx](src/components/cards/ProductCard.tsx#L56) — `desc: 13.5px`
- [src/components/cards/CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L46) — `teaser: 13.5px`
- [src/components/cards/FeatureCard.tsx](src/components/cards/FeatureCard.tsx#L62-L63) — `tagline`, `desc: 13.5px`
- [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L37) — `benDesc`, `stepDesc`, `featDesc: 13.5px`

**Status:** ✓ **CONSISTENT** — but should be using `textStyles.cardBody` instead of hardcoding.

### ✓ Eyebrow/Labels — 12px (Consistent)

All eyebrow text is **12px**, which matches `textStyles.eyebrow`:

- Service pages: 12px
- Product pages: 12px
- All section intro labels: 12px

**Status:** ✓ **CONSISTENT** — good standardization.

---

## Part 4: Outliers & Special Cases

### ⚠️ ServiceCapabilities — Unusual Size (22px for detail name)

[src/components/service/ServiceCapabilities.tsx](src/components/service/ServiceCapabilities.tsx#L86)  
- `detailName: { fontSize: "22px", ... }`

**Context:** Used for expanded capability names inside the accordion-like panel (e.g., "Azure AI Foundry").

**Issue:** Not aligned with any standard; creates a unique size that doesn't map to the type scale.

**Fix:** Either use `var(--fs-h4)` (22–28px token) or pick a standard size like 20px.

### ⚠️ Product Pages — stepNum Circle Label (14px)

[src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L44)  
- `stepNum: { ... fontSize: "14px", ... }`

**Context:** Numeric step badge in circles (e.g., "1", "2", "3" in process steps).

**Status:** Small but functional; 14px is reasonable for numbers in circles.

### ⚠️ ProductCard — Tagline (12px, separate from description)

[src/components/cards/ProductCard.tsx](src/components/cards/ProductCard.tsx#L50)  
- `tagline: { fontSize: "12px", ... }`

**Context:** Small label above the main product name.

**Status:** Consistent with eyebrow sizing; appropriate for this role.

---

## Part 5: Responsive Behavior

### ✓ Strengths
- Fluid tokens (`--fs-*`) use `clamp()` for automatic mobile-to-desktop scaling
- Section padding responsive (`--section-pad-y: 96px` desktop, `64px` mobile)
- Grid layouts adapt via media queries

### ⚠️ Weaknesses
- **40px hardcoded hero H1 never scales** — should scale 36–56px but stays locked
- **36px section headings never scale** — misses responsive fluidity opportunity
- Card title sizes (17, 18, 20px) are fixed; should ideally scale slightly

**Example impact on mobile:**
- Hero H1: Should be ~36px on mobile, but is 40px (1px too big, minor)
- Section heading: Should be ~30px on mobile, but is 36px (6px too big, noticeable)

---

## Part 6: Code Pattern Issues

### Pattern 1: Not Using textStyles

Many files redefine styles instead of importing and spreading `textStyles`:

**❌ Repeated (Bad):**
```tsx
// src/components/Products.tsx
eyebrow: { fontSize: "12px", fontWeight: 700, ... }
title: { fontSize: "36px", ... }
```

**✓ Single Source (Good):**
```tsx
// src/components/Services.tsx
import { textStyles } from "../textStyles";
eyebrow: { ...textStyles.eyebrow, ... }
title: { ...textStyles.sectionHeading, ... }
```

### Pattern 2: Hardcoded Values in textStyles

`textStyles` itself has hardcoded sizes:
- `sectionHeading: 36px` (should be a token)
- `eyebrow: 12px` (should be a token)
- `cardTitle: 17px` (inconsistent with card usage)

---

## Part 7: Priority Recommendations

### Tier 1: Critical (High Visual Impact)

#### 1.1 Fix Hero H1 Hardcoding (40px → `var(--fs-h1)`)
- **Files:** 3
  - [src/components/service/ServiceHero.tsx](src/components/service/ServiceHero.tsx#L25) 
  - [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L20)
  - [src/components/insights/InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L25)
- **Change:** Replace `fontSize: "40px"` with `fontSize: "var(--fs-h1)"`
- **Impact:** Hero titles now scale responsively (36–56px); better mobile experience; cleaner code
- **Estimated Files Affected:** 20+ pages (uses productPageStyles and services)

#### 1.2 Standardize Section Headings (36px → textStyles.sectionHeading)
- **Files:** 5 main locations
  - [src/components/service/ServiceOutcomes.tsx](src/components/service/ServiceOutcomes.tsx#L38)
  - [src/components/service/ServiceCapabilities.tsx](src/components/service/ServiceCapabilities.tsx#L42)
  - [src/pages/productPageStyles.ts](src/pages/productPageStyles.ts#L26)
  - [src/components/Products.tsx](src/components/Products.tsx#L32)
  - [src/components/Industries.tsx](src/components/Industries.tsx#L32)
- **Change:** Replace `fontSize: "36px"` with `...textStyles.sectionHeading` (remove explicit size)
- **Impact:** Centralized 36px definition; easier to tune globally
- **Estimated Pages Affected:** 20+

#### 1.3 Standardize Card Titles (17px / 18px / 20px → 18px)
- **Files:** 3
  - [src/components/cards/FeatureCard.tsx](src/components/cards/FeatureCard.tsx#L58) — 20px → 18px
  - [src/components/cards/ProductCard.tsx](src/components/cards/ProductCard.tsx#L53) — Already 18px ✓
  - [src/components/cards/CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L44) — 17px → 18px
- **Change:** Unify all card titles to 18px
- **Impact:** Consistent visual hierarchy across all card types (services, products, case studies)
- **Estimated Components Affected:** 30+

---

### Tier 2: Medium Priority (Consistency Improvement)

#### 2.1 Standardize Intro/Sub-heading Text (14px / 15px → 15px)
- **Files:** 8 locations
- **Change:** Replace all 14px with 15px for intro paragraphs under section headings
- **Impact:** Cleaner intro text hierarchy; slightly better readability on smaller text
- **Why 15px?** Hero sections already use 15px consistently; maintains pattern

#### 2.2 Establish Small Label Hierarchy
- **Recommendation:**
  - **12px** = Eyebrows, overlines (already consistent ✓)
  - **11px** = Tags, dates, secondary labels
  - **10px** = Micro-labels only (KPI labels, very small context)
- **Files to Review:**
  - [src/components/cards/CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L30) — `tag: 11px` ✓
  - [src/components/insights/InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L60) — `kpiLbl: 10px` ✓
  - [src/pages/IndustryFinancialServices.tsx](src/pages/IndustryFinancialServices.tsx#L56) — `connectorLabel: 9px` → 10px

---

### Tier 3: Code Quality (Low Visual Impact)

#### 3.1 Replace Hardcoded Card Body (13.5px) with textStyles.cardBody
- **Impact:** Single source of truth for card body typography; easier to maintain
- **Low priority:** Text size won't change visually, but code hygiene improves

#### 3.2 Review and Consolidate textStyles Hardcoded Values
- `sectionHeading: "36px"` — Good to keep (this IS the standard)
- `eyebrow: "12px"` — Good to keep (this IS the standard)
- `cardTitle: "17px"` — **Remove after fixing card titles to 18px**; conflicts with actual card usage

---

## Part 8: File-by-File Action Items

### Service Components
- [ ] [ServiceHero.tsx](src/components/service/ServiceHero.tsx#L25) — Change h1 to `var(--fs-h1)`, change sub to 15px
- [ ] [ServiceOutcomes.tsx](src/components/service/ServiceOutcomes.tsx#L38) — Spread `textStyles.sectionHeading`
- [ ] [ServiceCapabilities.tsx](src/components/service/ServiceCapabilities.tsx#L42) — Spread `textStyles.sectionHeading`, detailName → 20px or `var(--fs-h4)`

### Product Components & Styles
- [ ] [productPageStyles.ts](src/pages/productPageStyles.ts) — h1 → `var(--fs-h1)`, all titles → `textStyles.sectionHeading`
- [ ] [ProductCard.tsx](src/components/cards/ProductCard.tsx#L53) — Already 18px ✓ (no change needed)
- [ ] [CaseStudyCard.tsx](src/components/cards/CaseStudyCard.tsx#L44) — title 17px → 18px
- [ ] [FeatureCard.tsx](src/components/cards/FeatureCard.tsx#L58) — name 20px → 18px

### Home Sections
- [ ] [Services.tsx](src/components/Services.tsx) — Already using textStyles ✓ (good model)
- [ ] [Products.tsx](src/components/Products.tsx#L32) — title → `textStyles.sectionHeading`, sub 15px
- [ ] [Industries.tsx](src/components/Industries.tsx#L32) — title → `textStyles.sectionHeading`, sub 15px

### Insights
- [ ] [InsightsHero.tsx](src/components/insights/InsightsHero.tsx#L25) — h1 → `var(--fs-h1)`, sub → 15px

### Type System
- [ ] [textStyles.ts](src/textStyles.ts) — Review `cardTitle` (currently 17px, conflicts with standards)

---

## Part 9: Testing Recommendations

After implementing fixes:

1. **Visual QA on key pages:**
   - Service pages (Agentic AI, Data & Analytics, etc.) — verify hero H1 scales on mobile
   - Products page — verify all card titles look the same size
   - Case studies page — verify CaseStudyCard titles match ProductCard titles
   - Insights overview — verify hero scale

2. **Responsive testing:**
   - Mobile viewport (320px, 480px)
   - Tablet (768px, 1024px)
   - Desktop (1440px, 1920px+)

3. **Component storybook (if available):**
   - Verify card titles render consistently across all card types

---

## Appendix A: Complete Font Size Mapping

| Component/Role | Current Size | Type | Issue | Fix |
|---|---|---|---|---|
| Hero H1 | 40px | Hardcoded | Not responsive | `var(--fs-h1)` |
| Page Title | `var(--fs-h1)` | Token | ✓ | None |
| Section Heading | 36px | Hardcoded | Scattered | `textStyles.sectionHeading` |
| Sub-Heading (H4) | `var(--fs-h4)` | Token | ✓ | None |
| Eyebrow | 12px | Hardcoded | Consistent ✓ | None |
| Lead/Intro | `var(--fs-lead)` | Token | ✓ | None |
| Body Default | `var(--fs-small)` | Token | ✓ | None |
| **FeatureCard Title** | **20px** | Hardcoded | **3-way split** | **→ 18px** |
| **ProductCard Title** | **18px** | Hardcoded | Standard | ✓ |
| **CaseStudyCard Title** | **17px** | Hardcoded | **3-way split** | **→ 18px** |
| Card Body | 13.5px | Hardcoded | Consistent ✓ | textStyles.cardBody |
| Button Text | 14px | Hardcoded | ✓ | None |
| Card Tagline | 12px | Hardcoded | = eyebrow ✓ | None |
| Intro/Sub (variant A) | 14px | Hardcoded | Inconsistent | → 15px |
| **Intro/Sub (variant B)** | **15px** | Hardcoded | **Inconsistent** | **→ 15px** |
| Small Tag | 11px | Hardcoded | ✓ | None |
| Micro Label (10px) | 10px | Hardcoded | ✓ | None |
| Micro Label (9px) | 9px | Hardcoded | Too small | → 10px |

---

## Appendix B: Before/After Code Examples

### Example 1: Hero H1 Fix

**BEFORE:**
```tsx
// src/components/service/ServiceHero.tsx
const useStyles = makeStyles({
  h1: {
    fontSize: "40px",  // ❌ Hardcoded, non-responsive
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
});
```

**AFTER:**
```tsx
const useStyles = makeStyles({
  h1: {
    fontSize: "var(--fs-h1)",  // ✓ Responsive: 36–56px
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-heading-color)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
});
```

---

### Example 2: Card Title Standardization

**BEFORE (FeatureCard):**
```tsx
name: { fontSize: "20px", fontWeight: 700, ... }  // ❌ Too large
```

**BEFORE (CaseStudyCard):**
```tsx
title: { fontSize: "17px", fontWeight: 700, ... }  // ❌ Too small
```

**AFTER (Both):**
```tsx
title: { fontSize: "18px", fontWeight: 700, ... }  // ✓ Unified
```

---

### Example 3: Section Heading Using textStyles

**BEFORE (ProductCard):**
```tsx
const useStyles = makeStyles({
  title: {
    display: "block",
    fontSize: "36px",  // ❌ Hardcoded
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
});
```

**AFTER (Products.tsx pattern to follow):**
```tsx
import { textStyles } from "../textStyles";

const useStyles = makeStyles({
  title: {
    ...textStyles.sectionHeading,  // ✓ Centralized
    display: "block",
    margin: "0 0 12px",  // Page-specific margin override
  },
});
```

---

## Appendix C: References

- **Global Type System:** [src/styles.css](src/styles.css) (lines 78–99)
- **TextStyles Definition:** [src/textStyles.ts](src/textStyles.ts)
- **Design System Doc:** [docs/STYLE-V2.md](docs/STYLE-V2.md)
- **Good Example (Services):** [src/components/Services.tsx](src/components/Services.tsx) — Uses `textStyles` correctly

---

## Conclusion

The MAQ website has a **solid foundation** with fluid tokens and a textStyles object, but **critical inconsistencies** in hardcoded hero H1, section headings, and card title sizes undermine the system's intent. 

**Quick wins (Tier 1):**
- Fix hero H1 to use `var(--fs-h1)` (3 files, 20+ pages affected)
- Standardize all section headings to use `textStyles.sectionHeading` (5 files)
- Unify card titles to 18px (3 files, significant visual impact)

**Investment:** ~2–3 hours of editing across 10–12 files, yielding a noticeably more polished, consistent site with improved responsive behavior.

