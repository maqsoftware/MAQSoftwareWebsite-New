import {
    Server24Regular,
    Group24Regular,
    CursorClick24Regular,
    Bot24Regular,
    ChartMultiple24Regular,
    People24Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

const benefits = [
    {
        icon: <Server24Regular />,
        title: "Optimize capacity",
        desc: "Identify the ideal capacity setup across multiple reports, ensuring no under- or over-provisioning.",
    },
    {
        icon: <Group24Regular />,
        title: "Manage collections",
        desc: "Group pages across reports and collaboratively build and save custom load time test scenarios.",
    },
    {
        icon: <CursorClick24Regular />,
        title: "Track user interactions",
        desc: "See how real-time user actions like slicing and filtering impact report load time.",
    },
    {
        icon: <Bot24Regular />,
        title: "Automate accuracy",
        desc: "Benefit from precise capacity insights with automated processes, eliminating human error.",
    },
    {
        icon: <ChartMultiple24Regular />,
        title: "Analyze system performance",
        desc: "Uncover actionable insights from data on application performance, resource allocation, CPU usage, and capacity.",
    },
    {
        icon: <People24Regular />,
        title: "Simulate real-time user traffic",
        desc: "Modify user distribution across reports, RLS access, and more to replicate your real-world use case.",
    },
];

export function LoadFASTBenefits() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Why LoadFAST</span>
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
