import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ handleForm }, popupSelector) {
    super(popupSelector);
    this._popupElement = document.querySelector(popupSelector);
    this._handleForm = handleForm;
  }

  _getInputValues(evt) {
    evt.preventDefault();
    const InputName = this._popupElement.querySelectorAll(".popup__input")[0];
    const InputJob = this._popupElement.querySelectorAll(".popup__input")[1];

    this._handleForm({
      [InputName.name]: InputName.value,
      [InputJob.name]: InputJob.value,
    });
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
}
