import { ServiceHeroData } from "../components/service/ServiceHeroData";
import { TrustBanner } from "../components/TrustBanner";
import { ServiceCapabilitiesData } from "../components/service/ServiceCapabilitiesData";
import { ServiceOutcomesData } from "../components/service/ServiceOutcomesData";
import { ServiceCaseStudiesData } from "../components/service/ServiceCaseStudiesData";
import { ServiceInsightsData } from "../components/service/ServiceInsightsData";
// import { ServiceTestimonialsData } from "../components/service/ServiceTestimonialsData";
import { CTA } from "../components/CTA";

const DATA_ANALYTICS_CASE_STUDIES_CONFIG = {
  serviceFilter: "Data & analytics",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See data & analytics case studies",
};

export function ServiceDataAndAnalytics() {
  return (
    <>
      <ServiceHeroData />
      <TrustBanner />
      <ServiceCapabilitiesData />
      <ServiceOutcomesData />
      <ServiceCaseStudiesData {...DATA_ANALYTICS_CASE_STUDIES_CONFIG} />
      <ServiceInsightsData />
      {/* <ServiceTestimonialsData /> */}
      <CTA />
    </>
  );
}
