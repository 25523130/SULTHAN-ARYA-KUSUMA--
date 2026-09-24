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
