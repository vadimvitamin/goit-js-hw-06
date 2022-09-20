const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
range.value = 16;
range.addEventListener("input", (event) => {
  text.style.fontSize = range.value + "px";
});
