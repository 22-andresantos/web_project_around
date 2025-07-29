// função abrir e fechar popup Nome e profissão
const openButton = document.querySelector(".profile__button-open");

const closedButton = document.querySelector(".popup__button-close");

const popup = document.querySelector(".popup");

function openPopup() {
  popup.style.display = "flex";
}

openButton.addEventListener("click", openPopup);

function closePopup() {
  popup.style.display = "none";
}

closedButton.addEventListener("click", closePopup);

// fechando popup com tecla Esc
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
});

// inserir nome e profissão
const formElement = document.querySelector(".popup");

const handler = document.querySelector(".popup__button-submit");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__input_name");
  let jobInput = document.querySelector(".popup__input_job");

  let name = nameInput.value;
  let job = jobInput.value;

  const nameProfile = document.querySelector(".profile__title");
  const jobProfile = document.querySelector(".profile__subtitle");

  nameProfile.textContent = name;
  jobProfile.textContent = job;

  nameInput.value = "";
  jobInput.value = "";
}

handler.addEventListener("click", closePopup);

formElement.addEventListener("submit", handleProfileFormSubmit);

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

// Criação de Cards
const cardContainer = document.querySelector(".cards");

function handleCard(cardLink, cardName) {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.classList.add("card__img");
  imageElement.src = cardLink;
  imageElement.alt = cardName;
  imageElement.onclick = function () {
    abrirImg(cardLink, cardName);
  };

  const nameElement = document.createElement("p");
  nameElement.classList.add("card__title");
  nameElement.textContent = cardName;

  const addElement = document.createElement("button");
  addElement.classList.add("card__like");
  addElement.addEventListener("click", function (evt) {
    evt.target.classList.toggle("card__like_active");
  });

  const removeElement = document.createElement("button");
  removeElement.classList.add("card__remove");
  removeElement.addEventListener("click", function () {
    cardElement.remove();
  });

  cardElement.append(imageElement);
  cardElement.append(nameElement);
  cardElement.append(addElement);
  cardElement.append(removeElement);

  cardContainer.prepend(cardElement);
}

function handleCards() {
  initialCards.forEach((card) => {
    handleCard(card.link, card.name);
  });
}

handleCards();

// função abrir e fechar popup do nome e imagem atraves do usuário
const addButton = document.querySelector(".profile__button-add");

const removeButton = document.querySelector(".modal__button-close");

const modal = document.querySelector(".modal");

function openModal() {
  modal.style.display = "flex";
}

addButton.addEventListener("click", openModal);

function closeModal() {
  modal.style.display = "none";
}

removeButton.addEventListener("click", closeModal);

// fechando modal com tecla Esc

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
});

// Inserir imagem e nome através do popup
const modalElement = document.querySelector(".modal");

const createSubmit = document.querySelector(".modal__button-submit");

function handleCardSubmit(evt) {
  evt.preventDefault();
  let nameModal = document.querySelector(".modal__input_name");
  let linkModal = document.querySelector(".modal__input_link");

  let nameCard = nameModal.value;
  let linkCard = linkModal.value;

  handleCard(linkCard, nameCard);

  nameModal.value = "";
  linkModal.value = "";
}

modalElement.addEventListener("submit", handleCardSubmit);

createSubmit.addEventListener("click", closeModal);

//Popup Image
const imgCard = document.querySelector(".img");

function abrirImg(cardLink, cardName) {
  document.querySelector(".img__src").src = cardLink;
  document.querySelector(".img__title").textContent = cardName;
  document.querySelector(".img").style.display = "flex";
}

function fecharImg() {
  document.querySelector(".img").style.display = "none";
}

// fechando modal com tecla Esc
const img = document.querySelector(".img");

function fecharImagem() {
  img.style.display = "none";
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    fecharImagem();
  }
});

//validação popup editar perfil
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__input-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button-submit_inactive");
  } else {
    buttonElement.classList.remove("popup__button-submit_inactive");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__button-submit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__fieldset")
    );

    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
    });
  });
};

enableValidation();

// enableValidation({
//   formSelector: ".popup__form",
//   inputSelector: ".popup__input",
//   submitButtonSelector: ".popup__button",
//   inactiveButtonClass: "popup__button_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible"
// });
