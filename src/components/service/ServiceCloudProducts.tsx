import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { ProductCard } from "../cards/ProductCard";

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

const products: Product[] = [
  {
    name: "MigrateFAST",
    initials: "MF",
    tagline: "AI-assisted cloud migration",
    desc: "AI-powered migration of legacy DW / ETL / BI to Azure and Microsoft Fabric — up to 70% faster delivery.",
    href: "/products/migratefast",
  },
  {
    name: "LoadFAST",
    initials: "LF",
    tagline: "High-performance data loading",
    desc: "Accelerate data ingestion into cloud data warehouses with optimized ETL performance.",
    href: "/products/loadfast",
  },
  {
    name: "EmbedFAST",
    initials: "EF",
    tagline: "Embedded analytics at scale",
    desc: "Deploy secure, multi-tenant analytics in your cloud applications with role-based security.",
    href: "/products/embedfast",
  },
];

export function ServiceCloudProducts() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our products</span>
          <h2 className={s.title}>Cloud modernization products</h2>
          {/* <p className={s.sub}>Solutions designed to accelerate and streamline your cloud journey.</p> */}
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
