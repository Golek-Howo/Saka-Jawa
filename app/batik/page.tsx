import type { Metadata } from "next";
import BatikHeroSection from "@/components/batik/BatikHeroSection";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.batik;

export default function BatikPage() {
  return (
    <main>
      <BatikHeroSection />
    </main>
  );
}
