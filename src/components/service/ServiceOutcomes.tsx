import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  Lightbulb24Regular,
  Settings24Regular,
  Rocket24Regular,
} from "@fluentui/react-icons";
import { FeatureCard } from "../cards/FeatureCard";

export interface OutcomeItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ServiceOutcomesProps {
  title?: string;
  subhead?: string;
  outcomes?: OutcomeItem[];
}

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
  sub: { fontSize: "15px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
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

const defaultOutcomes: Outcome[] = [
  {
    icon: <Lightbulb24Regular />,
    title: "Enhanced decision-making",
    desc: "Use AI-driven insights to make smarter, data-backed decisions that propel your business forward.",
  },
  {
    icon: <Settings24Regular />,
    title: "Automated efficiency",
    desc: "Automate repetitive tasks with intelligent systems, freeing up resources for more strategic initiatives.",
  },
  {
    icon: <Rocket24Regular />,
    title: "Innovation acceleration",
    desc: "Accelerate your innovation cycles by integrating cutting-edge AI and ML technologies into your business processes.",
  },
];

export function ServiceOutcomes({
  title = "Your business outcomes",
  subhead = "What organizations gain when agentic AI is delivered with engineering discipline.",
  outcomes = defaultOutcomes,
}: ServiceOutcomesProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Business outcomes</span> */}
          <h2 className={s.title}>{title}</h2>
          {/* <p className={s.sub}>{subhead}</p> */}
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
