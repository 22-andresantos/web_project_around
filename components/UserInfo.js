// Renderiza informações sobre o usuário

export default class UserInfo {
  constructor({ nameSelector, jobSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
    this._avatarElement = document.querySelector(avatarSelector);
  }
  getUserInfo() {
    return {
      newName: this._nameElement.textContent,
      newJob: this._jobElement.textContent,
    };
  }

  setUserInfo({ userName, userJob, userAvatar }) {
    this._nameElement.textContent = userName;
    this._jobElement.textContent = userJob;
    if (userAvatar && this._avatarElement) {
      this._avatarElement.src = userAvatar;
      this._avatarElement.alt = userName;
    }
  }
}
