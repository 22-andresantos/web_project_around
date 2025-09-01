export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._submitButton = this._formElement.querySelector(
      this._config.submitButtonSelector
    );
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._config.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._config.inputErrorClass);
    errorElement.classList.remove(this._config.errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    const isValid = this._inputList.every((input) => input.validity.valid);
    if (isValid) {
      this._submitButton.classList.remove(this._config.inactiveButtonClass);
      this._submitButton.disabled = false;
    } else {
      this._submitButton.classList.add(this._config.inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._toggleButtonState();
  }
}

// const showInputError = (formElement, inputElement, errorMessage) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.add("popup__input_type_error");
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add("popup__input-error_active");
// };

// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   inputElement.classList.remove("popup__input_type_error");
//   errorElement.classList.remove("popup__input-error_active");
//   errorElement.textContent = "";
// };

// const checkInputValidity = (formElement, inputElement) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage);
//   } else {
//     hideInputError(formElement, inputElement);
//   }
// };

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

// const toggleButtonState = (inputList, buttonElement) => {
//   if (hasInvalidInput(inputList)) {
//     buttonElement.classList.add("popup__button-inactive");
//   } else {
//     buttonElement.classList.remove("popup__button-inactive");
//   }
// };

// const setEventListeners = (formElement) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(".popup__name, .popup__job")
//   );
//   const buttonElement = formElement.querySelector(".popup__button");

//   toggleButtonState(inputList, buttonElement);

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", function () {
//       checkInputValidity(formElement, inputElement);
//       toggleButtonState(inputList, buttonElement);
//     });
//   });
// };

// export const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll(".popup__form"));
//   formList.forEach((formElement) => {
//     formElement.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetList = Array.from(
//       formElement.querySelectorAll(".popup__fieldset")
//     );

//     fieldsetList.forEach((fieldset) => {
//       setEventListeners(fieldset);
//     });
//   });
// };

// enableValidation();

// //validação popup  cards

// const showInputErrorCard = (
//   formElementCard,
//   inputElementCard,
//   errorMessageCard
// ) => {
//   const errorElementCard = formElementCard.querySelector(
//     `.${inputElementCard.id}-error`
//   );
//   inputElementCard.classList.add("modal__input_type_error");
//   errorElementCard.textContent = errorMessageCard;
//   errorElementCard.classList.add("modal__input-error_active");
// };

// const hideInputErrorCard = (formElementCard, inputElementCard) => {
//   const errorElementCard = formElementCard.querySelector(
//     `.${inputElementCard.id}-error`
//   );
//   inputElementCard.classList.remove("modal__input_type_error");
//   errorElementCard.classList.remove("modal__input-error_active");
//   errorElementCard.textContent = "";
// };

// const checkInputValidityCard = (formElementCard, inputElementCard) => {
//   if (!inputElementCard.validity.valid) {
//     showInputErrorCard(
//       formElementCard,
//       inputElementCard,
//       inputElementCard.validationMessage
//     );
//   } else {
//     hideInputErrorCard(formElementCard, inputElementCard);
//   }
// };

// const hasInvalidInputCard = (inputListCard) => {
//   return inputListCard.some((inputElementCard) => {
//     return !inputElementCard.validity.valid;
//   });
// };

// const toggleButtonStateCard = (inputListCard, buttonElementCard) => {
//   if (hasInvalidInputCard(inputListCard)) {
//     buttonElementCard.classList.add("modal__button-inactive");
//   } else {
//     buttonElementCard.classList.remove("modal__button-inactive");
//   }
// };

// const setEventListenersCard = (formElementCard) => {
//   const inputListCard = Array.from(
//     formElementCard.querySelectorAll(".modal__input, .modal__link")
//   );
//   const buttonElementCard = formElementCard.querySelector(".modal__button");

//   toggleButtonStateCard(inputListCard, buttonElementCard);

//   inputListCard.forEach((inputElementCard) => {
//     inputElementCard.addEventListener("input", function () {
//       checkInputValidityCard(formElementCard, inputElementCard);
//       toggleButtonStateCard(inputListCard, buttonElementCard);
//     });
//   });
// };

// export const enableValidationCard = () => {
//   const formListCard = Array.from(document.querySelectorAll(".modal__form"));
//   formListCard.forEach((formElementCard) => {
//     formElementCard.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//     });

//     const fieldsetListCard = Array.from(
//       formElementCard.querySelectorAll(".modal__fieldset")
//     );

//     fieldsetListCard.forEach((fieldset) => {
//       setEventListenersCard(fieldset);
//     });
//   });
// };

// enableValidationCard();
