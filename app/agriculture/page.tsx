import type { Metadata } from "next";
import { AgricultureClient } from "./client";

export const metadata: Metadata = {
  title: "Agriculture & Food | Hudson Valley Reviving Plan",
  description:
    "Explore Hudson Valley's thriving agricultural economy: 2,280+ farms, $301M in sales, 78% agri-tourism growth, and a farm-to-table movement reshaping the regional food system.",
};

export default function AgriculturePage() {
  return <AgricultureClient />;
}
