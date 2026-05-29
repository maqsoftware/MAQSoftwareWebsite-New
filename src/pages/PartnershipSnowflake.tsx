import { TrustBanner } from "../components/TrustBanner";
import { SnowflakePartnershipHero } from "../components/partnerships/SnowflakePartnershipHero";
import { SnowflakePartnershipValueProps } from "../components/partnerships/SnowflakePartnershipValueProps";
import { SnowflakePartnershipHighlights } from "../components/partnerships/SnowflakePartnershipHighlights";
import { SnowflakePartnershipOverview } from "../components/partnerships/SnowflakePartnershipOverview";
import { SnowflakePartnershipOfferings } from "../components/partnerships/SnowflakePartnershipOfferings";
import { SnowflakePartnershipMarketplace } from "../components/partnerships/SnowflakePartnershipMarketplace";
import { SnowflakePartnershipInsights } from "../components/partnerships/SnowflakePartnershipInsights";
import { SnowflakePartnershipConnect } from "../components/partnerships/SnowflakePartnershipConnect";

export function PartnershipSnowflake() {
  return (
    <>
      <SnowflakePartnershipHero />
      <TrustBanner />
      <SnowflakePartnershipValueProps />
      <SnowflakePartnershipHighlights />
      <SnowflakePartnershipOverview />
      <SnowflakePartnershipOfferings />
      <SnowflakePartnershipMarketplace />
      <SnowflakePartnershipInsights />
      <SnowflakePartnershipConnect />
    </>
  );
}
