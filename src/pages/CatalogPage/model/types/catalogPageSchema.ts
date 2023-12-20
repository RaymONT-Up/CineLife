import { CatalogList } from 'shared/api/kinopoisk/models';

export interface CatalogPageSchema {
  isLoading?: boolean,
  error?: string | undefined,
  //
  items: CatalogList,

  // pagination
  page: number,

  totalItems: number | null,
  totalPages: number | null,
}
