import { GuideArticle } from "../components/insights/GuideArticle";

export function InsightsAzureSecurityBestPractices() {
  return (
    <GuideArticle
      eyebrow="Security"
      title="Azure Security Best Practice Guide"
      intro="This Azure security best practice guide will help you improve, scale, and centralize your cloud security. The practices below are grouped into Limiting Access to Sensitive Data, Implementing Threat Protection and Safeguards, and Centralizing and Managing Security."
      lastUpdated="August 2, 2023"
      ctaSubject="Azure security best practices - MAQ Software"
      ctaText="Want an Azure security hardening review? MAQ Software's cloud security team can help."
      sections={[
        {
          title: "Limiting Access to Sensitive Data",
          practices: [
            { title: "1. Implement a Zero Trust security model", body: "Zero Trust operates on the principle of 'never trust, always verify.' Verify explicitly using all available signals (identity, location, device health, service, data classification, anomalies). Use least-privileged access with risk-based adaptive policies and Just-in-Time/Just-Enough-Access (JIT/JEA). Assume breach: segment access by network, user, device, and application; encrypt all sessions end to end; and use analytics to improve defenses." },
            { title: "2. Restrict access to management ports", body: "Management ports like RDP (3389) and SSH (22) are commonly attacked via brute force when exposed to the internet. Mitigate the risk by using just-in-time (JIT) VM access to lock down inbound traffic to your Azure VMs." },
            { title: "3. Use IP whitelisting when applicable", body: "Define which IPs can access your service. Don't assign broad allow rules (e.g., 0.0.0.0–255.255.255.255). Protect your virtual network using Azure Firewall on top of IP restrictions, and limit access to specific ports." },
            { title: "4. Use Azure Disk Encryption to encrypt Azure VMs", body: "Most Azure managed disks are automatically encrypted via server-side encryption (SSE) with a platform-managed key. For OS and data disks, also enable Azure Disk Encryption (ADE) so data has two levels of protection. ADE uses Azure Key Vault to control and manage keys and secrets — without it, downloaded VHD files can be decrypted and used to create new VMs. Always enable Transparent Data Encryption (TDE) on SQL databases to secure data at rest." },
            { title: "5. Secure your Azure AD app registrations", body: "Use least-privileged access — grant only the minimum permissions required. Clearly define app registration credentials and don't keep credentials on Public Client Apps. Minimize app ownership and audit app owners at least once a quarter to confirm they are still part of the organization." },
            { title: "6. Use Privileged Identity Management (PIM)", body: "PIM provides as-needed and just-in-time access to Azure resources with time-based and approval-based role activation. This reduces the chance of malicious access and limits authorized users inadvertently impacting sensitive resources." },
          ],
        },
        {
          title: "Implementing Threat Protection and Safeguards",
          practices: [
            { title: "1. Enable Azure Defender", body: "Azure Defender (formerly Azure Advanced Threat Protection) protects enterprise environments from targeted cyber-attacks and insider threats. It detects threats throughout the phases of an advanced attack — reconnaissance, credential compromise, lateral movement, privilege escalation, and domain dominance — and works for both cloud-native and hybrid workloads." },
            { title: "2. Enable Multi-factor Authentication (MFA)", body: "MFA adds a secondary layer of security beyond passwords. Azure AD MFA verifies user identity via phone call, text message, or mobile app notification. Even if a password is compromised, data and applications stay protected." },
            { title: "3. Maintain platform hygiene", body: "Periodically clean up your Azure subscription — remove deprecated identities, users, and resources. Review access for existing users. Following Azure Security Center guidance, keep the number of subscription owners to no more than three." },
            { title: "4. Turn off Azure services and servers when not in use; remove inactive resources", body: "Only turn on services you are actively using. This reduces the attack surface and lowers cost. Create runbooks that automatically turn resources on/off at scheduled times." },
            { title: "5. Set up locks on your resource groups", body: "Resource locks safeguard development teams from accidentally deleting critical resources." },
          ],
        },
        {
          title: "Centralizing and Managing Security",
          practices: [
            { title: "1. Use the Azure Security Center", body: "Azure Security Center uses machine learning and advanced analytics to detect existing and potential threats and suggest preventative actions. Define security admins to handle alerts, Azure Defender, security policy, and auto-provisioning of log analytics and extensions. Developers should be classified as Security Reader. Review your security status via Security Center > Overview — Azure Secure Score, Azure Defender status, resource health inventory, regulatory compliance, and high-impact recommendations." },
            { title: "2. Use Azure Web Application Firewall (WAF) on Azure Application Gateway", body: "WAF centralizes web app protection for easier monitoring and customization. It defends against cross-site scripting and SQL injection, two of the most common web attacks, and automatically updates to include protections against new vulnerabilities." },
            { title: "3. Use Azure Active Directory to manage identities and access", body: "Azure AD is a multi-tenant cloud directory and identity management service that secures and simplifies user access to cloud applications with single sign-on. Microsoft reports Azure AD protects users from 99.9% of cybersecurity attacks, and machine learning–based reports identify inconsistent access patterns." },
            { title: "4. Assign resource access to Active Directory groups, not individuals", body: "Assigning permissions to AAD groups simplifies access management and ensures developers only have access to resources for their projects. Periodically review groups, assign roles based on least-privilege policies, and restrict subscription access to a Reader role." },
            { title: "5. Use Azure Key Vault", body: "Azure Key Vault safeguards cryptographic keys and secrets used by cloud applications. Ensure applications never access keys directly. Limit user and identity access to certificates, secrets, and keys, and enable soft delete to retrieve accidentally deleted objects." },
            { title: "6. Use managed identity wherever possible", body: "Managed identity lets applications access AAD-protected resources without provisioning or rotating secrets. It automatically renews service principals — always keep this enabled." },
            { title: "7. Remove in-development copies of databases", body: "Test database copies and backup files accumulate over time. Create an automated runbook that informs admins of historical databases and remove resources you aren't using to keep the workspace clean and reduce attack surface." },
            { title: "8. Update your system as often as possible", body: "Microsoft continually updates its products and services to outpace evolving cyber threats. Apply the newest patches as soon as they are released to keep your environment secure." },
          ],
        },
      ]}
      references={[
        { label: "Strengthen your cloud security with 19 security best practices", href: "https://maqsoftware.com/insights/azure-security-best-practices", source: "MAQ Software" },
        { label: "Azure security best practices and patterns", href: "https://docs.microsoft.com/en-us/azure/security/security-best-practices-and-patterns", source: "Microsoft Corporation, published March 22, 2023" },
        { label: "Azure network security best practices", href: "https://docs.microsoft.com/en-us/azure/security/azure-security-network-security-best-practices", source: "Microsoft Corporation, published March 16, 2023" },
        { label: "Azure Identity Management and access control security best practices", href: "https://docs.microsoft.com/en-us/azure/security/azure-security-identity-management-best-practices", source: "Microsoft Corporation, published December 19, 2022" },
        { label: "Embrace proactive security with Zero Trust", href: "https://www.microsoft.com/en-us/security/business/zero-trust", source: "Microsoft Corporation" },
      ]}
      continueReading={{
        image: "https://maqsoftware.com/img/blog/BPG002-main.jpg",
        title: "Data Validation Best Practices",
        description: "Ensure quality data on demand with our 7 data validation best practices.",
        to: "/insights/data-validation-best-practices",
      }}
    />
  );
}
