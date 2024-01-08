import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { FirebaseError } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

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

      return user;
    } catch (error) {
      let errorMessage = 'Ошибка входа. Пожалуйста, проверьте веденные данные и попробуйте снова.';
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Пользователь с таким email не найден.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Неверный пароль.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Неверный формат email.';
          break;
        case 'auth/invalid-login-credentials':
          errorMessage = 'Неверный логин или пароль.';
          break;
        default:
          break;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export default loginByEmailAndPassword;
