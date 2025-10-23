import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";

import {
  initialCards,
  cardBtnElement,
  profileBtnElement,
  profileFormConfig,
  cardFormConfig,
} from "../components/Util.js";

// Função de criação dos cards
function createCard(item) {
  const createCard = new Card(
    {
      title: item.title,
      link: item.link,
    },
    ".template"
  );
  return createCard.renderCard();
}

// renderizar cards iniciais
const cardSection = new Section(
  {
    items: initialCards,

    renderer: (item) => {
      const card = createCard(item);
      cardSection.addItem(card);
    },
  },

  ".cards"
);

// Inserir novo card
cardBtnElement.addEventListener("click", () => {
  const popupCardElement = new PopupWithForm(
    {
      handleForm: ({ title, link }) => {
        const card = createCard({ title, link });
        cardSection.addItem(card);

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
