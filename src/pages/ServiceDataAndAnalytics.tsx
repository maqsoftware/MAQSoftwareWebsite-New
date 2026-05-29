import { DataAndAnalyticsHero } from "../components/service-data-and-analytics/DataAndAnalyticsHero";
import { TrustBanner } from "../components/TrustBanner";
import { DataAndAnalyticsCapabilities } from "../components/service-data-and-analytics/DataAndAnalyticsCapabilities";
import { DataAndAnalyticsOutcomes } from "../components/service-data-and-analytics/DataAndAnalyticsOutcomes";
import { DataAndAnalyticsCaseStudies } from "../components/service-data-and-analytics/DataAndAnalyticsCaseStudies";
import { DataAndAnalyticsInsights } from "../components/service-data-and-analytics/DataAndAnalyticsInsights";
import { DataAndAnalyticsTestimonials } from "../components/service-data-and-analytics/DataAndAnalyticsTestimonials";
import { CTA } from "../components/CTA";

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
