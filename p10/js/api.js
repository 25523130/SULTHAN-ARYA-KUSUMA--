const ALAMAT =
  "https://raw.githubusercontent.com/25523130/SULTHAN-ARYA-KUSUMA--/52f51fc962a3b11523ac945533aa3d75ae21a0fd/p10/data/proyek.json";

export async function ambilProyek() {
  try {
    const respons = await fetch(ALAMAT);

    if (!respons.ok) {
      throw new Error("Status " + respons.status);
    }

    const data = await respons.json();
    return data;
  } catch (galat) {
    console.error("Gagal memuat data:", galat.message);
    throw galat;
  }
}
