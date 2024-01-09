export interface User {
  uid: string | null;
  displayName: string | null;
  email: string | null;
  photo: string | null;
  userToken: string | null;
}

export interface UserSchema {
  authData?: User;
  isAuth: boolean;
}
