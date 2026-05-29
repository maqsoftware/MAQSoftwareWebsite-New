import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "24px" },
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
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  logoRow: { display: "flex", alignItems: "center", gap: "12px" },
  logo: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "linear-gradient(135deg, var(--maq-red) 0%, var(--maq-black) 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "14px",
    letterSpacing: "0.04em",
  },
  name: { fontSize: "16px", fontWeight: 700, color: "var(--maq-black)" },
  tagline: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  desc: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
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
          <h2 className={s.title}>Cloud optimization products</h2>
          <p className={s.sub}>Solutions designed to accelerate and streamline your cloud journey.</p>
        </div>
        <div className={s.grid}>
          {products.map((p) => {
            const inner = (
              <>
                <div className={s.logoRow}>
                  <div className={s.logo} aria-hidden="true">
                    {p.initials}
                  </div>
                  <div className={s.name}>{p.name}</div>
                </div>
                <span className={s.tagline}>{p.tagline}</span>
                <p className={s.desc}>{p.desc}</p>
                <span className={s.link}>
                  Learn more <ArrowRight16Regular />
                </span>
              </>
            );
            return p.external ? (
              <a key={p.name} href={p.href} target="_blank" rel="noreferrer" className={s.card}>
                {inner}
              </a>
            ) : (
              <Link key={p.name} to={p.href} className={s.card}>
                {inner}
              </Link>
            );
          })}
        </div>
        <Link className={s.footerLink} to="/products">
          See all products <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
