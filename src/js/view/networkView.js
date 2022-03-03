import View from "./View.js";

class NetworkView extends View {
  _parentEl = document.querySelector("#blockchainNetworks");
  _networksArr = document.querySelectorAll("#card__header");
  _selectNetwork = document.querySelector("#select__network");

  getNetwork() {
    this._parentEl.addEventListener("click", (e) => {
      this._selectNetwork.innerHTML = e.target.innerHTML;
    });
  }

  addHandlerNetwork(handler) {
    this._parentEl.addEventListener("click", handler);
  }
}

export default new NetworkView();
