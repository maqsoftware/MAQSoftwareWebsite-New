# Insights Page Spec — Case Studies

> Source: https://maqsoftware.com/case-studies
> Sibling specs: [spec-insights-consultingoffer.md](spec-insights-consultingoffer.md), [spec-insights-powerbicustomvisualguide.md](spec-insights-powerbicustomvisualguide.md), [spec-insights-bestpracticeguide.md](spec-insights-bestpracticeguide.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This is the primary first-party Insights route. It defines the shared Insights hub
contract used by the current routed site: Case Studies is the landing page for
`/insights`, and the resource strip must expose all four insights destinations.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/case-studies` |
| Page component | `src/pages/InsightsCaseStudies.tsx` |
| Shared layout | `<Header />` and `<Footer />` come from `App.tsx`; this page renders `<TrustBanner />` and `<CTA />` |
| Insights building blocks | `src/components/insights/InsightsHero.tsx`, `InsightsResourceNav.tsx`, `InsightsCaseStudiesCatalog.tsx` |
| Header nav integration | Header "Insights" should route to `/insights/case-studies` (not in-page scroll) |

**Design goal:** use the same visual language as `/services/agentic-ai` (compact
hero, dense cards, 48px section rhythm, red-accent interactions), while preserving
case-studies content and filtering behavior from maqsoftware.com.

---

## 2. Page composition (top -> bottom)

1. `<InsightsHero />`                               — section 3.1
2. `<TrustBanner />`                                — section 3.2
3. `<InsightsResourceNav active="case-studies" />` — section 3.3
4. `<InsightsCaseStudiesCatalog />`                 — section 3.4
5. `<CTA />`                                        — section 3.5

> **Global Insights rule:** `InsightsResourceNav` must always contain exactly these 4 destinations and be visible on every Insights page:
> 1) Case Studies (`/insights/case-studies`), 2) Consulting offers (`/insights/consulting-offers`), 3) Power BI custom visual guide (`/insights/power-bi-custom-visual-guide`), 4) Best practice guides (`/insights/best-practice-guides`).

---

## 3. Section specs

### 3.1 InsightsHero (case studies)

- **Layout:** left 62% copy + CTA, right 38% decorative card stack (CSS only).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (from source):**
- **Eyebrow:** `INSIGHTS`
- **H1:** `Case Studies`
- **Subhead:**
  > Explore real-world outcomes across AI, data, reporting, cloud, and security implementations delivered by MAQ Software.
- **Primary CTA:** `Explore latest studies` -> scroll to filters/grid.
- **Secondary CTA:** `Contact us` -> `mailto:customersuccess@maqsoftware.com?subject=Case%20Studies%20-%20MAQ%20Software`

### 3.2 TrustBanner

- Reuse the shared trust strip between the hero and the resource navigation.
- This is part of the current page implementation and is intentionally present on the case-studies landing page.

### 3.3 InsightsResourceNav (shared hub strip)

- **Eyebrow:** `RESOURCES`
- **Title:** `Explore all insights resources`
- **Layout:** 4 linked cards; active card highlighted with `--maq-red` border and pale fill.

**Cards (verbatim labels from source footer resources list):**
1. `Case Studies` -> `/insights/case-studies`
2. `Consulting offers` -> `/insights/consulting-offers`
3. `Power BI custom visual guide` -> `/insights/power-bi-custom-visual-guide`
4. `Best practice guides` -> `/insights/best-practice-guides`

### 3.4 InsightsCaseStudiesCatalog

- Rendered by `src/components/insights/InsightsCaseStudiesCatalog.tsx`.
- Layout remains card-based and responsive.
- Data source remains the local insights catalog.
- Link behavior is local-first: when a case-study URL maps to a first-party slug, cards should route to `/insights/case-studies/:slug` first; legacy slug routes then normalize back to `/insights/case-studies`.
- External destinations are still allowed when no local route exists.

**Seed cards to pin above fold (newest first):**
1. `Transforming AI interest into adoption by establishing an AI Center of Excellence`
   - https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html
2. `Accelerating software development with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html
3. `Reinventing legal operations with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/reinventing-legal-operations-with.html
4. `Transforming finance with agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html
5. `Reshaping retail with Agentic AI solutions`
   - https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html
6. `Unifying disconnected data systems using Microsoft Fabric and OneLake`
   - https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html

### 3.5 CTA + footer

- Reuse the shared `<CTA />` in the page composer.
- `App.tsx` provides the shared `<Footer />`.

### 3.6 CTA + footer

- Reuse existing shared `<CTA />` and `<Footer />`.
- No page-specific footer overrides.

---

## 4. Theming

Use the same tokens and interaction language as `spec-service-agentic-ai.md`:
`--maq-red`, `--maq-red-pale`, `--maq-off-white`, `--maq-surface-cream`,
`--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`, `--maq-border`.

- Hover behavior: red border + soft shadow.
- Section rhythm: `48px` vertical spacing.
- Typography scale: H1 38-42px, H2 28-30px, body 14px.

---

## 5. SEO

- **title:** `Case Studies | MAQ Software`
- **description:** `Browse MAQ Software case studies across Agentic AI, Fabric, Power BI, cloud modernization, and security use cases.`
- **canonical:** `https://maqsoftware.com/case-studies`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- Preserve original case-study titles exactly as published.
- External links open in new tab with `rel="noreferrer"`.
- Insights hub must always expose all 4 resources pages.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Case Studies hero/title | 3.1 InsightsHero |
| Resource links in footer | 3.2 InsightsResourceNav |
| Shared trust strip | 3.2 TrustBanner |
| Long list of case study cards | 3.4 InsightsCaseStudiesCatalog |
| CTA/footer shell | 3.5 CTA + shared App footer |
| Footer content groups | Shared `<Footer />` |

**Drops:** none.
**Adds:** standardized Insights hub strip for cross-resource navigation.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/case-studies` renders.
2. Insights hub shows all 4 resources links on page.
3. Case study links resolve local-first when mapped, with external fallback when needed.
4. `npm run build` exits 0.

## 9. Out of scope (v1)

- Full-text search and advanced faceted filtering.
- CMS authoring flow.
- Automated ingest from blog RSS.
