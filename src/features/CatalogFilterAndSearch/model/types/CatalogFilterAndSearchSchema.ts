import { CatalogParams } from 'shared/api/kinopoisk/models';

export interface CatalogFilterAndSearchSchema extends CatalogParams{
  URLParamsIsInstalled: boolean;
}
