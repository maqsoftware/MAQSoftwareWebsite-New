import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDynamics365DevelopmentBestPractices() {
  return (
    <GuideArticle
      eyebrow="Dynamics 365"
      title="Dynamics 365 Development Best Practice Guide"
      intro="This guide provides the best practices you need to optimize the following Dynamics 365 (D365) functions: Solutions, Fields, Relationships, Forms, Views, Model-driven Apps, Processes, Web Resources, and Plug-ins."
      lastUpdated="March 27, 2024"
      ctaSubject="Dynamics 365 development best practices - MAQ Software"
      ctaText="Need a Dynamics 365 customization audit or development uplift? MAQ Software's Dynamics team can help."
      sections={[
        {
          title: "Solutions",
          practices: [
            { title: "1. Add a publisher prefix", body: "Adding a prefix to solution components that's relative to you or your organization enables users to quickly identify who created or customized each component." },
            { title: "2. Manage customizations in custom solutions (not default solutions)", body: "Customizations created within default solutions cannot be exported or distributed to other environments, and they use the default publisher, leaving components with an unspecified publisher. Create custom components inside custom solutions, and if you need to customize out-of-the-box components, add them to the custom solution before customizing." },
            { title: "3. Add detailed component descriptions", body: "Adding detailed descriptions to entities, forms, views, fields, and processes prevents confusion and enables fellow developers to easily identify what each component is for." },
            { title: "4. Export unmanaged and managed solutions for every release", body: "Unmanaged solutions can be used to reconfigure the system or set up a new instance if the development environment fails. Managed solutions are used to deploy customizations in higher environments (QA, pre-production, production)." },
            { title: "5. Create separate, unmanaged solutions for ribbon customizations", body: "Ribbon Workbench imports entire solutions, recreates each entity ribbon, and then publishes them. Fewer entities reduce ribbon update time." },
          ],
        },
        {
          title: "Fields",
          practices: [
            { title: "1. Use unique field names", body: "Duplicate field names may cause errors while importing data, or confuse users creating personal views, Power Automate flows, and more." },
            { title: "2. Choose the correct field data type", body: "Choose a data type that accurately reflects the data you want to store and supports null values if needed. For example, if time is not required for a date, choose Date Only; if a field allows only two values without any default, choose Option Set." },
            { title: "3. Create alternate keys for fields or groups of fields", body: "Alternate keys prevent users from creating records with duplicate field values or combinations of values. Warning: once a key is deployed to a managed environment, it cannot be deleted." },
            { title: "4. Check 'Disable most recently used items' for filtered lookup fields", body: "This prevents users from selecting unrelated options from recent searches. For example, if lookups are 'State' and 'City', disable most recently used items on 'City' — otherwise users may select a city from recent searches that is irrelevant to the selected state." },
          ],
        },
        {
          title: "Relationships",
          practices: [
            { title: "1. Enable field mapping", body: "Enable field mapping to auto-populate field data from a parent record when a child record is created (common for sub-grids)." },
          ],
        },
        {
          title: "Forms",
          practices: [
            { title: "1. Remove asynchronous function calls when saving quick create forms", body: "On quick create forms, the Save & Close button does not wait for asynchronous function calls to complete (e.g., a Retrieve Record WebAPI call). If possible, remove asynchronous calls when saving quick create forms and instead execute them on form load or upon change of field values." },
            { title: "2. Register event handlers for field events programmatically", body: "Use the JavaScript addOnChange method to bind field onChange events instead of binding them from form properties. This gives you programmatic control over field events." },
          ],
        },
        {
          title: "Views",
          practices: [
            { title: "1. Use only alphanumeric characters for view names", body: "Special characters in view names may cause issues when importing from Excel." },
            { title: "2. Limit view columns to show only required fields", body: "Optional fields may not have data and may increase the size of the grid to accommodate empty cells." },
            { title: "3. For sub-grid views, don't add the parent column to the view", body: "If you add a parent column to a sub-grid view, the same value appears for all related records. Example: don't add a Country column on a State sub-grid view inside a Country entity." },
            { title: "4. Add icons for categorical fields", body: "Adding icons for status, gender, rank, profit/loss, etc. enables users to quickly identify field values at a glance." },
            { title: "5. Ensure columns and relative orders are consistent across active and inactive views", body: "This keeps information consistent across both record states." },
          ],
        },
        {
          title: "Model-driven Apps",
          practices: [
            { title: "1. Replace the app's GUID with a user-friendly URL name", body: "Use the app's URL suffix to access the app instead of the globally unique identifier (GUID). The URL suffix is more user-friendly." },
          ],
        },
        {
          title: "Processes",
          practices: [
            { title: "1. Update the stage of Business Process Flow (BPF) with custom fields", body: "Instead of executing moveNext() and movePrevious() from scripts, update custom fields (such as status) directly from scripts. This activates predefined background workflows, plug-ins, and Power Automate flows linked to the BPF entity to update the active stage." },
          ],
        },
        {
          title: "Web Resources",
          practices: [
            { title: "1. Use namespace for JavaScript web resources", body: "Namespaces ensure JavaScript methods are unique and prevent collisions between identifiers." },
            { title: "2. Use relative paths to reference web resources", body: "Relative paths keep web resource references environment-independent, since absolute paths include the environment name." },
            { title: "3. Write code in a common JavaScript web resource and add it to entity forms", body: "This saves time by letting developers quickly reference and reuse common code." },
            { title: "4. Pass ExecutionContext only when necessary; otherwise use FormContext", body: "ExecutionContext is the parent object of FormContext, enabling not just form event handlers but also grid event handlers via GridContext." },
            { title: "5. Bind preSearch on form load and use a global variable for dynamic filtration", body: "Bind the preSearch lookup field event only on form load and update a global variable whenever custom filtration changes. This ensures high performance and easy maintenance of lookup filtration code." },
            { title: "6. Use Xrm.Constants", body: "Use Xrm.Constants to access constants like attribute required levels (none, required, recommended), attribute types (Boolean, date/time, lookup), and form notification levels (error, warning)." },
            { title: "7. Open forms with navigation popup", body: "Use Xrm.Navigation.navigateTo to open forms (entity record, entity list, or HTML web resource) as a modal dialog rather than Xrm.Internal.openDialog or jQuery custom dialog frameworks, which are deprecated or unsupported." },
            { title: "8. Use browser-specific web developer tools to debug", body: "Debugging a JavaScript web resource in the console often requires rewriting code. Browser DevTools (Chrome's Run Snippet, Firefox's Scratchpad) run in the page's JavaScript context and are faster than external tools." },
          ],
        },
        {
          title: "Plug-ins",
          practices: [
            { title: "1. Use context.depth when updating fields using plug-ins", body: "If context.depth is not used, it causes infinite recursive plug-in calls." },
            { title: "2. Update an entity by creating a new instance with required fields only", body: "Instead of service.Update(case) directly on the loaded entity, create `Entity temp = new Entity('case')`, set only the fields you need, and call service.Update(temp). This avoids unnecessary field updates." },
            { title: "3. Declare main execution function as static", body: "Declare all other helper functions as private. This reduces code duplication and improves performance." },
            { title: "4. Create separate C# files for constants, XML expressions, and exception handling", body: "Separating these concerns improves code readability and maintenance." },
            { title: "5. Limit plug-in files to a maximum of 8MB", body: "Microsoft Dynamics CRM plug-ins have a maximum size. Exceeding the limit prevents remaining plug-ins from being imported." },
          ],
        },
      ]}
      references={[
        { label: "Optimize your Dynamics 365 environment with our 32 best practices", href: "/#/insights/dynamics-365-development-best-practices", source: "MAQ Software" },
        { label: "Create a solution in Power Apps", href: "https://docs.microsoft.com/en-us/powerapps/maker/data-platform/create-solution#solution-publisher", source: "Microsoft Docs, last updated June 14, 2023" },
        { label: "Define alternate keys to reference records", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/define-alternate-keys-reference-records?view=op-9-1", source: "Microsoft Docs, last updated March 30, 2023" },
        { label: "Write and register a plug-in (Microsoft Dataverse) – Power Apps", href: "https://docs.microsoft.com/en-us/powerapps/developer/data-platform/tutorial-write-plug-in", source: "Microsoft Docs, last updated September 8, 2023" },
        { label: "navigateTo (Client API reference) in model-driven apps – Power Apps", href: "https://docs.microsoft.com/en-us/powerapps/developer/model-driven-apps/clientapi/reference/xrm-navigation/navigateto", source: "Microsoft Docs, last updated November 29, 2022" },
        { label: "Build your first model-driven app", href: "https://docs.microsoft.com/en-us/powerapps/maker/model-driven-apps/build-first-model-driven-app", source: "Microsoft Docs, last updated February 22, 2022" },
        { label: "Change the prefix for the default publisher", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/change-solution-publisher-prefix?view=op-9-1", source: "Microsoft Docs, last updated February 15, 2022" },
        { label: "Default solution vs. custom solution – Power Platform", href: "https://docs.microsoft.com/en-us/power-platform/alm/use-solutions-for-your-customizations", source: "Microsoft Docs, last updated February 15, 2022" },
        { label: "Create or edit mapping between entity fields", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/map-entity-fields?view=op-9-1", source: "Microsoft Docs, last updated February 15, 2022" },
        { label: "Configure event handlers for a form in Dynamics 365", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/configure-event-handlers-legacy?view=op-9-1", source: "Microsoft Docs, last updated February 15, 2022" },
        { label: "Create web resources in Dynamics 365", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/create-edit-web-resources?view=op-9-1", source: "Microsoft Docs, last updated February 15, 2022" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/BPG001-main.webp",
        title: "Dynamics 365 Deployment Best Practices",
        description: "Deploy Dynamics 365 faster with minimal downtime using our 8 best practices.",
        to: "/insights/dynamics-365-deployment-best-practices",
      }}
    />
  );
}
