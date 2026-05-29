import { WorkplaceTransformationHero } from "../components/service-workplace-transformation/WorkplaceTransformationHero";
import { TrustBanner } from "../components/TrustBanner";
import { WorkplaceTransformationCapabilities } from "../components/service-workplace-transformation/WorkplaceTransformationCapabilities";
import { WorkplaceTransformationOutcomes } from "../components/service-workplace-transformation/WorkplaceTransformationOutcomes";
import { WorkplaceTransformationCaseStudies } from "../components/service-workplace-transformation/WorkplaceTransformationCaseStudies";
import { WorkplaceTransformationInsights } from "../components/service-workplace-transformation/WorkplaceTransformationInsights";
import { CTA } from "../components/CTA";

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
