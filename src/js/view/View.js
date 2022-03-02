export default class View {
  // prettier-ignore
  render(data){
      this._data = data;
      this._generateMarkup()
  }
}
