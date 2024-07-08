const selectFirst = document.querySelector("#selectFirst");
const turnContainer = document.querySelector(".turn_container");
const turnX = document.querySelector("#turn_x");
const turnO = document.querySelector("#turn_o");

const box = document.querySelectorAll(".box");

const result = document.querySelector("#result");
const play = document.querySelector("#play");
const reset = document.querySelector("#reset");

let turn;
let moveCount = 0;

let playGame = false;

box.forEach((box) => {
  box.disabled = true;
  document.querySelector("body").style.gap = "2rem";
  document.querySelector(".box_container").style.display = "none";
});

play.addEventListener("click", (e) => {
  playGame = true;

  if (playGame) {
    play.style.display = "none";
    reset.style.display = "inline";

    selectFirst.style.display = "inline";
    turnX.style.backgroundColor = "transparent";
    turnX.style.color = "#fff";
    turnX.style.cursor = "pointer";
    turnO.style.backgroundColor = "transparent";
    turnO.style.color = "#fff";
    turnO.style.cursor = "pointer";

    //*

    turnX.addEventListener("mouseover", function () {
      turnX.style.backgroundColor = "#1bddff";
      turnX.style.transition = "0.3s ease";
    });
    turnX.addEventListener("mouseleave", function () {
      turnX.style.backgroundColor = "transparent";
    });

    turnO.addEventListener("mouseover", function () {
      turnO.style.backgroundColor = "#ff7060";
      turnO.style.transition = "0.3s ease";
    });
    turnO.addEventListener("mouseleave", function () {
      turnO.style.backgroundColor = "transparent";
    });

    //* After Click

    turnX.addEventListener("click", (e) => {
      turn = "X";
      selectFirst.innerHTML = "X Selected";
      turnContainer.style.display = "none";

      document.querySelector("body").style.gap = "0rem";
      document.querySelector(".box_container").style.display = "grid";

      box.forEach((box) => {
        box.disabled = false;
      });
    });

    turnO.addEventListener("click", (e) => {
      turn = "O";
      selectFirst.innerHTML = "O Selected";
      turnContainer.style.display = "none";

      document.querySelector("body").style.gap = "0rem";
      document.querySelector(".box_container").style.display = "grid";

      box.forEach((box) => {
        box.disabled = false;
      });
    });
  }

  reset.addEventListener("click", (e) => {
    location.reload();
  });
});

box.forEach((box) => {
  box.addEventListener("click", (e) => {
    box.innerHTML = turn;
    moveCount++;
    box.style.backgroundColor = "#000";

    if (turn === "X") {
      box.style.border = "1px solid #1bddff";
      selectFirst.style.display = "none";

      turn = "O";
    } else {
      box.style.border = "2px solid #ff7060";
      turn = "X";
      selectFirst.style.display = "none";
    }

    if (!checkWinner() && moveCount === 9) {
      result.style.display = "block";
      result.innerHTML = `Game is Draw`;
      box.forEach((box) => (box.disabled = true));
    }

    checkWinner();
  });
});

let winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner() {
  for (let patterns of winPattern) {
    let boxcheck1 = box[patterns[0]].innerText;
    let boxcheck2 = box[patterns[1]].innerText;
    let boxcheck3 = box[patterns[2]].innerText;

    if (boxcheck1 !== "" && boxcheck2 !== "" && boxcheck3 !== "") {
      if (
        boxcheck1 === boxcheck2 &&
        boxcheck2 === boxcheck3 &&
        boxcheck3 === boxcheck1
      ) {
        result.style.display = "block";
        result.innerHTML = `${boxcheck1} is Winner`;
        box.forEach((box) => (box.disabled = true));
      }
    }
  }
}
