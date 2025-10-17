class SearchView {
  #parent = document.querySelector('.search');

  getQuery() {
    return this.#parent.querySelector('.search__field').value;
  }

  addSearchHandler(handler) {
    return this.#parent.addEventListener('submit', (e) => {
      e.preventDefault();
      handler();
    })
  }
}

export default new SearchView();
