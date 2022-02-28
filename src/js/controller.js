import * as animation from "./view/animation.js";
import * as navbar from "./view/navbar.js";
import * as collapse from "./view/collapseView.js";
import * as model from "../js/model.js";

import * as URL from "./config.js";
import bitcoinView from "./view/bitcoinView.js";
import etherView from "./view/etherView.js";
import tetherView from "./view/tetherView.js";

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

const bitcoinPrice = async function (url, className) {
  try {
    // loading the price
    await model.loadPrice(url);

    // rendering the price
    className.render(model.state.coin);
  } catch (err) {
    // alert(err);
    console.error(err);
  }
};

bitcoinPrice(URL.API_URL_BTC, bitcoinView);
bitcoinPrice(URL.API_URL_ETH, etherView);
bitcoinPrice(URL.API_URL_USD, tetherView);
