import { Button } from "@fluentui/react-components";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

const APPSOURCE_PLANS =
    "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=PlansAndPrice";

const plans = [
    {
        name: "Free Plan",
        price: "$0",
        term: "+ Azure infrastructure costs",
        items: [
            "Perform load tests with up to 50 users",
            "Free upgrades",
            "Complete installation setup",
        ],
        href: APPSOURCE_PLANS,
        cta: "Get it now",
    },
    {
        name: "Pro Plan",
        price: "$1,500",
        term: "per month + Azure infrastructure costs",
        items: [
            "No limit on the number of users",
            "Free upgrades",
            "Complete installation setup",
            "First response within 2 business days",
        ],
        href: APPSOURCE_PLANS,
        cta: "Get it now",
    },
];

export function LoadFASTPricing() {
    const s = useProductPageStyles();

    return (
        <section className={s.sectionAlt}>
            <div className={s.inner}>
                <div className={s.headLeft}>
                    <span className={s.secEyebrow}>Pricing</span>
                    <h2 className={s.titleLg}>Pick the plan that fits your scale</h2>
                </div>
                <div className={s.priceGrid2}>
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
