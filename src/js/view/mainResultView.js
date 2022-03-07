import View from "./View.js";

class MainResult extends View {
  _mainResultRender() {
    console.log(this._data);
    const markup = this._data.map(this._generateMarkup).join("");

    document
      .querySelector("#result__name__list")
      .insertAdjacentHTML("afterbegin", markup);
  }

  _generateMarkup(result) {
    //prettier-ignore
    return `
    <li id="name__item">
      <img id="result__logo" src="${result.image}" alt="${result.image}" />
      <p class="col-10" id="result__name">${result.name}</p>
    </li>
    `
  }

  mainResultHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new MainResult();
