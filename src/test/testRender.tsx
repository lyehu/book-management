import { ThemeProvider } from '@mui/material';
import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { BookProvider } from '../app/books/service/BooksContext';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import BookDetail from '../pages/BookDetail';

const getRouter = (Component: ReactNode) =>
  createMemoryRouter([
    {
      path: '/',
      element: <BookProvider>{Component}</BookProvider>,
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
