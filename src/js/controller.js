import * as animation from "./view/animation.js";
import * as navbar from "./view/navbar.js";
import * as collapse from "./view/collapseView.js";
import * as model from "../js/model.js";

import * as URL from "./config.js";
import bitcoinView from "./view/bitcoinView.js";
import etherView from "./view/etherView.js";
import tetherView from "./view/tetherView.js";

const topCoinsPrice = async function (url, className) {
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

const init = function () {
  topCoinsPrice(URL.API_URL_ETH, etherView);
  topCoinsPrice(URL.API_URL_BTC, bitcoinView);
  topCoinsPrice(URL.API_URL_USD, tetherView);
};

init();
