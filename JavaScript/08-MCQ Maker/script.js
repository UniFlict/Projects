const mainPt1 = document.querySelector(".main-pt-1");

const question = document.querySelector("#question-title");

const option1 = document.querySelector("#option-1");
const option2 = document.querySelector("#option-2");
const option3 = document.querySelector("#option-3");
const option4 = document.querySelector("#option-4");

const ans1 = document.querySelector("#ans-1");
const ans2 = document.querySelector("#ans-2");
const ans3 = document.querySelector("#ans-3");
const ans4 = document.querySelector("#ans-4");

const create = document.querySelector("#create");

//!

let randomClassString = "";
function randomClass() {
  let randomChar =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  for (let i = 0; i < Math.floor(Math.random() * randomChar.length); i++) {
    randomClassString +=
      randomChar[Math.floor(Math.random() * randomChar.length)];
  }

  return randomClassString;
}

const randomClassArr = [];

//!

function generateMcq() {
  const newQuestion = document.createElement("div");

  const newChoice1 = document.createElement("button");
  const newChoice2 = document.createElement("button");
  const newChoice3 = document.createElement("button");
  const newChoice4 = document.createElement("button");

  const newMCQ = document.createElement("div");
  newMCQ.classList.add("mcq");

  newQuestion.innerText = question.value;
  if (newQuestion.innerText != "") {
    newQuestion.classList.add("question");
    newMCQ.appendChild(newQuestion);
  } else {
    return alert("Put a Question");
  }

  const newSelects = document.createElement("div");
  newSelects.classList.add("selects");

  if (option1.value != "") {
    newChoice1.classList.add("choice-btn", "choice-btn-1", randomClass());
    if (randomClassArr.includes == randomClassString) {
      newChoice1.classList.remove(randomClassString);
      newChoice1.classList.add(randomClass());
    }
    randomClassArr.push(randomClassString);
    newChoice1.innerText = `a) ${option1.value}`;
    newSelects.appendChild(newChoice1);
  }

  if (option2.value != "") {
    newChoice2.classList.add("choice-btn", "choice-btn-2", randomClass());
    if (randomClassArr.includes == randomClassString) {
      newChoice2.classList.remove(randomClassString);
      newChoice2.classList.add(randomClass());
    }
    randomClassArr.push(randomClassString);
    newChoice2.innerText = `b) ${option2.value}`;
    if (option1.value != "") {
      newSelects.appendChild(newChoice2);
    } else {
      newQuestion.innerText = "";
      return alert("Fill in Order");
    }
  }

  if (option3.value != "") {
    newChoice3.classList.add("choice-btn", "choice-btn-3", randomClass());
    if (randomClassArr.includes == randomClassString) {
      newChoice3.classList.remove(randomClassString);
      newChoice3.classList.add(randomClass());
    }
    randomClassArr.push(randomClassString);
    newChoice3.innerText = `c) ${option3.value}`;
    if (option1.value != "" && option2.value != "") {
      newSelects.appendChild(newChoice3);
    } else {
      newQuestion.innerText = "";
      return alert("Please Fill in Order");
    }
  }

  if (option4.value != "") {
    newChoice4.classList.add("choice-btn", "choice-btn-4", randomClass());
    if (randomClassArr.includes == randomClassString) {
      newChoice4.classList.remove(randomClassString);
      newChoice4.classList.add(randomClass());
    }
    randomClassArr.push(randomClassString);
    newChoice4.innerText = `d) ${option4.value}`;
    if (option1.value != "" && option2.value != "" && option3.value != "") {
      newSelects.appendChild(newChoice4);
    } else {
      newQuestion.innerText = "";
      return alert("Please Fill in Order");
    }
  }

  newMCQ.appendChild(newSelects);

  mainPt1.appendChild(newMCQ);

  //!

  if (ans1.classList.contains("correct-ans")) {
    newChoice1.classList.add("correct");
  }

  if (ans2.classList.contains("correct-ans")) {
    newChoice2.classList.add("correct");
  }

  if (ans3.classList.contains("correct-ans")) {
    newChoice3.classList.add("correct");
  }

  if (ans4.classList.contains("correct-ans")) {
    newChoice4.classList.add("correct");
  }

  //!

  if (
    ans1.classList.contains("correct-ans") ||
    ans2.classList.contains("correct-ans") ||
    ans3.classList.contains("correct-ans") ||
    ans4.classList.contains("correct-ans")
  ) {
    randomClassArr.forEach((e) => {
      let randomClassBtn = document.querySelector(`.${e}`);

      randomClassBtn.addEventListener("click", (e) => {
        if (randomClassBtn.classList.contains("correct")) {
          randomClassBtn.classList.add("show-correct");
        } else {
          randomClassBtn.classList.add("show-wrong");
        }
      });
    });
  }
}

//!

create.addEventListener("click", (e) => {
  e.preventDefault();

  generateMcq();

  question.value = "";
  option1.value = "";
  option2.value = "";
  option3.value = "";
  option4.value = "";

  ans1.classList.remove("correct-ans");
  ans2.classList.remove("correct-ans");
  ans3.classList.remove("correct-ans");
  ans4.classList.remove("correct-ans");
});

//!

ans1.addEventListener("click", (e) => {
  ans1.classList.toggle("correct-ans");
});

ans2.addEventListener("click", (e) => {
  ans2.classList.toggle("correct-ans");
});

ans3.addEventListener("click", (e) => {
  ans3.classList.toggle("correct-ans");
});

ans4.addEventListener("click", (e) => {
  ans4.classList.toggle("correct-ans");
});

//!
