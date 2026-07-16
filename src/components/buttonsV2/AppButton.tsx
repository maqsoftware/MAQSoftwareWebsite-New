import type { ButtonProps as FluentButtonProps } from "@fluentui/react-components";

/* ==================================================================
   buttonsV2 — MAQ button kit (used by the V2 homepage exploration)
   ------------------------------------------------------------------
   Thin, honest wrappers over Fluent UI's <Button>. Each component
   fixes one Fluent `appearance` and passes the full native Button API
   through unchanged (children, icon/iconPosition, size, href/as,
   onClick, disabled, etc.).

   - PrimaryButton renders MAQ brand red — the red comes from the
     FluentProvider theme's brand ramp (theme.ts, slot 80 = #BA141A),
     NOT a local style override. Nothing here recolors a button.
   - Secondary / Outline / Subtle / Transparent are stock Fluent
     defaults, intentionally unstyled so they stay in sync with the
     Fluent design language.

   Because these are pure appearance presets, there is no "icon"
   variant: an icon-only button is just any of these with `icon` set,
   no children, and an aria-label — exactly Fluent's own contract.
   ================================================================== */

/** The full Fluent Button API minus `appearance`, which each
 *  component in this kit fixes. */
export type AppButtonProps = Omit<FluentButtonProps, "appearance">;
