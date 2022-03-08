import View from "./View.js";

class NameResult extends View {
  constructor(container) {
    super();
    this._container = container;
  }
  _mainResultRender() {
    const markup = this._data.map(this._generateMarkup).join("");

    document
      .querySelector(this._container)
      .insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._container.innerHTML = "";
  }
  _generateMarkup(result) {
    //prettier-ignore

    return `
    <li id="name__item">
      <img id="result__logo" src="${result.image}" alt="${result.image}" />
      <p class="col-10" id="result__name">${
        result.name.split(' ').slice(0, 2).join(' ')
      
      }</p>
    </li>
    `
  }

  mainResultHandlerRender(handler) {
    window.addEventListener("load", handler);
  }
}

export const nameResult = new NameResult("#result__name__list");

class NumberResult extends NameResult {
  constructor(container) {
    super(container);
  }

  _mainResultRender() {
    for (let i = 1; i <= this._data.length; i++) {
      const count = `
      <li id="number__item">
        <p class="mb-0 text-center">${i}</p>
      </li>
      `;

      document
        .querySelector(this._container)
        .insertAdjacentHTML("beforeend", count);
    }
  }
}

export const numberResult = new NumberResult("#result__number");

class PriceResult extends NameResult {
  constructor(container) {
    super(container);
  }

  _generateMarkup(result) {
    //prettier-ignore
    return `
    <li class="col-5" id="price__item">
      <p id="price__content">${numeral(result.price).format("($ 0.00 a)")}</p>
    </li>
    `;
  }
}

export const priceResult = new PriceResult("#price__list");

class VolumeResult extends NameResult {
  constructor(container) {
    super(container);
  }

  _generateMarkup(result) {
    return `
    <li class="col-5" id="volume__item">
      <p id="volume__content">${
        result.volume === 0
          ? "No Volume"
          : numeral(result.volume).format("($ 0.00 a)")
      }</p>
    </li>
    `;
  }
}
export const volumeResult = new VolumeResult("#volume__list");
class MarketCapResult extends NameResult {
  constructor(container) {
    super(container);
  }

  _generateMarkup(result) {
    //prettier-ignore
    return `
    <li class="col-5" id="marketcap__item">
    <p id="marketcap__content">${
      result.marketcap === 0 ? "No Marketcap" : numeral(result.marketcap).format('($ 0.00 a)')
      }</p>
    </li>
    `;
  }
}
export const marketCapResult = new MarketCapResult("#marketcap__list");

class ViewMore extends NameResult {
  constructor(container) {
    super(container);
  }

  _generateMarkup() {
    return `
    <li class="col-5" id="moreinfo__item">
      <button id="moreinfo__button" data-toggle="collapse" data-target="#collapseContainer"> View more </button>
    </li>
    `;
  }
}
export const viewMoreResult = new ViewMore("#moreinfo__list");
