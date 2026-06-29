import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";
import KulinerHeroSection from "@/components/kuliner/KulinerHeroSection";
import KulinerAboutSection from "@/components/kuliner/KulinerAboutSection";
import KulinerWaktuMakanSection from "@/components/kuliner/KulinerWaktuMakanSection";
import KulinerQuotesSection from "@/components/kuliner/KulinerQuotesSection";
import KulinerCeritaSection from "@/components/kuliner/KulinerCeritaSection";
import KulinerGallerySection from "@/components/kuliner/KulinerGallerySection";
import KulinerInteractiveMapSection from "@/components/kuliner/KulinerInteractiveMapSection";
import KulinerDewantaraQuoteSection from "@/components/kuliner/KulinerDewantaraQuoteSection";

export const metadata: Metadata = topicPageMetadata.kuliner;

export default function KulinerPage() {
  return (
    <main>
      <KulinerHeroSection />
      <KulinerAboutSection />
      <KulinerWaktuMakanSection />
      <KulinerQuotesSection />
      <KulinerCeritaSection />
      <KulinerGallerySection />
      <KulinerInteractiveMapSection />
      <KulinerDewantaraQuoteSection />
    </main>
  );
}

