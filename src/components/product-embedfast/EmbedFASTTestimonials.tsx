import { useProductPageStyles } from "../../pages/productPageStyles";
import { TestimonialsPlaceholder } from "../../pages/productPlaceholders";

export function EmbedFASTTestimonials() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <TestimonialsPlaceholder />
        </section>
    );
}
