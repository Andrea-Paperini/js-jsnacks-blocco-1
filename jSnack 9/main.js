// Creo la variabile della somma
var somma = 0;
// Creo la variabile della media
var media = 0;
// inserisco il parseInt per specificare che la variabile è solo di tipo numerica
for (var i = 1; i <= 10; i++) {
    var numero = parseInt(prompt("Inserisci dei numeri a piacimento"));
    // Eseguo la somma di tutti i numeri inseriti dall'utente
    somma = numero + i;
}
console.log(somma);
// Faccio la media dividendo il totale per il "numero" dei numeri"
media = somma / 10;
console.log(media);
