import { ServiceCloudHero } from "../components/service/ServiceCloudHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceCloudCapabilities } from "../components/service/ServiceCloudCapabilities";
import { ServiceCloudOutcomes } from "../components/service/ServiceCloudOutcomes";
import { ServiceCloudCaseStudies } from "../components/service/ServiceCloudCaseStudies";
import { ServiceCloudInsights } from "../components/service/ServiceCloudInsights";
// import { ServiceCloudTestimonials } from "../components/service/ServiceCloudTestimonials";
import { CTA } from "../components/CTA";

const CLOUD_CASE_STUDIES_CONFIG = {
  serviceFilter: "Cloud optimization",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See cloud optimization case studies",
};

export function ServiceCloud() {
  return (
    <>
      <ServiceCloudHero />

      <ServiceCloudCapabilities />
      <ServiceCloudOutcomes />
      <ServiceCloudCaseStudies {...CLOUD_CASE_STUDIES_CONFIG} />
      <ServiceCloudInsights />
      {/* <ServiceCloudTestimonials /> */}
      <CTA />
    </>
  );
}
