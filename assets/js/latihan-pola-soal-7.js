function jalankanSoal14() {
const tinggi = 4; 


for (let baris = tinggi; baris >= 1; baris--) {
  const spasi = tinggi - baris;
  const bintang = 2 * baris - 1;
  console.log(" ".repeat(spasi) + "*".repeat(bintang));
}


for (let baris = 2; baris <= tinggi; baris++) {
  const spasi = tinggi - baris;
  const bintang = 2 * baris - 1;
  console.log(" ".repeat(spasi) + "*".repeat(bintang));
}
}