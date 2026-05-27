# MAQ Software — Home Page Specification

> This is the **source of truth** for the home page implementation.
> Update this file (or ask the assistant to update it) and treat code changes as a downstream consequence of edits here.
> When this file changes, the assistant should reconcile `src/` to match.

---

## 1. Tech stack & project layout

| Concern | Choice |
|---|---|
| Framework | **React 18** (functional components, hooks only) |
| Language | **TypeScript** (strict) |
| Bundler / dev server | **Vite 5** |
| UI library | **Fluent UI v9** — `@fluentui/react-components` |
| Icons | `@fluentui/react-icons` |
| Styling | Fluent `makeStyles` (Griffel) + a few CSS variables in `src/styles.css` |
| Routing | None — single-page home with in-page scroll anchors |
| State | Local component state only — no Redux/Zustand/etc. |

Project layout:
```
src/
  main.tsx              # React entry, wraps App in FluentProvider(maqLightTheme)
  App.tsx               # Composes the home page sections in order
  theme.ts              # maqBrand BrandVariants + maqLightTheme
  styles.css            # @import Roboto, CSS vars, body/global resets
  components/
    Announcement.tsx
    Header.tsx
    Hero.tsx
    TrustBanner.tsx
    Services.tsx
    Products.tsx
    CaseStudies.tsx
    CTA.tsx
    Footer.tsx
```

**Rules:**
- One section = one component. Do not collapse sections into `App.tsx`.
- Prefer Fluent v9 primitives (`Button`, `Text`, `Card`, `Title1`, etc.) over raw HTML.
- Griffel `makeStyles` must use full shorthand (`border`, `padding`, `margin`) — never the rejected partial shorthands (e.g. `borderColor` alone).

---

## 2. Brand identity

Sourced from the live https://maqsoftware.com (computed styles), **not** from any screenshot.

### Colors
| Token | Hex | Use |
|---|---|---|
| `--maq-red` | `#BA141A` | Primary brand color (CTAs, accents, brand ramp `80`) |
| `--maq-red-pale` | `#FDECEE` | Soft red wash (badges, hover bg) |
| `--maq-black` | `#000000` | Header background, deep gradient stop |
| `--maq-ink` | `#212121` | Body text |
| `--maq-gray-600` | `#616161` | Footer background, secondary text |
| `--maq-off-white` | `#F5F5F5` | Section alt background |
| `--maq-border` | `#E0E0E0` | Card/divider borders |

**Legacy aliases (must remain) so older component code keeps compiling:**
- `--maq-navy` → `--maq-black`
- `--maq-blue` → `--maq-red`
- `--maq-blue-pale` → `--maq-red-pale`
- `--maq-teal` → `--maq-red`

### Typography
- **Font:** Roboto (imported via Google Fonts in `styles.css`).
- Wired into Fluent via `fontFamilyBase: "Roboto, ..."` in `maqLightTheme`.
- Body color = `--maq-ink`.

### Theme object (`src/theme.ts`)
- Export `maqBrand: BrandVariants` — a 16-stop red ramp where step `80` = `#BA141A`.
- Export `maqLightTheme = { ...createLightTheme(maqBrand), fontFamilyBase: "Roboto, ..." }`.

---

## 3. Page composition (`App.tsx`, top → bottom)

Render order is fixed:

1. `<Announcement />`
2. `<Header />`
3. `<main>` containing:
   1. `<Hero />` — anchor: top of page
   2. `<TrustBanner />`
   3. `<Services id="services" />`
   4. `<Products id="products" />`
   5. `<CaseStudies id="case-studies" />`
   6. `<CTA id="contact" />`
4. `<Footer />`

In-page anchors used by header nav: `#services`, `#products`, `#case-studies`, `#contact`. Industries currently is a mega-menu (no anchor jump).

---

## 4. Section specs

### 4.1 Announcement (`Announcement.tsx`)
- Thin top bar above the header.
- Background: `--maq-black` (navy era → now black).
- Text: white. Link color: `#ff8e92` (red-tinted on dark).
- Dismissible is **not** required.

### 4.2 Header / nav (`Header.tsx`) — sticky
- Sticky to top, full-width, background `--maq-black`, text white.
- Left: MAQ logo (text or img — text fallback is fine).
- Center/right nav items in this exact order:
  1. **Homepage** — `onClick` scrolls to top
  2. **Services** — scrolls to `#services`
  3. **Products** — scrolls to `#products`
  4. **Industries** — `<MegaMenu label="Industries" items={industries}>`
  5. **Insights** — scrolls to `#case-studies`
  6. **About Us** — plain button (no anchor yet)
  7. **Contact Us** — `<MegaMenu label="Contact Us" items={contact}>`
- Right cluster: search icon, "Sign in" (subtle), **"Request a demo"** primary Fluent `Button` that scrolls to `#contact`.
- All nav items use a shared `navBtn` Griffel class: white text, transparent bg, transparent-white hover. No borders.

**Mega-menu data (must stay exact):**
```ts
const industries = [
  "Retail & consumer goods",
  "Financial services",
  "Healthcare & life sciences",
  "Manufacturing",
  "Technology",
  "Public sector",
];

const contact = [
  "Talk to sales",
  "Customer success",
  "Partner with us",
  "Careers",
];
```

### 4.3 Hero (`Hero.tsx`)
- Headline + supporting paragraph + primary CTA + secondary CTA.
- Headline references MAQ's positioning around Microsoft Fabric, agentic AI, data analytics.
- Primary CTA scrolls to `#contact`. Secondary CTA scrolls to `#services` or `#case-studies`.
- Light background; no hero image required (typography-led).

### 4.4 TrustBanner (`TrustBanner.tsx`)
- Single-line strip below hero: "Trusted by…" + a row of grayscale logos / textual marks.
- Background: `--maq-off-white`.

### 4.5 Services (`Services.tsx`) — `id="services"`
- Grid of service cards. The six services mirror maqsoftware.com:
  1. Agentic AI & machine learning
  2. Data & analytics
  3. Reporting & visualization
  4. Application modernization
  5. Cloud optimization
  6. Security
- Each card: Fluent icon, title, 1-sentence description, "Learn more" link.
- Cards use `--maq-border`; hover lifts shadow.

### 4.6 Products (`Products.tsx`) — `id="products"`
- Grid of product cards covering MAQ accelerators:
  - Fabric Admin Agent, AI-DataLens, EmbedFAST, CertyFAST, LoadFAST, MigrateFAST
- Each card logo block uses `linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)`.

### 4.7 CaseStudies (`CaseStudies.tsx`) — `id="case-studies"`
- Curated 3–6 featured case studies (NOT the full 101 — see `case-studies.md` for full list).
- Each card: title, 1-line summary, industry tag, "Read full story" link to the corresponding `blog.maqsoftware.com` URL.
- Featured set should be refreshed when `case-studies.md` is updated.

### 4.8 CTA (`CTA.tsx`) — `id="contact"`
- Full-bleed banner above the footer.
- Inner background: `linear-gradient(135deg, #000 0%, #1a0608 55%, var(--maq-red) 100%)`.
- White heading + supporting copy.
- Primary button: `mailto:customersuccess@maqsoftware.com` (this email is **mandatory** and must never be replaced).
- Optional secondary button to view services / products.

### 4.9 Footer (`Footer.tsx`)
- Background `--maq-gray-600`, white text.
- Columns: Services / Products / About / Resources.
- Bottom strip: copyright, social icons, privacy + terms links.

---

## 5. Accessibility & quality bar

- All interactive elements must be reachable by keyboard (Fluent v9 components handle this — do not override `tabIndex` away).
- Color contrast must meet WCAG AA against the chosen backgrounds (red `#BA141A` on white = OK for large text and UI; do not put red text < 18px on white).
- Every section is a landmark or has an `aria-labelledby` heading.
- Images must have `alt` text. Decorative gradients/blocks use `aria-hidden="true"`.
- `prefers-reduced-motion` should suppress non-essential transitions.

---

## 6. Build, run, verify

```powershell
# from c:\Users\v-anubp\Documents\Website
npm install        # only first time
npm run dev        # http://localhost:5173
npm run build      # must exit 0 — gate for any change
```

A change is considered **done** only when `npm run build` exits with code 0.

---

## 7. How to use this spec

- **To request a change:** edit this file (or describe an edit). Keep the section structure intact.
- **Assistant behavior:** when this file changes, the assistant should:
  1. Diff the spec against the current code.
  2. Update only the affected components / theme tokens / `App.tsx` order.
  3. Run `npm run build` and confirm it passes.
  4. Not touch unrelated files (case-studies.md, react components not affected, etc.).
- **Out of scope (do not add unless spec is updated first):**
  - Routing, additional pages
  - CMS / data fetching
  - Auth
  - Analytics SDKs
  - Animation libraries beyond Fluent's built-ins

---

## 8. Content / Copy (literal strings)

This section is the **source of truth for all rendered text** on the home page. Edit the strings here and the assistant will update the matching React component. Do not edit copy directly in components without also updating this section.

> Notation: `→` = link target / `onClick` behavior. `{year}` = `new Date().getFullYear()`.

### 8.1 Announcement bar
- Prefix (bold): **`New:`**
- Body: `MAQ Software named Top 25 Global Microsoft Partner for 2026`
- Separator: ` · `
- Link text: `Read the announcement →` → `#`

### 8.2 Header / nav
- **Brand wordmark:** `MAQ` (red) + `Software` (gray)
- **Nav buttons (left → right):**
  - `Homepage` → scroll to top
  - `Services` → `#services`
  - `Products` → `#products`
  - `Industries` (mega-menu) — items: `Retail & consumer goods`, `Financial services`, `Healthcare & life sciences`, `Manufacturing`, `Technology`, `Public sector`
  - `Insights` → `#case-studies`
  - `About Us` (no-op)
  - `Contact Us` (mega-menu) — items: `Talk to sales`, `Customer success`, `Partner with us`, `Careers`
- **Right cluster:**
  - Search icon (aria-label `Search`)
  - Primary button: `Request a demo` → `#contact`

### 8.3 Hero
- **Eyebrow** (with star icon): `Microsoft Fabric Featured Partner · Top 25 Global Microsoft Partner`
- **H1:** `Turn data into decisions ` + `faster` (red) + ` with AI-powered analytics`
- **Subhead:** `As a Microsoft Fabric Featured Partner and 12-time Inc. 5000 honoree, MAQ Software brings 25 years of enterprise delivery to every engagement. Whether you're modernizing a legacy BI stack, migrating to the cloud, or scaling AI across your organization — our 1,800+ engineers deliver outcomes, not just recommendations.`
- **Primary CTA:** `Request a demo` (calendar icon) → `#contact`
- **Secondary CTA:** `View case studies` (arrow icon, right) → `#case-studies`
- **Stats row (3):**
  - `1,800+` — `Engineers globally`
  - `25 yrs` — `Microsoft preferred supplier`
  - `12×` — `Inc. 5000 honoree`
- **Visual card (right):**
  - Title: `Power BI on Microsoft Fabric` + green `● Live` badge
  - Metric 1: label `Revenue YTD`, value `$42.8M`, delta `↑ +18% vs last year`
  - Metric 2: label `Query speed`, value `0.4s`, delta `↑ was 3.2s — 8× faster`
  - Chart title: `Pipeline health by region`
  - Bars: `N. America` 82%, `Europe` 67%, `Asia Pacific` 54%, `Middle East` 41%

### 8.4 Trust banner
- **Leading label:** `Trusted credentials:`
- **Chips (red-tinted ones marked ★):**
  - ★ `Top 25 Global Microsoft Partner`
  - ★ `Microsoft Fabric Featured Partner`
  - ★ `Power BI Partner of the Year — Global`
  - `Inc. 5000 — 12 Consecutive Times`
  - `1,800+ Engineers Globally`
  - `ISO 27001 / 27701 / 27018 Certified`
  - `Partners: Microsoft · Snowflake · Databricks`
  - `Microsoft Preferred Supplier — 26 Years`

### 8.5 Services section
- **Eyebrow:** `What we do`
- **Title:** `Seven capabilities. One Microsoft-aligned partner.`
- **Subhead:** `From AI agents to Fabric migrations — delivered by 1,800+ engineers with 25 years of Fortune 500 experience.`
- **Cards (7):**

| Name | Description |
|---|---|
| `AI solutions & agentic automation` | Production GenAI agents, copilots, and ML systems built on Microsoft Foundry and the Microsoft Agent Framework — automating high-value workflows from contract review to demand forecasting. |
| `Data engineering & analytics` | Medallion architectures, governed lakehouses, and high-throughput pipelines on Microsoft Fabric, Snowflake, and Databricks — built for scale and trust. |
| `Reporting & business intelligence` | Microsoft Power BI Partner of the Year (2021). We build, modernize, and migrate BI stacks — Tableau, SAP BO, SAP Crystal, Qlik, Cognos, MicroStrategy — into real-time Power BI on Microsoft Fabric. |
| `Business apps & process automation` | Custom apps on .NET, React, and Power Platform — paired with Copilot Studio agents and Power Automate flows that retire manual handoffs and embed AI into everyday operations. |
| `Cloud infrastructure & modernization` | Azure architecture, migration, and FinOps. Lift-and-shift to cloud-native re-architecture — delivering 30–40% lower run cost on average across enterprise workloads. |
| `Security & compliance` | ISO 27001 / 27701 / 27018 certified delivery. Zero Trust, Defender, Sentinel, and Purview — including AI governance with Purview AI Hub — aligned to your regulatory landscape. |
| `Workplace transformation & productivity` | Microsoft 365, Teams, SharePoint, and Copilot rollouts that drive adoption — not just deployment. Change management included. |

> Note: section §4.5 currently lists six service categories matching maqsoftware.com; the rendered card list is seven (adds Workplace transformation). Reconcile to whichever the spec dictates — current implementation = seven.

### 8.6 Products section
- **Eyebrow:** `Our products`
- **Title:** `Accelerators that compress months into weeks`
- **Subhead:** `AppSource-listed products built from real customer engagements.`
- **Cards (6):**

| Initials | Name | Tagline | Description | Tags |
|---|---|---|---|---|
| `AI` | `AI-DataLens` | `Conversational analytics` | Talk to your Power BI data in natural language. Built on Azure OpenAI with full row-level security and audit logs preserved. | `GenAI`, `Power BI` |
| `FA` | `Fabric Admin Agent` | `Fabric governance` | Autonomous agent that monitors capacities, workspaces, and item health across Microsoft Fabric — flags risks before users see them. | `Fabric`, `AI Agent` |
| `MF` | `MigrateFAST` | `Migration accelerator` | AI-assisted migration of legacy DW, ETL, and BI workloads (Teradata, Informatica, Tableau, Cognos) to Azure & Fabric — up to 70% faster. | `Azure`, `Fabric`, `AppSource` |
| `EF` | `EmbedFAST` | `Power BI embedding` | Drop-in framework for embedding Power BI into SaaS apps with multi-tenant security, theming, and usage telemetry out of the box. | `Power BI`, `SaaS` |
| `CF` | `CertyFAST` | `Report certification` | Automates report certification, lineage, and quality checks so analysts ship trusted Power BI content faster. | `Governance`, `Power BI` |
| `LF` | `LoadFAST` | `Data ingestion` | Config-driven ingestion framework for Medallion architectures — onboard new sources in days, not sprints. | `Data engineering` |

- **Per-card link:** `Learn more` (arrow icon, right)

### 8.7 Case studies section
- **Eyebrow:** `Proven results`
- **Title:** `What clients achieve with MAQ`
- **Subhead:** `Outcomes from real engagements — across retail, financial services, healthcare, and technology.`
- **Featured cards (5):**

| Industry tag | Metric | Title | Teaser |
|---|---|---|---|
| `Retail` | `8×` | `Faster report refresh for a top-3 US retailer` | 200+ legacy SSRS reports migrated to Microsoft Fabric in 8 weeks. Refresh time dropped from 3.2s to 0.4s, unifying 12 regional BUs on OneLake. |
| `Financial services` | `60%` | `Less contract review time at a Fortune 100 insurer` | Azure OpenAI agent reviews contracts clause-by-clause with a full audit trail — cutting cycle time from weeks to days. |
| `Technology` | `$3.4M` | `Annual savings via Azure-native migration` | On-prem analytics workloads moved to a Medallion architecture with zero production downtime — and 4× faster queries. |
| `Financial services — Fintech` | `Millions` | `Enhanced fintech analytics for better loan options` | Real-time lending analytics platform helping millions of borrowers find the right loan, faster. |
| `Retail — Grocery` | `Real-time` | `Real-time reporting for an organic supermarket chain` | Replaced overnight batch jobs with streaming pipelines, giving store managers live KPIs every minute. |

- **Per-card link:** `Read full story →`

### 8.8 CTA section (`#contact`)
- **Eyebrow:** `Talk to us`
- **Title:** `Ready to move faster?`
- **Subhead:** `Tell us where you are. We'll show you what's possible in 30 minutes — no obligation.`
- **Primary button:** `Contact us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Contact%20MAQ%20Software`
- **Secondary button:** `Read case studies` (arrow icon) → `#case-studies`
- **Trailing line:** `Or email us directly at ` + link `customersuccess@maqsoftware.com` → `mailto:customersuccess@maqsoftware.com`

### 8.9 Footer
- **Brand:** logo mark `M` + name `MAQ Software`
- **About paragraph:** `Microsoft Fabric Featured Partner. 25 years of enterprise delivery. 1,800+ engineers turning data into decisions for the Fortune 500.`
- **Address:** `2027 152nd Avenue NE, Redmond, WA 98052`
- **Columns:**

| Column | Items |
|---|---|
| `Services` | `AI solutions & agentic automation`, `Data engineering & analytics`, `Reporting & business intelligence`, `Cloud infrastructure & modernization`, `Security & compliance` |
| `Products` | `AI-DataLens`, `Fabric Admin Agent`, `MigrateFAST`, `EmbedFAST`, `CertyFAST`, `LoadFAST` |
| `Resources` | `Case studies`, `Power BI custom visuals`, `Best practice guides`, `Webinars` |
| `Company` | `Who we are`, `Careers`, `News`, `Sustainability`, `Contact us` |

- **Bottom-left:** `© {year} MAQ Software. All rights reserved.`
- **Bottom-right:** `Microsoft, Azure, Fabric, and Power BI are trademarks of Microsoft Corporation.`
