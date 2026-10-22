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

## Pertemuan 9 — DOM, Event, dan Interaktivitas

### A. Tujuan Pembelajaran

Pada pertemuan ini, saya mempelajari cara menggunakan JavaScript untuk memilih dan mengelola elemen HTML, menampilkan data secara dinamis, menangani event, serta melakukan validasi form. Saya juga mempelajari cara memisahkan kode JavaScript ke dalam beberapa berkas agar lebih terstruktur dan mudah dipelihara.

### B. Pemilihan Elemen DOM

Saya menggunakan `document.querySelector()` untuk mengambil elemen HTML berdasarkan ID, seperti `#daftar`, `#kosong`, dan `#filter`. Elemen yang sudah dipilih disimpan dalam variabel agar dapat digunakan kembali di dalam kode JavaScript.

### C. Render Data Proyek

Daftar proyek ditampilkan berdasarkan array `daftarProyek` yang berada di `js/app.js` dan diimpor ke `js/dom.js`.

Saya menggunakan beberapa metode DOM, yaitu:

- `document.createElement()` untuk membuat elemen baru.
- `textContent` untuk mengisi teks.
- `append()` untuk memasukkan elemen ke dalam wadah.
- `daftar.textContent = ""` untuk mengosongkan wadah sebelum menampilkan data baru.

Dengan cara ini, daftar proyek dapat ditampilkan secara dinamis tanpa menuliskan setiap kartu secara langsung di HTML.

### D. Event dan Event Delegation

Saya menerapkan event delegation dengan memasang satu `addEventListener("click", ...)` pada elemen induk `#filter`. Saya menggunakan `event.target.closest("button")` untuk mengetahui tombol yang ditekan dan `dataset.kategori` untuk membaca kategori filter.

Fitur filter memungkinkan pengguna menampilkan seluruh proyek, proyek kategori Web, atau proyek kategori Aplikasi. Saya juga menggunakan `classList.toggle()` untuk menandai tombol filter yang sedang aktif.

### E. Validasi Form

Saya membuat validasi pada form Tambah Game untuk memeriksa nama game, platform, tahun bermain, dan rating. Validasi dilakukan dengan memeriksa apakah kolom sudah diisi dan apakah nilai tahun serta rating berada dalam rentang yang ditentukan.

Saya menggunakan `event.preventDefault()` untuk mencegah pengiriman form secara bawaan. Pesan galat ditampilkan pada kolom yang tidak valid dan dihilangkan ketika isinya sudah benar.

### F. Pembagian Berkas

Berkas yang digunakan dalam pengerjaan ini meliputi:

- `profil.html` sebagai struktur halaman.
- Berkas CSS untuk mengatur tampilan halaman.
- `js/app.js` untuk menyimpan data proyek dan fungsi yang digunakan bersama.
- `js/dom.js` untuk mengelola elemen DOM, menampilkan proyek, menangani filter, dan memvalidasi form.

### G. Hasil Pembelajaran

Melalui latihan ini, saya memahami bahwa JavaScript dapat digunakan untuk mengubah tampilan halaman berdasarkan data dan interaksi pengguna. Saya juga belajar bahwa penggunaan DOM yang tepat, event delegation, dan validasi form dapat membuat halaman lebih interaktif dan terstruktur.

### H. Deklarasi Penggunaan AI

Saya menggunakan ChatGPT sebagai alat bantu untuk memahami konsep DOM, event delegation, validasi form, dan memperbaiki kode JavaScript yang mengalami masalah. AI juga membantu memberikan penjelasan dan contoh kode serta membantu menyusun dokumentasi README.

Saya tetap menjalankan dan menguji kode pada proyek saya, memeriksa hasilnya melalui browser, serta menyesuaikan kode dengan kebutuhan halaman profil dan instruksi worksheet. Pemilihan topik koleksi game, isi data proyek, dan pengujian hasil akhir dilakukan berdasarkan proyek yang saya kerjakan sendiri.

## Pertemuan 11 — Modul, State, dan Penyimpanan Klien

### A. Tujuan Pertemuan

Mempelajari cara membagi kode JavaScript menjadi beberapa modul, memisahkan state dari tampilan, serta menyimpan pilihan pengguna menggunakan `localStorage`.

### B. Pembagian Modul JavaScript

Pada pertemuan ini, kode JavaScript dibagi menjadi beberapa berkas berdasarkan tanggung jawabnya.

- `data.js` — menyimpan data profil dan fungsi pengolahan data.
- `state.js` — mengelola keadaan aplikasi, kategori aktif, favorit, dan penyimpanan.
- `dom.js` — mengatur tampilan halaman berdasarkan state.
- `events.js` — mengatur interaksi pengguna dan pendengar peristiwa.
- `app.js` — menghubungkan modul dan menjalankan aplikasi.
- `api.js` — mengambil data proyek dari berkas JSON.

### C. Export dan Import

`export` digunakan untuk menyediakan fungsi atau variabel agar bisa digunakan oleh berkas lain, sedangkan `import` digunakan untuk mengambilnya.

Contoh:

```js
import { render } from "./dom.js";
```

Jalur `./dom.js` menunjukkan lokasi relatif modul yang akan digunakan. Jalur harus ditulis dengan benar agar tidak terjadi galat impor.

### D. State dan Render

State merupakan tempat untuk menyimpan keadaan aplikasi, seperti daftar proyek, kategori aktif, dan daftar favorit.

```js
export const state = {
  daftarProyek: [],
  kategoriAktif: "semua",
  favorit: [],
};
```

Perubahan state dilakukan melalui fungsi pengubah. Setelah state berubah, `render(state)` dipanggil untuk memperbarui tampilan berdasarkan keadaan aplikasi terbaru.

### E. Penyimpanan dengan localStorage

`localStorage` digunakan untuk mempertahankan pilihan pengguna setelah halaman dimuat ulang atau tab ditutup.

- `JSON.stringify()` — mengubah objek menjadi teks JSON.
- `JSON.parse()` — mengubah teks JSON menjadi objek JavaScript.
- `localStorage.setItem()` — menyimpan data.
- `localStorage.getItem()` — membaca data.
- `localStorage.removeItem()` — menghapus data simpanan.

Pada proyek P11, kategori aktif dan daftar favorit disimpan dalam `localStorage`, sedangkan data proyek dimuat melalui `api.js`.

### F. Penanganan Simpanan Rusak

Simpanan yang rusak dapat menyebabkan `JSON.parse()` menghasilkan galat. Untuk mengatasinya, fungsi `muat()` menggunakan `try...catch` dan pemeriksaan nomor versi.

Jika data tidak valid atau versinya tidak sesuai, simpanan dihapus dan aplikasi kembali menggunakan nilai bawaan.

Pengujian dilakukan menggunakan Console:

```js
localStorage.setItem("pabw-p11", "bukan-json");
```

Setelah halaman dimuat ulang, simpanan yang rusak seharusnya dihapus dan halaman tetap berjalan.

### G. Pengujian Aplikasi

1. Memastikan halaman berjalan tanpa galat impor.
2. Menguji filter kategori dan tombol favorit.
3. Memuat ulang halaman untuk memastikan kategori dan favorit tetap tersimpan.
4. Menguji tombol atur ulang untuk menghapus simpanan.
5. Menguji simpanan rusak dan versi yang tidak sesuai melalui Console.

### H. Referensi Cepat JavaScript

| Yang Dipakai                     | Perannya                                 | Kapan Dipakai                                               |
| -------------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| `export / import`                | Berbagi fungsi dan variabel antarberkas. | Saat modul membutuhkan fungsi atau data dari modul lain.    |
| `'./berkas.js'`                  | Menunjuk modul lain secara relatif.      | Saat menghubungkan berkas JavaScript dalam proyek.          |
| `const state = {}`               | Menampung keadaan aplikasi.              | Saat menyimpan kategori aktif, daftar proyek, dan favorit.  |
| Fungsi pengubah                  | Mengatur perubahan state.                | Saat keadaan aplikasi perlu diubah.                         |
| `render(state)`                  | Menggambar ulang tampilan.               | Saat tampilan perlu mengikuti state terbaru.                |
| `JSON.stringify()`               | Mengubah objek menjadi teks.             | Sebelum menyimpan objek ke `localStorage`.                  |
| `JSON.parse()`                   | Mengubah teks menjadi objek.             | Saat membaca data JSON dari simpanan.                       |
| `localStorage.setItem / getItem` | Menyimpan dan membaca teks.              | Saat pilihan pengguna perlu dipertahankan.                  |
| `localStorage.removeItem`        | Menghapus simpanan.                      | Saat mengatur ulang pilihan atau membuang data tidak valid. |
| Nilai bawaan `??`                | Mengganti nilai `null` atau `undefined`. | Saat data belum tersedia dan perlu nilai pengganti.         |

### I. Refleksi

Hal terpenting yang saya pelajari adalah memisahkan state dari tampilan agar perubahan data lebih teratur, pilihan pengguna dapat disimpan, dan aplikasi tetap berjalan ketika terjadi kesalahan pada simpanan.

### J. Persiapan Pertemuan 12

Memasang Node.js versi LTS dan memastikan perintah `node -v` serta `npm -v` dapat dijalankan melalui terminal. Nomor versi dicatat setelah berhasil diperiksa.

### K. Penggunaan AI

AI digunakan untuk membantu memahami materi, memeriksa kesalahan kode, dan menyusun dokumentasi README. Kode disesuaikan dan diuji berdasarkan proyek yang saya kerjakan sendiri.
