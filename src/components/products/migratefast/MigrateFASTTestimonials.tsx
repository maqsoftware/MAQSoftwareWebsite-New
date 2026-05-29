import { useProductPageStyles } from "../../../pages/products/productPageStyles";
import { TestimonialsPlaceholder } from "../../../pages/products/productPlaceholders";

export function MigrateFASTTestimonials() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <TestimonialsPlaceholder />
        </section>
    );
}
