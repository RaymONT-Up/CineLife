import { UserCredential } from 'firebase/auth';

export interface User {
  uid: string;
  displayName: string;
  email: string;
  photo: string;
  userToken: string;
}

export interface UserSchema {
  authData?: User;
  isAuth: boolean;
}
