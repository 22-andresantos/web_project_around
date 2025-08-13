//validação popup editar perfil

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button-inactive");
  } else {
    buttonElement.classList.remove("popup__button-inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".popup__name, .popup__job")
  );
  const buttonElement = formElement.querySelector(".popup__button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__fieldset")
    );

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();

//validação popup  cards

const showInputErrorCard = (
  formElementCard,
  inputElementCard,
  errorMessageCard
) => {
  const errorElementCard = formElementCard.querySelector(
    `.${inputElementCard.id}-error`
  );
  inputElementCard.classList.add("modal__input_type_error");
  errorElementCard.textContent = errorMessageCard;
  errorElementCard.classList.add("modal__input-error_active");
};

const hideInputErrorCard = (formElementCard, inputElementCard) => {
  const errorElementCard = formElementCard.querySelector(
    `.${inputElementCard.id}-error`
  );
  inputElementCard.classList.remove("modal__input_type_error");
  errorElementCard.classList.remove("modal__input-error_active");
  errorElementCard.textContent = "";
};

const checkInputValidityCard = (formElementCard, inputElementCard) => {
  if (!inputElementCard.validity.valid) {
    showInputErrorCard(
      formElementCard,
      inputElementCard,
      inputElementCard.validationMessage
    );
  } else {
    hideInputErrorCard(formElementCard, inputElementCard);
  }
};

const hasInvalidInputCard = (inputListCard) => {
  return inputListCard.some((inputElementCard) => {
    return !inputElementCard.validity.valid;
  });
};

const toggleButtonStateCard = (inputListCard, buttonElementCard) => {
  if (hasInvalidInputCard(inputListCard)) {
    buttonElementCard.classList.add("modal__button-inactive");
  } else {
    buttonElementCard.classList.remove("modal__button-inactive");
  }
};

const setEventListenersCard = (formElementCard) => {
  const inputListCard = Array.from(
    formElementCard.querySelectorAll(".modal__input, .modal__link")
  );
  const buttonElementCard = formElementCard.querySelector(".modal__button");

  toggleButtonStateCard(inputListCard, buttonElementCard);

  inputListCard.forEach((inputElementCard) => {
    inputElementCard.addEventListener("input", function () {
      checkInputValidityCard(formElementCard, inputElementCard);
      toggleButtonStateCard(inputListCard, buttonElementCard);
    });
  });
};

const enableValidationCard = () => {
  const formListCard = Array.from(document.querySelectorAll(".modal__form"));
  formListCard.forEach((formElementCard) => {
    formElementCard.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetListCard = Array.from(
      formElementCard.querySelectorAll(".modal__fieldset")
    );

    fieldsetListCard.forEach((fieldset) => {
      setEventListenersCard(fieldset);
    });
  });
};

enableValidationCard();
