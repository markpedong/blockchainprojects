// // import * as animation from "./view/animation.js";
// // import * as navbar from "./view/navbar.js";
// // import * as collapse from "./view/collapseView.js";
import * as networView from "./view/networkView.js";
import * as config from "./config.js";
import * as model from "../js/model.js";
console.log(config);

// // import * as URL from "./config.js";
import bitcoinView from "./view/bitcoinView.js";
import etherView from "./view/etherView.js";
import tetherView from "./view/tetherView.js";

const topCoins = async function (coin, className) {
  try {
    await model.loadPrice(coin);
    className.render(model.state.coin);
  } catch (err) {
    console.error(err);
  }
};

// This code will run as soon as the page starts
const init = function () {
  bitcoinView.bitcoinHandlerRender(topCoins(config.BITCOIN, bitcoinView));
  etherView.ethereumHandlerRender(topCoins(config.ETHEREUM, etherView));
  tetherView.tetherHandlerRender(topCoins(config.TETHER, tetherView));
};

init();
