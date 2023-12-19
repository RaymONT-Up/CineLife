import { CatalogParams } from 'shared/api/kinopoisk/models';

export interface CatalogFilterAndSearchSchema extends Omit<CatalogParams, 'page'> {
  URLParamsIsInstalled: boolean;
}
