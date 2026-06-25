import type { TopicSlug } from "./navigation";

export interface PageMetadata {
  title: string;
  description: string;
}

export const topicPageMetadata: Record<TopicSlug, PageMetadata> = {
  batik: {
    title: "Batik Jawa — Saka Jawa",
    description:
      "Jelajahi keindahan dan filosofi batik Jawa. Motif, sejarah, dan warisan budaya leluhur yang tak ternilai.",
  },
  wayang: {
    title: "Wayang — Saka Jawa",
    description:
      "Kenali wayang kulit Jawa: tokoh, cerita, dan filosofi di balik pertunjukan tradisional yang mendunia.",
  },
  gamelan: {
    title: "Gamelan — Saka Jawa",
    description:
      "Dengarkan dan pelajari gamelan Jawa — instrumen, harmoni, dan peran musik dalam budaya Nusantara.",
  },
  kuliner: {
    title: "Kuliner Jawa — Saka Jawa",
    description:
      "Jelajahi cita rasa kuliner Jawa: resep tradisional, filosofi makan, dan warisan gastronomi Nusantara.",
  },
};
