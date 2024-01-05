import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { authReducer } from 'features/Auth/model/slice/authSlice';
import { catalogReducer } from 'pages/CatalogPage';
import { CatalogFilterAndSearchReducer } from 'features/CatalogFilterAndSearch';
import { FilmReducer } from 'pages/FilmPage';
import { FilmTabsReducer } from 'widgets/FilmTabs/model/slice/FilmTabsSlice';
import { PersonReducer } from 'pages/PersonPage/model/slice/PersonPageSlice';
import { favoritesReducer } from 'features/favorites/model/slice/FavoriteSlice';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
    catalog: catalogReducer,
    catalogFilter: CatalogFilterAndSearchReducer,
    film: FilmReducer,
    filmTabs: FilmTabsReducer,
    auth: authReducer,
    person: PersonReducer,
    favorites: favoritesReducer,
  };
  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__, // __IS_DEV__ global env webpack var -> look plugins
    preloadedState: initialState,
  });
}

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
