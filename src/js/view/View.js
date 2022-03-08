export default class View {
  _clear() {
    this._parentEl.innerHTML = "";
  }

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    this._generateMarkup();

    // Guard Clause
    if (!render) return markup;
  }

  renderTotalMarketCap(data) {
    this._data = data;
    this._markupTotalMarketCap();
  }
  renderTotalActive(data) {
    this._data = data;
    this._renderTotalActive();
  }
  renderTotalMarket(data) {
    this._data = data;
    this._renderTotalMarket();
  }

  renderResultContainer(data) {
    this._data = data;
    this._generateResultsContainerMarkup();
  }

  renderMainResult(data) {
    this._data = data;
    this._mainResultRender();
  }

  renderPageView(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
