import Image from "next/image";

const gamelanGallery = [
  { id: 1, title: "Perangkat Gamelan Keraton", image: "/Assets/gamelanHeroAsset.avif" },
  { id: 2, title: "Penabuh Gong Ageng", image: "/Assets/Gamelan Hero.svg" },
  { id: 3, title: "Pementasan Gamelan", image: "/Assets/gamelanHeroAsset.avif" },
];

export default function GamelanGallerySection() {
  return (
    <section className="bg-[#f9f1e4] py-20 px-6 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="text-left space-y-2">
            <h2 className="font-['League_Spartan'] text-4xl font-bold text-[#4e0b11]">
              Galeri Gamelan
            </h2>
            <p className="max-w-[600px] font-['League_Spartan'] text-lg text-stone-700">
              Visualisasi instrumen, penabuh, serta suasana pertunjukan gamelan Jawa yang megah dan sakral.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-[#4e0b11] px-6 py-2.5 font-semibold text-[#4e0b11] transition-colors hover:bg-[#4e0b11] hover:text-[#f9f1e4]"
            >
              <span>Lihat Semua Galeri</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {gamelanGallery.map((gal) => (
            <div key={gal.id} className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-lg border border-stone-200">
              <Image
                src={gal.image}
                alt={gal.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <h4 className="font-['League_Spartan'] text-xl font-bold text-white">
                  {gal.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
