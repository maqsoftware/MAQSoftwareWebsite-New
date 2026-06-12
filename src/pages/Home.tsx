import { Hero } from "../components/HeroV2";
// import { TrustBanner } from "../components/TrustBanner";

import { Services } from "../components/Services";
import { Industries } from "../components/Industries";
import { Products } from "../components/Products";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      {/* <TrustBanner /> */}

      <Services />
      <Products />
      <Industries />
      <CTA />
    </>
  );
}
