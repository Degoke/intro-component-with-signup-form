const button = document.querySelector(".button");
const error = document.querySelectorAll(".error");
const errorText = document.querySelectorAll(".error-text");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.querySelector(".signup");

form.onsubmit = () => {
  const regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  let submit = false;

  if (!firstName.value) {
    error[0].style.visibility = "visible";
    errorText[0].style.visibility = "visible";
    firstName.style.borderColor = "hsl(0, 100%, 74%)";
    firstName.placeholder = "";
  }

  if (!lastName.value) {
    error[1].style.visibility = "visible";
    errorText[1].style.visibility = "visible";
    lastName.style.borderColor = "hsl(0, 100%, 74%)";
    lastName.placeholder = "";
  }

  if (!regex.test(String(email.value))) {
    error[2].style.visibility = "visible";
    errorText[2].style.visibility = "visible";
    email.style.borderColor = "hsl(0, 100%, 74%)";
    email.style.color = "hsl(0, 100%, 74%)";
    email.placeholder = "";
  }

  if (!password.value) {
    error[3].style.visibility = "visible";
    errorText[3].style.visibility = "visible";
    password.style.borderColor = "hsl(0, 100%, 74%)";
    password.placeholder = "";
  }

  if (
    firstName.value &&
    lastName.value &&
    password.value &&
    regex.test(String(email.value))
  ) {
    submit = true;
  }

  return submit;
};
