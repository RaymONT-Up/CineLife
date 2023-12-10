import { AxiosPromise } from 'axios';
import { $kinopoisk } from './base';

import {
  CatalogParams, Film, FilmBudget, FilmFacts, FilmImages, GetCatalogListResponse,
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

export const $getFilm = (id: number): AxiosPromise<Film> => $kinopoisk.get(`/films/${id}`);

export const $getFilmImages = (id: number): AxiosPromise<FilmImages> => $kinopoisk.get(`/films/${id}/images`);

export const $getFilmBudget = (id:number): AxiosPromise<FilmBudget> => $kinopoisk.get(`/films/${id}/box_office`);

export const $getFilmFacts = (id:number): AxiosPromise<FilmFacts> => $kinopoisk.get(`/films/${id}/facts`);
