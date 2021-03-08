let globalMessage = document.getElementById("globalMessage");
let tries = 0;
// inputs
const secretNumber = document.getElementById("numberInput");
const guessNumber = document.getElementById("guessInput");
// Number
const allNumbers = document.getElementsByClassName("number");
let chosenNumber = parseInt(secretNumber.value);

// reset button
document.getElementById("resetBtn").addEventListener("click", function (e) {
  e.preventDefault();
  location.reload();
});
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
  document.getElementById("guessInputForm").style.visibility = "visible";
  document.getElementById("resetBtn").style.visibility = "visible";
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
  tries += 1;
  console.log(guessNumber.value);
  guessNumber.value = ""; /* Removes the guessed number after submitting */

  if (userNumber === chosenNumber) {
    setGlobalMessage(
      `${userNumber} ER RIKTIG! GRATULERER ⭐️🎉 Du brukte ${tries} forsøk 😀`
    );
    const greenCross = createCross("green");
    allNumbers[chosenNumber - 1].append(...greenCross);
  } else if (userNumber > chosenNumber) {
    for (let i = userNumber - 1; i < 50; i += 1) {
      const cross = createCross();
      allNumbers[i].append(...cross);
      setGlobalMessage(`Tallet er mindre enn ${userNumber} `);
    }
  } else {
    for (let i = 0; i < userNumber; i += 1) {
      const cross = createCross();
      allNumbers[i].append(...cross);
      setGlobalMessage(`Tallet er større enn ${userNumber}`);
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
const createCross = (cssColor = "red") => {
  const leftCross = document.createElement("div");
  const rightCross = document.createElement("div");

  leftCross.className = "leftCross";
  rightCross.className = "rightCross";

  leftCross.style.backgroundColor = cssColor;
  rightCross.style.backgroundColor = cssColor;

  return [leftCross, rightCross];
};
