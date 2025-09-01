import Card from "./card.js";

import FormValidator from "./FormValidator.js";

import { closePopup, closeModal, handleCardClick } from "./util.js";

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

// criando cards iniciais
initialCards.forEach((data) => {
  const card = new Card(data, ".template", handleCardClick);
  const cardContainer = document.querySelector(".cards");
  cardContainer.append(card.generateCard());
});

// Configuração de validação
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__input_invalid",
};

// Validação
const profileForm = document.querySelector(".popup__form");
const imageForm = document.querySelector(".modal__form");

const profileValidator = new FormValidator(config, profileForm);
profileValidator.enableValidation();

const imageValidator = new FormValidator(config, imageForm);
imageValidator.enableValidation();

// inserir nome e profissão
const popupElement = document.querySelector(".popup");
const handler = document.querySelector(".popup__button");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#input__name");
  const jobInput = document.querySelector("#input__job");

  const name = nameInput.value;
  const job = jobInput.value;

  const nameProfile = document.querySelector(".profile__title");
  const jobProfile = document.querySelector(".profile__subtitle");

  nameProfile.textContent = name;
  jobProfile.textContent = job;

  nameInput.value = "";
  jobInput.value = "";
}

handler.addEventListener("click", closePopup);

popupElement.addEventListener("submit", handleProfileFormSubmit);

// Inserir imagem e nome através do popup

const modalElement = document.querySelector(".modal");

const createSubmit = document.querySelector(".modal__button");

function handleCardSubmit(evt) {
  evt.preventDefault();
  const nameModal = document.querySelector("#input__text");
  const linkModal = document.querySelector("#input__link");

  const nameCard = nameModal.value;
  const linkCard = linkModal.value;

  const card = new Card(
    { name: nameCard, link: linkCard },
    ".template",
    handleCardClick
  );
  const cardContainer = document.querySelector(".cards");
  cardContainer.prepend(card.generateCard());

  nameModal.value = "";
  linkModal.value = "";
}

modalElement.addEventListener("submit", handleCardSubmit);

createSubmit.addEventListener("click", closeModal);
