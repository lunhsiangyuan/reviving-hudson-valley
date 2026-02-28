import type { Metadata } from "next";
import { EducationClient } from "./client";

export const metadata: Metadata = {
  title: "Education | Hudson Valley Reviving Plan",
  description:
    "World-class institutions in Hudson Valley, NY: Vassar College, Bard College, SUNY New Paltz, IBM Quantum Computation Center, and SUNY Orange.",
};

export default function EducationPage() {
  return <EducationClient />;
}
