import { TOP_COINS_URL, TOP_COINS_URL_LOCAL } from "./config.js";

export const state = {
  coin: {},
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
