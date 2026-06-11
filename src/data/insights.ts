export interface InsightsResourceLink {
  key:
    | "case-studies"
    | "consulting-offers"
    | "power-bi-custom-visual-guide"
    | "best-practice-guides"
    | "events";
  label: string;
  href: string;
  description: string;
}

export const insightsResourceLinks: InsightsResourceLink[] = [
  {
    key: "case-studies",
    label: "Case Studies",
    href: "/insights/case-studies",
    description: "Client outcomes across AI, data, cloud, and reporting.",
  },
  {
    key: "best-practice-guides",
    label: "Best practices",
    href: "/insights/best-practice-guides",
    description: "Implementation playbooks and technical guidance.",
  },
  {
    key: "events",
    label: "Events",
    href: "/events",
    description: "Conferences, webinars, and workshops with MAQ experts.",
  },
  {
    key: "consulting-offers",
    label: "Marketplace offers",
    href: "https://marketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=Maq%20software",
    description: "Microsoft Marketplace engagements from MAQ Software.",
  },
  {
    key: "power-bi-custom-visual-guide",
    label: "Power BI custom visual",
    href: "/insights/power-bi-custom-visual-guide",
    description: "Certified custom visuals and category-based discovery.",
  },
];

export interface CaseStudyItem {
  title: string;
  href: string;
  tag: string;
  service: string;
  date: string;
  teaser: string;
  imageUrl: string;
}

export const caseStudyFilters = [
  "All",
  "Agentic AI & Machine Learning",
  "Data & AI Platforms",
  "Insights & Analytics",
  "Application modernization",
  "Cloud Modernization",
  "Security",
];

export const caseStudyItems: CaseStudyItem[] = [
  {
    "title": "Reshaping retail with Agentic AI solutions",
    "href": "https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html",
    "tag": "Reshaping retail",
    "service": "Agentic AI & Machine Learning",
    "date": "2026-02",
    "teaser": "Case study: Reshaping retail with Agentic AI solutions.",
    "imageUrl": "/case-studies/d45535f5bd13.png"
  },
  {
    "title": "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
    "href": "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
    "tag": "Modernizing retail",
    "service": "Insights & Analytics",
    "date": "2025-12",
    "teaser": "Case study: Modernizing retail business intelligence with Microsoft Fabric and Power BI.",
    "imageUrl": "/case-studies/d8dbcc4c68e4.png"
  },
  {
    "title": "Building scalable e-commerce product recommendations with Microsoft Fabric SQL",
    "href": "https://blog.maqsoftware.com/2025/09/building-scalable-e-commerce-product.html",
    "tag": "Building scalable",
    "service": "Data & AI Platforms",
    "date": "2025-09",
    "teaser": "Case study: Building scalable e-commerce product recommendations with Microsoft Fabric SQL.",
    "imageUrl": "/case-studies/ce1da73c46ae.png"
  },
  {
    "title": "Transforming grocery retail analytics with Microsoft Fabric",
    "href": "https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html",
    "tag": "Transforming grocery",
    "service": "Data & AI Platforms",
    "date": "2025-07",
    "teaser": "Case study: Transforming grocery retail analytics with Microsoft Fabric.",
    "imageUrl": "/case-studies/a3bab077604e.png"
  },
  {
    "title": "Enhancing retail sales reporting by migrating from MicroStrategy to Power BI",
    "href": "https://blog.maqsoftware.com/2025/06/improving-retail-sales-reporting-by.html",
    "tag": "Enhancing retail",
    "service": "Insights & Analytics",
    "date": "2025-06",
    "teaser": "Case study: Enhancing retail sales reporting by migrating from MicroStrategy to Power BI.",
    "imageUrl": "/case-studies/94d57559605a.png"
  },
  {
    "title": "Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer",
    "href": "https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html",
    "tag": "Transforming supply",
    "service": "Insights & Analytics",
    "date": "2025-03",
    "teaser": "Case study: Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer.",
    "imageUrl": "/case-studies/665e335d919d.png"
  },
  {
    "title": "Enhancing demand forecasting and planning with AI foundation model on Microsoft Azure",
    "href": "https://blog.maqsoftware.com/2025/03/enhancing-demand-forecasting-and.html",
    "tag": "Enhancing demand",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-03",
    "teaser": "Case study: Enhancing demand forecasting and planning with AI foundation model on Microsoft Azure.",
    "imageUrl": "/case-studies/9b785ad72a75.png"
  },
  {
    "title": "Revolutionizing demand forecasting and planning with AI foundation model on Microsoft Azure",
    "href": "https://blog.maqsoftware.com/2025/03/revolutionizing-demand-forecasting-and.html",
    "tag": "Revolutionizing demand",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-03",
    "teaser": "Case study: Revolutionizing demand forecasting and planning with AI foundation model on Microsoft Azure.",
    "imageUrl": "/case-studies/9ed84edb1f4b.png"
  },
  {
    "title": "Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric",
    "href": "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
    "tag": "Enabling real-time",
    "service": "Data & AI Platforms",
    "date": "2024-05",
    "teaser": "Case study: Enabling real-time visibility: How a retail leader transformed Direct Store Delivery with Microsoft Fabric.",
    "imageUrl": "/case-studies/2f8ae13f519b.png"
  },
  {
    "title": "Empowering retail growth with an optimized loyalty program",
    "href": "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
    "tag": "Empowering retail",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-02",
    "teaser": "Case study: Empowering retail growth with an optimized loyalty program.",
    "imageUrl": "/case-studies/e0e7e985201a.png"
  },
  {
    "title": "Microsoft Fabric: Powering Real-Time Analytics for Retailers",
    "href": "https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html",
    "tag": "Microsoft Fabric",
    "service": "Data & AI Platforms",
    "date": "2023-11",
    "teaser": "Case study: Microsoft Fabric: Powering Real-Time Analytics for Retailers.",
    "imageUrl": "/case-studies/3414d9b0aa4b.png"
  },
  {
    "title": "Real-time reporting for an organic supermarket chain",
    "href": "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
    "tag": "Real-time reporting",
    "service": "Insights & Analytics",
    "date": "2022-06",
    "teaser": "Case study: Real-time reporting for an organic supermarket chain.",
    "imageUrl": "/case-studies/68838f6b962d.png"
  },
  {
    "title": "Accurately Forecast Customer Sales with Machine Learning (ML)",
    "href": "https://blog.maqsoftware.com/2021/12/machine-learning-sales-forecast.html",
    "tag": "Accurately Forecast",
    "service": "Agentic AI & Machine Learning",
    "date": "2021-12",
    "teaser": "Case study: Accurately Forecast Customer Sales with Machine Learning (ML).",
    "imageUrl": "/case-studies/5c5e2d17dbb5.png"
  },
  {
    "title": "Accurately Forecast Inventory Needs Using a Custom Plug-in",
    "href": "https://blog.maqsoftware.com/2020/10/inventory-management-excel-plug-in.html",
    "tag": "Accurately Forecast",
    "service": "Agentic AI & Machine Learning",
    "date": "2020-10",
    "teaser": "Case study: Accurately Forecast Inventory Needs Using a Custom Plug-in.",
    "imageUrl": "/case-studies/b91670617a12.png"
  },
  {
    "title": "Boosting Black Friday Sales with AI",
    "href": "https://blog.maqsoftware.com/2018/11/boosting-black-friday-sales.html",
    "tag": "Boosting Black",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-11",
    "teaser": "Case study: Boosting Black Friday Sales with AI.",
    "imageUrl": "/case-studies/c4a669abcc59.png"
  },
  {
    "title": "AI Recommendation System Streamlines Purchases",
    "href": "https://blog.maqsoftware.com/2018/08/case-study-ai-recommendation-system.html",
    "tag": "AI Recommendation",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-08",
    "teaser": "Case study: AI Recommendation System Streamlines Purchases.",
    "imageUrl": "/case-studies/54e19fc9e382.png"
  },
  {
    "title": "Retailer Reduces Costs by Automating Customer Feedback",
    "href": "https://blog.maqsoftware.com/2018/07/case-study-retailer-reduces-costs-by.html",
    "tag": "Retailer Reduces",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-07",
    "teaser": "Case study: Retailer Reduces Costs by Automating Customer Feedback.",
    "imageUrl": "/case-studies/1432a2479918.png"
  },
  {
    "title": "Transforming finance with agentic AI solutions",
    "href": "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
    "tag": "Transforming finance",
    "service": "Agentic AI & Machine Learning",
    "date": "2026-02",
    "teaser": "Case study: Transforming finance with agentic AI solutions.",
    "imageUrl": "/case-studies/7623729ccf95.png"
  },
  {
    "title": "Enhancing fintech analytics to provide millions of borrowers with better loan options",
    "href": "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
    "tag": "Enhancing fintech",
    "service": "Data & AI Platforms",
    "date": "2022-06",
    "teaser": "Case study: Enhancing fintech analytics to provide millions of borrowers with better loan options.",
    "imageUrl": "/case-studies/d1653be81622.png"
  },
  {
    "title": "Reinventing legal operations with agentic AI solutions",
    "href": "https://blog.maqsoftware.com/2026/02/reinventing-legal-operations-with.html",
    "tag": "Reinventing legal",
    "service": "Agentic AI & Machine Learning",
    "date": "2026-02",
    "teaser": "Case study: Reinventing legal operations with agentic AI solutions.",
    "imageUrl": "/case-studies/1733f6947213.png"
  },
  {
    "title": "Automating product feature categorization with AI for an automotive components manufacturer",
    "href": "https://blog.maqsoftware.com/2024/10/optimizing-product-feature.html",
    "tag": "Automating product",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-10",
    "teaser": "Case study: Automating product feature categorization with AI for an automotive components manufacturer.",
    "imageUrl": "/case-studies/3a8425ec175e.png"
  },
  {
    "title": "Simplifying Power BI integration for the automotive industry using EmbedFAST",
    "href": "https://blog.maqsoftware.com/2024/10/simplifying-power-bi-integration-for.html",
    "tag": "Simplifying Power",
    "service": "Insights & Analytics",
    "date": "2024-10",
    "teaser": "Case study: Simplifying Power BI integration for the automotive industry using EmbedFAST.",
    "imageUrl": "/case-studies/e08d2315cbb0.png"
  },
  {
    "title": "Transforming data management in manufacturing with an AI-driven chatbot solution",
    "href": "https://blog.maqsoftware.com/2024/09/transforming-data-management-in.html",
    "tag": "Transforming data",
    "service": "Data & AI Platforms",
    "date": "2024-09",
    "teaser": "Case study: Transforming data management in manufacturing with an AI-driven chatbot solution.",
    "imageUrl": "/case-studies/8d5ce249466e.png"
  },
  {
    "title": "Accelerating software development with agentic AI solutions",
    "href": "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
    "tag": "Accelerating software",
    "service": "Agentic AI & Machine Learning",
    "date": "2026-02",
    "teaser": "Case study: Accelerating software development with agentic AI solutions.",
    "imageUrl": "/case-studies/85bc70719613.png"
  },
  {
    "title": "Modernizing the software development lifecycle with GitHub Copilot",
    "href": "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
    "tag": "Modernizing the",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-11",
    "teaser": "Case study: Modernizing the software development lifecycle with GitHub Copilot.",
    "imageUrl": "/case-studies/0b3597f8b2c4.png"
  },
  {
    "title": "Scaling AI for every customer and every developer with MAQ Software",
    "href": "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
    "tag": "Scaling AI",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-08",
    "teaser": "Case study: Scaling AI for every customer and every developer with MAQ Software.",
    "imageUrl": "/case-studies/b151be7428eb.png"
  },
  {
    "title": "Delivering embedded Power BI reporting with EmbedFAST",
    "href": "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
    "tag": "Delivering embedded",
    "service": "Insights & Analytics",
    "date": "2025-07",
    "teaser": "Case study: Delivering embedded Power BI reporting with EmbedFAST.",
    "imageUrl": "/case-studies/b36633fcf4b1.png"
  },
  {
    "title": "Get ideas to code from months to hours with DevelopFAST",
    "href": "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
    "tag": "Get ideas",
    "service": "Data & AI Platforms",
    "date": "2025-07",
    "teaser": "Case study: Get ideas to code from months to hours with DevelopFAST.",
    "imageUrl": "/case-studies/1f08959b3af4.png"
  },
  {
    "title": "Empowering self-service using Custom Copilot agent with Power BI Embedded",
    "href": "https://blog.maqsoftware.com/2025/03/empowering-self-service-using-custom.html",
    "tag": "Empowering self-service",
    "service": "Insights & Analytics",
    "date": "2025-03",
    "teaser": "Case study: Empowering self-service using Custom Copilot agent with Power BI Embedded.",
    "imageUrl": "/case-studies/b39c1892cd39.png"
  },
  {
    "title": "Transforming data operations with Microsoft Fabric and CI/CD for ISVs",
    "href": "https://blog.maqsoftware.com/2024/11/microsoft-fabric-isv-cicd.html",
    "tag": "Transforming data",
    "service": "Data & AI Platforms",
    "date": "2024-11",
    "teaser": "Case study: Transforming data operations with Microsoft Fabric and CI/CD for ISVs.",
    "imageUrl": "/case-studies/9d29551b37a7.png"
  },
  {
    "title": "Real-Time Intelligence in Microsoft Fabric for ISVs",
    "href": "https://blog.maqsoftware.com/2024/11/microsoft-fabric-rti.html",
    "tag": "Real-Time Intelligence",
    "service": "Data & AI Platforms",
    "date": "2024-11",
    "teaser": "Case study: Real-Time Intelligence in Microsoft Fabric for ISVs.",
    "imageUrl": "/case-studies/88f71de79b62.png"
  },
  {
    "title": "Transforming customer support with AIOps-driven Power BI embedding",
    "href": "https://blog.maqsoftware.com/2023/02/transforming-customer-support-with.html",
    "tag": "Transforming customer",
    "service": "Insights & Analytics",
    "date": "2023-02",
    "teaser": "Case study: Transforming customer support with AIOps-driven Power BI embedding.",
    "imageUrl": "/case-studies/c3e85de157d1.png"
  },
  {
    "title": "ADX implementation for a global Cloud Management Software Provider",
    "href": "https://blog.maqsoftware.com/2022/11/adx-implementation-cloud-management-software-provider.html",
    "tag": "ADX implementation",
    "service": "Data & AI Platforms",
    "date": "2022-11",
    "teaser": "Case study: ADX implementation for a global Cloud Management Software Provider.",
    "imageUrl": "/case-studies/8e964a86995b.png"
  },
  {
    "title": "Resolve Support Tickets Faster with Predictive Risk Algorithms",
    "href": "https://blog.maqsoftware.com/2020/12/resolve-support-tickets-faster-with.html",
    "tag": "Resolve Support",
    "service": "Data & AI Platforms",
    "date": "2020-12",
    "teaser": "Case study: Resolve Support Tickets Faster with Predictive Risk Algorithms.",
    "imageUrl": "/case-studies/133596f5d75b.png"
  },
  {
    "title": "Simplify Software Health Checks with a Downloadable Application",
    "href": "https://blog.maqsoftware.com/2019/11/engineering-insights-wpf-application.html",
    "tag": "Simplify Software",
    "service": "Data & AI Platforms",
    "date": "2019-11",
    "teaser": "Case study: Simplify Software Health Checks with a Downloadable Application.",
    "imageUrl": "/case-studies/8318f71ade08.png"
  },
  {
    "title": "Easily Search Through Large Data Collections With Azure Architecture",
    "href": "https://blog.maqsoftware.com/2019/09/engineering-insights-azure-search-based.html",
    "tag": "Easily Search",
    "service": "Data & AI Platforms",
    "date": "2019-09",
    "teaser": "Case study: Easily Search Through Large Data Collections With Azure Architecture.",
    "imageUrl": "/case-studies/2eded9b7067a.png"
  },
  {
    "title": "Data Validation Framework Reduces Support Tickets",
    "href": "https://blog.maqsoftware.com/2019/06/case-study-data-validation-framework.html",
    "tag": "Data Validation",
    "service": "Data & AI Platforms",
    "date": "2019-06",
    "teaser": "Case study: Data Validation Framework Reduces Support Tickets.",
    "imageUrl": "/case-studies/e82aa79bcc4b.png"
  },
  {
    "title": "Machine Learning Drives Support Ticket Prioritization",
    "href": "https://blog.maqsoftware.com/2019/06/machine-learning-drives-support-ticket.html",
    "tag": "Machine Learning",
    "service": "Agentic AI & Machine Learning",
    "date": "2019-06",
    "teaser": "Case study: Machine Learning Drives Support Ticket Prioritization.",
    "imageUrl": "/case-studies/a312c69d662e.png"
  },
  {
    "title": "Software Company Monitors Global Affairs via Cloud-Based Policy Portal",
    "href": "https://blog.maqsoftware.com/2018/07/case-study-software-company-monitors.html",
    "tag": "Software Company",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-07",
    "teaser": "Case study: Software Company Monitors Global Affairs via Cloud-Based Policy Portal.",
    "imageUrl": "/case-studies/42530409ff3a.png"
  },
  {
    "title": "Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot",
    "href": "https://blog.maqsoftware.com/2021/05/chatbot-for-arizona-government.html",
    "tag": "Millions of",
    "service": "Agentic AI & Machine Learning",
    "date": "2021-05",
    "teaser": "Case study: Millions of Arizona Citizens Receive Benefits With the Help of an AI-powered Chatbot.",
    "imageUrl": "/case-studies/43be531fdf95.png"
  },
  {
    "title": "ADX implementation in the Energy and Utilities industry",
    "href": "https://blog.maqsoftware.com/2023/06/adx-implementation-for-energy-and.html",
    "tag": "ADX implementation",
    "service": "Data & AI Platforms",
    "date": "2023-06",
    "teaser": "Case study: ADX implementation in the Energy and Utilities industry.",
    "imageUrl": "/case-studies/1de90e0cd51d.png"
  },
  {
    "title": "ADX implementation in the Real Estate industry",
    "href": "https://blog.maqsoftware.com/2022/11/adx-implementation-real-estate.html",
    "tag": "ADX implementation",
    "service": "Data & AI Platforms",
    "date": "2022-11",
    "teaser": "Case study: ADX implementation in the Real Estate industry.",
    "imageUrl": "/case-studies/76f4922876c7.png"
  },
  {
    "title": "Custom Visual Allows Travel Company to Analyze Flight Performance",
    "href": "https://blog.maqsoftware.com/2018/09/case-study-custom-visual-allows-travel.html",
    "tag": "Custom Visual",
    "service": "Insights & Analytics",
    "date": "2018-09",
    "teaser": "Case study: Custom Visual Allows Travel Company to Analyze Flight Performance.",
    "imageUrl": "/case-studies/de03cb18d8b9.png"
  },
  {
    "title": "Delivering personalization intelligence with MLOps and Databricks CI/CD framework",
    "href": "https://blog.maqsoftware.com/2025/08/delivering-personalization-intelligence.html",
    "tag": "Delivering personalization",
    "service": "Data & AI Platforms",
    "date": "2025-08",
    "teaser": "Case study: Delivering personalization intelligence with MLOps and Databricks CI/CD framework.",
    "imageUrl": "/case-studies/8333ad86377e.png"
  },
  {
    "title": "Enabling sales insights for global operations with Power BI and Snowflake",
    "href": "https://blog.maqsoftware.com/2025/06/enabling-sales-insights-for-global.html",
    "tag": "Enabling sales",
    "service": "Insights & Analytics",
    "date": "2025-06",
    "teaser": "Case study: Enabling sales insights for global operations with Power BI and Snowflake.",
    "imageUrl": "/case-studies/2f89294ba899.png"
  },
  {
    "title": "Improving sales insights with a migration from SAP BOBJ to Power BI",
    "href": "https://blog.maqsoftware.com/2025/06/improving-sales-insights-with-migration.html",
    "tag": "Improving sales",
    "service": "Insights & Analytics",
    "date": "2025-06",
    "teaser": "Case study: Improving sales insights with a migration from SAP BOBJ to Power BI.",
    "imageUrl": "/case-studies/ecf35be96102.png"
  },
  {
    "title": "Harnessing generative AI for tailored marketing: Personalized content clusters for every account",
    "href": "https://blog.maqsoftware.com/2024/07/harnessing-generative-ai-for-tailored.html",
    "tag": "Harnessing generative",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-07",
    "teaser": "Case study: Harnessing generative AI for tailored marketing: Personalized content clusters for every account.",
    "imageUrl": "/case-studies/987ca777d511.png"
  },
  {
    "title": "Improving lead management and campaign optimization with Microsoft technologies",
    "href": "https://blog.maqsoftware.com/2024/02/improving-lead-management-and-campaign.html",
    "tag": "Improving lead",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-02",
    "teaser": "Case study: Improving lead management and campaign optimization with Microsoft technologies.",
    "imageUrl": "/case-studies/00d3b03deaf6.png"
  },
  {
    "title": "Save Time with an Integrated Marketing Campaign Platform",
    "href": "https://blog.maqsoftware.com/2018/11/save-time-with-integrated-marketing.html",
    "tag": "Save Time",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-11",
    "teaser": "Case study: Save Time with an Integrated Marketing Campaign Platform.",
    "imageUrl": "/case-studies/4f553166c48f.png"
  },
  {
    "title": "Generating Sales Leads with AI",
    "href": "https://blog.maqsoftware.com/2018/08/case-study-generating-sales-leads-with.html",
    "tag": "Generating Sales",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-08",
    "teaser": "Case study: Generating Sales Leads with AI.",
    "imageUrl": "/case-studies/d9e07dc5c136.png"
  },
  {
    "title": "Reducing Customer Support Time with Machine Learning",
    "href": "https://blog.maqsoftware.com/2018/11/reducing-customer-support-time-with.html",
    "tag": "Reducing Customer",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-11",
    "teaser": "Case study: Reducing Customer Support Time with Machine Learning.",
    "imageUrl": "/case-studies/32a540c3878f.png"
  },
  {
    "title": "Improving event experience for thousands using AI Agents",
    "href": "https://blog.maqsoftware.com/2024/08/streamlining-event-information-access.html",
    "tag": "Improving event",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-08",
    "teaser": "Case study: Improving event experience for thousands using AI Agents.",
    "imageUrl": "/case-studies/0ad8cfb5c3fd.png"
  },
  {
    "title": "Ease Event Management with Power Apps",
    "href": "https://blog.maqsoftware.com/2020/04/optical-character-recognition-event.html",
    "tag": "Ease Event",
    "service": "Application modernization",
    "date": "2020-04",
    "teaser": "Case study: Ease Event Management with Power Apps.",
    "imageUrl": "/case-studies/610153f04cfe.png"
  },
  {
    "title": "Events Management Software Tracks Conference Performance",
    "href": "https://blog.maqsoftware.com/2018/11/events-management-software-tracks.html",
    "tag": "Events Management",
    "service": "Data & AI Platforms",
    "date": "2018-11",
    "teaser": "Case study: Events Management Software Tracks Conference Performance.",
    "imageUrl": "/case-studies/57b07631a98a.png"
  },
  {
    "title": "Strengthening cybersecurity with Managed Identity and RBAC",
    "href": "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
    "tag": "Strengthening cybersecurity",
    "service": "Security",
    "date": "2024-08",
    "teaser": "Case study: Strengthening cybersecurity with Managed Identity and RBAC.",
    "imageUrl": "/case-studies/1c1214877b81.png"
  },
  {
    "title": "Building a secure Copilot: Addressing key security challenges",
    "href": "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    "tag": "Building a",
    "service": "Security",
    "date": "2024-08",
    "teaser": "Case study: Building a secure Copilot: Addressing key security challenges.",
    "imageUrl": "/case-studies/3305878da82b.png"
  },
  {
    "title": "Reduce Costs by Automating Privacy Matters",
    "href": "https://blog.maqsoftware.com/2019/07/case-study-reducing-costs-by-automating.html",
    "tag": "Reduce Costs",
    "service": "Security",
    "date": "2019-07",
    "teaser": "Case study: Reduce Costs by Automating Privacy Matters.",
    "imageUrl": "/case-studies/c09324c3c77a.png"
  },
  {
    "title": "Transforming AI interest into adoption by establishing an AI Center of Excellence",
    "href": "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
    "tag": "Transforming AI",
    "service": "Agentic AI & Machine Learning",
    "date": "2026-02",
    "teaser": "Case study: Transforming AI interest into adoption by establishing an AI Center of Excellence.",
    "imageUrl": "/case-studies/81eb7075ac7b.png"
  },
  {
    "title": "Reshaping industries with agentic AI solutions",
    "href": "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
    "tag": "Reshaping industries",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-08",
    "teaser": "Case study: Reshaping industries with agentic AI solutions.",
    "imageUrl": "/case-studies/3142fd3db37c.png"
  },
  {
    "title": "Accelerating data-driven decisions with AI-DataLens",
    "href": "https://blog.maqsoftware.com/2025/07/accelerating-data-driven-decisions-with.html",
    "tag": "Accelerating data-driven",
    "service": "Agentic AI & Machine Learning",
    "date": "2025-07",
    "teaser": "Case study: Accelerating data-driven decisions with AI-DataLens.",
    "imageUrl": "/case-studies/392f76f4ff69.png"
  },
  {
    "title": "Empowering businesses with AI: Frameworks that deliver results",
    "href": "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html",
    "tag": "Empowering businesses",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-08",
    "teaser": "Case study: Empowering businesses with AI: Frameworks that deliver results.",
    "imageUrl": "/case-studies/2c0f0c4b3794.png"
  },
  {
    "title": "Streamlining information retrieval with AI Copilots",
    "href": "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
    "tag": "Streamlining information",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-07",
    "teaser": "Case study: Streamlining information retrieval with AI Copilots.",
    "imageUrl": "/case-studies/9c2ae01b6490.png"
  },
  {
    "title": "Designing UI for Copilot: Key principles and practices",
    "href": "https://blog.maqsoftware.com/2024/08/designing-ui-for-copilot-key-principles.html",
    "tag": "Designing UI",
    "service": "Agentic AI & Machine Learning",
    "date": "2024-08",
    "teaser": "Case study: Designing UI for Copilot: Key principles and practices.",
    "imageUrl": "/case-studies/a13b6cdd6c2d.png"
  },
  {
    "title": "Harnessing real-time data insights with a versatile bot application",
    "href": "https://blog.maqsoftware.com/2023/09/harnessing-real-time-data-insights-with.html",
    "tag": "Harnessing real-time",
    "service": "Data & AI Platforms",
    "date": "2023-09",
    "teaser": "Case study: Harnessing real-time data insights with a versatile bot application.",
    "imageUrl": "/case-studies/02be44f2e0a4.png"
  },
  {
    "title": "AI Video Analysis Evaluates Real-Time Emotions From Facial Expressions",
    "href": "https://blog.maqsoftware.com/2018/07/case-study-ai-video-analysis-evaluates.html",
    "tag": "AI Video",
    "service": "Agentic AI & Machine Learning",
    "date": "2018-07",
    "teaser": "Case study: AI Video Analysis Evaluates Real-Time Emotions From Facial Expressions.",
    "imageUrl": "/case-studies/1d93ee6f2b70.png"
  },
  {
    "title": "Master Data Management (MDM) Improves Customer Relationships with Machine Learning",
    "href": "https://blog.maqsoftware.com/2018/11/master-data-management-mdm-improves.html",
    "tag": "Master Data",
    "service": "Data & AI Platforms",
    "date": "2018-11",
    "teaser": "Case study: Master Data Management (MDM) Improves Customer Relationships with Machine Learning.",
    "imageUrl": "/case-studies/9448e274b371.png"
  },
  {
    "title": "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    "href": "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
    "tag": "Unifying disconnected",
    "service": "Data & AI Platforms",
    "date": "2026-01",
    "teaser": "Case study: Unifying disconnected data systems using Microsoft Fabric and OneLake.",
    "imageUrl": "/case-studies/f2e4b61bcc1f.png"
  },
  {
    "title": "Delivering accurate business intelligence insights with a Fabric data agent",
    "href": "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
    "tag": "Delivering accurate",
    "service": "Data & AI Platforms",
    "date": "2026-01",
    "teaser": "Case study: Delivering accurate business intelligence insights with a Fabric data agent.",
    "imageUrl": "/case-studies/8d26cfcc2597.png"
  },
  {
    "title": "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
    "href": "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
    "tag": "Optimizing data",
    "service": "Data & AI Platforms",
    "date": "2025-08",
    "teaser": "Case study: Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric.",
    "imageUrl": "/case-studies/0eb752759d65.png"
  },
  {
    "title": "Unlocking business insights: Integrating Databricks with Power BI",
    "href": "https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html",
    "tag": "Unlocking business",
    "service": "Insights & Analytics",
    "date": "2025-08",
    "teaser": "Case study: Unlocking business insights: Integrating Databricks with Power BI.",
    "imageUrl": "/case-studies/d0360d7da755.png"
  },
  {
    "title": "Unlocking advanced analytics with Databricks",
    "href": "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html",
    "tag": "Unlocking advanced",
    "service": "Data & AI Platforms",
    "date": "2025-07",
    "teaser": "Case study: Unlocking advanced analytics with Databricks.",
    "imageUrl": "/case-studies/f3ceeab0753f.png"
  },
  {
    "title": "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
    "href": "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
    "tag": "Migrating to",
    "service": "Data & AI Platforms",
    "date": "2025-07",
    "teaser": "Case study: Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT).",
    "imageUrl": "/case-studies/7f7a435b70f5.png"
  },
  {
    "title": "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    "href": "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
    "tag": "Optimizing data",
    "service": "Data & AI Platforms",
    "date": "2025-03",
    "teaser": "Case study: Optimizing data management by integrating Snowflake and Microsoft Fabric.",
    "imageUrl": "/case-studies/d072ad050a0b.png"
  },
  {
    "title": "Enabling self-service for supply chain analytics with Microsoft Fabric and Direct Lake",
    "href": "https://blog.maqsoftware.com/2024/11/Microsoft-Fabric-Direct-Lake.html",
    "tag": "Enabling self-service",
    "service": "Data & AI Platforms",
    "date": "2024-11",
    "teaser": "Case study: Enabling self-service for supply chain analytics with Microsoft Fabric and Direct Lake.",
    "imageUrl": "/case-studies/ec8433982c6f.png"
  },
  {
    "title": "Unifying data management with a centralized framework",
    "href": "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
    "tag": "Unifying data",
    "service": "Data & AI Platforms",
    "date": "2024-08",
    "teaser": "Case study: Unifying data management with a centralized framework.",
    "imageUrl": "/case-studies/88da0656dada.png"
  },
  {
    "title": "Increasing efficiency by switching from batch processing to real-time streaming",
    "href": "https://blog.maqsoftware.com/2024/07/increasing-efficiency-by-switching-from.html",
    "tag": "Increasing efficiency",
    "service": "Data & AI Platforms",
    "date": "2024-07",
    "teaser": "Case study: Increasing efficiency by switching from batch processing to real-time streaming.",
    "imageUrl": "/case-studies/278d01715685.png"
  },
  {
    "title": "Microsoft Fabric Features for Real-Time Analytics",
    "href": "https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html",
    "tag": "Microsoft Fabric",
    "service": "Data & AI Platforms",
    "date": "2024-05",
    "teaser": "Case study: Microsoft Fabric Features for Real-Time Analytics.",
    "imageUrl": "/case-studies/0c49d1201652.png"
  },
  {
    "title": "Simplifying Data Ingestion with IngestFAST",
    "href": "https://blog.maqsoftware.com/2024/04/simplifying-data-ingestion-with.html",
    "tag": "Simplifying Data",
    "service": "Data & AI Platforms",
    "date": "2024-04",
    "teaser": "Case study: Simplifying Data Ingestion with IngestFAST.",
    "imageUrl": "/case-studies/f6faa5d0e79b.png"
  },
  {
    "title": "Embracing the Future of Data Management with Microsoft Fabric: A Setup Guide",
    "href": "https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html",
    "tag": "Embracing the",
    "service": "Data & AI Platforms",
    "date": "2023-11",
    "teaser": "Case study: Embracing the Future of Data Management with Microsoft Fabric: A Setup Guide.",
    "imageUrl": "/case-studies/ed1d78a47408.png"
  },
  {
    "title": "Microsoft Fabric: Empowering All Personas",
    "href": "https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html",
    "tag": "Microsoft Fabric",
    "service": "Data & AI Platforms",
    "date": "2023-09",
    "teaser": "Case study: Microsoft Fabric: Empowering All Personas.",
    "imageUrl": "/case-studies/02f2969b9d80.png"
  },
  {
    "title": "Modern Data Analytics using Microsoft Fabric",
    "href": "https://blog.maqsoftware.com/2023/06/modern-data-analytics-using-microsoft.html",
    "tag": "Modern Data",
    "service": "Data & AI Platforms",
    "date": "2023-06",
    "teaser": "Case study: Modern Data Analytics using Microsoft Fabric.",
    "imageUrl": "/case-studies/9c6797d36e75.png"
  },
  {
    "title": "Improving insights and reducing costs through unified reporting",
    "href": "https://blog.maqsoftware.com/2022/07/improving-insights-and-reducing-costs.html",
    "tag": "Improving insights",
    "service": "Insights & Analytics",
    "date": "2022-07",
    "teaser": "Case study: Improving insights and reducing costs through unified reporting.",
    "imageUrl": "/case-studies/af52040f0f95.png"
  },
  {
    "title": "Enabling Fast-Paced BI and Analytics",
    "href": "https://blog.maqsoftware.com/2020/11/azure-fast-paced-bi-analytics.html",
    "tag": "Enabling Fast-Paced",
    "service": "Data & AI Platforms",
    "date": "2020-11",
    "teaser": "Case study: Enabling Fast-Paced BI and Analytics.",
    "imageUrl": "/case-studies/7319ec1e6442.png"
  },
  {
    "title": "Modernize Data Systems by Migrating to the Cloud",
    "href": "https://blog.maqsoftware.com/2020/09/modernize-data-cloud-migration.html",
    "tag": "Modernize Data",
    "service": "Cloud Modernization",
    "date": "2020-09",
    "teaser": "Case study: Modernize Data Systems by Migrating to the Cloud.",
    "imageUrl": "/case-studies/927b38e8112a.png"
  },
  {
    "title": "Transitioning legacy reports from Qlik to Power BI",
    "href": "https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html",
    "tag": "Transitioning legacy",
    "service": "Insights & Analytics",
    "date": "2025-06",
    "teaser": "Case study: Transitioning legacy reports from Qlik to Power BI.",
    "imageUrl": "/case-studies/f737eaf4eef2.png"
  },
  {
    "title": "Accelerate your Tableau to Power BI (Fabric) migration with MigrateFAST",
    "href": "https://blog.maqsoftware.com/2025/03/accelerate-your-tableau-to-power-bi.html",
    "tag": "Accelerate your",
    "service": "Insights & Analytics",
    "date": "2025-03",
    "teaser": "Case study: Accelerate your Tableau to Power BI (Fabric) migration with MigrateFAST.",
    "imageUrl": "/case-studies/68f9c67038bd.png"
  },
  {
    "title": "Modernizing reporting platforms through AI-driven SQL Migration",
    "href": "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
    "tag": "Modernizing reporting",
    "service": "Insights & Analytics",
    "date": "2024-08",
    "teaser": "Case study: Modernizing reporting platforms through AI-driven SQL Migration.",
    "imageUrl": "/case-studies/32c64cd6558b.png"
  },
  {
    "title": "Optimize your Power BI Reports and Usage with LoadFAST",
    "href": "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html",
    "tag": "Optimize your",
    "service": "Insights & Analytics",
    "date": "2024-03",
    "teaser": "Case study: Optimize your Power BI Reports and Usage with LoadFAST.",
    "imageUrl": "/case-studies/c25729cdecc9.png"
  },
  {
    "title": "Building a Powerful Foundation: The Ultimate Guide to Power BI Center of Excellence",
    "href": "https://blog.maqsoftware.com/2023/12/building-powerful-foundation-ultimate.html",
    "tag": "Building a",
    "service": "Insights & Analytics",
    "date": "2023-12",
    "teaser": "Case study: Building a Powerful Foundation: The Ultimate Guide to Power BI Center of Excellence.",
    "imageUrl": "/case-studies/669539ab9f12.png"
  },
  {
    "title": "Everything You Need to Know About Migrating to Power BI",
    "href": "https://blog.maqsoftware.com/2020/06/everything-you-need-to-know-about.html",
    "tag": "Everything You",
    "service": "Insights & Analytics",
    "date": "2020-06",
    "teaser": "Case study: Everything You Need to Know About Migrating to Power BI.",
    "imageUrl": "/case-studies/b6e89fbd6897.png"
  },
  {
    "title": "Modernize Reporting with Power BI: A Cost-Effective, Scalable Solution",
    "href": "https://blog.maqsoftware.com/2020/07/qlikview-to-power-bi-migration.html",
    "tag": "Modernize Reporting",
    "service": "Insights & Analytics",
    "date": "2020-07",
    "teaser": "Case study: Modernize Reporting with Power BI: A Cost-Effective, Scalable Solution.",
    "imageUrl": "/case-studies/763c9d2a8026.png"
  },
  {
    "title": "Improve Power BI Premium Report Performance and Eliminate Data Refresh Failures",
    "href": "https://blog.maqsoftware.com/2019/07/improve-power-bi-premium-report.html",
    "tag": "Improve Power",
    "service": "Insights & Analytics",
    "date": "2019-07",
    "teaser": "Case study: Improve Power BI Premium Report Performance and Eliminate Data Refresh Failures.",
    "imageUrl": "/case-studies/d3842138c25e.png"
  },
  {
    "title": "Maximizing the power of Dynamics 365: User interface & user experience redesigned",
    "href": "https://blog.maqsoftware.com/2024/03/maximizing-power-of-dynamics-365-user.html",
    "tag": "Maximizing the",
    "service": "Application modernization",
    "date": "2024-03",
    "teaser": "Case study: Maximizing the power of Dynamics 365: User interface & user experience redesigned.",
    "imageUrl": "/case-studies/b277b7deb1ba.png"
  },
  {
    "title": "Optimizing task management with smart recommendations",
    "href": "https://blog.maqsoftware.com/2024/06/optimizing-task-management-with-smart.html",
    "tag": "Optimizing task",
    "service": "Application modernization",
    "date": "2024-06",
    "teaser": "Case study: Optimizing task management with smart recommendations.",
    "imageUrl": "/case-studies/58591f9a0293.png"
  },
  {
    "title": "Create a Single Source of Truth with Dynamics 365",
    "href": "https://blog.maqsoftware.com/2020/12/dynamics-365-single-source-of-truth.html",
    "tag": "Create a",
    "service": "Application modernization",
    "date": "2020-12",
    "teaser": "Case study: Create a Single Source of Truth with Dynamics 365.",
    "imageUrl": "/case-studies/10a44165bf7c.png"
  },
  {
    "title": "Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365",
    "href": "https://blog.maqsoftware.com/2020/10/dynamic-checklist-dynamics-365.html",
    "tag": "Complete Tasks",
    "service": "Application modernization",
    "date": "2020-10",
    "teaser": "Case study: Complete Tasks Faster with a Custom Dynamic Checklist in Dynamics 365.",
    "imageUrl": "/case-studies/a09ca9051ef0.png"
  },
  {
    "title": "Connect High-Impact Service Opportunities with Underutilized Support Team Resources",
    "href": "https://blog.maqsoftware.com/2020/10/track-resource-allocation-power-platform.html",
    "tag": "Connect High-Impact",
    "service": "Data & AI Platforms",
    "date": "2020-10",
    "teaser": "Case study: Connect High-Impact Service Opportunities with Underutilized Support Team Resources.",
    "imageUrl": "/case-studies/42e09ed0c035.png"
  },
  {
    "title": "Digitize Rhythm of Business (ROB) with a Power BI to PowerPoint Tool",
    "href": "https://blog.maqsoftware.com/2020/10/automated-powerpoint-deck-creation.html",
    "tag": "Digitize Rhythm",
    "service": "Application modernization",
    "date": "2020-10",
    "teaser": "Case study: Digitize Rhythm of Business (ROB) with a Power BI to PowerPoint Tool.",
    "imageUrl": "/case-studies/4ba84753ae26.png"
  },
  {
    "title": "Ensure Business Continuity Through Covid-19 Remote Work",
    "href": "https://blog.maqsoftware.com/2020/07/promoting-business-continuity-through.html",
    "tag": "Ensure Business",
    "service": "Data & AI Platforms",
    "date": "2020-07",
    "teaser": "Case study: Ensure Business Continuity Through Covid-19 Remote Work.",
    "imageUrl": "/case-studies/8d3b250ac9fa.png"
  },
  {
    "title": "Custom Gantt Chart Improves B2B Communication",
    "href": "https://blog.maqsoftware.com/2019/03/custom-gantt-chart-improves-b2b.html",
    "tag": "Custom Gantt",
    "service": "Data & AI Platforms",
    "date": "2019-03",
    "teaser": "Case study: Custom Gantt Chart Improves B2B Communication.",
    "imageUrl": "/case-studies/7cb0868559a0.png"
  },
  {
    "title": "Integrating SharePoint Portals",
    "href": "https://blog.maqsoftware.com/2018/11/integrating-sharepoint-portals.html",
    "tag": "Integrating SharePoint",
    "service": "Application modernization",
    "date": "2018-11",
    "teaser": "Case study: Integrating SharePoint Portals.",
    "imageUrl": "/case-studies/3a1cd99931cc.png"
  }
];

export interface ConsultingOfferItem {
  title: string;
  href: string;
  price: string;
  tags: string[];
  teaser: string;
}

export const consultingOfferFilters = [
  "All",
  "Free",
  "$5K-$15K",
  "$25K-$35K",
  "$45K+",
  "Power BI",
  "Microsoft Fabric",
  "Agentic AI / Copilot",
  "Migration",
];

export const consultingOfferItems: ConsultingOfferItem[] = [
  {
    title: "Power BI for Business Analytics: 1-Day Workshop",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.powerbibusinessanalyticsessentials?page=1&search=maq%20software&country=us",
    price: "Free",
    tags: ["Free", "Power BI"],
    teaser: "A one-day workshop covering adoption fundamentals and practical implementation guidance for Power BI.",
  },
  {
    title: "Microsoft Fabric: 2-Hour Briefing",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.microsoftfabricbriefing?page=1&search=maq%20software&country=us",
    price: "Free",
    tags: ["Free", "Microsoft Fabric"],
    teaser: "A concise briefing that introduces Fabric capabilities, platform fit, and adoption pathways.",
  },
  {
    title: "Power BI Performance Improvement: 3-Week Workshop",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.maq_power_bi_performance_improvement_3week?page=1&search=maq%20software&country=us",
    price: "$25,000",
    tags: ["$25K-$35K", "Power BI"],
    teaser: "Structured performance workshop with model, DAX, and capacity recommendations for measurable report improvements.",
  },
  {
    title: "Agentic AI Envisioning Workshop - 1 Day Engagement",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.agentic_ai_1day_envisioning_workshop?page=1&search=maq%20software&country=us",
    price: "Free",
    tags: ["Free", "Agentic AI / Copilot"],
    teaser: "Identify high-impact AI opportunities and define a practical adoption roadmap in one day.",
  },
  {
    title: "GitHub Copilot Implementation - 3 Days",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.github_copilot_implementation?page=1&search=maq%20software&country=us",
    price: "$10,000",
    tags: ["$5K-$15K", "Agentic AI / Copilot"],
    teaser: "Hands-on enablement to operationalize GitHub Copilot across development teams.",
  },
  {
    title: "Tableau to Power BI: Full Migration Engagement",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.tableaupbipromigration?page=1&search=maq%20software&country=us",
    price: "$75,000",
    tags: ["$45K+", "Migration", "Power BI"],
    teaser: "End-to-end migration from Tableau to Power BI with parity validation and production rollout.",
  },
  {
    title: "Qlik to Power BI Migration: Free 3-Week Assessment",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.qlikmigrationdiscovery?page=1&search=maq%20software&country=us",
    price: "Free",
    tags: ["Free", "Migration", "Power BI"],
    teaser: "Discovery assessment to evaluate migration scope, risk, and phased execution from Qlik to Power BI.",
  },
  {
    title: "Microsoft Fabric: 4-Week Assessment",
    href: "https://marketplace.microsoft.com/en-us/product/maqsoftware.fabricassesment?page=1&search=maq%20software&country=us",
    price: "$15,000",
    tags: ["$5K-$15K", "Microsoft Fabric"],
    teaser: "Four-week assessment for architecture readiness, workload planning, and Fabric adoption execution.",
  },
];

export interface VisualGuideItem {
  name: string;
  href: string;
  category: string | string[];
  description: string;
  badges: string[];
  imageUrl: string;
}

export function visualGuideSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function findVisualGuideItem(slug: string): VisualGuideItem | undefined {
  return visualGuideItems.find((item) => visualGuideSlug(item.name) === slug);
}

export const visualGuideFilters = [
  "All",
  "Certified",
  "Change Over Time",
  "Clustering",
  "Comparison",
  "Correlation",
  "Distribution",
  "Flow",
  "Forecast",
  "KPI",
  "Part-to-Whole",
  "Ranking",
  "Single Metric",
  "Utility",
];

export const visualGuideItems: VisualGuideItem[] = [
  {
    "name": "Advanced Linear Gauge",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Track progress visually with a detailed linear gauge for easy goal monitoring.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/ea217347637d.svg"
  },
  {
    "name": "Bowtie Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Compare data flow between processes using a clear and simple bowtie visualization.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/ceb2297bc506.svg"
  },
  {
    "name": "Box and Whisker Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Distribution",
    "description": "See data spread at a glance with a chart showing mean, median, and quartiles.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/51f1d9e2c29f.svg"
  },
  {
    "name": "Brick Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Part-to-Whole",
    "description": "Display data percentages creatively using colorful shaded bricks.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/6c1c60e0478d.svg"
  },
  {
    "name": "Calendar",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Utility",
    "description": "View key events on your reports with an intuitive calendar layout.",
    "badges": [
      "Certified",
      "Featured"
    ],
    "imageUrl": "/case-studies/fa40f91c748b.svg"
  },
  {
    "name": "Circular Gauge",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Gauge progress toward goals with a pie or donut chart.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/e85e7805961c.svg"
  },
  {
    "name": "Cylindrical Gauge",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Compare metrics with an easy-to-read 3D cylinder visual.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/f61506cc6375.svg"
  },
  {
    "name": "Data Insights",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Gain insights with a variety of visual formats for better understanding.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/62d781104186.svg"
  },
  {
    "name": "Dot Plot",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Spot gaps and clusters easily with a simple dot plot.",
    "badges": [
      "Certified",
      "Featured"
    ],
    "imageUrl": "/case-studies/0526c6ba037e.svg"
  },
  {
    "name": "Dynamic Tooltip",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Utility",
    "description": "Improve report readability with informative dynamic tooltips.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/3728d9c644a0.svg"
  },
  {
    "name": "Funnel with Source",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Track data flow end-to-end, highlighting each data source.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/a8c233dbfd31.svg"
  },
  {
    "name": "Gantt Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Change Over Time",
    "description": "Monitor project milestones with a unique grid feature.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/7777ece564ec.svg"
  },
  {
    "name": "Grid",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Ranking",
    "description": "Navigate large datasets easily with a paginated grid format.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/7cdea86b39f8.svg"
  },
  {
    "name": "Hierarchy Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Distribution",
    "description": "Visually depict the structure and relationships of authorities in an organization.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/d13467bc9204.svg"
  },
  {
    "name": "Histogram With Points",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Distribution",
    "description": "Compare distribution density and actual values effectively.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/16c0e25728ed.svg"
  },
  {
    "name": "Horizontal Funnel",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Break down process stages horizontally for clearer insights.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/a930131f0951.svg"
  },
  {
    "name": "Hourglass Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Compare category values before and after an event simply.",
    "badges": [
      "Certified",
      "Featured"
    ],
    "imageUrl": "/case-studies/040770483692.svg"
  },
  {
    "name": "Image Carousel",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Utility",
    "description": "Showcase images seamlessly with a sliding carousel visual.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/6039bc6f9f66.svg"
  },
  {
    "name": "Journey Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Correlation",
    "description": "Transform statistical data into a network of categories and relationships.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/8ca34df4cc71.svg"
  },
  {
    "name": "KPI Column",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": ["Comparison", "KPI"],
    "description": "Measure progress with color-coded columns and an integrated line chart.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/8f42b0e6bc98.svg"
  },
  {
    "name": "KPI Grid",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": ["Ranking", "KPI"],
    "description": "Display hierarchical data, separate categories, and illustrate trends.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/2ba80509ffe6.svg"
  },
  {
    "name": "KPI Ticker",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": ["Single Metric", "KPI"],
    "description": "Rotate through multiple KPIs in an auto-scrolling visual.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/d8c99b7ee425.svg"
  },
  {
    "name": "Linear Gauge",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Compare progress against goals with an easy-to-read linear gauge.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/06f4fc4ebc69.svg"
  },
  {
    "name": "Organization Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Display organizational hierarchy or functional structure.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/12952b64c457.svg"
  },
  {
    "name": "Quadrant Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Correlation",
    "description": "Represent data distribution and common traits in separate quadrants.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/0e4b8671da1a.svg"
  },
  {
    "name": "Radar Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Compare data across multiple variables in a two-dimensional chart.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/adbd4feae83a.svg"
  },
  {
    "name": "Ratings",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Ranking",
    "description": "Show performance or approval scores within your Power BI reports.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/6d1fcaab2a96.svg"
  },
  {
    "name": "Ring Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Part-to-Whole",
    "description": "Display relationships between values segmented in a ring.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/a0fead4c1754.svg"
  },
  {
    "name": "Rotating Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Single Metric",
    "description": "Showcase multiple KPIs with a rotating bar chart for dynamic insights.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/82e9543011c1.svg"
  },
  {
    "name": "Rotating Tile",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Flow",
    "description": "Display multiple KPIs with an automatically flipping, customizable tile.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/939c4098c05c.svg"
  },
  {
    "name": "Sunburst",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Clustering",
    "description": "Break down hierarchical data with color-coded concentric rings.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/4036723174e7.svg"
  },
  {
    "name": "Text Enhancer",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Utility",
    "description": "Customize text in Power BI reports with adjustable shadow, rotation, and more.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/ae4d73ca6449.svg"
  },
  {
    "name": "Text Wrapper",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Utility",
    "description": "Represent complete data with enabled text wrapping on Power BI reports.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/de68f6e471af.svg"
  },
  {
    "name": "Thermometer",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Single Metric",
    "description": "Illustrate progress towards goals with a customizable thermometer graphic.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/e89839b0bbcd.svg"
  },
  {
    "name": "Trading Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Change Over Time",
    "description": "Simplify historical trading records with a color-coded chart.",
    "badges": [
      "Certified",
      "Editor's Pick"
    ],
    "imageUrl": "/case-studies/3144a707958b.svg"
  },
  {
    "name": "Treemap Bar Chart",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Comparison",
    "description": "Categorize hierarchical data with color-coded, proportional rectangles.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/87e55d8024d6.svg"
  },
  {
    "name": "Venn Diagram",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Correlation",
    "description": "Compare and contrast data across multiple sets with a clear Venn diagram.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/2eb5877f3e9e.svg"
  },
  {
    "name": "Violin Plot",
    "href": "https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8",
    "category": "Clustering",
    "description": "Visualize data distribution across categories with a simple and effective plot.",
    "badges": [
      "Certified"
    ],
    "imageUrl": "/case-studies/d1103ec4d7c5.svg"
  }
];

export interface BestPracticeItem {
  title: string;
  href: string;
  topic: string;
  teaser: string;
  imageUrl: string;
}

export const bestPracticeFilters = [
  "All",
  "Copilot",
  "Power BI",
  "Databricks",
  "Snowflake",
  "Azure",
  "Security",
  "Dynamics 365",
  "Power Apps",
];

export const bestPracticeItems: BestPracticeItem[] = [
  {
    "title": "Maximize developer productivity with GitHub Copilot",
    "href": "/insights/github-copilot-best-practices",
    "topic": "Copilot",
    "teaser": "Best practice guide: Maximize developer productivity with GitHub Copilot.",
    "imageUrl": "/case-studies/0cd65a0e4590.png"
  },
  {
    "title": "Build AI-ready semantic models with Power BI Copilot",
    "href": "/insights/power-bi-copilot-best-practices",
    "topic": "Copilot",
    "teaser": "Best practice guide: Build AI-ready semantic models with Power BI Copilot.",
    "imageUrl": "/case-studies/869956fe2b94.png"
  },
  {
    "title": "Improve your Power BI performance and security with our best practices",
    "href": "/insights/power-bi-best-practices",
    "topic": "Power BI",
    "teaser": "Best practice guide: Improve your Power BI performance and security with our best practices.",
    "imageUrl": "/case-studies/e206261bcd92.png"
  },
  {
    "title": "Improve job speed and save storage with our 18 Azure Databricks best practices",
    "href": "/insights/azure-databricks-best-practices",
    "topic": "Databricks",
    "teaser": "Best practice guide: Improve job speed and save storage with our 18 Azure Databricks best practices.",
    "imageUrl": "/case-studies/c40e895f4f69.png"
  },
  {
    "title": "Optimizing Performance, Collaboration, and Security on Databricks",
    "href": "/insights/databricks-best-practices",
    "topic": "Databricks",
    "teaser": "Best practice guide: Optimizing Performance, Collaboration, and Security on Databricks.",
    "imageUrl": "/case-studies/9b457a36a571.png"
  },
  {
    "title": "Optimize Snowflake storage for efficient Power BI data extraction",
    "href": "/insights/snowflake-and-power-bi-best-practices",
    "topic": "Snowflake",
    "teaser": "Best practice guide: Optimize Snowflake storage for efficient Power BI data extraction.",
    "imageUrl": "/case-studies/28ab89a5ce3b.png"
  },
  {
    "title": "Explore best practices for creating enterprise-wide knowledge bots",
    "href": "/insights/knowledge-bot-best-practices",
    "topic": "Azure",
    "teaser": "Best practice guide: Explore best practices for creating enterprise-wide knowledge bots.",
    "imageUrl": "/case-studies/feac7513acdb.png"
  },
  {
    "title": "Improve Power BI speed and functionality with our 22 DAX best practices",
    "href": "/insights/dax-best-practices",
    "topic": "Power BI",
    "teaser": "Best practice guide: Improve Power BI speed and functionality with our 22 DAX best practices.",
    "imageUrl": "/case-studies/e2b72dc881c3.png"
  },
  {
    "title": "Optimize your DevOps strategies with our 9 essential best practices",
    "href": "/insights/azure-dev-ops-best-practices-guide",
    "topic": "Azure",
    "teaser": "Best practice guide: Optimize your DevOps strategies with our 9 essential best practices.",
    "imageUrl": "/case-studies/c1630e26f658.png"
  },
  {
    "title": "Optimize costs for your Azure platforms with our 10 best practices",
    "href": "/insights/azure-architecture-best-practices",
    "topic": "Azure",
    "teaser": "Best practice guide: Optimize costs for your Azure platforms with our 10 best practices.",
    "imageUrl": "/case-studies/0c8e4c20e7bb.png"
  },
  {
    "title": "Strengthen your cloud security and protect your assets with 19 security best practices",
    "href": "/insights/azure-security-best-practices",
    "topic": "Security",
    "teaser": "Best practice guide: Strengthen your cloud security and protect your assets with 19 security best practices.",
    "imageUrl": "/case-studies/b4fb9fb6c430.png"
  },
  {
    "title": "Ensure quality data on demand with our 7 data validation best practices",
    "href": "/insights/data-validation-best-practices",
    "topic": "Azure",
    "teaser": "Best practice guide: Ensure quality data on demand with our 7 data validation best practices.",
    "imageUrl": "/case-studies/b9db6db87f2b.png"
  },
  {
    "title": "Optimize your Dynamics 365 environment with our 32 best practices on developing fields, views, and more",
    "href": "/insights/dynamics-365-development-best-practices",
    "topic": "Dynamics 365",
    "teaser": "Best practice guide: Optimize your Dynamics 365 environment with our 32 best practices on developing fields, views, and more.",
    "imageUrl": "/case-studies/ade9cc6bcd8a.png"
  },
  {
    "title": "Deploy Dynamics 365 faster with minimal downtime using our 8 best practices",
    "href": "/insights/dynamics-365-deployment-best-practices",
    "topic": "Dynamics 365",
    "teaser": "Best practice guide: Deploy Dynamics 365 faster with minimal downtime using our 8 best practices.",
    "imageUrl": "/case-studies/77429cce9a99.png"
  },
  {
    "title": "This guide covers the 11 best practices you need to optimize your canvas apps",
    "href": "/insights/power-apps-best-practices",
    "topic": "Power Apps",
    "teaser": "Best practice guide: This guide covers the 11 best practices you need to optimize your canvas apps.",
    "imageUrl": "/case-studies/7a60e88f12cb.png"
  },
  {
    "title": "This guide covers the 7 best practices you need to secure dataverse",
    "href": "/insights/dataverse-security-best-practices",
    "topic": "Security",
    "teaser": "Best practice guide: This guide covers the 7 best practices you need to secure dataverse.",
    "imageUrl": "/case-studies/91c5d412466f.png"
  }
];
