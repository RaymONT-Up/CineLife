import { AxiosPromise } from 'axios';
import { $kinopoisk } from './base';
import {
  CatalogParams, GetCatalogListResponse, catalogOrderTypes, catalogTypeTypes,
} from './models';

export const $getCatalog = (params?: CatalogParams): AxiosPromise<GetCatalogListResponse> => $kinopoisk.get('/films', {
  params: {
    order: params.order || catalogOrderTypes.NUM_VOTE,
    type: params.type || catalogTypeTypes.ALL,
    ratingFrom: params.ratingFrom,
    ratingTo: params.ratingTo,
    yearFrom: params.yearFrom,
    yearTo: params.yearTo,
    keyword: params.keyword || '',
    page: params.page || 1,
    countries: params.countries.join(','),
    genres: params.genres.join(','),
  },
});
