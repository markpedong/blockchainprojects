export default class BlockChain {
  constructor() {
    this._networkSelector();
  }

  _networkSelector() {
    const networks = document.querySelectorAll("#card__header");
    const selectNetwork = document.querySelector("#select__network");

    networks.forEach((el) =>
      el.addEventListener("click", function (e) {
        const network = e.target;

        selectNetwork.innerHTML = network.innerHTML;
      })
    );
  }
}
