import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { FeatureCard } from "../cards/FeatureCard";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "28px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
});

export interface ValueProp {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface PartnershipValuePropsProps {
  eyebrow?: string;
  title: string;
  items: ValueProp[];
}

export function PartnershipValueProps({
  eyebrow,
  title,
  items,
}: PartnershipValuePropsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* eyebrow hidden intentionally */}
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.grid}>
          {items.map((w) => (
            <FeatureCard
              key={w.title}
              icon={w.icon}
              name={w.title}
              description={w.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
