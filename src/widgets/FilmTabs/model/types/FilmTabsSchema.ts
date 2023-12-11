import { FilmBudget, FilmFacts, FilmImages } from 'shared/api/kinopoisk/models';

type WithDataReceivedAndError<T> = T & {
  dataReceived: boolean;
  error?: null | string;
 };

export interface FilmTabsSchema {
  isLoading: boolean;

  images?: WithDataReceivedAndError<FilmImages>;
  budget?: WithDataReceivedAndError<FilmBudget>;
  facts?: WithDataReceivedAndError<FilmFacts>;
}
