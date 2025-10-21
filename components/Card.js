// Criação de Cards
import PopupWithImage from "./PopupWithImage.js";
export default class Card {
  constructor({ name, link }, galleryCardElement) {
    this._title = name;
    this._link = link;
    this._containerElement = galleryCardElement;
  }

  _setEventListeners() {
    this._cardElement.addEventListener("click", this.handleCardClick);
    const popupWithImage = new PopupWithImage(".popup__img");
    this._cardImageElement.addEventListener("click", () => {
      popupWithImage.open({
        title: this._title,
        link: this._link,
      });
      popupWithImage.setEventListeners();
    });
    this._deleteButton.addEventListener("click", this._handleDelete);
    this._likeButton.addEventListener("click", this._handleLike);
  }

  _handleDelete = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleLike = () => {
    this._likeButton.classList.toggle("button__like_active");
  };

  renderCard() {
    this._cardTemplate = document.querySelector(".template").content;
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector(".card__img");

    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._title;
    this._cardElement.querySelector(".card__title").textContent = this._title;
    this._deleteButton = this._cardElement.querySelector(".button__remove");
    this._likeButton = this._cardElement.querySelector(".button__like");
    this._setEventListeners();
    return this._cardElement;
  }
}
