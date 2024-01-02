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
    const firestore = getFirestore(); // Инициализация Firestore

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
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export default registerByEmailAndPassword;
