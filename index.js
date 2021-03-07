let globalMessage = document.getElementById("globalMessage");

// inputs
const secretNumber = document.getElementById("numberInput");
const guessNumber = document.getElementById("guessInput");
const picNumberBtn = document.getElementById("btnSave");
const guessNumberBtn = document.getElementById("btnGuess");
// Number
const allNumbers = document.getElementsByClassName("number");
let chosenNumber = 0;

/* Hemmelig tall */
document.getElementById("btnSave").addEventListener("click", function (e) {
  e.preventDefault();

  /* Regex validation - only number */
  const reg = /^\d+$/;

  if (!reg.test(secretNumber.value)) {
    return setGlobalMessage(`${secretNumber.value} er ikke et gyldig tall`);
  }

  /* Only between 1-50 */
  if (parseInt(secretNumber.value) > 50 || parseInt(secretNumber.value) < 1) {
    return setGlobalMessage(`${secretNumber.value} er ikke mellom 1-50`);
  }

  setGlobalMessage("Hemmelig tall er valgt ");
  chosenNumber = parseInt(secretNumber.value);
  document.getElementById("secretNumberForm").style.visibility = "hidden";
});

/* Sets a global message. Default timeout before clearing is 5 seconds */
const setGlobalMessage = (msg) => {
  globalMessage.innerText = msg;
  setTimeout(() => {
    globalMessage.innerText = "";
  }, 5000);
};

// valgt tall
document.getElementById("btnGuess").addEventListener("click", function (e) {
  e.preventDefault();

  /* Regex validation - only number */
  const reg = /^\d+$/;

  if (!reg.test(guessNumber.value)) {
    return setGlobalMessage(`${guessNumber.value} er ikke et gyldig tall`);
  }

  /* Only between 1-50 */
  if (parseInt(guessNumber.value) > 50 || parseInt(guessNumber.value) < 1) {
    return setGlobalMessage(`${guessNumber.value} er ikke mellom 1-50`);
  }
  setGlobalMessage(`Du har valgt tallet ${guessNumber.value} som ditt tall`);
  chosenNumber = parseInt(guessNumber.value);
});
