import { Film } from 'shared/api/kinopoisk/models';

export interface FilmPageSchema {
  isLoading: boolean;
  error: string | null;
  film: Film;
}
