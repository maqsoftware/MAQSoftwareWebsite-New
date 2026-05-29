import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

const quotes = [
    {
        body: "Fabric Admin Agent caught a throttling pattern on our F64 capacity before our morning standup. We resized in one click and avoided a board-level escalation.",
        cite: "Director, Data Platform — Fortune 500 retailer",
    },
    {
        body: "We replaced three manual Fabric health checklists with the agent. Our platform team now spends weeks on roadmap work instead of firefighting.",
        cite: "Head of Analytics Engineering — Global manufacturer",
    },
];

export function FabricAdminAgentTestimonials() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Testimonials</span>
                    <h2 className={s.titleLg}>What our clients have to say</h2>
                </div>
                <div className={s.quoteGrid}>
                    {quotes.map((quote, index) => (
                        <blockquote key={index} className={s.quote}>
                            <span className={s.quoteMark} aria-hidden="true">
                                &ldquo;
                            </span>
                            <p className={s.quoteBody}>{quote.body}</p>
                            <cite className={s.quoteCite}>{quote.cite}</cite>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
}
