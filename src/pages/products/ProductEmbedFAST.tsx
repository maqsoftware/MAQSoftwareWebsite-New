import { TrustBanner } from "../../components/TrustBanner";
import { EmbedFASTBenefits } from "../../components/products/embedfast/EmbedFASTBenefits";
import { EmbedFASTCaseStudies } from "../../components/products/embedfast/EmbedFASTCaseStudies";
import { EmbedFASTHero } from "../../components/products/embedfast/EmbedFASTHero";
import { EmbedFASTInsights } from "../../components/products/embedfast/EmbedFASTInsights";
import { EmbedFASTPricing } from "../../components/products/embedfast/EmbedFASTPricing";
import { EmbedFASTSupportPlans } from "../../components/products/embedfast/EmbedFASTSupportPlans";
import { EmbedFASTTestimonials } from "../../components/products/embedfast/EmbedFASTTestimonials";

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
