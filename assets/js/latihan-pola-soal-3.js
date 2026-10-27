function jalankanSoal10(){
const tinggi = 5;
const lebar = 8;

for (let baris = 1; baris <= tinggi; baris++) {
  if (baris === 1 || baris === tinggi) {
    console.log("*".repeat(lebar));
  } else {
    console.log("*" + " ".repeat(lebar - 2) + "*");
  }
}
}