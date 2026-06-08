import { makeStyles, tokens, Badge, Button } from "@fluentui/react-components";
import { ArrowRight20Regular, Mail24Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useContactAction } from "../lib/contact";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "64px 32px 48px",
  },
  heroInner: { maxWidth: "1240px", margin: "0 auto" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  h1: {
    fontSize: "44px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 16px",
    letterSpacing: "-0.02em",
    lineHeight: 1.12,
    maxWidth: "820px",
  },
  sub: {
    fontSize: "16px",
    color: "var(--maq-gray-700)",
    margin: 0,
    maxWidth: "720px",
    lineHeight: 1.6,
  },
  list: { padding: "64px 32px", backgroundColor: "#fff" },
  listInner: { maxWidth: "1240px", margin: "0 auto" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    overflow: "hidden",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-red)`,
      transform: "translateY(-3px)",
      boxShadow: "var(--maq-shadow-sm)",
    },
  },
  thumbWrap: {
    background: "var(--maq-surface-cream)",
    borderBottom: "1px solid var(--maq-red-pale)",
    padding: "16px 16px 0",
  },
  thumb: { width: "100%", height: "auto", display: "block", borderRadius: "8px" },
  cardBody: { padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 },
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
  tagline: {
    fontSize: "12px",
    color: "var(--maq-red)",
    fontWeight: 600,
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  name: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "8px",
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    flex: 1,
    marginBottom: "16px",
  },
  badges: {
    display: "flex",
    gap: "6px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
  },

  cta: { padding: "56px 32px", backgroundColor: "var(--maq-off-white)" },
  ctaInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "40px 32px",
    textAlign: "center",
  },
  ctaTitle: {
    fontSize: "26px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
  },
  ctaSub: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: "0 0 20px",
  },

  stats: {
    padding: "32px",
    backgroundColor: "#fff",
    borderTop: "1px solid var(--maq-border)",
    borderBottom: "1px solid var(--maq-border)",
  },
  statsInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  statCard: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
  },
  statValue: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
  },
  statLabel: {
    fontSize: "12.5px",
    color: "var(--maq-gray-700)",
    marginTop: "4px",
  },
});

const aggregateStats = [
  { value: "120+", label: "Enterprise migrations delivered" },
  { value: "500+", label: "Reports certified per month" },
  { value: "40+", label: "SaaS products embedded" },
  { value: "30+", label: "Enterprise AI-DataLens tenants" },
];

export function ProductsHome() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>Our products</span>
          <h1 className={s.h1}>
            Accelerators that compress months of build into weeks of value
          </h1>
          <p className={s.sub}>
            AppSource-listed products built from 26 years of MAQ Software
            customer engagements. Every product is Microsoft-aligned, deployed
            in your tenant, and backed by our delivery teams.
          </p>
        </div>
      </section>

      <section className={s.stats} aria-label="MAQ Software product impact">
        <div className={s.statsInner}>
          {aggregateStats.map((st) => (
            <div key={st.label} className={s.statCard}>
              <div className={s.statValue}>{st.value}</div>
              <div className={s.statLabel}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={s.list}>
        <div className={s.listInner}>
          <div className={s.grid}>
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className={s.card}
              >
                <div className={s.thumbWrap}>
                  <img
                    src={p.image}
                    alt={`${p.name} preview`}
                    className={s.thumb}
                    loading="lazy"
                  />
                </div>
                <div className={s.cardBody}>
                  <div className={s.logo}>{p.initials}</div>
                  <div className={s.tagline}>{p.tagline}</div>
                  <div className={s.name}>{p.name}</div>
                  <div className={s.desc}>{p.shortDesc}</div>
                  <div className={s.badges}>
                    {p.tags.map((t) => (
                      <Badge key={t} appearance="outline" color="danger" size="small">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <span className={s.link}>
                    Learn more <ArrowRight20Regular fontSize={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={s.cta}>
        <div className={s.ctaInner}>
          <h2 className={s.ctaTitle}>Want a guided walkthrough?</h2>
          <p className={s.ctaSub}>
            Pick any product. We'll show it running on your data.
          </p>
          <Button
            appearance="primary"
            size="large"
            icon={<Mail24Regular />}
            onClick={() =>
              handleContactClick("Product walkthrough")
            }
          >
            Request a walkthrough
          </Button>
        </div>
      </section>
    </>
  );
}
