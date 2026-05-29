import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

const APPSOURCE =
    "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=PlansAndPrice";

export function EmbedFASTHero() {
    const s = useProductPageStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Power BI embedding</span>
                    <h1 className={s.h1}>EmbedFAST</h1>
                    <p className={s.heroSub}>
                        Effortlessly embed Power BI into your apps without the complexity
                        of writing your own code. Achieve faster time to market, improve
                        operations, and elevate your workflow — all with EmbedFAST.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            as="a"
                            href={APPSOURCE}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Get it now
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST"
                        >
                            Talk to our team
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/images-new/isv/isv-top-image.jpg"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
