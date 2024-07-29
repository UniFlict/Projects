const popup = document.querySelector(".popup");
const popupMessage = document.querySelector(".popup-message");
const btn = document.querySelector("#btn");
const body = document.querySelector("body");

let color = "#";
function randomColor() {
  let hex = "123456789abcdef";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)];
  }
  return color;
}

let popupTimeout;
btn.addEventListener("click", () => {
  body.style.backgroundColor = randomColor();
  btn.innerHTML = color;
  color = "#";

  popup.style.right = "10px";
  clearTimeout(popupTimeout);
  popupTimeout = setTimeout(() => {
    popup.style.right = "-400px";
  }, 500);
});
