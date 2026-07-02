import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";
import KulinerHeroSection from "@/components/kuliner/KulinerHeroSection";
import KulinerAboutSection from "@/components/kuliner/KulinerAboutSection";
import KulinerDaerahSection from "@/components/kuliner/KulinerDaerahSection";
import KulinerQuotesSection from "@/components/kuliner/KulinerQuotesSection";
import KulinerCeritaSection from "@/components/kuliner/KulinerCeritaSection";
import KulinerGallerySection from "@/components/kuliner/KulinerGallerySection";
import KulinerInteractiveMapSection from "@/components/kuliner/KulinerInteractiveMapSection";

export const metadata: Metadata = topicPageMetadata.kuliner;

import SharedNavbar from "@/components/shared/SharedNavbar";

export default function KulinerPage() {
  return (
    <main>
      <SharedNavbar />
      <KulinerHeroSection />
      <KulinerAboutSection />
      <KulinerDaerahSection />
      <KulinerQuotesSection />
      <KulinerCeritaSection />
      <KulinerGallerySection />
      <KulinerInteractiveMapSection />
    </main>
  );
}

