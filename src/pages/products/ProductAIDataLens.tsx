import { TrustBanner } from "../../components/TrustBanner";
import { AIDataLensBenefits } from "../../components/products/ai-datalens/AIDataLensBenefits";
import { AIDataLensCaseStudies } from "../../components/products/ai-datalens/AIDataLensCaseStudies";
import { AIDataLensFeatures } from "../../components/products/ai-datalens/AIDataLensFeatures";
import { AIDataLensHero } from "../../components/products/ai-datalens/AIDataLensHero";
import { AIDataLensInsights } from "../../components/products/ai-datalens/AIDataLensInsights";
import { AIDataLensTestimonials } from "../../components/products/ai-datalens/AIDataLensTestimonials";
export function ProductAIDataLens() {
  return (
    <>
      <AIDataLensHero />
      <TrustBanner />
      <AIDataLensBenefits />
      <AIDataLensFeatures />
      <AIDataLensCaseStudies />
      <AIDataLensInsights />
      <AIDataLensTestimonials />
    </>
  );
}
