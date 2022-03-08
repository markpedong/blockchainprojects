import View from "./View.js";

//prettier-ignore
class TopCoinsView extends View {
    constructor(container, description){
        super()
        this._container = container
        this._description = description
    }

  topCoinsHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    const markup =  `
      <p id="crypto__price">${numeral(this._data.price).format("$ 0,0[.]00")}</p>
      <div class="top__bitcoin" id="cryptotext__container">
      <p id="crypto__header">${this._data.name}</p>
      <p id="crypto__acronym">${this._data.acronym}</p>
      </div>
      <p id="top__crypto__description">${this._description}</p>
    `
    ;

    document.querySelector(this._container).insertAdjacentHTML('beforeend', markup)
    
  }
}

export const bitcoin = new TopCoinsView(
  ".top__bitcoin",
  "Digital currency in which a record of transactions is maintained."
);

export const ethereum = new TopCoinsView(
  ".top__ethereum",
  "Blockchain technology to create and run decentralized digital applications."
);

export const tether = new TopCoinsView(
  ".top__tether",
  "Cryptocurrency that enables instant payments to anyone in the world."
);
