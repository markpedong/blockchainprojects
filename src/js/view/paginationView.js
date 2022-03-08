import View from "./View.js";

class PaginationView extends View {
  _parentEl = document.querySelector(".pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      e.preventDefault();

      const btn = e.target.closest(".page-item");

      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    //prettier-ignore
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
    const curPage = this._data.page;

    //prettier-ignore
    const prevButton = `
      <li  data-goto="${curPage - 1}" class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li  data-goto="${curPage - 3}" class="page-item"><a class="page-link" href="#">${curPage - 3}</a></li>
      <li  data-goto="${curPage - 2}" class="page-item"><a class="page-link" href="#">${curPage - 2}</a></li>
      <li  data-goto="${curPage - 1}" class="page-item"><a class="page-link" href="#">${curPage - 1}</a></li>
    `;
    //prettier-ignore
    const nextButton = `
      <li data-goto="${curPage}" class="page-item"> <a class="page-link" href="#">${curPage}</a></li>
      <li data-goto="${curPage + 1}" class="page-item"> <a class="page-link" href="#">${curPage + 1}</a></li>
      <li data-goto="${curPage + 2}" class="page-item"><a class="page-link" href="#">${curPage + 2}</a></li>
      <li data-goto="${curPage + 3}" class="page-item"><a class="page-link" href="#">${curPage + 3}</a></li>
      <li data-goto="${curPage + 1}" class="page-item"><a class="page-link" href="#">Next</a></li>
    `;
    //prettier-ignore
    const secondButton = `
    <li data-goto="${curPage - 1}" class="page-item"> <a class="page-link" href="#">${curPage - 1}</a></li>
    <li data-goto="${curPage}" class="page-item"> <a class="page-link" href="#">${curPage}</a></li>
    <li data-goto="${curPage + 1}" class="page-item"><a class="page-link" href="#">${curPage + 1}</a></li>
    <li data-goto="${curPage + 2}" class="page-item"><a class="page-link" href="#">${curPage + 2}</a></li>
    <li data-goto="${curPage + 1}" class="page-item"><a class="page-link" href="#">Next</a></li>
    `;

    //prettier-ignore
    const bothButtons = `
      <li data-goto="${curPage - 2}"class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li data-goto="${curPage - 1}"class="page-item"><a class="page-link" href="#">${curPage - 1}</a></li>
      <li data-goto="${curPage}"    class="page-item"><a class="page-link" href="#">${curPage}</a></li>
      <li data-goto="${curPage + 1}"class="page-item"><a class="page-link" href="#">${curPage + 1}</a></li>
      <li data-goto="${curPage + 1}"class="page-item"><a class="page-link" href="#">Next</a></li>
    `;

    //Page 1 and there are other pages
    if (curPage === 1 && numPages > 1) {
      return nextButton;
    }

    // Last Page
    if (curPage === numPages && numPages > 1) {
      return prevButton;
    }
    // Other Page
    if (curPage === 2) {
      //prettier-ignore
      return secondButton
    }

    if (curPage < numPages) {
      return bothButtons;
    }

    //Page 1 and there are NO other pages
    return "";
  }
}

export default new PaginationView();
