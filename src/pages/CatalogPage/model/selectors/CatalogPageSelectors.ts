import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalog = (state: StateSchema) => state.catalog;
export const getCatalogState = (state:StateSchema) => state.catalog;
export const getCatalogPage = (state:StateSchema) => state.catalog.page;
export const getCatalogTotalPages = (state:StateSchema) => state.catalog.totalPages;

export const getCatalogError = (state:StateSchema) => state.catalog.error;
export const getCatalogIsLoading = (state:StateSchema) => state.catalog.isLoading;
export const getCatalogItems = (state: StateSchema) => state.catalog.items;
