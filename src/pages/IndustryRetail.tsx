import { RetailHero } from "../components/industry/RetailHero";
import { TrustBanner } from "../components/TrustBanner";
import { RetailImpactStats } from "../components/industry/RetailImpactStats";
import { RetailSolutions } from "../components/industry/RetailSolutions";
import { RetailCaseStudies } from "../components/industry/RetailCaseStudies";
import { RetailMarketplaceOffers } from "../components/industry/RetailMarketplaceOffers";
import { RetailTestimonials } from "../components/industry/RetailTestimonials";
import { CTA } from "../components/CTA";

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
