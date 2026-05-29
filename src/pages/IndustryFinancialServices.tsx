import { FinancialServicesHero } from "../components/industry/FinancialServicesHero";
import { TrustBanner } from "../components/TrustBanner";
import { FinancialServicesImpactStats } from "../components/industry/FinancialServicesImpactStats";
import { FinancialServicesSolutions } from "../components/industry/FinancialServicesSolutions";
import { FinancialServicesCaseStudies } from "../components/industry/FinancialServicesCaseStudies";
import { FinancialServicesMarketplaceOffers } from "../components/industry/FinancialServicesMarketplaceOffers";
import { FinancialServicesTestimonials } from "../components/industry/FinancialServicesTestimonials";
import { CTA } from "../components/CTA";

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
