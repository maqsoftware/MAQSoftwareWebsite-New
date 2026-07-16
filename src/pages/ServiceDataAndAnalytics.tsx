import { ServiceHeroData } from "../components/service/ServiceHeroData";
// import { TrustBanner } from \"../components/TrustBanner\";

import { ServiceCapabilitiesData } from "../components/service/ServiceCapabilitiesData";
import { ServiceOutcomesData } from "../components/service/ServiceOutcomesData";
import { ServiceCaseStudiesData } from "../components/service/ServiceCaseStudiesData";
import { ServiceInsightsData } from "../components/service/ServiceInsightsData";
// import { ServiceTestimonialsData } from "../components/service/ServiceTestimonialsData";

const DATA_ANALYTICS_CASE_STUDIES_CONFIG = {
  serviceFilter: "Data & AI Platforms",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See data & AI platforms case studies",
};

export function ServiceDataAndAnalytics() {
  return (
    <>
      <ServiceHeroData />

      <ServiceCapabilitiesData />
      <ServiceOutcomesData />
      <ServiceCaseStudiesData {...DATA_ANALYTICS_CASE_STUDIES_CONFIG} />
      <ServiceInsightsData />
      {/* <ServiceTestimonialsData /> */}
    </>
  );
}
