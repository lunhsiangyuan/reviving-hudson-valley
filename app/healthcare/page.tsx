import type { Metadata } from "next";
import { HealthcareClient } from "./client";

export const metadata: Metadata = {
  title: "Healthcare | Hudson Valley Reviving Plan",
  description:
    "A growing healthcare ecosystem in Hudson Valley, NY: Northern Medical Center, Garnet Health, and Touro College of Osteopathic Medicine.",
};

export default function HealthcarePage() {
  return <HealthcareClient />;
}
