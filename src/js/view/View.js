export default class View {
  _clear() {
    this._parentEl.innerHTML = "";
  }

  // prettier-ignore
  render(data){
      this._data = data;
      this._generateMarkup()
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

    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner = function () {
    const markup = `
      <div class="lds-dual-ring"></div>
    `;

    // this._clear();
    this._collapseContainer.insertAdjacentHTML("afterbegin", markup);
  };
}
