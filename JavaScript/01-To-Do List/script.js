const addbutton = document.querySelector("#add-task-button");

addbutton.addEventListener("click", (e) => {
  const userInput = document.querySelector("#new-task");
  const userText = userInput.value.trim();

  if (userText !== "") {
    addTask(userText);
    userInput.value = "";
  } else {
    userInput.classList.add("redAlert");
    userInput.placeholder = "Task cannot be empty!";
  }
});

document.querySelector("#new-task").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addbutton.click();
  }
});

document.querySelector("#new-task").addEventListener("input", function (e) {
  this.classList.remove("redAlert");
  this.placeholder = "Add a task";
});

function addTask(userText) {
  const taskList = document.querySelector("#task-list");

  const taskWrap = document.createElement("div");
  taskWrap.classList.add("task");

  const checkboxWrapper = document.createElement("div");
  checkboxWrapper.classList.add("checkbox-wrapper-29");

  const checkboxLabel = document.createElement("label");
  checkboxLabel.classList.add("checkbox");

  const labelInput = document.createElement("input");
  labelInput.type = "checkbox";
  labelInput.classList.add("checkbox__input");

  const labelSpan1 = document.createElement("span");
  labelSpan1.classList.add("checkbox__label");

  const labelSpan2 = document.createElement("span");
  labelSpan2.classList.add("task-text");
  labelSpan2.innerText = userText;

  checkboxLabel.appendChild(labelInput);
  checkboxLabel.appendChild(labelSpan1);
  checkboxLabel.appendChild(labelSpan2);

  checkboxWrapper.appendChild(checkboxLabel);

  const i = document.createElement("i");
  i.classList.add("ri-close-line");

  taskWrap.appendChild(checkboxWrapper);
  taskWrap.appendChild(i);

  taskList.appendChild(taskWrap);

  checkboxWrapper.addEventListener("change", (e) => {
    labelSpan2.classList.toggle("completed");
  });

  i.addEventListener("click", (e) => {
    taskWrap.remove();
  });
}

function saveData() {
  const taskList = document.querySelector("#task-list");
  localStorage.setItem("data", taskList.innerHTML);
}
