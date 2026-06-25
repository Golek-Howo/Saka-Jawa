import Image from "next/image";
import Link from "next/link";
import { topicPages } from "@/data/navigation";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <Image
        src="/Assets/Logo Utama.svg"
        alt="Saka Jawa"
        width={120}
        height={120}
        priority
      />
      <h1 className="mt-8 text-4xl font-bold text-maroon">Saka Jawa</h1>
      <p className="mt-4 max-w-md text-gray-600">
        Golek Howo — Website Budaya Jawa: Wayang, Gamelan, Batik & Kuliner
      </p>
      <nav className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {topicPages.map((topic) => (
          <Link
            key={topic.slug}
            href={topic.href}
            className="inline-flex items-center justify-center rounded-lg bg-maroon px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-maroon-dark"
          >
            {topic.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
