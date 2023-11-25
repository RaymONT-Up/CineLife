import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogItems = (state: StateSchema) => state.catalog.items;
