import { ReportingBIHero } from "../../components/services/reporting-bi/ReportingBIHero";
import { TrustBanner } from "../../components/TrustBanner";
import { ReportingBICapabilities } from "../../components/services/reporting-bi/ReportingBICapabilities";
import { ReportingBIOutcomes } from "../../components/services/reporting-bi/ReportingBIOutcomes";
import { ReportingBICaseStudies } from "../../components/services/reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../../components/services/reporting-bi/ReportingBIInsights";
import { ReportingBITestimonials } from "../../components/services/reporting-bi/ReportingBITestimonials";
import { CTA } from "../../components/CTA";

export function ServiceReportingBI() {
  return (
    <>
      <ReportingBIHero />
      <TrustBanner />
      <ReportingBICapabilities />
      <ReportingBIOutcomes />
      <ReportingBICaseStudies />
      <ReportingBIInsights />
      <ReportingBITestimonials />
      <CTA />
    </>
  );
}
