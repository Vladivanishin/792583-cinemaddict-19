import { getRandomMovie } from '../mock/comment.js';

const MOVIE_COUNT = 5;

export default class MoviesModel {
  #movies = Array.from({ length: MOVIE_COUNT }, getRandomMovie);

  get movies() {
    return this.#movies;
  }

}

