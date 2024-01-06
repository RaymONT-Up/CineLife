import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListGrid from 'shared/ui/ListGrid';
import { CatalogPreviewCard } from 'entities/CatalogPreviewCard';
import { FavoritesStatus } from 'features/favorites';
import fetchFavorites from 'pages/ProfilePage/model/services/fetchFavorites';
import Loader from 'shared/ui/Loader';
import Title, { TitleTheme } from 'shared/ui/Title';
import { getIsLoading } from 'widgets/FilmTabs/model/selectors/FilmTabsSelectors';
import { getFavorites } from '../../../model/selectors/ProfilePageSelectors';

interface FavoritesListProps {
  className?: string;
  status: FavoritesStatus;
}

const FavoritesList: FC<FavoritesListProps> = (props) => {
  const {
    className,
    status = FavoritesStatus.Favorite,
  } = props;
  const films = useSelector(getFavorites);
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchFavorites(status) as any);
  }, [status, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (films.length === 0 && !isLoading) {
    return (
      <Title
        theme={TitleTheme.subtitle}
        centered
      >
        Пусто
      </Title>
    );
  }

  return (
    <div>
      <ListGrid>
        {films.map((film) => (
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
    </div>
  );
};

export default FavoritesList;
