import { useProductPageStyles } from "../../pages/productPageStyles";
import { ProductCaseStudies } from "../../pages/productPlaceholders";

const studies = [
    {
        tag: "SQL migration",
        title: "Modernizing reporting platforms through AI-driven SQL Migration",
        teaser:
            "AI-assisted SQL conversion accelerates legacy reporting platform migration while preserving security and compliance.",
        href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
    },
    {
        tag: "Qlik → Power BI",
        title: "Transitioning legacy reports from Qlik to Power BI",
        teaser:
            "AI-assisted Qlik to Power BI migration rebuilding semantic models, RLS, and pixel-perfect layouts on Fabric.",
        href: "https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html",
    },
    {
        tag: "Fabric migration",
        title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)",
        teaser:
            "Consolidating fragmented data estates onto Microsoft Fabric to unlock a single governed source of truth across the enterprise.",
        href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html",
    },
];

export function MigrateFASTCaseStudies() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <ProductCaseStudies heading="Migration success stories" studies={studies} />
        </section>
    );
}
