import { HealthcareLifeSciencesHero } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesHero";
import { TrustBanner } from "../../components/TrustBanner";
import { HealthcareLifeSciencesImpactStats } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesImpactStats";
import { HealthcareLifeSciencesSolutions } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesSolutions";
import { HealthcareLifeSciencesCaseStudies } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesCaseStudies";
import { HealthcareLifeSciencesMarketplaceOffers } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesMarketplaceOffers";
import { HealthcareLifeSciencesTestimonials } from "../../components/industries/healthcare-life-sciences/HealthcareLifeSciencesTestimonials";
import { CTA } from "../../components/CTA";

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
