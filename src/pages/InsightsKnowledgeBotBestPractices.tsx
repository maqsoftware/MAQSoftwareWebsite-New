import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsKnowledgeBotBestPractices() {
  return (
    <GuideArticle
      eyebrow="Azure"
      title="Best practices for creating enterprise-wide knowledge bots"
      intro="This guide covers the practices you need to improve your enterprise-wide knowledge bot's performance, security, and design. The sections below are organized around the 'what,' the 'how,' and how to ensure reliability and continuity in production."
      lastUpdated="August 7, 2024"
      ctaSubject="Knowledge bot best practices - MAQ Software"
      ctaText="Planning an enterprise knowledge bot rollout? MAQ Software's AI engineering team can help with content curation, retrieval, and grounded answers."
      sections={[
        {
          title: "Objective and scope of the bot",
          practices: [
            { title: "Define objectives", body: "Clearly outline the primary goals and objectives of the bot. Determine what problems it aims to solve and what tasks it will perform. Establish the scope of the bot's functionality, including the types of interactions it will handle and its target audience." },
          ],
        },
        {
          title: "Expected response from bot",
          practices: [
            { title: "Ensure accuracy and relevance", body: "Ensure that responses are accurate and relevant to the user's query. Maintain consistency in responses to similar queries to build user trust and ensure a reliable user experience." },
            { title: "Implement error handling", body: "Implement comprehensive error handling to manage cases where the bot cannot understand or process a query. Provide helpful fallback responses and guide users toward useful actions." },
          ],
        },
        {
          title: "Representation of response",
          practices: [
            { title: "Ensure clear and concise responses", body: "Ensure responses are clear, concise, and easy to understand. Avoid long-paragraph explanations, highlight key points, and use simple language." },
            { title: "Maintain consistent tone and style", body: "Maintain a consistent tone and style that matches the brand and audience. Whether formal or casual, ensure the bot's personality aligns with user expectations." },
          ],
        },
        {
          title: "Cost estimates and optimization",
          practices: [
            { title: "Estimate initial development and operational cost", body: "Include design, planning, coding, testing, hosting, and maintenance expenses. Account for API usage fees, data retrieval costs, and expenses related to scaling the bot for increased traffic." },
            { title: "Conduct cost-benefit analysis and optimization", body: "Evaluate the bot's ROI and identify opportunities to reduce or optimize costs. Create a detailed budget, regularly update forecasts based on actual usage, track expenses, and establish cost-control measures." },
          ],
        },
        {
          title: "Process tracking and code management",
          practices: [
            { title: "Document all processes", body: "Document all aspects of the bot's development, deployment, and maintenance processes. Ensure the documentation is accessible to all relevant stakeholders." },
            { title: "Use version control", body: "Use version control systems like Git to manage changes to the bot's codebase. Maintain clear commit messages and documentation to track changes and facilitate rollback if needed." },
          ],
        },
        {
          title: "Privacy and data protection",
          practices: [
            { title: "Implement PII data checks", body: "Improve Retrieval-Augmented Generation (RAG) applications by integrating PII detection mechanisms. This is crucial for compliance with privacy regulations like GDPR and CCPA, safeguarding sensitive information, and building user trust." },
          ],
        },
        {
          title: "Orchestration",
          practices: [
            { title: "Implement workflow management", body: "Implement workflow management to handle complex interactions and guide users through multi-step processes. This ensures a smooth and logical flow of conversation." },
            { title: "Integrate with services", body: "Integrate the bot with relevant third-party services and APIs to improve its capabilities. Ensure seamless data exchange between the bot and external systems." },
          ],
        },
        {
          title: "Prompt engineering",
          practices: [
            { title: "Design clear and effective prompts", body: "Design prompts that are easy to understand. Clear prompts help users know exactly what is expected of them, reducing confusion and enhancing overall interaction." },
            { title: "Use personalization", body: "Use information available to tailor prompts to users' specific needs or preferences. Personalized prompts can improve user engagement and satisfaction by making interactions feel more relevant." },
          ],
        },
        {
          title: "Performance efficiency",
          practices: [
            { title: "Categorize content effectively", body: "Use tools like Microsoft Purview to categorize and manage content effectively. This helps organize data, making it easier to retrieve and update information." },
            { title: "Clean data regularly", body: "Ensure data is clean, free of duplicates, and standardized. Remove irrelevant information and normalize data formats." },
            { title: "Ensure data relevance and recency", body: "Use up-to-date and contextually relevant data. Regularly update the data to reflect the latest information and trends. Implement policies to retire or archive outdated data and monitor emerging topics to update the bot's knowledge base proactively." },
            { title: "Incorporate source diversity", body: "Incorporate data from multiple sources, including internal documents, FAQs, and user manuals, to provide comprehensive coverage. Cross-check information from multiple sources to ensure accuracy and reliability." },
            { title: "Integrate systems smoothly", body: "Integrate the bot with existing systems so it functions smoothly within the current technological ecosystem, communicating and exchanging data effectively with the software and platforms already in use." },
          ],
        },
        {
          title: "Testing and evaluation",
          practices: [
            { title: "Simulate real-world scenarios and edge cases", body: "Test the bot in conditions that mimic actual usage as closely as possible. Test for edge cases where users may intentionally try to exploit or abuse the bot — spamming or offensive language — and ensure the bot can mitigate such behavior." },
            { title: "Perform model evaluation", body: "Perform 'groundedness' testing to evaluate response accuracy, track feedback based on user satisfaction ratings, and monitor engagement levels. Define KPIs to help track progress and identify areas for improvement." },
            { title: "Monitor user feedback", body: "Monitor how users engage with the bot, including frequent questions, issues, and feedback. Use this data to identify trends and areas where the bot needs adjustments." },
          ],
        },
        {
          title: "Deployment",
          practices: [
            { title: "Establish a CI/CD pipeline", body: "Implement a continuous integration / continuous deployment pipeline to automate the deployment process and ensure quick and reliable updates." },
            { title: "Set up monitoring and logging", body: "Set up monitoring and logging to track the bot's performance and detect issues in real time. Use these tools to gather insights and continuously improve the bot." },
          ],
        },
        {
          title: "Operational excellence",
          practices: [
            { title: "Provide training for users and administrators", body: "Train users on how to interact with the bot effectively, and train administrators on managing and maintaining the bot — including handling updates and addressing issues." },
            { title: "Monitor app service instances using health check", body: "Integrate Azure's health check service to monitor App Service instances. This increases availability by rerouting requests away from unhealthy instances and replacing instances that remain unhealthy." },
            { title: "Implement failover mechanisms", body: "Implement automatic failover, such as a secondary instance that can take over if the primary fails. This can be achieved through load balancers or cloud services that support failover configurations." },
            { title: "Set up automated alerts", body: "Use monitoring tools to track the bot's performance, uptime, and error rates. Set up automated alerts to notify the support team of anomalies, downtime, or performance issues so problems can be resolved before they impact users." },
            { title: "Develop a disaster recovery plan", body: "Develop a detailed disaster recovery plan that outlines steps to recover from hardware, software, and network failures." },
          ],
        },
      ]}
      references={[
        { label: "Best practices for creating enterprise-wide knowledge bots", href: "https://maqsoftware.com/insights/knowledge-bot-best-practices", source: "MAQ Software" },
        { label: "Microsoft Purview overview", href: "https://learn.microsoft.com/en-us/purview/", source: "Microsoft Corporation" },
        { label: "Retrieval-Augmented Generation (RAG) on Azure", href: "https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview", source: "Microsoft Corporation" },
        { label: "Azure App Service health checks", href: "https://learn.microsoft.com/en-us/azure/app-service/monitor-instances-health-check", source: "Microsoft Corporation" },
      ]}
      continueReading={{
        image: "https://maqsoftware.com/img/blog/BPG005-main.jpg",
        title: "DAX Best Practice Guide",
        description: "Improve your Power BI performance with our 22 DAX best practices.",
        to: "/insights/dax-best-practices",
      }}
    />
  );
}
