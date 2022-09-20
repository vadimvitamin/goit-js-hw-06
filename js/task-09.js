// В 7 модуле > занатие 15 > 1:05:00 Репета как раз показывает как сделать карточки разных цветов и заодно записывает значение в стили в hex формате
// В итоге должно получиться что-то типу
// const hexColor = random...
// body.style.backgroundColor = `hexColor`;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
btnEl.addEventListener("click", changeColor);
function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = getRandomHexColor();
}
