# Fix product card navigation and CTA "Read case studies" link

## Summary

This PR fixes navigation issues on the homepage product cards and the shared CTA component.

## Changes

### 1. Product card click navigation (`src/components/Products.tsx`)
- Added `slug` property to each product in the products array
- Made the entire product card clickable — navigates to `/products/{slug}`
- "Learn more" button also navigates to the respective product page
- Used `react-router-dom` `useNavigate` for SPA navigation

### 2. CTA "Read case studies" button (`src/components/CTA.tsx`)
- Replaced the old scroll-to-element / external redirect logic with proper SPA navigation to `/insights/case-studies`
- When already on the case studies page, smooth-scrolls to the top instead of navigating
- Component remains shared — no duplication

### 3. Scroll-to-top on route change (`src/App.tsx`)
- Added a `ScrollToTop` component that resets scroll position to the top on every route change
- Prevents stale scroll position when navigating between pages

## Files Modified

| File | Change |
|------|--------|
| `src/App.tsx` | Added `ScrollToTop` component using `useLocation` + `useEffect` |
| `src/components/Products.tsx` | Added slugs, card click handler, button click handler |
| `src/components/CTA.tsx` | Navigate to `/insights/case-studies` or smooth-scroll if already there |
