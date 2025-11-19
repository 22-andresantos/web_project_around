import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForms.js";
import PopupWithConfirmation from "../components/PopupWithForms.js";

import {
  cardBtnElement,
  profileBtnElement,
  profileFormConfig,
  cardFormConfig,
  cardBtnDelete,
  avatarFormConfig,
  api,
  userInfo,
  avatarBtnElement,
  // FormConfig
} from "../components/Util.js";

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
function createCard(item) {
  const createCard = new Card(
    {
      title: item.name,
      link: item.link,
      cardId: item._id,
      isLiked: item.isLiked,
    },
    ".template"
  );
  return createCard.renderCard();
}

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

//Popup deletar Card
// const confirmPopupDelete = new PopupWithConfirmation(
//   handleForm(openConfirmPopup),
//   ".popup__delete"
// );
// confirmPopupDelete.setEventListeners();
// let confirmDeletePopup = null;
// function openConfirmPopup(handleDeleteCard) {
//   confirmDeletePopup = handleDeleteCard;
//   confirmDeletePopup.setSubmitDelete(() => {
//     if (confirmDeletePopup) {
//       confirmDeletePopup();
//     }
//     confirmPopupDelete.close();
//   });
//   confirmPopupDelete.open();
// }

// function handleDeleteCard(cardId, cardElement) {
//   api
//     .deleteCard(cardId)
//     .then(() => {
//       cardElement.remove();
//     })
//     .catch((err) => console.error(err));
// }

// Validação Profile e Card
const formValidatorProfile = new FormValidator(profileFormConfig);
const formValidatorCard = new FormValidator(cardFormConfig);
const formValidatorAvatar = new FormValidator(avatarFormConfig);
formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formValidatorAvatar.enableValidation();

// const formValidator = new FormValidator(FormConfig);
// formValidator.enableValidation();
