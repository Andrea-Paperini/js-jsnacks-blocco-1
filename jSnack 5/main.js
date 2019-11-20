// Creo un array vuoto. Chiedo per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array
var numeri_dispari = [];
var num;
for (var i = 0; i < 6; i++) {
    num = (parseInt(prompt("Inserisci un numero")));
    console.log(num);
    if (num % 2 == 1) {
        console.log("il numero è dispari");
        numeri_dispari.push(num);
    }
}
console.log(numeri_dispari);
