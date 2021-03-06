import View from "./View.js";

class NetworkView extends View {
  _parentEl = document.querySelector("#network__container");
  _networkContainer = document.querySelector("#blockchainNetworks");
  _selectionContainer = document.querySelector("#selection__container");
  _btnNetwork = document.querySelector("#btn__network");
  _collapseContainer = document.querySelector("#result__container");

  constructor() {
    super();
    this.getNetwork();
  }

  getNetwork() {
    // prettier-ignore
    this._networkContainer.addEventListener("click", (e) => {
      //prettier-ignore

      this._selectionContainer.innerHTML = e.target.outerHTML

      this._btnNetwork.classList.remove('btn_padding')
      
    });
  }

  networkSearch() {
    const value = this._selectionContainer.firstChild.dataset.value;

    return value;
  }

  _clearCollapse() {
    this._collapseContainer.innerHTML = "";
  }

  // prettier-ignore
  _generateResultsContainerMarkup() {
    const markup =  `
    <div class="d-flex justify-content-center align-items-center py-5" id="header__container">
    <p class="text-center mb-0 text-uppercase" id="network__header">${this._data.name}</p>
    </div>

    <!-- extra details -->
    <div id="extra__details container-fluid">
      <div class="row row-cols-2 text-center text-capitalize">
        <div class="col text-end" id="volume__24h">
          <p>volume 24h:</p>
          <p>${numeral(this._data.volume).format('$ (0.00 a)')}</p>
        </div>
        <div class="col text-start" id="market__cap">
          <p>market cap:</p>
          <p>${numeral(this._data.marketcap).format('$ (0.00 a)')}</p>
        </div>
      </div>
      <div class="row row-cols-1">
        <div class="col">
          <p id="extra__description">
           ${this._data.description == null ? '' : this._data.description}
          </p>
        </div>
      </div>
    </div>

    <div id="mainresult__container">
      <div class="row d-flex p-0">
        <div id="coin__container" class="col-1 p-0">
          <p id="coin__number" class="mb-0 text-center">#</p>
          <ul class="list-unstyled" id="result__number"></ul>
        </div>
        <div id="coin__container" class="col-5 col-sm-4 col-lg-3 p-0">
          <p id="coin__name" class="mb-0 text-center">Coin: <i class="bi bi-caret-up-fill ms-3"></i></p>
          <!-- THIS IS FOR THE NAME OF COIN -->
          <ul class="list-unstyled" id="result__name__list"></ul>
        </div>
        <div id="coin__container" class="col-6 col-sm-7 col-lg-8 overflow-auto p-0">
          <!-- Header  and Result -->
          <ul class="list-unstyled d-flex text-center">
            <!-- Price List -->
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <!-- Price Header -->
              <p id="coin__price__header">Price <i class="bi bi-caret-up-fill ms-3"></i></p>
              <ul id="price__list"></ul>
            </li>
            <!-- Volume List -->
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__volume__header">Volume <i class="bi bi-caret-up-fill ms-3"></i></p>
              <ul id="volume__list"></ul>
            </li>
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__marketcap__header">Mkt Cap <i class="bi bi-caret-up-fill ms-3"></i></p>
              <ul id="marketcap__list"></ul>
            </li>
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__moreinformation__header">More Info.</p>
              <ul id="moreinfo__list"></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    `
    ;
    this._clearCollapse()
    document.querySelector('#result__container').insertAdjacentHTML('afterbegin', markup)

  }

  addHandlerNetwork(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new NetworkView();
