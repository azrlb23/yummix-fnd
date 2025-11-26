# YUMMIX.FNB - Platform Pemesanan Makanan & Profiling Restoran

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-orange)
![Vue.js](https://img.shields.io/badge/frontend-Vue.js_3-4FC08D)

## 📖 Tentang Proyek

**YUMMIX.FNB** adalah platform web terintegrasi yang dirancang untuk menjembatani kesenjangan antara pencinta kuliner dan penyedia layanan makanan. Aplikasi ini tidak hanya berfungsi sebagai alat pemesanan makanan *online*, tetapi juga sebagai media *profiling* digital bagi restoran untuk membangun identitas merek mereka.

Diciptakan untuk memecahkan masalah efisiensi dalam manajemen pesanan dan keterbatasan eksposur digital bagi restoran UMKM, YUMMIX.FNB menawarkan solusi *end-to-end* mulai dari pencarian menu hingga pelacakan pesanan secara *real-time*.

## 🌟 Fitur Utama

Aplikasi ini dibagi menjadi tiga modul utama berdasarkan peran pengguna:

### 1. 👤 Modul Pelanggan (Customer)
* **Pencarian Cerdas:** Mencari makanan berdasarkan kategori, nama restoran, atau rentang harga.
* **Profil Restoran:** Melihat detail restoran, jam operasional, dan ulasan pelanggan lain.
* **Manajemen Keranjang:** Menambah, mengubah, dan menghapus item pesanan dengan mudah.
* **Checkout & Pembayaran:** Alur pembayaran yang aman dengan berbagai opsi (simulasi).
* **Pelacakan Pesanan:** Memantau status pesanan (*Pending, Cooking, Ready, Completed*) secara langsung.

### 2. 🏪 Modul Restoran (Merchant)
* **Dashboard Profiling:** Mengatur informasi restoran (Logo, Banner, Deskripsi, Jam Buka).
* **Manajemen Menu (CRUD):** Menambah menu baru, mengedit harga, dan mengatur ketersediaan stok.
* **Penerimaan Pesanan:** Notifikasi pesanan masuk dan fitur untuk memperbarui status pesanan pelanggan.
* **Laporan Penjualan:** Ringkasan pendapatan harian dan item terlaris.

### 3. 🛡️ Modul Admin
* **User Management:** Memantau dan mengelola data pengguna (Pelanggan & Mitra Restoran).
* **Platform Monitoring:** Statistik global mengenai total transaksi dan aktivitas platform.
* **Content Moderation:** Validasi pendaftaran restoran baru.

## 🛠️ Teknologi yang Digunakan (Tech Stack)

Proyek ini dibangun menggunakan arsitektur modern untuk memastikan performa dan skalabilitas:

* **Frontend:**
    * [Vue.js 3](https://vuejs.org/) (Composition API & Script Setup)
    * [Vite](https://vitejs.dev/) (Build Tool)
    * [Tailwind CSS v4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/) (Styling)
    * [Pinia](https://pinia.vuejs.org/) (State Management)
* **Backend (Simulasi/Placeholder):**
    * Node.js / Express (Opsional untuk pengembangan lanjut)
* **Database:**
    * MySQL / PostgreSQL (Disarankan)
* **Tools & Utilitas:**
    * ESLint & Prettier (Code Quality)
    * Git (Version Control)
    * Swiper.js (Carousel Interactive)

## 🗂️ Struktur Database (ERD)

***SOON!***

## ⚙️ Prasyarat (Prerequisites)

Sebelum menjalankan proyek ini di komputer lokal, pastikan Anda telah menginstal:

* **Node.js** (Versi 18.x atau terbaru)
* **NPM** (Biasanya terinstal otomatis bersama Node.js) atau **Yarn**
* **Git**

## 🚀 Cara Instalasi & Menjalankan

Ikuti langkah-langkah berikut untuk menjalankan proyek di lingkungan lokal (Local Development):

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/username/yummix-fnd.git](https://github.com/username/yummix-fnd.git)
    cd yummix-fnd
    ```

2.  **Instalasi Dependensi**
    ```bash
    npm install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```

4.  **Akses Aplikasi**
    Buka browser dan kunjungi `http://localhost:5173` (atau port lain yang ditampilkan di terminal).

## 📖 Dokumentasi API (Opsional)

***SOON!***

## 📸 Tampilan Aplikasi

***SOON!***

## 📄 Lisensi

Proyek ini didistribusikan di bawah lisensi **MIT**. Lihat file `LICENSE` untuk informasi lebih lanjut.

---
Dibuat dengan ❤️ oleh azrlb.