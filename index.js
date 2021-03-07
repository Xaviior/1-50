let globalMessage = document.getElementById("globalMessage");

// inputs
const secretNumber = document.querySelector("#numberInput");
const guessNumber = document.querySelector("#guessInput");
const picNumberBtn = document.querySelector("#btnSave");
const guessNumberBtn = document.querySelector("#btnGuess");
// Number
const allNumbers = document.querySelectorAll(".number");
let chosenNumber = 0;

/* Hemmelig tall */
document.getElementById("btnSave").addEventListener("click", function (e) {
  e.preventDefault();
  setGlobalMessage("Hemmelig tall er valgt");

  /* Regex validation - only number */
  const reg = /^\d+$/;

  if (!reg.test(secretNumber.value)) {
    setGlobalMessage(`${secretNumber.value} er ikke et gyldig tall`);
  }

  /* Only between 1-50 */
  if (parseInt(secretNumber.value) > 50 || parseInt(secretNumber.value) < 0) {
    setGlobalMessage(`${secretNumber.value} er ikke mellom 1-50`);
  }

  chosenNumber = parseInt(secretNumber.value);
});

/* Sets a global message. Default timeout before clearing is 5 seconds */
const setGlobalMessage = (msg, timeout = 5000) => {
  globalMessage.innerText = msg;
  setTimeout(() => {
    globalMessage.innerText = "";
  }, timeout);
};
