import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { ProductCard } from "../cards/ProductCard";

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
    name: "EmbedFAST",
    initials: "EF",
    tagline: "Embed analytics at scale",
    desc: "Embed analytics and provide actionable insights inside apps and portals using EmbedFAST.",
    href: "/products/embedFAST",
  },
  {
    name: "LoadFAST",
    initials: "LF",
    tagline: "High-performance data ingestion",
    desc: "Streamline data ingestion and pipeline reliability with LoadFAST.",
    href: "/products/loadFAST",
  },
  {
    name: "CertyFAST",
    initials: "CF",
    tagline: "Data governance & certification",
    desc: "Automate certification and data governance workflows with CertyFAST.",
    href: "/products/certyFAST",
  },
];

export function ServiceProductsData() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our products</span>
          <h2 className={s.title}>Data &amp; analytics products</h2>
          <p className={s.sub}>Solutions designed to improve and streamline your operations.</p>
        </div>
        <div className={s.grid}>
          {products.map((p) => (
            <ProductCard
              key={p.name}
              name={p.name}
              logoInitials={p.initials}
              tagline={p.tagline}
              description={p.desc}
              to={p.href}
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
