import Popup from "../components/Popup";

export default class PopupWithForm extends Popup {
  constructor({ handleForm }, popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);

    this._handleForm = handleForm;
    this._submitButton = this._popupElement.querySelector(
      "button[type='submit']"
    );
    this._submitButtonOriginalText = this._submitButton.textContent;
    console.log(this._submitButtonOriginalText);
  }

  _getInputValues(evt) {
    evt.preventDefault();
    const inputList = this._popupElement.querySelectorAll(".popup__input");
    const formValues = {};
    inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    this._handleForm(formValues);
  }

  setEventListeners(evt) {
    super.setEventListeners(evt);

    this._handlerInput = (evt) => {
      this._getInputValues(evt);
    };
    this._popupElement
      .querySelector(".popup__form")
      .addEventListener("submit", this._handlerInput);
  }

  close() {
    super.close();
    this._popupElement
      .querySelector(".popup__form")
      .removeEventListener("submit", this._handlerInput);

    this._popupElement.querySelector(".popup__form").reset();
  }

  renderLoading(isLoading, loadingText = "Salvando...") {
    this._submitButton.textContent = isLoading
      ? loadingText
      : this._submitButtonOriginalText;
  }
}
