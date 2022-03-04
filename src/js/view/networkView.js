class NetworkView {
  _parentEl = document.querySelector("#network__container");
  _networkContainer = document.querySelector("#blockchainNetworks");
  _selectNetwork = document.querySelector("#select__network");

  getNetwork() {
    this._networkContainer.addEventListener("click", (e) => {
      //prettier-ignore
      this._selectNetwork.innerHTML = e.target.innerHTML;
    });
  }

  networkSearch() {
    this._parentEl.addEventListener("submit", (e) => {
      e.preventDefault();

      const query = this._selectNetwork.ariaValueNow;

      console.log(query);
    });
  }
  addHandlerNetwork(handler) {
    this._parentEl.addEventListener("click", handler);
  }
}

export default new NetworkView();
