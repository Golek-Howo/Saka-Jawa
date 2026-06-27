import Image from "next/image";

const leftDetails = [
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  "Lorem ipsum dolor sit amet consectetuer.",
  "Lorem ipsum dolor sit amet consectetur.",
];

const stories = [
  { title: "Kebo Giro Alunon", desc: "Ringkasan cerita singkat.", id: 1 },
  { title: "Kebo Giro Alunon", desc: "Ringkasan cerita singkat.", id: 2 },
  { title: "Kebo Giro Alunon", desc: "Ringkasan cerita singkat.", id: 3 },
];

export default function WayangStorySection() {
  return (
    <>
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24" style={{ background: 'linear-gradient(180deg,#3e0b10 0%, #2a0608 100%)' }}>
        <div className="mx-auto w-full max-w-[1210px]">
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="relative">
                <Image src="/Assets/Bunga Kuning.svg" alt="bunga" width={120} height={120} className="absolute -top-8 -left-6 opacity-80" />
                <h2 className="text-3xl font-extrabold text-yellow-300">Wayang Kulit Jawa</h2>
              </div>

              <p className="mt-4 max-w-xl text-[14.5px] leading-7 text-yellow-100">
                Wayang kulit merupakan bentuk seni adiluhung yang telah diakui UNESCO sebagai Masterpiece of the Oral and Intangible Heritage of Humanity.
              </p>

              <div className="mt-6 h-2 w-[160px] rounded-full bg-yellow-400" />

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {leftDetails.map((t, i) => (
                  <div key={i} className="space-y-2">
                    <p className="text-sm text-yellow-100">{t}</p>
                    <div className="h-0.5 w-12 bg-yellow-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -left-6 -top-6 z-10 h-6 w-6 rounded-sm bg-yellow-300" />
                <div className="absolute -right-6 -bottom-6 z-10 h-6 w-6 rounded-sm bg-yellow-300" />

                <div className="rounded-xl bg-white p-6 shadow-xl">
                  <h3 className="text-xl font-bold text-[#3b1a15]">Tahukah Kamu?</h3>
                  <p className="mt-3 text-sm text-[#5c4239]">
                    Dalam satu peringkat gamelan, terdapat lebih dari 40 instrumen yang dimainkan secara bersama-sama tanpa seorang konduktor.
                  </p>
                </div>

                <div className="absolute -right-8 top-6 w-40 sm:w-56">
                  <Image src="/Assets/Wayang CTA.svg" alt="wayang" width={300} height={300} className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[-10px]">
          <div
            aria-hidden
            className="w-full"
            style={{
              backgroundImage: "url('/Assets/Batik Sambungan.svg')",
              backgroundRepeat: 'repeat-x',
              backgroundPosition: 'bottom center',
              backgroundSize: 'auto 110px',
              height: '110px',
            }}
          />
        </div>
      </section>

      <section className="py-12 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-extrabold">Cerita Wayang Penuh Makna</h3>
              <p className="text-sm text-white/80">Kenali beberapa instrumen utama dalam gamelan jawa dan perannya dalam menciptakan harmoni.</p>
            </div>
            <a href="#" className="rounded-full bg-yellow-400 px-4 py-2 font-semibold text-[#3b1a15]">Lihat Cerita</a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((s) => (
              <article key={s.id} className="rounded-xl bg-white/10 p-4">
                <div className="aspect-[4/3] mb-4 rounded-md bg-gray-200" />
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-white/80">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
