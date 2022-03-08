import View from "./View.js";

class ViewMoreDetails extends View {
  _parentEl = document.querySelectorAll("#moreinfo__button");

  getViewBtn() {
    console.log(this._viewMoreButton);
  }

  viewMoreHandler(handler) {
    this._parentEl.addEventListener("click", function () {
      handler();
    });
  }
}

export default new ViewMoreDetails();
