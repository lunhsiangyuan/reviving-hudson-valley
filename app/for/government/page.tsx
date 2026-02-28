import type { Metadata } from "next";
import { GovernmentClient } from "./client";

export const metadata: Metadata = {
  title: "Revitalization Progress Report | Hudson Valley Reviving Plan",
  description:
    "Government progress report on Hudson Valley's Downtown Revitalization Initiative, BOA planning, economic impact, and funding opportunities.",
};

export default function GovernmentPage() {
  return <GovernmentClient />;
}
