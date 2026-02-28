import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { AudienceSelector } from "@/components/sections/audience-selector";
import { StatsSection } from "@/components/sections/stats-section";
import { TopicsGrid } from "@/components/sections/topics-grid";
import { TimelineWrapper } from "@/components/sections/timeline-wrapper";
import { CommunityStories } from "@/components/sections/community-stories";
import { CTASection } from "@/components/sections/cta-section";
import { ScrollMapExplorer } from "@/components/sections/scroll-map-explorer";

export const metadata: Metadata = {
  title: "Hudson Valley Reviving Plan | Where History Meets Innovation",
  description:
    "A comprehensive regional initiative to transform the Hudson Valley through strategic investments in arts, technology, agriculture, healthcare, and sustainable communities across 9 counties.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Audience Selector */}
      <AudienceSelector />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Topic Navigation Grid */}
      <TopicsGrid />

      {/* Stats Section */}
      <StatsSection />

      {/* Community Impact Stories */}
      <CommunityStories />

      {/* Timeline — horizontal mode */}
      <TimelineWrapper horizontal />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* Scroll-Driven Explorer */}
      <ScrollMapExplorer />

      {/* Decorative divider */}
      <div className="section-divider">
        <span className="text-amber-400">◆</span>
      </div>

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
