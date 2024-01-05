import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuth } from 'firebase/auth';
import {
  collection, doc, getDoc, getFirestore,
} from 'firebase/firestore';

const checkIsFavorite = createAsyncThunk(
  'favorite/checkIsFavorite',
  async (id: number, thunkAPI) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const firestore = getFirestore();
      const userDocRef = doc(collection(firestore, 'users'), user.uid);
      const filmsCollectionRef = collection(userDocRef, 'favorites');

      try {
        const filmDoc = await getDoc(doc(filmsCollectionRef, id.toString()));
        // Если фильм есть в закладках, возвращаем статус, иначе возвращаем null
        return filmDoc.exists() ? filmDoc.data().status : null;
      } catch (error) {
        // В случае ошибки также возвращаем null
        return null;
      }
    }

    // Возвращаем null, если пользователь не авторизован
    return null;
  },
);

export default checkIsFavorite;
