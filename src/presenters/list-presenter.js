import SortView from '../views/sort-view.js';
import FilmsView from '../views/films-view.js';
import FilmsListView from '../views/films-list-view.js';
import BtnShowMoreView from '../views/btn-show-more-view.js';
import { render } from '../render.js';
import ExtraTopView from '../views/extra-top-view.js';
import ExtraCommentedView from '../views/extra-commented-view.js';
import StatisticView from '../views/statistic-view.js';
import ProfileView from '../views/profile-view.js';
import CardView from '../views/card-view.js';
import CardContainerView from '../views/card-container-view.js';

export default class ListPresenter {
  #sortComponent = new SortView();
  #filmsComponent = new FilmsView();
  #filmsListComponent = new FilmsListView();
  #btnShowMoreComponent = new BtnShowMoreView();
  #extraTopComponent = new ExtraTopView();
  #extraCommentedComponent = new ExtraCommentedView();
  #statisticComponent = new StatisticView();
  #profileComponent = new ProfileView();
  #cardContainerComponent = new CardContainerView();
  #boardMovies = [];
  #moviesModel = null;
  // #filmsListContainer = null;
  #listContainer = null;
  #footerContainer = null;
  #headerContainer = null;
  // #filmCardContainer = null;

  constructor({ listContainer, /* filmsListContainer, */ footerContainer, headerContainer, moviesModel, /* filmCardContainer */ }) {
    this.#listContainer = listContainer;
    // this.#filmsListContainer = filmsListContainer;
    this.#footerContainer = footerContainer;
    this.#headerContainer = headerContainer;
    this.#moviesModel = moviesModel;
    // this.#filmCardContainer = filmCardContainer;
  }

  init() {
    this.#boardMovies = [...this.#moviesModel.movies];
    render(this.#profileComponent, this.#headerContainer);
    render(this.#sortComponent, this.#listContainer);
    render(this.#filmsComponent, this.#listContainer);
    render(this.#filmsListComponent, this.#filmsComponent.element);
    render(this.#cardContainerComponent, this.#filmsListComponent.element);
    for (let i = 0; i < this.#boardMovies.length; i++) {
      this.#renderCard(this.#boardMovies[i]);
    }
    render(this.#btnShowMoreComponent, this.#filmsListComponent.element);
    render(this.#extraTopComponent, this.#filmsComponent.element);
    render(this.#extraCommentedComponent, this.#filmsComponent.element);
    render(this.#statisticComponent, this.#footerContainer);
  }

  #renderCard(movie) {
    const movieComponent = new CardView({ movie });
    render(movieComponent, this.#cardContainerComponent.element);
  }
}
