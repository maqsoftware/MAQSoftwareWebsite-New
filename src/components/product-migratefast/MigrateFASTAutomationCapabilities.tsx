import { useProductPageStyles } from "../../pages/productPageStyles";

const capabilities = [
    "Upload Tableau reports and auto-extract metadata",
    "Get timeline estimates for the migration",
    "Analyze report similarity to remove duplicates",
    "Auto-convert LOD to DAX and check for errors",
    "Customize Power BI report UI",
];

export function MigrateFASTAutomationCapabilities() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Automation</span>
                    <h2 className={s.titleLg}>Tableau → Power BI automation capabilities</h2>
                </div>
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "12px",
                    }}
                >
                    {capabilities.map((capability) => (
                        <li
                            key={capability}
                            style={{
                                fontSize: "14px",
                                color: "var(--maq-gray-700)",
                                lineHeight: 1.6,
                                paddingLeft: "20px",
                                position: "relative",
                            }}
                        >
                            <span
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    color: "var(--maq-red)",
                                    fontWeight: 700,
                                }}
                            >
                                ✓
                            </span>
                            {capability}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
