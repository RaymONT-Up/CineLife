import { Person } from 'shared/api/kinopoisk/models';

export interface PersonPageSchema {
  isLoading: boolean;
  error: string | null;
  person: Person;
}
