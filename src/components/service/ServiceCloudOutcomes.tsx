import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";
import {
  CurrencyDollarEuro24Regular,
  Shield24Regular,
  Beaker24Regular,
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
    icon: <CurrencyDollarEuro24Regular />,
    title: "Lower run cost",
    desc: "Cut cloud run cost 30–40% on average across enterprise workloads modernized on Azure, with FinOps discipline.",
  },
  {
    icon: <Shield24Regular />,
    title: "Enhanced security",
    desc: "Protect data and meet compliance with cloud security built into every layer.",
  },
  {
    icon: <Beaker24Regular />,
    title: "Operational resilience",
    desc: "Build infrastructure that adapts to disruptions and keeps operations running.",
  },
];

export function ServiceCloudOutcomes() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Business outcomes</span> */}
          <h2 className={s.title}>Your business outcomes</h2>
          {/* <p className={s.sub}>
            What organizations gain when cloud infrastructure is delivered with engineering discipline.
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
