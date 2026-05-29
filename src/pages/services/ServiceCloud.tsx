import { CloudHero } from "../../components/services/cloud/CloudHero";
import { TrustBanner } from "../../components/TrustBanner";
import { CloudCapabilities } from "../../components/services/cloud/CloudCapabilities";
import { CloudOutcomes } from "../../components/services/cloud/CloudOutcomes";
import { CloudCaseStudies } from "../../components/services/cloud/CloudCaseStudies";
import { CloudInsights } from "../../components/services/cloud/CloudInsights";
import { CloudTestimonials } from "../../components/services/cloud/CloudTestimonials";
import { CTA } from "../../components/CTA";

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
