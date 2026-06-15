import { makeStyles, tokens } from "@fluentui/react-components";
import { ArticleCard } from "../cards/ArticleCard";

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
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
});

const insights = [
  {
    title: "Microsoft Fabric Feature for Real-time Analytics",
    teaser: "Explore Fabric features that enable real-time analytics and streaming.",
    href: "https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html",
  },
  {
    title: "Embracing the Future of Data Management with Microsoft Fabric: A Setup Guide",
    teaser: "Guidance for setting up Fabric-based data platforms.",
    href: "https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html",
  },
  {
    title: "Optimize your Power BI Reports and Usage with LoadFAST",
    teaser: "Best practices to get better performance and higher usage from Power BI.",
    href: "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html",
  },
];

export function ServiceInsightsData() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Insights</span>
          <h2 className={s.title}>Our data &amp; analytics insights</h2>
          {/* <p className={s.sub}>See our research that goes into optimizing our data &amp; analytics service.</p> */}
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <ArticleCard key={i.title} title={i.title} teaser={i.teaser} href={i.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
