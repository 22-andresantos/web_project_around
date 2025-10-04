import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";
import section from "../components/Section.js";
import {
  initialCards,
  formListElement,
  cardBtnElement,
  profileBtnElement,
  galleryCardElement,
} from "../components/util.js";

// Configuração de validação

const formValidator = new FormValidator(
  {
    formSelector: ".popup__form",
    fieldsetSelector: ".popup__fieldset",
    inputSelector: ".popup__input",
    submitButtonSelector: ".button__submit",
    inactiveButtonClass: ".button__submit-disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: ".popup__input_error_invalid",
  },
  formListElement
);

formValidator.enableValidation();

// renderizar cards iniciais
const addInitialCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const createCard = new Card(
        {
          name: item.name,
          link: item.link,
          handleCardClick: (evt, name, link) => {
            if (evt.target.classList.contains("button__remove")) {
              const cardElement = evt.target.closest(".card");
              if (cardElement) {
                cardElement.remove();
              }
            }
            if (evt.target.classList.contains("button__like")) {
              evt.target.classList.toggle("button__like_active");
            }
            if (evt.target.classList.contains("card__img")) {
              const popupWithImage = new PopupWithImage(".popup__img");

              popupWithImage.open({
                title: name,
                link: link,
              });
              popupWithImage.setEventListeners();
            }
          },
        },
        galleryCardElement
      );
      addInitialCards.addItem(createCard.renderCard());
    },
  },

  ".cards"
);

addInitialCards.renderer();

formValidator.enableValidation();

// inserir nome e profissão
profileBtnElement.addEventListener("click", () => {
  const userInfo = new UserInfo({
    nameSelector: ".profile__title",
    jobSelector: ".profile__subtitle",
  });

  const { newName, newJob } = userInfo.getUserInfo();

  document.forms.profile.userName.value = newName;
  document.forms.profile.userJob.value = newJob;

  const popupProfile = new PopupWithForm(
    {
      handleForm: ({ userName, userJob }) => {
        userInfo.setUserInfo({ userName, userJob });
        popupProfile.close();
      },
    },
    ".popup__profile"
  );
  popupProfile.setEventListeners();
  popupProfile.open();
});

// Inserir novo card
cardBtnElement.addEventListener("click", () => {
  const popupCardElement = new PopupWithForm(
    {
      handleForm: ({ title, link }) => {
        const addCard = new section(
          {
            items: [
              {
                title,
                link,
              },
            ],
            renderer: (item) => {
              const createCard = new Card(
                {
                  name: item.title,
                  link: item.link,
                  handleCardClick: (evt, name, link) => {
                    if (evt.target.classList.contains("button__remove")) {
                      const cardElement = evt.target.closest(".card");
                      if (cardElement) {
                        cardElement.remove();
                      }
                    }
                    if (evt.target.classList.contains("button__like")) {
                      evt.target.classList.toggle("button__like_active");
                    }
                    if (evt.target.classList.contains("card__img")) {
                      const popupWithImage = new PopupWithImage(".popup__img");

                      popupWithImage.open({
                        title: name,
                        link: link,
                      });
                      popupWithImage.setEventListeners();
                    }
                  },
                },
                galleryCardElement
              );
              addCard.addItem(createCard.renderCard());
            },
          },
          ".cards"
        );
        addCard.renderer();
        popupCardElement.close();
      },
    },
    ".popup__add"
  );
  popupCardElement.setEventListeners();
  popupCardElement.open();
});

export { formValidator };

// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();

//   const nameInput = document.querySelector("#input__name");
//   const jobInput = document.querySelector("#input__job");

//   const name = nameInput.value;
//   const job = jobInput.value;

//   const nameProfile = document.querySelector(".profile__title");
//   const jobProfile = document.querySelector(".profile__subtitle");

//   nameProfile.textContent = name;
//   jobProfile.textContent = job;

//   nameInput.value = "";
//   jobInput.value = "";
// }

// handler.addEventListener("click", closePopup);

// popupElement.addEventListener("submit", handleProfileFormSubmit);

// Inserir imagem e nome através do popup

// const modalElement = document.querySelector(".modal");

// const createSubmit = document.querySelector(".modal__button");

// function handleCardSubmit(evt) {
//   evt.preventDefault();
//   const nameModal = document.querySelector("#input__text");
//   const linkModal = document.querySelector("#input__link");

//   const nameCard = nameModal.value;
//   const linkCard = linkModal.value;

//   const card = new Card(
//     { name: nameCard, link: linkCard },
//     ".template",
//     handleCardClick
//   );
//   const cardContainer = document.querySelector(".cards");
//   cardContainer.prepend(card.generateCard());

//   nameModal.value = "";
//   linkModal.value = "";
// }

// modalElement.addEventListener("submit", handleCardSubmit);

// createSubmit.addEventListener("click", closeModal);
