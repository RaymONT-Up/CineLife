import { createAsyncThunk } from '@reduxjs/toolkit';
import { FavoriteFilmData, FavoritesStatus } from 'features/favorites';
import { getAuth } from 'firebase/auth';
import {
  collection, getDocs, getFirestore, query, where,
} from 'firebase/firestore';

const fetchFavorites = createAsyncThunk(
  'profile/fetchFavorites',
  async (status: FavoritesStatus, thunkAPI) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const firestore = getFirestore();
      const favoritesCollectionRef = collection(firestore, `users/${user.uid}/favorites`);

      // Создаем запрос с условием where для фильтрации по статусу
      // /users/uuid/favorites/film. у фильма есть status по типу любимое в планах и т.д. и мы получаем фильмы по статусу.
      const q = query(favoritesCollectionRef, where('status', '==', status));

      try {
        const querySnapshot = await getDocs(q);
        const filmsData: FavoriteFilmData[] = [];

        querySnapshot.forEach((doc) => {
          filmsData.push(doc.data() as FavoriteFilmData);
        });
        return filmsData;
      } catch (error) {
        return error.message;
      }
    }

    return [];
  },
);
export default fetchFavorites;
