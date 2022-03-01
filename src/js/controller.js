// // import * as animation from "./view/animation.js";
// // import * as navbar from "./view/navbar.js";
// // import * as collapse from "./view/collapseView.js";
// // import * as network from "./view/network.js";
import * as model from "../js/model.js";

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

topCoins("bitcoin", bitcoinView);
topCoins("ethereum", etherView);
topCoins("tether", tetherView);

// const init = function () {
//   //   bitcoinView.bitcoinHandlerRender(bitcoinTop);
//   etherView.ethereumHandlerRender(ethereumTop);
//   tetherView.tetherHandlerRender(tetherTop);
// };

// init();
