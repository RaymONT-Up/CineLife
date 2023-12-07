import { FilmBudgetResponse } from 'shared/api/kinopoisk/models';

export interface FilmTabsSchema {
  isLoading: boolean;
  error: string | null;
  description: string;
  images?: [];
  videos?: [];
  budget?: FilmBudgetResponse;
  facts?: [];
}
