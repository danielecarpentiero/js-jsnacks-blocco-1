const numeri = [];
let sommaNumeri = 0;

for (let i = 1; i <= 10; i++) {
  const numeroString = prompt(`Inserisci il ${i}° numero`);
  const numero = Number(numeroString);

  if (!isNaN(numero)) {
    numeri.push(numero);
    sommaNumeri += numero;
  } else {
    console.log("Input non valido. Inserisci un numero valido.");
    i--; // Decrementa l'indice per ripetere la stessa iterazione
  }
}

console.log(`La somma dei numeri da te inseriti è ${sommaNumeri}`);
console.log("Array di numeri inseriti:", numeri);
