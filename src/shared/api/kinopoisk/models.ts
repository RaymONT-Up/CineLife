export type genresList = { genre: string}[];
export type countriesList = { country: string }[];

export interface CatalogItem {
  nameRu: string;
  posterUrlPreview: string;
  posterUrl: string;
  ratingKinopoisk: number;
  kinopoiskId: number;
  year: number;
  genres: genresList;
  countries: countriesList;
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
  [catalogOrderTypes.NUM_VOTE]: 'Количество голосов',
  [catalogOrderTypes.RATING]: 'Рейтинг',
  [catalogOrderTypes.YEAR]: 'Год',
};

export const CatalogTypeOptions: Record<catalogTypeTypes, string> = {
  [catalogTypeTypes.ALL]: 'Все',
  [catalogTypeTypes.FILM]: 'Фильмы',
  [catalogTypeTypes.TV_SERIES]: 'ТВ-сериалы',
  [catalogTypeTypes.TV_SHOW]: 'ТВ-шоу',
  [catalogTypeTypes.MINI_SERIES]: 'Мини-сериалы',
};

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

export interface Film {
  nameRu?: string;

  posterUrl?: string;
  description?: string;

  ratingAgeLimits?: string;

  kinopoiskId?: number;
  coverUrl?: string | null;
  logoUrl?: string | null;
  ratingKinopoisk?: number;
  webUrl?: string;
  year?: number;
  filmLength?: number;
  slogan?: string;
  shortDescription?: string;
  type?: catalogTypeTypes;
  genres?: genresList;
  countries?: countriesList;
  startYear?: null;
  endYear?: null;
  completed?: false;
}

export const FilmType: Record<catalogTypeTypes, string> = {
  [catalogTypeTypes.FILM]: 'Фильм',
  [catalogTypeTypes.TV_SHOW]: 'ТВ-шоу',
  [catalogTypeTypes.TV_SERIES]: 'ТВ-сериал',
  [catalogTypeTypes.MINI_SERIES]: 'Мини-сериал',
  [catalogTypeTypes.ALL]: 'Все',
};
