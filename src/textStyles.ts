import type { GriffelStyle } from "@fluentui/react-components";

/* ==================================================================
   Global text styles — single source of truth for typography.
   ------------------------------------------------------------------
   Generalizes the font patterns already used across the app (headings,
   eyebrows, body copy, cards, buttons, links) into named, reusable
   style objects. Every value maps to the existing implementation:
   - Font SIZES use the fluid `--fs-*` tokens from `src/styles.css`.
   - Colors use the existing `--maq-*` color variables.
   - Weights / line-heights / letter-spacing mirror the current
     (aligned) component styles.

   Each entry is a Griffel style object, so it can be spread directly
   into a `makeStyles` rule; add page-specific layout (margin, max-width,
   text-align, responsive tweaks) alongside the spread:

       import { textStyles } from "../textStyles"; // adjust relative path

       const useStyles = makeStyles({
         title:  { ...textStyles.sectionHeading, margin: "0 0 12px" },
         eyebrow:{ ...textStyles.eyebrow, display: "block", marginBottom: "12px" },
         intro:  { ...textStyles.body, maxWidth: "640px", margin: "0 auto" },
       });

   Prefer these roles over hardcoded font values so the whole site can
   be re-tuned from one place.
   ================================================================== */

/** Shared base font stack (matches `theme.ts` `fontFamilyBase`). */
export const fontFamily =
  "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif";

export const textStyles = {
  /* ── Headings ──────────────────────────────────────────────────
     Hero → page title → section heading → sub-heading. Sizes are the
     fluid ramp tokens; `sectionHeading` is the site-wide 36px style
     ("Capabilities That Accelerate Growth"). */
  hero: {
    fontFamily,
    fontSize: "var(--fs-hero)",
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    color: "var(--maq-heading-color)",
    margin: 0,
  },
  pageTitle: {
    fontFamily,
    fontSize: "var(--fs-h1)",
    fontWeight: 700,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    color: "var(--maq-heading-color)",
    margin: 0,
  },
  sectionHeading: {
    fontFamily,
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: 1.15,
    letterSpacing: "-0.02em",
    color: "var(--maq-navy)",
    margin: 0,
  },
  subHeading: {
    fontFamily,
    fontSize: "var(--fs-h4)",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    color: "var(--maq-ink)",
    margin: 0,
  },

  /* ── Labels ────────────────────────────────────────────────────
     Uppercase kicker shown above a heading. */
  eyebrow: {
    fontFamily,
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: 1.4,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
    margin: 0,
  },

  /* ── Body / content ────────────────────────────────────────────
     `lead` = intro / sub-head under a heading. `body` = normal text.
     `bodyStrong` = emphasized body. `caption` = small meta / labels. */
  lead: {
    fontFamily,
    fontSize: "var(--fs-lead)",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "var(--maq-muted-color)",
    margin: 0,
  },
  body: {
    fontFamily,
    fontSize: "var(--fs-small)",
    fontWeight: 400,
    lineHeight: 1.6,
    color: "var(--maq-body-color)",
    margin: 0,
  },
  bodyStrong: {
    fontFamily,
    fontSize: "var(--fs-small)",
    fontWeight: 600,
    lineHeight: 1.6,
    color: "var(--maq-body-color)",
    margin: 0,
  },
  caption: {
    fontFamily,
    fontSize: "12px",
    fontWeight: 500,
    lineHeight: 1.4,
    letterSpacing: "0.01em",
    color: "var(--maq-gray-500)",
    margin: 0,
  },

  /* ── Component text ────────────────────────────────────────────
     Reusable text roles inside cards / buttons / links. */
  cardTitle: {
    fontFamily,
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
    color: "var(--maq-heading-color)",
    margin: 0,
  },
  cardBody: {
    fontFamily,
    fontSize: "13.5px",
    fontWeight: 400,
    lineHeight: 1.55,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
  buttonText: {
    fontFamily,
    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.4,
    letterSpacing: 0,
  },
  link: {
    fontFamily,
    fontSize: "13.5px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
} satisfies Record<string, GriffelStyle>;

/** Names of the available text-style roles. */
export type TextStyleRole = keyof typeof textStyles;
