import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDynamics365DeploymentBestPractices() {
  return (
    <GuideArticle
      eyebrow="Dynamics 365"
      title="Dynamics 365 Deployment Best Practice Guide"
      intro="Microsoft Dynamics 365 is a leading line of enterprise resource planning (ERP) and customer relationship management (CRM) applications. With the platform's high business impact, it is critical for enterprise leaders to follow best practices. In the past five years, we have deployed Dynamics 365 over 100 times for our Fortune 500 customers. Here are the eight best practices we use to optimize every deployment."
      lastUpdated="March 25, 2024"
      ctaSubject="Dynamics 365 deployment best practices - MAQ Software"
      ctaText="Planning a Dynamics 365 deployment or cutover? MAQ Software's Dynamics team can plan and execute it with you."
      sections={[
        {
          title: "Solutions",
          practices: [
            { title: "1. Avoid broken references after deployment", body: "Maintain the same GUIDs across environments for records referenced in workflows/views. Use custom actions to parameterize the referenced records instead of referencing them directly in the workflow." },
            { title: "2. Import multiple files at once with .zip", body: "Individually importing files is time-consuming and forces you to import them in the correct order to resolve inter-file column references. Zipping multiple files together saves time and Dynamics 365 handles the import order for you." },
            { title: "3. Include only required fields in data import files", body: "Unnecessary fields increase import time and may trigger workflows/plug-ins registered on those fields. For example, to update a contact's address, don't include unnecessary fields like first and last name." },
            { title: "4. Deactivate relevant plug-ins/workflows before bulk updating records", body: "To migrate data without triggering business logic, deactivate plug-ins and workflows registered on the entities present in the import file. This also reduces import time." },
            { title: "5. Enable admin mode on your target environment during deployment", body: "Admin mode locks the environment for all users, leaving only system administrators with access. This ensures data is not compromised by unplanned changes; if an error occurs, data can be restored to a previous version." },
            { title: "6. Include a user-friendly message while in admin mode", body: "During deployment, the system may be slow, which is why locking the system for end users is recommended. Clear messages inform end users that the environment is down due to planned activities and will return after the indicated duration, avoiding confused support tickets." },
            { title: "7. Back up the environment before deployment", body: "Backups ensure the system can be restored to its pre-deployment state if a deployment failure occurs. Backups are faster than creating a copy of the environment." },
            { title: "8. Run a test in a cloned production environment prior to production deployment", body: "Tests enable team members to prepare a mitigation plan. Issues can be proactively flagged and resolved, mitigating end-user impact during the real deployment." },
          ],
        },
      ]}
      references={[
        { label: "Deploy Dynamics 365 faster with minimal downtime using our 8 best practices", href: "/insights/dynamics-365-deployment-best-practices", source: "MAQ Software" },
        { label: "Invoke custom actions from a workflow", href: "https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/customize/invoke-custom-actions-workflow-dialog", source: "Microsoft, last updated February 15, 2022" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/BPG009-main.webp",
        title: "Power Apps Best Practices",
        description: "Optimize your canvas apps with our 13 best practices.",
        to: "/insights/power-apps-best-practices",
      }}
    />
  );
}
