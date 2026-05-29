import { makeStyles } from "@fluentui/react-components";
import { Code24Regular, BranchFork24Regular } from "@fluentui/react-icons";
import { IndustryHero } from "./IndustryHero";

const useVisualStyles = makeStyles({
    tile: {
        background: "#fff",
        border: "1px solid var(--maq-border)",
        borderRadius: "10px",
        padding: "14px 16px",
    },
    tileTitle: {
        fontSize: "11px",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--maq-gray-500)",
        marginBottom: "8px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
    },
    pipelineBars: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
    },
    pipelineRow: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    pipelineLabel: { fontSize: "10px", color: "var(--maq-gray-500)", width: "50px" },
    pipelineTrack: { flex: 1, height: "8px", background: "var(--maq-gray-100)", borderRadius: "4px" },
    pipelineFill: { height: "100%", borderRadius: "4px" },
    spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
    bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
    scoreBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "4px",
    },
    scoreValue: {
        fontSize: "28px",
        fontWeight: 700,
        color: "var(--maq-red)",
        lineHeight: 1,
    },
    scoreLabel: { fontSize: "10px", color: "var(--maq-gray-500)" },
});

const sparkHeights = [35, 55, 45, 70, 60, 85, 75, 92];

function TechnologyHeroVisual() {
    const v = useVisualStyles();

    return (
        <>
            <div className={v.tile}>
                <div className={v.tileTitle}>
                    <BranchFork24Regular /> CI/CD Pipeline
                </div>
                <div className={v.pipelineBars}>
                    <div className={v.pipelineRow}>
                        <span className={v.pipelineLabel}>Build</span>
                        <div className={v.pipelineTrack}>
                            <div className={v.pipelineFill} style={{ width: "92%", background: "#16a34a" }} />
                        </div>
                    </div>
                    <div className={v.pipelineRow}>
                        <span className={v.pipelineLabel}>Test</span>
                        <div className={v.pipelineTrack}>
                            <div className={v.pipelineFill} style={{ width: "78%", background: "var(--maq-red)" }} />
                        </div>
                    </div>
                    <div className={v.pipelineRow}>
                        <span className={v.pipelineLabel}>Deploy</span>
                        <div className={v.pipelineTrack}>
                            <div className={v.pipelineFill} style={{ width: "65%", background: "#2563eb" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={v.tile}>
                <div className={v.tileTitle}>
                    <Code24Regular /> Developer Velocity
                </div>
                <div className={v.spark}>
                    {sparkHeights.map((height, index) => (
                        <div key={index} className={v.bar} style={{ height: `${height}%` }} />
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <div className={v.tileTitle}>Test Coverage</div>
                <div className={v.scoreBox}>
                    <span className={v.scoreValue}>94%</span>
                    <span className={v.scoreLabel}>Overall coverage</span>
                </div>
            </div>
        </>
    );
}

export function TechnologyHero() {
    return (
        <IndustryHero
            eyebrow="Technology & Software"
            h1="Accelerate Software Delivery with AI-Powered Engineering"
            subhead="AI is reshaping how technology organizations build, test, and ship software. At MAQ Software, we help ISVs, cloud-native teams, and enterprise software organizations embed intelligence across the SDLC — from agentic code review to embedded analytics — so engineering teams spend less time on rework and more time on innovation."
            mailSubject="Technology - MAQ Software"
            scrollTargetId="technology-solutions"
            scrollLabel="Explore tech solutions"
            visual={<TechnologyHeroVisual />}
        />
    );
}