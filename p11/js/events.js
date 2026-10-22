import { pilihKategori, tambahFavorit, aturUlang } from "./state.js";

export function pasangPendengar() {
  const tombolFilter = document.querySelector("#filter");

  // Menangani tombol filter
  if (tombolFilter) {
    tombolFilter.addEventListener("click", (event) => {
      const tombol = event.target.closest("button");

      if (!tombol || !tombolFilter.contains(tombol)) return;

      pilihKategori(tombol.dataset.kategori);
    });
  }

  // Menangani tombol favorit
  const daftar = document.querySelector("#daftar");

  if (daftar) {
    daftar.addEventListener("click", (event) => {
      const tombol = event.target.closest(".favorit");

      if (!tombol || !daftar.contains(tombol)) return;

      const id = Number(tombol.dataset.id);
      tambahFavorit(id);
    });
  }

  // Menangani tombol atur ulang
  const tombolAturUlang = document.querySelector("#atur-ulang");

  if (tombolAturUlang) {
    tombolAturUlang.addEventListener("click", () => {
      aturUlang();
    });
  }

  // Menangani formulir game
  const formGame = document.querySelector("#form-game");

  if (formGame) {
    const namaGame = document.querySelector("#nama-game");
    const platform = document.querySelector("#platform");
    const tahun = document.querySelector("#tahun");
    const rating = document.querySelector("#rating");
    const tombolTambah = document.querySelector("#tombol-tambah-game");

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

    let sudahDikirim = false;

    function periksaKolom(kolom) {
      const sah = kolom.periksa(kolom.input.value);

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

    function periksaSemuaKolom() {
      return kolomForm.map(periksaKolom).every(Boolean);
    }

    kolomForm.forEach((kolom) => {
      kolom.input.addEventListener("input", () => {
        periksaKolom(kolom);
      });
    });

    formGame.addEventListener("submit", (event) => {
      event.preventDefault();
      sudahDikirim = true;

      if (!periksaSemuaKolom()) {
        const kolomSalah = kolomForm.find(
          (kolom) => !kolom.periksa(kolom.input.value),
        );

        kolomSalah?.input.focus();
        return;
      }

      console.log("Semua kolom sudah valid.");
    });

    kolomForm.forEach((kolom) => {
      kolom.pesan.textContent = "";
      kolom.input.removeAttribute("aria-invalid");
    });

    tombolTambah.disabled = false;
  }
}
