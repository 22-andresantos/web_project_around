import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._image = this._popup.querySelector(".popup__img-src");
    this._caption = this._popup.querySelector(".popup__img-title");
  }

  open({ title, link }) {
    this._image.alt = title;

    this._image.src = link;
    this._caption.textContent = title;
    super.open();
  }
}
