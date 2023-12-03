import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CatalogFilterAndSearchSchema } from 'features/CatalogFilterAndSearch';
import { CatalogPageSchema } from 'pages/CatalogPage';
import { FilmPageSchema } from 'pages/FilmPage';

export interface StateSchema {
  user: UserSchema;
  catalog: CatalogPageSchema;
  catalogFilter: CatalogFilterAndSearchSchema;
  film: FilmPageSchema;
  auth?: AuthSchema;
}
