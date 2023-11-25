export interface FilmPreview {
  nameRu: string;
  posterUrl: string;
  ratingKinopoisk: number;
  kinoposikId: number;
  year: number;
}

export type FilmList = FilmPreview[];

export interface GetFilmsListResponse {
  total: number,
  totalPages: number,
  items: FilmList,
}
