import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Lightbulb24Regular, Settings24Regular, Rocket24Regular } from "@fluentui/react-icons";
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
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
    textAlign: "left",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
});

interface Outcome {
  icon: ReactNode;
  title: string;
  desc: string;
}

const outcomes: Outcome[] = [
  {
    icon: <Lightbulb24Regular />,
    title: "Optimized data usage",
    desc: "Get more from your data with analytics built around how your teams actually make decisions.",
  },
  {
    icon: <Settings24Regular />,
    title: "Boundless scalability",
    desc: "Scale data operations as demand grows, without re-architecting every time.",
  },
  {
    icon: <Rocket24Regular />,
    title: "Increase in efficiency",
    desc: "Cut manual work and speed up time to insight by streamlining data processes.",
  },
];

export function ServiceOutcomesData() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Business outcomes</span> */}
          <h2 className={s.title}>Your business outcomes</h2>
          {/* <p className={s.sub}>
            What organizations gain when data &amp; analytics are delivered with engineering discipline.
          </p> */}
        </div>
        <div className={s.grid}>
          {outcomes.map((o) => (
            <FeatureCard
              key={o.title}
              icon={o.icon}
              name={o.title}
              description={o.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
