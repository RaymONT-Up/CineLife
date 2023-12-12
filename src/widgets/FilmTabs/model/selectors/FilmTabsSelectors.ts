import { StateSchema } from 'app/providers/StoreProvider';

export const getBudget = (state: StateSchema) => state.filmTabs.budget;
export const getImages = (state: StateSchema) => state.filmTabs.images;
export const getFacts = (state: StateSchema) => state.filmTabs.facts;
export const getTeam = (state: StateSchema) => state.filmTabs.team;

export const getIsLoading = (state: StateSchema) => state.filmTabs.isLoading;
