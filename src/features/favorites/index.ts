import { favoritesSlice } from './model/slice/FavoriteSlice';
import { FavoritesSchema, FavoritesStatus, FilmData } from './model/types/favoriteTypes';
import AddToFavorites from './ui/AddToFavorites';

export {
  FavoritesSchema,
  favoritesSlice,
  FavoritesStatus,
  FilmData as FavoriteFilmData,
};
export default AddToFavorites;
