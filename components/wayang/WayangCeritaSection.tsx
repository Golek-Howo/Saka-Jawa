"use client";

import Image from "next/image";
import { useState } from "react";

const wayangStories = [
  {
    id: 1,
    title: "Yudhistira",
    desc: "Putra sulung Pandawa yang berwatak sabar, jujur, adil, dan menjunjung tinggi kebenaran tanpa pernah berbohong.",
    fullDesc:
      "Yudhistira adalah putra sulung dari lima bersaudara Pandawa, dikenal sebagai sosok yang bijaksana, jujur, dan sangat menjunjung tinggi kebenaran (dharma). Ia hampir tidak pernah berbohong sepanjang hidupnya, sehingga dijuluki sebagai raja yang adil dan berhati mulia. Meski memiliki kesaktian, Yudhistira lebih mengandalkan kebijaksanaan dan pengendalian diri dalam menghadapi setiap persoalan, menjadikannya teladan utama dalam filosofi kepemimpinan Jawa.",
    image: "/Assets/Gambar Wayang/Yudhistira.jpg",
    videoUrl: "https://www.youtube.com/embed/hcLPxkRNX3o?si=9tOtEPBVtOeiXqMa",
  },
  {
    id: 2,
    title: "Bima Sena",
    desc: "Tokoh Pandawa kedua yang gagah berani, berbadan besar, memiliki kuku Pancanaka, dan setia pada kebenaran.",
    fullDesc:
      "Bima Sena, atau Werkudara, adalah Pandawa kedua yang terkenal dengan kekuatan fisiknya yang luar biasa dan sikapnya yang tegas serta apa adanya. Ia memiliki senjata pusaka berupa kuku Pancanaka yang sangat sakti. Meski terkesan kasar dalam ucapan, Bima dikenal sangat setia pada kebenaran dan tidak pernah berbahasa halus bahkan kepada raja sekalipun, karena baginya kejujuran lebih penting daripada tata krama semu.",
    image: "/Assets/Gambar Wayang/Bima.jpg",
  },
  {
    id: 3,
    title: "Gatotkaca",
    desc: "Ksatria otot kawat balung wesi, putra Bima yang memiliki kesaktian luar biasa hingga mampu terbang tanpa sayap.",
    fullDesc:
      "Gatotkaca adalah putra Bima yang dijuluki 'otot kawat balung wesi' karena kekuatan tubuhnya yang luar biasa tangguh. Sejak kecil ia telah ditempa dengan berbagai kesaktian, termasuk kemampuan terbang tanpa sayap. Gatotkaca dikenal sebagai ksatria pemberani yang menjadi tumpuan pertahanan Pandawa di medan perang, khususnya dalam perang besar Baratayuda, hingga akhirnya gugur sebagai pahlawan sejati.",
    image: "/Assets/Gambar Wayang/gatotkaca.webp",
  },
];

export default function WayangCeritaSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeSummary, setActiveSummary] = useState<typeof wayangStories[number] | null>(null);

  return (
    <>
      <section className="relative z-40 py-20 px-6 md:px-12 lg:px-24 bg-[#3e0b10] text-white">
        <div className="mx-auto w-full max-w-[var(--container-lg)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header content */}
            <div className="lg:col-span-4 flex flex-col gap-6 text-left">
              <div>
                <h3 className="font-['League_Spartan'] text-3xl md:text-4xl font-bold leading-tight">
                  Cerita Wayang Penuh Makna
                </h3>
                <p className="mt-4 font-['League_Spartan'] text-base text-white/80 leading-relaxed">
                  Kenali kisah-kisah legendaris serta ketokohan para ksatria pewayangan Jawa dan filosofi luhurnya.
                </p>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Lihat Cerita</span>
                  <svg className="w-5 h-5 fill-current ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Cards List */}
            <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
              {wayangStories.map((story) => (
                <div key={story.id} className="rounded-xl bg-[#F8F5EE] p-4 text-stone-900 shadow-md flex flex-col justify-between min-h-[350px]">
                  <div>
                    {/* Card Image */}
                    <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden bg-stone-200">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    {/* Title */}
                    <h4 className="mt-4 font-['League_Spartan'] text-xl font-bold text-[#4e0b11]">
                      {story.title}
                    </h4>
                    {/* Description */}
                    <p className="mt-2 font-['League_Spartan'] text-sm text-stone-700 leading-relaxed">
                      {story.desc}
                    </p>
                  </div>
                  {/* Actions inside card */}
                  <div className="mt-4 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <button
                      onClick={() => setActiveSummary(story)}
                      className="font-['League_Spartan'] text-sm font-semibold text-[#4e0b11] hover:underline cursor-pointer text-left"
                    >
                      Lihat Ringkasan
                    </button>
                    <button 
                      onClick={() => story.videoUrl ? setActiveVideo(story.videoUrl) : null}
                      className="w-8 h-8 rounded-full bg-[#4e0b11] text-white flex items-center justify-center transition-transform hover:scale-110"
                    >
                      <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <iframe 
              src={`${activeVideo}&autoplay=1`} 
              title="YouTube video player" 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Summary Modal */}
      {activeSummary && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setActiveSummary(null)}
        >
          <div
            className="relative w-full max-w-lg bg-[#F8F5EE] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSummary(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-[#4e0b11] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="aspect-[16/9] w-full relative bg-stone-200">
              <Image
                src={activeSummary.image}
                alt={activeSummary.title}
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="p-6">
              <h4 className="font-['League_Spartan'] text-2xl font-bold text-[#4e0b11]">
                {activeSummary.title}
              </h4>
              <p className="mt-3 font-['League_Spartan'] text-sm text-stone-700 leading-relaxed">
                {activeSummary.fullDesc ?? activeSummary.desc}
              </p>

              {activeSummary.videoUrl && (
                <button
                  onClick={() => {
                    setActiveVideo(activeSummary.videoUrl!);
                    setActiveSummary(null);
                  }}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#4e0b11] px-5 py-2.5 font-semibold text-white text-sm transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Tonton Video</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}