export interface CatalogItem {
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  kinopoiskId: number;
  year: number;
}

export type CatalogList = CatalogItem[];

export interface GetCatalogListResponse {
  total: number,
  totalPages: number,
  items: CatalogList,
}

// filter/sort/search params
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

export const CatalogOrderOptions: Record<catalogOrderTypes, string> = {
  [catalogOrderTypes.RATING]: 'Рейтинг',
  [catalogOrderTypes.NUM_VOTE]: 'Количество голосов',
  [catalogOrderTypes.YEAR]: 'Год',
};

export const CatalogTypeOptions: Record<catalogTypeTypes, string> = {
  [catalogTypeTypes.FILM]: 'Фильмы',
  [catalogTypeTypes.TV_SHOW]: 'ТВ-шоу',
  [catalogTypeTypes.TV_SERIES]: 'ТВ-сериалы',
  [catalogTypeTypes.MINI_SERIES]: 'Мини-сериалы',
  [catalogTypeTypes.ALL]: 'Все',
};

export const CatalogTypeOptionDefault = catalogTypeTypes.ALL;
export const CatalogOrderOptionDefault = catalogOrderTypes.NUM_VOTE;

export interface CatalogParams {
  countries?: number[];
  genres?: number[];
  order?: catalogOrderTypes;
  type?: catalogTypeTypes;
  ratingFrom?: number;
  ratingTo?: number;
  yearFrom?: number;
  yearTo?: number;
  keyword?: string;
  page?: number;
}
