"use strict";

const parola1 = prompt("Inserisci la prima parola:");
const parola2 = prompt("Inserisci la seconda parola:");

if (parola1.length > parola2.length) {
  console.log(
    `"la parola più corta è ${parola2}, mentre quella più lunga è ${parola1}"`
  );
} else if (parola2.length > parola1.length) {
  console.log(
    `"la parola più corta è ${parola1}, mentre quella più lunga è ${parola2}"`
  );
} else {
  console.log(
    `"le parole ${parola1} e ${parola2} sono della stessa lunghezza."`
  );
}
