import { FinancialServicesHero } from "../../components/industries/financial-services/FinancialServicesHero";
import { TrustBanner } from "../../components/TrustBanner";
import { FinancialServicesImpactStats } from "../../components/industries/financial-services/FinancialServicesImpactStats";
import { FinancialServicesSolutions } from "../../components/industries/financial-services/FinancialServicesSolutions";
import { FinancialServicesCaseStudies } from "../../components/industries/financial-services/FinancialServicesCaseStudies";
import { FinancialServicesMarketplaceOffers } from "../../components/industries/financial-services/FinancialServicesMarketplaceOffers";
import { FinancialServicesTestimonials } from "../../components/industries/financial-services/FinancialServicesTestimonials";
import { CTA } from "../../components/CTA";

export function IndustryFinancialServices() {
  return (
    <>
      <FinancialServicesHero />
      <TrustBanner />
      <FinancialServicesImpactStats />
      <FinancialServicesSolutions />
      <FinancialServicesCaseStudies />
      <FinancialServicesMarketplaceOffers />
      <FinancialServicesTestimonials />
      <CTA />
    </>
  );
}
