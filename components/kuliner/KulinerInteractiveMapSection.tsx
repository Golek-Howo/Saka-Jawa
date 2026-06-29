import Image from "next/image";

export default function KulinerInteractiveMapSection() {
  return (
    <section className="bg-[#f9f1e4] py-16 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[var(--container-lg)] flex flex-col gap-8">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h3 className="font-['League_Spartan'] text-3xl font-bold text-[#4e0b11]">
            Telusuri Pendhapa Lainnya
          </h3>
          <div>
            <a
              href="/wayang"
              className="inline-flex items-center gap-3 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span className="font-['League_Spartan'] text-lg">Selanjutnya</span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4e0b11] text-white">→</span>
            </a>
          </div>
        </div>

        {/* Interactive Map */}
        <div className="relative w-full aspect-[21/9] min-h-[300px] md:min-h-[400px] rounded-3xl bg-[#ece3d3] border-4 border-[#80472c]/30 shadow-inner overflow-hidden flex items-center justify-center">
          {/* Map Islands Base */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/Assets/Tanah Pendhopo.svg"
              alt="Peta Tanah Pendhopo"
              fill
              className="object-cover opacity-85"
            />
          </div>

          {/* Interactive Pavilions Overlay */}
          <div className="absolute inset-0 z-10">

            {/* Batik Pavilion (Left) */}
            <a
              href="/batik"
              className="absolute left-[15%] top-[45%] -translate-y-1/2 group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                <Image src="/Assets/Pendhopo Batik.svg" alt="Pendhopo Batik" fill className="object-contain" />
              </div>
              <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                Pendhapa Batik
              </span>
            </a>

            {/* Gamelan Pavilion (Center-Right) */}
            <a
              href="/gamelan"
              className="absolute right-[25%] top-[55%] -translate-y-1/2 group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                <Image src="/Assets/Pendhopo Gamelan.svg" alt="Pendhopo Gamelan" fill className="object-contain" />
              </div>
              <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                Pendhapa Gamelan
              </span>
            </a>

            {/* Kuliner Pavilion (Bottom-Left) — Active */}
            <a
              href="/kuliner"
              className="absolute left-[38%] bottom-[10%] group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              {/* User Location Marker */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-8 h-8 animate-bounce z-20">
                <Image src="/Assets/User Location.svg" alt="Lokasi Anda" fill className="object-contain" />
              </div>
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg border-2 border-[#ffc832] rounded-full p-2 bg-[#ffc832]/20">
                <Image src="/Assets/Pendhopo Kuliner.svg" alt="Pendhopo Kuliner" fill className="object-contain" />
              </div>
              <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#ffc832] text-[#4e0b11] px-3 py-1 rounded-full shadow">
                Pendhapa Kuliner (Anda di Sini)
              </span>
            </a>

            {/* Wayang Pavilion (Top-Right) */}
            <a
              href="/wayang"
              className="absolute right-[12%] top-[15%] group flex flex-col items-center gap-2 hover:scale-110 transition-transform duration-300"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-lg">
                <Image src="/Assets/Pendhopo Wayang.svg" alt="Pendhopo Wayang" fill className="object-contain" />
              </div>
              <span className="font-['League_Spartan'] text-sm sm:text-base font-bold bg-[#5b0917] text-white px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                Pendhapa Wayang
              </span>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}
