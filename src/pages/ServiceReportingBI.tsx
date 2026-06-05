import { ReportingBIHero } from "../components/service-reporting-bi/ReportingBIHero";

import { ReportingBICapabilities } from "../components/service-reporting-bi/ReportingBICapabilities";
import { ReportingBIOutcomes } from "../components/service-reporting-bi/ReportingBIOutcomes";
import { ReportingBICaseStudies } from "../components/service-reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../components/service-reporting-bi/ReportingBIInsights";
// import { ReportingBITestimonials } from "../components/service-reporting-bi/ReportingBITestimonials";
import { CTA } from "../components/CTA";
// import { TrustBanner } from "../components/TrustBanner";

const REPORTING_BI_CASE_STUDIES_CONFIG = {
  serviceFilter: "Reporting & visualization",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See reporting & BI case studies",
};

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
