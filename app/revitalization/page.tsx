import type { Metadata } from "next";
import { RevitalizationClient } from "./client";

export const metadata: Metadata = {
  title: "City Revitalization | Hudson Valley Reviving Plan",
  description:
    "$10M Downtown Revitalization Initiative: five transformative projects, Business Improvement District, and economic growth in Hudson Valley, NY.",
};

export default function RevitalizationPage() {
  return <RevitalizationClient />;
}
