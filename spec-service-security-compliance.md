# Service Page Spec — Security & Compliance

> Source: https://maqsoftware.com/services/security
> Sibling specs: [spec-service-agentic-ai.md](spec-service-agentic-ai.md), [spec-industry-retail.md](spec-industry-retail.md), [spec-product-fabric-admin-agent.md](spec-product-fabric-admin-agent.md)
> Generator: [spec-page-generator.md](spec-page-generator.md)

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/services/security-compliance` |
| Page component | `src/pages/ServiceSecurityCompliance.tsx` |
| Shared layout | Reuse `<Announcement />`, `<Header />`, `<Footer />`, `<TrustBanner />`, `<CTA />` |
| Service building blocks | `src/components/service/ServiceHero.tsx`, `ServiceCapabilities.tsx`, `ServiceOutcomes.tsx`, `ServiceProducts.tsx`, `ServiceCaseStudies.tsx`, `ServiceInsights.tsx`, `ServiceTestimonials.tsx` |
| Header nav integration | Services mega-menu "Security & Compliance" → `/services/security-compliance` |

**Design goal:** scannable, dense, single-viewport sections. Vertical padding `48px`
(hero `48–56px`), parallel multi-column layouts, h2 `28–30px`, body `14px`. No
oversized hero.

---

## 2. Page composition (top → bottom)

1. `<Announcement />` *(shared)*
2. `<Header />` *(shared, active state on "Services")*
3. `<ServiceHero />`              — §3.1
4. `<TrustBanner />` *(shared)*
5. `<ServiceCapabilities />`      — §3.2  (4 capability pillars, tabbed list+detail)
6. `<ServiceOutcomes />`          — §3.3  (3 business-outcome cards)
7. `<ServiceProducts />`          — §3.4  (3 product cards)
8. `<ServiceCaseStudies />`       — §3.5  (4 related case studies)
9. `<ServiceInsights />`          — §3.6  (3 blog insights)
10. `<ServiceTestimonials />`     — §3.7  (2 client quotes)
11. `<CTA />` *(shared)*
12. `<Footer />` *(shared)*

> **Global rule:** `<ServiceTestimonials />` is mandatory on every page and must always render immediately before `<CTA />` (last content section). Eyebrow must be `TESTIMONIALS`; H2 must be `What our clients have to say`.

---

## 3. Section specs

### 3.1 ServiceHero (compact 2-column band)

- **Layout:** left 60% = copy + CTAs, right 40% = decorative security shield mosaic (CSS only — no external asset).
- **Background:** `--maq-off-white`.
- **Padding:** `48px 32px`.

**Copy (verbatim from source):**
- **Eyebrow:** `SECURITY & COMPLIANCE`
- **H1:** `Secure your business, protect your data`
- **Subhead:**
  > Implement robust security measures with our expert solutions to safeguard your data, systems, and users from all threats.
- **Primary CTA:** `Contact us` (mail icon) → `mailto:customersuccess@maqsoftware.com?subject=Security%20%26%20Compliance%20-%20MAQ%20Software`
- **Secondary CTA:** `Explore capabilities` → scroll to `#security-capabilities`

**Decorative visual (CSS mosaic, aria-hidden):**
- Tile A: "Threat alerts" with a shield icon and pulse indicator
- Tile B: "Compliance score" radial chart at 98%
- Tile C: "Active policies" count with green status dots

### 3.2 ServiceCapabilities — "Our security capabilities"

Reproduces the 4-capability pillar section from source.

- **Section id:** `security-capabilities`
- **Eyebrow:** `OUR EXPERTISE`
- **Title:** `Our security capabilities`
- **Subhead:** `Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery.`
- **Layout:** white rounded panel (`12px` radius, `1px` border, soft shadow).
  - **Left column (45%):** selected capability detail — large icon, name, 4–5 line description, tag chips (key tech), `Know more` outlined red button.
  - **Right column (55%):** vertical list of 4 selectable cards. Active = 2px `--maq-red` left border; rest = `--maq-border`.
  - Default selected = #1 Threat detection.

**Capabilities (verbatim from source, expanded with tech context):**

| # | Name | Tagline | Icon | Description (left pane) | Tags |
|---|---|---|---|---|---|
| 1 | `Threat detection` | `Detect and respond to threats in real-time` | `Shield24Regular` (red) | Protect your business with advanced threat detection solutions. Our rapid response capabilities ensure swift action to mitigate security incidents and breaches, keeping your assets and data secure. Leverage Microsoft Sentinel and Defender for Cloud to correlate signals across endpoints, identity, and cloud workloads. | `Microsoft Sentinel`, `Defender for Cloud`, `XDR`, `SIEM` |
| 2 | `Network security` | `Harden your perimeter and internal traffic` | `Globe24Regular` (red) | Design and enforce zero-trust network architectures with Azure Firewall, NSGs, and private endpoints. Segment workloads, inspect traffic, and prevent lateral movement — whether your estate is hybrid or cloud-native. | `Azure Firewall`, `NSG`, `Private Link`, `Zero Trust` |
| 3 | `Data protection and encryption` | `Safeguard data at rest and in transit` | `LockClosed24Regular` (red) | Classify, label, and encrypt sensitive data with Microsoft Purview and Azure Key Vault. Enforce DLP policies across M365, endpoints, and cloud storage to meet regulatory obligations (GDPR, HIPAA, SOC 2). | `Microsoft Purview`, `Azure Key Vault`, `DLP`, `Encryption` |
| 4 | `Incident management and recovery` | `Respond, contain, and recover without data loss` | `ArrowReset24Regular` (red) | Build playbooks and automated response workflows in Microsoft Sentinel and Defender XDR. When incidents strike, our runbooks orchestrate containment, forensics, communication, and recovery — minimizing downtime and preserving evidence for compliance audits. | `Sentinel SOAR`, `Incident playbooks`, `Azure Backup`, `Disaster Recovery` |

- **Button:** `Know more` — outlined red → `mailto:customersuccess@maqsoftware.com?subject={Capability%20name}`.
- **Footer link below panel:** `See security case studies →` → `https://maqsoftware.com/case-studies.html?filter=security` (preserves source link).

### 3.3 ServiceOutcomes — "Your business outcomes"

- **Eyebrow:** `BUSINESS OUTCOMES`
- **Title:** `Your business outcomes`
- **Subhead:** `What organizations gain when security and compliance are delivered with engineering discipline.`
- **Layout:** 3 cards in one row (1 column below 700px). Each card: icon (red), title, 1–2 line description.
- **Cards (verbatim from source):**

| Icon | Title | Description |
|---|---|---|
| `Shield24Regular` | `Increased threat protection` | Strengthen your defense against cyber threats. Reduce the risk of breaches and downtime. |
| `LockClosed24Regular` | `Data integrity` | Ensure the confidentiality and integrity of your data. Safeguard your most valuable assets. |
| `ArrowSync24Regular` | `Operational continuity` | Maintain business continuity with robust security measures that protect against disruptions and ensure ongoing operations, even in the face of cyber-attacks. |

### 3.4 ServiceProducts — "Security & compliance products"

- **Eyebrow:** `OUR PRODUCTS`
- **Title:** `Security & compliance products`
- **Subhead:** `Solutions designed to strengthen and automate your security posture.`
- **Layout:** 3-column grid (2-col below 960, 1-col below 640).

**Cards:**

| Product | Logo initials | Tagline | Description | Link |
|---|---|---|---|---|
| `Fabric Admin Agent` | `FA` | Governance & administration | Automate Microsoft Fabric tenant administration, policy enforcement, and compliance monitoring with a Copilot-powered agent. | `/products/fabric-admin-agent` (internal) |
| `CertyFAST` | `CF` | Automated certification testing | Validate Power BI reports against accessibility, performance, and governance rules before deployment — catch compliance gaps in CI/CD. | `/products/certyfast` (internal) |
| `LoadFAST` | `LF` | Performance & reliability testing | Load-test Power BI capacity to ensure reports perform under peak demand — reduce outage risk before it reaches end users. | `/products/loadfast` (internal) |

- **Footer link below grid:** `See all products →` → `/products`.

### 3.5 ServiceCaseStudies — "Related case studies"

- **Eyebrow:** `RELATED CASE STUDIES`
- **Title:** `How clients are strengthening their security posture`
- **Layout:** 4-card grid (2×2 below 960). Each card: industry sub-tag, title, 1–2 line teaser, "Read full story →" link.
- **Cards (verbatim titles + source URLs):**

| Sub-tag | Title | Teaser | Link |
|---|---|---|---|
| `Data modernization` | Modernizing reporting platforms through AI-driven SQL Migration | Migrating legacy reporting platforms with AI-assisted SQL conversion while maintaining security and compliance standards. | https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html |
| `Data governance` | Unifying data management with a centralized framework | Establishing centralized data governance and access controls across distributed systems for improved compliance posture. | https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html |
| `Financial services` | Enhancing fintech analytics to provide millions of borrowers with better loan options | Securing and optimizing analytics infrastructure for a fintech serving millions of borrowers with sensitive financial data. | https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html |
| `Policy & compliance` | Software Company Monitors Global Affairs via Cloud-Based Policy Portal | A cloud-based policy portal enabling a global software company to monitor geopolitical affairs with secure, role-based access controls. | https://blog.maqsoftware.com/2018/07/case-study-software-company-monitors.html |

- **Footer link below grid:** `See all security case studies →` → `https://maqsoftware.com/case-studies.html?filter=security`.

### 3.6 ServiceInsights — "Our security insights"

- **Eyebrow:** `INSIGHTS`
- **Title:** `Our security insights`
- **Subhead:** `See our research that goes into optimizing our security service.`
- **Layout:** 3-card grid. Each card: light gradient cover band, title, 1-line teaser, "Read more →" link.
- **Cards (verbatim from source):**

| Title | Teaser | Link |
|---|---|---|
| `Strengthen your cloud security and protect your assets with 19 security best practices` | Field-tested Azure security best practices covering identity, network, data, and operations layers. | https://maqsoftware.com/insights/azure-security-best-practices.html |
| `Building a secure Copilot: Addressing key security challenges` | Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot. | https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html |
| `Strengthening cybersecurity with Managed Identity and RBAC` | Eliminate credential sprawl with Azure Managed Identity and enforce least-privilege access with RBAC. | https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html |

### 3.7 ServiceTestimonials — "What our clients have to say"

- **Eyebrow:** `TESTIMONIALS` (exact text)
- **Title:** `What our clients have to say` (exact text — site-wide rule)
- **Background:** `--maq-off-white`.
- **Layout:** 2-column quote cards (1 column < 960px). Each card: opening quote glyph in `--maq-red` (18% opacity, Georgia serif, 56px), body in `--maq-black` 15px / 1.55, attribution in `--maq-gray-600` uppercase 12px / weight 600.
- **Position:** always second-to-last section, immediately before `<CTA />`.
- **Quotes (placeholder until signed off):**

| Quote | Attribution |
|---|---|
| `MAQ Software implemented a zero-trust architecture across our Azure tenant in under six weeks — our compliance audit passed with zero findings for the first time.` | `CISO — Enterprise financial services` |
| `Their Sentinel deployment and custom detection rules cut our mean time to detect from days to minutes. The team operates like an extension of our own security org.` | `VP of IT Security — Global retailer` |

### 3.8 CTA (shared)

Reuses shared `<CTA />` component. No service-specific override required for v1.

### 3.9 Footer

Shared `<Footer />`. No changes.

---

## 4. Theming

Editorial Red v3 tokens only — `--maq-red`, `--maq-red-pale`, `--maq-off-white`,
`--maq-surface-cream`, `--maq-black`, `--maq-ink`, `--maq-gray-500/600/700`,
`--maq-border`. Section background alternation: off-white (hero), white
(capabilities), off-white (outcomes), white (products), off-white (case studies),
white (insights), off-white (testimonials). Card hover: `border-color: var(--maq-red)`, shadow
`0 6px 16px rgba(0,0,0,0.06)`.

---

## 5. SEO

- **title:** `Security & Compliance Services | MAQ Software`
- **description:** `Implement robust security measures with MAQ Software — threat detection, network security, data protection, and incident recovery powered by Microsoft Sentinel, Defender, and Purview.`
- **canonical:** `https://maqsoftware.com/services/security-compliance`
- **og:image:** `[PLACEHOLDER — to be supplied by marketing]`
- **Top 3 keywords:** `cloud security services`, `data protection compliance`, `Microsoft Sentinel managed security`

---

## 6. Brand rules (must hold)

- Always "MAQ Software" (never bare "MAQ").
- 26 years of Microsoft delivery.
- All primary CTAs → `customersuccess@maqsoftware.com`.
- Single-product names exactly as on maqsoftware.com (Fabric Admin Agent, CertyFAST, LoadFAST).
- Microsoft Specializations to highlight: **Cloud Security**, **Threat Protection**.
- ISO Certifications to reference: ISO 27001:2022 (Information Security), ISO/IEC 27701:2019 (Privacy), ISO/IEC 27018:2019 (Cloud Security).

---

## 7. Content reconciliation (Pass A → Pass B)

Source page blocks → target sections:

| Source block | Target |
|---|---|
| H1 "Secure your business, protect your data" + subhead + Get started | §3.1 ServiceHero |
| "Our security capabilities" tabs (Threat detection / Network security / Data protection and encryption / Incident management and recovery) | §3.2 ServiceCapabilities |
| "Security case studies >" link | §3.2 footer link |
| "Your business outcomes" 3 cards | §3.3 ServiceOutcomes |
| "Related case studies" 4 cards | §3.5 ServiceCaseStudies |
| "Our security insights" 3 cards | §3.6 ServiceInsights |
| Footer (services / products / resources / specializations / ISO / address) | Shared `<Footer />` |
| Top banner | Shared `<Announcement />` |
| Microsoft Specializations (Cloud Security, Threat Protection) | §6 Brand rules |
| ISO Certifications (27001, 27701, 27018) | §6 Brand rules |

**Additions (not on source, required by new site template):**
- §3.4 ServiceProducts — products section added per site-wide service page template (source page had no products section).
- §3.7 ServiceTestimonials — testimonials added per site-wide mandatory rule (source page had no testimonials section). Quotes are `[PLACEHOLDER]` until signed off by sales.

**Drops:** none. Every visible source block is mapped.

---

## 8. Build & verify

```powershell
npm run dev          # http://localhost:5173/#/services/security-compliance
npm run build        # must exit 0
```

Done when:
1. `npm run build` exits 0.
2. Page renders the exact copy in §3.
3. Route `/services/security-compliance` is reachable from the URL.
4. Other pages do not regress.

---

## 9. Out of scope (v1)

- Per-capability landing pages (capabilities currently mailto).
- Live CMS for case studies and insights.
- Compliance certification badge visual component (may be added in v2).
- Security assessment / audit request form.
- Localization.
