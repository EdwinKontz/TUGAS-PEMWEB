function jalankanSoal15(){
const tinggi = 5;

for (let baris = 1; baris <= tinggi; baris++) {
  const spasi = " ".repeat(tinggi - baris);

  if (baris === 1) {
    console.log(spasi + "*");
  } else if (baris === tinggi) {
    console.log("*".repeat(2 * tinggi - 1));
  } else {
    console.log(spasi + "*" + " ".repeat(2 * baris - 3) + "*");
  }
}
}