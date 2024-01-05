import { StateSchema } from 'app/providers/StoreProvider';

export const getFavoriteState = (state: StateSchema) => state.favorites;
