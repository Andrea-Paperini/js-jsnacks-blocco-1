var numeri = [];
for (var i = 0; i < 5; i++) {
var numero = parseInt(prompt("Inserisci un numero"))
numeri.push(numero);
}
console.log(numeri);
var somma = 0;
for (var i = 0; i < numeri.lenght; i++) {
    somma = somma + numeri[i];
}
console.log(somma);
