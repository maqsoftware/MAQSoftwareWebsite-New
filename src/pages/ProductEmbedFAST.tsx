import { TrustBanner } from "../components/TrustBanner";
import { EmbedFASTBenefits } from "../components/product-embedfast/EmbedFASTBenefits";
import { EmbedFASTCaseStudies } from "../components/product-embedfast/EmbedFASTCaseStudies";
import { EmbedFASTHero } from "../components/product-embedfast/EmbedFASTHero";
import { EmbedFASTInsights } from "../components/product-embedfast/EmbedFASTInsights";
import { EmbedFASTPricing } from "../components/product-embedfast/EmbedFASTPricing";
import { EmbedFASTSupportPlans } from "../components/product-embedfast/EmbedFASTSupportPlans";
import { EmbedFASTTestimonials } from "../components/product-embedfast/EmbedFASTTestimonials";

export function ProductEmbedFAST() {
  return (
    <>
      <EmbedFASTHero />
      <TrustBanner />
      <EmbedFASTBenefits />
      <EmbedFASTCaseStudies />
      <EmbedFASTPricing />
      <EmbedFASTSupportPlans />
      <EmbedFASTInsights />
      <EmbedFASTTestimonials />
    </>
  );
}
