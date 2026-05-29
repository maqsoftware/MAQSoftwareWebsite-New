import { TrustBanner } from "../../components/TrustBanner";
import { LoadFASTBenefits } from "../../components/products/loadfast/LoadFASTBenefits";
import { LoadFASTCaseStudies } from "../../components/products/loadfast/LoadFASTCaseStudies";
import { LoadFASTHero } from "../../components/products/loadfast/LoadFASTHero";
import { LoadFASTHowItWorks } from "../../components/products/loadfast/LoadFASTHowItWorks";
import { LoadFASTInsights } from "../../components/products/loadfast/LoadFASTInsights";
import { LoadFASTPricing } from "../../components/products/loadfast/LoadFASTPricing";
import { LoadFASTTestimonials } from "../../components/products/loadfast/LoadFASTTestimonials";

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
