export enum FavoritesStatus {
  Favorite = 'Любимое',
  InThePlans = 'В планах',
  ImWatching = 'Смотрю',
  Viewed = 'Просмотрено',
  Abandoned = 'Брошено',
}

export interface FavoritesSchema{
  status: FavoritesStatus | null;
  isLoading: boolean;
  error: string | undefined;
}

export interface FilmData {
  id: number;
  name: string;
  year: number;
  posterUrl: string;
  rating: number;
  status?: FavoritesStatus;
}
