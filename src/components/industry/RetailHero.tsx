import { makeStyles } from "@fluentui/react-components";
import {
    ArrowTrendingLines20Filled,
    ThumbLike20Filled,
} from "@fluentui/react-icons";
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
    spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
    bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
    shelfGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" },
    shelfCell: { aspectRatio: "1.4", background: "var(--maq-gray-100)", borderRadius: "3px" },
    recoRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
    recoLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
    recoTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
    recoFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
});

const sparkHeights = [40, 60, 50, 78, 65, 90, 72, 95];
const shelf = Array.from({ length: 12 });

function RetailHeroVisual() {
    const v = useVisualStyles();

    return (
        <>
            <div className={v.tile}>
                <div className={v.tileTitle}>
                    <ArrowTrendingLines20Filled /> Live SKU velocity
                </div>
                <div className={v.spark}>
                    {sparkHeights.map((height, index) => (
                        <div key={index} className={v.bar} style={{ height: `${height}%` }} />
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <div className={v.tileTitle}>Shelf execution</div>
                <div className={v.shelfGrid}>
                    {shelf.map((_, index) => (
                        <div key={index} className={v.shelfCell} />
                    ))}
                </div>
            </div>
            <div className={v.tile}>
                <div className={v.tileTitle}>
                    <ThumbLike20Filled /> Today&apos;s pricing recommendations
                </div>
                <div className={v.recoRow}>
                    <span className={v.recoLabel}>SKU 4421</span>
                    <div className={v.recoTrack}>
                        <div className={v.recoFill} style={{ width: "78%" }} />
                    </div>
                </div>
                <div className={v.recoRow}>
                    <span className={v.recoLabel}>SKU 8127</span>
                    <div className={v.recoTrack}>
                        <div className={v.recoFill} style={{ width: "62%" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export function RetailHero() {
    return (
        <IndustryHero
            eyebrow="Retail & Consumer Goods"
            h1="Powering the Next Era of Retail with AI-Driven Intelligence"
            subhead="AI is redefining how retailers operate, compete, and grow. At MAQ Software, we help retail and CPG organizations embed intelligence across the enterprise, from real-time decision-making to autonomous operations. Backed by deep Microsoft expertise and advanced data platforms, we enable seamless customer experiences, resilient supply chains, and intelligent store ecosystems."
            mailSubject="Retail - MAQ Software"
            scrollTargetId="retail-solutions"
            scrollLabel="Explore retail solutions"
            visual={<RetailHeroVisual />}
        />
    );
}