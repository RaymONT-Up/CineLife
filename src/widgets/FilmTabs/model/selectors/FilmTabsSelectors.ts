import { StateSchema } from 'app/providers/StoreProvider';

export const getBudget = (state: StateSchema) => state.filmTabs.budget;
export const getIsLoading = (state: StateSchema) => state.filmTabs.isLoading;
