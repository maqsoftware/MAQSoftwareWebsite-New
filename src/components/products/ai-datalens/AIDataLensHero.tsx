import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../../pages/products/productPageStyles";

export function AIDataLensHero() {
    const s = useProductPageStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Intelligent data interaction</span>
                    <h1 className={s.h1}>AI-DataLens</h1>
                    <p className={s.heroSub}>
                        Transform how users interact with data by enabling natural-language
                        queries and delivering instant, intelligent insights. Unlock a new
                        way to interact with your data.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens&body=Hello,%20I%20would%20like%20to%20request%20a%20demo%20for%20AI-DataLens."
                        >
                            Request a demo
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            onClick={() =>
                                document
                                    .getElementById("ai-datalens-features")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            See key features
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/images-new/isv/ai-datalens-hero-img-2.svg"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
