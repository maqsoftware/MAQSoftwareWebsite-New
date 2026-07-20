import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDAXBestPractices() {
  return (
    <GuideArticle
      eyebrow="Power BI"
      title="DAX Best Practices"
      intro="This guide enables you to speed up your Power BI reports by optimizing their back-end code. Based on our experience as a Microsoft Power BI Partner of the Year, we have grouped these practices into Leveraging Modern DAX Features, Improving DAX Syntax, Optimizing DAX Functions, and Common Mistakes to Avoid."
      lastUpdated="December 10, 2025"
      ctaSubject="DAX best practices - MAQ Software"
      ctaText="Need help optimizing slow DAX measures or report-load times? MAQ Software's Power BI team can review your tenant."
      sections={[
        {
          title: "Before you start",
          practices: [
            { title: "Clear your DAX cache", body: "Clear your DAX cache before optimizing, since the cache builds up from internal VertiPaq queries. You can clear it from DAX Studio. Resetting your cache also enables you to measure performance gains more effectively." },
          ],
        },
        {
          title: "Leveraging Modern DAX Features",
          practices: [
            { title: "1. Use Visual Calculations", body: "Visual calculations let you create calculations directly on the visual, referencing columns, measures, or other visual calculations. This simplifies DAX by handling complex logic (like running totals or moving averages) at the visual level, reducing semantic model complexity and improving performance." },
            { title: "2. Implement Calculation Groups", body: "Use Calculation Groups to reduce measure sprawl. Instead of creating separate measures for YTD, QTD, and MTD for every metric (Sales, Cost, Profit), create a single calculation group to apply these time intelligence patterns dynamically to any measure." },
            { title: "3. Utilize DAX Query View", body: "Use the DAX Query View in Power BI Desktop to write, run, and debug DAX queries natively. Use Quick Queries to instantly analyze table statistics and preview data without creating visuals." },
          ],
        },
        {
          title: "Improving DAX Syntax",
          practices: [
            { title: "1. Use DAX Formatter to format your code", body: "Formatted code is easier to read and maintain. DAX Formatter is a free tool that transforms raw DAX into readable code." },
            { title: "2. Use DISTINCT() and VALUES() consistently", body: "DISTINCT() does not return blanks added due to integrity violations; VALUES() returns both original blanks and Power BI–added blanks. Be consistent across the entire report. We recommend using VALUES() if blank values are not an issue." },
            { title: "3. Add column and measure references in DAX expressions", body: "Always use fully qualified column references and never fully qualified measure references. This eliminates ambiguity, makes code readable at a glance, and ensures expressions keep working when a measure's home table changes. Example: `Profit = Orders[Sales] - Orders[Cost]` rather than `Profit = [Sales] - [Cost]`." },
            { title: "4. Reuse measures", body: "Split calculations into smaller blocks and reuse measures instead of repeating the same code. Example: `Sales $ = SUM(Orders[Sales])`, `All Sales $ = CALCULATE([Sales $], ALL(Orders))`, `Sales % = DIVIDE([Sales $], [All Sales $])`. Exercise caution when aggregations differ or multiple CALCULATE wrappers are involved." },
            { title: "5. Use friendly names and add descriptions", body: "Make measure and column names user-friendly — spaces are fine if they make the name self-explanatory. Add a description in the modeling view to provide additional information about each measure." },
          ],
        },
        {
          title: "Optimizing DAX Functions",
          practices: [
            { title: "1. Use ISBLANK() instead of = Blank() check", body: "ISBLANK() exclusively checks for blanks, while = Blank() returns True for either blank values or empty strings." },
            { title: "2. Use COALESCE() for simpler null handling", body: "Use COALESCE() to handle blank values more efficiently than nested IF statements. Example: `COALESCE([Measure], 0)` instead of `IF(ISBLANK([Measure]), 0, [Measure])`." },
            { title: "3. Use = 0 instead of ISBLANK() || = 0", body: "BLANK corresponds to 0 for integers, empty string for strings, and 1-1-1900 for dates. ISBLANK() || = 0 performs two checks; = 0 performs both at once, improving speed. To check exclusively for zero, use the IN operator." },
            { title: "4. Use SELECTEDVALUE() instead of HASONEVALUE()", body: "SELECTEDVALUE() internally retrieves the single value if there is one and returns blank if there are multiple, so you no longer need HASONEVALUE() + VALUES() together." },
            { title: "5. Use SELECTEDVALUE() instead of VALUES()", body: "VALUES() returns an error if it encounters multiple values, which is often handled with error functions that hurt performance. SELECTEDVALUE() returns blank in that case instead." },
            { title: "6. Use variables instead of repeating measures inside an IF branch", body: "Store reused expressions in a variable (`VAR totalRows = [Total Rows]`) and reference the variable in both branches of the IF. Note: variables are constants once evaluated." },
            { title: "7. Use DIVIDE() instead of /", body: "DIVIDE() internally checks for a zero denominator and returns the specified third parameter. The / operator throws an exception on division by zero. Use / only if you're certain the denominator is non-zero." },
            { title: "8. Use KEEPFILTERS() instead of FILTER(T)", body: "FILTER() overrides any existing filter set on a column applied via slicers. KEEPFILTERS() intersects with existing filters, maintaining current context — useful when you want to preserve report- or slicer-level filters." },
            { title: "9. Use FILTER(ALL(ColumnName)) instead of FILTER(VALUES()) or FILTER(T)", body: "Apply filters to the desired column rather than the whole table — it scales better. Example: `CALCULATE([Total Sales], FILTER(ALL(Products[Color]), Color = 'Red'))`." },
            { title: "10. Use COUNTROWS instead of COUNT", body: "COUNTROWS is more efficient, does not consider BLANKs, and makes the intent clearer. Example: `Sales Orders = COUNTROWS(Sales)` rather than `COUNT(Sales[OrderDate])`." },
            { title: "11. Use SEARCH() with the last parameter", body: "SEARCH() accepts a value to return if the search string is not found. Always use it instead of wrapping SEARCH() in error functions." },
            { title: "12. ALL vs. ALLEXCEPT", body: "ALLEXCEPT() behaves like ALL()/VALUES() only when the exempted columns are columns on the pivot. It does NOT preserve pivot context on columns that are not on the pivot. Use ALL() instead of ALLEXCEPT() when using VALUES()." },
            { title: "13. Avoid using the entire table with ALL()", body: "Avoid `ALL(Table)` unless necessary. The same result is usually achievable by filtering with specific columns. Example: `CALCULATE(SUM(Orders[Sales]), ALL(Calendar[Fiscal Year], Calendar[Fiscal Month]))`." },
            { title: "14. For virtual relationships, use TREATAS instead of INTERSECT or FILTER", body: "Always use a physical relationship to propagate filters when possible. When you must use a virtual relationship, implement it with TREATAS rather than INTERSECT or FILTER." },
          ],
        },
        {
          title: "Common Mistakes to Avoid",
          practices: [
            { title: "1. Do not change BLANK values to zeros or other strings", body: "Power BI automatically filters rows with blank values, which improves performance with large datasets. Replacing blanks with zeros forces Power BI to keep those rows, hurting performance." },
            { title: "2. Use (a-b)/b with variables instead of a/b – 1 or a/b*100–100", body: "(a-b)/b returns blank when both a and b are blank (so Power BI filters them out). a/b – 1 returns -1, which is misleading and prevents row filtering." },
            { title: "3. Stop using IFERROR() and ISERROR()", body: "These functions force the engine to run a step-by-step row check. The newer FIND(), SEARCH(), DIVIDE(), and SELECTEDVALUE() functions perform error checks internally and avoid the need for IFERROR()/ISERROR() entirely." },
            { title: "4. Do not use scalar variables in SUMMARIZE()", body: "Use SUMMARIZECOLUMNS() instead — it is newer and more optimized. Restrict SUMMARIZE() to grouping elements of a table that don't have associated measures or aggregations." },
            { title: "5. Avoid AddColumns() inside measure expressions", body: "Measures are calculated iteratively by default. Calling iterative functions like AddColumns() inside a measure creates nested iterations and hurts performance." },
            { title: "6. Convert two-value columns to Boolean", body: "If a column has only two distinct values, convert it to a Boolean (true/false). Boolean data types speed up processing on large row counts." },
            { title: "7. Avoid filtering on string columns", body: "Use integer ID columns for filtering instead of strings. This lets the VertiPaq engine use value encoding to reduce column memory — value encoding only works on integers." },
            { title: "8. Work upstream when possible", body: "If certain calculations need complex DAX or repeated filters, consider creating calculated columns or flags in the back end rather than doing the work inside DAX measures." },
          ],
        },
      ]}
      references={[
        { label: "Improve Power BI speed and functionality with our 22 DAX best practices", href: "/#/insights/dax-best-practices", source: "MAQ Software" },
        { label: "Visual calculations overview", href: "https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-visual-calculations-overview", source: "Microsoft Corporation" },
        { label: "DAX query view", href: "https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view", source: "Microsoft Corporation" },
        { label: "Calculation groups", href: "https://learn.microsoft.com/en-us/analysis-services/tabular-models/calculation-groups", source: "Microsoft Corporation" },
        { label: "Data Analysis Expressions (DAX) Reference", href: "https://docs.microsoft.com/en-us/dax/data-analysis-expressions-dax-reference", source: "Microsoft Corporation, updated regularly" },
        { label: "DAX function reference", href: "https://docs.microsoft.com/en-us/dax/dax-function-reference", source: "Microsoft Corporation" },
        { label: "Optimization guide for Power BI", href: "https://docs.microsoft.com/en-us/power-bi/power-bi-reports-performance", source: "Microsoft Corporation" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/AzureDevOpsBestPracticeguide.webp",
        title: "Azure DevOps Best Practice Guide",
        description: "Optimize your DevOps strategies with our 9 essential best practices.",
        to: "/insights/azure-dev-ops-best-practices-guide",
      }}
    />
  );
}
