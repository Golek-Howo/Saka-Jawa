import Image from "next/image";

const batikStories = [
  {
    id: 1,
    title: "Filosofi Sidomukti",
    desc: "Motif keraton Solo yang melambangkan harapan akan kehidupan yang makmur, sejahtera, mulia, dan penuh kebahagiaan.",
    image: "/Assets/Gambar Batik/Batik Solo/Solo 1.avif",
  },
  {
    id: 2,
    title: "Makna Truntum",
    desc: "Motif berbentuk taburan bintang atau bunga cengkeh yang bermakna cinta yang tumbuh kembali dan kesetiaan yang tulus dari keraton.",
    image: "/Assets/Gambar Batik/Batik Jogja/Jogja 1.avif",
  },
  {
    id: 3,
    title: "Dinamika Jlamprang",
    desc: "Motif pesisiran Pekalongan yang kaya warna, mencerminkan keberagaman budaya dan sifat adaptif serta ceria masyarakat pesisir.",
    image: "/Assets/Gambar Batik/Batik Pekalongan/Pekalongan 1.avif",
  },
];

export default function BatikCeritaSection() {
  return (
    <section className="relative z-40 py-20 px-6 md:px-12 lg:px-24 bg-[#3e0b10] text-white">
      <div className="mx-auto w-full max-w-[var(--container-lg)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Header content */}
          <div className="lg:col-span-4 flex flex-col gap-6 text-left">
            <div>
              <h3 className="font-['League_Spartan'] text-3xl md:text-4xl font-bold leading-tight">
                Cerita Batik Penuh Makna
              </h3>
              <p className="mt-4 font-['League_Spartan'] text-base text-white/80 leading-relaxed">
                Kenali filosofi mendalam di balik setiap goresan canting dan malam pada motif-motif legendaris tanah Jawa.
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
            {batikStories.map((story) => (
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
