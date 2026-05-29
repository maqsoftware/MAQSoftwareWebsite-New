import { Button } from "@fluentui/react-components";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const APPSOURCE =
    "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=PlansAndPrice";

const plans = [
    {
        name: "Subscription — API Only",
        price: "$2,500",
        term: "per month + $10,000 setup",
        items: [
            "Single instance with API",
            "Complete installation setup",
            "No limit on the number of users",
            "Free upgrades",
        ],
        href: APPSOURCE,
        cta: "Get it now",
    },
    {
        name: "Subscription — API + UI",
        price: "$3,500",
        term: "per month + $10,000 setup",
        items: [
            "Single instance with API and UI",
            "Complete installation setup",
            "No limit on the number of users",
            "Free upgrades",
        ],
        href: APPSOURCE,
        cta: "Get it now",
    },
    {
        name: "Code Share — API + UI",
        price: "$250,000",
        term: "fixed one-time",
        items: [
            "Shared solution IP with API and UI",
            "4-week consulting service to integrate",
            "Code walkthrough and handover",
            "Personalized technical documentation",
            "Additional features on demand",
        ],
        href: "mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST%20Code%20Share",
        cta: "Talk to us",
    },
];

export function EmbedFASTPricing() {
    const s = useProductPageStyles();

    return (
        <section className={s.section} id="embedfast-pricing">
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Pricing</span>
                    <h2 className={s.titleLg}>Choose the plan that fits your team</h2>
                </div>
                <div className={s.priceGrid}>
                    {plans.map((plan) => (
                        <div key={plan.name} className={s.priceCard}>
                            <div className={s.priceName}>{plan.name}</div>
                            <div className={s.priceAmount}>{plan.price}</div>
                            <div className={s.priceTerm}>{plan.term}</div>
                            <ul className={s.priceList}>
                                {plan.items.map((item) => (
                                    <li key={item} className={s.priceItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <Button
                                appearance="primary"
                                size="medium"
                                as="a"
                                href={plan.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
