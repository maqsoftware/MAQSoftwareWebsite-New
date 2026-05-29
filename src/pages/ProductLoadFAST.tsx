import { TrustBanner } from "../components/TrustBanner";
import { LoadFASTBenefits } from "../components/product-loadfast/LoadFASTBenefits";
import { LoadFASTCaseStudies } from "../components/product-loadfast/LoadFASTCaseStudies";
import { LoadFASTHero } from "../components/product-loadfast/LoadFASTHero";
import { LoadFASTHowItWorks } from "../components/product-loadfast/LoadFASTHowItWorks";
import { LoadFASTInsights } from "../components/product-loadfast/LoadFASTInsights";
import { LoadFASTPricing } from "../components/product-loadfast/LoadFASTPricing";
import { LoadFASTTestimonials } from "../components/product-loadfast/LoadFASTTestimonials";

export function ProductLoadFAST() {
  return (
    <>
      <LoadFASTHero />
      <TrustBanner />
      <LoadFASTBenefits />
      <LoadFASTHowItWorks />
      <LoadFASTCaseStudies />
      <LoadFASTPricing />
      <LoadFASTInsights />
      <LoadFASTTestimonials />
    </>
  );
}
