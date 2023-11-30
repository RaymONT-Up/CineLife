import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogState = (state:StateSchema) => state.catalog;

export const getCatalogIsLoading = (state:StateSchema) => state.catalog.isLoading;
export const getCatalogItems = (state: StateSchema) => state.catalog.items;
