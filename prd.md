# 📋 PRD — Saka Jawa (Product Requirements Document)

> **Proyek**: Saka Jawa / Golek Howo
> **Deskripsi**: Website kebudayaan Jawa Tengah yang menampilkan informasi mendalam tentang wayang, gamelan, dan warisan budaya Jawa lainnya
> **Tech Stack**: Next.js 16 + React 19 + TypeScript + Tailwind CSS 4
> **Referensi Desain**: [design.md](./design.md)
> **Versi**: 1.0.0
> **Tanggal**: 23 Juni 2026

---

## Daftar Isi

1. [Visi Produk](#1-visi-produk)
2. [Arsitektur Komponen](#2-arsitektur-komponen)
3. [Struktur Folder](#3-struktur-folder)
4. [Shared Components (Global)](#4-shared-components-global)
5. [Page: Beranda (Home)](#5-page-beranda-home)
6. [Page: Wayang](#6-page-wayang)
7. [Page: Gamelan](#7-page-gamelan)
8. [Page: Permainan](#8-page-permainan)
9. [Page: Tentang Kami](#9-page-tentang-kami)
10. [Data Layer & Content Management](#10-data-layer--content-management)
11. [Aturan Pengembangan](#11-aturan-pengembangan)
12. [Prioritas Implementasi](#12-prioritas-implementasi)

---

## 1. Visi Produk

### Tujuan
Saka Jawa adalah platform web edukatif yang mengangkat dan melestarikan kebudayaan Jawa Tengah — khususnya **wayang kulit** dan **gamelan Jawa** — dalam bentuk digital yang modern, interaktif, dan menarik secara visual.

### Target Pengguna
| Segmen | Deskripsi |
|--------|-----------|
| Pelajar & Mahasiswa | Mencari informasi kebudayaan Jawa untuk tugas atau minat pribadi |
| Pecinta Budaya | Ingin mendalami pengetahuan tentang wayang, gamelan, dan seni tradisional |
| Wisatawan | Mencari referensi budaya sebelum mengunjungi Jawa Tengah |
| Umum | Siapa saja yang ingin mengenal warisan budaya Indonesia |

### Halaman yang Akan Dibangun
| # | Halaman | Route | Status |
|---|---------|-------|--------|
| 1 | Beranda (Home) | `/` | Prioritas 1 |
| 2 | Wayang | `/wayang` | Prioritas 1 |
| 3 | Gamelan | `/gamelan` | Prioritas 1 |
| 4 | Permainan | `/permainan` | Prioritas 2 |
| 5 | Tentang Kami | `/tentang-kami` | Prioritas 2 |

---

## 2. Arsitektur Komponen

### Prinsip Utama

> **SETIAP SECTION ADALAH KOMPONEN TERPISAH.**
> Tidak boleh ada 1 file page yang berisi semua section secara langsung. Setiap section, setiap elemen UI yang berulang, harus menjadi React component independen.

### Hierarki Komponen

```
┌─────────────────────────────────────────────────────────────┐
│                        PAGE (route)                          │
│                                                              │
│  Hanya bertugas sebagai KOMPOSER — menyusun section          │
│  components dan mengatur urutan serta data flow.             │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ <Navbar />                           ← Shared/Global  │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <HeroSection />                      ← Per-page       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <WaveDivider />                      ← Shared         │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <ContentSectionA />                  ← Per-page       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <InfoBox />                          ← Shared         │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <ContentSectionB />                  ← Per-page       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <QuoteSection />                     ← Shared         │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <GallerySection />                   ← Per-page       │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <LandscapeTransition />              ← Shared         │  │
│  ├────────────────────────────────────────────────────────┤  │
│  │ <Footer />                           ← Shared/Global  │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

### Kategori Komponen

| Kategori | Lokasi | Deskripsi |
|----------|--------|-----------|
| **Shared Components** | `components/shared/` | Komponen yang digunakan di **semua halaman** — Navbar, Footer, WaveDivider, dll. |
| **UI Primitives** | `components/ui/` | Komponen atomik/primitif — Button, Card, Badge, Breadcrumb, DotIndicator, dll. |
| **Section Components** | `components/sections/` | Komponen section yang bisa di-reuse lintas halaman — HeroSection, QuoteSection, GallerySection, dll. |
| **Page-Specific Sections** | `components/[page-name]/` | Komponen section yang spesifik untuk 1 halaman saja |
| **Layout Components** | `components/layout/` | Komponen layout wrapper — Container, SectionWrapper, dll. |

---

## 3. Struktur Folder

```
sakajawa/
├── app/
│   ├── layout.tsx                    # Root layout (font, metadata global)
│   ├── globals.css                   # Tailwind import, CSS variables, @theme tokens
│   ├── page.tsx                      # Beranda — compose sections
│   ├── wayang/
│   │   └── page.tsx                  # Wayang — compose sections
│   ├── gamelan/
│   │   └── page.tsx                  # Gamelan — compose sections
│   ├── permainan/
│   │   └── page.tsx                  # Permainan — compose sections
│   └── tentang-kami/
│       └── page.tsx                  # Tentang Kami — compose sections
│
├── components/
│   ├── layout/
│   │   ├── Container.tsx             # Max-width wrapper dengan padding
│   │   └── SectionWrapper.tsx        # Section wrapper (padding, bg color)
│   │
│   ├── shared/
│   │   ├── Navbar.tsx                # Navigasi global
│   │   ├── Footer.tsx                # Footer global
│   │   ├── WaveDivider.tsx           # Ornamen wave transisi antar section
│   │   └── LandscapeTransition.tsx   # Ilustrasi landscape sebelum footer
│   │
│   ├── ui/
│   │   ├── Button.tsx                # Semua variasi button
│   │   ├── Card.tsx                  # Card standar (gambar + teks + CTA)
│   │   ├── CardGallery.tsx           # Card dengan image overlay
│   │   ├── InfoBox.tsx               # "Tahukah Kamu?" box
│   │   ├── Badge.tsx                 # Badge / tag
│   │   ├── Breadcrumb.tsx            # Breadcrumb navigation
│   │   ├── DotIndicator.tsx          # Carousel dot indicator
│   │   ├── SectionHeading.tsx        # Heading + underline + deskripsi
│   │   ├── Overline.tsx              # Overline text (uppercase kategori)
│   │   └── ScrollAnimator.tsx        # Wrapper untuk scroll animation
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx           # Hero section (reusable per page)
│   │   ├── QuoteSection.tsx          # Blockquote section
│   │   ├── GallerySection.tsx        # Grid galeri foto
│   │   ├── CardGridSection.tsx       # Section dengan grid of cards
│   │   └── CTASection.tsx            # Call-to-action section
│   │
│   ├── beranda/                      # Sections khusus halaman Beranda
│   │   ├── BerandaHero.tsx
│   │   ├── BerandaWayangPreview.tsx
│   │   ├── BerandaGamelanPreview.tsx
│   │   └── BerandaPermainanCTA.tsx
│   │
│   ├── wayang/                       # Sections khusus halaman Wayang
│   │   ├── WayangHero.tsx
│   │   ├── WayangKulitSection.tsx
│   │   ├── WayangPopulerSection.tsx
│   │   ├── WayangInstrumenSection.tsx
│   │   ├── WayangQuote.tsx
│   │   ├── WayangCeritaSection.tsx
│   │   ├── WayangGaleriSection.tsx
│   │   └── WayangMapSection.tsx
│   │
│   └── gamelan/                      # Sections khusus halaman Gamelan
│       ├── GamelanHero.tsx
│       ├── GamelanJawaSection.tsx
│       ├── GamelanInstrumenSection.tsx
│       ├── GamelanHarmoniSection.tsx
│       ├── GamelanQuote.tsx
│       ├── GamelanGaleriSection.tsx
│       └── GamelanMapSection.tsx
│
├── data/
│   ├── wayang.ts                     # Data wayang (nama, deskripsi, gambar)
│   ├── gamelan.ts                    # Data gamelan & instrumen
│   ├── navigation.ts                # Data navigasi (menu items)
│   └── quotes.ts                    # Kutipan budaya
│
├── types/
│   ├── wayang.ts                     # TypeScript types untuk wayang
│   ├── gamelan.ts                    # TypeScript types untuk gamelan
│   └── common.ts                    # Shared types (Card, Section, dll.)
│
├── hooks/
│   ├── useScrollAnimation.ts        # Hook untuk Intersection Observer
│   ├── useActiveSection.ts          # Hook untuk navbar active state
│   └── useMediaQuery.ts             # Hook untuk responsive checks
│
├── public/
│   ├── images/
│   │   ├── wayang/                   # Gambar wayang
│   │   ├── gamelan/                  # Gambar gamelan
│   │   ├── illustrations/           # Ilustrasi (wayang kartun, landscape)
│   │   └── ornaments/               # Ornamen (wave, batik pattern, dll.)
│   └── fonts/                        # Font files jika self-hosted
│
├── design.md                         # Design system reference
├── prd.md                            # Dokumen ini
└── package.json
```

### Aturan Struktur

> [!IMPORTANT]
> 1. **Setiap file page (`page.tsx`) HANYA boleh berisi import dan komposisi komponen.** Tidak ada markup HTML/JSX mentah di dalam file page selain wrapper `<main>` dan susunan komponen.
> 2. **Setiap section visual di page = 1 file komponen terpisah.**
> 3. **Komponen yang muncul di ≥2 halaman → masuk `components/sections/` atau `components/ui/`.**
> 4. **Komponen yang hanya untuk 1 halaman → masuk `components/[nama-halaman]/`.**
> 5. **Navbar dan Footer → JANGAN di-import di setiap page. Letakkan di `layout.tsx`.**

---

## 4. Shared Components (Global)

### 4.1 `Navbar` — `components/shared/Navbar.tsx`

**Deskripsi**: Navigasi utama sticky di atas semua halaman.

**Props**: Tidak ada (data dari `data/navigation.ts`)

**Behavior**:
- Sticky top, z-index 1000
- Background `#4E0B11`, text white
- Menampilkan menu: `Beranda`, `Wayang`, (logo/ornamen di tengah), `Permainan`, `Tentang Kami`
- Active link terdeteksi dari `usePathname()` → warna gold + underline
- Hover: link berubah gold, transisi 200ms
- Scroll: tambah shadow `0 2px 12px rgba(0,0,0,0.15)` saat scroll > 0
- Mobile (< 768px): berubah menjadi hamburger menu → slide panel dari kanan dengan bg maroon

**Struktur Internal**:
```tsx
<nav>
  <Container>
    <div className="navbar-inner">
      {/* Kiri: menu items kiri */}
      <NavLinks items={leftItems} />
      
      {/* Tengah: logo/ornamen */}
      <NavLogo />
      
      {/* Kanan: menu items kanan */}
      <NavLinks items={rightItems} />
      
      {/* Mobile: hamburger */}
      <MobileMenuButton />
    </div>
  </Container>
  
  {/* Mobile slide panel */}
  <MobileMenu isOpen={isOpen} items={allItems} />
</nav>
```

**Sub-komponen** (di dalam file Navbar atau di-split):
| Sub-komponen | Deskripsi |
|-------------|-----------|
| `NavLinks` | Daftar link horizontal |
| `NavLogo` | Logo/ornamen di tengah |
| `MobileMenuButton` | Hamburger button |
| `MobileMenu` | Slide-in panel mobile |

---

### 4.2 `Footer` — `components/shared/Footer.tsx`

**Deskripsi**: Footer global di bawah semua halaman.

**Props**: Tidak ada (data hardcoded atau dari `data/navigation.ts`)

**Struktur**:
```tsx
<footer>
  <Container>
    <div className="footer-grid">
      {/* Kolom 1: Logo + deskripsi + social */}
      <FooterBrand />
      
      {/* Kolom 2: Jelajahi */}
      <FooterLinkGroup title="Jelajahi" links={[...]} />
      
      {/* Kolom 3: Komponen */}
      <FooterLinkGroup title="Komponen" links={[...]} />
      
      {/* Kolom 4: Hubungi */}
      <FooterLinkGroup title="Hubungi" links={[...]} />
    </div>
    
    <FooterDivider />
    <FooterCopyright />
  </Container>
</footer>
```

**Sub-komponen**:
| Sub-komponen | Deskripsi |
|-------------|-----------|
| `FooterBrand` | Logo + deskripsi singkat |
| `FooterLinkGroup` | Kolom link dengan heading |
| `FooterDivider` | Garis pembatas |
| `FooterCopyright` | Teks copyright |

---

### 4.3 `WaveDivider` — `components/shared/WaveDivider.tsx`

**Deskripsi**: Ornamen gelombang tradisional sebagai transisi antar section.

**Props**:
```ts
interface WaveDividerProps {
  variant: 'maroon-to-white' | 'white-to-maroon' | 'gold';
  className?: string;
}
```

**Behavior**:
- Render SVG/gambar ornamen wave full-width
- Warna menyesuaikan variant
- Tinggi: 40–60px
- Responsive: tetap proportional di semua ukuran layar

---

### 4.4 `LandscapeTransition` — `components/shared/LandscapeTransition.tsx`

**Deskripsi**: Ilustrasi landscape Jawa (candi, gunung, sawah) sebagai transisi visual menuju footer.

**Props**:
```ts
interface LandscapeTransitionProps {
  className?: string;
}
```

**Behavior**:
- Menampilkan ilustrasi panorama landscape Jawa
- Gradient fade dari konten ke background footer
- Terdapat pin/marker interaktif untuk menandai lokasi penting
- Full-width, aspect ratio responsif

---

## 5. Page: Beranda (Home)

### Route: `/`

### Komposisi Page

```tsx
// app/page.tsx
export default function BerandaPage() {
  return (
    <main>
      <BerandaHero />
      <WaveDivider variant="maroon-to-white" />
      <BerandaWayangPreview />
      <BerandaGamelanPreview />
      <QuoteSection quote={...} author={...} />
      <BerandaPermainanCTA />
      <LandscapeTransition />
    </main>
  );
}
```

> **Perhatikan**: Page file HANYA berisi import + komposisi. Tidak ada HTML/JSX mentah.

### Section Components

#### 5.1 `BerandaHero` — `components/beranda/BerandaHero.tsx`

**Deskripsi**: Hero utama halaman beranda — pengenalan Saka Jawa.

**Konten**:
- Heading: "Menjelajah Warisan Budaya Jawa" (atau sejenisnya)
- Sub-judul: Penjelasan singkat tentang Saka Jawa
- CTA: `[Mulai Jelajah]` (primary gold) + `[Tentang Kami]` (ghost)
- Hero image: ilustrasi wayang atau kolase budaya Jawa

**Layout**: 2 kolom (teks kiri, gambar kanan) desktop → 1 kolom mobile

**Internal menggunakan**: `<HeroSection />` dari `components/sections/`

---

#### 5.2 `BerandaWayangPreview` — `components/beranda/BerandaWayangPreview.tsx`

**Deskripsi**: Preview konten wayang di beranda — menampilkan beberapa card wayang populer.

**Konten**:
- Overline: "WAYANG KULIT"
- Heading: "Tokoh Wayang Populer"
- 3–4 card wayang dengan gambar, nama, deskripsi singkat
- CTA: `[Lihat Semua Wayang →]` → link ke `/wayang`

**Internal menggunakan**: `<SectionWrapper>`, `<SectionHeading>`, `<Card>`, `<Button>`

---

#### 5.3 `BerandaGamelanPreview` — `components/beranda/BerandaGamelanPreview.tsx`

**Deskripsi**: Preview konten gamelan — menampilkan beberapa instrumen gamelan.

**Konten**:
- Overline: "GAMELAN JAWA"
- Heading: "Instrumen Gamelan"
- 3–4 card instrumen
- CTA: `[Jelajahi Gamelan →]` → link ke `/gamelan`

**Background**: `#F5F0EB` (warm gray) — alternating dengan section sebelumnya

---

#### 5.4 `BerandaPermainanCTA` — `components/beranda/BerandaPermainanCTA.tsx`

**Deskripsi**: Section CTA untuk fitur permainan/kuis budaya.

**Konten**:
- Background: `#4E0B11`
- Heading: "Uji Pengetahuanmu!"
- Deskripsi: Ajakan untuk bermain kuis budaya Jawa
- CTA: `[Mulai Bermain]` (gold button) → link ke `/permainan`
- Ilustrasi: karakter wayang dengan ekspresi mengajak

---

## 6. Page: Wayang

### Route: `/wayang`

### Komposisi Page

```tsx
// app/wayang/page.tsx
export default function WayangPage() {
  return (
    <main>
      <WayangHero />
      <WaveDivider variant="maroon-to-white" />
      <WayangKulitSection />
      <WayangPopulerSection />
      <WayangInstrumenSection />
      <WayangQuote />
      <WayangCeritaSection />
      <WayangGaleriSection />
      <WayangMapSection />
      <LandscapeTransition />
    </main>
  );
}
```

### Section Components

#### 6.1 `WayangHero` — `components/wayang/WayangHero.tsx`

**Deskripsi**: Hero section halaman Wayang.

**Konten**:
- Breadcrumb: `Pendhapa Kuliner › Pendhapa Wayang`
- Overline: "PENDHAPA KULINER"
- Heading Display: "Pendhapa Wayang"
- Sub-judul: "Wayang Kuliwa, Jawa Klantenan" (atau lokasi relevan)
- Paragraf deskripsi: Penjelasan singkat tentang wayang Jawa
- CTA: `[Lihat Lainnya]` (gold) + `[Jelajahi Koleksi]` (ghost)
- Hero image: foto/ilustrasi pertunjukan wayang atau dalang

**Internal menggunakan**: `<HeroSection>` dengan props khusus wayang

**Background**: `#4E0B11` + batik pattern overlay

---

#### 6.2 `WayangKulitSection` — `components/wayang/WayangKulitSection.tsx`

**Deskripsi**: Section penjelasan tentang wayang kulit Jawa — sejarah, asal-usul, dan informasi umum.

**Konten**:
- Heading: "Wayang Kulit Jawa"
- Paragraf penjelasan panjang (2–3 paragraf)
- Gambar pendukung di samping teks
- Box "Tahukah Kamu?" dengan fakta menarik + ilustrasi wayang kartun

**Layout**: 2 kolom (teks + gambar) pada desktop, 1 kolom mobile

**Internal menggunakan**: `<SectionWrapper bg="white">`, `<SectionHeading>`, `<InfoBox>`, gambar

---

#### 6.3 `WayangPopulerSection` — `components/wayang/WayangPopulerSection.tsx`

**Deskripsi**: Grid kartu tokoh wayang populer.

**Konten**:
- Heading: "Tokoh Wayang Populer"
- Grid 4 kolom card wayang:
  - Gambar karakter wayang
  - Nama tokoh (Arjuna, Bima, Srikandi, dll.)
  - Deskripsi singkat
  - `[Lihat Detail]` link

**Background**: `#FFFFFF`

**Internal menggunakan**: `<CardGridSection>`, `<Card>` dengan data dari `data/wayang.ts`

---

#### 6.4 `WayangInstrumenSection` — `components/wayang/WayangInstrumenSection.tsx`

**Deskripsi**: Section instrumen musik yang mengiringi pertunjukan wayang — khususnya gamelan.

**Konten**:
- Heading: "Instrumen Gamelan"
- Sub-heading: Penjelasan kaitan wayang dan gamelan
- Grid 4 card instrumen: Gong, Bonang, Kenong, Kempul, dll.
  - Masing-masing: gambar, nama, deskripsi, `[Lihat Detail]`
- Tombol navigasi carousel (← →) jika item banyak

**Background**: `#F5F0EB` (warm gray)

**Internal menggunakan**: `<SectionWrapper>`, `<SectionHeading>`, `<Card>`, `<Button variant="icon">`

---

#### 6.5 `WayangQuote` — `components/wayang/WayangQuote.tsx`

**Deskripsi**: Section quote budaya terkait wayang.

**Konten**:
- Quote: *"Wayang bukan sekadar pertunjukan, melainkan cerminan perjalanan manusia dalam memilih antara kebaikan dan keburukan."*
- Author: — Ki Hadjar Dewantara (atau tokoh budaya relevan)
- Ilustrasi: gambar karakter wayang besar di samping quote

**Background**: `#4E0B11`

**Internal menggunakan**: `<QuoteSection>` dengan props tambahan ilustrasi

---

#### 6.6 `WayangCeritaSection` — `components/wayang/WayangCeritaSection.tsx`

**Deskripsi**: Section tentang cerita-cerita wayang terkenal — cerita Mahabharata, Ramayana, dll.

**Konten**:
- Heading: "Cerita Wayang Penuh Makna"
- Sub-heading: Penjelasan singkat
- CTA: `[Jelajahi Cerita]`
- Grid card horizontal: cerita wayang dengan preview gambar + judul + sinopsis singkat
- Thumbnail avatar dalang/narasumber

**Background**: `#4E0B11`

**Layout**: Heading + CTA di kiri, card carousel/grid di kanan

---

#### 6.7 `WayangGaleriSection` — `components/wayang/WayangGaleriSection.tsx`

**Deskripsi**: Galeri foto pertunjukan wayang.

**Konten**:
- Heading: "Galeri Gamelan" (atau "Galeri Wayang")
- Sub-heading: Deskripsi singkat
- Grid foto 3 kolom (desktop) dengan overlay dan judul
- Link "Lihat Semua Galeri"

**Background**: `#FFFFFF`

**Internal menggunakan**: `<GallerySection>`, `<CardGallery>`

---

#### 6.8 `WayangMapSection` — `components/wayang/WayangMapSection.tsx`

**Deskripsi**: Section peta/ilustrasi interaktif yang menunjukkan lokasi-lokasi penting wayang di Jawa Tengah.

**Konten**:
- Ilustrasi landscape Jawa (candi, gunung, sawah)
- Pin/marker dengan label lokasi: "Surakarta", dll.
- Button `[Selanjutnya]` dengan ikon gold
- Informasi singkat per lokasi saat hover/klik marker

**Background**: gradient warm / cream

**Internal menggunakan**: `<LandscapeTransition>` modifikasi dengan marker interaktif

---

## 7. Page: Gamelan

### Route: `/gamelan`

### Komposisi Page

```tsx
// app/gamelan/page.tsx
export default function GamelanPage() {
  return (
    <main>
      <GamelanHero />
      <WaveDivider variant="maroon-to-white" />
      <GamelanJawaSection />
      <GamelanInstrumenSection />
      <GamelanHarmoniSection />
      <GamelanQuote />
      <GamelanGaleriSection />
      <GamelanMapSection />
      <LandscapeTransition />
    </main>
  );
}
```

### Section Components

#### 7.1 `GamelanHero` — `components/gamelan/GamelanHero.tsx`

**Deskripsi**: Hero section halaman Gamelan.

**Konten**:
- Breadcrumb: `Pendhapa Kuliner › Gamelan Jawa`
- Overline: "PENDHAPA KULINER"
- Heading Display: "Harmoni Gamelan Jawa"
- Paragraf: Penjelasan singkat tentang gamelan
- CTA: `[Tentang Gamelan]` (gold) + `[Jelajahi Koleksi]` (ghost)
- Hero image: foto orkestra gamelan atau set instrumen

**Background**: `#4E0B11` + pattern overlay

---

#### 7.2 `GamelanJawaSection` — `components/gamelan/GamelanJawaSection.tsx`

**Deskripsi**: Penjelasan umum tentang Gamelan Jawa — sejarah, filosofi, dan perannya.

**Konten**:
- Heading: "Gamelan Jawa"
- 3 ikon info (misal: Sejarah, Filosofi, Jenis) dengan deskripsi singkat
- Paragraf penjelasan panjang
- Box "Tahukah Kamu?" dengan fakta menarik

**Background**: `#FFFFFF`

**Layout**: Ikon row di atas → konten teks + InfoBox di bawah

**Internal menggunakan**: `<SectionWrapper>`, `<SectionHeading>`, `<InfoBox>`

---

#### 7.3 `GamelanInstrumenSection` — `components/gamelan/GamelanInstrumenSection.tsx`

**Deskripsi**: Grid instrumen gamelan lengkap.

**Konten**:
- Heading: "Instrumen Gamelan"
- Sub-heading: Penjelasan variasi instrumen
- Grid 4 card: Gong, Bonang, Kenong, Kempul, Saron, Gender, dll.
  - Masing-masing: gambar instrumen, nama, kategori (pukul/petik/tiup), deskripsi, `[Lihat Detail]`
- Navigasi carousel (← →)

**Background**: `#F5F0EB`

**Internal menggunakan**: `<CardGridSection>`, `<Card>`, `<Button variant="icon">`

---

#### 7.4 `GamelanHarmoniSection` — `components/gamelan/GamelanHarmoniSection.tsx`

**Deskripsi**: Section tentang harmoni dan cara bermain gamelan — bagaimana instrumen saling melengkapi.

**Konten**:
- Heading: "Rasakan Harmoni Gamelan"
- Sub-heading + paragraf penjelasan
- CTA: `[Jelajahi Suara]`
- Card horizontal: jenis-jenis laras/nada (misal: Laras Slendro, Laras Pelog)
  - Masing-masing: gambar pertunjukan, nama laras, deskripsi

**Background**: `#4E0B11`

**Layout**: Heading + CTA kiri, card row kanan

---

#### 7.5 `GamelanQuote` — `components/gamelan/GamelanQuote.tsx`

**Deskripsi**: Section quote budaya terkait gamelan.

**Konten**:
- Quote: *"Gamelan bukan sekadar bunyi, tetapi ada ide dan aturan yang dimanusiakan menghubungkan manusia dengan tubuh, alam, dan sang pencipta."*
- Author: — Ki Hadjar Dewantara (atau sumber relevan)

**Background**: `#4E0B11`

**Internal menggunakan**: `<QuoteSection>` dengan props khusus

---

#### 7.6 `GamelanGaleriSection` — `components/gamelan/GamelanGaleriSection.tsx`

**Deskripsi**: Galeri foto gamelan dan pertunjukan.

**Konten**:
- Heading: "Galeri Gamelan"
- Grid foto pertunjukan gamelan
- Foto dengan overlay dan caption

**Background**: `#FFFFFF`

---

#### 7.7 `GamelanMapSection` — `components/gamelan/GamelanMapSection.tsx`

**Deskripsi**: Peta/ilustrasi lokasi gamelan penting di Jawa Tengah.

**Konten**: Serupa dengan `WayangMapSection` — ilustrasi landscape + pin marker

---

## 8. Page: Permainan

### Route: `/permainan`

### Komposisi Page

```tsx
// app/permainan/page.tsx
export default function PermainanPage() {
  return (
    <main>
      <PermainanHero />
      <WaveDivider variant="maroon-to-white" />
      <PermainanListSection />
      <PermainanLeaderboard />
      <LandscapeTransition />
    </main>
  );
}
```

### Section Components (Brief)

#### 8.1 `PermainanHero`
- Heading: "Uji Pengetahuan Budayamu!"
- Deskripsi ajakan bermain kuis
- CTA: `[Mulai Bermain]`

#### 8.2 `PermainanListSection`
- Grid card permainan/kuis yang tersedia
- Masing-masing: thumbnail, judul kuis, deskripsi, tingkat kesulitan (badge), `[Mainkan]`

#### 8.3 `PermainanLeaderboard`
- Tabel/card skor tertinggi
- Background: `#4E0B11`

> [!NOTE]
> Detail interaksi permainan (mekanik kuis, skor, dll.) akan didefinisikan di PRD terpisah saat fase Prioritas 2.

---

## 9. Page: Tentang Kami

### Route: `/tentang-kami`

### Komposisi Page

```tsx
// app/tentang-kami/page.tsx
export default function TentangKamiPage() {
  return (
    <main>
      <TentangKamiHero />
      <WaveDivider variant="maroon-to-white" />
      <TentangMisiSection />
      <TentangTimSection />
      <TentangKontakSection />
      <LandscapeTransition />
    </main>
  );
}
```

### Section Components (Brief)

#### 9.1 `TentangKamiHero`
- Heading: "Tentang Saka Jawa"
- Deskripsi misi dan visi

#### 9.2 `TentangMisiSection`
- Penjelasan misi pelestarian budaya Jawa
- 3 kolom: Misi, Visi, Nilai

#### 9.3 `TentangTimSection`
- Grid card anggota tim
- Foto, nama, peran

#### 9.4 `TentangKontakSection`
- Form kontak atau informasi kontak
- Background: `#F5F0EB`

---

## 10. Data Layer & Content Management

### Lokasi Data

Semua data konten disimpan di folder `data/` sebagai TypeScript modules (bukan JSON). Ini memungkinkan type safety dan auto-complete.

### `data/navigation.ts`

```ts
export interface NavItem {
  label: string;
  href: string;
  position: 'left' | 'right';
}

export const navItems: NavItem[] = [
  { label: 'Beranda', href: '/', position: 'left' },
  { label: 'Wayang', href: '/wayang', position: 'left' },
  { label: 'Permainan', href: '/permainan', position: 'right' },
  { label: 'Tentang Kami', href: '/tentang-kami', position: 'right' },
];
```

### `data/wayang.ts`

```ts
export interface Wayang {
  id: string;
  nama: string;
  deskripsi: string;
  deskripsiPanjang: string;
  gambar: string;          // path ke /public/images/wayang/
  kategori: 'pandawa' | 'kurawa' | 'dewa' | 'punakawan' | 'lainnya';
  asal: string;
}

export const wayangList: Wayang[] = [
  {
    id: 'arjuna',
    nama: 'Arjuna',
    deskripsi: 'Ksatria Pandawa yang mahir memanah...',
    deskripsiPanjang: '...',
    gambar: '/images/wayang/arjuna.webp',
    kategori: 'pandawa',
    asal: 'Mahabharata',
  },
  // ... more items
];
```

### `data/gamelan.ts`

```ts
export interface Instrumen {
  id: string;
  nama: string;
  deskripsi: string;
  deskripsiPanjang: string;
  gambar: string;          // path ke /public/images/gamelan/
  kategori: 'pukul' | 'petik' | 'tiup' | 'gesek';
  jenis: string;           // misal: "Idiofon", "Membranofon"
}

export const instrumenList: Instrumen[] = [
  {
    id: 'gong',
    nama: 'Gong',
    deskripsi: 'Instrumen paling besar dan paling penting dalam gamelan...',
    deskripsiPanjang: '...',
    gambar: '/images/gamelan/gong.webp',
    kategori: 'pukul',
    jenis: 'Idiofon',
  },
  // ... more items
];
```

### `data/quotes.ts`

```ts
export interface Quote {
  text: string;
  author: string;
  context?: string;        // konteks kapan/dimana quote ini diucapkan
}

export const wayangQuote: Quote = {
  text: 'Wayang bukan sekadar pertunjukan, melainkan cerminan perjalanan manusia dalam memilih antara kebaikan dan keburukan.',
  author: 'Ki Hadjar Dewantara',
};

export const gamelanQuote: Quote = {
  text: 'Gamelan bukan sekadar bunyi, tetapi ada ide dan aturan yang dimanusiakan menghubungkan manusia dengan tubuh, alam, dan sang pencipta.',
  author: 'Ki Hadjar Dewantara',
};
```

---

## 11. Aturan Pengembangan

### 11.1 Aturan Komponen

| # | Aturan | ⚠️ Level |
|---|--------|----------|
| 1 | **Setiap section visual = 1 komponen React terpisah** | 🔴 Wajib |
| 2 | **File page (`page.tsx`) hanya berisi import + komposisi komponen** — tidak boleh ada markup HTML mentah selain `<main>` wrapper | 🔴 Wajib |
| 3 | **Navbar dan Footer di-render di `layout.tsx`**, bukan di setiap page | 🔴 Wajib |
| 4 | **UI primitif (Button, Card, Badge, dll.) selalu digunakan** — tidak boleh membuat inline styling ad-hoc untuk elemen yang sudah ada komponennya | 🔴 Wajib |
| 5 | **Komponen harus menerima data via props** — tidak boleh hardcode konten di dalam komponen section (kecuali page-specific yang datanya tetap) | 🟡 Disarankan |
| 6 | **Setiap komponen harus punya TypeScript interface** untuk props-nya | 🔴 Wajib |
| 7 | **Nama file komponen = PascalCase**, nama folder = kebab-case atau camelCase | 🔴 Wajib |
| 8 | **Jangan nested komponen lebih dari 3 level** dari page → section → UI primitif | 🟡 Disarankan |

### 11.2 Contoh Page File yang BENAR ✅

```tsx
// app/wayang/page.tsx
import { WayangHero } from '@/components/wayang/WayangHero';
import { WayangKulitSection } from '@/components/wayang/WayangKulitSection';
import { WayangPopulerSection } from '@/components/wayang/WayangPopulerSection';
import { WayangInstrumenSection } from '@/components/wayang/WayangInstrumenSection';
import { WayangQuote } from '@/components/wayang/WayangQuote';
import { WayangCeritaSection } from '@/components/wayang/WayangCeritaSection';
import { WayangGaleriSection } from '@/components/wayang/WayangGaleriSection';
import { WayangMapSection } from '@/components/wayang/WayangMapSection';
import { WaveDivider } from '@/components/shared/WaveDivider';
import { LandscapeTransition } from '@/components/shared/LandscapeTransition';

export default function WayangPage() {
  return (
    <main>
      <WayangHero />
      <WaveDivider variant="maroon-to-white" />
      <WayangKulitSection />
      <WayangPopulerSection />
      <WayangInstrumenSection />
      <WayangQuote />
      <WayangCeritaSection />
      <WayangGaleriSection />
      <WayangMapSection />
      <LandscapeTransition />
    </main>
  );
}
```

### 11.3 Contoh Page File yang SALAH ❌

```tsx
// ❌ JANGAN SEPERTI INI
export default function WayangPage() {
  return (
    <main>
      {/* ❌ Navbar TIDAK boleh di page — harus di layout.tsx */}
      <nav className="bg-maroon sticky top-0">
        <a href="/">Beranda</a>
        <a href="/wayang">Wayang</a>
      </nav>

      {/* ❌ Section HTML mentah — harus komponen terpisah */}
      <section className="hero bg-maroon text-white py-20">
        <h1>Pendhapa Wayang</h1>
        <p>Deskripsi wayang...</p>
        <button>Lihat Lainnya</button>
      </section>

      {/* ❌ Card langsung di page tanpa komponen */}
      <section className="py-16">
        <h2>Tokoh Wayang</h2>
        <div className="grid grid-cols-4 gap-6">
          <div className="card">
            <img src="/arjuna.jpg" />
            <h3>Arjuna</h3>
          </div>
          {/* ... more cards inline ... */}
        </div>
      </section>

      {/* ❌ Footer TIDAK boleh di page — harus di layout.tsx */}
      <footer>...</footer>
    </main>
  );
}
```

### 11.4 Aturan Styling

| # | Aturan |
|---|--------|
| 1 | Gunakan **Tailwind CSS 4** sebagai satu-satunya cara menulis style di komponen — semua utility classes di atribut `className` |
| 2 | **JANGAN** buat file CSS terpisah (`.css`, `.module.css`, stylesheet vanilla) untuk komponen atau section |
| 3 | Token desain (warna, font, animasi) didefinisikan di `app/globals.css` (`:root` + `@theme inline`) sesuai `design.md` |
| 4 | Warna HARUS memakai token Tailwind (`bg-maroon`, `text-gold`) atau arbitrary value dengan variabel CSS (`bg-[var(--color-maroon)]`) — **JANGAN** hardcode hex di `className` |
| 5 | Responsivitas ditulis dengan breakpoint Tailwind (`sm:`, `md:`, `lg:`, `xl:`) di `className`, bukan media query terpisah |
| 6 | Animasi global (mis. `fade-in-up`, `float`) diregistrasi di `globals.css` lalu dipakai sebagai `animate-*` di komponen |
| 7 | Font HARUS League Spartan — setup di `layout.tsx`, dipakai via `font-sans` |

### 11.5 Aturan Data & Content

| # | Aturan |
|---|--------|
| 1 | Semua data konten disimpan di folder `data/` sebagai TypeScript modules |
| 2 | Setiap data module harus punya export TypeScript interface |
| 3 | Gambar disimpan di `public/images/[kategori]/` |
| 4 | Gambar format `.webp` sebagai prioritas, fallback `.png` atau `.jpg` |
| 5 | Semua gambar harus punya `alt` text deskriptif di komponen |

### 11.6 Aturan TypeScript

| # | Aturan |
|---|--------|
| 1 | Semua komponen harus typed — props interface wajib |
| 2 | Gunakan `interface` untuk props, `type` untuk union/alias |
| 3 | Jangan gunakan `any` — gunakan `unknown` jika perlu |
| 4 | Export types dari `types/` folder untuk shared types |

---

## 12. Prioritas Implementasi

### Fase 1 — Fondasi & Core Pages

| # | Task | Estimasi |
|---|------|----------|
| 1 | Setup `globals.css` dengan CSS variables dari `design.md` | 1 jam |
| 2 | Setup `layout.tsx` dengan League Spartan font | 30 menit |
| 3 | Build UI Primitives: `Button`, `Card`, `Badge`, `SectionHeading`, `Breadcrumb`, `Overline` | 3 jam |
| 4 | Build Layout Components: `Container`, `SectionWrapper` | 1 jam |
| 5 | Build Shared Components: `Navbar`, `Footer`, `WaveDivider` | 3 jam |
| 6 | Build Hooks: `useScrollAnimation`, `useMediaQuery` | 1 jam |
| 7 | Setup Data: `navigation.ts`, `wayang.ts`, `gamelan.ts`, `quotes.ts` | 1 jam |

### Fase 2 — Halaman Wayang & Gamelan

| # | Task | Estimasi |
|---|------|----------|
| 8 | Build semua section components Wayang (8 komponen) | 6 jam |
| 9 | Compose `app/wayang/page.tsx` | 30 menit |
| 10 | Build semua section components Gamelan (7 komponen) | 5 jam |
| 11 | Compose `app/gamelan/page.tsx` | 30 menit |
| 12 | Build `LandscapeTransition` | 2 jam |

### Fase 3 — Halaman Beranda

| # | Task | Estimasi |
|---|------|----------|
| 13 | Build section components Beranda (4 komponen) | 3 jam |
| 14 | Compose `app/page.tsx` (Beranda) | 30 menit |

### Fase 4 — Halaman Tambahan

| # | Task | Estimasi |
|---|------|----------|
| 15 | Build & compose Permainan page | 4 jam |
| 16 | Build & compose Tentang Kami page | 3 jam |

### Fase 5 — Polish

| # | Task | Estimasi |
|---|------|----------|
| 17 | Scroll animations di semua section | 2 jam |
| 18 | Responsivitas testing & fix | 3 jam |
| 19 | Performance optimization (image lazy load, etc.) | 2 jam |
| 20 | SEO meta tags per halaman | 1 jam |

---

## Lampiran: Komponen Interface Reference

### UI Primitives Props

```ts
// Button
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'text' | 'icon';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;           // jika link, render sebagai <a>
  onClick?: () => void;    // jika action, render sebagai <button>
  className?: string;
  disabled?: boolean;
}

// Card
interface CardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;       // default: "Lihat Detail"
  aspectRatio?: '1/1' | '4/3' | '16/9';
  className?: string;
}

// CardGallery
interface CardGalleryProps {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  href?: string;
  className?: string;
}

// Badge
interface BadgeProps {
  variant: 'gold' | 'maroon' | 'outline';
  children: React.ReactNode;
  className?: string;
}

// SectionHeading
interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'light' | 'dark';  // light = heading maroon, dark = heading white
  className?: string;
}

// Breadcrumb
interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
  theme?: 'light' | 'dark';
  className?: string;
}

// InfoBox ("Tahukah Kamu?")
interface InfoBoxProps {
  title?: string;          // default: "Tahukah Kamu?"
  content: string;
  illustration?: string;   // path gambar ilustrasi
  className?: string;
}

// ScrollAnimator
interface ScrollAnimatorProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;          // ms
  className?: string;
}

// Overline
interface OverlineProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

// DotIndicator
interface DotIndicatorProps {
  total: number;
  active: number;
  onChange?: (index: number) => void;
  className?: string;
}
```

### Section Components Props

```ts
// HeroSection (reusable)
interface HeroSectionProps {
  breadcrumbItems?: Array<{ label: string; href?: string }>;
  overline?: string;
  title: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  heroImage?: string;
  heroImageAlt?: string;
  backgroundPattern?: string;  // path ke pattern SVG/PNG
  className?: string;
}

// QuoteSection (reusable)
interface QuoteSectionProps {
  quote: string;
  author: string;
  illustration?: string;    // ilustrasi pendamping (opsional)
  className?: string;
}

// CardGridSection (reusable)
interface CardGridSectionProps {
  overline?: string;
  title: string;
  description?: string;
  cards: CardProps[];
  columns?: 2 | 3 | 4;
  background?: 'white' | 'cream' | 'warm-gray' | 'maroon';
  showCarouselNav?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

// GallerySection (reusable)
interface GallerySectionProps {
  title: string;
  description?: string;
  images: CardGalleryProps[];
  columns?: 2 | 3;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

// CTASection (reusable)
interface CTASectionProps {
  title: string;
  description: string;
  primaryCTA: { label: string; href: string };
  illustration?: string;
  background?: 'maroon' | 'cream';
  className?: string;
}
```

### Layout Components Props

```ts
// Container
interface ContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'full';
  children: React.ReactNode;
  className?: string;
}

// SectionWrapper
interface SectionWrapperProps {
  background?: 'white' | 'cream' | 'warm-gray' | 'maroon' | 'maroon-dark';
  padding?: 'sm' | 'md' | 'lg';   // sm=48px, md=80px, lg=96px (vertikal)
  children: React.ReactNode;
  className?: string;
  id?: string;                      // untuk anchor links
}
```

---

> **Dokumen ini adalah panduan utama untuk pengembangan seluruh website Saka Jawa. Setiap developer/AI harus merujuk dokumen ini bersama `design.md` untuk menjaga konsistensi arsitektur dan visual.**
