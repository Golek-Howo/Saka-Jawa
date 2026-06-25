export type TopicSlug = "batik" | "wayang" | "gamelan" | "kuliner";

export interface TopicPage {
  slug: TopicSlug;
  href: `/${TopicSlug}`;
  label: string;
  description: string;
}

export const topicPages: TopicPage[] = [
  {
    slug: "batik",
    href: "/batik",
    label: "Batik",
    description: "Motif, filosofi, dan keindahan batik Jawa",
  },
  {
    slug: "wayang",
    href: "/wayang",
    label: "Wayang",
    description: "Wayang kulit dan cerita epik Jawa",
  },
  {
    slug: "gamelan",
    href: "/gamelan",
    label: "Gamelan",
    description: "Gamelan Jawa dan harmoni tradisional",
  },
  {
    slug: "kuliner",
    href: "/kuliner",
    label: "Kuliner",
    description: "Cita rasa dan warisan kuliner Jawa",
  },
];
