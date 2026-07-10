import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { ProductCard } from "../cards/ProductCard";

export interface ProductItem {
  name: string;
  initials: string;
  tagline: string;
  desc: string;
  href: string;
  external?: boolean;
}

export interface ServiceProductsProps {
  title?: string;
  subhead?: string;
  products?: ProductItem[];
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "24px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
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
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  footerLink: {
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
});

interface Product {
  name: string;
  initials: string;
  tagline: string;
  desc: string;
  href: string;
  external?: boolean;
}

const defaultProducts: Product[] = [
  {
    name: "AI-DataLens",
    initials: "AI",
    tagline: "Conversational analytics",
    desc: "Talk to your Power BI estate in natural language with row-level security preserved. Citation-backed answers in seconds.",
    href: "/products/ai-datalens",
  },
  {
    name: "MigrateFAST",
    initials: "MF",
    tagline: "AI-assisted migration",
    desc: "AI-powered migration of legacy DW / ETL / BI to Azure and Microsoft Fabric — up to 70% faster delivery.",
    href: "/products/migratefast",
  },
  {
    name: "Text Analytics Engine",
    initials: "TA",
    tagline: "Document intelligence",
    desc: "Azure Marketplace text analytics application: classification, summarization, entity extraction and topic modeling at scale.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.text_analytics_application_dev?tab=Overview",
    external: true,
  },
];

export function ServiceProducts({
  title = "Agentic AI & machine learning products",
  subhead = "Solutions designed to improve and streamline your operations.",
  products = defaultProducts,
}: ServiceProductsProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our products</span>
          <h2 className={s.title}>{title}</h2>
          {/* <p className={s.sub}>{subhead}</p> */}
        </div>
        <div className={s.grid}>
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              logoInitials={p.initials}
              tagline={p.tagline}
              description={p.desc}
              to={p.external ? undefined : p.href}
              href={p.external ? p.href : undefined}
            />
          ))}
        </div>
        <Link className={s.footerLink} to="/products">
          See all products <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
