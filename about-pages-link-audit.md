# About Pages — Link & Validation Report

Scope: every page reachable from the **About** mega-menu in the header
(matches the items shown in the screenshot).

| About menu item   | Route / target                                  | Component                  | Status |
| ----------------- | ----------------------------------------------- | -------------------------- | :----: |
| Who we are        | `/who-we-are`                                   | `AboutWhoWeAre.tsx`        |   OK   |
| News              | `/news`                                         | `AboutNews.tsx`            |   OK   |
| Careers           | `/careers`                                      | `AboutCareers.tsx`         |   OK   |
| Social impact     | `https://maqsoftware.com/about/2026 MAQ Software Social Impact Report.pdf` (external PDF, opens in new tab) | — | OK (HTTP 200) |
| Sustainability    | `/sustainability`                               | `AboutSustainability.tsx`  |   OK   |
| Contact Us        | `/contact`                                      | `Contact.tsx`              |   OK   |

All six menu entries resolve. Routes are registered in `src/App.tsx`.

Legend used below:
- ✅ — verified working (HTTP 200, valid SPA route, or confirmed loading in a real browser)
- ⚠️ — needs manual check
- ❌ — actually broken

> All links flagged ⚠️ in the initial automated scan were re-verified by
> opening them in a real browser session. Results recorded inline below.

---

## 1. `/who-we-are` — Who we are
File: `src/pages/AboutWhoWeAre.tsx`

### Internal anchor
| Link                | Target              | Status |
| ------------------- | ------------------- | :----: |
| Hero CTA            | `#specializations`  | ✅ Anchor exists on same page (`section#specializations`) |

### Microsoft Solutions Partner Designations (external)
| Label                                | URL | Status |
| ------------------------------------ | --- | :----: |
| Data & AI (Azure)                    | `https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure#/` | ✅ 200 |
| Digital & App Innovation (Azure)     | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure#/` | ✅ 200 |
| Infrastructure (Azure)               | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure#/` | ✅ 200 |
| Security                             | `https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security#/` | ✅ 200 |

> Note: the first URL uses the `en-rs` locale (Serbia) while the others use
> `en-US`. Recommend normalizing all four to `en-us` for consistency.

### Microsoft Specializations (external)
All 9 links return HTTP 200:
- AI platform on Microsoft Azure ✅
- Analytics on Microsoft Azure ✅
- Build AI Apps on Microsoft Azure ✅
- Data Warehouse Migration to Microsoft Azure ✅
- Migrate Enterprise Applications to Microsoft Azure ✅
- Kubernetes on Microsoft Azure ✅
- Copilot ✅
- Cloud Security ✅
- Threat Protection ✅

Partner page link (footer of the section):
- `https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8` — ✅ Browser-verified. Auto-redirects to `marketplace.microsoft.com/en-us/marketplace/partner-dir/...` and renders the MAQ Software partner directory page.

### Our Partners
| Label      | URL | Status |
| ---------- | --- | :----: |
| Microsoft  | `https://marketplace.microsoft.com/en-us/partners/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview` | ✅ Browser-verified — Microsoft Marketplace partner page loads |
| Snowflake  | `https://www.snowflake.com/en/why-snowflake/partners/all-partners/maq-llc-dba-maq-software/` | ✅ Browser-verified — page title "MAQ LLC dba MAQ Software \| Snowflake Partners" |
| Databricks | `https://partners.databricks.com/s/directory/listing?recordId=0016100001F00jXAAR` | ✅ 200 |
| AWS        | `http://www.aws-partner-directory.com/PartnerDirectory/PartnerDetail?Name=MAQ+LLC+dba+MAQ+Software` | ❌ **Broken.** Browser load returns Salesforce Edge error page ("An unexpected connection error occurred.", HTTP 403). Recommend removing or replacing with the current AWS Partner profile URL. |

### Recognitions
| Label                              | URL | Status |
| ---------------------------------- | --- | :----: |
| Inc. profile                       | `http://www.inc.com/profile/maq-software` | ✅ Browser-verified — auto-redirects to `https://www.inc.com/profile/maq-software`, page title "MAQ Software is a 2025 Inc. 5000 honoree". Recommend updating the link to `https://` to skip the redirect. |
| Microsoft Power BI Partner Award   | `https://news.maqsoftware.com/2021/07/maq-software-honored-as-winner-of-2021.html` | ✅ 200 |
| Puget Sound Business Journal       | `http://www.bizjournals.com/seattle/stories/2009/10/19/focus2.html` | ✅ Browser-verified — page loads as "Fastest-Growing Private Companies Hall of Fame – Puget Sound Business Journal" after the Cloudflare check. Recommend `https://`. |

### Certifications (ISO – BSI)
| Cert                                 | URL | Status |
| ------------------------------------ | --- | :----: |
| ISO/IEC 27701:2019 (Privacy)         | `https://www.bsigroup.com/.../PM%20747130` | ✅ 200 |
| ISO 27001:2022 (Info Security)       | `https://www.bsigroup.com/.../IS%20592346` | ✅ 200 |
| ISO/IEC 27018:2019 (Cloud Security)  | `https://www.bsigroup.com/.../PII%20732855` | ✅ 200 |

---

## 2. `/news` — News
File: `src/pages/AboutNews.tsx`

This page is **data-driven**. Articles are fetched live from the
Blogger feed at `https://news.maqsoftware.com/feeds/posts/default?alt=json`
(✅ 200) and links per card (`a.href`, `p.href`) point to whatever
Blogger returns at runtime.

| Source                  | URL                                                                 | Status |
| ----------------------- | ------------------------------------------------------------------- | :----: |
| Blogger JSON feed       | `https://news.maqsoftware.com/feeds/posts/default?alt=json`         | ✅ 200 |
| Individual article URLs | dynamic — `news.maqsoftware.com/<year>/<month>/<slug>.html`         | ✅ Spot-checked (e.g. `…2021/07/maq-software-honored-as-winner-of-2021.html`) |

Findings:
- No broken hard-coded links on the page.
- Feed currently returns articles successfully — UI loading / empty
  states already implemented.
- Recommendation: surface a friendly error message if the feed call
  fails (network / CORS) — currently shown only via the `loading` flag.

---

## 3. `/careers` — Careers
File: `src/pages/AboutCareers.tsx`

Also **data-driven**. Job openings are pulled from the same Blogger CMS
the original site uses (`Blog ID 4733689656779828601`, labels
`Openings - US` / `Openings - India`).

| Link in UI                | URL                                                | Status |
| ------------------------- | -------------------------------------------------- | :----: |
| “Apply” (per job)         | `job.applyUrl` → `https://jsco.re/XXXX` (JobScore) | ✅ Dynamic, format valid |
| Job title link (per job)  | `job.href` (Blogger public post URL)               | ✅ Dynamic |
| “See all roles” CTA       | `https://careers.jobscore.com/careers/maqsoftware` | ✅ 200 |

Findings:
- No broken hard-coded links.
- Postings that don’t include an `applyUrl` fall back to the Blogger
  post — confirmed in `data/careers.ts` parsing logic.

---

## 4. Social impact (external PDF)
| URL | Status |
| --- | :----: |
| `https://maqsoftware.com/about/2026%20MAQ%20Software%20Social%20Impact%20Report.pdf` | ✅ 200 |

Opens in a new tab from both Header (About menu) and Footer (Company column).
Matches the behavior of the live `maqsoftware.com` site.

---

## 5. `/sustainability` — Sustainability
File: `src/pages/AboutSustainability.tsx`

| Asset                              | URL | Status |
| ---------------------------------- | --- | :----: |
| Hero illustration (`<img src>`)    | `https://maqsoftware.com/images-new/isv/sustainability-hero-image.svg`    | ✅ 200 |
| Leadership illustration            | `https://maqsoftware.com/images-new/isv/sustainability-footer-image.svg`  | ✅ 200 |

Findings:
- No outbound clickable links on this page; only two `<img>` assets,
  both hot-linked from `maqsoftware.com`. Working today, but **fragile**
  — if those assets are renamed/removed on the source site the images
  will break here. Recommend copying them into `public/logos/` (or
  `public/images/`) and serving locally.

---

## 6. `/contact` — Contact
File: `src/pages/Contact.tsx`

### Mail links
| Inquiry          | URL | Status |
| ---------------- | --- | :----: |
| Hero CTA         | `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=…` | ✅ Valid mailto |
| Sales            | `mailto:CustomerSuccess@MAQSoftware.com?subject=Sales%20Inquiry`     | ✅ Valid mailto |
| Customer Success | `mailto:CustomerSuccess@MAQSoftware.com?subject=Customer%20Success`  | ✅ Valid mailto |
| Partnerships     | `mailto:CustomerSuccess@MAQSoftware.com?subject=Partnership%20Inquiry` | ✅ Valid mailto |
| Email row link   | `mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us…`        | ✅ Valid mailto |

### Office locations (Google Maps short links)
| Office | URL | Status |
| ------ | --- | :----: |
| Office 1 | `https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6` | ✅ 200 |
| Office 2 | `https://maps.app.goo.gl/bipnas8wN2V8Uqst5` | ✅ 200 |
| Office 3 | `https://maps.app.goo.gl/GZT67ZkYkp1ajCux6` | ✅ 200 |
| Office 4 | `https://maps.app.goo.gl/oUZoswcXNcEiiBmk8` | ✅ 200 |
| Office 5 | `https://maps.app.goo.gl/dnkW8CJhJF9fbZWT9` | ✅ 200 |

---

## Header / Footer references to these pages

Verified that the About entries in both [src/components/Header.tsx](src/components/Header.tsx)
and [src/components/Footer.tsx](src/components/Footer.tsx) point to the routes above:

- Header `about[]` → `/who-we-are`, `/news`, `/careers`, PDF, `/sustainability`, `/contact`  — ✅
- Footer "Company" column → `/who-we-are`, `/careers`, `/news`, PDF, `/sustainability`, `/contact` — ✅

No more disabled `<span>` items in the footer; every link now resolves.

---

## Summary

| Category | Count | Pass | Warn | Fail |
| -------- | ----: | ---: | ---: | ---: |
| Internal routes (About menu)                | 5  | 5  | 0 | 0 |
| Internal anchors                            | 1  | 1  | 0 | 0 |
| External clickable links checked            | 30 | 29 | 0 | 1 |
| `mailto:` links                             | 5  | 5  | 0 | 0 |
| `<img>` external assets                     | 2  | 2  | 0 | 0 |

**1 hard failure detected:** the AWS Partner Directory link on the
*Who we are* page returns a Salesforce Edge error in a real browser.
The other 5 links that the automated HEAD scan flagged were confirmed
working after click-through in a real browser session.

## Recommendations

1. **Fix the broken AWS Partner Directory link** in `AboutWhoWeAre.tsx`.
   The current URL (`http://www.aws-partner-directory.com/...`) returns
   a 403 / Salesforce error page. Replace with the current AWS Partner
   profile URL (likely under `partners.amazonaws.com`) or remove the
   card.
2. **Normalize partner.microsoft.com locale** — change the `en-rs`
   designation URL in `AboutWhoWeAre.tsx` (Data & AI) to `en-us` to
   match the other three.
3. **Upgrade `http://` → `https://`** for `inc.com` and
   `bizjournals.com` so the browser doesn't have to redirect.
4. **Host sustainability images locally** under `public/` instead of
   hot-linking `maqsoftware.com/images-new/isv/*` so the page remains
   resilient if those assets move.
5. **Self-host the Social Impact PDF** under `public/` if you want the
   link to keep working independently of `maqsoftware.com`.
