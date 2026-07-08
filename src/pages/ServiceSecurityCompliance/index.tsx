import { ServiceHero } from "../../components/service/ServiceHero";

import { ServiceCapabilities } from "../../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../../components/service/ServiceTestimonials";
import { CTA } from "../../components/CTA";
// import { TrustBanner } from "../../components/TrustBanner";
import { SecurityVisual } from "./styles";
import { capabilities, outcomes, caseStudies, insights, testimonials } from "./data";

export function ServiceSecurityCompliance() {
  return (
    <>
      <ServiceHero
        eyebrow="Security & Governance"
        heading="Zero Trust security and AI governance, end to end"
        subhead="ISO 27001 / 27701 / 27018 certified delivery. We implement Zero Trust, Defender, Sentinel, and Purview — including AI governance with Purview AI Hub — aligned to your regulatory landscape and Microsoft security stack."
        ctaMailSubject="Security & Compliance - MAQ Software"
        visual={<SecurityVisual />}
      />

      <ServiceCapabilities
        sectionId="security-capabilities"
        title="Our security & governance capabilities"
        subhead="Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery."
        capabilities={capabilities}
        footerLabel="See security case studies"
        footerHref="/insights/case-studies?filter=Security#insights-content"
        mailSubjectSuffix="Security & Governance"
      />
      <ServiceOutcomes
        title="Your business outcomes"
        subhead="What organizations gain when security and compliance are delivered with engineering discipline."
        outcomes={outcomes}
      />
      <ServiceCaseStudies
        title="How clients are strengthening their security posture"
        studies={caseStudies}
        serviceFilter="Security"
        allCasesLabel="See all case studies"
        serviceSpecificLabel="See security case studies"
      />
      <ServiceInsights
        title="Our security insights"
        subhead="See our research that goes into optimizing our security service."
        insights={insights}
      />
      {/* <ServiceTestimonials quotes={testimonials} /> */}
      <CTA />
    </>
  );
}
