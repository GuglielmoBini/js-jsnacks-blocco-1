/*
SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti
*/

//---------------------------------------------------------------------

/* STEP 
1- prendo l'elemento dal DOM
2- creo un array per immagazzinare i numeri
3- creo un ciclo di 10 turni
4- chiedo all'utente un numero per 10 volte
5- calcolo la somma dei numeri
6- stampo in pagina
*/

// prendo l'elemento dal DOM
const targetElement = document.getElementById("target");

// creo un array per immagazzinare i numeri
const numbers = [];

// creo un ciclo di 10 turni
for (i = 0; numbers.length < 10; i++) {
  const userNumber = parseInt(prompt("Scrivi un numero").trim());
  if (isNaN(userNumber)) {
    alert("devi inserire un numero!");
  } else {
    numbers.push(userNumber);
    console.log(numbers);
  }
}

// calcolo la somma dei numeri

let sum = 0;

for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(sum);
}

// stampo in pagina
targetElement.innerHTML = `<p class="fs-1">La somma dei numeri che hai digitato è ${sum}.</p>`;
