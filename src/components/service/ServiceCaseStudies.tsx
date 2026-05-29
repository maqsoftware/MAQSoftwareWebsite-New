import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

export interface CaseStudyItem {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

export interface ServiceCaseStudiesProps {
  title?: string;
  studies?: CaseStudyItem[];
  footerLabel?: string;
  footerHref?: string;
}

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
});

interface Study {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

const defaultStudies: Study[] = [
  {
    tag: "AI adoption",
    title: "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    teaser:
      "A proven CoE blueprint that moves enterprise AI from pilot interest to repeatable, governed production adoption.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
  },
  {
    tag: "Agentic AI",
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "How agentic AI is reshaping retail, financial services, healthcare and manufacturing workflows in production.",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
  {
    tag: "Scaling AI",
    title: "Scaling AI for every customer and every developer with MAQ Software",
    teaser:
      "A reference architecture and delivery model for scaling agentic AI to every customer and every developer in the enterprise.",
    href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
  },
];

export function ServiceCaseStudies({
  title = "How clients are putting agentic AI to work",
  studies = defaultStudies,
  footerLabel = "See all AI case studies",
  footerHref = "/insights/case-studies?filter=gen-ai-and-machine-learning",
}: ServiceCaseStudiesProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Related case studies</span>
          <h2 className={s.title}>{title}</h2>
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
        <a
          className={s.footerLink}
          href={footerHref}
          target="_blank"
          rel="noreferrer"
        >
          {footerLabel} <ArrowRight16Regular />
        </a>
      </div>
    </section>
  );
}
