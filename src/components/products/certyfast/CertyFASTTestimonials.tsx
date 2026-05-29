import { useProductPageStyles } from "../../../pages/products/productPageStyles";
import { TestimonialsPlaceholder } from "../../../pages/products/productPlaceholders";

export function CertyFASTTestimonials() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <TestimonialsPlaceholder />
        </section>
    );
}
