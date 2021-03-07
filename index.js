let globalMessage = document.getElementById("globalMessage");

// inputs
const secretNumber = document.getElementById("numberInput");
const guessNumber = document.getElementById("guessInput");
const picNumberBtn = document.getElementById("btnSave");
const guessNumberBtn = document.getElementById("btnGuess");
// Number
const allNumbers = document.getElementsByClassName("number");
let chosenNumber = parseInt(secretNumber.value);

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
  const userNumber = parseInt(guessNumber.value);
  const disAllowed = verifyNumber(userNumber);
  if (disAllowed) {
    return setGlobalMessage(disAllowed);
  }
  /* setGlobalMessage(`Du har valgt tallet ${userNumber} som ditt tall`); */

  if (userNumber === chosenNumber) {
    setGlobalMessage(`${userNumber} ER RIKTIG! GRATULERER ⭐️🎉`);
  } else if (userNumber > chosenNumber) {
    for (let i = userNumber - 1; i < 50; i += 1) {
      const cross = createCross();
      allNumbers[i].append(...cross);
    }
  } else {
    for (let i = 0; i < userNumber; i += 1) {
      const cross = createCross();
      allNumbers[i].append(...cross);
    }
  }
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

/* Creates the cross */
const createCross = () => {
  const leftCross = document.createElement("div");
  const rightCross = document.createElement("div");

  leftCross.className = "leftCross";
  rightCross.className = "rightCross";

  return [leftCross, rightCross];
};
