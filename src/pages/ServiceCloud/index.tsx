import { ServiceCloudHero } from "../../components/service/ServiceCloudHero";
// import { TrustBanner } from "../../components/TrustBanner";

import { ServiceCloudCapabilities } from "../../components/service/ServiceCloudCapabilities";
import { ServiceCloudOutcomes } from "../../components/service/ServiceCloudOutcomes";
import { ServiceCloudCaseStudies } from "../../components/service/ServiceCloudCaseStudies";
import { ServiceCloudInsights } from "../../components/service/ServiceCloudInsights";
// import { ServiceCloudTestimonials } from "../../components/service/ServiceCloudTestimonials";
import { CTA } from "../../components/CTA";
import { CLOUD_CASE_STUDIES_CONFIG } from "./data";

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
