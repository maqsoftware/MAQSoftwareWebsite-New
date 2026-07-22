import { ServiceHero } from "../components/service/ServiceHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";

const SERVICE_CASE_STUDIES_CONFIG = {
  serviceFilter: "AI solutions & agents",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See agentic AI case studies",
};

export function ServiceAgenticAI() {
  return (
    <>
      <ServiceHero
        visual={
          <div
            style={{
              background: "transparent",
              border: "none",
              borderRadius: "0",
              padding: "0",
              boxShadow: "none",
            }}
          >
            <img
              src="/images/Service%20cards/Conversational AI.png"
              alt="AI Solutions and Agents"
              style={{
                width: "100%",
                aspectRatio: "16 / 10",
                objectFit: "contain",
                display: "block",
                borderRadius: "0",
              }}
            />
          </div>
        }
      />

      <ServiceCapabilities />
      <ServiceOutcomes />
      <ServiceCaseStudies {...SERVICE_CASE_STUDIES_CONFIG} />
      <ServiceInsights />
      {/* <ServiceTestimonials /> */}
    </>
  );
}
