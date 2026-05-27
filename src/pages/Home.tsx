import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { CaseStudies } from "../components/CaseStudies";
import { Products } from "../components/Products";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <Products />
      <CTA />
    </>
  );
}
