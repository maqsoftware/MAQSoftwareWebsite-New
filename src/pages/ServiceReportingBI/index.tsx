import { ReportingBIHero } from "../../components/service-reporting-bi/ReportingBIHero";

import { ReportingBICapabilities } from "../../components/service-reporting-bi/ReportingBICapabilities";
import { ReportingBIOutcomes } from "../../components/service-reporting-bi/ReportingBIOutcomes";
import { ReportingBICaseStudies } from "../../components/service-reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../../components/service-reporting-bi/ReportingBIInsights";
// import { ReportingBITestimonials } from "../../components/service-reporting-bi/ReportingBITestimonials";
import { CTA } from "../../components/CTA";
// import { TrustBanner } from "../../components/TrustBanner";
import { REPORTING_BI_CASE_STUDIES_CONFIG } from "./data";

export function ServiceReportingBI() {
  return (
    <>
      <ReportingBIHero />

      <ReportingBICapabilities />
      <ReportingBIOutcomes />
      <ReportingBICaseStudies {...REPORTING_BI_CASE_STUDIES_CONFIG} />
      <ReportingBIInsights />
      {/* <ReportingBITestimonials /> */}
      <CTA />
    </>
  );
}
