export default class View {
  // prettier-ignore
  render(data){
      this._data = data;
      const markup = this._generateMarkup()

      this._clear()
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
     
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }
}
