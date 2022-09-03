class Popup {
  constructor({ popupSelector, name, job, about }) {
    this.popupSelector = popupSelector;
    this.name = name;
    this.job = job;
    this.about = about;
    this._button = document.querySelector(".popup__button");
  }

  open() {}

  close() {}

  setEventListener() {
    this._button.addEventListener("click", this.close);
  }
}

export default Popup;
