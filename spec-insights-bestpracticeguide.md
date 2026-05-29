# Insights Page Spec — Best Practice Guides

> Source: https://maqsoftware.com/community/best-practices
> Sibling specs: [spec-insights-casesstudies.md](spec-insights-casesstudies.md), [spec-insights-consultingoffer.md](spec-insights-consultingoffer.md), [spec-insights-powerbicustomvisualguide.md](spec-insights-powerbicustomvisualguide.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

This page captures MAQ Software best-practice guide content inside the current
first-party insights shell.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/best-practice-guides` |
| Page component | `src/pages/InsightsBestPracticeGuides.tsx` |
| Shared layout | `<Header />` and `<Footer />` come from `App.tsx`; this page renders `<CTA />` |
| Insights building blocks | `src/components/insights/InsightsHero.tsx`, `InsightsResourceNav.tsx`, `InsightsBestPracticeCatalog.tsx` |
| Header nav integration | Discoverable via header Insights route and resource strip |

**Design goal:** maintain source article titles and links while matching the 48px
section rhythm, typography, and hover interactions of `/services/agentic-ai`.

---

## 2. Page composition (top -> bottom)

1. `<InsightsHero />`                                  — section 3.1
2. `<InsightsResourceNav active="best-practice-guides" />` — section 3.2
3. `<InsightsBestPracticeCatalog />`                   — section 3.3
4. `<CTA />`                                           — section 3.4

> **Global Insights rule:** keep the 4 resources destinations visible and consistent across all Insights pages.

---

## 3. Section specs

### 3.1 InsightsHero (best practices)

- **Eyebrow:** `INSIGHTS`
- **H1:** `Best practice guides`
- **Subhead:**
  > Learn implementation patterns and guardrails across GitHub Copilot, Power BI, Databricks, Snowflake, Azure architecture, Dynamics 365, and Power Platform.
- **Primary CTA:** `Explore guides` -> scroll to guides grid.
- **Secondary CTA:** `Contact us` -> `mailto:customersuccess@maqsoftware.com?subject=Best%20Practice%20Guides%20-%20MAQ%20Software`

### 3.2 InsightsResourceNav (shared hub strip)

Same 4-card nav contract with `Best practice guides` active.

### 3.3 InsightsBestPracticeCatalog

- Rendered by `src/components/insights/InsightsBestPracticeCatalog.tsx`.
- Layout remains responsive card catalog.
- Cards should link local-first when the source URL already maps to a first-party `/insights/<slug>` route.
- Preserve original titles and source destinations in the data model even when the rendered link normalizes to an internal route first.

**Guides (from source list):**
1. `Maximize developer productivity with GitHub Copilot`
   - https://maqsoftware.com/insights/github-copilot-best-practices
2. `Build AI-ready semantic models with Power BI Copilot`
   - https://maqsoftware.com/insights/power-bi-copilot-best-practices
3. `Improve your Power BI performance and security with our best practices`
   - https://maqsoftware.com/insights/power-bi-best-practices
4. `Improve job speed and save storage with our 18 Azure Databricks best practices`
   - https://maqsoftware.com/insights/azure-databricks-best-practices
5. `Optimizing Performance, Collaboration, and Security on Databricks`
   - https://maqsoftware.com/insights/databricks-best-practices
6. `Optimize Snowflake storage for efficient Power BI data extraction`
   - https://maqsoftware.com/insights/snowflake-and-power-bi-best-practices
7. `Explore best practices for creating enterprise-wide knowledge bots`
   - https://maqsoftware.com/insights/knowledge-bot-best-practices
8. `Improve Power BI speed and functionality with our 22 DAX best practices`
   - https://maqsoftware.com/insights/dax-best-practices
9. `Optimize your DevOps strategies with our 9 essential best practices`
   - https://maqsoftware.com/insights/azure-dev-ops-best-practices-guide
10. `Optimize costs for your Azure platforms with our 10 best practices`
    - https://maqsoftware.com/insights/azure-architecture-best-practices
11. `Strengthen your cloud security and protect your assets with 19 security best practices`
    - https://maqsoftware.com/insights/azure-security-best-practices
12. `Ensure quality data on demand with our 7 data validation best practices`
    - https://maqsoftware.com/insights/data-validation-best-practices
13. `Optimize your Dynamics 365 environment with our 32 best practices on developing fields, views, and more`
    - https://maqsoftware.com/insights/dynamics-365-development-best-practices
14. `Deploy Dynamics 365 faster with minimal downtime using our 8 best practices`
    - https://maqsoftware.com/insights/dynamics-365-deployment-best-practices
15. `This guide covers the 11 best practices you need to optimize your canvas apps`
    - https://maqsoftware.com/insights/power-apps-best-practices
16. `This guide covers the 7 best practices you need to secure dataverse`
    - https://maqsoftware.com/insights/dataverse-security-best-practices

### 3.4 CTA + footer

Reuse shared `<CTA />` and `<Footer />`.

---

## 4. Theming

Use Agentic-AI service page visual rules:
- compact hero with off-white background
- high-density card layout
- red accent chips and hover states
- 48px vertical rhythm and 14px body text

---

## 5. SEO

- **title:** `Best Practice Guides | MAQ Software`
- **description:** `Explore MAQ Software best-practice guides for Copilot, Power BI, Databricks, Snowflake, Azure, security, Dynamics 365, and Power Apps.`
- **canonical:** `https://maqsoftware.com/insights/best-practice-guides`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- Keep guide titles verbatim.
- Preserve original destination URLs.
- Maintain 4-item `InsightsResourceNav` on this page.
- Do not collapse long enterprise guide titles; allow controlled wrapping.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Best Practice Guides page title/list | 3.1 hero + 3.4 grid |
| Resource links in footer | 3.2 resource nav |
| Long guide list | 3.3 responsive guide catalog |
| Site footer blocks | shared `<Footer />` |

**Drops:** none.
**Adds:** local-first routing for guide URLs that already map to first-party insights routes.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/best-practice-guides` renders all 16 guides.
2. Each card links to the correct `/insights/...` article URL.
3. Insights resource strip shows all 4 pages.
4. `npm run build` exits 0.

## 9. Out of scope (v1)

- In-guide full-text search.
- Auto-sync from CMS.
- Reading-progress/personalization features.
