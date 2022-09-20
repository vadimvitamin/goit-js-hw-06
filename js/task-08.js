const loginform = document.querySelector(".login-form");
loginform.addEventListener("submit", OnSubmit);
function OnSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget);
  const { email, password } = event.currentTarget;
  const data = {
    email: email.value,
    password: password.value,
  };
}
