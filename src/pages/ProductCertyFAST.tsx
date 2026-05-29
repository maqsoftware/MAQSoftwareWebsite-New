import { TrustBanner } from "../components/TrustBanner";
import { CertyFASTBenefits } from "../components/product-certyfast/CertyFASTBenefits";
import { CertyFASTCaseStudies } from "../components/product-certyfast/CertyFASTCaseStudies";
import { CertyFASTHero } from "../components/product-certyfast/CertyFASTHero";
import { CertyFASTHowItWorks } from "../components/product-certyfast/CertyFASTHowItWorks";
import { CertyFASTInsights } from "../components/product-certyfast/CertyFASTInsights";
import { CertyFASTTestimonials } from "../components/product-certyfast/CertyFASTTestimonials";

export function ProductCertyFAST() {
  return (
    <>
      <CertyFASTHero />
      <TrustBanner />
      <CertyFASTBenefits />
      <CertyFASTHowItWorks />
      <CertyFASTCaseStudies />
      <CertyFASTInsights />
      <CertyFASTTestimonials />
    </>
  );
}
