import type { Metadata } from "next";
import { EducationClient } from "./client";

export const metadata: Metadata = {
  title: "Education | Hudson Valley Reviving Plan",
  description:
    "Four institutions of higher learning in Hudson Valley, NY: Fei Tian College, Fei Tian Academy of the Arts, Touro COM, and SUNY Orange.",
};

export default function EducationPage() {
  return <EducationClient />;
}
