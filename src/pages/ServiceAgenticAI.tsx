import { ServiceHero } from "../components/service/ServiceHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import { CTA } from "../components/CTA";

const SERVICE_CASE_STUDIES_CONFIG = {
  serviceFilter: "Agentic AI & Machine Learning",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See agentic AI case studies",
};

export function ServiceAgenticAI() {
  return (
    <>
      <ServiceHero />

      <ServiceCapabilities />
      <ServiceOutcomes />
      <ServiceCaseStudies {...SERVICE_CASE_STUDIES_CONFIG} />
      <ServiceInsights />
      {/* <ServiceTestimonials /> */}
      <CTA />
    </>
  );
}
