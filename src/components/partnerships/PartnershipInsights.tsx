import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
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
    display: "block",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    "@media (max-width: 1200px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      transform: "translateY(-2px)",
    },
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.45,
    flex: 1,
    marginBottom: "14px",
  },
  cardLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
  },
});

export interface InsightCard {
  title: string;
  href: string;
}

export interface PartnershipInsightsProps {
  eyebrow: string;
  title: string;
  items: InsightCard[];
}

export function PartnershipInsights({
  eyebrow,
  title,
  items,
}: PartnershipInsightsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.grid}>
          {items.map((b) => (
            <a
              key={b.title}
              className={s.card}
              href={b.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={s.cardTitle}>{b.title}</div>
              <span className={s.cardLink}>
                Read more <ArrowRight16Regular />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
