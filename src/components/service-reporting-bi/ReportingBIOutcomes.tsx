import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  Eye24Regular,
  Timer24Regular,
  People24Regular,
} from "@fluentui/react-icons";
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
    icon: <Eye24Regular />,
    title: "Data clarity",
    desc: "Achieve clear, actionable insights with powerful visualizations that simplify complex data for better understanding.",
  },
  {
    icon: <Timer24Regular />,
    title: "Faster decision-making",
    desc: "Enable quicker decision-making by providing stakeholders with real-time, easy-to-understand data visualizations.",
  },
  {
    icon: <People24Regular />,
    title: "Improved data accessibility",
    desc: "Ensure that critical insights are easily accessible to everyone in your organization, fostering a data-driven culture.",
  },
];

export function ReportingBIOutcomes() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Business outcomes</span>
          <h2 className={s.title}>Your business outcomes</h2>
          {/* <p className={s.sub}>
            What organizations gain when reporting is delivered with engineering discipline.
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
