import { FilmData } from 'features/favorites/model/types/favoriteTypes';

export interface ProfilePageSchema {
  isLoading: boolean;
  error: string | undefined;
  favorites?: FilmData[];
  recent?: FilmData[];
}
