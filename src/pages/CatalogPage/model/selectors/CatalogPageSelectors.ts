import { StateSchema } from 'app/providers/StoreProvider';

export const getCatalogState = (state:StateSchema) => state.catalog;
export const getLoadMore = (state:StateSchema) => state.catalog.loadMore;
export const getCatalogPage = (state:StateSchema) => state.catalog.page;
export const getCatalogTotalPages = (state:StateSchema) => state.catalog.totalPages;

export const getCatalogError = (state:StateSchema) => state.catalog.error;
export const getCatalogIsLoading = (state:StateSchema) => state.catalog.isLoading;
export const getCatalogItems = (state: StateSchema) => state.catalog.items;
