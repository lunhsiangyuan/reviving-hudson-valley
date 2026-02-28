import type { Metadata } from "next";
import { SchoolClient } from "./client";

export const metadata: Metadata = {
  title: "Academic Partnership Opportunities | Hudson Valley Reviving Plan",
  description:
    "Explore academic collaboration opportunities with Hudson Valley institutions including Vassar College, Bard College, SUNY New Paltz, and the IBM Quantum Computation Center.",
};

export default function SchoolPage() {
  return <SchoolClient />;
}
