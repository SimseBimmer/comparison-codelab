/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/


const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  /* din kode her. Skriv en alert der skriver "du har svarret rigtigt" hvis svarret er true
  og "du har svarret forkert" hvis svaret er false*/
  let myAnswer = myAnsverInput.value.trim().toLowerCase(); // Fjerner eventuelle mellemrum og gør svaret til lowercase for at sammenligne det korrekt
  if (myAnswer === 'nej') {
    myAnsverFeedbackElement.textContent = 'Du har svaret rigtigt';
  } else {
    myAnsverFeedbackElement.textContent = 'Du har svaret forkert';
  }
});

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/

/*const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');

myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  let myAnswer = myAnsverInput.value.trim().toLowerCase(); // Fjerner eventuelle mellemrum og gør svaret til lowercase for at sammenligne det korrekt
  if (myAnswer === 'nej' || myAnswer === 'ja i disney film') {
    myAnsverFeedbackElement.textContent = 'Du har svaret rigtigt';
  } else {
    myAnsverFeedbackElement.textContent = 'Du har svaret forkert';
  }
});*/

/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const formValidationResult = document.getElementById('formValidationResult');

nameInput.addEventListener('keyup', () => {
  const name = nameInput.value.trim();
  if (name.length > 3) {
    console.log('Navn er gyldigt');
  } else {
    console.log('Navn skal være længere end 3 bogstaver');
  }
});

emailInput.addEventListener('keyup', () => {
  const email = emailInput.value.trim();
  if (validateEmail(email)) {
    console.log('Email er gyldig');
  } else {
    console.log('Email er ugyldig');
  }
});

ageInput.addEventListener('keyup', () => {
  const age = parseInt(ageInput.value.trim());
  if (age > 12) {
    console.log('Alder er gyldig');
  } else {
    console.log('Alder skal være større end 12');
  }
});

/* helper functions*/
function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
