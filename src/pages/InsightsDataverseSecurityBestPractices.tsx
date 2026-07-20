import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsDataverseSecurityBestPractices() {
  return (
    <GuideArticle
      eyebrow="Security"
      title="Security Best Practices in Dataverse"
      intro="The seven practices below help you secure Dataverse environments, manage permissions cleanly with Azure Active Directory groups, and keep privileged access tightly scoped."
      lastUpdated="August 2, 2023"
      ctaSubject="Dataverse security best practices - MAQ Software"
      ctaText="Need a Dataverse security review or role redesign? MAQ Software's Power Platform team can help."
      sections={[
        {
          title: "Solutions",
          practices: [
            { title: "1. Create separate environments for dev, UAT, and production", body: "Separate environments enable bug resolution and testing of new features before deployment to end users. Resource administration is also easier as all resources are bound to the location of the Dataverse environment. You can create environments by geography, although you must consider GDPR — the database is provisioned in the region specified during creation." },
            { title: "2. Restrict access to environments through security groups", body: "By default, no security group is selected, which means any user in the tenant can access the environment. To restrict access and strengthen security, select a security group." },
            { title: "3. Manage permissions through Azure Active Directory groups", body: "Security roles can be associated with an Azure Active Directory group. To simplify permissions and data access, create AAD groups and associate roles with them." },
            { title: "4. Extend existing security roles", body: "Instead of creating a new security role from scratch, copy an existing role and update the privileges and access levels for the new role's requirements." },
            { title: "5. Use the rule of least privilege when creating security roles", body: "Grant only the minimum privileges required to any security role. Provide access to the minimum business data required for the task. Assign users the appropriate role for their job with minimum required access, and create a basic user role with the least permissions that all users must have." },
            { title: "6. Limit the number of System Administrators", body: "Strictly limit the number of people assigned the System Administrator role. Don't grant system admin or similar high-privilege roles to too many users or service accounts, especially on production." },
            { title: "7. Use Teams to assign the same roles to a group of users", body: "If many users require the same access, create a team and assign the required security role to the team rather than assigning it to each member. Use teams to create cross-functional groups so specific objects can be shared with the team." },
          ],
        },
      ]}
      references={[
        { label: "7 best practices you need to secure Dataverse", href: "/#/insights/dataverse-security-best-practices", source: "MAQ Software" },
        { label: "Copy a security role — Power Platform", href: "https://learn.microsoft.com/en-us/power-platform/admin/copy-security-role", source: "Microsoft, last updated February 15, 2022" },
        { label: "Create and manage environments in Dataverse", href: "https://learn.microsoft.com/en-us/training/modules/create-manage-environments/", source: "Microsoft, 2022" },
      ]}
      continueReading={{
        image: "/images/case-studies/external/BPG003-main.webp",
        title: "Azure Security Best Practices",
        description: "Strengthen your cloud security and protect your assets with 19 security best practices.",
        to: "/insights/azure-security-best-practices",
      }}
    />
  );
}
