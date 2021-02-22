const form = document.querySelector("form");
const error = document.querySelector(".error");

const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const input = form.querySelector("input");

  if (input.value.match(validRegex)) {
    input.value = "";
    error.style = "display: none";
    form.style = "border: 1px solid var(--desaturatedRed)";
  } else {
    error.style = "display: block";
    form.style = "border: 2px solid var(--softRed)";
  }
});
