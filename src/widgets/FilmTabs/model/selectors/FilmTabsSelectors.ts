import { StateSchema } from 'app/providers/StoreProvider';

export const getBudgetItems = (state: StateSchema) => state.filmTabs.budget.items;
export const getImagesItems = (state: StateSchema) => state.filmTabs.images.items;
export const getFactsItems = (state: StateSchema) => state.filmTabs.facts.items;

export const getIsLoading = (state: StateSchema) => state.filmTabs.isLoading;
