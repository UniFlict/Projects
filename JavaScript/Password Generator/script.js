const passwordBox = document.querySelector("#password");
const copy = document.querySelector("#copyBtn");
const passLength = document.querySelector("#length");
const lowerCase = document.querySelector("#lower-case");
const upperCase = document.querySelector("#upper-case");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector("#generateBtn");

const charLowerCase = "abcdefghijklmnopqrstuvwxyz";
const charUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charNumber = "0123456789";
const charSymbol = "!@#$%^&*()_+[]{}|;:,.<>?";

generateBtn.addEventListener("click", () => {
  const length = parseInt(passLength.value);
  let charSet = "";

  if (lowerCase.checked) charSet += charLowerCase;
  if (upperCase.checked) charSet += charUpperCase;
  if (numbers.checked) charSet += charNumber;
  if (symbols.checked) charSet += charSymbol;

  if (charSet === "" && (passLength.value >= 4 || passLength.value <= 32)) {
    passwordBox.placeholder = "Atleast Check a Box";
  }

  if (passLength.value < 4 || (passLength.value > 32 && charSet !== "")) {
    passwordBox.placeholder = "Put Valid Password Length";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = charSet[Math.floor(Math.random() * charSet.length)];
    password += randomIndex;
  }

  passwordBox.value = password;

  copy.innerHTML = "Copy";
  copy.style.color = "#00aaff";
});

copy.addEventListener("click", () => {
  passwordBox.select();
  document.execCommand("copy");
  copy.innerHTML = "Copied!";
  copy.style.backgroundColor = "#08364d";
  copy.style.color = "#fff";
  copy.style.borderColor = "#fff";
});
