import { makeStyles, tokens, mergeClasses } from "@fluentui/react-components";
import type { CSSProperties, ReactNode } from "react";

/* ==================================================================
   Section / Container — the page's layout band primitive.
   ------------------------------------------------------------------
   `Section` is a full-bleed band that carries the vertical rhythm and
   horizontal gutters; the inner `Container` caps + centers content at
   the standard 1440px width. Extracted from HomeV2 so every page uses
   the same widths and spacing.
   ================================================================== */

const useStyles = makeStyles({
  section: { padding: "var(--section-pad-y) var(--section-pad-x)" },
  gray: { backgroundColor: tokens.colorNeutralBackground2 },
  relative: { position: "relative" },
  center: { textAlign: "center" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
});

export type SectionTone = "default" | "gray";

export function Section({
  tone = "default",
  relative = false,
  center = false,
  className,
  innerClassName,
  style,
  children,
}: {
  /** `gray` paints the neutral band (Fluent background 2). */
  tone?: SectionTone;
  /** Adds `position: relative` (e.g. for an absolutely-placed divider). */
  relative?: boolean;
  /** Center-aligns the section content. */
  center?: boolean;
  className?: string;
  innerClassName?: string;
  /** One-off overrides (e.g. a tighter padding) without a bespoke class. */
  style?: CSSProperties;
  children: ReactNode;
}) {
  const s = useStyles();
  return (
    <section
      className={mergeClasses(
        s.section,
        tone === "gray" && s.gray,
        relative && s.relative,
        center && s.center,
        className,
      )}
      style={style}
    >
      <div className={mergeClasses(s.inner, innerClassName)}>{children}</div>
    </section>
  );
}

/** Bare max-width container (no band), for nesting inside custom bands. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  const s = useStyles();
  return <div className={mergeClasses(s.inner, className)}>{children}</div>;
}
