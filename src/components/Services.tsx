import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Bot24Regular,
  DataPie24Regular,
  ChartMultiple24Regular,
  AppFolder24Regular,
  Cloud24Regular,
  ShieldCheckmark24Regular,
  PeopleTeam24Regular,
} from "@fluentui/react-icons";
import type { FC, ReactNode } from "react";

const useStyles = makeStyles({
  section: { padding: "80px 32px", backgroundColor: tokens.colorNeutralBackground1 },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "48px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-text-muted)",
    maxWidth: "640px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    transition: "all 0.2s ease",
    cursor: "pointer",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "16px",
  },
  name: { fontSize: "16px", fontWeight: 600, color: "var(--maq-navy)", marginBottom: "8px" },
  desc: { fontSize: "13.5px", color: "var(--maq-text-muted)", lineHeight: 1.6 },
});

interface Svc {
  icon: ReactNode;
  name: string;
  desc: string;
}

const services: Svc[] = [
  {
    icon: <Bot24Regular />,
    name: "AI solutions & agentic automation",
    desc: "Production GenAI agents, copilots, and ML systems on Azure OpenAI and Databricks — automating high-value workflows from contract review to demand forecasting.",
  },
  {
    icon: <DataPie24Regular />,
    name: "Data engineering & analytics",
    desc: "Medallion architectures, governed lakehouses, and high-throughput pipelines on Microsoft Fabric, Synapse, Snowflake, and Databricks — built for scale and trust.",
  },
  {
    icon: <ChartMultiple24Regular />,
    name: "Reporting & business intelligence",
    desc: "Microsoft Power BI Partner of the Year. We modernize legacy BI stacks (SSRS, Tableau, Cognos) into real-time Power BI on Fabric — up to 8× faster refresh.",
  },
  {
    icon: <AppFolder24Regular />,
    name: "Business apps & process automation",
    desc: "Custom apps on .NET, React, and Power Platform that streamline operations — paired with Power Automate flows that retire manual handoffs across teams.",
  },
  {
    icon: <Cloud24Regular />,
    name: "Cloud infrastructure & modernization",
    desc: "Azure architecture, migration, and FinOps. Lift-and-shift to cloud-native re-architecture with zero downtime — and 30–40% lower run cost on average.",
  },
  {
    icon: <ShieldCheckmark24Regular />,
    name: "Security & compliance",
    desc: "ISO 27001 / 27701 / 27018 certified delivery. Zero Trust, Defender, Sentinel, and Purview implementations aligned to your regulatory landscape.",
  },
  {
    icon: <PeopleTeam24Regular />,
    name: "Workplace transformation & productivity",
    desc: "Microsoft 365, Teams, SharePoint, and Copilot rollouts that drive adoption — not just deployment. Change management included.",
  },
];

export const Services: FC = () => {
  const s = useStyles();
  return (
    <section className={s.section} id="services">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>What we do</span>
          <h2 className={s.title}>
            Seven capabilities. One Microsoft-aligned partner.
          </h2>
          <p className={s.sub}>
            From AI agents to Fabric migrations — delivered by 1,800+ engineers
            with 26 years of Fortune 500 experience.
          </p>
        </div>
        <div className={s.grid}>
          {services.map((svc) => (
            <div key={svc.name} className={s.card}>
              <div className={s.iconBox}>{svc.icon}</div>
              <div className={s.name}>{svc.name}</div>
              <div className={s.desc}>{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
