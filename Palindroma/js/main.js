// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
const insertWord = prompt("Inserisci una parola");
console.log(insertWord);

const invertedWord = InvertedWord();
console.log(invertedWord);

if (insertWord !== invertedWord) {
  alert("La parola non è palindroma");
} else {
  alert("La parola è palindroma");
}

function InvertedWord() {
  let word = insertWord.split("");
  word = word.reverse();
  const reverseWord = word.join("");
  return reverseWord;
}
