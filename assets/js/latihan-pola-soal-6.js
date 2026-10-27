function jalankanSoal13(){
const tinggi = 4; 


for (let baris = 1; baris <= tinggi; baris++) {
  const spasi = tinggi - baris;
  const bintang = 2 * baris - 1;
  console.log(" ".repeat(spasi) + "*".repeat(bintang));
}

//Bag ian bawah (mengecil)
for (let baris = tinggi - 1; baris >= 1; baris--) {
  const spasi = tinggi - baris;
  const bintang = 2 * baris - 1;
  console.log(" ".repeat(spasi) + "*".repeat(bintang));
}
}