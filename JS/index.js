import Card from "./card.js";

import { enableValidation, enableValidationCard } from "./FormValidator.js";

import {
  openPopup,
  closePopup,
  openModal,
  closeModal,
  handleCardClick,
  abrirImg,
  fecharImg,
} from "./util.js";

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

// inserir nome e profissão
const popupElement = document.querySelector(".popup");

const handler = document.querySelector(".popup__submit");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameInput = document.querySelector(".popup__input-name");
  const jobInput = document.querySelector(".popup__input-job");

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
  const nameModal = document.querySelector(".modal__input-text");
  const linkModal = document.querySelector(".modal__input-link");

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
