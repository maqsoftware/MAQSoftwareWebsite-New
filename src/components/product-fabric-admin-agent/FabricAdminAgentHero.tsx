import { Button } from "@fluentui/react-components";
import {
    Mail24Regular,
    ArrowRight20Regular,
} from "@fluentui/react-icons";
import { useProductFabricAdminAgentStyles } from "./productFabricAdminAgentStyles";

export function FabricAdminAgentHero() {
    const s = useProductFabricAdminAgentStyles();

    return (
        <section className={s.hero}>
            <div className={s.heroGrid}>
                <div>
                    <span className={s.eyebrow}>Fabric Workload</span>
                    <h1 className={s.h1}>
                        AI-powered capacity management for Microsoft Fabric
                    </h1>
                    <p className={s.heroSub}>
                        Fabric Admin Agent gives Microsoft Fabric administrators an AI
                        copilot for capacity. It detects anomalies and usage spikes in real
                        time, forecasts upcoming demand, and recommends actions to reduce
                        throttling, eliminate waste, and optimize cost — so platform teams
                        stay ahead of capacity issues instead of firefighting them.
                    </p>
                    <div className={s.btns}>
                        <Button
                            appearance="primary"
                            size="large"
                            icon={<Mail24Regular />}
                            as="a"
                            href="mailto:customersuccess@maqsoftware.com?subject=Fabric%20Admin%20Agent%20-%20Walkthrough"
                        >
                            Request a walkthrough
                        </Button>
                        <Button
                            appearance="outline"
                            size="large"
                            icon={<ArrowRight20Regular />}
                            iconPosition="after"
                            onClick={() =>
                                document
                                    .getElementById("fabric-admin-features")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            See capabilities
                        </Button>
                    </div>
                </div>
                <div className={s.heroImageWrap} aria-hidden="true">
                    <img
                        className={s.heroImage}
                        src="https://maqsoftware.com/images-new/isv/fabric-admin-agent-hero.svg"
                        alt=""
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
