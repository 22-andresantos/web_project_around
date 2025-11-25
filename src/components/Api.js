export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // validação da resposta da requisição
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ name, about }),
    }).then(this._checkResponse);
  }

  updateAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ avatar }),
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  addNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({ name, link }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkResponse);
  }

  addLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "PUT",
    }).then(this._checkResponse);
  }

  removeLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method: "DELETE",
    }).then(this._checkResponse);
  }
}
