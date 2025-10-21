import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";

import {
  initialCards,
  cardBtnElement,
  profileBtnElement,
  galleryCardElement,
  profileFormConfig,
  cardFormConfig,
} from "../components/Util.js";

// renderizar cards iniciais
const cardSection = new Section(
  {
    items: initialCards,

    renderer: (item) => {
      const createCard = new Card(
        {
          name: item.name,
          link: item.link,
        },
        galleryCardElement
      );
      cardSection.addItem(createCard.renderCard());
    },
  },

  ".cards"
);

// Inserir novo card
cardBtnElement.addEventListener("click", () => {
  const popupCardElement = new PopupWithForm(
    {
      handleForm: ({ title, link }) => {
        const section = new Section(
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
                },
                galleryCardElement
              );
              section.addItem(createCard.renderCard());
            },
          },
          ".cards"
        );
        section.renderer();
        popupCardElement.close();
      },
    },
    ".popup__add"
  );
  popupCardElement.setEventListeners();
  popupCardElement.open();
});

cardSection.renderer();

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

// Validação Profile e Card
const formValidatorProfile = new FormValidator(profileFormConfig);
const formValidatorCard = new FormValidator(cardFormConfig);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
