import { TechnologyHero } from "../../components/industries/technology/TechnologyHero";
import { TrustBanner } from "../../components/TrustBanner";
import { TechnologyImpactStats } from "../../components/industries/technology/TechnologyImpactStats";
import { TechnologySolutions } from "../../components/industries/technology/TechnologySolutions";
import { TechnologyCaseStudies } from "../../components/industries/technology/TechnologyCaseStudies";
import { CTA } from "../../components/CTA";

export function IndustryTechnology() {
  return (
    <>
      <TechnologyHero />
      <TrustBanner />
      <TechnologyImpactStats />
      <TechnologySolutions />
      <TechnologyCaseStudies />
      <CTA />
    </>
  );
}
