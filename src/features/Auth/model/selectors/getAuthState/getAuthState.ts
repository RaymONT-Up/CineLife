import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthState = (state: StateSchema) => state.auth;
