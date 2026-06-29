import type { Metadata } from "next";
import BatikHeroSection from "@/components/batik/BatikHeroSection";
import BatikAboutSection from "@/components/batik/BatikAboutSection";
import BatikMotifSection from "@/components/batik/BatikMotifSection";
import BatikQuotesSection from "@/components/batik/BatikQuotesSection";
import BatikCeritaSection from "@/components/batik/BatikCeritaSection";
import BatikGallerySection from "@/components/batik/BatikGallerySection";
import BatikInteractiveMapSection from "@/components/batik/BatikInteractiveMapSection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.batik;

export default function BatikPage() {
  return (
    <main>
      <BatikHeroSection />
      <BatikAboutSection />
      <BatikMotifSection />
      <BatikQuotesSection />
      <BatikCeritaSection />
      <BatikGallerySection />
      <BatikInteractiveMapSection />
    </main>
  );
}
