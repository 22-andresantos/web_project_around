import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {
  cardBtnElement,
  profileBtnElement,
  profileFormConfig,
  cardFormConfig,
  avatarFormConfig,
  api,
  userInfo,
  avatarBtnElement,
} from "../components/Util_temp.js";

// obter informações do usuário da API
api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo({
      userName: data.name,
      userJob: data.about,
      userAvatar: data.avatar,
    });
  })
  .catch((err) => console.error(err));

// inserir nome e profissão
profileBtnElement.addEventListener("click", () => {
  const { newName, newJob } = userInfo.getUserInfo();
  document.forms.profile.userName.value = newName;
  document.forms.profile.userJob.value = newJob;

  const popupProfile = new PopupWithForm(
    {
      handleForm: ({ userName, userJob }) => {
        api
          .updateUserInfo({ name: userName, about: userJob })
          .then((updateData) => {
            userInfo.setUserInfo({
              userName: updateData.name,
              userJob: updateData.about,
            });
            popupProfile.close();
          })
          .catch((err) => console.error(err));
      },
    },
    ".popup__profile"
  );
  popupProfile.setEventListeners();
  popupProfile.open();
});

// Função de criação dos cards
const confirmPopupDelete = new PopupWithConfirmation(".popup__delete");
function createCard(item) {
  const createCard = new Card(
    {
      title: item.name,
      link: item.link,
      cardId: item._id,
      isLiked: item.isLiked,
      handleDelete: (card) => {
        confirmPopupDelete.open();
        confirmPopupDelete.setSubmitAction(() => {
          api
            .deleteCard(card._cardId)
            .then(() => {
              card.removeCard();
              confirmPopupDelete.close();
            })
            .catch((err) => console.error(err));
        });
      },
    },
    ".template"
  );
  return createCard.renderCard();
}
confirmPopupDelete.setEventListeners();

// renderizar cards iniciais da API
let cardSection;
api
  .getInitialCards()
  .then((cards) => {
    cardSection = new Section(
      {
        items: cards,
        renderer: (item) => {
          const card = createCard(item);
          cardSection.addItem(card);
        },
      },
      ".cards"
    );
    cardSection.renderer();
  })
  .catch((err) => console.error(err));

// Inserir novo card
cardBtnElement.addEventListener("click", () => {
  const popupCardElement = new PopupWithForm(
    {
      handleForm: ({ title, link }) => {
        api
          .addNewCard({ name: title, link })
          .then(() => {
            const card = createCard({
              name: title,
              link: link,
            });
            cardSection.addItem(card);
            popupCardElement.close();
          })
          .catch((err) => console.error(err));
      },
    },
    ".popup__add"
  );
  popupCardElement.setEventListeners();
  popupCardElement.open();
});

// Inserir novo Avatar
avatarBtnElement.addEventListener("click", () => {
  const popupAvatarElement = new PopupWithForm(
    {
      handleForm: ({ userAvatar }) => {
        popupAvatarElement.renderLoading(true);
        api
          .updateAvatar({ avatar: userAvatar })
          .then((data) => {
            userInfo.setUserInfo({
              userAvatar: data.avatar,
              userName: data.name,
              userJob: data.about,
            });
            popupAvatarElement.close();
          })
          .catch((err) => console.error(err))
          .finally(() => {
            popupAvatarElement.renderLoading(false);
          });
      },
    },
    ".popup__avatar"
  );
  popupAvatarElement.setEventListeners();
  popupAvatarElement.open();
});

// Validação Profile e Card
const formValidatorProfile = new FormValidator(profileFormConfig);
const formValidatorCard = new FormValidator(cardFormConfig);
const formValidatorAvatar = new FormValidator(avatarFormConfig);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();
