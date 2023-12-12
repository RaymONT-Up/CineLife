import { AxiosPromise } from 'axios';
import { $kinopoisk } from './base';

import {
  CatalogParams, Film, FilmBudget, FilmFacts, FilmImages, FilmTeam, GetCatalogListResponse, Person,
} from './models';

export const $getCatalog = (params?: CatalogParams): AxiosPromise<GetCatalogListResponse> => $kinopoisk.get('/v2.2/films', {
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

export const $getFilm = (id: number): AxiosPromise<Film> => $kinopoisk.get(`/v2.2/films/${id}`);

export const $getFilmImages = (id: number): AxiosPromise<FilmImages> => $kinopoisk.get(`/v2.2/films/${id}/images`);

export const $getFilmBudget = (id:number): AxiosPromise<FilmBudget> => $kinopoisk.get(`/v2.2/films/${id}/box_office`);

export const $getFilmFacts = (id:number): AxiosPromise<FilmFacts> => $kinopoisk.get(`/v2.2/films/${id}/facts`);

export const $getFilmTeam = (id:number): AxiosPromise<FilmTeam> => $kinopoisk.get(`/v1/staff?filmId=${id}`);

export const $getPerson = (id: number): AxiosPromise<Person> => $kinopoisk.get(`/v1/staff/${id}`);
