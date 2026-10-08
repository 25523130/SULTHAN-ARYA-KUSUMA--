const nama = "Sulthan Arya Kusuma";

const peran = "Mahasiswa Informatika";

const keahlian = ["HTML", "CSS", "JavaScript"];

const jumlahProyek = 3;

// Nilai bawaan menggunakan ??
const alamat = "Ternate";
const alamatTampil = alamat ?? "Alamat belum diisi";

// Akses aman menggunakan ?.
const profilTambahan = {
  kontak: {
    email: "25523130@student.uii.ac.id",
  },
};

const email = profilTambahan.kontak?.email;

// Template literal
const kalimatProfil = `Nama saya ${nama}, saya adalah ${peran} dan memiliki ${keahlian.length} keahlian.`;

// Menampilkan data ke Console
console.log(kalimatProfil);
console.log("Nama:", nama);
console.log("Peran:", peran);
console.log("Keahlian:", keahlian);
console.log("Jumlah proyek:", jumlahProyek);
console.log("Alamat:", alamatTampil);
console.log("Email:", email);

// Mengecek tipe data
console.log(typeof nama);
console.log(typeof jumlahProyek);

// Fungsi untuk membuat kalimat perkenalan
function buatPerkenalan(nama, peran) {
  return `Halo, saya ${nama}, saya adalah ${peran}.`;
}

// Fungsi untuk mengubah daftar keahlian menjadi teks
function formatKeahlian(daftar) {
  return daftar.join(", ");
}

// Menggunakan fungsi
const perkenalan = buatPerkenalan(nama, peran);

const daftarKeahlian = formatKeahlian(keahlian);

// Menampilkan hasil fungsi
console.log("Perkenalan:", perkenalan);
console.log("Daftar keahlian:", daftarKeahlian);

// Object profil
const profil = {
  nama: nama,
  peran: peran,
  keahlian: keahlian,
};

// Array of object daftar proyek
const daftarProyek = [
  {
    judul: "Koleksi Game",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Halaman Profil",
    tahun: 2026,
    selesai: true,
  },
  {
    judul: "Stress Shield",
    tahun: 2026,
    selesai: false,
  },
];

// Mengambil judul dari setiap proyek
const judulProyek = daftarProyek.map((proyek) => proyek.judul);

console.log("Judul proyek:", judulProyek);

// Mengambil proyek yang sudah selesai
const selesai = daftarProyek.filter((proyek) => proyek.selesai);

console.log("Proyek yang sudah selesai:");
console.table(selesai);

// Mencari satu proyek berdasarkan judul
const katalog = daftarProyek.find((proyek) => proyek.judul === "Koleksi Game");

console.log("Hasil find:", katalog);

// Menampilkan keahlian sebagai tabel
console.table(profil.keahlian);

// Menampilkan seluruh daftar proyek
console.table(daftarProyek);

// Menampilkan proyek yang selesai
console.table(selesai);

// Membuat salinan agar data asli tidak berubah
const urut = [...daftarProyek].sort((a, b) => a.tahun - b.tahun);

console.log("Daftar proyek terurut:");
console.table(urut);

// Memastikan data asli tetap ada
console.log("Daftar proyek asli:");
console.table(daftarProyek);

const judul = document.querySelector("h1");

console.log("Judul halaman:", judul.textContent);

const judulHalaman = document.querySelector("h1");

judulHalaman.textContent = "Koleksi Game Saya - P8";

console.log("Judul berhasil diubah:", judulHalaman.textContent);

judulHalaman.style.color = "black";

console.log("Warna judul berhasil diubah");

console.table(keahlian);
console.table(daftarProyek);

console.error("Contoh pesan galat untuk latihan debugging");
