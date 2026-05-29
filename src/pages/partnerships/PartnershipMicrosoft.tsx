import { TrustBanner } from "../../components/TrustBanner";
import { MicrosoftPartnershipHero } from "../../components/partnerships/microsoft/MicrosoftPartnershipHero";
import { MicrosoftPartnershipValueProps } from "../../components/partnerships/microsoft/MicrosoftPartnershipValueProps";
import { MicrosoftPartnershipHighlights } from "../../components/partnerships/microsoft/MicrosoftPartnershipHighlights";
import { MicrosoftPartnershipOverview } from "../../components/partnerships/microsoft/MicrosoftPartnershipOverview";
import { MicrosoftPartnershipOfferings } from "../../components/partnerships/microsoft/MicrosoftPartnershipOfferings";
import { MicrosoftPartnershipMarketplace } from "../../components/partnerships/microsoft/MicrosoftPartnershipMarketplace";
import { MicrosoftPartnershipInsights } from "../../components/partnerships/microsoft/MicrosoftPartnershipInsights";
import { MicrosoftPartnershipConnect } from "../../components/partnerships/microsoft/MicrosoftPartnershipConnect";

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
