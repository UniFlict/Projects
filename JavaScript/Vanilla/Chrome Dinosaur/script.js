const dino = document.querySelector("#dino");
const cactus = document.querySelector("#cactus");
const result = document.querySelector("#result");

function addJump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft <= 40 && cactusLeft > 0 && dinoTop >= 130) {
    cactus.style.animationName = "stopped";
    result.innerHTML = "Game Over | Play Again";

    playAgain();
  } else {
    document.addEventListener("keydown", (e) => {
      addJump();
    });

    document.addEventListener("click", (e) => {
      addJump();
    });
  }
}, 10);

if ((result.innerHTML = "Game Over")) {
  function playAgain() {
    document.addEventListener("click", () => {
      cactus.style.animationName = "block";
      result.innerHTML = "";
    });
    document.addEventListener("keydown", () => {
      cactus.style.animationName = "block";
      result.innerHTML = "";
    });
  }
}
