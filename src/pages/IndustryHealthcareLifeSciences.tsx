import { HealthcareLifeSciencesHero } from "../components/industry/HealthcareLifeSciencesHero";
import { TrustBanner } from "../components/TrustBanner";
import { HealthcareLifeSciencesImpactStats } from "../components/industry/HealthcareLifeSciencesImpactStats";
import { HealthcareLifeSciencesSolutions } from "../components/industry/HealthcareLifeSciencesSolutions";
import { HealthcareLifeSciencesCaseStudies } from "../components/industry/HealthcareLifeSciencesCaseStudies";
import { HealthcareLifeSciencesMarketplaceOffers } from "../components/industry/HealthcareLifeSciencesMarketplaceOffers";
import { HealthcareLifeSciencesTestimonials } from "../components/industry/HealthcareLifeSciencesTestimonials";
import { CTA } from "../components/CTA";

export function IndustryHealthcareLifeSciences() {
  return (
    <>
      <HealthcareLifeSciencesHero />
      <TrustBanner />
      <HealthcareLifeSciencesImpactStats />
      <HealthcareLifeSciencesSolutions />
      <HealthcareLifeSciencesCaseStudies />
      <HealthcareLifeSciencesMarketplaceOffers />
      <HealthcareLifeSciencesTestimonials />
      <CTA />
    </>
  );
}
