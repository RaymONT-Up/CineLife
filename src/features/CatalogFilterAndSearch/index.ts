import { getParams } from './model/selectors/getCatalogFilter';
import { CatalogFilterAndSearchSchema } from './model/types/CatalogFilterAndSearchSchema';
import CatalogFilterAndSearch from './ui/CatalogFilterAndSearch';

import { CatalogFilterAndSearchActions, CatalogFilterAndSearchReducer } from './model/slice/CatalogFilterAndSearchSlice';

export {
  CatalogFilterAndSearchActions,
  CatalogFilterAndSearchSchema,
  CatalogFilterAndSearchReducer,
  getParams as getCatalogFilterParams,
};
export default CatalogFilterAndSearch;
