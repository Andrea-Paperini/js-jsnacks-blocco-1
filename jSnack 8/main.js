var numero = (prompt("Inserisci un numero di 4 cifre"));
console.log(numero);
var risultato = 0;
if (numero >= 0 && numero < 9999) {
    for (var i = 0; i < 4; i++) {
        risultato = risultato + parseInt(numero[i]);
    }
    console.log(risultato);
} else {
    alert("Inserisci un numero valido")
}
