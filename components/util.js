import Api from "./Api.js";
import UserInfo from "../components/UserInfo.js";

const profileAdd = document.querySelector(".button__submit");
const popupElement = document.querySelector(".popup");
const formListElement = document.querySelectorAll(".popup__form");
const cardBtnElement = document.querySelector(".button__profile-add");
const cardBtnDelete = document.querySelector(".button__remove-open");
const profileElement = document.querySelector(".profile");
const profileBtnElement = document.querySelector(".button__profile-open");
const avatarBtnElement = document.querySelector(".profile__image");

// instanciação da Api
const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "0dcf9fb5-3f22-4ec0-ad4a-45a6e56afe32",
    "Content-Type": "application/json",
  },
});

// instanciação do UserInfo
const userInfo = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__subtitle",
  avatarSelector: ".profile__image",
});

// configurações de validação dos formulários
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

const avatarFormConfig = {
  formSelector: ".popup__form-avatar",
  fieldsetSelector: ".popup__fieldset",
  inputSelector: ".popup__input",
  submitButtonSelector: ".button__submit",
  inactiveButtonClass: ".button__submit-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: ".popup__input_error_invalid",
};

export {
  profileAdd,
  popupElement,
  formListElement,
  cardBtnElement,
  cardBtnDelete,
  profileElement,
  profileBtnElement,
  profileFormConfig,
  cardFormConfig,
  avatarFormConfig,
  api,
  userInfo,
  avatarBtnElement,
};
