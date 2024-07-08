let randomNumber = Math.floor(Math.random() * 100 + 1);

const userInput = document.querySelector("#UserInput");
const submit = document.querySelector("#submit");

const guessResults = document.querySelector(".guess_result");
const prevGuessContainer = document.querySelector(".PrevGuess");
const prevGuess = document.querySelector(".prevGuessBox");

const remaining = document.querySelector(".remaining");
const result = document.querySelector(".result");

const startNew = document.querySelector(".startNew");
startNew.style.display = "none";
startNew.style.color = "salmon";

let remainingAttemp = 10;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();

    const guess = userInput.value;

    checkNum(guess);
  });
}

function checkNum(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.innerHTML = "Use A Valid Number";

    result.style.color = "red";
    userInput.value = "";
  } else {
    remainingAttemp--;
    if (remainingAttemp == 0) {
      document.querySelector(".remainingNumber").style.display = "none";
      result.innerHTML = `Game Over | Number was ${randomNumber} `;
      endGame();
    } else {
      verifyGuess(guess);
      displayGuess(guess);
    }
  }
}

function verifyGuess(guess) {
  if (guess < randomNumber) {
    result.innerHTML = "You Guess is Low";
    result.style.color = "red";
  } else if (guess == randomNumber) {
    result.innerHTML = "Congratulation, You Won";
    result.style.color = "green";
    endGame();
  } else if (guess > randomNumber) {
    result.innerHTML = "You Guess is High";
    result.style.color = "red";
  }
}

function displayGuess(guess) {
  userInput.value = "";

  const newPrevBox = document.createElement("span");
  newPrevBox.classList.add("prevGuessBox");
  newPrevBox.innerHTML = guess;
  prevGuessContainer.appendChild(newPrevBox);

  remaining.innerHTML = remainingAttemp;
}

function endGame() {
  playGame = false;
  userInput.value = "";
  userInput.disabled = true;
  submit.disabled = true;
  startNew.style.display = "block";
}

startNew.addEventListener("click", (e) => {
  userInput.disabled = false;
  submit.disabled = false;
  remainingAttemp = 10;

  randomNumber = Math.floor(Math.random() * 100 + 1);
  userInput.value = "";
  result.innerHTML = "";
  remaining.innerHTML = remainingAttemp;
  prevGuessContainer.innerHTML = "";
  startNew.style.display = "none";
  document.querySelector(".remainingNumber").style.display = "block";
});
