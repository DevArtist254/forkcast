import icons from "url:../../img/icons.svg";
import View from "./View";

class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  addButtonHandler(handler) {
    return this._parentEl.addEventListener('click', (e) => {
      
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      
      const pageNum = btn.dataset.gotopage

      handler(+pageNum);
    });
  }

  _generateMarkup() {
    // console.log(this._data);
    const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
    const currentPage = this._data.page;
    const isLastPage = numPages === currentPage;
    const notFirstPage = currentPage < 2;
    const pagesBetweenFirstLast = currentPage >= 2 && currentPage < numPages;
    
    if (isLastPage) {
      return `
        <button data-gotopage="${currentPage}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span>Page ${currentPage}</span>
      </button>
      `;
    }

    if (notFirstPage) {
     return `
       <button data-gotopage="${currentPage + 1}" class="btn--inline pagination__btn--next">
          <span id="pageNum" >Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
     `; 
    }

    if (pagesBetweenFirstLast) {
      return `
      <button data-gotopage="${currentPage - 1}" class="btn--inline pagination__btn--prev">
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
          </svg>
          <span id="pageNum">Page ${currentPage - 1}</span>
      </button>
      <button data-gotopage="${currentPage + 1}" class="btn--inline pagination__btn--next">
          <span id="pageNum">Page ${currentPage + 1}</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
      </button>
      `;
    }

    return '';
  }
}

export default new PaginationView();

