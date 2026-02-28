import type { Metadata } from "next";
import { LifestyleClient } from "./client";

export const metadata: Metadata = {
  title: "Business & Lifestyle | Hudson Valley Reviving Plan",
  description:
    "Dining, shopping, media organizations, and quality of life in downtown Hudson Valley, NY.",
};

export default function LifestylePage() {
  return <LifestyleClient />;
}
