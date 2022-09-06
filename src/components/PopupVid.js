class PopupVid {
  constructor({ selector }) {
    this._selectorElement = document.querySelector(`${selector}`);
    this._exploreBtn = document.querySelector(".explore__btn");
  }

  openPopupVid() {
    this._selectorElement.classList.add("popup__vid_open");
  }

  closeVid() {
    this._selectorElement.classList.remove("popup__vid_open");
  }

  setEventListeners() {
    this._exploreBtn.addEventListener("click", () => this.openPopupVid());

    this._selectorElement.addEventListener("click", () => this.closeVid());
  }
}

export default PopupVid;
