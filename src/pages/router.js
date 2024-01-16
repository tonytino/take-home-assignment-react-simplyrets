import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { ErrorPage, HomePage, homePageLoader } from 'pages';
import { Layout } from 'components';

/**
 * Defines the various routes for the web app, determining the page to render and the data to load for each route
 */
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/">
        <Route element={<HomePage />} index loader={homePageLoader} />
      </Route>
    </Route>,
  ),
);
