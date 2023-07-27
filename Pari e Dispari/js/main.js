// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

const choose = prompt("Scegli Pari o Dispari");
const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
ComputerNumber();
console.log;

function ComputerNumber() {
  const randomNumber = Math.floor(Math.random() * 4) + 1;
}
