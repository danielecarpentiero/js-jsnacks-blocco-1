let n = +prompt("Inserisci un numero:");
let arrayN = [];

for (let i = 0; i < n; i++) {
  let arrayNTwo = [];
  for (let j = 0; j < 10; j++) {
    arrayNTwo.push(Math.floor(Math.random() * 100) + 1);
  }
  arrayN.push(arrayNTwo);
}

console.log(arrayN);
