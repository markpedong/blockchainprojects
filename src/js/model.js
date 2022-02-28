export const state = {
  coin: {},
};

export const loadPrice = async function (url) {
  try {
    // fetching the price
    const res = await fetch(url);

    const data = await res.json();

    if (!res.ok) throw new Error(`${data} (${res.status})`);

    state.coin = {
      name: data.name,
      acronym: data.symbol,
      price: data.market_data.current_price.usd,
    };
  } catch (err) {
    alert(err);
  }
};
