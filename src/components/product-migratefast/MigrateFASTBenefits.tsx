import { useProductPageStyles } from "../../pages/productPageStyles";

const benefits = [
    {
        title: "Large-scale migration",
        desc: "Enables large-scale migration of reports from Tableau to Power BI.",
    },
    {
        title: "Cost savings",
        desc: "Reduces the time and resources required to migrate reports using AI, resulting in cost savings of 40%.",
    },
    {
        title: "Optimization",
        desc: "Optimizes the migration process to ensure high-quality and accurate report conversion.",
    },
];

export function MigrateFASTBenefits() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.secEyebrow}>Why MigrateFAST</span>
                    <h2 className={s.title}>Benefits</h2>
                </div>
                <div className={s.benGrid3}>
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className={s.benCard}>
                            <div className={s.benTitle}>{benefit.title}</div>
                            <p className={s.benDesc}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
