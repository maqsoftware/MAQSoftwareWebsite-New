import { makeStyles, tokens } from "@fluentui/react-components";
import { CaseStudyCard } from "../cards/CaseStudyCard";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

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
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
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

export interface IndustryCase {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

interface IndustryCaseStudiesProps {
  eyebrow: string;
  title: string;
  cases: IndustryCase[];
  seeAllLabel?: string;
  seeAllHref?: string;
}

export function IndustryCaseStudies({
  eyebrow,
  title,
  cases,
  seeAllLabel = "See all case studies",
  seeAllHref = "/insights/case-studies",
}: IndustryCaseStudiesProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.grid}>
          {cases.map((c) => (
            <CaseStudyCard
              key={c.title}
              title={c.title}
              teaser={c.teaser}
              href={c.href}
            />
          ))}
        </div>
        <div className={s.seeAll}>
          <Link
            className={s.seeAllLink}
            to={seeAllHref}
          >
            {seeAllLabel} <ArrowRight16Regular />
          </Link>
        </div>
      </div>
    </section>
  );
}
