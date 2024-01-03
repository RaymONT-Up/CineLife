import { FC, useEffect, useState } from 'react';
import classNames from 'shared/lib/classNames/classNames';
import Button from 'shared/ui/Button';
import { getAuth } from 'firebase/auth';
import {
  getFirestore, doc, getDoc, collection, setDoc, deleteDoc,
} from 'firebase/firestore';
import cls from './FavoriteButton.module.scss';

interface Data {
  id: number;
  name: string;
  year: number | string;
  posterUrl: string;
  rating: number;
}

interface FavoriteButtonProps {
  className?: string;
  data: Data;
  onToggleFavorite?: (isFavorited: boolean) => void; // Функция для реакции на изменение статуса избранного
}

const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
  const { className, data, onToggleFavorite } = props;
  const {
    id, name, year, posterUrl, rating,
  } = data;

  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    console.log('fav useEffect');
    // Проверяем, добавлен ли фильм в избранное, если пользователь залогинен
    const checkIfFavorited = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const firestore = getFirestore();
        const userDocRef = doc(collection(firestore, 'users'), user.uid);
        const filmsCollectionRef = collection(userDocRef, 'favorites');

        try {
          const filmDoc = await getDoc(doc(filmsCollectionRef, id.toString()));
          setIsFavorited(filmDoc.exists());
        } catch (error) {
          console.error('Ошибка при проверке добавления в избранное:', error.message);
        }
      }
    };

    checkIfFavorited();
  }, [id]);

  const handleToggleFavorite = async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    console.log('fav toggle');

    if (user) {
      const firestore = getFirestore();
      const userDocRef = doc(firestore, 'users', user.uid);
      const favoritesCollection = collection(userDocRef, 'favorites');
      const filmData = {
        id,
        name,
        year,
        posterUrl,
        rating,
      };

      try {
        if (isFavorited) {
          // Если фильм уже в избранном, удаляем его
          await deleteDoc(doc(favoritesCollection, id.toString()));
        } else {
          // Если фильма нет в избранном, добавляем его
          await setDoc(doc(favoritesCollection, id.toString()), filmData);
        }

        setIsFavorited(!isFavorited);
      } catch (error) {
        console.error('Ошибка при обновлении избранного:', error.message);
      }
    } else {
      // Пользователь не залогинен, откройте AuthModal или предпримите другие действия
    }
  };

  return (
    <Button
      className={classNames(cls.FavoriteButton, { [cls.favorited]: isFavorited }, [className])}
      onClick={handleToggleFavorite}
    >
      {isFavorited ? 'Добавлено в избранное' : 'Добавить в избранное'}
    </Button>
  );
};

export default FavoriteButton;
