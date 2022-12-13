/*
SNACK 1
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). Il programma stampa la somma di tutti i numeri inseriti
*/

//---------------------------------------------------------------------

/* STEP 
1- prendo l'elemento dal DOM
2- creo un ciclo di 10 turni
3- chiedo all'utente un numero per 10 volte
4- calcolo la somma dei numeri
5- stampo in pagina
*/

// prendo l'elemento dal DOM
targetElement = document.getElementById("target");

// creo un ciclo di 10 turni
for (i = 0; i < 10; i++) {
  let userNumber = parseInt(prompt("Scrivi un numero").trim());
  if (!userNumber) {
    alert("devi inserire un numero!");
  }
  console.log(userNumber);
}
