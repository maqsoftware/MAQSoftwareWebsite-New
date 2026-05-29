import { CTA } from "../components/CTA";
import { TrustBanner } from "../components/TrustBanner";
import { InsightsCaseStudiesCatalog } from "../components/insights/InsightsCaseStudiesCatalog";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";

export function InsightsCaseStudies() {
  return (
    <>
      <InsightsHero
        title="Case Studies"
        subhead="Explore real-world outcomes across AI, data, reporting, cloud, and security implementations delivered by MAQ Software."
        primaryLabel="Explore latest studies"
        primaryTargetId="insights-content"
      />
      <TrustBanner />
      <InsightsResourceNav active="case-studies" />
      <InsightsCaseStudiesCatalog />
      <CTA />
    </>
  );
}
