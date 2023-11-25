import { AxiosPromise } from 'axios';
import { $kinopoisk } from './base';
import { GetFilmsListResponse } from './models';

export enum catalogOrderTypes {
  RATING = 'RATING',
  NUM_VOTE = 'NUM_VOTE',
  YEAR = 'YEAR'
}
export enum catalogTypeTypes{
  FILM = 'FILM',
  TV_SHOW = 'TV_SHOW',
  TV_SERIES = 'TV_SERIES',
  MINI_SERIES = 'MINI_SERIES',
  ALL = 'ALL'
}

export const $getFilms = (): AxiosPromise<GetFilmsListResponse> => $kinopoisk.get('/films', {
  params: {
    order: catalogOrderTypes.NUM_VOTE,
    page: 1,
    type: catalogTypeTypes.FILM,
    keyword: 'Marvel',
  },

});
