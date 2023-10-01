import { BookProvider } from './app/books/service/BooksContext';
import MainPage from './pages/Main';
import BookDetail from './pages/BookDetail';
import NotFound from './pages/NotFound';
import NewBook from './pages/NewBook';

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
    path: '/new-book',
    element: <NewBook />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
