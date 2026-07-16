import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsPowerAppsBestPractices() {
  return (
    <GuideArticle
      eyebrow="Power Apps"
      title="Power Apps Best Practices"
      intro="This guide covers the 13 best practices you need to optimize your canvas apps."
      lastUpdated="August 2, 2023"
      ctaSubject="Power Apps best practices - MAQ Software"
      ctaText="Need a canvas-app performance review or component library? MAQ Software's Power Platform team can help."
      sections={[
        {
          title: "13 best practices to optimize your canvas apps",
          practices: [
            { title: "1. Enable Loading Spinner for galleries", body: "Loading spinners signal that content is still being loaded, reducing confusion or the likelihood of users leaving the page. Go to the Gallery panel > Advanced. Find LoadingSpinner and change LoadingSpinner.None to LoadingSpinner.Controls or LoadingSpinner.Data based on your needs." },
            { title: "2. Using more than 20 images? Insert them as HTML text", body: "Images uploaded through the Media panel increase the app's load time. For 20+ images, insert them as HTML text instead to minimize the load. Example: 25 images uploaded through the Media panel produced a 3-second load time, while 25 images inserted with <img> tags loaded in 1 second. Go to Insert > Text > HTML text and enter `<img src='INSERT HYPERLINK'>` in the formula bar." },
            { title: "3. Create components for common elements", body: "To save time and unify design across screens or apps, create components for frequently used elements like headers and footers. Go to the Tree view pane > Components > +New component, then build your component as needed." },
            { title: "4. Use the Concurrent function if formula execution is non-sequential", body: "If you have more than one formula in no particular sequence, evaluate them with Concurrent(). It evaluates multiple formulas simultaneously so the app loads data faster." },
            { title: "5. Use delegable calls over non-delegable calls", body: "Delegable functions are evaluated on the server with higher performance. Non-delegable functions require data to be downloaded to the client and evaluated locally — slower and more data-intensive." },
            { title: "6. Use IfError for exception handling", body: "IfError tests values for errors and replaces them with valid values so downstream calculations continue without delay. To enable it, go to Settings > Upcoming features > Experimental and turn on Formula-level error management. Example: `IfError(1/0, Notify('Error has occurred', Error), Notify('Success', Success))`." },
            { title: "7. Store data in a collection", body: "Avoid repeated calls to data sources by storing data in a collection or caching values locally with the Set function, then reusing them throughout the app." },
            { title: "8. Use a variable or collection to share information between screens", body: "Avoid control dependencies across screens. Store gallery selections in a variable, e.g., `Set(varName, Gallery.Selected.columnName)`, or pass them in a `Navigate()` call: `Navigate(nextScreen, Screen Transition, {varName: Gallery.Selected.columnName})`." },
            { title: "9. Use combo boxes instead of drop downs", body: "Combo boxes combine a search bar with a drop-down, enabling users to search by category instead of scrolling through long lists. Go to Insert > Input > Combo Box, then build the combo box as needed." },
            { title: "10. Use themes", body: "A theme defines design properties for controls and components — colors, fonts, borders — and enables consistent design across your app. Under the Home tab, use the Theme drop-down to select a theme." },
            { title: "11. Limit the code inside the OnStart property", body: "Limit code in OnStart to improve app load time. Avoid complex, long-running formulas and use Concurrent() wherever possible." },
            { title: "12. Use the Power Apps Code Review Tool", body: "An automated Microsoft tool that analyzes the loaded canvas app against a predefined checklist, assigning pass/fail scores per item. Aim for a minimum score of 90% — 100% is not always necessary, since deviating from best practices is sometimes warranted, but always strive for the highest score possible." },
            { title: "13. Use the Power Apps source code tool for manual code review", body: "Unpack an .msapp file to generate a single YAML file containing all the code for a particular screen. This lets developers review code top-to-bottom in Visual Studio Code rather than navigating through individual properties of canvas controls — the C# syntax highlighter works particularly well because Power Apps code shares similarities with C#." },
          ],
        },
      ]}
      references={[
        { label: "11 best practices to optimize your canvas apps", href: "/insights/power-apps-best-practices", source: "MAQ Software" },
        { label: "Use theming components", href: "https://learn.microsoft.com/en-us/power-platform/guidance/coe/theming-components", source: "Microsoft Docs, last updated February 14, 2022" },
        { label: "Understand delegation in a canvas app", href: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/delegation-overview", source: "Microsoft Docs, last updated February 6, 2022" },
        { label: "Tips and best practices to improve performance of canvas apps", href: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/performance-tips", source: "Microsoft Docs, last updated January 13, 2022" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/BPG005-main.webp",
        title: "DAX Best Practice Guide",
        description: "Improve your Power BI speed and functionality with our 22 DAX best practices.",
        to: "/insights/dax-best-practices",
      }}
    />
  );
}
