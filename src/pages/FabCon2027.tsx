import { ConferenceEventPage } from "../components/events/ConferenceEventPage";

const REGISTER_URL = "https://fabriccon.com/tickets";
const BROCHURE_URL =
  "https://maqsoftware.com/resources/MAQ%20Software%20Brochure%20%28One%20page%29.pdf";
const APPSOURCE_URL =
  "https://appsource.microsoft.com/en-us/marketplace/partner-dir/3778db04-784a-4ef7-9eaa-7a9b67cf9e35/overview";

export function FabCon2027() {
  return (
    <ConferenceEventPage
      eyebrow="FABCON 2027"
      title="Connect with MAQ Software at FABCON & SQLCON 2027"
      subtitle="FABCON & SQLCON brings the Microsoft data ecosystem together in one event, covering Microsoft Fabric, SQL, Azure AI, analytics, governance, and modern data engineering. MAQ Software will be at the conference to help teams translate learning into delivery outcomes."
      promo="Atlanta conference dates: March 8-12, 2027"
      registerUrl={REGISTER_URL}
      featuredSessions={[
        { label: "Session 1", value: "Fabric and SQL modernization strategies" },
        { label: "Session 2", value: "AI-driven analytics and governance best practices" },
      ]}
      talks={[
        {
          type: "Featured session",
          title: "From Fabric strategy to execution",
          desc: "Learn how to translate Fabric roadmap priorities into practical implementation plans for data engineering, BI, and governance.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["MAQ Software speakers will be announced soon"],
          href: "https://fabriccon.com/program/tracks",
        },
        {
          type: "Featured session",
          title: "SQL, AI, and analytics at enterprise scale",
          desc: "Explore architecture and operating patterns for SQL modernization and AI-enabled analytics with strong control and reliability.",
          time: "Detailed session timing will be announced soon",
          room: "Agenda and room details coming soon",
          speakers: ["Additional speaker details coming soon"],
          href: "https://fabriccon.com/program/tracks",
        },
      ]}
      offerings={[
        "Modernize Fabric and SQL workloads with a phased, low-risk strategy",
        "Operationalize governance and security for enterprise analytics",
        "Enable AI-powered insights with trusted data foundations",
        "Adopt real-time intelligence patterns for faster decisions",
        "Build long-term delivery capacity with standardized engineering playbooks",
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
          href: "https://fabriccon.com/tickets",
          desc: "Register for FABCON & SQLCON 2027 passes.",
        },
        {
          label: "Program tracks",
          href: "https://fabriccon.com/program/tracks",
          desc: "Review session tracks across Fabric, SQL, and Azure AI.",
        },
        {
          label: "More event details",
          href: "https://fabriccon.com/venue",
          desc: "Venue and hotel updates are coming soon and will be published here.",
        },
      ]}
      solutions={[
        {
          name: "Fabric Admin Agent",
          desc: "Track and monitor Fabric capacity health across tenants using an autonomous agent.",
          href: "/products/fabric-admin-agent",
        },
        {
          name: "MigrateFAST",
          desc: "Accelerate reporting and data platform migration with AI-powered tools.",
          href: "/products/migratefast",
        },
        {
          name: "LoadFAST",
          desc: "Simplify load testing for Power BI reports.",
          href: "/products/loadfast",
        },
      ]}
      contactSubject="FABCON 2027 meeting"
    />
  );
}
