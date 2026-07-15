import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsAzureDatabricksBestPractices() {
  return (
    <GuideArticle
      eyebrow="Databricks"
      title="ADB optimization best practice guide"
      intro="Databricks (ADB) processes terabytes of data while running heavy data science workloads. As data input and workloads grow, job performance can decline. These practices help you optimize cost, performance, governance, and operations across your ADB environment."
      lastUpdated="December 2025"
      ctaSubject="Databricks best practices - MAQ Software"
      sections={[
        {
          title: "Cost optimization",
          practices: [
            {
              title: "Use Serverless compute",
              body: "Adopt Serverless SQL Warehouses for interactive SQL workloads to eliminate infrastructure management overhead and optimize costs through consumption-based billing. Serverless compute starts instantly and scales automatically.",
            },
            {
              title: "Leverage cluster policies",
              body: "Implement compute policies to enforce cost-effective configurations across all workspaces. Restrict instance types, enforce auto-termination settings, and ensure tagging compliance to prevent cost overruns.",
            },
            {
              title: "Customize cluster termination",
              body: "Terminating inactive clusters saves cost. Customize the auto-termination time based on environment (shorter for production jobs, longer for development) to avoid paying for idle resources.",
            },
            {
              title: "Enable cluster autoscaling",
              body: "Enable autoscaling so clusters resize based on workload. Provide a minimum and maximum number of worker nodes so ADB can automatically reallocate resources as needed.",
            },
            {
              title: "Use Spot instances",
              body: "For interruptible workloads like development or testing, use Azure Spot VMs to save up to 90% on compute costs.",
            },
          ],
        },
        {
          title: "Performance tuning",
          practices: [
            {
              title: "Enable the Photon engine",
              body: "Use the Photon engine, a native vectorized query engine, to accelerate SQL queries and DataFrame API calls. It provides significant performance improvements for ingestion, ETL, and interactive queries.",
            },
            {
              title: "Optimize Delta tables",
              body: "Regularly run OPTIMIZE and VACUUM. OPTIMIZE compacts small files into larger ones to improve read performance, while VACUUM removes old files to save storage costs.",
            },
            {
              title: "Use Liquid Clustering",
              body: "Replace traditional partitioning and Z-Ordering with Liquid Clustering. It automatically adjusts data layout based on query patterns, solving the small-files problem and improving query performance without manual tuning.",
            },
            {
              title: "Adaptive Query Execution (AQE)",
              body: "Ensure AQE is enabled (default in newer runtimes). It optimizes query plans at runtime based on actual data statistics, handling data skew and join strategies dynamically.",
            },
            {
              title: "Cache frequently accessed data",
              body: "Use the Delta Cache (Disk Cache) to accelerate data reads by creating copies of remote files in the local NVMe SSDs of worker nodes.",
            },
          ],
        },
        {
          title: "Governance & security",
          practices: [
            {
              title: "Implement Unity Catalog",
              body: "Use Unity Catalog for centralized access control, auditing, and data discovery across all Databricks workspaces. It provides a unified governance model for files, tables, and ML models.",
            },
            {
              title: "Secure secrets management",
              body: "Never hardcode credentials. Use Azure Key Vault backed secret scopes to securely manage and access secrets, keys, and tokens within notebooks and jobs.",
            },
            {
              title: "Network security",
              body: "Deploy Databricks in your own Virtual Network (VNet Injection) to enable secure connectivity to other Azure services using Service Endpoints or Private Links.",
            },
          ],
        },
        {
          title: "Operational excellence",
          practices: [
            {
              title: "Orchestrate with Azure Data Factory",
              body: "Use Azure Data Factory or Azure Synapse Pipelines to orchestrate complex workflows, enabling better dependency management, retries, and monitoring across Azure services.",
            },
            {
              title: "CI/CD & version control",
              body: "Integrate with Git (Azure DevOps or GitHub) for version control. Use Databricks Asset Bundles (DABs) or Terraform for Infrastructure as Code to automate deployments across environments.",
            },
            {
              title: "Clean up temporary data",
              body: "Use dbutils.fs.rm() to remove temporary files and drop intermediate tables after execution to maintain a clean environment and reduce storage costs.",
            },
          ],
        },
      ]}
      references={[
        { label: "Best practices for cost optimization", href: "https://learn.microsoft.com/en-us/azure/databricks/lakehouse-architecture/cost-optimization/best-practices", source: "Microsoft" },
        { label: "Photon Acceleration", href: "https://learn.microsoft.com/en-us/azure/databricks/compute/photon", source: "Microsoft" },
        { label: "Liquid Clustering for Delta Tables", href: "https://learn.microsoft.com/en-us/azure/databricks/delta/clustering", source: "Microsoft" },
        { label: "Unity Catalog Governance", href: "https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/", source: "Microsoft" },
        { label: "Adaptive Query Execution", href: "https://learn.microsoft.com/en-us/azure/databricks/optimizations/aqe", source: "Microsoft" },
      ]}
      upNext={{ label: "Best practices in Databricks", to: "/insights/databricks-best-practices" }}
      continueReading={{
        image: "https://maqsoftware.com/img/blog/databricks-best-practice-guide.png",
        title: "Best practices in Databricks",
        description: "Optimizing performance, collaboration, and security on Databricks.",
        to: "/insights/databricks-best-practices",
      }}
    />
  );
}
