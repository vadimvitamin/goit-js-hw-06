const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", oninput);
function oninput(event) {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonimous";
  }
  console.log(event.currentTarget.value);
}
