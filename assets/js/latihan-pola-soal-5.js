function jalankanSoal12(){
  const tinggi = 4;
  let angka = 1;

  for (let baris = 1; baris <= tinggi; baris++) {
    let teks = " ".repeat(tinggi - baris);

    for (let kolom = 1; kolom <= baris; kolom++) {
      teks += angka;
      angka++;
    }

    console.log(teks);
  }
}