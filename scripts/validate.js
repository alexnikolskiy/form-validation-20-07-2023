function enableValidation(config) {
  const showInputError = (form, input) => {
    input.classList.add(config.inputErrorClass)
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = input.validationMessage
    span.classList.add(config.errorClass)
  }

  const hideInputError = (form, input) => {
    input.classList.remove(config.inputErrorClass)
    const span = form.querySelector(`.${input.id}-error`)
    span.textContent = ''
    span.classList.remove(config.errorClass)
  }

  const isValid = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input)
    } else {
      hideInputError(form, input)
    }
  }

  const hasInvalidValue = (inputs) => {
    return inputs.some(input => !input.validity.valid)
  }

  const toggleButtonState = (inputs, button) => {
    if (hasInvalidValue(inputs)) {
      button.classList.add(config.disabledButtonClass)
      button.disabled = true
    } else {
      button.classList.remove(config.disabledButtonClass)
      button.disabled = false
    }
  }

  const checkPasswords = (form, password, passwordRepeat) => {
    if (password.value !== passwordRepeat.value) {
      passwordRepeat.setCustomValidity('Passwords are not equal')
      showInputError(form, passwordRepeat)
    } else {
      passwordRepeat.setCustomValidity('')
      hideInputError(form, passwordRepeat)
    }
  }

  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector))
    const button = form.querySelector(config.submitButtonSelector)
    const password = form.querySelector('#password')
    const repeatPassword = form.querySelector('#password-repeat')

    toggleButtonState(inputs, button)
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input)
        toggleButtonState(inputs, button)
        checkPasswords(form, password, repeatPassword)
      })
    })
  }

  const forms = Array.from(document.querySelectorAll(config.formSelector))

  forms.forEach(form => {
    setEventListeners(form)
  })
}