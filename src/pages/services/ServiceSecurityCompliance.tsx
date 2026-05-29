import { CTA } from "../../components/CTA";
import { TrustBanner } from "../../components/TrustBanner";
import { SecurityComplianceCapabilities } from "../../components/services/security-compliance/SecurityComplianceCapabilities";
import { SecurityComplianceCaseStudies } from "../../components/services/security-compliance/SecurityComplianceCaseStudies";
import { SecurityComplianceHero } from "../../components/services/security-compliance/SecurityComplianceHero";
import { SecurityComplianceInsights } from "../../components/services/security-compliance/SecurityComplianceInsights";
import { SecurityComplianceOutcomes } from "../../components/services/security-compliance/SecurityComplianceOutcomes";
import { SecurityComplianceTestimonials } from "../../components/services/security-compliance/SecurityComplianceTestimonials";

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
