/* eslint-disable no-unused-vars */
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import NotFoundPage from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND_PAGE = 'notFoundPage'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',

  [AppRoutes.NOT_FOUND_PAGE]: '/*',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND_PAGE]: {
    path: RoutePath.notFoundPage,
    element: <NotFoundPage />,
  },
};
