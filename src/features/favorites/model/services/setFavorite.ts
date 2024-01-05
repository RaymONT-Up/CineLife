// setFavorite
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Auth, getAuth } from 'firebase/auth';
import {
  collection, deleteDoc, doc, getDoc, getFirestore, setDoc,
} from 'firebase/firestore';
import { FavoritesStatus, FilmData } from '../types/favoriteTypes';

interface setFavoriteProps {
  filmData: FilmData;
  newStatus: FavoritesStatus | null;
  prevStatus: FavoritesStatus | null;
}

const setFavorite = createAsyncThunk<FavoritesStatus | null, setFavoriteProps>(
  'favorite/setFavorite',
  async (data, thunkAPI) => {
    const {
      filmData, newStatus, prevStatus,
    } = data;

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'users', user.uid);
      const favoritesCollection = collection(userDocRef, 'favorites');
      // Если новое состояние === старому, то мы удаляем фильм из избранного в обратном случае меняем состояние
      // example: пользовтель добавил фильм в любимое и после еще раз нажал любимое
      const status = newStatus === prevStatus ? null : newStatus;

      const filmDataToUpdate = {
        ...filmData,
        status: newStatus,
      };

      try {
        if (status === null) {
          // Если фильм уже в избранном, удаляем его
          await deleteDoc(doc(favoritesCollection, filmData?.id?.toString()));
          return null;
        // eslint-disable-next-line no-else-return
        } else {
          // Если фильма нет в избранном или изменен статус, добавляем или обновляем его
          await setDoc(doc(favoritesCollection, filmData?.id?.toString()), filmDataToUpdate);
          return newStatus;
        }
      } catch (error) {
        return null;
      }
    }

    return null;
  },
);

export default setFavorite;
