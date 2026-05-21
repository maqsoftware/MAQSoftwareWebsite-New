import {
  makeStyles,
  tokens,
  Button,
  Badge,
} from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

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
    borderRadius: "14px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      transform: "translateY(-3px)",
      boxShadow: "var(--maq-shadow-sm)",
    },
  },
  logo: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "20px",
    marginBottom: "16px",
    letterSpacing: "-0.02em",
  },
  name: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    marginBottom: "4px",
  },
  tagline: {
    fontSize: "12px",
    color: "var(--maq-blue)",
    fontWeight: 500,
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-text-muted)",
    lineHeight: 1.6,
    flex: 1,
    marginBottom: "20px",
  },
  badgeRow: { display: "flex", gap: "6px", marginBottom: "16px", flexWrap: "wrap" },
});

interface Product {
  initials: string;
  name: string;
  tagline: string;
  desc: string;
  tags: string[];
}

const products: Product[] = [
  {
    initials: "AI",
    name: "AI-DataLens",
    tagline: "Conversational analytics",
    desc: "Talk to your Power BI data in natural language. Built on Azure OpenAI with full row-level security and audit logs preserved.",
    tags: ["GenAI", "Power BI"],
  },
  {
    initials: "FA",
    name: "Fabric Admin Agent",
    tagline: "Fabric governance",
    desc: "Autonomous agent that monitors capacities, workspaces, and item health across Microsoft Fabric — flags risks before users see them.",
    tags: ["Fabric", "AI Agent"],
  },
  {
    initials: "MF",
    name: "MigrateFAST",
    tagline: "Migration accelerator",
    desc: "AI-assisted migration of legacy DW, ETL, and BI workloads (Teradata, Informatica, Tableau, Cognos) to Azure & Fabric — up to 70% faster.",
    tags: ["Azure", "Fabric", "AppSource"],
  },
  {
    initials: "EF",
    name: "EmbedFAST",
    tagline: "Power BI embedding",
    desc: "Drop-in framework for embedding Power BI into SaaS apps with multi-tenant security, theming, and usage telemetry out of the box.",
    tags: ["Power BI", "SaaS"],
  },
  {
    initials: "CF",
    name: "CertyFAST",
    tagline: "Report certification",
    desc: "Automates report certification, lineage, and quality checks so analysts ship trusted Power BI content faster.",
    tags: ["Governance", "Power BI"],
  },
  {
    initials: "LF",
    name: "LoadFAST",
    tagline: "Data ingestion",
    desc: "Config-driven ingestion framework for Medallion architectures — onboard new sources in days, not sprints.",
    tags: ["Data engineering"],
  },
];

export function Products() {
  const s = useStyles();
  return (
    <section className={s.section} id="products">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our products</span>
          <h2 className={s.title}>
            Accelerators that compress months into weeks
          </h2>
          <p className={s.sub}>
            AppSource-listed products built from real customer engagements.
          </p>
        </div>
        <div className={s.grid}>
          {products.map((p) => (
            <article key={p.name} className={s.card}>
              <div className={s.logo}>{p.initials}</div>
              <div className={s.tagline}>{p.tagline}</div>
              <div className={s.name}>{p.name}</div>
              <div className={s.desc}>{p.desc}</div>
              <div className={s.badgeRow}>
                {p.tags.map((t) => (
                  <Badge key={t} appearance="outline" color="brand" size="small">
                    {t}
                  </Badge>
                ))}
              </div>
              <Button
                appearance="subtle"
                icon={<ArrowRight20Regular />}
                iconPosition="after"
                size="small"
                style={{ alignSelf: "flex-start", paddingLeft: 0 }}
              >
                Learn more
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
