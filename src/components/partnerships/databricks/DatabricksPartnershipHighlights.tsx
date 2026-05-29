import { PartnershipHighlights } from "../PartnershipHighlights";

const highlights = [
    { metric: "34+", label: "Databricks Data Engineering Associates" },
    { metric: "7+", label: "Databricks Data Engineering Professionals" },
    { metric: "66+", label: "Databricks Sales Badges" },
    { metric: "", label: "Global client engagements" },
];

export function DatabricksPartnershipHighlights() {
    return <PartnershipHighlights eyebrow="Partnership Highlights" title="Our proven expertise" stats={highlights} />;
}
