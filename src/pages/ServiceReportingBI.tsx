import { ReportingBIHero } from "../components/service-reporting-bi/ReportingBIHero";
import { TrustBanner } from "../components/TrustBanner";
import { ReportingBICapabilities } from "../components/service-reporting-bi/ReportingBICapabilities";
import { ReportingBIOutcomes } from "../components/service-reporting-bi/ReportingBIOutcomes";
import { ReportingBIProducts } from "../components/service-reporting-bi/ReportingBIProducts";
import { ReportingBICaseStudies } from "../components/service-reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../components/service-reporting-bi/ReportingBIInsights";
import { ReportingBITestimonials } from "../components/service-reporting-bi/ReportingBITestimonials";
import { CTA } from "../components/CTA";

export function ServiceReportingBI() {
  return (
    <>
      <ReportingBIHero />
      <TrustBanner />
      <ReportingBICapabilities />
      <ReportingBIOutcomes />
      <ReportingBIProducts />
      <ReportingBICaseStudies />
      <ReportingBIInsights />
      <ReportingBITestimonials />
      <CTA />
    </>
  );
}
