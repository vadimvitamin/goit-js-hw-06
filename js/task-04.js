let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const valueLabel = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
decrementBtn.addEventListener("click", () => {
  valueLabel.textContent = counterValue -= 1;
});
incrementBtn.addEventListener("click", () => {
  valueLabel.textContent = counterValue += 1;
});
