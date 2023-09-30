import './App.css';
import MainPage from './pages/Main';
import { BookProvider } from './app/books/service/BooksContext';
import BookDetail from './pages/BookDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
