import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CatalogFilterAndSearchSchema } from 'features/CatalogFilterAndSearch';
import { FavoritesSchema } from 'features/favorites';
import { CatalogPageSchema } from 'pages/CatalogPage';
import { FilmPageSchema } from 'pages/FilmPage';
import { PersonPageSchema } from 'pages/PersonPage/model/types/PersonPageSchema';
import { ProfilePageSchema } from 'pages/ProfilePage';
import { FilmTabsSchema } from 'widgets/FilmTabs/model/types/FilmTabsSchema';

export interface StateSchema {
  catalog: CatalogPageSchema;
  catalogFilter: CatalogFilterAndSearchSchema;
  film: FilmPageSchema;
  filmTabs: FilmTabsSchema;
  person: PersonPageSchema;
  auth?: AuthSchema;
  favorites?: FavoritesSchema;
  profile?: ProfilePageSchema;
  user?: UserSchema;
  // !?FIX - profile and user;
}
