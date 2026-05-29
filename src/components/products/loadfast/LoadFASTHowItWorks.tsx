import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const steps = [
    {
        n: 1,
        title: "Create a collection",
        desc: "Choose your desired Power BI reports and pages from your workspaces.",
    },
    {
        n: 2,
        title: "Define user actions",
        desc: "Set the number of users and the actions they will be performing on your report.",
    },
    {
        n: 3,
        title: "Get results",
        desc: "Run the tests and review insights on page and visual load time, user action impact, and Microsoft Fabric capacity usage.",
    },
];

export function LoadFASTHowItWorks() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>How it works</span>
                    <h2 className={s.titleLg}>Three steps to optimized Power BI capacity</h2>
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
