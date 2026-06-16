import type { ReactNode } from "react";
import { FluentProvider, makeStyles, mergeClasses } from "@fluentui/react-components";
import { maqDarkTheme } from "../theme";

/* ==================================================================
   DarkSection — an inverse-surface island.
   ------------------------------------------------------------------
   Wraps content in the MAQ dark Fluent theme via a nested
   FluentProvider, so Fluent components inside adapt to a dark
   background automatically: primary buttons brighten, neutral
   controls flip to light-on-dark, focus rings stay legible — with no
   per-section overrides. Use for any dark band (CTA, feature strips).

   Text flips automatically: this remaps the surface-aware text roles
   (--maq-heading/body/muted/faint-color) to light values on the
   subtree, so headings and copy invert with no per-element override.
   Fluent components adapt via the nested dark theme.
   ================================================================== */
const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--maq-surface-ink)",
    "--maq-heading-color": "#ffffff",
    "--maq-body-color": "rgba(255, 255, 255, 0.88)",
    "--maq-muted-color": "rgba(255, 255, 255, 0.66)",
    "--maq-faint-color": "rgba(255, 255, 255, 0.5)",
  },
});

export function DarkSection({ className, children }: { className?: string; children: ReactNode }) {
  const s = useStyles();
  return (
    <FluentProvider theme={maqDarkTheme} className={mergeClasses(s.root, className)}>
      {children}
    </FluentProvider>
  );
}
