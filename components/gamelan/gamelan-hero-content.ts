import { HeroContent } from "../shared/HeroSection";

export const gamelanHeroContent: HeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Gamelan.svg",
    iconAlt: "Ikon Pendhapa Gamelan",
    label: "Pendhapa Gamelan",
  },
  headline: "Gamelan Jawa",
  subheadline: "Harmoni, Doa, dan Jiwa Nusantara",
  description:
    "Di balik setiap dentingan instrumen gamelan, tersimpan filosofi kebersamaan, keselarasan alam semesta, dan doa yang mengalun bagi sang pencipta.",
  actions: [
    { id: "btn-tentang-gamelan", label: "Tentang Gamelan", variant: "primary", href: "#tentang" },
    { id: "btn-jelajahi-instrumen", label: "Jelajahi Instrumen", variant: "secondary", href: "#instrumen" },
  ],
  image: {
    src: "/Assets/gamelanHeroAsset.avif",
    alt: "Gamelan Jawa",
  },
  dots: {
    count: 4,
    activeIndex: 2,
  },
  imagePosition: "right",
};
