import './App.css';
import MainPage from './pages/Main';
import BooksContext from './context/BooksContext';
import { findBooks } from './app/application/api/findBooks';
import BookDetail from './pages/BookDetail';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <BooksContext.Provider value={{ findBooks }}>
        <MainPage />
      </BooksContext.Provider>
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
