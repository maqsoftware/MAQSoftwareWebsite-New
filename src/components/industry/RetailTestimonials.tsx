import { Testimonials } from "./Testimonials";

const quotes = [
    {
        body: "MAQ Software's team helped us move from overnight batches to live store KPIs in under a quarter. Our managers now act on minute-by-minute signals instead of yesterday's report.",
        cite: "VP, Retail Analytics — Global grocery chain",
    },
    {
        body: "The pricing simulation agent gave our merchants the confidence to test scenarios safely. We shipped three campaigns in the time it used to take to debate one.",
        cite: "Director, Pricing & Promotions — Specialty retailer",
    },
];

export function RetailTestimonials() {
    return <Testimonials quotes={quotes} />;
}