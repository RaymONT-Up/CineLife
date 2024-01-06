import { StateSchema } from 'app/providers/StoreProvider';

export const getProfile = (state: StateSchema) => state.profile;

export const getIsLoading = (state: StateSchema) => state.profile.isLoading;

export const getFavorites = (state: StateSchema) => state.profile.favorites;
