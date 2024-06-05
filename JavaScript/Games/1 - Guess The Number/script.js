let randomNumber = parseInt(Math.random() * 100 + 1);

const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const prevGuess = document.querySelector(".guesses");
const guessRemaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const form = document.querySelector("form");
const resultParas = document.querySelector(".resultParas");

const startNewGame = document.querySelector(".startNewGame");
startNewGame.style.color = "salmon";
startNewGame.style.cursor = "pointer";
startNewGame.style.display = "none";

const showGuessesLine = document.querySelector("#showline");
showGuessesLine.style.display = "none";

let prevGuessArr = [];
let attemptLeft = 10;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);

    checkInput(guess);
  });
}

function checkInput(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    lowOrHi.innerHTML =
      '<span style="color: red;">Choose A Value Between 1 - 100</span>';
  } else {
    attemptLeft--;
    guessRemaining.innerHTML = `${attemptLeft}`;

    prevGuessArr.push(guess);
    showGuessesLine.style.display = "inline";

    if (attemptLeft < 1) {
      lowOrHi.innerHTML = `Random Number was ${randomNumber}`;
      lowOrHi.style.color = "yellow";
      endGame();
    } else {
      displayGuess(guess);
      verifyInput(guess);
    }
  }
}

function verifyInput(guess) {
  if (guess < randomNumber) {
    lowOrHi.innerHTML = "The number is very low";
    lowOrHi.style.color = "red";
  } else if (guess === randomNumber) {
    lowOrHi.innerHTML = "Congratulations, you Won";
    lowOrHi.style.color = "green";
    endGame();
  } else {
    lowOrHi.innerHTML = "The number is very high";
    lowOrHi.style.color = "red";
  }
}

function displayGuess(guess) {
  userInput.value = "";
  prevGuess.innerHTML += `${guess} | `;
}

// function displayMessage(guess) {}

function endGame() {
  playGame = false;
  userInput.disabled = true;
  submit.disabled = true;

  startNewGame.style.display = "block";

  resetGame();
}

function resetGame() {
  startNewGame.addEventListener("click", function (e) {
    playGame = true;
    randomNumber = parseInt(Math.random() * 100 + 1);
    userInput.value = "";
    prevGuessArr = [];

    attemptLeft = 10;
    guessRemaining.innerHTML = attemptLeft;
    userInput.disabled = false;
    submit.disabled = false;
    userInput.focus();
    lowOrHi.textContent = "";
    prevGuess.textContent = "";
    startNewGame.style.display = "none";
    showGuessesLine.style.display = "none";
  });
}
