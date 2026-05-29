import { TrustBanner } from "../../components/TrustBanner";
import { FabricAdminAgentCaseStudies } from "../../components/products/fabric-admin-agent/FabricAdminAgentCaseStudies";
import { FabricAdminAgentFeatures } from "../../components/products/fabric-admin-agent/FabricAdminAgentFeatures";
import { FabricAdminAgentHero } from "../../components/products/fabric-admin-agent/FabricAdminAgentHero";
import { FabricAdminAgentImpact } from "../../components/products/fabric-admin-agent/FabricAdminAgentImpact";
import { FabricAdminAgentInsights } from "../../components/products/fabric-admin-agent/FabricAdminAgentInsights";
import { FabricAdminAgentTestimonials } from "../../components/products/fabric-admin-agent/FabricAdminAgentTestimonials";

export function ProductFabricAdminAgent() {
  return (
    <>
      <FabricAdminAgentHero />
      <TrustBanner />
      <FabricAdminAgentImpact />
      <FabricAdminAgentFeatures />
      <FabricAdminAgentCaseStudies />
      <FabricAdminAgentInsights />
      <FabricAdminAgentTestimonials />
    </>
  );
}
