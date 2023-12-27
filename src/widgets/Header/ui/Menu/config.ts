import { catalogURLParams } from 'features/CatalogFilterAndSearch/model/types/urlParams';
import { catalogTypeTypes } from 'shared/api/kinopoisk/models';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

export const menuLinks = [
  { text: 'Главная', to: '/' },
  { text: 'Каталог', to: `/${AppRoutes.CATALOG}` },

  { text: 'Фильмы', to: `/${AppRoutes.CATALOG}?${catalogURLParams.type}=${catalogTypeTypes.FILM}` },

  { text: 'Сериалы', to: `/${AppRoutes.CATALOG}?${catalogURLParams.type}=${catalogTypeTypes.TV_SERIES}` },
];
