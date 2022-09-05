class Popup {
  constructor({ popupSelector, button, buttonClose }) {
    this._popupElement = document.querySelector(`${popupSelector}`);
    this._buttonElement = document.querySelector(`${button}`);
    this._button = document.querySelector(`${buttonClose}`);
  }

  open() {
    this._popupElement.classList.add("popup_open");
  }

  close() {
    this._popupElement.classList.remove("popup_open");
  }

  setEventListeners() {
    this._button.addEventListener("click", () => {
      this.close();
    });
    this._buttonElement.addEventListener("click", () => {
      this.open();
    });
  }

  fillInfo(name, job, about) {
    this.name = document.querySelector("#name");
    this.name.textContent = name;
    this.job = document.querySelector("#job");
    this.job.textContent = job;
    this.about = document.querySelector(".popup__text");
    this.about.textContent = about;
  }

  fillUserInfo(name, job, about) {
    this.name = document.querySelector("#name2");
    this.name.textContent = name;
    this.job = document.querySelector("#job2");
    this.job.textContent = job;
    this.about = document.querySelector(".popup__text2");
    this.about.textContent = about;
  }
}

export default Popup;
