import type { Metadata } from "next";
import { topicPageMetadata } from "@/data/pages";

export const metadata: Metadata = topicPageMetadata.wayang;

export default function WayangPage() {
  return <main>{/* Section wayang akan ditambahkan di sini */}</main>;
}
