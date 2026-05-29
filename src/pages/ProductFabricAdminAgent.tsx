import { TrustBanner } from "../components/TrustBanner";
import { FabricAdminAgentCaseStudies } from "../components/product-fabric-admin-agent/FabricAdminAgentCaseStudies";
import { FabricAdminAgentFeatures } from "../components/product-fabric-admin-agent/FabricAdminAgentFeatures";
import { FabricAdminAgentHero } from "../components/product-fabric-admin-agent/FabricAdminAgentHero";
import { FabricAdminAgentImpact } from "../components/product-fabric-admin-agent/FabricAdminAgentImpact";
import { FabricAdminAgentInsights } from "../components/product-fabric-admin-agent/FabricAdminAgentInsights";
import { FabricAdminAgentTestimonials } from "../components/product-fabric-admin-agent/FabricAdminAgentTestimonials";

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
