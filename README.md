# 🗂️ Simple Tab System (Class Mutator & Tab Switching Module)

Aplikasi komponen navigasi beralih lembar informasi satu halaman (*Simple Tab System*) menggunakan kolaborasi **CSS Display Properties** dan **Vanilla JavaScript**. Fokus utama pengerjaan modul latihan bagi pemula ini adalah menguasai logika pembersihan massal (*Mass Reset State*) sebelum menerapkan status aktif pada elemen DOM target secara spesifik.

Sangat direkomendasikan bagi siswa SMK Jurusan RPL/PPLG tingkat dasar untuk mematangkan konsep koordinasi keterhubungan komponen antarmuka (*Component Linkage Logic*).

---

## 🚀 Fitur Utama

* **Dual-Layer State Cleansing:** Menghapus kelas `.active` secara serentak pada dua kelompok komponen terpisah (baris navigasi dan baris boks konten) demi menjamin kebersihan perpindahan visual.
* **Target ID Linkage Mapping:** Memanfaatkan integrasi pemanggilan dinamis `document.getElementById()` yang dipicu melalui penangkapan nilai string pada atribut kustom `data-target`.
* **Zero-Reload Interface Swapping:** Proses pergantian materi teks berlangsung instan di sisi klien tanpa memicu siklus pemuatan ulang server (*non-blocking page switch*).
* **CSS Keyframe Fade Infiltrator:** Ditunjang efek transisi animasi `@keyframes` meluncur tipis saat panel diaktifkan untuk melunakkan pergantian materi teks agar tidak kaku.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Struktur baris tombol navigasi tab, pemetaan tautan data-target, dan boks panel teks materi
├── style.css        # Desain tab terangkat pop art, manajemen visual display none/block, dan dekorasi kartu analogi
└── script.js        # Fungsi iterasi pembersih massal, penangkap token data target, dan aktivator kelas panel
