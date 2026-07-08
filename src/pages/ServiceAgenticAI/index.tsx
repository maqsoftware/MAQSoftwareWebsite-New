import { ServiceHero } from "../../components/service/ServiceHero";
// import { TrustBanner } from "../../components/TrustBanner";

import { ServiceCapabilities } from "../../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../../components/service/ServiceOutcomes";
import { ServiceCaseStudies } from "../../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../../components/service/ServiceTestimonials";
import { CTA } from "../../components/CTA";
import { SERVICE_CASE_STUDIES_CONFIG } from "./data";
import { heroVisualImageStyle, heroVisualShellStyle } from "./styles";

export function ServiceAgenticAI() {
  return (
    <>
      <ServiceHero
        visual={
          <div style={heroVisualShellStyle}>
            <img
              src="/images/Service%20cards/Conversational AI.png"
              alt="AI Solutions and Agents"
              style={heroVisualImageStyle}
            />
          </div>
        }
      />

      <ServiceCapabilities />
      <ServiceOutcomes />
      <ServiceCaseStudies {...SERVICE_CASE_STUDIES_CONFIG} />
      <ServiceInsights />
      {/* <ServiceTestimonials /> */}
      <CTA />
    </>
  );
}
