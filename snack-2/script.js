
// Genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero.

//  Il programma poi deve far comparire un messaggio 

//  "il numero è troppo alto" oppure "il numero è troppo basso" 

//  nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale.

// Quando l'utente trova il numero, fateglielo sapere!

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log(randomNumber)

const Result = document.getElementById("result");

let userNumber;

let randUser = false;

do {

    userNumber = Number(prompt("Inserisci un numero"));

    
    if (randomNumber > userNumber){

        Result.innerHTML = `Il numero è troppo basso `;

        console.log("il numero è troppo basso")


    } else if (randomNumber < userNumber) {

        Result.innerHTML = `Il numero è troppo alto`;

        console.log("Il numero è troppo alto")

    } else {

        Result.innerHTML = `Hai indovinato`;

        console.log("Hai indovinato")
        
        randUser = true;
    }



} while (randUser !== true);
