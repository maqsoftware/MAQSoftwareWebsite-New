import { makeStyles, tokens } from "@fluentui/react-components";
import { PosterCard } from "../cardsV2/PosterCard";
import { getServiceInsightImage } from "../../data/serviceInsightImages";

export interface InsightItem {
  title: string;
  teaser: string;
  href: string;
  img?: string;
}

export interface ServiceInsightsProps {
  title?: string;
  subhead?: string;
  insights?: InsightItem[];
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
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
});

const defaultInsights = [
  {
    title: "Empowering businesses with AI: Frameworks that deliver results",
    teaser:
      "A field-tested framework for shipping AI initiatives that produce measurable business outcomes.",
    href: "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser: "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    title: "Designing UI for Copilot: Key principles and practices",
    teaser: "UI principles that make Copilot interactions feel trustworthy, fast, and on-brand.",
    href: "https://blog.maqsoftware.com/2024/08/designing-ui-for-copilot-key-principles.html",
  },
];

export function ServiceInsights({
  title = "Our agentic AI insights",
  subhead = "See our research that goes into shipping production agents on Microsoft Foundry.",
  insights = defaultInsights,
}: ServiceInsightsProps = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Insights</span> */}
          <h2 className={s.title}>{title}</h2>
          {/* <p className={s.sub}>{subhead}</p> */}
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <PosterCard
              key={i.title}
              to={i.href}
              img={i.img ?? getServiceInsightImage(i.href)}
              deriveFormats={false}
              imgFit="cover"
              aspectRatio="16 / 10"
              title={i.title}
              desc={i.teaser}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
