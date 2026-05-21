import { makeStyles, tokens, Badge } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "20px" },
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
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-red)`,
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      transform: "translateY(-2px)",
    },
  },
  tag: { alignSelf: "flex-start", marginBottom: "12px" },
  cardTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "10px",
  },
  teaser: {
    fontSize: "13px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
    flex: 1,
    marginBottom: "14px",
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
  seeAll: {
    marginTop: "20px",
    textAlign: "right",
    fontSize: "13px",
    fontWeight: 600,
  },
  seeAllLink: {
    color: "var(--maq-red)",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
  },
});

interface Case {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

const cases: Case[] = [
  {
    tag: "Grocery",
    title: "Transforming grocery retail analytics with Microsoft Fabric",
    teaser:
      "Modernize grocery analytics on Fabric for sharper category, basket and supply-chain insights.",
    href: "https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html",
  },
  {
    tag: "Specialty retail",
    title: "Transforming supply chain analytics with Power BI on Snowflake",
    teaser:
      "Replatform a specialty retailer's supply chain analytics on Snowflake + Power BI.",
    href: "https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html",
  },
  {
    tag: "Mass retail",
    title:
      "Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric",
    teaser:
      "Deliver real-time DSD visibility on Fabric so field operations can act on live route and stock data.",
    href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
];

export function IndustryCaseStudies() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Retail case studies</span>
          <h2 className={s.title}>How retailers move faster with MAQ Software</h2>
        </div>
        <div className={s.grid}>
          {cases.map((c) => (
            <a
              key={c.title}
              className={s.card}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Badge appearance="tint" color="danger" className={s.tag}>
                {c.tag}
              </Badge>
              <div className={s.cardTitle}>{c.title}</div>
              <div className={s.teaser}>{c.teaser}</div>
              <span className={s.link}>
                Read full story <ArrowRight20Regular fontSize={14} />
              </span>
            </a>
          ))}
        </div>
        <div className={s.seeAll}>
          <a
            className={s.seeAllLink}
            href="https://maqsoftware.com/case-studies"
            target="_blank"
            rel="noreferrer"
          >
            See all retail case studies <ArrowRight20Regular fontSize={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
