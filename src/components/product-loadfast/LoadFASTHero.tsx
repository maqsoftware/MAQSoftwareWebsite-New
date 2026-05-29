import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowDownload24Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

const APPSOURCE =
    "https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview";

export function LoadFASTHero() {
    const s = useProductPageStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Power BI performance</span>
                    <h1 className={s.h1}>LoadFAST</h1>
                    <p className={s.heroSub}>
                        Optimize your Power BI environments for greater efficiency and
                        lower costs with our web application. Empower your business with
                        the dynamic capabilities of Power BI.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowDownload24Regular />}
                            as="a"
                            href={APPSOURCE}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download now
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20LoadFAST"
                        >
                            Talk to our team
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/img/Microsoft-Fabric/Slider1.png"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
