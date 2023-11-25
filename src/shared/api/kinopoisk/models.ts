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
