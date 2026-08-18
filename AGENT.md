# PANDUAN ARSITEKTUR & INSTRUKSI AI (AGENT.md)

**Proyek:** Website Portofolio Interaktif - Haitamim Jahran Mahendra (AI Engineer & Software Developer)

## 1. Tumpukan Teknologi Baku (Strict Tech Stack)

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Wajib menggunakan utility classes)
- **Bahasa:** TypeScript (Strict Mode)
- **Komponen UI:** shadcn/ui & Lucide-React untuk ikon.
- **DILARANG:** Menggunakan framework CSS lain (seperti Bootstrap) atau menulis inline CSS (kecuali untuk masking/gradient khusus dari komponen eksternal).

## 2. Instruksi Integrasi Komponen Kustom

Anda WAJIB mengintegrasikan komponen background `elegant-dark-pattern.tsx` ke dalam sistem.

- Buat file `components/ui/elegant-dark-pattern.tsx` dan paste kode dari 21st.dev secara persis.
- Gunakan komponen `<DarkGradientBg>` ini sebagai _wrapper_ utama (pembungkus layer paling bawah) untuk Halaman Utama (`app/page.tsx`).

## 3. Sistem Tema (Theme Switcher)

Implementasikan tombol _Toggle Theme_ di bagian Navbar. Web harus mendukung 2 mode:

1. **Modern Minimal (Default):** Tema gelap murni, cocok dengan komponen `DarkGradientBg` (teks putih/abu-abu, aksen biru/putih).
2. **Waguri Theme:** Tema estetis anime. Anda WAJIB mendaftarkan palet JSON di bawah ini ke `tailwind.config.ts` dan menggunakannya saat mode Waguri aktif:
   ```json
   {
     "space-indigo": {
       "50": "#f0f0f4",
       "100": "#e1e2ea",
       "200": "#c4c5d4",
       "300": "#a6a7bf",
       "400": "#898aa9",
       "500": "#6b6d94",
       "600": "#565776",
       "700": "#404159",
       "800": "#2b2c3b",
       "900": "#15161e",
       "950": "#0f0f15"
     },
     "cotton-rose": {
       "50": "#faeaec",
       "100": "#f5d6d9",
       "200": "#ebadb3",
       "300": "#e1848d",
       "400": "#d75b67",
       "500": "#cd3241",
       "600": "#a42834",
       "700": "#7b1e27",
       "800": "#52141a",
       "900": "#290a0d",
       "950": "#1d0709"
     },
     "old-rose": {
       "50": "#f8edef",
       "100": "#f0dbdf",
       "200": "#e1b7bf",
       "300": "#d3929f",
       "400": "#c46e7f",
       "500": "#b54a5f",
       "600": "#913b4c",
       "700": "#6d2c39",
       "800": "#481e26",
       "900": "#240f13",
       "950": "#190a0d"
     },
     "lavender-blush": {
       "50": "#fceae8",
       "100": "#fad4d1",
       "200": "#f4a9a4",
       "300": "#ef7e76",
       "400": "#ea5348",
       "500": "#e4281b",
       "600": "#b72015",
       "700": "#891810",
       "800": "#5b100b",
       "900": "#2e0805",
       "950": "#200604"
     }
   }
   ```

## 4. Struktur Tata Letak Visual (Layout Architecture)

Bangun antarmuka memanjang ke bawah (SPA) dengan hierarki komponen terpisah:

1. Navbar (Sticky): Logo "HJM.", Navigasi (Home, About, Experience Projects, Contact), dan Tombol Toggle Tema.

2. Hero Section:
   - Status Badge: 🟢 Available for Research & AI Projects

   - Headline Utama: Hi, I'm Haitamim

   - Sub-headline: AI Engineer & Software Developer

   - Deskripsi singkat mengenai fokus pada RAG lokal, Data Engineering, dan sistem agentic.

   - Tombol Aksi: Lihat Proyek dan Unduh CV.

3. About & Skills Section (Grid):
   - Profil umum dan pembagian badge keahlian (Data Engineering, Programming Languages, Tools & Tech).

4. Experience & Education Section (Timeline):
   - Data Engineer Intern di ALII UIN Jakarta.

   - Data Analyst & Predictive Modeler (Dicoding Certification).

   - S1 Teknik Informatika UIN Syarif Hidayatullah Jakarta.

5. Projects Section (Cards):
   - Waguri AI (Full-Stack RAG Agent).

   - Movie Recommender System.

## 5. Standar Clean Code & Code Formatting (SANGAT KETAT)

1.  DILARANG KERAS MENULIS KODE DALAM SATU BARIS PANJANG:
    Setiap tag HTML/JSX bersarang (nested elements) wajib ditulis di baris baru (line break) dengan indentasi 2 spasi yang konsisten.

2.  FORMATTING CLASS TAILWIND:
    Jika suatu elemen memiliki lebih dari 3 utility class Tailwind, pecah string class tersebut secara terstruktur atau susun kodenya agar tidak keluar dari batas lebar layar (maksimal 80–100 karakter per baris).

3.  MODULARISASI FILE (ARSITEKTUR SEPARASI):
    DILARANG menumpuk seluruh logika dan komponen visual di dalam satu file app/page.tsx.
    Setiap bagian wajib dipisah ke file komponennya masing-masing di folder /components:

        - components/navbar.tsx

        - components/hero-section.tsx

        - components/about-section.tsx

        - components/experience-section.tsx

        - components/projects-section.tsx

        - components/footer.tsx

4.  TIPE DATA TERSTRUKTUR:
    Pindahkan semua array data (daftar proyek, keahlian, pengalaman) ke file terpisah di lib/data.ts atau buat antarmuka TypeScript (interface) yang jelas.

5.  KOMENTAR DAN DOKUMENTASI KODE:
    Berikan komentar singkat di atas setiap fungsi utama atau bagian komponen untuk menjelaskan perannya secara ringkas.

6.  TIDAK ADA LOREM IPSUM:
    Gunakan teks nyata berbahasa Indonesia yang sudah ditentukan di panduan layout.
