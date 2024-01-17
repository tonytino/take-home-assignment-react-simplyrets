import * as reactRouter from 'react-router';
import { RouterProvider } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { router } from 'pages';
import { Layout } from './Layout';

describe('<Layout />', () => {
  describe('features', () => {
    describe('when the page name is known', () => {
      beforeEach(() => {
        reactRouter.useLocation = jest.fn(() => ({
          pathname: '/property-listings',
        }));
      });

      test('the header is rendered with the page name', () => {
        render(
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>,
        );

        expect(screen.getByText('Property Listings')).toBeInTheDocument();
      });

      test('the document title is updated with the page name', async () => {
        render(
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>,
        );

        await waitFor(() =>
          expect(document.title).toEqual('Property Listings'),
        );
      });
    });

    describe('when the page name is missing', () => {
      beforeEach(() => {
        reactRouter.useLocation = jest.fn(() => ({
          pathname: '/missing',
        }));
      });

      test('the header is rendered with the fallback page name', () => {
        render(
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>,
        );

        expect(screen.getByText('Side')).toBeInTheDocument();
      });

      test('the document title is updated with the fallback page name', async () => {
        render(
          <RouterProvider router={router}>
            <Layout />
          </RouterProvider>,
        );

        await waitFor(() => expect(document.title).toEqual('Side'));
      });
    });
  });
});
