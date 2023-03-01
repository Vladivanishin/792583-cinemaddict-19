import { createElement } from '../render.js';

function createBtnShowMoreTemplate() {
  return `
  <button class="films-list__show-more">Show more</button>
  `;
}

export default class BtnShowMoreView {
  #element = null;

  get template() {
    return createBtnShowMoreTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }

}

export { createBtnShowMoreTemplate };
