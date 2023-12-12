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

// budget
export interface FilmBudgetItem {
  // ideally create an enum listing possible types if necessary
  type: string;
  amount: number;
  currencyCode: string;
  name: string;
  symbol: string;
}
export interface FilmBudget {
  total: number;
  totalPages: number;
  items: FilmBudgetItem[];
}

// images

export interface FilmImageItem {
  imageUrl: string;
  previewUrl: string;
}

export interface FilmImages {
  total: number;
  totalPages: number;
  items: FilmImageItem[];
}

// facts

export enum FilmFactItemType {
  FACT = 'FACT',
  BLOOPER = 'BLOOPER'
}

export interface FilmFactItem {
  text: string;
  type: FilmFactItemType;
  spoiler: boolean;
}

export interface FilmFacts {
  total: number;
  items: FilmFactItem[];
}

// Team

export enum TeamProfession {
  DIRECTOR = 'Режиссер',
  DESIGN = 'Художник',
  EDITOR = 'Монтажер',
  WRITER = 'Сценарист',
  VOICE_DIRECTOR = 'Режиссер дубляжа',
  COMPOSER = 'Композитор',
  OPERATOR = 'Оператор',
  PRODUCER = 'Продюсер',
  ACTOR = 'Актер',
}

export interface FilmTeamItem {
  staffId: number;
  nameEn: string;
  nameRu: string;
  description: null | string;
  posterUrl: string;
  professionText: string;
  professionKey: TeamProfession;
}
export type FilmTeam = FilmTeamItem[];

// Person
export interface Spouse {
  personId: number;
  name: string;
  divorced: boolean;
  divorcedReason: string;
  sex: string;
  children: number;
  webUrl: string;
  relation: string;
}
export interface PersonFilm {
  filmId: number;
  nameRu: string;
  nameEn: string;
  rating: string;
  general: boolean;
  description: string;
  professionKey: string;
}
export interface Person {
  personId?: number;
  webUrl?: string ;
  nameRu?: string | null;
  nameEn?: string | null;
  sex?: string;
  posterUrl?: string;
  growth?: number;
  birthday?: string;
  death?: string | null;
  age?: number;
  birthplace?: string;
  deathplace?: string | null;
  spouses?: Spouse[];
  hasAwards?: number;
  profession?: string;
  facts?: string[];
  films?: PersonFilm[];
}
