import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector(".popup__form-delete");
  }

  setSubmitAction(action) {
    this._handleSubmit = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this._handleSubmit) {
        this._handleSubmit();
      }
    });
  }
}
