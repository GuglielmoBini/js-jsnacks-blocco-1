/*
SNACK 2
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, l’utente inserisce il suo nome tramite un input.
comunicagli se può partecipare o no alla festa. (vietato usare includes() ).
*/

/* STEP
1- prendo gli elementi dal DOM
2- invento una lista di nomi (array)
3- tramite form, chiedo all'utente di scrivere un nome
4- aggingo event listener al bottone
5- prendo il value del nome
6- creo una flag per la validazione
7- controllo se il nome è nella lista
8- stampo a schermo se il nome è presente o meno nella mia lista
*/

//------------------------------------------------------------------

// prendo gli elementi dal DOM
const inputName = document.getElementById("user-name");
const inputButton = document.getElementById("check-button");
const result = document.getElementById("result");

// invento una lista di nomi (array)

const nameList = [
  "Jay Gatsby",
  "Daisy Buchanan",
  "Myrtle Wilson",
  "Jordan Baker",
  "Nick Carraway",
  "Tom Buchanan",
  "Meyer Wolfsheim",
  "George Wilson",
];

// tramite form, chiedo all'utente di scrivere un nome (in HTML)

// aggiungo event listener al bottone

inputButton.addEventListener("click", function () {
  // prendo il value del nome
  const userName = inputName.value.trim();
  // validazione
  if (!userName) {
    result.innerHTML = `<h2 class="text-danger">Non hai inserito un nome!</h2>`;
    return;
  }

  // creo una flag per la validazione

  let isAllowed = false;

  // controllo se il nome è nella lista
  for (let i = 0; i < nameList.length && !isAllowed; i++) {
    console.log(nameList[i], userName);
    if (userName === nameList[i]) {
      isAllowed = true;
    }
  }

  result.innerHTML = isAllowed
    ? `<h2 class="text-success">Puoi entrare!</h2>`
    : `<h2 class="text-danger">Smamma! Non sei in lista.</h2>`;
});
