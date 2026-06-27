import Image from "next/image";

export default function WayangFeatureSection() {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 relative">
            <img src="/Assets/Bunga Kuning.svg" className="pointer-events-none absolute -left-6 -top-6 hidden w-20 opacity-80 lg:block" />
            <h2 className="text-3xl font-extrabold text-[#7a2a1f] mb-4">Keistimewaan Wayang</h2>
            <p className="text-[rgba(0,0,0,0.65)] mb-6 max-w-xl">
              Jelajahi filosofi, teknik pertunjukan, dan warisan budaya wayang yang hidup di Jawa.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-[var(--color-border)]/10 bg-white/90 p-4 shadow-sm">
                <h4 className="font-semibold text-[var(--color-primary)]">Asal-usul & Cerita</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)]">Kisah epik yang diturunkan antar generasi.</p>
              </div>

              <div className="rounded-lg border border-[var(--color-border)]/10 bg-white/90 p-4 shadow-sm">
                <h4 className="font-semibold text-[var(--color-primary)]">Teknik Pementasan</h4>
                <p className="mt-2 text-sm text-[var(--color-muted)]">Iringan gamelan dan gerak dalang yang khas.</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <a href="#" className="inline-flex items-center justify-center rounded-full bg-[#b33a26] px-5 py-2 text-sm font-semibold text-white shadow">Pelajari Lebih Lanjut</a>
              <a href="#" className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] px-5 py-2 text-sm font-semibold text-[#7a2a1f]">Jadwalkan Kunjungan</a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-[16/10] w-full relative">
                <Image src="/Assets/Pendhopo Wayang.svg" alt="Pendhopo Wayang" fill className="object-cover" />
              </div>
              <div className="absolute left-6 bottom-6 rounded-md bg-white/90 px-4 py-2 shadow"> 
                <span className="text-sm font-semibold text-[#3b1a15]">Pendhapa Tradisional</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-[length:auto_90px] bg-repeat-x" style={{ backgroundImage: "url('/Assets/Batik Sambungan.svg')" }} />
    </section>
  );
}
