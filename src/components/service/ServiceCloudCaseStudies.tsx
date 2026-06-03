import { makeStyles, tokens, Button } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
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
    margin: 0,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  cardTitle: {
    fontSize: "17px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.3,
    margin: 0,
  },
  teaser: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: {
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
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    "@media (max-width: 640px)": { flexDirection: "column" },
  },
});

interface Study {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

const studies: Study[] = [
  {
    tag: "Microsoft Fabric",
    title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
    teaser:
      "Consolidating fragmented data estates onto Microsoft Fabric to unlock a single, governed source of truth across the enterprise.",
    href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
  },
  {
    tag: "Snowflake · Fabric",
    title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    teaser:
      "Bridging Snowflake and Microsoft Fabric to streamline data movement, governance, and cost — without rewriting existing pipelines.",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
  },
  {
    tag: "SQL migration",
    title: "Modernizing reporting platforms through AI-driven SQL Migration",
    teaser:
      "AI-assisted SQL conversion accelerates legacy reporting platform migration while preserving security and compliance.",
    href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
  },
];

export function ServiceCloudCaseStudies({
  serviceFilter,
  allCasesLabel,
  serviceSpecificLabel,
}: {
  serviceFilter?: string;
  allCasesLabel?: string;
  serviceSpecificLabel?: string;
} = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Related case studies</span>
          <h2 className={s.title}>How clients are accelerating cloud transformation</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <a key={c.title} className={s.card} href={c.href} target="_blank" rel="noreferrer">
              <span className={s.pill}>{c.tag}</span>
              <h3 className={s.cardTitle}>{c.title}</h3>
              <p className={s.teaser}>{c.teaser}</p>
              <span className={s.read}>
                Read full story <ArrowRight16Regular />
              </span>
            </a>
          ))}
        </div>
        {serviceFilter && allCasesLabel && serviceSpecificLabel ? (
          <div className={s.buttonGroup}>
            <Button
              appearance="outline"
              as="a"
              href={`/insights/case-studies?filter=${encodeURIComponent(serviceFilter)}#insights-content`}
              icon={<ArrowRight16Regular />}
              iconPosition="after"
            >
              {allCasesLabel}
            </Button>
          </div>
        ) : (
          <a className={s.footerLink} href="/insights/case-studies?filter=Cloud optimization">
            See all cloud case studies <ArrowRight16Regular />
          </a>
        )}
      </div>
    </section>
  );
}
