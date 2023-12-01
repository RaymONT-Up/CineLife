import { AxiosPromise } from 'axios';
import { $kinopoisk } from './base';
import {
  CatalogParams, GetCatalogListResponse,
} from './models';

export const $getCatalog = (params?: CatalogParams): AxiosPromise<GetCatalogListResponse> => $kinopoisk.get('/films', {
  params: {
    order: params.order,
    type: params.type,
    ratingFrom: params.ratingFrom,
    ratingTo: params.ratingTo,
    yearFrom: params.yearFrom,
    yearTo: params.yearTo,
    keyword: params.keyword,
    page: params.page,
    countries: params.countries ? params.countries.join(',') : undefined,
    genres: params.genres ? params.genres.join(',') : undefined,
  },
});
