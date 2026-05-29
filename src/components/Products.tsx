import {
  makeStyles,
  tokens,
  Button,
  Badge,
} from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: tokens.colorNeutralBackground1 },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
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
  slug: string;
  tagline: string;
  desc: string;
  tags: string[];
}

const products: Product[] = [
  {
    initials: "FA",
    name: "Fabric Admin Agent",
    slug: "fabric-admin-agent",
    tagline: "Fabric Workload",
    desc: "AI-powered capacity management for Microsoft Fabric admins. Detects anomalies and spikes in real time, forecasts demand, and recommends actions to reduce throttling, eliminate waste, and optimize cost.",
    tags: ["Fabric Workload"],
  },
  {
    initials: "MF",
    name: "MigrateFAST",
    slug: "migratefast",
    tagline: "Migration accelerator",
    desc: "AI-powered migration of legacy ETL (Alteryx, Informatica) and BI workloads (Tableau, SAP BO, SAP Crystal, Qlik, Cognos) to Microsoft Fabric and Power BI — up to 70–80% faster.",
    tags: ["Fabric", "Power BI", "AI Powered"],
  },
  {
    initials: "EF",
    name: "EmbedFAST",
    slug: "embedfast",
    tagline: "Power BI embedding",
    desc: "Seamlessly embed Power BI into your applications with role-based access, unlimited tenant/workspace onboarding, and tailored features — without heavy integration or licensing overhead.",
    tags: ["Power BI", "SaaS"],
  },
  {
    initials: "AI",
    name: "AI-DataLens",
    slug: "ai-datalens",
    tagline: "Conversational analytics",
    desc: "Interact with enterprise datasets in natural language. No SQL or DAX — ask questions and get instant answers, with row-level security and audit preserved.",
    tags: ["Gen AI", "Power BI", "Conversational AI"],
  },
  {
    initials: "LF",
    name: "LoadFAST",
    slug: "loadfast",
    tagline: "Power BI load testing",
    desc: "Web-based load-testing for Power BI on Microsoft Fabric — simulates real-time user traffic to right-size capacity, prevent slowdowns, and cut over-provisioning.",
    tags: ["Power BI", "Performance"],
  },
  {
    initials: "CF",
    name: "CertyFAST",
    slug: "certyfast",
    tagline: "Power BI quality control",
    desc: "Streamlining Power BI model development with automated error detection, DAX measure formatting, and simplified documentation. Ensure top-quality reports and adherence to best practices.",
    tags: ["Power BI", "Quality", "Governance"],
  },
];

export function Products() {
  const s = useStyles();
  const navigate = useNavigate();
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
            <article
              key={p.name}
              className={s.card}
              onClick={() => navigate(`/products/${p.slug}`)}
              style={{ cursor: "pointer" }}
            >
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
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/products/${p.slug}`);
                }}
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
