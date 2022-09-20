const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", OnSubmit);
function OnSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.currentTarget);
  const { email, password } = evt.currentTarget.elements;
  const data = {
    email: email.value,
    password: password.value,
  };
  evt.currentTarget.reset();
  console.log(data);
}
