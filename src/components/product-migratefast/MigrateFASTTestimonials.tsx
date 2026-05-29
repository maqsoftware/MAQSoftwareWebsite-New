import { useProductPageStyles } from "../../pages/productPageStyles";
import { TestimonialsPlaceholder } from "../../pages/productPlaceholders";

export function MigrateFASTTestimonials() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <TestimonialsPlaceholder />
        </section>
    );
}
