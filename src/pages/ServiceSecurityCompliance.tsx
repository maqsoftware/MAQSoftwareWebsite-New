import { CTA } from "../components/CTA";
import { TrustBanner } from "../components/TrustBanner";
import { SecurityComplianceCapabilities } from "../components/service-security-compliance/SecurityComplianceCapabilities";
import { SecurityComplianceCaseStudies } from "../components/service-security-compliance/SecurityComplianceCaseStudies";
import { SecurityComplianceHero } from "../components/service-security-compliance/SecurityComplianceHero";
import { SecurityComplianceInsights } from "../components/service-security-compliance/SecurityComplianceInsights";
import { SecurityComplianceOutcomes } from "../components/service-security-compliance/SecurityComplianceOutcomes";
import { SecurityComplianceTestimonials } from "../components/service-security-compliance/SecurityComplianceTestimonials";

export function ServiceSecurityCompliance() {
  return (
    <>
      <SecurityComplianceHero />
      <TrustBanner />
      <SecurityComplianceCapabilities />
      <SecurityComplianceOutcomes />
      <SecurityComplianceCaseStudies />
      <SecurityComplianceInsights />
      <SecurityComplianceTestimonials />
      <CTA />
    </>
  );
}
