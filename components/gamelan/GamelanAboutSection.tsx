import Image from "next/image";

const rightDetails = [
  "Gamelan dimainkan secara kolektif tanpa seorang pemimpin tunggal, melambangkan semangat gotong royong dan kesetaraan.",
  "Diakui UNESCO sebagai Intangible Cultural Heritage of Humanity sejak tahun 2021 yang meneguhkan nilai luhurnya.",
  "Setiap instrumen mewakili unsur kosmos Jawa: bumi, air, angin, dan api yang melebur menjadi harmoni sempurna.",
];

export default function GamelanAboutSection() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 lg:py-32 bg-[#3e0b10]"
      id="tentang"
    >
      {/* Decorative Flowers */}
      <div className="absolute top-0 left-0 w-56 h-56 md:w-80 md:h-80 pointer-events-none -translate-x-1/4 -translate-y-1/4 opacity-90">
        <Image src="/Assets/Bunga Kuning.svg" alt="Bunga Kuning" fill className="object-contain" />
      </div>
      <div className="absolute top-0 right-0 w-56 h-56 md:w-96 md:h-96 pointer-events-none translate-x-1/4 -translate-y-1/4 opacity-90">
        <Image src="/Assets/Bunga Kuning2.svg" alt="Bunga Kuning 2" fill className="object-contain" />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-lg)] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* Left Column: Tahukah Kamu Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start pt-10">
            <div className="relative w-full max-w-md">
              {/* Decorative Yellow Corners */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-[6px] border-r-[6px] border-[#FFC832] rounded-tr-lg z-0"></div>
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-[6px] border-l-[6px] border-[#FFC832] rounded-bl-lg z-0"></div>

              {/* Card Container */}
              <div className="relative bg-[#fdfaf4] p-8 md:p-10 rounded-xl shadow-lg z-10 flex flex-col items-center sm:items-start sm:flex-row gap-6">

                {/* Person Character — mirrored */}
                <div className="w-32 h-48 relative shrink-0">
                  <Image
                    src="/Assets/Sambut Tamu About.svg"
                    alt="Karakter Jawa"
                    fill
                    className="object-contain scale-x-[-1]"
                  />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-center sm:text-right gap-4 mt-4 sm:mt-0">
                  <h3 className="text-3xl font-bold text-[#4E0B11] font-['League_Spartan']">
                    Tahukah Kamu?
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-700 font-medium">
                    Dalam satu perangkat gamelan, terdapat lebih dari 40 instrumen yang dimainkan secara bersama-sama tanpa seorang konduktor — mencerminkan nilai musyawarah dan kebersamaan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Gamelan Jawa */}
          <div className="lg:col-span-6 flex flex-col text-white">
            <h2 className="text-4xl md:text-[42px] font-bold text-[#FFC832] mb-6 text-center lg:text-right">
              Gamelan Jawa
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-100 max-w-lg mb-12 text-center lg:text-right ml-auto">
              Gamelan adalah ansambel musik Jawa yang telah mengisi jiwa peradaban Nusantara selama berabad-abad. Setiap dentingan dan gong bukan sekadar bunyi — ia adalah doa yang mengalir, menghubungkan manusia dengan alam dan sang pencipta.
            </p>

            {/* 3 Icons Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {rightDetails.map((desc, index) => (
                <div key={index} className="flex flex-col items-center lg:items-end text-center lg:text-right gap-4">
                  <div className="h-10 w-12 relative opacity-90 flex justify-center lg:justify-end">
                    <svg viewBox="0 0 34 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full">
                      <path d="M0.5 13C0.5 13 8.5 0.5 17 0.5C25.5 0.5 33.5 13 33.5 13C33.5 13 25.5 25.5 17 25.5C8.5 25.5 0.5 13 0.5 13Z" stroke="#FFC832" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M17 0.5C14.5 6 14.5 20 17 25.5" stroke="#FFC832" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M25 5.5C20.5 9.5 20.5 16.5 25 20.5" stroke="#FFC832" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">
                    {desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
