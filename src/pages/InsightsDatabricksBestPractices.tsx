import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDatabricksBestPractices() {
  return (
    <GuideArticle
      eyebrow="Databricks"
      title="Best practices in Databricks"
      intro="Databricks is a unified analytics platform providing cloud-based services for big data and machine learning. This guide outlines best practices to optimize Databricks performance, enhance collaboration, and ensure security across performance & cost, data engineering, governance, and generative AI."
      lastUpdated="December 2025"
      ctaSubject="Databricks best practices - MAQ Software"
      sections={[
        {
          title: "Performance & cost optimization",
          practices: [
            {
              title: "Use automatic Liquid Clustering",
              body: "Replace traditional partitioning and Z-Ordering with Liquid Clustering. It automatically adjusts data layout based on query patterns, solving the small-files problem and improving query performance without manual tuning.",
            },
            {
              title: "Adopt Serverless compute",
              body: "Use Serverless SQL Warehouses and Serverless Jobs to eliminate idle time and infrastructure management. Serverless compute scales instantly and charges only for the seconds used.",
            },
            {
              title: "Enable Predictive Optimization",
              body: "For Unity Catalog managed tables, enable Predictive Optimization to automatically run maintenance operations like OPTIMIZE and VACUUM at the optimal time.",
            },
          ],
        },
        {
          title: "Data engineering & development",
          practices: [
            {
              title: "Databricks Asset Bundles (DABs)",
              body: "Use Databricks Asset Bundles for Infrastructure as Code (IaC) and CI/CD. DABs let you define jobs, pipelines, and infrastructure in YAML and deploy them consistently across Dev, Staging, and Prod.",
            },
            {
              title: "Lakeflow Declarative Pipelines",
              body: "Leverage Lakeflow (Delta Live Tables) to build reliable ETL pipelines. Define data transformations declaratively and let Databricks handle orchestration, error handling, and auto-scaling.",
            },
            {
              title: "Version control with Git",
              body: "Integrate Databricks Repos with your Git provider (GitHub, Azure DevOps) to enable branch-based development, code reviews, and version history for notebooks and code.",
            },
          ],
        },
        {
          title: "Governance & security",
          practices: [
            {
              title: "Unity Catalog",
              body: "Centralize access control, auditing, and data discovery with Unity Catalog. It provides a unified governance layer for all data and AI assets (tables, files, models) across workspaces.",
            },
            {
              title: "Attribute-Based Access Control (ABAC)",
              body: "Implement ABAC to create scalable access policies based on tags (e.g., PII, Confidential) rather than managing permissions for individual users and tables.",
            },
            {
              title: "Databricks Clean Rooms",
              body: "Use Clean Rooms for secure collaboration with external partners. Share data and run joint analyses without exposing the underlying raw data or moving it out of your environment.",
            },
          ],
        },
        {
          title: "Generative AI",
          practices: [
            {
              title: "Mosaic AI Agent Framework",
              body: "Build and deploy production-grade GenAI agents using the Mosaic AI Agent Framework. It provides tools for evaluation, tracing, and deployment of LLM applications.",
            },
            {
              title: "Vector Search",
              body: "Use Mosaic AI Vector Search to build RAG (Retrieval Augmented Generation) applications. It automatically syncs your Delta tables to a vector index for fast semantic search.",
            },
          ],
        },
      ]}
      references={[
        { label: "Liquid Clustering", href: "https://learn.microsoft.com/en-us/azure/databricks/delta/clustering", source: "Microsoft" },
        { label: "Databricks Asset Bundles", href: "https://learn.microsoft.com/en-us/azure/databricks/dev-tools/bundles/", source: "Microsoft" },
        { label: "Unity Catalog", href: "https://learn.microsoft.com/en-us/azure/databricks/data-governance/unity-catalog/", source: "Microsoft" },
        { label: "Mosaic AI Agent Framework", href: "https://learn.microsoft.com/en-us/azure/databricks/generative-ai/agent-framework/", source: "Microsoft" },
      ]}
      upNext={{ label: "Azure Databricks optimization best practices", to: "/insights/azure-databricks-best-practices" }}
    />
  );
}
