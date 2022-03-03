// // import * as animation from "./view/animation.js";
// // import * as navbar from "./view/navbar.js";
// // import * as collapse from "./view/collapseView.js";
import * as config from "./config.js";
import * as model from "../js/model.js";
import * as totalData from "./view/totalCrypto.js";
import * as topCoinsView from "./view/topCoinsView.js";
import networkView from "./view/networkView.js";

const totalMarket = async function (className1, className2, className3) {
  try {
    await model.loadTotalMarket(config.TOTALCRYPTO_URL);
    className1.render(model.state.totalCrypto);
    className2.render2(model.state.totalCrypto);
    className3.render3(model.state.totalCrypto);
  } catch (err) {
    console.error(err);
  }
};

const topCoins = async function (coin, className) {
  try {
    await model.loadPrice(coin);
    className.render(model.state.coin);
  } catch (err) {
    console.error(err);
  }
};

const networkRender = async function () {
  try {
    // rendering the network in the selection
    networkView.getNetwork();

    // submitting the network
    networkView.networkSearch();

    // rendering the result
  } catch (err) {
    console.error(err);
  }
};

totalMarket(
  totalData.totalCryptoMarketCap,
  totalData.totalCryptoActive,
  totalData.totalActiveMarkets
);
// totalMarket(totalData.totalCryptoActive);

// This code will run as soon as the page starts
// prettier-ignore
const init = function () {
  networkView.addHandlerNetwork(networkRender())
  // totalData.totalCrypto.totalCryptoHandlerRender()
  topCoinsView.bitcoin.topCoinsHandlerRender(topCoins(config.BITCOIN, topCoinsView.bitcoin))
  topCoinsView.ethereum.topCoinsHandlerRender(topCoins(config.ETHEREUM, topCoinsView.ethereum))
  topCoinsView.tether.topCoinsHandlerRender(topCoins(config.TETHER, topCoinsView.tether))
};

init();
