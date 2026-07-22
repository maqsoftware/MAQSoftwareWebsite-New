import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDataValidationBestPractices() {
  return (
    <GuideArticle
      eyebrow="Azure"
      title="Data Validation Best Practice Guide"
      intro="Quality data is critical for identifying performance gaps, key industry trends, and revenue opportunities. Since the data wave, businesses have shifted toward unstructured and semi-structured data, increasing the need for BI processing and validation. Validating your data provides access to reliable data on demand, minimizes effort, cost, and errors, and increases competitive edge with more accurate insights. Our exclusive data validation framework can be implemented in any BI project with 100% accuracy for descriptive, prescriptive, and other insights."
      lastUpdated="July 31, 2023"
      ctaSubject="Data validation best practices - MAQ Software"
      ctaText="Want help building a data validation framework for your BI estate? MAQ Software's data team can help."
      sections={[
        {
          title: "Seven-step validation framework",
          practices: [
            { title: "1. Inventory upstream data sources", body: "Ensure upstream data is accessible. Record the number of data records to identify if data is lost or duplicated during the next steps." },
            { title: "2. Perform data staging", body: "Identify data with a unique combination of attributes. Perform a trend analysis of key attributes — examples include the rate of attribute changes or the rate of data changes period over period." },
            { title: "3. Push to data mart", body: "If using Databricks (ADB), process notebooks in parallel (versus sequentially) to reduce refresh time and identify platform run failures. If using tabular models, cross-check the data consistency between data mart and tabular models. For non-cloud environments using SSIS or other ETL tools, implement similar checks for staging against data mart publish — for example, data profiling in SSIS." },
            { title: "4. Validate data staging and mart", body: "Perform build verification testing (BVT), table-level BVT, and BVT for multiple sources." },
            { title: "5. Publish data for end users", body: "Validate that no data was lost or duplicated while being pulled from databases — for example, by tracking Azure Data Warehouse (ADW) dump failures. Check for data loss when changing the schema from temporary format to the end-user-agreed schema. Track downstream user data usage and remove unused tables/views to improve report performance." },
            { title: "6. Track tabular or multidimensional model performance", body: "Track measure execution time to detect time lags. Remove unused reporting measures. Check all tabular/multidimensional columns to prevent failures while processing data. Compare previous tabular/multidimensional refreshes with the current refresh for sudden drops or increases in record counts beyond a predefined threshold." },
            { title: "7. Verify BI reporting", body: "Use an Import vs. tabular model validator to compare datapoint consistency rendered in the BI report through import model and tabular. Track BI report usage to understand visitor counts across pages, active users, and historical usage patterns." },
          ],
        },
      ]}
      references={[
        { label: "Ensure quality data on demand with our 7 data validation best practices", href: "/insights/data-validation-best-practices", source: "MAQ Software" },
        { label: "Case Study: Data Validation Framework reduced our client's support tickets", href: "https://blog.maqsoftware.com/2019/06/case-study-data-validation-framework.html", source: "MAQ Software Blog" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/BPG008-main.webp",
        title: "Dynamics 365 Development Best Practices",
        description: "Optimize your Dynamics 365 environment with our 32 best practices on developing fields, views, and more.",
        to: "/insights/dynamics-365-development-best-practices",
      }}
    />
  );
}
