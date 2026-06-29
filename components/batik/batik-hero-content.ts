import { HeroContent } from "../shared/HeroSection";

export const batikHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Batik.svg",
    iconAlt: "Ikon Pendhapa",
    label: "Pendhapa Batik",
  },
  headline: "Seni Lukisan Kain",
  subheadline: "Karakter, Cerita, dan Bayangan Kehidupan",
  description:
    "Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.",
  actions: [
    { id: "btn-tentang-batik", label: "Tentang Batik", variant: "primary", href: "#batik-about" },
    { id: "btn-jelajahi-motif", label: "Jelajahi Motif", variant: "secondary", href: "#batik-motif" },
  ],
  image: {
    src: "/Assets/Batik Section Sejarawan.svg",
    alt: "Ilustrasi Seni Lukisan Kain Batik Jawa",
  },
  dots: {
    count: 5,
    activeIndex: 1,
  },
};
