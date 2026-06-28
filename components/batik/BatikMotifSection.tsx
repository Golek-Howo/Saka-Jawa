"use client";

import React, { useState } from "react";
import DetailGaleri from "../shared/DetailGaleri";

export default function BatikMotifSection() {
  const [selectedMotifId, setSelectedMotifId] = useState<string | null>(null);

  const motifs = [
    {
      id: "solo",
      title: "Motif Solo",
      desc: "Batik keraton Solo memiliki ciri khas warna soga (cokelat keemasan) yang hangat, melambangkan kerendahan hati dan kesederhanaan.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Solo",
    },
    {
      id: "jogja",
      title: "Motif Jogja",
      desc: "Batik Jogja dikenal dengan warna dasar putih bersih atau hitam tegas, mencerminkan ketegasan karakter, keberanian, dan kesucian jiwa.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Jogja",
    },
    {
      id: "pekalongan",
      title: "Motif Pekalongan",
      desc: "Batik pesisiran kaya akan warna cerah dan motif flora fauna dinamis, melambangkan keterbukaan dan akulturasi budaya yang indah.",
      imageSrc: "https://placehold.co/400x300/D9D9D9/888888?text=Batik+Pekalongan",
    },
  ];

  // Data galeri lengkap (5 gambar) agar layout grid galeri terisi penuh
  const galleryImages = [
    {
      id: "solo",
      title: "Batik Motif Solo",
      description: "Batik keraton Solo memiliki ciri khas warna soga (cokelat keemasan) yang hangat. Warna ini melambangkan kerendahan hati, keanggunan, dan kesederhanaan yang membumi. Beberapa motif ikonik dari Solo antara lain Sidomukti, Parang Kusumo, dan Truntum yang masing-masing memuat doa dan filosofi mendalam bagi pemakainya.",
      src: "https://placehold.co/800x600/D9D9D9/888888?text=Batik+Solo+Detail",
    },
    {
      id: "jogja",
      title: "Batik Motif Jogja",
      description: "Batik Jogja sangat mudah dikenali melalui warna dasar putih bersih atau biru kehitaman yang tegas. Filosofinya mencerminkan ketegasan karakter, keberanian moral, dan kesucian jiwa yang murni. Berbeda dengan Solo, keraton Jogja memiliki aturan ketat mengenai 'Awisan Dalem' atau motif larangan yang hanya boleh dipakai Sultan.",
      src: "https://placehold.co/800x600/D9D9D9/888888?text=Batik+Jogja+Detail",
    },
    {
      id: "pekalongan",
      title: "Batik Motif Pekalongan",
      description: "Sebagai daerah pesisir, batik Pekalongan menyerap pengaruh budaya asing (Tiongkok, Belanda, Arab, Jepang) menghasilkan warna-warni cerah yang berani dan ceria. Motif andalannya berupa flora dan fauna yang sangat dinamis, seperti motif Jlamprang dan Buketan, menyimbolkan keterbukaan dan adaptasi masyarakat pesisir.",
      src: "https://placehold.co/800x600/D9D9D9/888888?text=Batik+Pekalongan+Detail",
    },
    {
      id: "cirebon",
      title: "Batik Motif Cirebon",
      description: "Batik Cirebon, dengan mahakarya Mega Mendung-nya, melambangkan konsep spiritual bahwa setiap manusia harus mampu meredam gejolak amarah dalam dirinya. Awan berlapis-lapis dengan gradasi warna tujuh tingkat melambangkan kebijaksanaan yang dalam.",
      src: "https://placehold.co/800x600/D9D9D9/888888?text=Batik+Cirebon+Detail",
    },
    {
      id: "lasem",
      title: "Batik Motif Lasem",
      description: "Batik Lasem, atau yang sering disebut sebagai 'Batik Tiga Negeri', merupakan simbol nyata perpaduan budaya Tionghoa dan Jawa. Warna khasnya adalah 'Abang Getih Pitik' (merah darah ayam) yang kuat dan sangat ikonik di pesisir utara Jawa.",
      src: "https://placehold.co/800x600/D9D9D9/888888?text=Batik+Lasem+Detail",
    },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden px-6 py-20 bg-[#F9F1E4] md:px-12 lg:px-24 lg:py-28"
        id="batik-motif"
      >
        <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-[42px] font-extrabold text-[#4E0B11] mb-3">
              Ragam Motif Batik
            </h2>
            <p className="text-base font-medium text-gray-800 max-w-2xl">
              Kenali beberapa motif khas dari berbagai daerah di pulau Jawa dan pesonanya dalam menciptakan harmoni budaya
            </p>
          </div>

          {/* Motifs Grid - Exactly 3 Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {motifs.map((motif) => (
              <article
                key={motif.id}
                className="flex flex-col items-center border border-[#4E0B11] rounded-2xl p-5 md:p-6 text-center bg-transparent"
              >
                {/* Image Container */}
                <div className="w-full aspect-[4/3] bg-[#D9D9D9] rounded-xl overflow-hidden mb-6 relative">
                  <img
                    src={motif.imageSrc}
                    alt={motif.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Details */}
                <h3 className="text-xl font-bold text-[#4E0B11] mb-3">
                  {motif.title}
                </h3>
                
                <p className="text-[13px] md:text-[14px] font-medium text-gray-800 leading-relaxed mb-8 px-2">
                  {motif.desc}
                </p>

                {/* Detail Button */}
                <button 
                  onClick={() => setSelectedMotifId(motif.id)}
                  className="mt-auto px-8 py-2.5 border border-[#4E0B11] text-[#4E0B11] font-bold rounded-full text-sm hover:bg-[#4E0B11] hover:text-[#F9F1E4] transition-colors"
                >
                  Lihat Detail
                </button>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Galeri Modal Overlay */}
      {selectedMotifId && (
        <DetailGaleri 
          initialImageId={selectedMotifId} 
          images={galleryImages} 
          onClose={() => setSelectedMotifId(null)} 
        />
      )}
    </>
  );
}
