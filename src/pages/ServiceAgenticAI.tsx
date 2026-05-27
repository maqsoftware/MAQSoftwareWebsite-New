import { ServiceHero } from "../components/service/ServiceHero";
import { TrustBanner } from "../components/TrustBanner";
import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import { CTA } from "../components/CTA";

export function ServiceAgenticAI() {
  return (
    <>
      <ServiceHero />
      <TrustBanner />
      <ServiceCapabilities />
      <ServiceOutcomes />
      <ServiceCaseStudies />
      <ServiceInsights />
      <ServiceTestimonials />
      <CTA />
    </>
  );
}
