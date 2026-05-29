import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Lightbulb24Regular,
  Settings24Regular,
  Rocket24Regular,
} from "@fluentui/react-icons";

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
  inner: { maxWidth: "1240px", margin: "0 auto" },
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
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
    padding: "24px",
    background: "#fff",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "14px",
  },
  name: {
    fontSize: "17px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "8px",
  },
  desc: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0 },
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
          <span className={s.eyebrow}>Business outcomes</span>
          <h2 className={s.title}>{title}</h2>
          <p className={s.sub}>{subhead}</p>
        </div>
        <div className={s.grid}>
          {outcomes.map((o) => (
            <div key={o.title} className={s.card}>
              <div className={s.iconBox}>{o.icon}</div>
              <div className={s.name}>{o.title}</div>
              <p className={s.desc}>{o.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
