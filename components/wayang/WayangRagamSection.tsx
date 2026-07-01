"use client";

import { useState } from "react";
import Image from "next/image";

const wayangCharacters = [
  { id: 1, name: "Yudhistira", image: "/Assets/Gambar Wayang/Yudhistira.jpg", desc: "Ksatria sulung Pandawa yang memiliki sifat sabar, jujur, dan tidak pernah berdusta." },
  { id: 2, name: "Bima", image: "/Assets/Gambar Wayang/Bima.jpg", desc: "Pandawa kedua yang gagah berani, kuat, dan memiliki kuku sakti Pancanaka." },
  { id: 3, name: "Arjuna", image: "/Assets/Gambar Wayang/Arjuna.jpg", desc: "Pandawa ketiga yang tampan, sakti mandraguna, dan sangat mahir memanah." },
  { id: 4, name: "Nakula", image: "/Assets/Gambar Wayang/Nakula.jpg", desc: "Pandawa keempat yang memiliki keahlian dalam bidang pertanian dan pengobatan." },
  { id: 5, name: "Sadewa", image: "/Assets/Gambar Wayang/Sadewa.jpg", desc: "Pandawa kelima yang ahli dalam bidang perbintangan dan ilmu pengetahuan." },
];

export default function WayangRagamSection() {
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleNext = () => {
    if (scrollIndex < wayangCharacters.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const handlePrev = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <section id="ragam" className="bg-[#f9f1e4] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-[1210px]">
        
        {/* Header Row */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11] sm:text-5xl">
              Ragam Wayang Kulit
            </h2>
            <p className="max-w-[700px] font-['League_Spartan'] text-lg text-[#4A332B]">
              Kenali tokoh-tokoh utama pewayangan jawa dan karakteristik mereka yang penuh makna
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex gap-4 shrink-0">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                scrollIndex === 0 
                  ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                  : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
              }`}
              aria-label="Previous items"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= wayangCharacters.length - 4}
              className={`flex h-12 w-12 items-center justify-center rounded-lg border border-[#4e0b11] text-xl font-bold transition-all ${
                scrollIndex >= wayangCharacters.length - 4 
                  ? "border-stone-300 text-stone-400 bg-transparent cursor-not-allowed" 
                  : "bg-[#4e0b11] text-white hover:bg-[#3d080d]"
              }`}
              aria-label="Next items"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Cards Grid/Carousel */}
        <div className="mt-12 overflow-hidden pb-8 pt-4 -mx-4 px-4">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${scrollIndex * 290}px)` }}
          >
            {wayangCharacters.map((item) => (
              <div 
                key={item.id}
                className="w-[266px] shrink-0 rounded-[15px] border border-[#4e0b11] bg-white p-4 shadow-sm flex flex-col items-center text-center justify-between min-h-[420px]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[10px] bg-[#d9d9d9] flex items-center justify-center">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>

                <h3 className="mt-6 font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                  {item.name}
                </h3>

                <p className="mt-3 font-['League_Spartan'] text-sm leading-relaxed text-stone-600">
                  {item.desc}
                </p>

                <button className="mt-6 w-full rounded-full border border-[#4e0b11] py-2 font-['League_Spartan'] text-base font-semibold text-[#4e0b11] transition-all hover:bg-[#4e0b11] hover:text-white active:scale-95">
                  Lihat Detail
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
