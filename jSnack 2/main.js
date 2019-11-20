var parola1 = prompt("Inserisci la prima parola");
console.log(parola1);
var parola2 = prompt("Inserisci la seconda parola");
console.log(parola2);
if (parola1.lenght == parola2.lenght) {
    console.log("è pari");
} else if (parola1.lenght > parola2.lenght) {
    console.log("la prima parola ha vinto!");
} else if (parola1.lenght < parola2.lenght) {
    console.log("la seconda parola ha vinto!");
}
