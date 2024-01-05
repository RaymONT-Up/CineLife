import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MySelect, { findValueOption } from 'shared/ui/Select';
import classNames from 'shared/lib/classNames/classNames';
import { AuthModal } from 'features/Auth';
import { getIsAuth } from 'entities/User/model/selectors/getUserAuthData/getIsAuth';
import cls from './AddToFavorites.module.scss';
import { getFavoriteState } from '../model/selectors/FavoriteSelectors';
import setFavorite from '../model/services/setFavorite';
import { FavoritesStatus, FilmData } from '../model/types/favoriteTypes';
import checkIsFavorite from '../model/services/checkIsFavorite';
import { favoritesActions } from '../model/slice/FavoriteSlice';

interface AddToFavoriteProps {
  className?: string;
  filmData: Omit<FilmData, 'status'>;
}

const AddToFavorites: FC<AddToFavoriteProps> = (props) => {
  const { filmData, className } = props;
  const {
    id,
  } = filmData;
  const { isLoading, error, status } = useSelector(getFavoriteState);
  const dispatch = useDispatch();
  const isAuth = useSelector(getIsAuth);
  const [authModalIsOpen, setAuthModalIsOpen] = useState(false);

  useEffect(() => {
    dispatch(checkIsFavorite(id) as any);

    return () => {
      dispatch(favoritesActions.reset());
    };
  }, [dispatch, id, isAuth]);

  const options = Object.keys(FavoritesStatus).map((key) => ({
    value: FavoritesStatus[key as keyof typeof FavoritesStatus],
    label: FavoritesStatus[key as keyof typeof FavoritesStatus],
  }));

  const handleChange = (newStatus: FavoritesStatus | null) => {
    if (!isAuth) {
      setAuthModalIsOpen(true);
      return;
    }
    dispatch(setFavorite({
      filmData,
      newStatus,
      prevStatus: status,
    }) as any);
  };

  const selectValue = findValueOption(options, status, { value: '', label: 'Добавить в закладки' });

  return (
    <div
      className={classNames(cls.addToFavorite, {
        [cls.loading]: isLoading,
      }, [className])}
    >
      {/* !FIX - AuthModal global state */}
      {!isAuth
      && (
      <AuthModal
        onClose={() => setAuthModalIsOpen(false)}
        isOpen={authModalIsOpen}
      />
      )}

      <MySelect
        className={cls.addToFavoriteSelect}
        name="Добавить в закладки"
        options={options}
        value={selectValue}
        onChange={(newStatus) => handleChange(newStatus as FavoritesStatus | null)}
      />
      {error && <span className={cls.error}>{error}</span>}
    </div>
  );
};

export default AddToFavorites;
