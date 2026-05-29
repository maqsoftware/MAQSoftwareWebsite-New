import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
} from "@fluentui/react-icons";
import { useProductPageStyles } from "../../pages/productPageStyles";

export function MigrateFASTHero() {
    const s = useProductPageStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Microsoft Fabric migration</span>
                    <h1 className={s.h1}>MigrateFAST</h1>
                    <p className={s.heroSub}>
                        Accelerate your migration journey to Microsoft Fabric. Simplify
                        data and reporting platform migration with AI-powered tools for
                        faster and easier transitions.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20MigrateFAST"
                        >
                            Contact our team
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            onClick={() =>
                                document
                                    .getElementById("migratefast-process")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            See the process
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/images-new/isv/migrate-fast.jpg"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
