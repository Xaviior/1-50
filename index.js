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
  const disAllowed = verifyNumber(secretNumber.value);
  if (disAllowed) {
    return setGlobalMessage(disAllowed);
  }

  setGlobalMessage("Hemmelig tall er valgt ✅");
  chosenNumber = parseInt(secretNumber.value);
  document.getElementById("secretNumberForm").style.visibility = "hidden";
});

// valgt tall
document.getElementById("btnGuess").addEventListener("click", function (e) {
  e.preventDefault();
  const disAllowed = verifyNumber(guessNumber.value);
  if (disAllowed) {
    return setGlobalMessage(disAllowed);
  }
  setGlobalMessage(`Du har valgt tallet ${guessNumber.value} som ditt tall`);
});

/* Verifties user input */
const verifyNumber = (input) => {
  /* Regex validation - numbers only */
  const reg = /^\d+$/;

  if (!reg.test(input)) {
    return `${input} er ikke et gyldig tall 🛠`;
  }

  /* Only between 1-50 */
  if (parseInt(input) > 50 || parseInt(input) < 1) {
    return `${input} er ikke mellom 1-50`;
  }
  return false;
};

/* Sets a global message. Default timeout before clearing is 5 seconds */
const setGlobalMessage = (msg) => {
  globalMessage.innerText = msg;
  setTimeout(() => {
    globalMessage.innerText = "";
  }, 5000);
};
