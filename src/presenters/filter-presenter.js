import FilterView from '../views/filter-view.js';
import { render } from '../render.js';

export default class FilterPresenter {
  #filterComponent = new FilterView();
  #filterContainer = null;

  constructor({ filterContainer }) {
    this.#filterContainer = filterContainer;
  }


  init() {
    render(this.#filterComponent, this.#filterContainer);
  }

}
