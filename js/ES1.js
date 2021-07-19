// Descrizione:
// ES 1
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo (in pagina) attraverso un ciclo for-in tutte le proprietà dell'oggetto.

var utente = {
  nome: "Pasquale",
  cognome: "Raso",
  eta: "38",
};

for (var Pas in utente) {
  console.log(Pas + ": " + utente[Pas]);
  var printproprieta = document.getElementById("proprità");
  printproprieta.innerHTML += Pas + ": " + utente[Pas] + "<br />";
}
