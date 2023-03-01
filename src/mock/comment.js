import { getRandomArrayElement } from '../utils.js';

const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];
const DERECTORS = ['Tom Hanks', 'Spilberg', 'Denny De Vito', 'Arni'];
const ACTORS = ['Di Kaprio', 'Stalone', 'Swarcneger', 'Van Dam', 'Djeki CHan'];
const TITLE = ['Avatar', 'Termonator', 'Last of Us', 'Warcraft', 'Lord of the Rings', 'Game of Thrones', 'Batman', 'Fantomas'];
const RATING = [4.1, 5.6, 8.8, 9.0, 3, 5, 1.0];
const POSTER = ['images/posters/blue-blazes.jpg'];

const mockComments = [
  {
    id: 23,
    author: 'Ilya O\'Reilly',
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    date: '2019-05-11T16:12:32.554Z',
    emotion: getRandomArrayElement(EMOTIONS),
  },
  {
    id: 11,
    author: 'Ivan Petrov',
    comment: 'not bad film, but i think film will more good',
    date: '2021-11-09T14:08:11.554Z',
    emotion: getRandomArrayElement(EMOTIONS),
  }
];

const mockLocalComments = [
  {
    comment: 'fish and chips foooooo not goood',
    emotion: getRandomArrayElement(EMOTIONS)
  }, {
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    emotion: getRandomArrayElement(EMOTIONS)
  }, {
    comment: 'a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.',
    emotion: getRandomArrayElement(EMOTIONS)
  }, {
    comment: 'very bad film aaaaaa bulshit',
    emotion: getRandomArrayElement(EMOTIONS)
  },
];

const getRandomMovie = () => {
  const movie = {
    id: 0,
    comments: [1, 2, 3, 4]
    ,
    filmInfo: {
      title: getRandomArrayElement(TITLE),
      alternativeTitle: 'Laziness Who Sold Themselves',
      totalRating: getRandomArrayElement(RATING),
      poster: 'images/posters/blue-blazes.jpg',
      ageRating: 0,
      director: getRandomArrayElement(DERECTORS),
      writers: [
        'Takeshi Kitano'
      ],
      actors: [
        getRandomArrayElement(ACTORS)
      ],
      release: {
        date: '2019-05-11T00:00:00.000Z',
        releaseCountry: 'Finland'
      },
      duration: 77,
      genre: [
        'Comedy'
      ],
      description: 'Oscar-winning film, a war drama about two young people, from the creators of timeless classic "Nu, Pogodi!" and "Alice in Wonderland", with the best fight scenes since Bruce Lee.'
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: true,
      watchingDate: '2019-04-12T16:12:32.554Z',
      favorite: false
    }
  };
  return movie;

};
export { getRandomMovie };
export { mockComments, mockLocalComments };
