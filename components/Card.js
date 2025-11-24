// Criação de Cards
import PopupWithForm from "./PopupWithForms.js";
import PopupWithImage from "./PopupWithImage.js";
import { api } from "./Util.js";

export default class Card {
  constructor(
    { title, link, cardId, isLiked, handleDelete, openConfirmPopup },
    templateSelector
  ) {
    this._title = title;
    this._link = link;
    this._templateSelector = templateSelector;
    this._cardId = cardId;
    this._isLiked = isLiked;
    this._handleDelete = handleDelete;
    this._openConfirmPopup = openConfirmPopup;
  }

  _checkIsLiked() {
    if (this._isLiked === true) {
      this._likeButton.classList.toggle("button__like_active");
    }
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

    this._deleteButton.addEventListener("click", () =>
      this._handleDelete(this)
    );

    this._likeButton.addEventListener("click", this._handleLike);
  }

  removeCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _handleLike = () => {
    if (this._isLiked) {
      return api
        .removeLike(this._cardId)
        .then(() => this._likeButton.classList.toggle("button__like_active"))
        .catch((err) => console.error(err));
    }

    api
      .addLike(this._cardId)
      .then(() => this._likeButton.classList.toggle("button__like_active"))
      .catch((err) => console.error(err));
  };

  renderCard() {
    this._cardTemplate = document.querySelector(this._templateSelector).content;
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector(".card__img");
    this._cardImageElement.src = this._link;
    this._cardImageElement.alt = this._title;
    this._cardElement.querySelector(".card__title").textContent = this._title;
    this._deleteButton = this._cardElement.querySelector(
      ".button__remove-open"
    );
    this._likeButton = this._cardElement.querySelector(".button__like");

    this._setEventListeners();
    this._checkIsLiked();
    return this._cardElement;
  }
}
