import { MarketplaceOffers } from "../MarketplaceOffers";

const offers = [
    {
        pill: "Supply chain",
        title: "Supply Chain & Vendor Performance Analytics for Retail: 4-Week PoC",
        desc: "A 4-week proof of concept that unifies supplier, logistics, and inventory data to expose vendor performance gaps and improve supply chain reliability.",
        href: "#",
    },
    {
        pill: "Store operations",
        title: "Store Operations & Workforce Intelligence for Retail: 2-Week Assessment",
        desc: "A 2-week assessment that benchmarks store operations and workforce productivity on Microsoft Fabric, surfacing opportunities to lift throughput and service levels.",
        href: "#",
    },
    {
        pill: "Merchandising",
        title: "Merchandising & Shelf Analytics for Retail: 2-Week Assessment",
        desc: "A 2-week assessment that connects assortment, planogram, and shelf-execution data on Microsoft Fabric to sharpen merchandising and lift in-store conversion.",
        href: "#",
    },
    {
        pill: "Store operations",
        title: "Store Manager Assistant for Retail",
        desc: "A Copilot-powered assistant that gives store managers real-time visibility into sales, inventory, and workforce signals, with guided actions to run a smarter store.",
        href: "#",
    },
];

export function RetailMarketplaceOffers() {
    return (
        <MarketplaceOffers
            sub="Accelerate retail outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning demand planning, customer experience, and real-time intelligence."
            offers={offers}
        />
    );
}