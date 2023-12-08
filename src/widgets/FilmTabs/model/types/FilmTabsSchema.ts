import { FilmBudgetResponse } from 'shared/api/kinopoisk/models';

export interface FilmTabsSchema {
  isLoading: boolean;
  error: string | null;
  images?: [];
  videos?: [];
  budget?: FilmBudgetResponse;
  facts?: [];
}
