import Image from "next/image";

export default function KulinerDewantaraQuoteSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2D0F12] to-[#5B0917] py-24 px-6 md:px-12 lg:px-24">
      {/* Left Decorative Flower */}
      <div className="absolute top-1/2 left-0 w-48 h-48 pointer-events-none -translate-y-1/2 -translate-x-1/4 opacity-40">
        <Image src="/Assets/Bunga Kuning.svg" alt="" fill className="object-contain" />
      </div>
      {/* Right Decorative Flower */}
      <div className="absolute top-1/2 right-0 w-48 h-48 pointer-events-none -translate-y-1/2 translate-x-1/4 opacity-40">
        <Image src="/Assets/Bunga Kuning2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="mx-auto w-full max-w-[800px] relative z-10 text-center flex flex-col gap-6">
        <blockquote className="font-['League_Spartan'] text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-white">
          &quot;Gamelan bukan sekadar bunyi, tetapi ada doa yang dimainkan menghubungkan manusia dengan leluhur, alam, dan sang pencipta.&quot;
        </blockquote>
        <cite className="font-['League_Spartan'] text-lg md:text-xl text-[#FFC832] not-italic font-medium">
          - Ki Hadjar Dewantara
        </cite>
      </div>
    </section>
  );
}
