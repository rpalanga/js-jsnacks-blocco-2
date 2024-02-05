
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let userNumber;

let Result = document.getElementById("result");

let circle = false;

do {

    userNumber = Number(prompt("inserisci un numero"));


    if (userNumber % 2 == 0) {

        Result.innerHTML = `${userNumber}`

    

    } else {

    
        Result.innerHTML = `${userNumber + 1}`

    }

    
    
    circle = true;


} while (!circle);
