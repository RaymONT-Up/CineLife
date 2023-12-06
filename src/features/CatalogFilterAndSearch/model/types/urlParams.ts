import { catalogOrderTypes, catalogTypeTypes } from 'shared/api/kinopoisk/models';

export enum catalogURLParams {
  order = 'order',
  type = 'type',
  genre = 'genre',
  country = 'country',
  keyword = 'keyword'
}

export interface IcatalogURLParams {
  order?: catalogOrderTypes | string;
  type?: catalogTypeTypes | string;
  genre?: number;
  country?: number;
  keyword?: string;
}
