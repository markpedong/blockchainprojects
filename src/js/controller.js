import * as animation from "./animation.js";
import * as navbar from "./navbar.js";
import * as collapse from "./collapse.js";
import * as model from "../js/model.js";
import priceView from "./view/priceView.js";
import * as URL from "./config.js";

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

const controlPrice = async function (url) {
  try {
    // loading the price
    await model.loadPrice(url);

    // rendering the price
    priceView.render(model.state.coin);
  } catch (err) {
    // alert(err);
    console.error(err);
  }
};

controlPrice(URL.API_URL_BTC);
