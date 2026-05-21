import { Badge } from "@fluentui/react-components";
import { useProductPageStyles } from "./productPageStyles";

export function CaseStudiesPlaceholder({ count = 3, heading = "Case studies", eyebrow = "Case studies" }: { count?: number; heading?: string; eyebrow?: string }) {
  const s = useProductPageStyles();
  return (
    <div className={s.inner}>
      <div className={s.headLeft}>
        <span className={s.secEyebrow}>{eyebrow}</span>
        <h2 className={s.titleLg}>{heading}</h2>
      </div>
      <div className={s.caseGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={s.caseCard}>
            <Badge appearance="tint" color="danger" className={s.caseTag}>Coming soon</Badge>
            <div className={s.casePlaceholderTitle}>Case study {i + 1}</div>
            <div className={s.casePlaceholderText}>Content to be supplied by Sales post-launch.</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TestimonialsPlaceholder({ count = 2, heading = "What our clients have to say", eyebrow = "Testimonials" }: { count?: number; heading?: string; eyebrow?: string }) {
  const s = useProductPageStyles();
  return (
    <div className={s.inner}>
      <div className={s.headLeft}>
        <span className={s.secEyebrow}>{eyebrow}</span>
        <h2 className={s.titleLg}>{heading}</h2>
      </div>
      <div className={s.quoteGrid}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className={s.quote}>
            <p className={s.quoteBody}>Testimonial {i + 1} — content to be supplied by Sales post-launch.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
