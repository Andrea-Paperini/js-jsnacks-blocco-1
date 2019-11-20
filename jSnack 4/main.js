var invitati = ["andrea", "fabio", "lorenzo"];
console.log(invitati);
var nome = prompt("Inserisci il tuo nome");
console.log(nome);
var utenteinvitato = 0;
for (var i = 0; i < invitati.length; i++) {
    if (nome == invitati[i])
        // {  console.log("Benvenuto");
        if (utenteinvitato = 1) {
            console.log("Sei il benvenuto");
        } else {
            console.log("Non sei invitato");
        }
}
// Se sono entrato almeno una olta nella if sei benvenuto, altrimenti non sei invitato
