import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';
import { NotFound } from '../../../../pages/not-found';

import { AppRoute } from '../lib/routes';
import { ProjectsPage } from '../../../../pages/projects-page';

export const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path={AppRoute.Main}
        element={
          <MainPage />
        }
      />
      <Route
        path={AppRoute.Projects}
        element={
          <ProjectsPage />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </>
  )
);
