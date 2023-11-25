import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';
import { CatalogPageSchema } from 'pages/CatalogPage';

export interface StateSchema {
  user: UserSchema;
  catalog: CatalogPageSchema;
  auth?: AuthSchema;
}
