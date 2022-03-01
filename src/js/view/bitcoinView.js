class BitcoinView {
  #parentElement = document.querySelector(".top__bitcoin");
  #data;

  render(data) {
    this.#data = data;
    const markup = this.#generateMarkup();
    this.#clear();
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #clear() {
    this.#parentElement.innerHTML = "";
  }

  #generateMarkup() {
    //prettier-ignore
    return `
        <img id="top__brand" src="/src/img/${this.#data.acronym}.svg" alt="${this.#data.acronym}" />
        <p id="crypto__price">${numeral(this.#data.price).format("$ 0,0[.]00")}</p>
        <div class="top__bitcoin" id="cryptotext__container">
        <p id="crypto__header">${this.#data.name}</p>
        <p id="crypto__acronym">${this.#data.acronym}</p>
        </div>
        <p id="top__crypto__description">
        Digital currency in which a record of transactions is
        maintained.
        </p>
    `;
  }
}

export default new BitcoinView();
