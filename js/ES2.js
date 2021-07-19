// ES 2
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var studenti = [
  {
    nome: "Pasquale",
    cognome: "Raso",
    eta: "38",
  },
  {
    nome: "Nicola",
    cognome: "Riso",
    eta: "20",
  },
  {
    nome: "Francesco",
    cognome: "Nanni",
    eta: "31",
  },
  {
    nome: "Antonella",
    cognome: "Bianco",
    eta: "18",
  },
];
for (var i = 0; i < studenti.length; i++) {
  var appoggio = "";
  for (var proprieta in studenti[i]) {
  }
  console.log(studenti[i].nome + " " + studenti[i].cognome);
}

var newStudente = {};
studenti.push(newStudente);

var nomeInput = prompt("inserisci un nome ");
var cognomeInput = prompt("inserisci un cognome");
while (isNaN(etaInput)) {
  var etaInput = parseInt(prompt("inserisci l'età "));
}

newStudente.nome = nomeInput;
newStudente.cognome = cognomeInput;
newStudente.eta = etaInput;

for (var y = 0; y < studenti.length; y++) {
  console.log(
    "Il nuovo studente inserito è: " +
      nomeInput +
      " " +
      cognomeInput +
      " " +
      "Di anni: " +
      etaInput
  );
}
var resoconto = nomeInput + cognomeInput + etaInput;
var print = (document.getElementById("stampa").innerHTML = resoconto);
