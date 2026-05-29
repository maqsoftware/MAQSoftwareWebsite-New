import {
    PlugConnected24Regular,
    Color24Regular,
    Money24Regular,
    ShieldKeyhole24Regular,
    CloudArrowUp24Regular,
    ArrowSync24Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

const benefits = [
    {
        icon: <PlugConnected24Regular />,
        title: "Seamless integration",
        desc: "Easily integrate our API into your applications. Embed Power BI without the time or resource complexities.",
    },
    {
        icon: <Color24Regular />,
        title: "Fully customizable",
        desc: "Adapt EmbedFAST to your unique requirements, ensuring features that align perfectly with your workflows.",
    },
    {
        icon: <Money24Regular />,
        title: "Cut licensing cost",
        desc: "No need for individual Power BI user licenses — only capacity licenses (F SKUs). Save costs without assigning user licenses.",
    },
    {
        icon: <ShieldKeyhole24Regular />,
        title: "Simplified access control",
        desc: "Effortlessly control user permissions and secure data with built-in role-based access.",
    },
    {
        icon: <CloudArrowUp24Regular />,
        title: "Scalable and secure",
        desc: "Onboard unlimited tenants/workspaces with privacy and scalable growth built-in.",
    },
    {
        icon: <ArrowSync24Regular />,
        title: "Automatic updates",
        desc: "Enjoy automatic updates, ensuring you're always on the latest version without manual effort.",
    },
];

export function EmbedFASTBenefits() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Why EmbedFAST</span>
                    <h2 className={s.titleLg}>Benefits</h2>
                </div>
                <div className={s.featGrid}>
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className={s.feat}>
                            <div className={s.featHead}>
                                <span className={s.featIconBox}>{benefit.icon}</span>
                                <div className={s.featTitle}>{benefit.title}</div>
                            </div>
                            <p className={s.featDesc}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
