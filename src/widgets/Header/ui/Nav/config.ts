import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const navItems = [
  { text: 'Главная', path: RoutePath.main },
  { text: 'Фильмы', path: `${RoutePath.catalog}?type=FILM` },
  { text: 'Сериалы', path: `${RoutePath.catalog}?type=TV_SERIES` },
];
