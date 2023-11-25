import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

export interface loginByEmailAndPasswordProps {
  email: string;
  password: string;
}

const loginByEmailAndPassword = createAsyncThunk(
  'auth/loginByEmailAndPassword',
  async (authData: loginByEmailAndPasswordProps, thunkAPI) => {
    const auth = getAuth();
    const { email, password } = authData;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = userCredential.user.refreshToken;

      const user: User = {
        uid: userCredential.user.uid,
        displayName: userCredential.user.displayName,
        email: userCredential.user.email,
        photo: userCredential.user.photoURL,
        userToken: idToken,
      };

      thunkAPI.dispatch(userActions.setAuthData(user));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(idToken));

      return user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
export default loginByEmailAndPassword;
