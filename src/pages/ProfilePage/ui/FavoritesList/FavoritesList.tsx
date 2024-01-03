import { FC, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import ListGrid from 'shared/ui/ListGrid';
import { CatalogPreviewCard } from 'entities/CatalogPreviewCard';
import { CatalogItem } from 'shared/api/kinopoisk/models';

interface FavoritesListProps {
  className?: string;
}

const FavoritesList: FC<FavoritesListProps> = (props) => {
  const { className } = props;
  const isAuth = useSelector(getIsAuth);
  const [favoriteFilms, setFavoriteFilms] = useState([]);

  useEffect(() => {
    const fetchFavoriteFilms = async () => {
      if (isAuth) {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const firestore = getFirestore();
          const favoritesCollectionRef = collection(firestore, `users/${user.uid}/favorites`);

          try {
            const querySnapshot = await getDocs(favoritesCollectionRef);
            const filmsData: any = [];

            querySnapshot.forEach((doc) => {
              filmsData.push(doc.data());
            });

            setFavoriteFilms(filmsData as CatalogItem[]);
          } catch (error) {
            console.error('Ошибка при получении избранных фильмов:', error.message);
          }
        }
      }
    };

    fetchFavoriteFilms();
  }, [isAuth]);

  return (
    <ListGrid>
      {favoriteFilms.map((film) => (
        <CatalogPreviewCard
          key={film.id}
          nameRu={film.name}
          posterUrl={film.posterUrl}
          year={film.year}
          ratingKinopoisk={film.rating}
          posterUrlPreview={film.posterUrl}
          kinopoiskId={film.id}
          genres={[]}
          countries={[]}
        />
      ))}
    </ListGrid>
  );
};

export default FavoritesList;
