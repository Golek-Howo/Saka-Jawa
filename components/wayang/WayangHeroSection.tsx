import Image from "next/image";

const leftNavItems = ["Beranda", "Museum"];
const rightNavItems = ["Permainan", "Tentang Kami"];

export default function WayangHeroSection() {
  return (
    <section
      style={{ background: 'white' }}
      className="relative flex min-h-0 w-full items-center overflow-hidden px-4 py-6 pb-20 sm:px-6 sm:py-8 sm:pb-24 lg:min-h-[720px] lg:px-8 lg:py-10 lg:pb-28"
    >
      <div className="mx-auto flex w-full max-w-[1210px] flex-col gap-6 lg:gap-8">
        <nav
          style={{ backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-border)' }}
          className="relative mx-auto flex h-[71px] w-full max-w-[1210px] items-center justify-center rounded-[100px] border-[6px] px-4 py-3 shadow-[0_18px_45px_rgba(87,44,25,0.25)] sm:px-6 lg:px-8"
        >
          <div className="absolute left-1/2 top-1/2 flex h-[50px] w-[50px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-1 shadow-sm">
            <Image
              src="/Assets/Logo Utama.svg"
              alt="Logo Saka Jawa"
              width={50}
              height={50}
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex w-full items-center justify-between">
            <div className="hidden items-center gap-7 lg:flex lg:pl-8">
              {leftNavItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[1.02rem] font-medium text-white/90 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-7 lg:flex lg:pr-8">
              {rightNavItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[1.02rem] font-medium text-white/90 transition hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="grid items-center gap-8 px-1 lg:grid-cols-[0.98fr_1.02fr] lg:gap-12 lg:px-0 xl:gap-14">
          <div className="order-1 relative mx-auto w-full max-w-[620px] lg:order-1 lg:mx-0 lg:max-w-[560px]">
            <div className="relative overflow-hidden rounded-[42px] border border-[var(--color-border)]/10 bg-[var(--color-panel)] p-2 shadow-[0_28px_80px_rgba(78,11,17,0.16)] sm:p-3 lg:p-4">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-[32px]">
                <Image
                  src="/Assets/Kelir Wayang Hero.svg"
                  alt="Ilustrasi wayang kulit Jawa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-3 lg:justify-start">
              <div className="h-2.5 w-32 rounded-full bg-[var(--color-primary)]" />
              <div className="h-2.5 w-6 rounded-full bg-[var(--color-primary)]/30" />
              <div className="h-2.5 w-6 rounded-full bg-[var(--color-primary)]/30" />
              <div className="h-2.5 w-6 rounded-full bg-[var(--color-primary)]/30" />
            </div>
          </div>

          <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-2 lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)]/15 bg-[var(--color-panel)] px-4 py-2 text-sm font-semibold text-[var(--color-border)] shadow-sm">
              <Image
                src="/Assets/Pendhopo Wayang.svg"
                alt="Ikon pendhapa wayang"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span>Pendhapa Wayang</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[var(--color-text)] sm:text-[2.8rem] lg:text-[3.6rem]">
                Seni Wayang Kulit
              </h1>
              <p className="text-[1.02rem] font-medium leading-[1.45] text-[var(--color-primary)] sm:text-[1.12rem]">
                Karakter, cerita, dan bayangan kehidupan
              </p>
            </div>

            <p className="max-w-[560px] text-base leading-[1.9] text-[var(--color-muted)] sm:text-[1.02rem]">
              Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.
            </p>

            <div className="grid w-full gap-4 sm:grid-flow-col sm:auto-cols-max">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-1"
              >
                Tentang Wayang
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-primary)] px-8 py-3 text-sm font-semibold text-[var(--color-primary)] transition hover:bg-[var(--color-primary)]/5"
              >
                Jelajahi Tokoh
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* decorative batik removed per request */}
    </section>
  );
}
