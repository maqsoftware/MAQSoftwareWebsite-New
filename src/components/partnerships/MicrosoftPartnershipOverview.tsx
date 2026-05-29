import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
    section: {
        padding: "48px 32px",
        backgroundColor: "var(--maq-off-white)",
    },
    inner: {
        maxWidth: "1240px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "48px",
        alignItems: "center",
        "@media (max-width: 960px)": {
            gridTemplateColumns: "1fr",
            textAlign: "center",
        },
    },
    badgeGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "12px",
        "@media (max-width: 960px)": {
            justifyItems: "center",
        },
    },
    badgeImg: {
        width: "140px",
        height: "auto",
        display: "block",
    },
    text: {
        fontSize: "15px",
        lineHeight: 1.7,
        color: "var(--maq-gray-700)",
        margin: 0,
    },
    designationRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "16px",
        "@media (max-width: 960px)": {
            justifyContent: "center",
        },
    },
    designationPill: {
        fontSize: "11px",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        padding: "4px 8px",
        borderRadius: "4px",
        backgroundColor: "var(--maq-red-pale)",
        color: "var(--maq-red)",
        textDecoration: "none",
        transition: "all 0.2s",
        ":hover": {
            backgroundColor: "var(--maq-red)",
            color: "#fff",
        },
    },
});

const designations = [
    {
        label: "Data & AI",
        href: "https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure",
        imageName: "data-and-AI",
    },
    {
        label: "Digital & App Innovation",
        href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure",
        imageName: "digital-and-apps-innovation",
    },
    {
        label: "Infrastructure",
        href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure",
        imageName: "infrastructure",
    },
    {
        label: "Security",
        href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security",
        imageName: "security",
    },
];

export function MicrosoftPartnershipOverview() {
    const s = useStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.badgeGrid}>
                    {designations.map((designation) => (
                        <a
                            key={designation.label}
                            href={designation.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Solutions Partner for ${designation.label}`}
                        >
                            <img
                                className={s.badgeImg}
                                src={`https://maqsoftware.com/images-new/isv/solutions-partner-${designation.imageName}.png`}
                                alt={`Microsoft Solutions Partner - ${designation.label}`}
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>
                <div>
                    <p className={s.text}>
                        As a Microsoft Fabric Featured Partner and Preferred Supplier since
                        2000, MAQ Software holds 4 Microsoft Solution Partner designations-Data
                        &amp; AI, Digital &amp; App Innovation, Infrastructure, and Security-along
                        with 9 advanced specializations. Our 5,000+ Microsoft technical
                        certifications and 200+ Fabric implementations demonstrate our deep
                        expertise across Azure, Power BI, Microsoft Fabric, Copilot, and the
                        broader Microsoft ecosystem. From AI-driven analytics to enterprise
                        cloud modernization, we empower organizations to maximize their
                        investment in Microsoft technologies.
                    </p>
                    <div className={s.designationRow}>
                        {designations.map((designation) => (
                            <a
                                key={designation.label}
                                className={s.designationPill}
                                href={designation.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {designation.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}