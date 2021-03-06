// // import * as animation from "./view/animation.js";
// // import * as navbar from "./view/navbar.js";
import * as config from "./config.js";
import * as model from "../js/model.js";
import * as totalData from "./view/totalCrypto.js";
import * as topCoinsView from "./view/topCoinsView.js";
import networkView from "./view/networkView.js";
import * as mainResultView from "./view/mainResultView.js";
import paginationView from "./view/paginationView.js";
import viewMoreDetails from "./view/viewMore.js";
import sortingButton from "./view/sortingButton.js";

const totalMarket = async function (className1, className2, className3) {
  try {
    await model.loadTotalMarket(config.TOTALCRYPTO_URL);
    className1.renderTotalMarketCap(model.state.totalCrypto);
    className2.renderTotalActive(model.state.totalCrypto);
    className3.renderTotalMarket(model.state.totalCrypto);
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

const resultsRender = async function (goToPage) {
  try {
    model.state.search.results = [];

    // submitting the network // getting the selected network
    const value = networkView.networkSearch();
    if (!value) return;

    //choosing the order

    // getting the result
    await model.loadResults(value);

    // Storing the result
    const result = model.getSearchResultsPage(goToPage);

    // getting the result for extra details
    const networkDetails = await model.categoryDetails();

    networkDetails.map((i) => {
      //prettier-ignore
      i.id == value ? model.state.resultDetails = {
        id: i.id,
        name: i.name,
        description: i.content,
        marketcap: i.market_cap,
        volume: i.volume_24h,
      } : '';
    });

    const extraDetails = model.state.resultDetails;
    const renderedResult = function (res) {
      networkView.renderResultContainer(extraDetails);
      mainResultView.numberResult.renderMainResult(res);
      mainResultView.nameResult.renderMainResult(res);
      mainResultView.priceResult.renderMainResult(res);
      mainResultView.volumeResult.renderMainResult(res);
      mainResultView.marketCapResult.renderMainResult(res);
      mainResultView.viewMoreResult.renderMainResult(res);
    };

    renderedResult(result);

    // render the pagination
    paginationView.renderPageView(model.state.search);

    // sorting the results
    // const btnSort = document.querySelectorAll(".bi-caret-up-fill");

    // btnSort.forEach((i) =>
    //   i.addEventListener("click", function () {
    //     result.sort((a, b) => b.id.length - a.id.length);
    //     renderedResult(result);
    //   })
    // );

    // await model.sortResults();
  } catch (err) {
    console.error(err);
  }
};

// This code will run as soon as the page starts
// prettier-ignore
const init = function () {
  totalMarket(totalData.totalCryptoMarketCap, totalData.totalCryptoActive, totalData.totalActiveMarkets);
  networkView.addHandlerNetwork(resultsRender)
  topCoinsView.bitcoin.topCoinsHandlerRender(topCoins(config.BITCOIN, topCoinsView.bitcoin))
  topCoinsView.ethereum.topCoinsHandlerRender(topCoins(config.ETHEREUM, topCoinsView.ethereum))
  topCoinsView.tether.topCoinsHandlerRender(topCoins(config.TETHER, topCoinsView.tether))
  paginationView.addHandlerClick(resultsRender)
  // viewMoreDetails.viewMoreHandler(viewMore)
};

init();
