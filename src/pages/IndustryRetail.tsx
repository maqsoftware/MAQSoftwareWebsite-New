import { IndustryHero } from "../components/industry/IndustryHero";
import { TrustBanner } from "../components/TrustBanner";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { Testimonials } from "../components/industry/Testimonials";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";
import { CTA } from "../components/CTA";

export function IndustryRetail() {
  return (
    <>
      <IndustryHero />
      <TrustBanner />
      <ImpactStats />
      <SolutionShowcase />
      <IndustryCaseStudies />
      <MarketplaceOffers />
      <Testimonials />
      <CTA />
    </>
  );
}
