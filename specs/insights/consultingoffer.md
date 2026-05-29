# Insights Page Spec — Consulting Offers

> Source: https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software
> Sibling specs: [casesstudies.md](casesstudies.md), [powerbicustomvisualguide.md](powerbicustomvisualguide.md), [bestpracticeguide.md](bestpracticeguide.md)
> Generator: [../page-generator.md](../page-generator.md)

This route is currently a first-party redirect endpoint, not a full marketplace
catalog page. It keeps the Insights navigation on-site first, then opens the
Microsoft Marketplace in a new tab and returns the user to a first-party route.

---

## 1. Route & file layout

| Concern | Choice |
|---|---|
| Route | `/insights/consulting-offers` |
| Page component | `src/pages/InsightsConsultingOffers.tsx` |
| Redirect helper | `src/components/insights/InsightsConsultingOffersRedirect.tsx` |
| Shared layout | `<Header />` and `<Footer />` come from `App.tsx` |
| Header nav integration | Header "Insights" entry routes to `/insights/case-studies`; resource strip links here |

**Design goal:** keep the consulting-offers destination discoverable inside the insights hub without pretending the marketplace catalog is a first-party MAQ page.

---

## 2. Page composition (top -> bottom)

1. `<InsightsConsultingOffersRedirect />` — section 3.1

> **Global Insights rule:** resource navigation still points here from the shared insights strip, but this route intentionally hands off to Microsoft Marketplace.

---

## 3. Section specs

### 3.1 InsightsConsultingOffersRedirect

- Rendered by `src/components/insights/InsightsConsultingOffersRedirect.tsx`.
- On mount, open the Microsoft Marketplace consulting-offers search for MAQ Software in a new tab.
- After opening the marketplace tab:
  - if browser history exists, navigate back;
  - otherwise replace the current route with `/insights/case-studies`.
- Provide a simple fallback message and link for browsers that block automatic popups.

---

## 4. Theming

Minimal fallback content only. No catalog-specific theming rules are required beyond the shared site shell.

---

## 5. SEO

- **title:** `Consulting Offers | MAQ Software`
**description:** `Use the MAQ Software insights route to open consulting offers on Microsoft Marketplace.`
- **canonical:** `https://maqsoftware.com/insights/consulting-offers`
- **og:image:** `[PLACEHOLDER - marketing asset]`

---

## 6. Brand rules (must hold)

- All marketplace openings happen in a new tab.
- The first-party route must remain safe if the popup is blocked.
- Keep the shared insights navigation pointing to this route rather than linking directly to Marketplace from the header.

---

## 7. Content reconciliation (source -> target)

| Source block | Target |
|---|---|
| Marketplace search destination | 3.1 redirect helper |
| Shared insights taxonomy | shared resource navigation from the calling page |

**Drops:** embedded first-party catalog, filters, pricing cards, and marketplace footer duplication.
**Adds:** local-first route handoff with explicit fallback behavior.

---

## 8. Build & verify

```powershell
npm run dev
npm run build
```

Done when:
1. `/insights/consulting-offers` opens the MAQ Software marketplace search in a new tab.
2. The current tab navigates back or falls through to `/insights/case-studies`.
3. The fallback link remains usable if popup opening is blocked.
4. `npm run build` exits 0.

## 9. Out of scope (v1)

- Live marketplace API sync.
- Authenticated marketplace workflows.
- Curated first-party consulting-offer catalog.
- Country-specific price normalization.
