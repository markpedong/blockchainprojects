import View from "./View.js";

class MainResult extends View {
  _parentEl = "#result__name__list";

  _mainResultRender() {
    //prettier-ignore
    const markup = `
    <li id="name__item">
        <img id="result__logo" src="${this._data.map((i) => i.image)}" alt="${this._data.map((i) => i.image)}" />
        <p class="col-10" id="result__name">${this._data.map((i) => i.name)}</p>
    </li>
    `;
    console.log(markup);
    document
      .querySelector(this._parentEl)
      .insertAdjacentHTML("afterbegin", markup);
  }

  mainResultHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export default new MainResult();
