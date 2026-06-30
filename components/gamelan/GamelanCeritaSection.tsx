import Image from "next/image";

const gamelanStories = [
  {
    id: 1,
    title: "Gamelan Sekaten",
    desc: "Gamelan yang dibunyikan saat perayaan Maulid Nabi di Keraton Yogyakarta dan Surakarta, penuh dengan doa dan harapan luhur.",
    image: "/Assets/Sambut Tamu About.svg",
  },
  {
    id: 2,
    title: "Gamelan Kodhok Ngorek",
    desc: "Gamelan kuno milik Keraton yang hanya dimainkan pada upacara adat tertentu, melambangkan kesakralan budaya Jawa.",
    image: "/Assets/Sambut Tamu About.svg",
  },
  {
    id: 3,
    title: "Gamelan Carabalen",
    desc: "Ansambel gamelan yang mengiringi tari klasik Jawa, menciptakan harmoni sempurna antara gerak tubuh dan lantunan musik.",
    image: "/Assets/Sambut Tamu About.svg",
  },
];


export default function GamelanCeritaSection() {
  return (
    <section className="relative z-40 py-20 px-6 md:px-12 lg:px-24 bg-[#3e0b10] text-white">
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Header content */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div>
              <h3 className="font-['League_Spartan'] text-3xl md:text-4xl font-bold leading-tight">
                Cerita Gamelan Penuh Makna
              </h3>
              <p className="mt-4 font-['League_Spartan'] text-base text-white/80 leading-relaxed">
                Kenali kisah-kisah gamelan legendaris beserta filosofi luhur yang tersimpan dalam setiap dentingan nada khas Jawa.
              </p>
            </div>
            <div>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full bg-[#ffc832] px-6 py-3 font-semibold text-[#4e0b11] transition-transform hover:scale-105 active:scale-95"
              >
                <span>Lihat Cerita</span>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Cards List */}
          <div className="lg:col-span-8 grid gap-6 sm:grid-cols-3">
            {gamelanStories.map((story) => (
              <div key={story.id} className="rounded-xl bg-[#F8F5EE] p-4 text-stone-900 shadow-md flex flex-col justify-between min-h-[350px]">
                <div>
                  {/* Card Image */}
                  <div className="aspect-[4/3] w-full relative rounded-lg overflow-hidden bg-stone-200">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
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
                  <span className="font-['League_Spartan'] text-sm font-semibold text-[#4e0b11]">
                    Lihat Ringkasan
                  </span>
                  <button className="w-8 h-8 rounded-full bg-[#4e0b11] text-white flex items-center justify-center transition-transform hover:scale-110">
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
