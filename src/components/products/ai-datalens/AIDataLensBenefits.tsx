import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const benefits = [
    {
        title: "Informed decisions",
        desc: "Move beyond guesswork — leverage data-backed insights to make informed decisions that reduce risk and accelerate growth.",
    },
    {
        title: "Streamlined operations",
        desc: "Automate processes and reduce manual effort with insights that keep your operations running smoothly.",
    },
    {
        title: "Plug-and-play extensibility",
        desc: "Quickly connect to your existing tools and systems with plug-and-play extensibility, so your data workflows stay seamless and scalable.",
    },
];

export function AIDataLensBenefits() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.head}>
                    <span className={s.secEyebrow}>Why AI-DataLens</span>
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
