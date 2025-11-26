# YUMMIX.FNB - Platform Profiling & Pemesanan Makanan

![Vue Version](https://img.shields.io/badge/vue-3.5+-42b883)
![Vite](https://img.shields.io/badge/vite-6.x-646cff)
![Tailwind](https://img.shields.io/badge/tailwindcss-4.x-38b2ac)
![Pinia](https://img.shields.io/badge/state-pinia-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 📋 Tentang Proyek

**YUMMIX.FNB** adalah platform web modern yang menghubungkan pelanggan dengan pengalaman kuliner terbaik. Aplikasi ini dirancang sebagai *Single Page Application* (SPA) yang interaktif, memungkinkan pengguna untuk menjelajahi menu dengan visual menarik, mengelola pesanan dalam keranjang belanja secara *real-time*, dan melakukan simulasi pembayaran dengan alur yang mulus.

Proyek ini juga mencakup fondasi untuk sisi **Admin/Merchant**, memungkinkan pengelolaan data menu yang dinamis di masa depan.

## Fitur Utama

### 1. Modul Pelanggan (Customer)
* **Immersive Home Experience:** Halaman utama dengan navigasi *sticky*, hero section animasi, cerita restoran (*storytelling*), dan ulasan pelanggan berbentuk *carousel*.
* **Menu Interaktif:**
    * Tampilan menu menggunakan **Swiper Carousel** dengan efek *Coverflow* (Center Focus).
    * Filter kategori canggih (Food/Drinks & Sub-kategori seperti Noodles, Kebab, dll).
    * Tombol *Order Now* yang terintegrasi langsung dengan modal checkout.
* **Detail Menu Dinamis:** Halaman detail produk (`/menu/:id`) dengan informasi nutrisi, deskripsi lengkap, dan rating.
* **Keranjang Belanja Pintar (Smart Cart):**
    * Manajemen state global menggunakan **Pinia**.
    * Badge notifikasi jumlah item real-time di navbar.
    * Fitur tambah/kurang item dan input **Catatan Pesanan** (Notes) per item.
* **Alur Checkout Mulus:** Modal *multi-step* (List Pesanan -> Pembayaran/QRIS -> Sukses) tanpa *refresh* halaman.
* **User Experience (UX) Premium:**
    * **Toast Notification** saat menambah item.
    * Transisi halaman (*Page Transition*) yang halus.
    * Animasi elemen (*Scroll Reveal*) dan interaksi mikro (*Cart Bounce*).

### 2. Modul Admin (Merchant Dashboard)
* **Layout Terdedikasi:** Struktur sidebar dan header khusus untuk lingkungan admin.
* **Manajemen Menu (CRUD):**
    * Form input menu baru (Nama, Harga, Kategori, Status).
    * Tabel daftar menu dengan fitur Edit dan Hapus (simulasi *store*).
    * Filter data menu berdasarkan kategori.
* **Dashboard Statistik:** Ringkasan performa penjualan (Dummy Data).

## 🛠️ Teknologi yang Digunakan (Tech Stack)

**Core:**
* [Vue.js 3](https://vuejs.org/) (Composition API & Script Setup)
* [Vite](https://vitejs.dev/) (Next Generation Frontend Tooling)

**Styling & UI:**
* [Tailwind CSS v4](https://tailwindcss.com/) (Utility-first CSS framework)
* [DaisyUI 5](https://daisyui.com/) (Component library for Tailwind)
* [Swiper.js](https://swiperjs.com/) (Touch Slider mutakhir untuk Menu)
* [Vue3-Carousel](https://ismail9k.github.io/vue3-carousel/) (Digunakan pada Review Section)

**State Management & Routing:**
* [Pinia](https://pinia.vuejs.org/) (Store untuk Cart & Menu Data)
* [Vue Router](https://router.vuejs.org/) (Navigasi SPA & Scroll Behavior)

**Assets:**
* Font: *Potta One* (Headings), *Market Deco* (Buttons/UI), *Poppins* (Body Text).
* Icons: Heroicons & SVG Custom.

## Struktur Folder Penting

```text
src/
├── assets/          # Gambar, Font, dan CSS Global
├── components/      # Komponen UI (Navbar, Footer, Modal, Card)
├── layouts/         # Layout khusus (AdminLayout)
├── router/          # Konfigurasi Rute & Guard
├── stores/          # Pinia Stores (cart.js, menu.js, toast.js)
├── views/           # Halaman Utama (Home, Menu, Admin)
│   └── admin/       # Halaman-halaman Admin
└── App.vue          # Root Component dengan Transition logic
```

## ⚙️ Prasyarat (Prerequisites)

Sebelum memulai pengembangan atau menjalankan aplikasi ini, pastikan perangkat Anda telah terinstal:

* **Node.js** (Versi 16.x atau terbaru disarankan)
* **NPM** atau **Yarn** (Package manager)
* **Git** (Version control)
* **Browser Modern** (Chrome/Edge/Firefox)

## 🗂️ Struktur Database (ERD)

**SOON!**

## 📖 Dokumentasi API

**SOON!**

## 📸 Tampilan Aplikasi

**SOON!**

## 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi **MIT**. Lihat file `LICENSE` untuk informasi lebih lanjut.

---
© 2025 YUMMIX.FNB. Dibuat dengan ❤️ oleh azrlb.