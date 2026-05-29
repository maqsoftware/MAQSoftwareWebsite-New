import {
    Chat24Regular,
    Person24Regular,
    Search24Regular,
    ChartMultiple24Regular,
    Lightbulb24Regular,
    DatabaseSearch24Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const features = [
    {
        icon: <Chat24Regular />,
        title: "Chat with structured data",
        desc: "Interact with enterprise datasets using natural language. No SQL or DAX — just ask questions and get instant answers.",
    },
    {
        icon: <Person24Regular />,
        title: "User guidance",
        desc: "Intelligent question suggestions and personalized investigative recommendations help new users explore data from day one.",
    },
    {
        icon: <Search24Regular />,
        title: "Semantic relevance",
        desc: "Understands the true intent behind user questions by analyzing metadata and context for accurate, meaningful responses.",
    },
    {
        icon: <ChartMultiple24Regular />,
        title: "Automated visual generation",
        desc: "Automatically generates relevant charts and visuals from user queries — quick interpretation, zero manual effort.",
    },
    {
        icon: <Lightbulb24Regular />,
        title: "Insight generation",
        desc: "Beyond raw data — generates narratives, titles, summaries, and recommendations in a business-friendly format.",
    },
    {
        icon: <DatabaseSearch24Regular />,
        title: "Metadata agent & column pruning",
        desc: "Transforms raw data into an intelligent, indexed schema — faster, more accurate queries with minimal effort.",
    },
];

export function AIDataLensFeatures() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt} id="ai-datalens-features">
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Capabilities</span>
                    <h2 className={s.titleLg}>Key features</h2>
                </div>
                <div className={s.featGrid}>
                    {features.map((feature) => (
                        <div key={feature.title} className={s.feat}>
                            <div className={s.featHead}>
                                <span className={s.featIconBox}>{feature.icon}</span>
                                <div className={s.featTitle}>{feature.title}</div>
                            </div>
                            <p className={s.featDesc}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
