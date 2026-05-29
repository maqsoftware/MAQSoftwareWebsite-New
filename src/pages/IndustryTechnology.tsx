import { TechnologyHero } from "../components/industry/TechnologyHero";
import { TrustBanner } from "../components/TrustBanner";
import { TechnologyImpactStats } from "../components/industry/TechnologyImpactStats";
import { TechnologySolutions } from "../components/industry/TechnologySolutions";
import { TechnologyCaseStudies } from "../components/industry/TechnologyCaseStudies";
import { CTA } from "../components/CTA";

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
