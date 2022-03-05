class NetworkView {
  _parentEl = document.querySelector("#network__container");
  _networkContainer = document.querySelector("#blockchainNetworks");
  _selectionContainer = document.querySelector("#selection__container");
  _btnNetwork = document.querySelector("#btn__network");
  _collapseContainer = document.querySelector("#result__container");

  getNetwork() {
    // prettier-ignore
    this._networkContainer.addEventListener("click", (e) => {
      //prettier-ignore

      this._selectionContainer.innerHTML = e.target.outerHTML

      this._btnNetwork.classList.remove('btn_padding')
      
    });
  }

  networkSearch() {
    const query = this._selectionContainer;
    // if (!query) return;
    return query;
  }

  _clearInput() {
    this._parentEl.innerHTML = "";
  }

  _clearCollapse() {
    this._collapseContainer.innerHTML = "";
  }

  // prettier-ignore
  generateResultsContainerMarkup() {
    const markup =  `
    <div class="d-flex justify-content-center align-items-center py-5" id="header__container">
    <img class="me-3" id="network__header__logo" src="./src/img/${this._selectionContainer.firstChild.textContent}.svg" alt="${this._selectionContainer.firstChild.textContent}"/>
    <p class="text-center mb-0 text-uppercase" id="network__header">${this._selectionContainer.firstChild.textContent}</p>
    </div>

    <div id="mainresult__container">
      <div class="row d-flex p-0">
        <div id="coin__container" class="col-1 p-0">
          <p id="coin__number" class="mb-0 text-center">#</p>
        </div>
        <div id="coin__container" class="col-5 col-sm-4 col-lg-3 p-0">
          <p id="coin__name" class="mb-0 text-center">Coin:</p>
        </div>
        <div id="coin__container" class="col-6 col-sm-7 col-lg-8 overflow-auto p-0">
          <!-- Header  and Result -->
          <ul class="list-unstyled d-flex text-center">
            <!-- Price List -->
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <!-- Price Header -->
              <p id="coin__price__header">Price</p>
            </li>
            <!-- Volume List -->
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__volume__header">Volume</p>
            </li>
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__marketcap__header">Mkt Cap</p>
            </li>
            <li class="col-12 col-sm-6 col-md-5 col-lg-3">
              <p id="coin__moreinformation__header">More Info.</p>
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
