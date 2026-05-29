import { useProductPageStyles } from "../../pages/productPageStyles";

const supportRows = [
    {
        feature: "Guaranteed response time",
        silver: "Within 48 hours",
        gold: "Within 24 hours",
        platinum: "Varies based on defined SLA",
    },
    {
        feature: "Knowledge base + online docs",
        silver: "✓",
        gold: "✓",
        platinum: "✓",
    },
    {
        feature: "Software updates & bug fixes",
        silver: "✓",
        gold: "✓",
        platinum: "✓",
    },
    {
        feature: "Remote troubleshooting",
        silver: "✓",
        gold: "✓",
        platinum: "✓",
    },
    {
        feature: "Dedicated support representative",
        silver: "—",
        gold: "—",
        platinum: "✓",
    },
    {
        feature: "Priority for new feature requests",
        silver: "—",
        gold: "—",
        platinum: "✓",
    },
    {
        feature: "Customized team training",
        silver: "—",
        gold: "—",
        platinum: "✓",
    },
];

export function EmbedFASTSupportPlans() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Support plans</span>
                    <h2 className={s.titleLg}>Choose your support tier</h2>
                </div>
                <div style={{ overflowX: "auto" }}>
                    <table className={s.supportTable}>
                        <thead>
                            <tr>
                                <th className={s.supportTh}>Feature</th>
                                <th className={s.supportTh}>Silver ($500/mo)</th>
                                <th className={s.supportTh}>Gold ($1,500/mo)</th>
                                <th className={s.supportTh}>Platinum (varies by SLA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {supportRows.map((row) => (
                                <tr key={row.feature}>
                                    <td className={s.supportTd}>
                                        <strong>{row.feature}</strong>
                                    </td>
                                    <td className={s.supportTd}>{row.silver}</td>
                                    <td className={s.supportTd}>{row.gold}</td>
                                    <td className={s.supportTd}>{row.platinum}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
