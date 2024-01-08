import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore, collection, doc, setDoc,
} from 'firebase/firestore';

export interface registerByEmailAndPasswordProps {
  email: string;
  password: string;
}

const registerByEmailAndPassword = createAsyncThunk(
  'auth/registerByEmailAndPassword',
  async (registrationData: registerByEmailAndPasswordProps, thunkAPI) => {
    const auth = getAuth();
    const firestore = getFirestore();

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

      const usersCollection = collection(firestore, 'users');
      const userDocRef = doc(usersCollection, user.uid);
      // после используяется для добавления/получения/удаления данных о избранных фильмах etc
      await setDoc(userDocRef, {
        uid: user.uid,
      });

      return user;
    } catch (error) {
      let errorMessage = 'Ошибка регистрации. Пожалуйста, проверьте введенные данные и попробуйте снова.';

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Пользователь с таким email уже существует.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Неверный формат email.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Регистрация отключена. Обратитесь к администратору.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Пароль слишком слабый. Попробуйте использовать более надежный пароль.';
          break;
        default:
          break;
      }

      return thunkAPI.rejectWithValue(errorMessage);
    }
  },
);

export default registerByEmailAndPassword;
