import { AgenticAIHero } from "../../components/services/agentic-ai/AgenticAIHero";
import { TrustBanner } from "../../components/TrustBanner";
import { AgenticAICapabilities } from "../../components/services/agentic-ai/AgenticAICapabilities";
import { AgenticAIOutcomes } from "../../components/services/agentic-ai/AgenticAIOutcomes";
import { AgenticAICaseStudies } from "../../components/services/agentic-ai/AgenticAICaseStudies";
import { AgenticAIInsights } from "../../components/services/agentic-ai/AgenticAIInsights";
import { AgenticAITestimonials } from "../../components/services/agentic-ai/AgenticAITestimonials";
import { CTA } from "../../components/CTA";

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
