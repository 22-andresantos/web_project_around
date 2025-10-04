// Função abrir e fechar os popups

export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    n;
  }

  open() {
    this._popup.classList.add("popup__opened");
  }

  close() {
    document.removeEventListener("keydown", this._keyHandler);
    this._popup.removeEventListener("click", this._clickHandler);
    this._popup.classList.remove("popup__opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close(evt);
    }
  }

  _handleClickClose(evt) {
    if (this._popup.classList.contains("popup__opened")) {
      this.close(evt);
    }
  }

  setEventListeners() {
    this._clickHandler = (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup__opened") ||
        evt.target.classList.contains("button__popup-close")
      ) {
        this._handleClickClose(evt);
      }
    };

    this._popup.addEventListener("click", this._clickHandler);
    this._keyHandler = (evt) => {
      this._handleEscClose(evt);
    };
    document.addEventListener("keydown", this._keyHandler);
  }
}
