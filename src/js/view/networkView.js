class NetworkView {
  _parentEl = document.querySelector("#network__container");
  _networkContainer = document.querySelector("#blockchainNetworks");
  _networkSelected = document.querySelector("#select__network");
  _selectionContainer = document.querySelector("#selection__container");
  _btnNetwork = document.querySelector("#btn__network");

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

  // _clearInput() {}

  // // prettier-ignore
  // generateResultsContainerMarkup() {
  //   const markup =  `
  //   <div class="d-flex justify-content-center align-items-center py-5" id="header__container">
  //     <img class="me-3" id="network__header__logo" src="./src/img/${this._networkSelected.textContent}.svg" alt="${this._networkSelected.textContent}"/>
  //     <p class="text-center mb-0 text-uppercase" id="network__header">${this._networkSelected.textContent}</p>
  //   </div>
  //   `
  //   ;
  //   document.querySelector('#result__container').insertAdjacentHTML('afterbegin', markup)

  // }
  addHandlerNetwork(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();

      handler();
    });
  }
}

export default new NetworkView();
