import { ConferenceEventPage } from "../components/events/ConferenceEventPage";

const REGISTER_URL = "https://na.eventscloud.com/techcondallas26";
const BROCHURE_URL =
  "https://maqsoftware.com/resources/MAQ%20Software%20Brochure%20%28One%20page%29.pdf";
const APPSOURCE_URL =
  "https://appsource.microsoft.com/en-us/marketplace/partner-dir/3778db04-784a-4ef7-9eaa-7a9b67cf9e35/overview";

export function TechCon365Dallas() {
  return (
    <ConferenceEventPage
      eyebrow="TechCon 365 Dallas"
      title="Meet MAQ Software at TechCon 365 Dallas"
      subtitle="TechCon 365 Dallas is a Microsoft 365 and Power Platform training conference featuring Microsoft 365, Copilot, Microsoft Teams, Power Platform, Fabric, Azure, and AI tracks. MAQ Software will be there to discuss modernization strategies and practical implementation patterns."
      promo="Dallas conference dates: November 2-6, 2026"
      registerUrl={REGISTER_URL}
      featuredSessions={[
        { label: "Session 1", value: "Microsoft Fabric modernization strategies" },
        { label: "Session 2", value: "Copilot and Power Platform adoption patterns" },
      ]}
      talks={[
        {
          type: "Featured session",
          title: "Fabric, Power BI, and Copilot implementation playbook",
          desc: "Get a practical walkthrough for planning Microsoft Fabric and Power BI modernization with clear governance and measurable business outcomes.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["MAQ Software speakers will be announced soon"],
          href: "https://techcon365.com/Dallas/speakers",
        },
        {
          type: "Featured session",
          title: "Power Platform and AI adoption at enterprise scale",
          desc: "Learn proven approaches to scale Power Platform and Copilot across teams while maintaining security, governance, and adoption momentum.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["Additional speaker details coming soon"],
          href: "https://techcon365.com/Dallas/speakers",
        },
      ]}
      offerings={[
        "Accelerate Microsoft 365 and Copilot enablement with governance built in",
        "Enable Power Platform at enterprise scale with ALM and security guardrails",
        "Advance Fabric and Power BI modernization with practical operating models",
        "Establish responsible AI with clear policies, observability, and controls",
        "Drive sustainable user adoption with measurable business outcomes",
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
          href: "https://techcon365.com/Dallas/tickets",
          desc: "Review Diamond, Platinum, Gold, and workshop pass options and pricing.",
        },
        {
          label: "Speakers",
          href: "https://techcon365.com/Dallas/speakers",
          desc: "Browse speaker lineup and session expertise areas.",
        },
        {
          label: "More event details",
          href: "https://techcon365.com/Dallas/location-hotel",
          desc: "Venue and hotel information is being finalized and will be available soon.",
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
          name: "Fabric Admin Agent",
          desc: "Track and monitor Fabric capacity health across tenants using an autonomous agent.",
          href: "/products/fabric-admin-agent",
        },
      ]}
      contactSubject="TechCon 365 Dallas 2026 meeting"
    />
  );
}
