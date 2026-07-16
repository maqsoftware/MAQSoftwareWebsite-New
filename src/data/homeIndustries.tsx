import type { ReactNode } from "react";
import { ShoppingBag, CircleDollarSign, Ambulance, Wrench, Monitor, Earth } from "lucide-react";

/* ==================================================================
   Shared "Industries we serve" data for the home page explorations
   (HomeV2–HomeV6). Rendered as IconCards.

   Icons come from the Lucide library (stroke = currentColor, so they
   inherit the card's icon color). Sizing is controlled by the card's
   `& svg` rule, not per-icon props.
   ================================================================== */

export interface Industry { label: string; sub?: string; desc?: string; to: string; icon: ReactNode; }

export const INDUSTRIES: Industry[] = [
  { label: "Retail & Consumer Goods", sub: "Stores, E-commerce & Consumer Brands", desc: "Embed AI across customer experience, supply chain, and store operations — and respond in real time.", to: "/industries/retail",
    icon: <ShoppingBag /> },
  { label: "Financial Services", sub: "Banking, Insurance & Capital Markets", desc: "Underwrite credit, close the books, and monitor transactions with AI agents built for audit and regulation.", to: "/industries/financial-services",
    icon: <CircleDollarSign /> },
  { label: "Technology", sub: "Software & Digital Natives", desc: "Embed AI across the SDLC so engineering teams spend less time on rework and more on shipping.", to: "/industries/technology",
    icon: <Monitor /> },
  { label: "Manufacturing", sub: "Industrial & Supply Chain", desc: "Connect plant operations, supply chain, and procurement on a single platform — with AI agents that handle vendor receipts end to end.", to: "/industries/manufacturing",
    icon: <Wrench /> },
  { label: "Healthcare & Life Sciences", sub: "Providers, Payers & Life Sciences", desc: "Turn fragmented health data into safer clinical decisions, with HIPAA and 21 CFR Part 11 built in.", to: "/industries/healthcare-life-sciences",
    icon: <Ambulance /> },
  { label: "Public Sector", sub: "Government & Mission", desc: "Move citizen services, policy decisions, and program analytics to AI-grounded platforms — FedRAMP and CJIS aligned.", to: "/industries/public-sector",
    icon: <Earth /> },
];
