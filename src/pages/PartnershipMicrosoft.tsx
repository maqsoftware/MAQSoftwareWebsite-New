import { TrustBanner } from "../components/TrustBanner";
import { MicrosoftPartnershipHero } from "../components/partnerships/MicrosoftPartnershipHero";
import { MicrosoftPartnershipValueProps } from "../components/partnerships/MicrosoftPartnershipValueProps";
import { MicrosoftPartnershipHighlights } from "../components/partnerships/MicrosoftPartnershipHighlights";
import { MicrosoftPartnershipOverview } from "../components/partnerships/MicrosoftPartnershipOverview";
import { MicrosoftPartnershipOfferings } from "../components/partnerships/MicrosoftPartnershipOfferings";
import { MicrosoftPartnershipMarketplace } from "../components/partnerships/MicrosoftPartnershipMarketplace";
import { MicrosoftPartnershipInsights } from "../components/partnerships/MicrosoftPartnershipInsights";
import { MicrosoftPartnershipConnect } from "../components/partnerships/MicrosoftPartnershipConnect";

export function PartnershipMicrosoft() {
  return (
    <>
      <MicrosoftPartnershipHero />
      <TrustBanner />
      <MicrosoftPartnershipValueProps />
      <MicrosoftPartnershipHighlights />
      <MicrosoftPartnershipOverview />
      <MicrosoftPartnershipOfferings />
      <MicrosoftPartnershipMarketplace />
      <MicrosoftPartnershipInsights />
      <MicrosoftPartnershipConnect />
    </>
  );
}
