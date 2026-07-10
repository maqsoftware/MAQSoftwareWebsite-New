import { ServiceHero } from "../components/service/ServiceHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";

const SERVICE_CASE_STUDIES_CONFIG = {
  serviceFilter: "Agentic AI & Machine Learning",
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
              background: "var(--maq-surface-cream)",
              border: "1px solid var(--maq-red-pale)",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
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
                borderRadius: "10px",
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
