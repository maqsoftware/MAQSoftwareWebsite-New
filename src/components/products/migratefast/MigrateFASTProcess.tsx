import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const steps = [
    {
        n: 1,
        title: "Inventory analysis",
        desc: "Extract metadata, analyze reports, and assess data compatibility for a structured migration plan.",
    },
    {
        n: 2,
        title: "Estimation and planning",
        desc: "Estimate costs, finalize architecture, identify risks, and define roles.",
    },
    {
        n: 3,
        title: "Semantic model and report creation",
        desc: "Build a Power BI model, optimize data, and replicate report interactions for seamless functionality.",
    },
    {
        n: 4,
        title: "Review",
        desc: "Optimize performance, ensure uniformity, verify data accuracy, and certify reports.",
    },
    {
        n: 5,
        title: "Governance",
        desc: "Track data lineage, maintain best practices, monitor performance, and set alerts.",
    },
    {
        n: 6,
        title: "Center of Excellence (CoE)",
        desc: "Ongoing support, user training, troubleshooting, and KPI tracking post-migration.",
    },
];

export function MigrateFASTProcess() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt} id="migratefast-process">
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>How it works</span>
                    <h2 className={s.titleLg}>Our 6-step migration process</h2>
                </div>
                <div className={s.stepGrid6}>
                    {steps.map((step) => (
                        <div key={step.n} className={s.stepCard}>
                            <div className={s.stepNum}>{step.n}</div>
                            <div className={s.stepTitle}>{step.title}</div>
                            <p className={s.stepDesc}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
