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

for (let i = 0; i < studenti.length; i++) {
  var stu = studenti[i];
  console.log(stu.nome + " " + stu.cognome);
}
var chiediUtente = prompt("inserisci nome");
studenti.nome = chiediUtente;
var chiediUtente2 = prompt("inserisci cognome");
studenti.cognome = chiediUtente2;
var chiediUtente3 = prompt("inserisci età");
studenti.età = chiediUtente3;
console.log(studenti);
// var base = stu.nome + " " + stu.cognome;
// var printproprieta = document.getElementById("proprità");
// printproprieta.innerHTML = base;
