import type { Metadata } from "next";
import { InvestmentClient } from "./client";

export const metadata: Metadata = {
  title: "Investment Opportunities | Hudson Valley Reviving Plan",
  description:
    "Explore investment opportunities in Hudson Valley, NY. Real estate trends, existing investment cases, opportunity sectors, and strategic advantages.",
};

export default function InvestmentPage() {
  return <InvestmentClient />;
}
