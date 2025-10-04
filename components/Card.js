// Criação de Cards

export default class Card {
  constructor({ name, link, handleCardClick }, galleryCardElement) {
    this._title = name;
    this._link = link;
    this._containerElement = galleryCardElement;
    this._handleCardClick = handleCardClick;
  }

  handleCardClick = (evt) => {
    this._handleCardClick(evt, this._title, this._link);
  };

  _setEventListeners() {
    this._cardElement.addEventListener("click", this.handleCardClick);
  }

  renderCard() {
    this._cardTemplate = document.querySelector(".template").content;
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector(".card__img");

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._title;
    this._cardElement.querySelector(".card__title").textContent = this._title;

    this._setEventListeners();
    return this._cardElement;
  }
}
