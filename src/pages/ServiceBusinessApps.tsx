import { BusinessAppsHero } from "../components/service-business-apps/BusinessAppsHero";
import { TrustBanner } from "../components/TrustBanner";
import { BusinessAppsCapabilities } from "../components/service-business-apps/BusinessAppsCapabilities";
import { BusinessAppsOutcomes } from "../components/service-business-apps/BusinessAppsOutcomes";
import { BusinessAppsCaseStudies } from "../components/service-business-apps/BusinessAppsCaseStudies";
import { BusinessAppsInsights } from "../components/service-business-apps/BusinessAppsInsights";
import { CTA } from "../components/CTA";

export function ServiceBusinessApps() {
    return (
        <>
            <BusinessAppsHero />
            <TrustBanner />
            <BusinessAppsCapabilities />
            <BusinessAppsOutcomes />
            <BusinessAppsCaseStudies />
            <BusinessAppsInsights />
            {/* TESTIMONIALS — hidden until signed quotes are available.
          When ready, add a BusinessAppsTestimonials component in
          src/components/service-business-apps/ and render it here,
          immediately before <CTA /> (site-wide rule). */}
            <CTA />
        </>
    );
}
