let openButton = document.querySelector(".profile__button-open");

let closedButton = document.querySelector(".popup__button-close");

let popup = document.querySelector(".popup");

function openPopup() {
  popup.classList.add("popup__opened");
}

openButton.addEventListener("click", openPopup);

function closePopup() {
  popup.classList.remove("popup__opened");
}

closedButton.addEventListener("click", closePopup);

let formElement = document.querySelector(".popup");

let handler = document.querySelector(".popup__button-submit");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  let nameInput = document.querySelector(".popup__input_name");
  let jobInput = document.querySelector(".popup__input_job");

  let name = nameInput.value;
  let job = jobInput.value;

  let nameProfile = document.querySelector(".profile__title");
  let jobProfile = document.querySelector(".profile__subtitle");

  nameProfile.textContent = name;
  jobProfile.textContent = job;

  nameInput.value = "";
  jobInput.value = "";
}

handler.addEventListener("click", closePopup);

formElement.addEventListener("submit", handleProfileFormSubmit);
