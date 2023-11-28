import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CatalogFilterAndSearchSchema } from 'features/CatalogFilterAndSearch';
import { CatalogPageSchema } from 'pages/CatalogPage';

export interface StateSchema {
  user: UserSchema;
  catalog: CatalogPageSchema;
  catalogFilter: CatalogFilterAndSearchSchema;
  auth?: AuthSchema;
}
