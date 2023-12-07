import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CatalogFilterAndSearchSchema } from 'features/CatalogFilterAndSearch';
import { CatalogPageSchema } from 'pages/CatalogPage';
import { FilmPageSchema } from 'pages/FilmPage';
import { FilmTabsSchema } from 'widgets/FilmTabs/model/types/FilmTabsSchema';

export interface StateSchema {
  user: UserSchema;
  catalog: CatalogPageSchema;
  catalogFilter: CatalogFilterAndSearchSchema;
  film: FilmPageSchema;
  filmTabs: FilmTabsSchema;
  auth?: AuthSchema;
}
