# YUMMIX.FNB - Platform Pemesanan Makanan & Profiling Restoran

## Tentang Proyek

**YUMMIX.FNB** adalah platform web terintegrasi yang dirancang untuk menjembatani kesenjangan antara pencinta kuliner dan penyedia layanan makanan. Aplikasi ini tidak hanya berfungsi sebagai alat pemesanan makanan *online*, tetapi juga sebagai media *profiling* digital bagi restoran untuk membangun identitas merek mereka.

Diciptakan untuk memecahkan masalah efisiensi dalam manajemen pesanan dan keterbatasan eksposur digital bagi restoran UMKM, YUMMIX.FNB menawarkan solusi *end-to-end* mulai dari pencarian menu hingga pelacakan pesanan secara *real-time*.

## Fitur Utama

Aplikasi ini dibagi menjadi tiga modul utama berdasarkan peran pengguna:

### 1. Modul Pelanggan (Customer)
* **Pencarian Cerdas:** Mencari makanan berdasarkan kategori, nama restoran, atau rentang harga.
* **Profil Restoran:** Melihat detail restoran, jam operasional, dan ulasan pelanggan lain.
* **Manajemen Keranjang:** Menambah, mengubah, dan menghapus item pesanan dengan mudah.
* **Checkout & Pembayaran:** Alur pembayaran yang aman dengan berbagai opsi (simulasi).
* **Pelacakan Pesanan:** Memantau status pesanan (*Pending, Cooking, Ready, Completed*) secara langsung.

### 2. Modul Restoran (Merchant)
* **Dashboard Profiling:** Mengatur informasi restoran (Logo, Banner, Deskripsi, Jam Buka).
* **Manajemen Menu (CRUD):** Menambah menu baru, mengedit harga, dan mengatur ketersediaan stok.
* **Penerimaan Pesanan:** Notifikasi pesanan masuk dan fitur untuk memperbarui status pesanan pelanggan.
* **Laporan Penjualan:** Ringkasan pendapatan harian dan item terlaris.

### 3. Modul Admin
* **User Management:** Memantau dan mengelola data pengguna (Pelanggan & Mitra Restoran).
* **Platform Monitoring:** Statistik global mengenai total transaksi dan aktivitas platform.
* **Content Moderation:** Validasi pendaftaran restoran baru.

## 🛠️ Teknologi & Implementasi Teknis

Proyek ini dibangun menggunakan arsitektur modern untuk memastikan performa, skalabilitas, dan pengalaman pengembang (DX) yang baik:

### Styling & Responsiveness
* **Tailwind CSS v4:** Framework *utility-first* untuk styling yang cepat dan konsisten.
* **Responsive Design:** Aplikasi dirancang sepenuhnya responsif (Mobile-First approach). Tampilan beradaptasi secara otomatis pada berbagai ukuran layar (Mobile, Tablet, Desktop) menggunakan breakpoint Tailwind (`sm:`, `md:`, `lg:`).

### Navigasi & Logika
* **Vue Router:** Mengelola navigasi *Single Page Application (SPA)*.
    * Mendukung *Nested Routes* (Layout Admin vs Layout Customer).
    * Implementasi *Dynamic Routing* (misal: `/menu/:id` untuk detail produk).
    * *Navigation Guards* untuk membatasi akses halaman Admin.
    * * `/about untuk routing baru
* **Vue Directives:** Penggunaan ekstensif direktif Vue untuk manipulasi DOM yang efisien:
    * `v-if`, `v-show`, `v-for`: Logika rendering kondisional dan list.
    * `v-model`: Two-way data binding pada form input.
    * **Custom Directives:** Implementasi direktif kustom seperti `v-animate` untuk efek animasi scroll (*scroll reveal*).

Dibuat dengan ❤️ oleh azrlb.