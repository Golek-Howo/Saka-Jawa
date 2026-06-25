export interface BatikHeroAction {
  id: string;
  label: string;
  variant: "primary" | "secondary";
}

export interface BatikHeroContent {
  badge: {
    iconSrc: string;
    iconAlt: string;
    label: string;
  };
  headline: string;
  subheadline: string;
  description: string;
  actions: BatikHeroAction[];
  image: {
    src: string;
    alt: string;
  };
  dots: {
    count: number;
    activeIndex: number;
  };
}

export const batikHeroContent: BatikHeroContent = {
  badge: {
    iconSrc: "/Assets/Pendhopo Batik.svg",
    iconAlt: "Ikon Pendhapa",
    label: "Pendhapa Kuliner",
  },
  headline: "Batik Jiwa Harmoni",
  subheadline: "Motif, Filosofi, dan Keindahan Abadi",
  description:
    "Di balik setiap goresan motif batik, tersimpan filosofi, keselarasan, dan warisan budaya leluhur masyarakat Jawa. Setiap helai kain menyimpan cerita tentang harmoni alam, spiritualitas, dan kehidupan yang penuh makna.",
  actions: [
    { id: "btn-tentang-kuliner", label: "Tentang Kuliner", variant: "primary" },
    { id: "btn-jelajahi-koleksi", label: "Jelajahi Koleksi", variant: "secondary" },
  ],
  image: {
    src: "/Assets/Batik Section Sejarawan.svg",
    alt: "Motif Batik Jawa tradisional",
  },
  dots: {
    count: 5,
    activeIndex: 1,
  },
};
