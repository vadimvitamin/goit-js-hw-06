const btnCreate = document.querySelector("button[data-create");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxDiv = document.querySelector("#boxes");
const input = document.querySelector("input");
let valueBox = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  amount = input.value;

  const box = document.createElement("div");
  box.classList.add("box");
  boxstyle.backgroundColor = `${getRandomHexColor()}`;
  box.style.width = valueBox + "px";
  box.style.height = valueBox + "px";
  boxDiv.after(box);
}

function destroyBoxes() {
  const boxEl = document.querySelector(".box");
  boxEl.remove();
}

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);
