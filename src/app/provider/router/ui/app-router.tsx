import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { MainPage } from '../../../../pages/main-page';
import { NotFound } from '../../../../pages/not-found';
import { ProjectsPage } from '../../../../pages/projects-page';
import { TasksPage } from '../../../../pages/tasks-page';

import { AppRoute } from '../lib/routes';

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
        path={AppRoute.Tasks}
        element={
          <TasksPage />
        }
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </>
  )
);
