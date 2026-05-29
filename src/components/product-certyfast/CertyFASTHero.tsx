import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowDownload24Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

export function CertyFASTHero() {
    const s = useProductPageStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Power BI quality control</span>
                    <h1 className={s.h1}>CertyFAST</h1>
                    <p className={s.heroSub}>
                        Streamline Power BI model development with automated error
                        detection, DAX measure formatting, and simplified documentation.
                        Ensure top-quality reports and adherence to best practices.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<ArrowDownload24Regular />}
                            as="a"
                            href="https://github.com/maqsoftware/CertyFAST"
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
                            href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20CertyFAST"
                        >
                            Talk to our team
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/images-new/isv/who.jpg"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
