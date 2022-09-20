const input = document.querySelector("#validation-input");

const lengthEl = Number(input.dataset.length);

input.addEventListener("blur", onOutBlur);

function onOutBlur() {
  if (input.value.length === lengthEl) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    return input.classList.add("invalid");
  }
}
