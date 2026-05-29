import { useProductPageStyles } from "../../pages/productPageStyles";

const benefits = [
    {
        title: "Automate the review process",
        desc: "Save time and effort by easily identifying errors, formatting DAX measures, and creating knowledge base documents.",
    },
    {
        title: "Error free reporting",
        desc: "Ensure your report aligns with organizational standards. Identify discrepancies that impact the report's size, performance, or user experience.",
    },
    {
        title: "Accurate and uniform reports",
        desc: "Access detailed documentation of semantic models and report visuals, aiding developers in creating consistent knowledge documents.",
    },
];

export function CertyFASTBenefits() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.secEyebrow}>Why CertyFAST</span>
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
