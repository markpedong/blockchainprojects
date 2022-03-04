import View from "./View.js";
class TotalCryptoMarket extends View {
  constructor(container, description, logo, format) {
    super();
    this._container = container;
    this._description = description;
    this._logo = logo;
    this._format = format;
  }

  totalCryptoHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _markupTotalMarketCap() {
    //   prettier-ignore
    const markup = `
        <i class="bi bi-${this._logo}"></i>
        <div class="crypto__text">
        <p id="crypto__number">${numeral(this._data.totalMarketCap).format(`${this._format}`)}</p>
        <p id="crypto__description">${this._description}</p>
    `;
    document
      .querySelector(this._container)
      .insertAdjacentHTML("afterbegin", markup);
  }
}

export const totalCryptoMarketCap = new TotalCryptoMarket(
  ".total__crypto",
  "Digital Currency Market Cap.",
  "currency-bitcoin",
  `$ (0.00 a)`
);

class TotalActiveCrypto extends TotalCryptoMarket {
  constructor(container, description, logo, format) {
    super(container, description, logo, format);
  }

  _renderTotalActive() {
    //   prettier-ignore
    const markup = `
          <i class="bi bi-${this._logo}"></i>
          <div class="crypto__text">
          <p id="crypto__number">${numeral(this._data.activeCrypto).format(`${this._format}`)}</p>
          <p id="crypto__description">${this._description}</p>
      `;
    document
      .querySelector(this._container)
      .insertAdjacentHTML("afterbegin", markup);
  }
}

export const totalCryptoActive = new TotalActiveCrypto(
  ".total__active",
  "Total Active Crypto.",
  "activity",
  "0 a"
);

class TotalActiveMarket extends TotalCryptoMarket {
  constructor(container, description, logo, format) {
    super(container, description, logo, format);
  }

  _renderTotalMarket() {
    //   prettier-ignore
    const markup = `
        <i class="bi bi-${this._logo}"></i>
        <div class="crypto__text">
        <p id="crypto__number">${numeral(this._data.markets).format(`${this._format}`)}</p>
        <p id="crypto__description">${this._description}</p>
    `;
    document
      .querySelector(this._container)
      .insertAdjacentHTML("afterbegin", markup);
  }
}

export const totalActiveMarkets = new TotalActiveMarket(
  ".total__markets",
  "Total Markets.",
  "globe2",
  "0 a"
);
