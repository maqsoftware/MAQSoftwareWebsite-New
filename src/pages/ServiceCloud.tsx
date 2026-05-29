import { CloudHero } from "../components/service-cloud/CloudHero";
import { TrustBanner } from "../components/TrustBanner";
import { CloudCapabilities } from "../components/service-cloud/CloudCapabilities";
import { CloudOutcomes } from "../components/service-cloud/CloudOutcomes";
import { CloudCaseStudies } from "../components/service-cloud/CloudCaseStudies";
import { CloudInsights } from "../components/service-cloud/CloudInsights";
import { CloudTestimonials } from "../components/service-cloud/CloudTestimonials";
import { CTA } from "../components/CTA";

export function ServiceCloud() {
  return (
    <>
      <CloudHero />
      <TrustBanner />
      <CloudCapabilities />
      <CloudOutcomes />
      <CloudCaseStudies />
      <CloudInsights />
      <CloudTestimonials />
      <CTA />
    </>
  );
}
