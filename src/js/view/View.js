export default class View {
  // prettier-ignore
  render(data){
      this._data = data;
      this._generateMarkup()
  }
  render2(data) {
    this._data = data;
    this._generateMarkup2();
  }
  render3(data) {
    this._data = data;
    this._generateMarkup3();
  }
}
