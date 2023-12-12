import {
  FilmBudget, FilmFacts, FilmImages, FilmTeam,
} from 'shared/api/kinopoisk/models';

type WithDataReceivedAndError<T> = T & {
  dataReceived: boolean;
  error?: null | string;
 };

interface TeamData {
  items: FilmTeam;
}

export interface FilmTabsSchema {
  isLoading: boolean;

  images?: WithDataReceivedAndError<FilmImages>;
  budget?: WithDataReceivedAndError<FilmBudget>;
  facts?: WithDataReceivedAndError<FilmFacts>;
  team?: WithDataReceivedAndError<TeamData>;
}
