class NetworkView {
  _parentEl = document.querySelector("#network__container");
  _networkContainer = document.querySelector("#blockchainNetworks");
  _networkSelected = document.querySelector("#select__network");
  _btnNetwork = document.querySelector("#btn__network");
  getNetwork() {
    this._networkContainer.addEventListener("click", (e) => {
      //prettier-ignore
      this._networkSelected.innerHTML = e.target.innerHTML;
    });
  }

  networkSearch() {
    const query = this._networkSelected.textContent;

    return query;
  }

  // prettier-ignore
  _generateResultsContainerMarkup() {
    const markup =  `
      <div class="container-lg" id="result__container">
      <div
        class="d-flex justify-content-center align-items-center py-5"
        id="header__container"
       >
        <img
          class="me-3"
          id="network__header__logo"
          src="./src/img/avax.svg"
          alt="avax"
        />
        <p class="text-center mb-0 text-uppercase" id="network__header">
          ${this._networkSelected.textContent}
        </p>
      </div>
      </div> 
    `
    ;
    document.querySelector('#content__section').insertAdjacentHTML('afterbegin', markup)

  }
  addHandlerNetwork(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new NetworkView();
