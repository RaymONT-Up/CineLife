import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage';

export interface registerByEmailAndPasswordProps {
  email: string;
  password: string;
}

const registerByEmailAndPassword = createAsyncThunk(
  'auth/registerByEmailAndPassword',
  async (registrationData: registerByEmailAndPasswordProps, thunkAPI) => {
    const auth = getAuth();
    const { email, password } = registrationData;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
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
export default registerByEmailAndPassword;
