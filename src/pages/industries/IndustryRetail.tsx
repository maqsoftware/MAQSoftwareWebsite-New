import { RetailHero } from "../../components/industries/retail/RetailHero";
import { TrustBanner } from "../../components/TrustBanner";
import { RetailImpactStats } from "../../components/industries/retail/RetailImpactStats";
import { RetailSolutions } from "../../components/industries/retail/RetailSolutions";
import { RetailCaseStudies } from "../../components/industries/retail/RetailCaseStudies";
import { RetailMarketplaceOffers } from "../../components/industries/retail/RetailMarketplaceOffers";
import { RetailTestimonials } from "../../components/industries/retail/RetailTestimonials";
import { CTA } from "../../components/CTA";

export function IndustryRetail() {
  return (
    <>
      <RetailHero />
      <TrustBanner />
      <RetailImpactStats />
      <RetailSolutions />
      <RetailCaseStudies />
      <RetailMarketplaceOffers />
      <RetailTestimonials />
      <CTA />
    </>
  );
}
