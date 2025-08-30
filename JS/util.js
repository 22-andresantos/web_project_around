// função abrir e fechar popup Nome e profissão

const openButton = document.querySelector(".profile__button-open");

const closedButton = document.querySelector(".popup__button-close");

const popup = document.querySelector(".popup");

export function openPopup() {
  popup.style.display = "flex";
}

openButton.addEventListener("click", openPopup);

export function closePopup() {
  popup.style.display = "none";
  popup.removeEventListener("keydown", closePopup);
}

closedButton.addEventListener("click", closePopup);

// fechando popup com tecla Esc
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closePopup();
  }
});

// fechando popup fora do elemento
popup.addEventListener("click", (evt) => {
  if (evt.target === popup) {
    closePopup();
  }
});

// função abrir e fechar modal do nome e imagem atraves do usuário
const addButton = document.querySelector(".profile__button-add");

const removeButton = document.querySelector(".modal__button-close");

const modal = document.querySelector(".modal");

export function openModal() {
  modal.style.display = "flex";
}

addButton.addEventListener("click", openModal);

export function closeModal() {
  modal.style.display = "none";
  modal.removeEventListener("keydown", closeModal);
}

removeButton.addEventListener("click", closeModal);

// fechando modal com tecla Esc

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeModal();
  }
});

// fechando modal fora do elemento
modal.addEventListener("click", (evt) => {
  if (evt.target === modal) {
    closeModal();
  }
});

// Popup card imagem

const imgCloseButton = document.querySelector(".img__button-close");
const expandedImagePopup = document.querySelector(".img");
const expandedImage = document.querySelector(".img__src");
const expandedImageTitle = document.querySelector(".img__title");

// Função para expandir imagens
export function handleCardClick(_link, _name) {
  abrirImg(expandedImagePopup);
  expandedImage.src = this._link;
  expandedImage.alt = this._name;
  expandedImageTitle.textContent = this._name;
}

export function abrirImg() {
  expandedImagePopup.style.display = "flex";
}

export function fecharImg() {
  expandedImagePopup.style.display = "none";
  expandedImagePopup.removeEventListener("keydown", fecharImg);
}

imgCloseButton.addEventListener("click", fecharImg);

// fechando card imagem com tecla Esc
document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    fecharImg();
  }
});

// fechando card imagem fora do elemento
const img = document.querySelector(".img");

img.addEventListener("click", (evt) => {
  if (evt.target === img) {
    fecharImg();
  }
});
