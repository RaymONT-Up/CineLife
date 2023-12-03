import { StateSchema } from 'app/providers/StoreProvider';

export const getFilm = (state: StateSchema) => state.film.film;

export const getIsLoading = (state: StateSchema) => state.film.isLoading;
export const getError = (state: StateSchema) => state.film.error;
