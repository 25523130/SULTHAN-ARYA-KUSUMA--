import { daftarProyek } from "./app.js";

// BAGIAN 1: Mengambil elemen HTML
const daftar = document.querySelector("#daftar");
const kosong = document.querySelector("#kosong");
const tombolFilter = document.querySelector("#filter");

// BAGIAN 2: Menampilkan daftar proyek
function renderProyek(data) {
  daftar.textContent = "";

  if (data.length === 0) {
    kosong.hidden = false;
    return;
  }

  kosong.hidden = true;

  data.forEach((proyek) => {
    const item = document.createElement("li");
    const judul = document.createElement("h3");
    const tahun = document.createElement("p");
    const kategori = document.createElement("p");
    const status = document.createElement("p");

    judul.textContent = proyek.judul;
    tahun.textContent = `Tahun: ${proyek.tahun}`;
    kategori.textContent = `Kategori: ${proyek.kategori}`;
    status.textContent = proyek.selesai
      ? "Status: Selesai"
      : "Status: Belum selesai";

    item.append(judul, tahun, kategori, status);
    daftar.append(item);
  });
}

// BAGIAN 3: Menandai tombol filter aktif
function tandaiTombolAktif(tombolAktif) {
  document.querySelectorAll("#filter button").forEach((tombol) => {
    tombol.classList.toggle("aktif", tombol === tombolAktif);
  });
}

// BAGIAN 4: Menampilkan proyek saat halaman dibuka
renderProyek(daftarProyek);

// BAGIAN 5: Filter kategori dengan event delegation
tombolFilter.addEventListener("click", (event) => {
  const tombol = event.target.closest("button");

  if (!tombol || !tombolFilter.contains(tombol)) return;

  const kategori = tombol.dataset.kategori;

  const hasilFilter =
    kategori === "semua"
      ? daftarProyek
      : daftarProyek.filter((proyek) => proyek.kategori === kategori);

  renderProyek(hasilFilter);
  tandaiTombolAktif(tombol);
});

// BAGIAN 6: Mengaktifkan filter Semua
const tombolSemua = document.querySelector(
  '#filter button[data-kategori="semua"]',
);

if (tombolSemua) {
  tandaiTombolAktif(tombolSemua);
}

// BAGIAN 7: Mengambil elemen form
const formGame = document.querySelector("#form-game");

if (formGame) {
  const namaGame = document.querySelector("#nama-game");
  const platform = document.querySelector("#platform");
  const tahun = document.querySelector("#tahun");
  const rating = document.querySelector("#rating");
  const tombolTambah = document.querySelector("#tombol-tambah-game");

  // BAGIAN 8: Aturan validasi form
  const kolomForm = [
    {
      input: namaGame,
      pesan: document.querySelector("#error-nama-game"),
      periksa: (nilai) => nilai.trim() !== "",
      petunjuk: "Nama game wajib diisi.",
    },
    {
      input: platform,
      pesan: document.querySelector("#error-platform"),
      periksa: (nilai) => nilai.trim() !== "",
      petunjuk: "Platform wajib diisi.",
    },
    {
      input: tahun,
      pesan: document.querySelector("#error-tahun"),
      periksa: (nilai) =>
        nilai.trim() !== "" && Number(nilai) >= 2000 && Number(nilai) <= 2026,
      petunjuk: "Masukkan tahun antara 2000 dan 2026.",
    },
    {
      input: rating,
      pesan: document.querySelector("#error-rating"),
      periksa: (nilai) =>
        nilai.trim() !== "" && Number(nilai) >= 1 && Number(nilai) <= 10,
      petunjuk: "Masukkan rating antara 1 dan 10.",
    },
  ];

  // BAGIAN 9: Memeriksa satu kolom
  let sudahDikirim = false;

  function periksaKolom(kolom) {
    const sah = kolom.periksa(kolom.input.value);

    // Tampilkan pesan setelah tombol ditekan
    if (sudahDikirim) {
      kolom.pesan.textContent = sah ? "" : kolom.petunjuk;

      if (sah) {
        kolom.input.removeAttribute("aria-invalid");
      } else {
        kolom.input.setAttribute("aria-invalid", "true");
      }
    }

    return sah;
  }

  // BAGIAN 10: Memeriksa seluruh kolom
  function periksaSemuaKolom() {
    return kolomForm.map((kolom) => periksaKolom(kolom)).every(Boolean);
  }

  // BAGIAN 11: Memperbarui status tombol
  function perbaruiTombol() {
    tombolTambah.disabled = false;

    if (sudahDikirim) {
      periksaSemuaKolom();
    }
  }

  kolomForm.forEach((kolom) => {
    kolom.input.addEventListener("input", () => {
      periksaKolom(kolom);
    });
  });

  // BAGIAN 12: Menangani pengiriman form
  formGame.addEventListener("submit", (event) => {
    event.preventDefault();

    sudahDikirim = true;

    const sah = periksaSemuaKolom();

    if (!sah) {
      const kolomPertamaSalah = kolomForm.find(
        (kolom) => !kolom.periksa(kolom.input.value),
      );

      kolomPertamaSalah?.input.focus();
      return;
    }

    console.log("Semua kolom sudah valid.");
  });

  // BAGIAN 13: Kondisi awal form
  kolomForm.forEach((kolom) => {
    kolom.pesan.textContent = "";
    kolom.input.removeAttribute("aria-invalid");
  });

  tombolTambah.disabled = false;
}
