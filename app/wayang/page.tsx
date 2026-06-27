import type { Metadata } from "next";
import WayangHeroSection from "@/components/wayang/WayangHeroSection";
import WayangStorySection from "@/components/wayang/WayangStorySection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.wayang;

export default function WayangPage() {
  return (
    <main>
      <WayangHeroSection />
      <WayangStorySection />
    </main>
  );
}
