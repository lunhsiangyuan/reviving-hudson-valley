import type { Metadata } from "next";
import { TourismClient } from "./client";

export const metadata: Metadata = {
  title: "Tourism & Culture | Hudson Valley Reviving Plan",
  description:
    "Discover Hudson Valley's world-class cultural destinations: Dia:Beacon, Storm King Art Center, FDR Presidential Library, Walkway Over the Hudson, and the iconic Catskill Mountains.",
};

export default function TourismPage() {
  return <TourismClient />;
}
