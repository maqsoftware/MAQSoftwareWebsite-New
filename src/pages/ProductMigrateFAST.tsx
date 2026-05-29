import { TrustBanner } from "../components/TrustBanner";
import { MigrateFASTAutomationCapabilities } from "../components/product-migratefast/MigrateFASTAutomationCapabilities";
import { MigrateFASTBenefits } from "../components/product-migratefast/MigrateFASTBenefits";
import { MigrateFASTCaseStudies } from "../components/product-migratefast/MigrateFASTCaseStudies";
import { MigrateFASTHero } from "../components/product-migratefast/MigrateFASTHero";
import { MigrateFASTInsights } from "../components/product-migratefast/MigrateFASTInsights";
import { MigrateFASTProcess } from "../components/product-migratefast/MigrateFASTProcess";
import { MigrateFASTTestimonials } from "../components/product-migratefast/MigrateFASTTestimonials";

export function ProductMigrateFAST() {
  return (
    <>
      <MigrateFASTHero />
      <TrustBanner />
      <MigrateFASTBenefits />
      <MigrateFASTProcess />
      <MigrateFASTAutomationCapabilities />
      <MigrateFASTCaseStudies />
      <MigrateFASTInsights />
      <MigrateFASTTestimonials />
    </>
  );
}
