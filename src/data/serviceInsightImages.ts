export const SERVICE_INSIGHT_IMAGE_FALLBACK = "/images/case-study.png";

export const SERVICE_INSIGHT_IMAGE_MAP: Record<string, string> = {
  "https://blog.maqsoftware.com/2024/08/empowering-businesses-with-ai.html": "/images/insights/service/empowering-businesses-with-ai.png",
  "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html": "/images/insights/service/building-secure-copilot-addressing-key.png",
  "https://blog.maqsoftware.com/2024/08/designing-ui-for-copilot-key-principles.html": "/images/insights/service/designing-ui-for-copilot-key-principles.png",
  "https://blog.maqsoftware.com/2024/05/microsoft-fabric-features-for-real-time.html": "/images/insights/service/microsoft-fabric-features-for-real-time.png",
  "https://blog.maqsoftware.com/2023/11/embracing-future-of-data-management.html": "/images/insights/service/embracing-future-of-data-management.png",
  "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html": "/images/insights/service/transform-your-power-bi.png",
  "/insights/azure-dev-ops-best-practices-guide": "/images/insights/service/azure-dev-ops-best-practices-guide.jpg",
  "/insights/azure-security-best-practices": "/images/insights/service/azure-security-best-practices.jpg",
  "/insights/dataverse-security-best-practices": "/images/insights/service/dataverse-security-best-practices.jpg",
  "https://blog.maqsoftware.com/2023/11/microsoft-fabric-powering-real-time.html": "/images/insights/service/microsoft-fabric-powering-real-time.png",
  "/insights/knowledge-bot-best-practices": "/images/insights/service/knowledge-bot-best-practices.jpg",
  "https://blog.maqsoftware.com/2023/09/microsoft-fabric-empowering.html": "/images/insights/service/microsoft-fabric-empowering.png",
  "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html": "/images/insights/service/modernizing-software-development.jpg",
  "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html": "/images/insights/service/strengthening-cybersecurity.png",
  "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html": "/images/insights/service/unifying-data-management-with.png"
};

export function getServiceInsightImage(url: string): string {
  return SERVICE_INSIGHT_IMAGE_MAP[url] ?? SERVICE_INSIGHT_IMAGE_FALLBACK;
}
