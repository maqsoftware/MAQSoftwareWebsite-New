import { ConferenceEventPage } from "../components/events/ConferenceEventPage";

const REGISTER_URL = "https://na.eventscloud.com/sea26";
const BROCHURE_URL =
  "/resources/MAQ%20Software%20Brochure.pdf";
const APPSOURCE_URL =
  "https://appsource.microsoft.com/en-us/marketplace/partner-dir/3778db04-784a-4ef7-9eaa-7a9b67cf9e35/overview";

export function TechCon365Seattle() {
  return (
    <ConferenceEventPage
      eyebrow="TechCon 365 Seattle"
      title="Join MAQ Software at TechCon 365, DATACON & PWRCON Seattle"
      subtitle="TechCon 365 Seattle combines Microsoft 365, DATACON, and PWRCON into one event with cross-program access. The conference focuses on Microsoft 365, SharePoint, Power Platform, Microsoft Data, Fabric, Azure, and Copilot/AI topics."
      promo="Seattle conference dates: August 24-28, 2026"
      registerUrl={REGISTER_URL}
      featuredSessions={[
        { label: "Session 1", value: "Microsoft 365, DATA, and Power Platform cross-track planning" },
        { label: "Session 2", value: "Fabric and AI adoption for enterprise analytics" },
      ]}
      talks={[
        {
          type: "Featured session",
          title: "Build a unified agenda across TechCon 365, DATACON, and PWRCON",
          desc: "Plan a role-based learning path that combines Microsoft 365, Data, and Power Platform sessions to maximize value for your team.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["MAQ Software speakers will be announced soon"],
          href: "https://techcon365.com/Seattle/speakers",
        },
        {
          type: "Featured session",
          title: "Fabric and Power BI acceleration patterns",
          desc: "See practical implementation patterns for Microsoft Fabric and Power BI that help teams ship faster with stronger governance.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["Additional speaker details coming soon"],
          href: "https://techcon365.com/Seattle/speakers",
        },
      ]}
      offerings={[
        "Create a cross-program learning path across Microsoft 365, DATA, and Power Platform",
        "Modernize analytics with Fabric and Power BI using production-ready architectures",
        "Scale Power Platform and Copilot with governance, ALM, and adoption planning",
        "Improve data platform reliability with monitoring and capacity management",
        "Operationalize business value with measurable outcome tracking",
      ]}
      resources={[
        {
          label: "Our company brochure",
          href: BROCHURE_URL,
          desc: "A quick overview of MAQ Software capabilities, recognitions, and Microsoft-aligned delivery.",
        },
        {
          label: "Microsoft AppSource Partner profile page",
          href: APPSOURCE_URL,
          desc: "Explore MAQ Software offerings available through the Microsoft marketplace.",
        },
        {
          label: "Tickets",
          href: "https://techcon365.com/Seattle/tickets",
          desc: "Compare Diamond, Platinum, Gold, and workshop pass options.",
        },
        {
          label: "Speakers",
          href: "https://techcon365.com/Seattle/speakers",
          desc: "Explore speakers across Microsoft 365, data, and Power Platform tracks.",
        },
        {
          label: "More event details",
          href: "https://techcon365.com/Seattle/venue",
          desc: "Venue and hotel updates are coming soon and will be posted here.",
        },
      ]}
      solutions={[
        {
          name: "MigrateFAST",
          desc: "Accelerate reporting and data platform migration with AI-powered tools.",
          href: "/products/migratefast",
        },
        {
          name: "EmbedFAST",
          desc: "Embed Power BI reports into enterprise solutions.",
          href: "/products/embedfast",
        },
        {
          name: "AI-DataLens",
          desc: "Unlock data-driven insights with AI-powered conversational analytics.",
          href: "/products/ai-datalens",
        },
      ]}
      contactSubject="TechCon 365 Seattle 2026 meeting"
    />
  );
}
