import { TrustBanner } from "../components/TrustBanner";
import { AIDataLensBenefits } from "../components/product-ai-datalens/AIDataLensBenefits";
import { AIDataLensCaseStudies } from "../components/product-ai-datalens/AIDataLensCaseStudies";
import { AIDataLensFeatures } from "../components/product-ai-datalens/AIDataLensFeatures";
import { AIDataLensHero } from "../components/product-ai-datalens/AIDataLensHero";
import { AIDataLensInsights } from "../components/product-ai-datalens/AIDataLensInsights";
import { AIDataLensTestimonials } from "../components/product-ai-datalens/AIDataLensTestimonials";
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
