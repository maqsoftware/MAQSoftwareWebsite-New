import { useProductPageStyles } from "../../../pages/products/productPageStyles";
import { TestimonialsPlaceholder } from "../../../pages/products/productPlaceholders";

export function LoadFASTTestimonials() {
    const s = useProductPageStyles();

    return (
        <section className={s.section}>
            <TestimonialsPlaceholder />
        </section>
    );
}
