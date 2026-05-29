import { TrustBanner } from "../../components/TrustBanner";
import { DatabricksPartnershipHero } from "../../components/partnerships/databricks/DatabricksPartnershipHero";
import { DatabricksPartnershipValueProps } from "../../components/partnerships/databricks/DatabricksPartnershipValueProps";
import { DatabricksPartnershipHighlights } from "../../components/partnerships/databricks/DatabricksPartnershipHighlights";
import { DatabricksPartnershipOverview } from "../../components/partnerships/databricks/DatabricksPartnershipOverview";
import { DatabricksPartnershipOfferings } from "../../components/partnerships/databricks/DatabricksPartnershipOfferings";
import { DatabricksPartnershipMarketplace } from "../../components/partnerships/databricks/DatabricksPartnershipMarketplace";
import { DatabricksPartnershipInsights } from "../../components/partnerships/databricks/DatabricksPartnershipInsights";
import { DatabricksPartnershipConnect } from "../../components/partnerships/databricks/DatabricksPartnershipConnect";

export function PartnershipDatabricks() {
  return (
    <>
      <DatabricksPartnershipHero />
      <TrustBanner />
      <DatabricksPartnershipValueProps />
      <DatabricksPartnershipHighlights />
      <DatabricksPartnershipOverview />
      <DatabricksPartnershipOfferings />
      <DatabricksPartnershipMarketplace />
      <DatabricksPartnershipInsights />
      <DatabricksPartnershipConnect />
    </>
  );
}
