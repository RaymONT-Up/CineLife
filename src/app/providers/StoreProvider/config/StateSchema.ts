import { UserSchema } from 'entities/User';
import { AuthSchema } from 'features/Auth';

export interface StateSchema {
  user: UserSchema;
  auth?: AuthSchema;
}
