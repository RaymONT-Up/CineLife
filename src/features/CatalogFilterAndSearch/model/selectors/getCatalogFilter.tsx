import { StateSchema } from 'app/providers/StoreProvider';

export const getParams = (state:StateSchema) => state.catalogFilter;

export const getURLParamsIsInstalled = (state:StateSchema) => state.catalogFilter.URLParamsIsInstalled;

export const getGenresState = (state:StateSchema) => state.catalogFilter.genres;
export const getCountriesState = (state:StateSchema) => state.catalogFilter.countries;

export const getSortState = (state:StateSchema) => state.catalogFilter.order;
export const getTypeState = (state:StateSchema) => state.catalogFilter.type;
export const getKeywordState = (state:StateSchema) => state.catalogFilter.keyword;
