import { HeroContent } from "../shared/HeroSection";

export const wayangHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Wayang.svg",
    iconAlt: "Ikon Pendhapa Wayang",
    label: "Pendhapa Wayang",
  },
  headline: "Seni Wayang Kulit",
  subheadline: "Karakter, Cerita, dan Bayangan Kehidupan",
  description:
    "Di balik setiap guratan tokoh wayang, tersimpan filosofi mendalam dan nilai kehidupan masyarakat Jawa.",
  actions: [
    { id: "btn-tentang-wayang", label: "Tentang Wayang", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-tokoh", label: "Jelajahi Tokoh", variant: "secondary", href: "#ragam" },
  ],
  image: {
    src: "/Assets/wayangHeroAsset.avif",
    alt: "Seni Wayang Kulit Jawa",
  },
  dots: {
    count: 4,
    activeIndex: 1,
  },
};
