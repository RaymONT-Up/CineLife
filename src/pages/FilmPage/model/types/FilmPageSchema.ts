import { Film } from 'shared/api/kinopoisk/models';

export interface FilmPageSchema extends Film{
  isLoading: boolean;
  error: string | null;
}
