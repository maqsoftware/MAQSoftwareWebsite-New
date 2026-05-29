import { TrustBanner } from "../../components/TrustBanner";
import { CertyFASTBenefits } from "../../components/products/certyfast/CertyFASTBenefits";
import { CertyFASTCaseStudies } from "../../components/products/certyfast/CertyFASTCaseStudies";
import { CertyFASTHero } from "../../components/products/certyfast/CertyFASTHero";
import { CertyFASTHowItWorks } from "../../components/products/certyfast/CertyFASTHowItWorks";
import { CertyFASTInsights } from "../../components/products/certyfast/CertyFASTInsights";
import { CertyFASTTestimonials } from "../../components/products/certyfast/CertyFASTTestimonials";

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
