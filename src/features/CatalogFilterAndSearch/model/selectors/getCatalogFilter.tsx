import { StateSchema } from 'app/providers/StoreProvider';

export const getSortState = (state:StateSchema) => state.catalogFilter.order;
export const getTypeState = (state:StateSchema) => state.catalogFilter.type;
