"use client";

import React, { useState } from "react";
import Image from "next/image";
import DetailGaleri from "../shared/DetailGaleri";

export default function KulinerWaktuMakanSection() {
  const [selectedDaerahId, setSelectedDaerahId] = useState<string | null>(null);

  const daerahList = [
    {
      id: "barat",
      title: "Jawa Barat",
      desc: "Jelajahi kekayaan kuliner Jawa Barat yang memanjakan selera.",
    },
    {
      id: "tengah",
      title: "Jawa Tengah",
      desc: "Jelajahi kekayaan kuliner Jawa Tengah yang memanjakan selera.",
    },
    {
      id: "timur",
      title: "Jawa Timur",
      desc: "Jelajahi kekayaan kuliner Jawa Timur yang memanjakan selera.",
    },
  ];

  // Data galeri per daerah (berasal dari kuliner-data sebelumnya)
  const galleryData: Record<string, { gallery: { id: string; src: string; title: string; description: string }[] }> = {
    barat: {
      gallery: [
        {
          id: "barat-1",
          title: "Nasi Liwet",
          description: "Nasi Liwet adalah hidangan ikonik khas Solo (Surakarta) yang dimasak dengan santan, serai, dan daun salam hingga menghasilkan aroma harum yang khas. Disajikan dengan labu siam, areh (santan kental), ayam suwir, dan telur, hidangan ini sering kali dinikmati sebagai sajian yang mengenyangkan dan penuh cita rasa.",
          src: "/Assets/Gambar Kuliner/go liwet.avif",
        },
        {
          id: "barat-2",
          title: "Gudeg",
          description: "Gudeg adalah masakan khas Yogyakarta yang terbuat dari nangka muda dimasak berjam-jam bersama santan dan rempah pilihan. Rasanya manis gurih, biasanya disajikan dengan krecek, ayam opor, dan telur pindang.",
          src: "/Assets/Gambar Kuliner/rawon.avif",
        },
        {
          id: "barat-3",
          title: "Tahu Kupat",
          description: "Tahu Kupat adalah sajian ringan khas Jawa berupa tahu goreng dan ketupat yang disiram kuah manis dari kecap manis, bawang goreng, dan irisan daun bawang yang segar.",
          src: "/Assets/Gambar Kuliner/tahu kupat.avif",
        },
        {
          id: "barat-4",
          title: "Gorengan Berkat",
          description: "Hidangan istimewa khas Jawa yang biasa disajikan dalam acara-acara adat dan syukuran. Menggunakan rempah pilihan yang diwariskan turun-temurun.",
          src: "/Assets/Gambar Kuliner/go berkat.avif",
        },
      ],
    },
    tengah: {
      gallery: [
        {
          id: "tengah-1",
          title: "Rawon",
          description: "Rawon adalah sup daging sapi berkuah hitam pekat yang khasnya berasal dari buah kluwek. Hidangan legendaris ini memiliki cita rasa gurih yang dalam dan aroma rempah yang kuat, biasanya disajikan dengan nasi putih, tauge, dan sambal.",
          src: "/Assets/Gambar Kuliner/rawon.avif",
        },
        {
          id: "tengah-2",
          title: "Nasi Liwet",
          description: "Nasi Liwet adalah hidangan ikonik khas Solo yang dimasak dengan santan. Cocok dinikmati bersama keluarga.",
          src: "/Assets/Gambar Kuliner/go liwet.avif",
        },
        {
          id: "tengah-3",
          title: "Tahu Kupat",
          description: "Sajian khas Jawa yang segar dan mengenyangkan. Perpaduan ketupat dan tahu goreng dengan kuah kecap manis yang lezat.",
          src: "/Assets/Gambar Kuliner/tahu kupat.avif",
        },
        {
          id: "tengah-4",
          title: "Gorengan Berkat",
          description: "Hidangan berkat khas Jawa. Kaya rempah dan dimasak dengan penuh kesabaran.",
          src: "/Assets/Gambar Kuliner/go berkat.avif",
        },
      ],
    },
    timur: {
      gallery: [
        {
          id: "timur-1",
          title: "Tahu Kupat",
          description: "Tahu Kupat adalah sajian yang hangat dan sederhana khas masyarakat Jawa. Tekstur ketupat yang lembut berpadu dengan tahu goreng yang renyah, disiram kuah kecap manis dengan sentuhan cabai rawit yang memberikan kehangatan.",
          src: "/Assets/Gambar Kuliner/tahu kupat.avif",
        },
        {
          id: "timur-2",
          title: "Rawon",
          description: "Semangkuk rawon hangat menjadi pilihan favorit. Kuah hitam pekat yang kaya rempah memberikan kehangatan di tubuh.",
          src: "/Assets/Gambar Kuliner/rawon.avif",
        },
        {
          id: "timur-3",
          title: "Gorengan Berkat",
          description: "Hidangan berkat khas Jawa yang sempurna dinikmati bersama keluarga. Dibuat dari bahan-bahan pilihan dengan bumbu warisan leluhur.",
          src: "/Assets/Gambar Kuliner/go berkat.avif",
        },
        {
          id: "timur-4",
          title: "Nasi Liwet",
          description: "Nasi Liwet Solo juga nikmat sebagai sajian yang hangat. Aroma santan dan rempahnya yang harum menggugah selera.",
          src: "/Assets/Gambar Kuliner/go liwet.avif",
        },
      ],
    },
  };

  return (
    <>
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F9F1E4]" id="koleksi">
        <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col items-center">

          {/* Header */}
          <div className="text-center mb-16 max-w-2xl">
            <h2 className="font-['League_Spartan'] text-3xl md:text-4xl lg:text-[42px] font-bold text-[#4e0b11] mb-4">
              Jelajahi Berdasarkan Daerah Bagian
            </h2>
            <p className="font-['League_Spartan'] text-base md:text-lg text-stone-900 font-medium">
              Temukan hidangan khas Jawa berdasarkan daerah asalnya
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl">
            {daerahList.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedDaerahId(item.id)}
                className="group cursor-pointer rounded-xl border border-[#4e0b11] bg-gradient-to-r from-white from-50% to-[#a3a3a3] overflow-hidden shadow-sm relative min-h-[220px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 block text-left w-full"
              >
                <div className="p-6 h-full flex flex-col justify-between w-[65%] z-10 relative">
                  <div>
                    <h3 className="font-['League_Spartan'] text-xl font-bold text-[#4e0b11] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-black leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 text-[#4e0b11] text-xs font-bold border border-[#4e0b11] rounded-full px-4 py-1.5 group-hover:bg-[#4e0b11] group-hover:text-white transition-all duration-300">
                      Lihat Detail
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Galeri Modal Overlay */}
      {selectedDaerahId && (
        <DetailGaleri 
          initialImageId={`${selectedDaerahId}-1`} 
          images={galleryData[selectedDaerahId]?.gallery || []} 
          onClose={() => setSelectedDaerahId(null)} 
        />
      )}
    </>
  );
}
