import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
    section: {
        padding: "48px 32px",
        backgroundColor: "var(--maq-off-white)",
    },
    inner: {
        maxWidth: "1240px",
        margin: "0 auto",
    },
    head: {
        marginBottom: "20px",
    },
    eyebrow: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-red)",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        display: "block",
        marginBottom: "8px",
    },
    title: {
        display: "block",
        fontSize: "30px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: 0,
        letterSpacing: "-0.01em",
    },
    panelGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
        alignItems: "stretch",
        "@media (max-width: 960px)": {
            gridTemplateColumns: "1fr",
        },
    },
    panel: {
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${tokens.colorNeutralStroke2}`,
        borderRadius: "12px",
        padding: "28px",
        background: "#fff",
        transition: "all 0.2s",
        ":hover": {
            border: "1px solid var(--maq-red)",
            boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
        },
    },
    panelContent: {
        flex: 1,
    },
    panelSubhead: {
        fontSize: "20px",
        fontWeight: 700,
        color: "var(--maq-black)",
        margin: "0 0 12px",
    },
    panelDesc: {
        fontSize: "14px",
        lineHeight: 1.65,
        color: "var(--maq-gray-700)",
        margin: "0 0 16px",
    },
    bulletList: {
        margin: "0 0 20px 20px",
        padding: 0,
        listStyleType: "disc",
    },
    bulletItem: {
        fontSize: "14px",
        color: "var(--maq-gray-700)",
        lineHeight: 1.65,
        marginBottom: "6px",
    },
    offerTable: {
        width: "100%",
        borderCollapse: "collapse",
        marginBottom: "20px",
    },
    offerTh: {
        fontSize: "12px",
        fontWeight: 700,
        color: "var(--maq-gray-600)",
        textAlign: "left",
        padding: "8px 8px 8px 0",
        borderBottom: "1px solid var(--maq-border)",
        textTransform: "uppercase",
        letterSpacing: "0.04em",
    },
    offerTd: {
        fontSize: "13.5px",
        color: "var(--maq-gray-700)",
        padding: "8px 8px 8px 0",
        borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
        lineHeight: 1.45,
    },
});

const featuredOffers = [
    { name: "Microsoft Fabric: 2-Hour Briefing", duration: "2 hours", price: "Free" },
    { name: "Microsoft Fabric: 4-Week Assessment", duration: "4 weeks", price: "$15,000" },
    { name: "Agentic AI Envisioning Workshop", duration: "1 day", price: "Free" },
    { name: "Power BI Performance Optimization: 1-Week Workshop", duration: "1 week", price: "$10,000" },
    { name: "Tableau to Power BI: Full Migration Engagement", duration: "Engagement", price: "$75,000" },
    { name: "Power BI Center of Excellence: 10-Week Implementation", duration: "10 weeks", price: "$35,000" },
];

export function MicrosoftPartnershipMarketplace() {
    const s = useStyles();

    return (
        <section className={s.section} id="microsoft-marketplace">
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.eyebrow}>Marketplace</span>
                    <h2 className={s.title}>Marketplace offerings and solutions</h2>
                </div>

                <div className={s.panelGrid}>
                    <div className={s.panel}>
                        <div className={s.panelContent}>
                            <h3 className={s.panelSubhead}>Power BI Custom Visuals</h3>
                            <p className={s.panelDesc}>
                                Expand your reporting capabilities with our 43 certified Power BI
                                custom visuals-the largest 3rd party publisher of certified Power
                                BI custom visuals worldwide. Our visuals have been downloaded
                                millions of times and include multiple Microsoft Editor's Picks.
                            </p>
                            <ul className={s.bulletList}>
                                <li className={s.bulletItem}>43 certified Power BI custom visuals</li>
                                <li className={s.bulletItem}>
                                    Largest 3rd party publisher of certified Power BI custom visuals
                                </li>
                                <li className={s.bulletItem}>
                                    Multiple Editor's Pick selections by Microsoft Power BI team
                                </li>
                                <li className={s.bulletItem}>
                                    Categories: Change Over Time, Comparison, Distribution, KPI,
                                    Part-to-Whole, Ranking, and more
                                </li>
                            </ul>
                        </div>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            as="a"
                            href="https://maqsoftware.com/Marketplace-Offers/Power-BI-custom-visuals"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Explore custom visuals
                        </Button>
                    </div>

                    <div className={s.panel}>
                        <div className={s.panelContent}>
                            <h3 className={s.panelSubhead}>Consulting Services on Azure Marketplace</h3>
                            <p className={s.panelDesc}>
                                Access 100+ consulting offers across Microsoft Fabric, Power BI,
                                Azure AI, Copilot, Power Platform, and Dynamics 365-ranging from
                                free assessments and briefings to full migration engagements.
                            </p>
                            <table className={s.offerTable}>
                                <thead>
                                    <tr>
                                        <th className={s.offerTh}>Offer</th>
                                        <th className={s.offerTh}>Duration</th>
                                        <th className={s.offerTh}>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {featuredOffers.map((offer) => (
                                        <tr key={offer.name}>
                                            <td className={s.offerTd}>{offer.name}</td>
                                            <td className={s.offerTd}>{offer.duration}</td>
                                            <td className={s.offerTd}>{offer.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            as="a"
                            href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View all consulting offers
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}