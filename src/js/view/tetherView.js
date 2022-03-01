import View from "./View.js";

//prettier-ignore
class TetherView extends View {
 
  // Rendering the Bitcoin Top 3
  _parentElement = document.querySelector('.top__tether')
  _description = 'Cryptocurrency that enables instant payments to anyone in the world.'

  tetherHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
      <img id="top__brand" src="/src/img/${this._data.acronym}.svg" alt="${this._data.acronym}" />
      <p id="crypto__price">${numeral(this._data.price).format("$ 0,0[.]00")}</p>
      <div class="top__bitcoin" id="cryptotext__container">
      <p id="crypto__header">${this._data.name}</p>
      <p id="crypto__acronym">${this._data.acronym}</p>
      </div>
      <p id="top__crypto__description">${this._description}</p>
    `
    ;
  }
}

export default new TetherView();
