import icons from "url:../../img/icons.svg";
import View from "./View";

class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'Try again, the recipe your searching for is not here..'; 

  _generateMarkup() {
    return this._data.map(this._markup).join('');
  }

  _markup(element) {
    return `
           <li class="preview">
            <a class="preview__link" href="#${element.id}">
              <figure class="preview__fig">
                <img src="${element.imageUrl}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${element.title}</h4>
                <p class="preview__publisher">${element.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="${icons}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>
    `;
  }
}

export default new ResultsView();
