import { TrustBanner } from "../../components/TrustBanner";
import { SnowflakePartnershipHero } from "../../components/partnerships/snowflake/SnowflakePartnershipHero";
import { SnowflakePartnershipValueProps } from "../../components/partnerships/snowflake/SnowflakePartnershipValueProps";
import { SnowflakePartnershipHighlights } from "../../components/partnerships/snowflake/SnowflakePartnershipHighlights";
import { SnowflakePartnershipOverview } from "../../components/partnerships/snowflake/SnowflakePartnershipOverview";
import { SnowflakePartnershipOfferings } from "../../components/partnerships/snowflake/SnowflakePartnershipOfferings";
import { SnowflakePartnershipMarketplace } from "../../components/partnerships/snowflake/SnowflakePartnershipMarketplace";
import { SnowflakePartnershipInsights } from "../../components/partnerships/snowflake/SnowflakePartnershipInsights";
import { SnowflakePartnershipConnect } from "../../components/partnerships/snowflake/SnowflakePartnershipConnect";

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
