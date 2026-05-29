import { TrustBanner } from "../../components/TrustBanner";
import { MigrateFASTAutomationCapabilities } from "../../components/products/migratefast/MigrateFASTAutomationCapabilities";
import { MigrateFASTBenefits } from "../../components/products/migratefast/MigrateFASTBenefits";
import { MigrateFASTCaseStudies } from "../../components/products/migratefast/MigrateFASTCaseStudies";
import { MigrateFASTHero } from "../../components/products/migratefast/MigrateFASTHero";
import { MigrateFASTInsights } from "../../components/products/migratefast/MigrateFASTInsights";
import { MigrateFASTProcess } from "../../components/products/migratefast/MigrateFASTProcess";
import { MigrateFASTTestimonials } from "../../components/products/migratefast/MigrateFASTTestimonials";

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
