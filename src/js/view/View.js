export default class View {
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
}
