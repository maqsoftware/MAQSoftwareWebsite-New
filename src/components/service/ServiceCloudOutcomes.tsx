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
    desc: "Cut cloud spend with FinOps discipline — 30–40% lower run cost on average across enterprise workloads we modernize on Azure.",
  },
  {
    icon: <Shield24Regular />,
    title: "Enhanced security",
    desc: "Protect your business with robust cloud security measures that safeguard data and ensure compliance.",
  },
  {
    icon: <Beaker24Regular />,
    title: "Operational resilience",
    desc: "Build a resilient infrastructure that can adapt to disruptions, ensuring continuous business operations.",
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
