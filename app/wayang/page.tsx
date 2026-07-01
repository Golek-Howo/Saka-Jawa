import type { Metadata } from "next";
import WayangHeroSection from "@/components/wayang/WayangHeroSection";
import WayangAboutSection from "@/components/wayang/WayangAboutSection";
import WayangRagamSection from "@/components/wayang/WayangRagamSection";
import WayangQuotesSection from "@/components/wayang/WayangQuotesSection";
import WayangCeritaSection from "@/components/wayang/WayangCeritaSection";
import WayangGallerySection from "@/components/wayang/WayangGallerySection";
import WayangInteractiveMapSection from "@/components/wayang/WayangInteractiveMapSection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.wayang;

export default function WayangPage() {
  return (
    <main>
      <WayangHeroSection />
      <WayangAboutSection />
      <WayangRagamSection />
      <WayangQuotesSection />
      <WayangCeritaSection />
      <WayangGallerySection />
      <WayangInteractiveMapSection />
    </main>
  );
}
