import FilterPresenter from './presenters/filter-presenter.js';
import ListPresenter from './presenters/list-presenter.js';
import MoviesModel from './model/movies-model.js';
// import { render } from './render.js';
// import FilterView from './views/filter-view.js';

const mainContainer = document.querySelector('.main');
// const filmsListContainer = document.querySelector('.films-list');
const footerContainer = document.querySelector('.footer');
const headerContainer = document.querySelector('.header');
// const filmCardContainer = document.querySelector('.films-list__container');

const moviesModel = new MoviesModel();
const filterPresenter = new FilterPresenter({
  filterContainer: mainContainer
});

const listPresenter = new ListPresenter({
  listContainer: mainContainer,
  // filmsListContainer: filmsListContainer,
  footerContainer: footerContainer,
  headerContainer: headerContainer,
  moviesModel,
  // filmCardContainer: filmCardContainer,
});

filterPresenter.init();
listPresenter.init();
