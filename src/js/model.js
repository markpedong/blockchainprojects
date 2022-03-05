import * as config from "./config.js";

export const state = {
  coin: {},
  totalCrypto: {},
  resultDetails: {},
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

export const categoryDetails = async function (value) {
  try {
    const res = await fetch(`${config.EXTRA_DETAILS_URL}`);
    const data = await res.json();
    data.map((i) => {
      i.id === value
        ? (state.resultDetails = {
            id: i.id,
            name: i.name,
            description: i.content,
            marketcap: i.market_cap,
            volume: i.volume_24h,
          })
        : "";
    });
  } catch (err) {
    console.error(err);
  }
};

export const loadResults = async function (eco) {
  try {
    const res = await fetch(
      `${config.RESULT_URL}${eco}${config.RESULT_MARKET}`
    );
    const data = await res.json();
    const [] = data.map((i) =>
      state.results.push({
        name: i.name,
        id: i.id,
        volume: i.total_volume,
        marketcap: i.market_cap,
        price: i.current_price,
        image: i.image,
        symbol: i.symbol,
      })
    );
    console.log(state.results);
  } catch (err) {
    console.error(err);
  }
};
