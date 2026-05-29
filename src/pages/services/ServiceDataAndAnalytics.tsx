import { DataAndAnalyticsHero } from "../../components/services/data-and-analytics/DataAndAnalyticsHero";
import { TrustBanner } from "../../components/TrustBanner";
import { DataAndAnalyticsCapabilities } from "../../components/services/data-and-analytics/DataAndAnalyticsCapabilities";
import { DataAndAnalyticsOutcomes } from "../../components/services/data-and-analytics/DataAndAnalyticsOutcomes";
import { DataAndAnalyticsCaseStudies } from "../../components/services/data-and-analytics/DataAndAnalyticsCaseStudies";
import { DataAndAnalyticsInsights } from "../../components/services/data-and-analytics/DataAndAnalyticsInsights";
import { DataAndAnalyticsTestimonials } from "../../components/services/data-and-analytics/DataAndAnalyticsTestimonials";
import { CTA } from "../../components/CTA";

export function ServiceDataAndAnalytics() {
  return (
    <>
      <DataAndAnalyticsHero />
      <TrustBanner />
      <DataAndAnalyticsCapabilities />
      <DataAndAnalyticsOutcomes />
      <DataAndAnalyticsCaseStudies />
      <DataAndAnalyticsInsights />
      <DataAndAnalyticsTestimonials />
      <CTA />
    </>
  );
}
