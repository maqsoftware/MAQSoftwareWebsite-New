import { ServiceTestimonials } from "../service/ServiceTestimonials";
import type { TestimonialItem } from "../service/ServiceTestimonials";

const testimonials: TestimonialItem[] = [
    {
        body: "MAQ Software implemented a zero-trust architecture across our Azure tenant in under six weeks — our compliance audit passed with zero findings for the first time.",
        cite: "CISO — Enterprise financial services",
    },
    {
        body: "Their Sentinel deployment and custom detection rules cut our mean time to detect from days to minutes. The team operates like an extension of our own security org.",
        cite: "VP of IT Security — Global retailer",
    },
];

export function SecurityComplianceTestimonials() {
    return <ServiceTestimonials quotes={testimonials} />;
}
