import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Layout } from 'components';

/**
 * Defines the various routes for the web app, determining the page to render and the data to load for each route
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" />
    </Route>,
  ),
);
