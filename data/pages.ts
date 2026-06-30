import type { TopicSlug } from "./navigation";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
}

export const topicPageMetadata: Record<TopicSlug, PageMetadata> = {
  batik: {
    title: "Batik Jawa",
    description:
      "Jelajahi keindahan dan filosofi batik Jawa. Motif, sejarah, dan warisan budaya leluhur yang tak ternilai.",
    keywords: [
      "batik Jawa",
      "batik Solo",
      "motif batik",
      "batik tradisional",
      "sejarah batik",
      "batik tulis",
      "batik cap",
      "warisan budaya batik",
      "filosofi batik",
      "batik Nusantara",
      "Golek Howo",
      "Saka Jawa batik",
    ],
  },
  wayang: {
    title: "Wayang Kulit",
    description:
      "Kenali wayang kulit Jawa: tokoh, cerita, dan filosofi di balik pertunjukan tradisional yang mendunia.",
    keywords: [
      "wayang kulit",
      "wayang Jawa",
      "pertunjukan wayang",
      "tokoh wayang",
      "cerita wayang",
      "dalang wayang",
      "wayang tradisional",
      "seni wayang",
      "wayang purwa",
      "wayang golek",
      "Saka Jawa wayang",
    ],
  },
  gamelan: {
    title: "Gamelan",
    description:
      "Dengarkan dan pelajari gamelan Jawa — instrumen, harmoni, dan peran musik dalam budaya Nusantara.",
    keywords: [
      "gamelan",
      "gamelan Jawa",
      "musik gamelan",
      "instrumen gamelan",
      "gamelan tradisional",
      "saron gamelan",
      "kendang gamelan",
      "gong gamelan",
      "harmoni gamelan",
      "budaya gamelan",
      "Saka Jawa gamelan",
    ],
  },
  kuliner: {
    title: "Kuliner Jawa",
    description:
      "Jelajahi cita rasa kuliner Jawa: resep tradisional, filosofi makan, dan warisan gastronomi Nusantara.",
    keywords: [
      "kuliner Jawa",
      "makanan tradisional Jawa",
      "resep masakan Jawa",
      "gudeg",
      "nasi liwet",
      "soto Jawa",
      "jajanan Jawa",
      "masakan Solo",
      "makanan khas Jawa",
      "gastronomi Jawa",
      "Saka Jawa kuliner",
    ],
  },
};
