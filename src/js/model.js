import * as config from "./config.js";

export const state = {
  coin: {},
  totalCrypto: {},
  results: [],
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

export const loadTotalMarket = async function (url, key) {
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

export const loadResults = async function () {
  try {
    const res = await fetch(
      `${config.RESULT_URL}avalanche-ecosystem${config.RESULT_MARKET}`
    );
    const data = await res.json();

    const [] = data.map((i) =>
      state.results.push({
        name: i.name,
        id: i.id,
        price: i.current_price,
        image: i.image,
        symbol: i.symbol,
      })
    );
  } catch (err) {
    console.error(err);
  }
};

loadResults();
console.log(state.results);
