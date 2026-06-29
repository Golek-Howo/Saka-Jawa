import { HeroContent } from "../shared/HeroSection";

export const kulinerHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Kuliner.svg",
    iconAlt: "Ikon Pendhapa Kuliner",
    label: "Pendhapa Kuliner",
  },
  headline: "Kuliner Makanan Jawa",
  subheadline: "Cita Rasa, Aroma dan Keterikatan",
  description:
    "Di balik setiap sajian kuliner Jawa, tersimpan filosofi mendalam, sejarah rempah, dan nilai kebersamaan masyarakat Nusantara.",
  actions: [
    { id: "btn-tentang-kuliner", label: "Tentang Kuliner", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-koleksi", label: "Jelajahi Koleksi", variant: "secondary", href: "#koleksi" },
  ],
  image: {
    src: "/Assets/kulinerHeroAsset.avif",
    alt: "Kuliner Makanan Jawa",
  },
  dots: {
    count: 4,
    activeIndex: 1,
  },
  imagePosition: "right",
};
