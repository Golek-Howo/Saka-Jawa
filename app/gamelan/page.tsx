import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";
import GamelanHeroSection from "@/components/gamelan/GamelanHeroSection";
import GamelanAboutSection from "@/components/gamelan/GamelanAboutSection";
import GamelanInstrumenSection from "@/components/gamelan/GamelanInstrumenSection";
import GamelanQuotesSection from "@/components/gamelan/GamelanQuotesSection";
import GamelanCeritaSection from "@/components/gamelan/GamelanCeritaSection";
import GamelanGallerySection from "@/components/gamelan/GamelanGallerySection";
import GamelanInteractiveMapSection from "@/components/gamelan/GamelanInteractiveMapSection";


export const metadata: Metadata = topicPageMetadata.gamelan;

export default function GamelanPage() {
  return (
    <main>
      <GamelanHeroSection />
      <GamelanAboutSection />
      <GamelanInstrumenSection />
      <GamelanQuotesSection />
      <GamelanCeritaSection />
      <GamelanGallerySection />
      <GamelanInteractiveMapSection />
    </main>
  );
}
