import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsPowerBIBestPractices() {
  return (
    <GuideArticle
      eyebrow="Power BI"
      title="Power BI Best Practices"
      intro="This guide covers the best practices you need to improve your Power BI performance, security, and design. As a Microsoft Fabric Featured Partner and the 2021 Power BI Partner of the Year, we have proven expertise in Power BI migration and optimization."
      lastUpdated="December 10, 2025"
      ctaSubject="Power BI best practices - MAQ Software"
      ctaText="Want a Power BI performance, security, and design review on your tenant? MAQ Software's Power BI team can help."
      sections={[
        {
          title: "Performance",
          practices: [
            { title: "1. Limit the number of visuals in dashboards and reports", body: "Using too many visuals slows report performance as each visual requires data processing and rendering. Limit widget visuals to eight per report page, grids to one per page, and tiles to 10 per dashboard. Consider Power BI's new card visual, which displays multiple cards within a single container — consolidating information into a single query." },
            { title: "2. Use the on-premises data gateway in standard mode (not personal mode)", body: "Personal mode imports data into Power BI, which can cause resource limitations and performance issues with large databases. Standard mode keeps data in its original location, minimizing duplication, reducing memory usage, and avoiding bottlenecks." },
            { title: "3. Use separate gateways for live connection and scheduled refresh", body: "Sharing one gateway for DirectQuery live connections and scheduled refresh can overload it during refreshes and slow live connections. Separate gateways let each workload run efficiently without affecting the other." },
            { title: "4. Use calculated measures and filters for complex aggregations", body: "Calculated measures evaluated at query time are more efficient than calculated columns for complex aggregations. Pair them with filters to keep query performance predictable." },
            { title: "5. Push calculations to the source", body: "Offloading processing to the source optimizes query execution. Calculations evaluated closer to the data are generally faster than running them inside Power BI." },
            { title: "6. Use a star schema instead of snowflake when possible", body: "Star schemas are simpler and more denormalized than snowflake schemas. They reduce required joins, accelerate query execution, simplify report development, and ease maintenance." },
            { title: "7. Use slicers sparingly", body: "Each slicer fires two queries (data and selection details). Too many slicers drastically slow performance. Use the Filter pane to evaluate and remove unnecessary slicers." },
            { title: "8. Host reports and data sources in the same region", body: "Hosting the Power BI tenant and data source in the same region minimizes network latency and speeds up data transfer, query execution, and report rendering." },
            { title: "9. Partition data and process multiple partitions in parallel for large semantic models", body: "Partitioning splits large tables into smaller subsets based on specific criteria. Power BI uses columnar indexes, so longer, leaner tables perform better. Importing only the necessary fields and tables improves loading efficiency and reduces resource consumption." },
            { title: "10. Use calculation groups to reduce redundant measures", body: "Calculation groups let you define calculations (like time intelligence) once and apply them to multiple measures, reducing measure count and simplifying maintenance." },
            { title: "11. Use templates (.PBIT files) instead of starting with an empty .PBIX", body: "Templates enable standardized, branded reports faster. They save custom color palettes and themes, auto-connect to commonly used data sources, and ship with common DAX measures." },
            { title: "12. Use query reduction settings", body: "Add an Apply button to slicers and the filter pane so changes only fire queries when the user clicks Apply. This reduces the number of queries triggered, especially in complex reports." },
            { title: "13. Avoid bi-directional and many-to-many relationships against high-cardinality columns", body: "These relationships significantly impact performance due to increased data processing and query complexity. Avoiding them on high-cardinality columns reduces resource consumption and speeds up rendering." },
            { title: "14. Avoid floating-point data types", body: "Float and double can introduce round-off errors and require more processing power. Avoiding them improves accuracy and report efficiency." },
            { title: "15. Replace the auto-generated date table with a custom date table", body: "Auto-generated date tables create a separate table for each date column, bloating the model. A single custom date table (with date and time split for better compression) streamlines the model and enables more efficient time intelligence." },
            { title: "16. Set IsAvailableInMdx to false on non-attribute columns", body: "Disabling attribute hierarchy for non-attribute columns (like measures) streamlines the data model, reducing size and load time." },
            { title: "17. Reduce the amount of data loaded on the page", body: "Use bookmarks, drillthrough pages, and tooltips to reduce data loaded at once. This improves page load times — especially on landing pages where quick access matters most." },
            { title: "18. Use report backgrounds for static images", body: "Background images use fewer resources than rendering multiple individual visuals for the same effect." },
            { title: "19. Choose the ideal storage mode for tables", body: "Choose Import, DirectQuery, or Dual based on data aggregation needs and visualization requirements. The storage mode directly affects responsiveness and efficiency." },
            { title: "20. Cross-check referential integrity for relationships", body: "In DirectQuery sources with enforced primary keys, verify the Assume Referential Integrity setting. If Off, Power BI defaults to slower outer joins instead of inner joins." },
          ],
        },
        {
          title: "Security",
          practices: [
            { title: "1. Enable and optimize Row-Level Security (RLS)", body: "RLS limits data access based on user roles, so Power BI only imports data the user is authorized to view. Keep RLS logic simple and push complex calculations to the source to reduce the computational load on Power BI." },
            { title: "2. Use Power BI-certified custom visuals", body: "Certified visuals have passed rigorous quality testing and are the only custom visuals that work in Export to PowerPoint mode and email subscriptions. Microsoft verifies their performance and robustness." },
            { title: "3. Categorize report data by business impact using sensitivity labels", body: "Sensitivity labels (High, Medium, Low Business Impact) raise user awareness about data security. High-impact data requires a policy exception to be shared externally, helping enforce appropriate handling of sensitive information." },
          ],
        },
        {
          title: "Design",
          practices: [
            { title: "1. Align cache update frequency with data source refresh", body: "Power BI's default cache update frequency is one hour. Synchronizing it with the source refresh frequency ensures data accuracy and avoids unnecessary processing." },
            { title: "2. Use white or light background colors", body: "Light backgrounds make reports printer-friendly and easier to share both online and offline." },
            { title: "3. Shorten displayed numbers", body: "Limit displayed numerals to four digits and decimals to two places. This improves readability and consistency, especially when scaling to thousands or millions." },
            { title: "4. Use tooltips for additional information", body: "Tooltips add context in a compact form. Curate the visuals inside them so they help without overwhelming the user." },
            { title: "5. Use meaningful names for report objects", body: "Use clear, business-friendly names for columns and measures, and hide unused columns to reduce user confusion." },
            { title: "6. Enable personalization of visuals", body: "Turn on the Personalize visuals option when sharing reports. Combined with personal bookmarks, it empowers users and facilitates self-service BI." },
            { title: "7. Avoid visual/page scrolls and non-standard report sizes", body: "Excessive scrolling disrupts analysis. Non-standard sizes display inconsistently across devices, producing poor responsiveness and a disjointed visual presentation." },
            { title: "8. Use drillthrough buttons instead of right-click navigation", body: "Drillthrough buttons with context-driven conditional formatting offer a more intuitive way for users to explore data than right-click drillthrough." },
            { title: "9. Optimize visual interactions", body: "Evaluate cross-filtering and cross-highlighting interactions. Remove the ones not relevant to your audience. For DirectQuery reports, use the Optimize Ribbon to tune interactivity." },
            { title: "10. Use field parameters for dynamic reporting", body: "Field parameters let users switch the measure or dimension being analyzed inside a visual, reducing the need for duplicate visuals or bookmarks." },
          ],
        },
      ]}
      references={[
        { label: "Improve your Power BI performance and security with our best practices", href: "https://maqsoftware.com/insights/power-bi-best-practices", source: "MAQ Software" },
        { label: "Tips for designing a great Power BI dashboard", href: "https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards-design-tips", source: "Microsoft Corporation, published October 20, 2025" },
        { label: "Optimization guide for Power BI", href: "https://learn.microsoft.com/en-us/power-bi/guidance/power-bi-optimization", source: "Microsoft Corporation, published December 30, 2024" },
        { label: "Customize the Visualizations pane in Power BI Desktop and the Power BI service", href: "https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-report-visualizations", source: "Microsoft Corporation, published October 1, 2025" },
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
