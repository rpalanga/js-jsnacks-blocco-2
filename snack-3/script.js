
// Crea due array che hanno un numero di elementi diversi.

//  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

//  (Se iniziate con un array da 3 elementi e l'altro da 5, eseguite istruzioni sinchè non ne hanno entrambi 5)


let oneArray = [1,2,3,4,5];

let secondArray = [];

while (oneArray.length !== secondArray.length){


    secondArray.push(prompt("Inserisci numeri"));
    
    


}
console.log(secondArray)
console.log(oneArray)

document.getElementById("result").innerHTML = `il primo elenco ${oneArray}`
document.getElementById("result-2").innerHTML = `il secondo elenco ${secondArray}`




