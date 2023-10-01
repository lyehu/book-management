import { BookProvider } from './app/books/service/BooksContext';
import MainPage from './pages/Main';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';

export const routerConfig = [
  {
    path: '/',
    element: (
      <BookProvider>
        <MainPage />
      </BookProvider>
    ),
  },
  {
    path: '/books/:id',
    element: <BookDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
