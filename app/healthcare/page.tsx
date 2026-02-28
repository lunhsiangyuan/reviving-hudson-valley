import type { Metadata } from "next";
import { HealthcareClient } from "./client";

export const metadata: Metadata = {
  title: "Healthcare | Hudson Valley Reviving Plan",
  description:
    "Hudson Valley's healthcare ecosystem: WMCHealth (Level I Trauma Center, 9-hospital network), Vassar Brothers Medical Center (Northwell Health affiliate), and Garnet Health Medical Center serving Orange and Sullivan counties.",
};

export default function HealthcarePage() {
  return <HealthcareClient />;
}
