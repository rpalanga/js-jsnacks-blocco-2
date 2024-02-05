
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.

// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50


const sumNumber = [];

let sum = 0;

do {

    const UserNumber =Number(prompt("inserisci dei numeri a piacimento"));

    sumNumber.push(UserNumber);

    sum+= UserNumber;



} while (sum < 50)

document.getElementById("result").innerHTML = `La somma dei numeri inseriti è ${sum}`

console.log(sum)

