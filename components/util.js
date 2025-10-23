const profileAdd = document.querySelector(".button__submit");
const popupElement = document.querySelector(".popup");
const formListElement = document.querySelectorAll(".popup__form");
const cardBtnElement = document.querySelector(".button__profile-add");
const profileElement = document.querySelector(".profile");
const profileBtnElement = document.querySelector(".button__profile-open");

const initialCards = [
  {
    title: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    title: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    title: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    title: "Lago di Braies",
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
  profileFormConfig,
  cardFormConfig,
};
