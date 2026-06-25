# 🎨 Saka Jawa — Design System & UI Guidelines

> **Proyek**: Saka Jawa / Golek Howo — Website Budaya Jawa (Wayang & Gamelan)
> **Font Utama**: League Spartan (Google Fonts)
> **Styling**: Tailwind CSS 4 (utility classes di `className`)
> **Versi**: 1.0.0
> **Tanggal**: 23 Juni 2026

---

## Daftar Isi

1. [Filosofi Desain](#1-filosofi-desain)
2. [Color Palette](#2-color-palette)
3. [Tipografi](#3-tipografi)
4. [Spacing & Grid System](#4-spacing--grid-system)
5. [Komponen UI](#5-komponen-ui)
6. [Layout Patterns](#6-layout-patterns)
7. [Elemen Dekoratif & Ornamen](#7-elemen-dekoratif--ornamen)
8. [Section Patterns](#8-section-patterns)
9. [Imagery & Ilustrasi](#9-imagery--ilustrasi)
10. [Animasi & Interaksi](#10-animasi--interaksi)
11. [Responsivitas](#11-responsivitas)
12. [Styling dengan Tailwind CSS](#12-styling-dengan-tailwind-css)
13. [Aturan Implementasi](#13-aturan-implementasi)

---

## 1. Filosofi Desain

### Identitas Visual
Desain Saka Jawa mengusung identitas **budaya Jawa klasik yang elegan** — memadukan estetika tradisional wayang & gamelan dengan tata letak web modern. Warna maroon-dark (`#4E0B11`) menjadi fondasi yang merepresentasikan kemegahan keraton Jawa, diimbangi aksen emas (`#FFC832`) yang menyimbolkan keagungan dan kemewahan.

### Prinsip Utama
| # | Prinsip | Penjelasan |
|---|---------|------------|
| 1 | **Tradisional-Modern Fusion** | Elemen tradisional Jawa (ornamen batik, motif wayang) dipadukan dengan layout grid modern dan whitespace yang bersih |
| 2 | **Warm & Inviting** | Palet warna hangat (maroon + gold) menciptakan nuansa yang menyambut dan berkesan budaya |
| 3 | **Content-First** | Konten budaya (teks, gambar, ilustrasi) harus menjadi fokus utama, ornamen hanya sebagai pelengkap |
| 4 | **Konsistensi Visual** | Setiap halaman (Wayang Page, Gamelan Page, dll.) harus mengikuti pattern yang sama namun tetap punya karakter unik |
| 5 | **Aksesibilitas** | Kontras warna dijaga agar teks tetap terbaca di atas semua background |

---

## 2. Color Palette

### Warna Primer

| Nama Token | Hex | RGB | Penggunaan |
|------------|-----|-----|------------|
| `--color-maroon` | `#4E0B11` | `rgb(78, 11, 17)` | Background utama navbar, hero section, footer, heading besar, section gelap |
| `--color-gold` | `#FFC832` | `rgb(255, 200, 50)` | Aksen CTA button, highlight, ikon aktif, ornamen dekoratif, badge |
| `--color-white` | `#FFFFFF` | `rgb(255, 255, 255)` | Background body/section terang, teks di atas maroon, card background |
| `--color-black` | `#000000` | `rgb(0, 0, 0)` | Body text utama, heading di section terang |

### Warna Turunan (Derived)

| Nama Token | Hex | Penggunaan |
|------------|-----|------------|
| `--color-maroon-dark` | `#3A0810` | Hover state pada elemen maroon, shadow |
| `--color-maroon-light` | `#6B1520` | Border, subtle background, section divider |
| `--color-gold-dark` | `#E0B020` | Hover state button gold |
| `--color-gold-light` | `#FFD966` | Background highlight ringan, badge background |
| `--color-cream` | `#FFF8E7` | Section background alternatif (warm white) |
| `--color-warm-gray` | `#F5F0EB` | Background section netral dengan nuansa hangat |
| `--color-gray-100` | `#F7F7F7` | Background card/section terang alternatif |
| `--color-gray-300` | `#D4D4D4` | Border, divider line |
| `--color-gray-600` | `#6B6B6B` | Teks sekunder, caption, meta info |
| `--color-gray-900` | `#1A1A1A` | Teks utama alternatif (sedikit lebih lembut dari pure black) |

### Aturan Penggunaan Warna

```
┌─────────────────────────────────────────────────────────┐
│  NAVBAR: bg-maroon, text-white, aksen gold              │
├─────────────────────────────────────────────────────────┤
│  HERO: bg-maroon, text-white, CTA button gold           │
│  + ornamen batik sebagai background overlay              │
├─────────────────────────────────────────────────────────┤
│  SECTION TERANG: bg-white/cream, text-black             │
│  heading maroon, aksen gold                              │
├─────────────────────────────────────────────────────────┤
│  SECTION GELAP: bg-maroon, text-white                   │
│  card di dalamnya bg-white, aksen gold                   │
├─────────────────────────────────────────────────────────┤
│  QUOTE/HIGHLIGHT: bg-maroon, text-gold (italic)         │
├─────────────────────────────────────────────────────────┤
│  FOOTER: bg-maroon-dark, text-white, link gold          │
└─────────────────────────────────────────────────────────┘
```

### Kontras & Aksesibilitas

| Kombinasi | Rasio Kontras | Status |
|-----------|--------------|--------|
| `#FFFFFF` di atas `#4E0B11` | ~12.5:1 | ✅ AAA |
| `#FFC832` di atas `#4E0B11` | ~6.8:1 | ✅ AA Large / AAA Large |
| `#000000` di atas `#FFFFFF` | 21:1 | ✅ AAA |
| `#4E0B11` di atas `#FFFFFF` | ~12.5:1 | ✅ AAA |
| `#FFC832` di atas `#000000` | ~11.6:1 | ✅ AAA |

---

## 3. Tipografi

### Font Family

```css
/* Primary Font — SATU-SATUNYA font yang digunakan */
font-family: 'League Spartan', sans-serif;
```

> **Catatan**: League Spartan digunakan untuk SEMUA elemen teks — heading, body, caption, button, navigation. Tidak ada font sekunder.

### Import Google Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap');
```

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Penggunaan |
|-------|------|--------|-------------|----------------|------------|
| `--text-display` | `56px` / `3.5rem` | 700 (Bold) | 1.1 | `-0.02em` | Hero heading utama (hanya 1 per halaman) |
| `--text-h1` | `42px` / `2.625rem` | 700 (Bold) | 1.15 | `-0.01em` | Section heading besar |
| `--text-h2` | `32px` / `2rem` | 700 (Bold) | 1.2 | `-0.01em` | Sub-section heading |
| `--text-h3` | `24px` / `1.5rem` | 600 (SemiBold) | 1.3 | `0` | Card title, komponen heading |
| `--text-h4` | `20px` / `1.25rem` | 600 (SemiBold) | 1.4 | `0` | Sub-komponen heading |
| `--text-body-lg` | `18px` / `1.125rem` | 400 (Regular) | 1.7 | `0` | Paragraf panjang, deskripsi hero |
| `--text-body` | `16px` / `1rem` | 400 (Regular) | 1.7 | `0` | Body text standar |
| `--text-body-sm` | `14px` / `0.875rem` | 400 (Regular) | 1.6 | `0` | Caption, meta, deskripsi kecil |
| `--text-caption` | `12px` / `0.75rem` | 400 (Regular) | 1.5 | `0.02em` | Label kecil, badge text, breadcrumb |
| `--text-overline` | `12px` / `0.75rem` | 500 (Medium) | 1.5 | `0.1em` | Overline text (UPPERCASE), kategori label |
| `--text-button` | `14px` / `0.875rem` | 600 (SemiBold) | 1 | `0.02em` | Button label |
| `--text-nav` | `14px` / `0.875rem` | 500 (Medium) | 1 | `0.02em` | Navigation link |

### Aturan Tipografi

1. **Heading di section terang** → warna `#4E0B11` (maroon) atau `#000000` (black)
2. **Heading di section gelap (maroon bg)** → warna `#FFFFFF` (white)
3. **Body text di section terang** → warna `#000000` atau `#1A1A1A`
4. **Body text di section gelap** → warna `#FFFFFF` dengan opacity 0.9
5. **Quote text** → warna `#FFC832` (gold), style italic, weight 300 (Light)
6. **Overline/kategori** → selalu UPPERCASE, warna `#FFC832` di section gelap, `#4E0B11` di section terang
7. **Breadcrumb** → `--text-caption`, warna `#6B6B6B` atau `rgba(255,255,255,0.7)` di bg gelap
8. **JANGAN** gunakan font lain selain League Spartan
9. **JANGAN** gunakan weight di bawah 300 untuk body text yang panjang

---

## 4. Spacing & Grid System

### Spacing Scale (8px Base)

| Token | Value | Penggunaan |
|-------|-------|------------|
| `--space-1` | `4px` | Micro gap, ikon ke teks inline |
| `--space-2` | `8px` | Gap antar ikon kecil, padding badge |
| `--space-3` | `12px` | Padding card internal kecil |
| `--space-4` | `16px` | Padding card, gap antar elemen terkait |
| `--space-5` | `20px` | - |
| `--space-6` | `24px` | Gap antar card, padding section mobile |
| `--space-8` | `32px` | Gap antar komponen dalam section |
| `--space-10` | `40px` | Padding section kecil |
| `--space-12` | `48px` | Margin antar section |
| `--space-16` | `64px` | Padding section vertikal (desktop) |
| `--space-20` | `80px` | Padding section vertikal besar |
| `--space-24` | `96px` | Jarak antar section utama |

### Grid Layout

```
Desktop (≥1200px):
┌──────────────────────────────────────────────┐
│           max-width: 1200px                  │
│           padding-x: 64px                    │
│           12 columns, gap: 24px              │
└──────────────────────────────────────────────┘

Tablet (768px–1199px):
┌──────────────────────────────────────────────┐
│           max-width: 100%                    │
│           padding-x: 40px                    │
│           8 columns, gap: 20px               │
└──────────────────────────────────────────────┘

Mobile (≤767px):
┌──────────────────────────────────────────────┐
│           max-width: 100%                    │
│           padding-x: 20px                    │
│           4 columns, gap: 16px               │
└──────────────────────────────────────────────┘
```

### Container Widths

| Token | Value | Penggunaan |
|-------|-------|------------|
| `--container-sm` | `640px` | Konten teks saja (quote, paragraf) |
| `--container-md` | `960px` | Konten mixed (teks + gambar kecil) |
| `--container-lg` | `1200px` | Container utama halaman |
| `--container-full` | `100%` | Full-width section (hero, footer) |

---

## 5. Komponen UI

### 5.1 Navbar

```
┌──────────────────────────────────────────────────────────┐
│ [Logo]    Beranda  Wayang  ⬡  Permainan  Tentang Kami   │
│                                                          │
│ Background: #4E0B11 (maroon)                             │
│ Text: #FFFFFF (white), weight 500                        │
│ Active/Hover: #FFC832 (gold) underline                   │
│ Center icon: Ornamen emas (logo/ikon tradisional)        │
│ Height: 64px                                             │
│ Position: sticky top                                     │
│ Border-bottom: 1px solid rgba(255,200,50,0.2)            │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#4E0B11`
- Tinggi: `64px`
- Nav link: `14px`, weight `500`, color `#FFFFFF`
- Nav link hover: color `#FFC832`, transisi 200ms
- Nav link aktif: color `#FFC832` + underline 2px gold di bawah
- Logo di tengah: ornamen emas tradisional sebagai center piece
- Posisi: `sticky`, `top: 0`, `z-index: 1000`
- Shadow saat scroll: `0 2px 12px rgba(0,0,0,0.15)`

### 5.2 Buttons

#### Primary Button (Gold)
```css
.btn-primary {
  background: #FFC832;
  color: #000000;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
}
.btn-primary:hover {
  background: #E0B020;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255, 200, 50, 0.3);
}
```

#### Secondary Button (Outline Maroon)
```css
.btn-secondary {
  background: transparent;
  color: #4E0B11;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 6px;
  border: 2px solid #4E0B11;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: #4E0B11;
  color: #FFFFFF;
}
```

#### Ghost Button (di atas bg gelap)
```css
.btn-ghost {
  background: transparent;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 28px;
  border-radius: 6px;
  border: 2px solid #FFFFFF;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-ghost:hover {
  background: #FFFFFF;
  color: #4E0B11;
}
```

#### Text Link / "Lihat Detail" Button
```css
.btn-text {
  background: none;
  border: none;
  color: #4E0B11;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}
.btn-text:hover {
  color: #FFC832;
}
```

#### Small Rounded Button (Navigasi Carousel)
```css
.btn-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4E0B11;
  color: #FFFFFF;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-icon:hover {
  background: #FFC832;
  color: #000000;
}
```

### 5.3 Cards

#### Card Instrumen / Wayang (Card Grid)
```
┌─────────────────────────┐
│  ┌───────────────────┐  │
│  │                   │  │ ← Gambar (aspect-ratio: 4/3 atau 1/1)
│  │    [Gambar]       │  │
│  │                   │  │
│  └───────────────────┘  │
│                         │
│  Nama Instrumen         │ ← h4, weight 600, #000000
│                         │
│  Deskripsi singkat      │ ← body-sm, #6B6B6B, max 3 baris
│  tentang instrumen...   │
│                         │
│  Lihat Detail →         │ ← btn-text, #4E0B11
│                         │
└─────────────────────────┘

Background: #FFFFFF
Border: 1px solid #E8E8E8
Border-radius: 12px
Padding: 0 (gambar flush) / 16px (konten)
Shadow: 0 2px 8px rgba(0,0,0,0.06)
Hover shadow: 0 8px 24px rgba(0,0,0,0.1)
Hover transform: translateY(-4px)
Transition: all 0.3s ease
```

#### Card Galeri (Image Overlay)
```
┌─────────────────────────┐
│                         │
│       [Gambar]          │ ← Gambar full, aspect-ratio: 16/9
│                         │
│  ─────────────────────  │
│  Overlay gradient       │ ← Gradient dari transparent ke rgba(0,0,0,0.7)
│  Judul Galeri           │ ← h4, white, weight 600
│  Sub-caption            │ ← caption, rgba(255,255,255,0.8)
└─────────────────────────┘

Border-radius: 12px
Overflow: hidden
```

#### Card "Tahukah Kamu?" (Info Box)
```
┌─────────────────────────────┐
│  ┌─────────────────────┐    │
│  │  Ilustrasi Wayang   │    │ ← Karakter wayang kartun
│  └─────────────────────┘    │
│                             │
│  ✦ Tahukah Kamu?            │ ← Heading dengan ikon, gold accent
│                             │
│  Deskripsi fakta menarik    │ ← Body text
│  tentang wayang atau        │
│  gamelan Jawa...            │
│                             │
└─────────────────────────────┘

Background: #FFF8E7 (cream) atau #F5F0EB (warm gray)
Border: 2px solid #FFC832
Border-radius: 16px
Padding: 24px
Shadow: 0 4px 16px rgba(255,200,50,0.15)
```

### 5.4 Badge / Tag

```css
.badge {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

/* Variasi */
.badge-gold {
  background: #FFC832;
  color: #000000;
}
.badge-maroon {
  background: #4E0B11;
  color: #FFFFFF;
}
.badge-outline {
  background: transparent;
  border: 1px solid #4E0B11;
  color: #4E0B11;
}
```

### 5.5 Breadcrumb

```
Pendhapa Kuliner  ›  Pendhapa Wayang
```
- Font: `12px`, weight `400`
- Warna: `rgba(255,255,255,0.7)` (di bg gelap)
- Separator: `›` dengan margin horizontal `8px`
- Item terakhir: weight `600`, opacity `1`

### 5.6 Pagination / Dot Indicator

```css
.dot-indicator {
  display: flex;
  gap: 8px;
  align-items: center;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #D4D4D4;
  transition: all 0.3s ease;
}
.dot.active {
  width: 24px;
  border-radius: 4px;
  background: #FFC832;
}
```

---

## 6. Layout Patterns

### 6.1 Hero Section

```
┌──────────────────────────────────────────────────────────┐
│  ╔══════════════════════════════════════════════════════╗ │
│  ║  [Ornamen Batik Pattern di Background]              ║ │
│  ║                                                      ║ │
│  ║  Breadcrumb                                          ║ │
│  ║                                                      ║ │
│  ║  DISPLAY HEADING                     [Hero Image]    ║ │
│  ║  Sub-judul                                           ║ │
│  ║  Deskripsi singkat                                   ║ │
│  ║                                                      ║ │
│  ║  [Button Primary]  [Button Ghost]                    ║ │
│  ║                                                      ║ │
│  ╚══════════════════════════════════════════════════════╝ │
│  ~~~~~~~~ Wave/Ornamen Border ~~~~~~~~                    │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#4E0B11` dengan overlay pattern batik (opacity 0.1–0.15)
- Layout: 2 kolom (60% teks, 40% gambar) pada desktop
- Padding vertikal: `80px` atas, `96px` bawah
- Teks: `#FFFFFF`, heading `--text-display`
- Bottom border: ornamen wave/gelombang tradisional sebagai transisi ke section berikutnya
- Hero image: gambar wayang/gamelan dengan drop shadow

### 6.2 Section Terang (Content Section)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│            Overline Kategori (gold/maroon)                │
│                                                          │
│          SECTION HEADING                                 │
│          ═══════════════                                 │
│          Paragraf deskripsi pendek                        │
│                                                          │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                 │
│  │ Card │  │ Card │  │ Card │  │ Card │                  │
│  │      │  │      │  │      │  │      │                  │
│  └──────┘  └──────┘  └──────┘  └──────┘                  │
│                                                          │
│          [Lihat Semua →]                                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#FFFFFF` atau `#F5F0EB` (alternating)
- Padding: `80px 0` (desktop), `48px 0` (mobile)
- Heading: `--text-h1`, color `#4E0B11`, weight `700`
- Heading underline: garis dekoratif `3px` warna `#FFC832`, width `60px`, di bawah heading
- Card grid: `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))`
- Gap: `24px`

### 6.3 Section Gelap (Maroon Background)

```
┌──────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓                                                    ▓  │
│  ▓     SECTION HEADING (white)                        ▓  │
│  ▓     Deskripsi (white, opacity 0.9)                 ▓  │
│  ▓                                                    ▓  │
│  ▓  ┌──────────┐  ┌──────────┐  ┌──────────┐         ▓  │
│  ▓  │ Card bg  │  │ Card bg  │  │ Card bg  │         ▓  │
│  ▓  │ white    │  │ white    │  │ white    │         ▓  │
│  ▓  └──────────┘  └──────────┘  └──────────┘         ▓  │
│  ▓                                                    ▓  │
│  ▓     [Button Gold]                                  ▓  │
│  ▓                                                    ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#4E0B11`
- Teks: `#FFFFFF`
- Card di dalamnya: background `#FFFFFF`, shadow `0 4px 16px rgba(0,0,0,0.2)`
- Bisa memiliki background image (batik pattern) dengan opacity rendah

### 6.4 Quote / Blockquote Section

```
┌──────────────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓                                                    ▓  │
│  ▓   "Wayang bukan sekadar pertunjukan,               ▓  │
│  ▓    melainkan cerminan perjalanan manusia            ▓  │
│  ▓    dalam memilih antara kebaikan dan                ▓  │
│  ▓    keburukan."                                     ▓  │
│  ▓                                                    ▓  │
│  ▓    — Ki Hadjar Dewantara                           ▓  │
│  ▓                                                    ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#4E0B11`
- Quote text: `--text-h2`, weight `300` (Light), color `#FFC832`, font-style `italic`
- Author: `--text-body`, weight `500`, color `#FFFFFF`
- Simbol kutip: bisa menggunakan dekoratif `"` berukuran besar (60px+) warna `rgba(255,200,50,0.3)`
- Padding: `80px 0`
- Text-align: `center`
- Max-width teks: `640px`, centered

### 6.5 Footer

```
┌──────────────────────────────────────────────────────────┐
│  ~~~~~~~~ Ilustrasi Landscape Jawa (candi, gunung) ~~~~  │
├──────────────────────────────────────────────────────────┤
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓                                                    ▓  │
│  ▓  [Logo]   Kolom 1     Kolom 2     Kolom 3         ▓  │
│  ▓           Link 1      Link 1      Link 1          ▓  │
│  ▓  Desc     Link 2      Link 2      Link 2          ▓  │
│  ▓           Link 3      Link 3      Link 3          ▓  │
│  ▓                                                    ▓  │
│  ▓  ─────────────────────────────────────────         ▓  │
│  ▓  © 2026 Saka Jawa. All rights reserved.            ▓  │
│  ▓                                                    ▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
└──────────────────────────────────────────────────────────┘
```

**Spesifikasi:**
- Background: `#4E0B11` atau `#3A0810` (lebih gelap)
- Di atas footer: ilustrasi landscape Jawa (candi Prambanan/Borobudur, gunung, sawah) sebagai transisi visual
- Layout: 4 kolom (logo + 3 nav columns)
- Link: `#FFFFFF`, hover `#FFC832`
- Heading kolom: weight `600`, `#FFC832`
- Divider: `1px solid rgba(255,255,255,0.15)`
- Copyright: `--text-caption`, `rgba(255,255,255,0.6)`
- Padding: `64px 0 32px`

---

## 7. Elemen Dekoratif & Ornamen

### 7.1 Batik Pattern Overlay

- Digunakan pada: Hero section, section gelap
- Implementasi: `background-image` dengan SVG pattern atau PNG
- Opacity: `0.08–0.15` (sangat subtle)
- Blend mode: `multiply` atau `overlay`
- Pattern: motif batik parang, kawung, atau mega mendung

### 7.2 Wave / Gelombang Border

```css
.wave-border {
  /* Ornamen gelombang tradisional sebagai section divider */
  /* Bentuk: gelombang awan/mega mendung yang mengalir */
  width: 100%;
  height: 40–60px;
  background: url('/ornaments/wave-border.svg') repeat-x;
  /* Warna: #FFC832 atau #4E0B11 tergantung section */
}
```

- Posisi: di atas/bawah section sebagai transisi
- Warna: `#FFC832` (gold) untuk transisi dari maroon ke white
- Tinggi: `40–60px`
- Pattern: berulang horizontal, motif awan Jawa / mega mendung

### 7.3 Ornamen Emas (Gold Decorative Elements)

- **Section divider**: Garis horizontal dengan ornamen di tengah
- **Corner ornaments**: Motif sudut pada card atau section khusus
- **Icon wrapper**: Lingkaran atau frame emas untuk ikon
- Warna: `#FFC832` dengan variasi opacity

### 7.4 Ilustrasi Landscape

- Posisi: transisi antara content dan footer
- Konten: pemandangan Jawa (candi, gunung, sawah, pohon)
- Style: semi-realistik dengan palet warna hangat
- Gradient fade: dari ilustrasi ke background section

### 7.5 Pin / Location Marker

```
     ╔═══╗
     ║ ✦ ║  ← Ikon gold di dalam
     ╚═╤═╝
       │
       ▼
```
- Digunakan untuk menandai lokasi pada ilustrasi peta/landscape
- Background: `#FFC832`
- Ikon: putih di dalam marker
- Shadow: `0 4px 12px rgba(0,0,0,0.2)`

---

## 8. Section Patterns

### Pola Pergantian Section

Halaman harus mengikuti pola ritme visual berikut:

```
1. HERO (Gelap - Maroon)
   ↓ ornamen wave ↓
2. KONTEN (Terang - White/Cream)
   ↓
3. INFO BOX / "Tahukah Kamu?" (Cream/Warm)
   ↓
4. KONTEN DETAIL (Terang - White)
   ↓
5. QUOTE (Gelap - Maroon)
   ↓
6. GALERI (Terang - White)
   ↓
7. INTERAKTIF / CTA (Cream/Warm)
   ↓ ilustrasi landscape ↓
8. FOOTER (Gelap - Maroon Dark)
```

> **Aturan**: Jangan pernah menempatkan 2 section gelap berturut-turut tanpa section terang di antaranya (kecuali Hero → Wave → Content, yang sudah memiliki ornamen transisi).

### Section dengan Side Illustration

Beberapa section menggunakan layout asimetris dengan ilustrasi wayang di sisi:

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  ┌─────────────────────┐  ┌──────────────────────────┐   │
│  │  [Ilustrasi Wayang] │  │  Heading                 │   │
│  │                     │  │  ═══════                 │   │
│  │                     │  │  Paragraf deskripsi...    │   │
│  │                     │  │                          │   │
│  │                     │  │  [Button]                │   │
│  └─────────────────────┘  └──────────────────────────┘   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 9. Imagery & Ilustrasi

### Kategori Gambar

| Tipe | Aspect Ratio | Border Radius | Penggunaan |
|------|-------------|---------------|------------|
| Hero Image | Bebas (cropped) | `12px` | Gambar utama hero section |
| Card Image | `4:3` atau `1:1` | `8px` (atas saja jika flush) | Kartu instrumen, wayang |
| Gallery Image | `16:9` | `12px` | Galeri foto |
| Thumbnail | `1:1` | `50%` (circle) atau `8px` | Avatar, ikon kategori |
| Illustration | Bebas | `0` | Ilustrasi wayang, ornamen |
| Background Pattern | Tileable | `0` | Pattern batik overlay |

### Style Guide Gambar

1. **Fotografi**: Warm tone, kontras sedang-tinggi, saturasi sedikit diturunkan
2. **Ilustrasi Wayang**: Style kartun/chibi untuk karakter wayang, warna hangat
3. **Ornamen**: SVG vector, warna mono (gold atau maroon), clean lines
4. **Background**: Selalu gunakan overlay/gradient agar teks tetap terbaca

### Image Treatment

```css
/* Card image hover */
.card-image {
  transition: transform 0.4s ease;
  overflow: hidden;
}
.card-image:hover img {
  transform: scale(1.05);
}

/* Image with gradient overlay */
.image-overlay {
  position: relative;
}
.image-overlay::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}
```

---

## 10. Animasi & Interaksi

### Prinsip Animasi

1. **Subtle & Purposeful** — Animasi harus mendukung UX, bukan mengganggu
2. **Performance-First** — Hanya animasi `transform` dan `opacity` (GPU-accelerated)
3. **Konsisten** — Gunakan easing dan durasi yang seragam

### Transition Tokens

| Token | Value | Penggunaan |
|-------|-------|------------|
| `--ease-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Transisi umum |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Elemen keluar |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Elemen masuk |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Efek playful |
| `--duration-fast` | `150ms` | Hover state, toggle |
| `--duration-normal` | `250ms` | Transisi umum |
| `--duration-slow` | `400ms` | Animasi masuk/keluar |
| `--duration-slower` | `600ms` | Animasi kompleks |

### Scroll Animations (Intersection Observer)

```css
/* Fade-in dari bawah saat scroll */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s var(--ease-out), transform 0.6s var(--ease-out);
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger delay untuk card grid */
.animate-stagger:nth-child(1) { transition-delay: 0ms; }
.animate-stagger:nth-child(2) { transition-delay: 100ms; }
.animate-stagger:nth-child(3) { transition-delay: 200ms; }
.animate-stagger:nth-child(4) { transition-delay: 300ms; }
```

### Hover Effects

| Elemen | Efek Hover |
|--------|-----------|
| Card | `translateY(-4px)` + shadow amplified |
| Button Primary | `translateY(-1px)` + glow shadow gold |
| Button Secondary | Background fill maroon + text white |
| Nav Link | Color gold + underline slide-in |
| Image Card | Image `scale(1.05)` |
| Text Link | Color gold + underline |
| Icon Button | Background swap (maroon → gold) |

---

## 11. Responsivitas

### Breakpoints

| Nama | Value | Target |
|------|-------|--------|
| `--bp-mobile` | `≤ 767px` | Smartphone |
| `--bp-tablet` | `768px – 1023px` | Tablet |
| `--bp-desktop` | `1024px – 1399px` | Desktop |
| `--bp-wide` | `≥ 1400px` | Wide desktop |

### Perubahan per Breakpoint

#### Mobile (≤ 767px)
- Navbar → hamburger menu (slide-in dari kanan, bg maroon)
- Hero → 1 kolom, gambar di bawah teks
- Card grid → 1 kolom (stack)
- Section padding → `48px 20px`
- `--text-display` → `36px`
- `--text-h1` → `28px`
- `--text-h2` → `24px`
- Footer → 1 kolom stack

#### Tablet (768px – 1023px)
- Navbar → tetap horizontal (bisa condensed)
- Hero → 1 kolom atau 2 kolom (55/45)
- Card grid → 2 kolom
- Section padding → `64px 40px`
- `--text-display` → `44px`
- `--text-h1` → `34px`

#### Desktop (≥ 1024px)
- Semua layout sesuai spesifikasi standar

---

## 12. Styling dengan Tailwind CSS

Proyek Saka Jawa menggunakan **Tailwind CSS 4** sebagai satu-satunya cara menulis style di komponen. Semua tampilan visual diterapkan lewat **utility classes di atribut `className`** — bukan file CSS terpisah per komponen.

### Prinsip

| # | Prinsip | Penjelasan |
|---|---------|------------|
| 1 | **Utility-first** | Layout, warna, spacing, tipografi, dan responsivitas ditulis langsung di `className` |
| 2 | **Token terpusat** | Warna, font, dan animasi kustom didefinisikan di `app/globals.css` (`:root` + `@theme inline`) lalu dipakai sebagai class Tailwind (`bg-maroon`, `text-gold-dark`, `animate-fade-in-up`, dll.) |
| 3 | **Tanpa CSS per komponen** | **JANGAN** buat file `.css`, `.module.css`, atau stylesheet vanilla terpisah untuk section/komponen |
| 4 | **Responsif di className** | Breakpoint (`sm:`, `md:`, `lg:`, `xl:`) ditulis bersama utility class, bukan di media query terpisah |

### Pemetaan Token → Tailwind Class

| Token CSS (`globals.css`) | Contoh Tailwind Class |
|---------------------------|------------------------|
| `--color-maroon` | `bg-maroon`, `text-maroon`, `border-maroon` |
| `--color-gold` | `bg-gold`, `text-gold` |
| `--color-gold-dark` | `text-gold-dark` |
| `--color-gray-600` | `text-gray-600` |
| `--container-lg` | `max-w-[var(--container-lg)]` |
| `--font-league-spartan` | `font-sans` (via `@theme`) |

### Contoh Implementasi Komponen

```tsx
// ✅ BENAR — semua style di className
<section className="relative flex min-h-screen items-center bg-white px-5 py-12 lg:px-16 lg:py-20">
  <h1 className="text-[2.25rem] font-bold text-black lg:text-[3.5rem]">Judul</h1>
  <button className="rounded-lg bg-maroon px-8 py-3.5 text-sm font-semibold text-white hover:bg-maroon-dark">
    CTA
  </button>
</section>

// ❌ SALAH — jangan import CSS terpisah
import "./HeroSection.css";
```

### Pengecualian yang Diizinkan

Hanya `app/globals.css` yang boleh berisi:
- `@import "tailwindcss"`
- CSS custom properties (`:root`)
- Integrasi `@theme inline` untuk token desain
- Keyframe animasi global yang diregistrasi ke Tailwind (`@keyframes fade-in-up`, dll.)
- Reset/base styles global (`body`, `html`)

---

## 13. Aturan Implementasi

### DO ✅

| # | Aturan |
|---|--------|
| 1 | Gunakan **Tailwind CSS 4** utility classes di `className` untuk semua style komponen |
| 2 | Warna, spacing, dan tipografi HARUS memakai token dari `globals.css` — gunakan class Tailwind (`bg-maroon`) atau arbitrary value dengan variabel (`max-w-[var(--container-lg)]`) |
| 3 | Gunakan `League Spartan` sebagai satu-satunya font (`font-sans` via `@theme`) |
| 4 | Terapkan alternating section pattern (terang-gelap) secara konsisten |
| 5 | Gunakan ornamen tradisional (wave border, batik pattern) sebagai section divider |
| 6 | Semua gambar harus punya `alt` text deskriptif |
| 7 | Semua interactive element harus punya hover state |
| 8 | Gunakan semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) |
| 9 | Heading hierarchy harus benar: 1 `<h1>` per halaman, lalu `<h2>`, `<h3>`, dst. |
| 10 | Pastikan kontras warna memenuhi WCAG AA minimal |
| 11 | Gunakan `border-radius: 6px–12px` secara konsisten (tidak ada sharp corner kecuali ornamen) |
| 12 | Gunakan scroll animation (fade-in) untuk setiap section saat pertama kali muncul |
| 13 | Pastikan setiap halaman memiliki hero section dengan ornamen wave di bawahnya |

### DON'T ❌

| # | Larangan |
|---|----------|
| 1 | **JANGAN** gunakan font selain League Spartan |
| 2 | **JANGAN** buat file CSS terpisah (`.css`, `.module.css`) untuk komponen atau section — gunakan Tailwind di `className` |
| 3 | **JANGAN** gunakan warna di luar palette yang sudah ditentukan (kecuali untuk gambar/foto) |
| 4 | **JANGAN** buat button dengan border-radius `>= 50px` (pill shape) — gunakan `6px` |
| 5 | **JANGAN** taruh 2 section background gelap berturut-turut tanpa section terang di antaranya |
| 6 | **JANGAN** gunakan flat/plain section tanpa elemen dekoratif minimal (heading underline, ikon) |
| 7 | **JANGAN** gunakan gambar tanpa treatment (overlay, border-radius, shadow) |
| 8 | **JANGAN** buat teks lebih dari 75 karakter per baris (readability) |
| 9 | **JANGAN** gunakan pure black (`#000000`) sebagai background section — gunakan `#4E0B11` |
| 10 | **JANGAN** gunakan animasi yang blocking atau mengganggu scroll |
| 11 | **JANGAN** gunakan gradient warna yang tidak ada di palette |
| 12 | **JANGAN** hardcode warna hex di `className` jika token palette sudah tersedia |

### CSS Variables Template

```css
:root {
  /* ═══ Colors ═══ */
  --color-maroon: #4E0B11;
  --color-maroon-dark: #3A0810;
  --color-maroon-light: #6B1520;
  --color-gold: #FFC832;
  --color-gold-dark: #E0B020;
  --color-gold-light: #FFD966;
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-cream: #FFF8E7;
  --color-warm-gray: #F5F0EB;
  --color-gray-100: #F7F7F7;
  --color-gray-300: #D4D4D4;
  --color-gray-600: #6B6B6B;
  --color-gray-900: #1A1A1A;

  /* ═══ Typography ═══ */
  --font-primary: 'League Spartan', sans-serif;
  --text-display: 3.5rem;    /* 56px */
  --text-h1: 2.625rem;       /* 42px */
  --text-h2: 2rem;           /* 32px */
  --text-h3: 1.5rem;         /* 24px */
  --text-h4: 1.25rem;        /* 20px */
  --text-body-lg: 1.125rem;  /* 18px */
  --text-body: 1rem;         /* 16px */
  --text-body-sm: 0.875rem;  /* 14px */
  --text-caption: 0.75rem;   /* 12px */

  /* ═══ Spacing ═══ */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* ═══ Radii ═══ */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* ═══ Shadows ═══ */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.12);
  --shadow-xl: 0 12px 40px rgba(0, 0, 0, 0.16);
  --shadow-gold: 0 4px 16px rgba(255, 200, 50, 0.25);

  /* ═══ Transitions ═══ */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 400ms;

  /* ═══ Containers ═══ */
  --container-sm: 640px;
  --container-md: 960px;
  --container-lg: 1200px;
}
```

### Checklist Sebelum Deploy

- [ ] Semua style komponen ditulis dengan Tailwind utility classes di `className`
- [ ] Tidak ada file `.css` terpisah per komponen/section
- [ ] Semua teks menggunakan `font-sans` (League Spartan)
- [ ] Semua warna menggunakan token palette via class Tailwind atau CSS variables
- [ ] Hero section memiliki ornamen wave border di bawahnya
- [ ] Section bergantian terang-gelap dengan transisi visual
- [ ] Semua card memiliki hover effect
- [ ] Semua button memiliki hover state + transisi
- [ ] Scroll animation aktif pada section
- [ ] Responsive di mobile, tablet, dan desktop
- [ ] Contrast ratio memenuhi WCAG AA
- [ ] Tidak ada font selain League Spartan
- [ ] Heading hierarchy benar (1 h1 per page)
- [ ] Meta tags dan title terpasang
- [ ] Alt text pada semua gambar
- [ ] Footer dengan ilustrasi landscape + ornamen

---

> **Dokumen ini adalah sumber kebenaran tunggal (single source of truth) untuk semua keputusan desain UI di proyek Saka Jawa. Setiap komponen atau halaman baru HARUS merujuk dokumen ini untuk menjaga konsistensi visual.**
