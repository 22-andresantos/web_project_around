let openButton = document.querySelector(".profile__button-open");

let closedButton = document.querySelector(".popup__button-close");

let popup = document.querySelector(".popup");

let popupToggle = document.querySelector(".profile__button-open");

function openPopup() {
  popup.classList.add("popup__opened");
  popupToggle.setAttribute("profile__button-open:hover", "opacity:100%");
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

const cardContainer = document.querySelector(".cards");

initialCards.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  const imageElement = document.createElement("img");
  imageElement.src = card.link;
  imageElement.alt = card.name;

  const nameElement = document.createElement("p");
  nameElement.textContent = card.name;

  const addElement = document.createElement("button");
  addElement.classList.add("card__like");

  const removeElement = document.createElement("button");
  removeElement.classList.add("card__remove");

  cardElement.appendChild(imageElement);
  cardElement.appendChild(nameElement);
  cardElement.appendChild(addElement);
  cardElement.appendChild(removeElement);

  // cardElement
  //   .querySelector(".card__like")
  //   .addEventListener("click", function (evt) {
  //     evt.target.classList.toggle("card__like_active");
  //   });

  cardContainer.appendChild(cardElement);
});
