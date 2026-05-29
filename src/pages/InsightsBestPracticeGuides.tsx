import { CTA } from "../components/CTA";
import { InsightsBestPracticeCatalog } from "../components/insights/InsightsBestPracticeCatalog";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";

export function InsightsBestPracticeGuides() {
  return (
    <>
      <InsightsHero
        title="Best practice guides"
        subhead="Learn implementation patterns and guardrails across GitHub Copilot, Power BI, Databricks, Snowflake, Azure architecture, Dynamics 365, and Power Platform."
        primaryLabel="Explore guides"
        primaryTargetId="insights-content"
      />
      <InsightsResourceNav active="best-practice-guides" />
      <InsightsBestPracticeCatalog />
      <CTA />
    </>
  );
}
