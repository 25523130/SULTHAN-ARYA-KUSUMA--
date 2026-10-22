export const profil = {
  nama: "Sulthan Arya Kusuma",
  nim: "25523130",
  programStudi: "Informatika",
  keahlian: ["HTML", "CSS", "JavaScript"],
};

export function buatPerkenalan(data) {
  return `Halo, nama saya ${data.nama}, mahasiswa Program Studi ${data.programStudi}.`;
}

export function formatKeahlian(daftarKeahlian) {
  return daftarKeahlian.join(", ");
}

export function saring(daftar, kategori) {
  if (kategori === "semua") {
    return daftar;
  }

  return daftar.filter((proyek) => proyek.kategori === kategori);
}
