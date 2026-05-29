import { WorkplaceTransformationHero } from "../../components/services/workplace-transformation/WorkplaceTransformationHero";
import { TrustBanner } from "../../components/TrustBanner";
import { WorkplaceTransformationCapabilities } from "../../components/services/workplace-transformation/WorkplaceTransformationCapabilities";
import { WorkplaceTransformationOutcomes } from "../../components/services/workplace-transformation/WorkplaceTransformationOutcomes";
import { WorkplaceTransformationCaseStudies } from "../../components/services/workplace-transformation/WorkplaceTransformationCaseStudies";
import { WorkplaceTransformationInsights } from "../../components/services/workplace-transformation/WorkplaceTransformationInsights";
import { CTA } from "../../components/CTA";

export function ServiceWorkplaceTransformation() {
    return (
        <>
            <WorkplaceTransformationHero />
            <TrustBanner />
            <WorkplaceTransformationCapabilities />
            <WorkplaceTransformationOutcomes />
            <WorkplaceTransformationCaseStudies />
            <WorkplaceTransformationInsights />
            {/* TESTIMONIALS — placeholder, hidden until signed quotes are available.
          When ready, render immediately before <CTA /> (site-wide rule). */}
            <CTA />
        </>
    );
}
