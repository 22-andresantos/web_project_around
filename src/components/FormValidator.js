export default class FormValidator {
  constructor(classObj) {
    this._classObj = classObj;
  }

  _showInputError(inputElement, errorMessage, errorElement) {
    errorElement.classList.add(this._classObj.errorClass);
    inputElement.classList.add(this._classObj.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement, errorElement) {
    if (errorElement) {
      errorElement.classList.remove(this._classObj.errorClass);
      errorElement.textContent = " ";
    }
    if (inputElement) {
      inputElement.classList.remove(this._classObj.inputErrorClass);
    }
  }

  _checkInputValidity(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        errorElement
      );
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }

  _hasInvalidInput(inputList) {
    inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(formElement) {
    const isValid = this._inputList.every((input) => input.validity.valid);
    const submitButton = formElement.querySelector(
      this._classObj.submitButtonSelector
    );

    if (isValid) {
      submitButton.classList.remove(this._classObj.inactiveButtonClass);
      submitButton.disabled = false;
    } else {
      submitButton.classList.add(this._classObj.inactiveButtonClass);
      submitButton.disabled = true;
    }
  }

  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this._classObj.inputSelector)
    );
    this._inputList = inputList;

    this._toggleButtonState(formElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState(formElement);
      });
    });
  }

  resetInputValidation = (formElement) => {
    const inputList = Array.from(
      formElement.querySelectorAll(this._classObj.inputSelector)
    );
    this._inputList = inputList;
    this._toggleButtonState(formElement, inputList);
    inputList.forEach((inputElement) => {
      const errorElement = formElement.querySelector(`#${inputElement.id}`);
      this._hideInputError(inputElement, errorElement, this._classObj);
    });
  };

  enableValidation() {
    const formElement = document.querySelector(this._classObj.formSelector);
    const fieldsetList = Array.from(
      formElement.querySelectorAll(this._classObj.fieldsetSelector)
    );
    fieldsetList.forEach((fieldset) => {
      this._setEventListeners(fieldset);
    });
  }
}
