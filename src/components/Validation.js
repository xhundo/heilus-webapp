const input = document.querySelector(".footer__input");
const errorMessage = document.querySelector(".footer__input_error");
const errorMessageActive = document.querySelector(".footer_input_active");
const buttonElement = document.querySelector(".footer__button");
const error = document.querySelector(`.${input.id}-error`);
const submitSuccess = document.querySelector(".footer__span-success");

function showInputError(input, errorMessage) {
  input.classList.add("footer__input_type_error");
  error.textContent = errorMessage;
  error.classList.add("footer__span-active");
}

function hideInputError(input) {
  input.classList.remove("footer__input_type_error");
  error.classList.remove("footer__span-active");
  error.textContent = "";
}

function isValid() {
  if (!input.validity.valid) {
    showInputError(input, input.validationMessage);
  } else {
    hideInputError(input);
  }
}

function handleSubmit(input, message) {
  input.classList.add(".footer__span-success");
  submitSuccess.textContent = message;
  submitSuccess.classList.add("footer__span-success_active");
  input.value = "";
}

buttonElement.addEventListener("click", (e) => {
  e.preventDefault();
  handleSubmit(input, "Subscribed!");
});

input.addEventListener("input", isValid);
