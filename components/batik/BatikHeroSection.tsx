import Image from "next/image";
import Button from "@/components/ui/Button";
import { batikHeroContent } from "./batik-hero-content";

export default function BatikHeroSection() {
  const { badge, headline, subheadline, description, actions, image, dots } =
    batikHeroContent;

  return (
    <section
      className="relative flex min-h-0 w-full items-center overflow-hidden bg-white before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[radial-gradient(circle_at_20%_80%,rgba(78,11,17,0.02)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,200,50,0.03)_0%,transparent_50%)] lg:min-h-screen"
      id="batik-hero"
    >
      <div className="absolute bottom-[20%] left-[3%] hidden h-[60px] w-[60px] animate-float-reverse opacity-[0.03] md:block">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="28" stroke="#FFC832" strokeWidth="2" fill="none" />
          <circle cx="30" cy="30" r="14" stroke="#4E0B11" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="relative z-1 mx-auto grid w-full max-w-[var(--container-lg)] grid-cols-1 items-center gap-8 px-5 py-12 text-center md:gap-10 md:px-10 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-16 lg:py-20 lg:text-left">
        <div className="order-1 flex flex-col items-center gap-6 lg:items-start">
          <div className="inline-flex w-fit animate-fade-in-up items-center gap-2 rounded-full border-[1.5px] border-gray-300 bg-white px-4 py-1.5 shadow-sm transition-all duration-300 hover:border-maroon hover:shadow-[0_2px_8px_rgba(78,11,17,0.08)]">
            <Image
              src={badge.iconSrc}
              alt={badge.iconAlt}
              width={28}
              height={28}
              className="h-7 w-7 shrink-0"
            />
            <span className="text-sm font-medium tracking-wide text-gray-900">
              {badge.label}
            </span>
          </div>

          <h1 className="animate-fade-in-up text-[2.25rem] leading-[1.1] font-bold tracking-tight text-black [animation-delay:0.1s] md:text-[2.75rem] xl:text-[3.5rem]">
            {headline}
          </h1>

          <p className="animate-fade-in-up m-0 -mt-2 text-xl leading-snug font-semibold tracking-tight text-gold-dark [animation-delay:0.2s] md:text-2xl">
            {subheadline}
          </p>

          <p className="animate-fade-in-up m-0 max-w-full text-base leading-[1.7] text-gray-600 [animation-delay:0.3s] lg:max-w-[480px]">
            {description}
          </p>

          <div className="animate-fade-in-up mt-2 flex w-full flex-col gap-4 [animation-delay:0.4s] sm:flex-row sm:justify-center lg:justify-start">
            {actions.map((action) => (
              <Button key={action.id} id={action.id} variant={action.variant}>
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="order-2 flex animate-scale-in flex-col items-center gap-6 [animation-delay:0.3s]">
          <div className="group relative aspect-16/11 w-full max-w-full overflow-hidden rounded-[16px_60px_16px_60px] shadow-[0_20px_60px_rgba(78,11,17,0.12),0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.02] hover:shadow-[0_24px_72px_rgba(78,11,17,0.16),0_6px_20px_rgba(0,0,0,0.08)] md:max-w-[420px] lg:max-w-[520px] lg:rounded-[24px_120px_24px_120px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="h-full w-full object-cover transition-transform duration-600 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-gold/5 via-transparent via-60% to-maroon/3" />
          </div>

          <div className="flex items-center gap-2">
            {Array.from({ length: dots.count }, (_, index) => {
              const isActive = index === dots.activeIndex;

              return (
                <span
                  key={index}
                  className={
                    isActive
                      ? "h-2.5 w-7 cursor-pointer rounded-[5px] bg-gold opacity-100 transition-all duration-300"
                      : "h-2.5 w-2.5 cursor-pointer rounded-full bg-maroon opacity-30 transition-all duration-300 hover:opacity-60"
                  }
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-2 w-full leading-none">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-auto w-full"
        >
          <defs>
            <pattern
              id="batikWavePattern"
              x="0"
              y="0"
              width="120"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 20 Q15 0 30 20 Q45 40 60 20 Q75 0 90 20 Q105 40 120 20"
                stroke="#4E0B11"
                strokeWidth="3"
                fill="none"
                opacity="0.8"
              />
              <path
                d="M0 28 Q15 8 30 28 Q45 48 60 28 Q75 8 90 28 Q105 48 120 28"
                stroke="#4E0B11"
                strokeWidth="2"
                fill="none"
                opacity="0.4"
              />
            </pattern>
          </defs>
          <rect width="1440" height="80" fill="url(#batikWavePattern)" />
          <path
            d="M0 60 Q180 40 360 60 Q540 80 720 60 Q900 40 1080 60 Q1260 80 1440 60 L1440 80 L0 80 Z"
            fill="#4E0B11"
            opacity="0.06"
          />
        </svg>
      </div>
    </section>
  );
}
