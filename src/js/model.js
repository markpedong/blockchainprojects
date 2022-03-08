import * as config from "./config.js";

export const state = {
  coin: {},
  totalCrypto: {},
  resultDetails: {},
  search: {
    results: [],
    page: 1,
    resultsPerPage: config.RES_PER_PAGE,
  },
};

//////////////////////////////////////////////////////////////////

export const loadPrice = async function (url) {
  try {
    // fetching the price
    const res = await fetch(
      `${config.TOP_COINS_URL}${url}${config.TOP_COINS_URL_LOCAL}`
    );

    if (!res.ok) throw new Error(`${data} (${res.status})`);

    const data = await res.json();

    state.coin = {
      name: data.name,
      acronym: data.symbol,
      price: data.market_data.current_price.usd,
    };
  } catch (err) {
    console.error(`${err}⚠`);
  }
};

export const loadTotalMarket = async function (url) {
  try {
    const res = await fetch(`${url}`);

    const data = await res.json();

    state.totalCrypto = {
      totalMarketCap: data.data.total_market_cap.usd,
      markets: data.data.markets,
      activeCrypto: data.data.active_cryptocurrencies,
    };
  } catch (err) {
    console.error(err);
  }
};

export const categoryDetails = async function () {
  try {
    const res = await fetch(`${config.EXTRA_DETAILS_URL}`);
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const loadResults = async function (eco, order = "id_asc") {
  try {
    const res = await fetch(
      `${config.RESULT_URL}${eco}&order=${order}${config.RESULT_MARKET}`
    );
    const data = await res.json();

    const [] = data.map((i) =>
      state.search.results.push({
        name: i.name,
        id: i.id,
        volume: i.total_volume,
        marketcap: i.market_cap,
        price: i.current_price,
        image: i.image,
        symbol: i.symbol,
      })
    );
  } catch (err) {
    console.error(err);
  }
};

//market_cap_desc
//market_cap_asc
//volume_asc
//volume_desc
//id_asc
//id_desc

export const sortResults = function () {
  const btnSort = document.querySelectorAll(".bi-caret-up-fill");

  btnSort.forEach((i) => console.log(i));

  console.log(btnSort);
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};
