// import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';
import { createElement } from '../render.js';
import dayjs from 'dayjs';

function createCardTemplate(movie) {
  const { id, comments,
    filmInfo: { title, alternativeTitle, totalRating, poster, ageRating, director, writers, actors,
      release: { date, releaseCountry }, duration, genre, description },
    userDetails: { watchlist, alreadyWatched, watchingDate, favorite } } = movie;

  const dateYear = dayjs(`${date}`).format('YYYY');

  function getDurationTime() {
    const durationTime = dayjs.duration(`${duration}`, 'minute');

    if (durationTime.asHours() > 1) {
      return durationTime.format('H[h] mm[m]');
    } else {
      return durationTime.format('mm[m]');
    }
  }

  // durationTime.asHours() > 1 ? durationTime.format('H[h] mm[m]') : durationTime.format('mm[m]');
  return `
  <article class="film-card" id=${id}>
          <a class="film-card__link">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${dateYear}</span>
              <span class="film-card__duration">${getDurationTime}</span>
              <span class="film-card__genre">${genre}</span>
            </p>
            <img src=${poster} alt="poster movie" class="film-card__poster">
            <p class="film-card__description">${description}</p>
            <span class="film-card__comments">${comments.length} comments</span>
          </a>
          <div class="film-card__controls">
            <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
            <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
            <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
          </div>
        </article>
`;
}

export default class CardView {
  #element = null;
  #movie = null;

  constructor({ movie }) {
    this.#movie = movie;
  }

  get template() {
    return createCardTemplate(this.#movie);
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

// const {id, comments,
//   filmInfo: {title, alternativeTitle,totalRating, poster,ageRating,director,writers, actors,
//   release: {date,releaseCountry},duration, genre, description},
//   userDetails: {watchlist,alreadyWatched,watchingDate, favorite}} = movie;
