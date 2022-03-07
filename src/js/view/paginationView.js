import View from "./View.js";

class PaginationView extends View {
  _parentEl = document.querySelector("#paginationContainer");

  _generateMarkup() {
    //prettier-ignore
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)

    //Page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1) {
      return "page 1, others";
    }

    // Last Page
    if (this._data.page === numPages && numPages > 1) {
      return "last page";
    }
    // Other Page
    if (this._data.page < numPages) {
      return "other pages";
    }

    //Page 1 and there are NO other pages

    this._parentEl.insertAdjacentHTML("afterbegin");
  }
}

export default new PaginationView();
