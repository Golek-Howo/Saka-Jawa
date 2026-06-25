import type { Metadata } from "next";
import HeroSection from "@/src/sections/batik/hero-section/HeroSection";

export const metadata: Metadata = {
  title: "Batik Jawa — Saka Jawa",
  description:
    "Jelajahi keindahan dan filosofi batik Jawa. Motif, sejarah, dan warisan budaya leluhur yang tak ternilai.",
};

export default function BatikPage() {
  return (
    <main>
      <HeroSection />
      {/* Section berikutnya akan ditambahkan di sini */}
    </main>
  );
}
