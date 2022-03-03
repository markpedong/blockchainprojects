import { TOP_COINS_URL, TOP_COINS_URL_LOCAL } from "./config.js";

export const state = {
  coin: {},
  totalCrypto: {},
};

//////////////////////////////////////////////////////////////////

export const loadPrice = async function (url) {
  try {
    // fetching the price
    const res = await fetch(`${TOP_COINS_URL}${url}${TOP_COINS_URL_LOCAL}`);

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
