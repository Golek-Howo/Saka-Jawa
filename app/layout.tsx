import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/Footer";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Saka Jawa — Budaya Jawa",
  description:
    "Saka Jawa / Golek Howo — Website Budaya Jawa: Wayang, Gamelan, Batik & Kuliner",
};

import SmoothScrolling from "../components/shared/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${leagueSpartan.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScrolling>
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
