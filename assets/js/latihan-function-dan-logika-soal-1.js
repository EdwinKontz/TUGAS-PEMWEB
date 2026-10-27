function jalankanSoal5(){
function fizzBuzz(angka) {
  if (angka % 15 === 0) {
    return "FizzBuzz";
  } else if (angka % 3 == 0) {
    return "Fizz";
  } else if (angka % 5 == 0) {
    return "Buzz";
  } else {
    return angka;
  }
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
}