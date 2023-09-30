import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import BooksContext from '../context/BooksContext';
import { booksFixture } from './fixtures';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import BookDetail from '../pages/BookDetail';

const getRouter = (Component: ReactNode) =>
  createMemoryRouter([
    {
      path: '/',
      element: (
        <BooksContext.Provider
          value={{
            findBooks: () => {
              return Promise.resolve({
                data: booksFixture,
                error: undefined,
              });
            },
          }}
        >
          {Component}
        </BooksContext.Provider>
      ),
    },
    {
      path: '/books/:id',
      element: <BookDetail />,
    },
  ]);

const testRender = ({ Component }: { Component: ReactNode }) => {
  const router = getRouter(Component);

  return render(
    <ThemeProvider theme={{}}>
      <RouterProvider router={router} />
    </ThemeProvider>,
  );
};

export default testRender;
