import icons from "url:../../img/icons.svg";

export default class View {
  _data;
  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup()

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup); 
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup()

    const virDom = document.createRange().createContextualFragment(markup);
    const curDom = Array.from(this._parentEl.querySelectorAll('*'));
    const newDom = Array.from(virDom.querySelectorAll('*'));
    
    newDom.forEach((newEl, i) => {
      const curEl = curDom[i];

      if(!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      if(!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => 
          curEl.setAttribute(attr.name, attr.value)
        )
      }
    }) 
  }

  renderSnipper() {
    const markup = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
    `; 

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup); 
  }

  renderErrorMessage(message = this._errorMessage){
    const markup = `
    <div class="error">
      <div>
        <svg>
          <use href="${icons}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${message}</p>
    </div>
    `;

    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup); 
  }
};
