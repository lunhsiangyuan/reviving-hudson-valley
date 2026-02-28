import type { Metadata } from "next";
import { TransportationClient } from "./client";

export const metadata: Metadata = {
  title: "Transportation | Hudson Valley Reviving Plan",
  description:
    "Strategic connectivity: Stewart International Airport, I-84 highway access, Shortline Bus to NYC, and regional transit options in Hudson Valley, NY.",
};

export default function TransportationPage() {
  return <TransportationClient />;
}
