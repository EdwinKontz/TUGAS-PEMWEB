function jalankanSoal7() {
function balikString(teks) {
  let hasil = "";

  for (let i = teks.length - 1; i >= 0; i--) {
    hasil += teks[i];
  }

  return hasil;
}

let teks = prompt("Masukkan teks:");
console.log("Hasil: " + balikString(teks));
}