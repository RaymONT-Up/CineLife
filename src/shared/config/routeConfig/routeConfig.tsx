/* eslint-disable no-unused-vars */
import { AboutPage } from 'pages/AboutPage';
import { CatalogPage } from 'pages/CatalogPage';
import { MainPage } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  CATALOG = 'catalog',
  ABOUT = 'about',
  PROFILE = 'profile',

  NOT_FOUND_PAGE = 'notFoundPage'
}

// использовать для навигации.
// пример <Link to={RoutePath.main}>Main</Link>
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',

  [AppRoutes.CATALOG]: '/catalog',

  [AppRoutes.ABOUT]: '/about',

  [AppRoutes.PROFILE]: '/profile',

  [AppRoutes.NOT_FOUND_PAGE]: '/*',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },

  [AppRoutes.CATALOG]: {
    path: RoutePath.catalog,
    element: <CatalogPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },

  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },

  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.notFoundPage,
    element: <NotFoundPage />,
  },
};
