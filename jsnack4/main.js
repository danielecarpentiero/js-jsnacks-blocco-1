let sum = 0;

while (sum < 50) {
  let input = parseInt(prompt("Inserisci un numero fino a 50"));

  if (!isNaN(input) && input <= 50) {
    console.log("Numero inserito:", input);
    sum += input;
  } else {
    alert("Inserisci un numero valido fino a 50");
  }
  if (sum > 50) {
    alert("sei andato oltre con la somma");
  }
}
console.log(sum);
