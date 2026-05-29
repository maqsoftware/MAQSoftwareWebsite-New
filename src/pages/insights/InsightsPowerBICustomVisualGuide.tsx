import { CTA } from "../../components/CTA";
import { InsightsHero } from "../../components/insights/InsightsHero";
import { InsightsResourceNav } from "../../components/insights/InsightsResourceNav";
import { InsightsVisualGuideCatalog } from "../../components/insights/InsightsVisualGuideCatalog";

export function InsightsPowerBICustomVisualGuide() {
  return (
    <>
      <InsightsHero
        title="Power BI custom visual guide"
        subhead="Expand your reporting capabilities with our 43 certified Power BI custom visuals. If you need help choosing the right visual for your report, try our visual guide."
        primaryLabel="Explore custom visuals"
        primaryTargetId="insights-content"
        secondaryHref="https://maqsoftware.com/services/Power-BI/VisualChooserPDF.pdf"
      />
      <InsightsResourceNav active="power-bi-custom-visual-guide" />
      <InsightsVisualGuideCatalog />
      <CTA />
    </>
  );
}
