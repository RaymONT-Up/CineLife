import { FilmBudget, FilmImages } from 'shared/api/kinopoisk/models';

export interface FilmTabsSchema {
  isLoading: boolean;
  error: string | null;
  images?: FilmImages;
  videos?: [];
  budget?: FilmBudget;
  facts?: [];
}
