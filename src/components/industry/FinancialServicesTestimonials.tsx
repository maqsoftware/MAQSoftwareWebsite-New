import { Testimonials } from "./Testimonials";

const quotes = [
    {
        body: "MAQ Software compressed our month-end close from 18 days to under a week. The reconciliation agent flags exceptions automatically — our team focuses on judgement calls, not spreadsheet hunting.",
        cite: "VP, Finance Operations — Global asset manager",
    },
    {
        body: "We moved from overnight credit batch scoring to real-time lending signals in one quarter. Our borrowers get better-matched loan options at the point of decision.",
        cite: "Head of Data & Analytics — Regional bank",
    },
];

export function FinancialServicesTestimonials() {
    return <Testimonials quotes={quotes} />;
}