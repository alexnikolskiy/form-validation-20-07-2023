const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  disabledButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_visible'
};

const form = document.querySelector('.popup__form');
const userNameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordInputRepeat = document.querySelector('#password-repeat');

function handleSubmit(evt) {
  evt.preventDefault();
  console.log({
    username: userNameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
    passwordRepeat: passwordInputRepeat.value
  })
}

form.addEventListener('submit', handleSubmit);

enableValidation(validationConfig);
