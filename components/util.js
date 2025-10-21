const profileAdd = document.querySelector(".button__submit");
const popupElement = document.querySelector(".popup");
const formListElement = document.querySelectorAll(".popup__form");
const cardBtnElement = document.querySelector(".button__profile-add");
const profileElement = document.querySelector(".profile");
const profileBtnElement = document.querySelector(".button__profile-open");
const galleryCardElement = document.querySelector(".cards");

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

//
const profileFormConfig = {
  formSelector: ".popup__form-profile",
  fieldsetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button__submit",
  inactiveButtonClass: ".button__submit-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__input_error_invalid",
};

const cardFormConfig = {
  formSelector: ".popup__form-card",
  fieldsetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button__submit",
  inactiveButtonClass: ".button__submit-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__input_error_invalid",
};

export {
  initialCards,
  profileAdd,
  popupElement,
  formListElement,
  cardBtnElement,
  profileElement,
  profileBtnElement,
  galleryCardElement,
  profileFormConfig,
  cardFormConfig,
};
