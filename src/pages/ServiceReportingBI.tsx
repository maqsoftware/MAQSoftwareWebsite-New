import { ReportingBIHero } from "../components/service-reporting-bi/ReportingBIHero";
import { TrustBanner } from "../components/TrustBanner";
import { ReportingBICapabilities } from "../components/service-reporting-bi/ReportingBICapabilities";
import { ReportingBIOutcomes } from "../components/service-reporting-bi/ReportingBIOutcomes";
import { ReportingBICaseStudies } from "../components/service-reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../components/service-reporting-bi/ReportingBIInsights";
import { CTA } from "../components/CTA";

export function ServiceReportingBI() {
  return (
    <>
      <ReportingBIHero />
      <TrustBanner />
      <ReportingBICapabilities />
      <ReportingBIOutcomes />
      <ReportingBICaseStudies />
      <ReportingBIInsights />
      <CTA />
    </>
  );
}
