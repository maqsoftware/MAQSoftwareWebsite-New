import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const steps = [
    {
        n: 1,
        title: "Analyze your report",
        desc: "Automatically detect errors, discrepancies, and performance issues impacting report quality.",
    },
    {
        n: 2,
        title: "Review insights",
        desc: "Explore field lineage and generate detailed documentation of your Power BI models.",
    },
    {
        n: 3,
        title: "Optimize and deploy",
        desc: "Fix alignment issues and ensure adherence to best practices for seamless report delivery.",
    },
];

export function CertyFASTHowItWorks() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>How it works</span>
                    <h2 className={s.titleLg}>Three steps to certified Power BI reports</h2>
                </div>
                <div className={s.stepGrid}>
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
