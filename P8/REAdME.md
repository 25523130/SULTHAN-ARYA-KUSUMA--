# PABW — Sulthan Arya Kusuma — 25523130

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi
Berbasis Web.

## Pertemuan 3 — Halaman profil saya

Topik halaman saya: koleksi game yang pernah saya mainkan.

- Judul halaman: Koleksi Game Saya
- Isi tabel: judul game, platform, tahun bermain, rating
- Isi form: tambah game
- Gambar: koleksi game

#catatan penggunaan ai

-saya menggunakan claude ai dan chatgpt untuk membantu saya dalam membuat tugas

## Pertemuan 4 — Design token halaman profil

Pada Pertemuan 4, saya menerapkan CSS Fundamental dan Design Token pada halaman profil yang telah dibuat pada Pertemuan 3.

### Berkas CSS

Berkas CSS yang digunakan pada halaman profil:

- `tokens.css` — menyimpan design token warna, spacing, radius, shadow, dan ukuran teks.
- `base.css` — berisi aturan dasar dan reset CSS.
- `layout.css` — mengatur layout halaman menggunakan Flexbox dan gap.
- `komponen.css` — mengatur komponen seperti form, input, tombol, dan focus state.
- `tema.css` — mengatur tema gelap atau dark theme.

### Warna utama

Warna utama yang saya pilih adalah `#2563EB` (biru).

Saya memilih warna ini karena memberikan tampilan yang jelas dan sederhana pada halaman profil. Warna tersebut digunakan sebagai warna utama untuk tombol, tautan, dan penanda agar elemen penting mudah dikenali.

### Design token yang saya tetapkan

| Token             | Nilai                       | Untuk apa                             |
| ----------------- | --------------------------- | ------------------------------------- |
| `--color-bg`      | `#F5F7FA`                   | Latar halaman                         |
| `--color-fg`      | `#1F2937`                   | Warna teks utama                      |
| `--color-surface` | `#FFFFFF`                   | Latar kartu dan panel                 |
| `--color-border`  | `#CBD5E1`                   | Garis pemisah dan tepi kotak          |
| `--color-primary` | `#2563EB`                   | Tombol, tautan, dan penanda           |
| `--color-danger`  | `#B91C1C`                   | Peringatan dan isian yang tidak valid |
| `--color-focus`   | `#2563EB`                   | Garis fokus saat menggunakan keyboard |
| `--space-1`       | `0.25rem`                   | Jarak paling rapat                    |
| `--space-2`       | `0.5rem`                    | Jarak antar label dan isian           |
| `--space-3`       | `0.75rem`                   | Jarak di dalam kartu                  |
| `--space-4`       | `1rem`                      | Jarak standar antar elemen            |
| `--space-6`       | `1.5rem`                    | Jarak antar bagian halaman            |
| `--radius-md`     | `0.5rem`                    | Sudut tombol, kartu, dan isian        |
| `--radius-full`   | `999px`                     | Bentuk penuh seperti lencana          |
| `--shadow-1`      | `0 1px 3px rgba(0,0,0,.10)` | Bayangan halus kartu                  |
| `--text-sm`       | `0.875rem`                  | Keterangan dan teks bantu             |
| `--text-md`       | `1rem`                      | Teks isi                              |
| `--text-xl`       | `1.5rem`                    | Judul bagian                          |
| `--text-3xl`      | `2.25rem`                   | Judul halaman                         |

### Kriteria selesai

Kriteria selesai saya adalah mengubah warna utama halaman di satu baris pada `tokens.css`. Setelah perubahan tersebut, warna pada tombol, tautan, judul, dan garis fokus harus ikut berubah tanpa perlu mengubah CSS pada masing-masing komponen.

saya menggunakan claude ai dan chatgpt untuk membantu saya dalam membuat tugas

## Pertemuan 8 — Membuat Halaman Profil yang Datanya Bergerak

Pada Pertemuan 8, saya mempelajari JavaScript Modern ES6+, struktur data, array methods, dan debugging. Pada pertemuan ini, halaman profil yang sebelumnya sebagian besar berisi data secara langsung di HTML mulai dikembangkan agar datanya dapat disimpan dan diolah menggunakan JavaScript.

### Lembar A — Menyambungkan Skrip ke Halaman

Pada bagian ini, saya menghubungkan JavaScript dengan halaman `profil.html`. Saya membuat folder `js/` dan file `app.js`, kemudian menghubungkannya menggunakan:

`<script type="module" src="js/app.js"></script>`

Halaman dijalankan menggunakan Live Server agar JavaScript dengan tipe module dapat berjalan melalui server lokal. Saya juga memeriksa Console untuk memastikan tidak terdapat error atau kesalahan pada pemanggilan file JavaScript.

### Lembar B — Data Halaman sebagai Variabel

Pada bagian ini, saya memindahkan beberapa data halaman profil ke dalam JavaScript menggunakan variabel `const` dan `let`. Data yang digunakan antara lain nama, peran, daftar keahlian, dan jumlah proyek.

Saya juga mempelajari tipe data seperti `string` dan `number`, penggunaan `typeof`, template literal untuk membuat kalimat dari beberapa nilai, serta penggunaan operator `??` dan `?.` untuk menangani data yang belum tersedia atau akses properti yang aman.

Contoh data yang digunakan:

- Nama: Sulthan Arya Kusuma
- Peran: Mahasiswa Informatika
- Keahlian: HTML, CSS, JavaScript
- Jumlah proyek: 3

### Lembar C — Membuat Fungsi Murni

Pada bagian ini, saya membuat dua fungsi murni yang memiliki tugas berbeda. Fungsi pertama digunakan untuk membuat kalimat perkenalan berdasarkan nama dan peran, sedangkan fungsi kedua digunakan untuk menggabungkan daftar keahlian menjadi sebuah teks.

Fungsi menggunakan parameter dan `return` sehingga hasilnya dapat digunakan kembali. Fungsi juga tidak mengubah nilai yang berada di luar fungsi.

### Lembar D — Struktur Data dan Array Methods

Pada bagian ini, saya membuat object untuk menyimpan data profil dan array of object untuk menyimpan daftar proyek.

Data proyek kemudian diolah menggunakan beberapa array methods JavaScript, yaitu:

- `map()` untuk mengambil atau mengubah data menjadi array baru.
- `filter()` untuk mengambil data yang memenuhi kondisi tertentu.
- `find()` untuk mencari satu data yang sesuai dengan kondisi.
- `sort()` untuk mengurutkan data.

Saya juga menggunakan `console.table()` untuk melihat data dalam bentuk tabel sehingga lebih mudah diperiksa melalui Console. Saat menggunakan `sort()`, saya membuat salinan array terlebih dahulu agar data asli tidak berubah.

### Lembar E — Membaca Galat dan Debugging

Pada bagian ini, saya mempelajari cara menemukan dan memahami kesalahan pada JavaScript melalui Console. Saya menggunakan beberapa perintah seperti `console.log()`, `console.table()`, dan `console.error()` untuk memeriksa nilai dan struktur data.

Saya juga belajar bahwa pesan error dapat digunakan untuk mengetahui jenis kesalahan, lokasi file, dan baris kode yang bermasalah. Dengan membaca pesan tersebut, proses memperbaiki kode menjadi lebih mudah dibandingkan hanya menghapus baris yang dianggap bermasalah.

### Lembar F — Pemeriksaan dan Penilaian Mandiri

Pada bagian ini, saya melakukan pemeriksaan akhir terhadap pekerjaan yang telah dibuat. Pemeriksaan meliputi keberadaan `profil.html`, folder `js/`, file `app.js`, penggunaan `const`, fungsi murni, array methods `map`, `filter`, dan `find`, serta kondisi Console.

Saya juga mengerjakan tiket keluar yang berisi pertanyaan mengenai variabel, `const` dan `let`, spread operator, `querySelector`, serta pengolahan nilai dari input. Selain itu, saya melakukan penilaian mandiri dan menuliskan bagian yang masih sulit serta materi yang ingin dibahas pada pertemuan berikutnya.

### Lembar G — Menyimpan Perubahan ke Git dan GitHub

Setelah menyelesaikan pekerjaan, saya menyimpan perubahan menggunakan Git. Perintah yang digunakan adalah:

- `git add .` untuk menambahkan perubahan.
- `git commit -m "pesan"` untuk menyimpan perubahan ke riwayat Git.
- `git push` untuk mengirim perubahan ke repositori GitHub.

Penyimpanan dilakukan agar hasil pekerjaan Pertemuan 8 tidak hanya tersimpan di komputer, tetapi juga tersedia di repositori GitHub.

### Lembar H — Rubrik Penilaian

Bagian H merupakan lampiran rubrik penilaian untuk Pertemuan 8. Penilaian mencakup beberapa aspek, yaitu sintaks dan tipe data, fungsi murni, penggunaan array methods, penanganan galat dan kebersihan Console, serta kebersihan kode, deklarasi AI, dan commit.

Rubrik ini digunakan untuk melihat sejauh mana pekerjaan telah memenuhi kriteria yang ditentukan pada worksheet.

### Catatan Penggunaan AI

Saya menggunakan Claude AI dan ChatGPT sebagai alat bantu untuk memahami JavaScript ES6+, fungsi, struktur data, array methods, dan debugging. Kode kemudian saya sesuaikan, jalankan, dan uji sendiri menggunakan VS Code, Live Server, dan browser.
