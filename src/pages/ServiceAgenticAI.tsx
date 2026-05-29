import { AgenticAIHero } from "../components/service-agentic-ai/AgenticAIHero";
import { TrustBanner } from "../components/TrustBanner";
import { AgenticAICapabilities } from "../components/service-agentic-ai/AgenticAICapabilities";
import { AgenticAIOutcomes } from "../components/service-agentic-ai/AgenticAIOutcomes";
import { AgenticAICaseStudies } from "../components/service-agentic-ai/AgenticAICaseStudies";
import { AgenticAIInsights } from "../components/service-agentic-ai/AgenticAIInsights";
import { AgenticAITestimonials } from "../components/service-agentic-ai/AgenticAITestimonials";
import { CTA } from "../components/CTA";

export function ServiceAgenticAI() {
  return (
    <>
      <AgenticAIHero />
      <TrustBanner />
      <AgenticAICapabilities />
      <AgenticAIOutcomes />
      <AgenticAICaseStudies />
      <AgenticAIInsights />
      <AgenticAITestimonials />
      <CTA />
    </>
  );
}
