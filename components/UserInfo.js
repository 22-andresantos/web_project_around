// Renderiza informações sobre o usuário
export default class UserInfo {
  constructor({ nameSelector, jobSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._jobElement = document.querySelector(jobSelector);
  }
  getUserInfo() {
    return {
      newName: this._nameElement.textContent,
      newJob: this._jobElement.textContent,
    };
  }

  setUserInfo({ userName, userJob }) {
    this._nameElement.textContent = userName;
    this._jobElement.textContent = userJob;
  }
}
