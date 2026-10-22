import { saring } from "./data.js";

const daftar = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");

// Membuat kartu proyek beserta tombol favorit
export function buatKartu(proyek, favorit) {
  const item = document.createElement("li");
  item.className = "kartu";

  const judul = document.createElement("h3");
  judul.textContent = proyek.judul;

  const tahun = document.createElement("p");
  tahun.textContent = `Tahun: ${proyek.tahun}`;

  const kategori = document.createElement("p");
  kategori.textContent = `Kategori: ${proyek.kategori}`;

  const status = document.createElement("p");
  status.textContent = proyek.selesai
    ? "Status: Selesai"
    : "Status: Belum selesai";

  const tombol = document.createElement("button");
  tombol.className = "favorit";
  tombol.dataset.id = proyek.id;
  tombol.textContent = favorit.includes(proyek.id) ? "★" : "☆";
  tombol.setAttribute("aria-label", `Favorit ${proyek.judul}`);

  item.append(judul, tahun, kategori, status, tombol);

  return item;
}

// Menampilkan proyek berdasarkan state
export function render(state) {
  daftar.textContent = "";

  const tampil = saring(state.daftarProyek, state.kategoriAktif);

  if (tampil.length === 0) {
    kosong.textContent = "Belum ada proyek.";
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  tampil.forEach((proyek) => {
    daftar.append(buatKartu(proyek, state.favorit));
  });

  tandaiTombolAktif(state.kategoriAktif);
}

// Menandai tombol kategori yang aktif
export function tandaiTombolAktif(kategoriAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol.dataset.kategori === kategoriAktif);
  });
}

// Mengatur indikator loading
export function aturMemuat(aktif) {
  const indikator = document.querySelector("#memuat");

  if (indikator) {
    indikator.hidden = !aktif;
  }
}

// Menampilkan pesan kesalahan
export function tampilkanGalat(pesan) {
  daftar.textContent = "";
  kosong.textContent = pesan;
  kosong.hidden = false;
}
