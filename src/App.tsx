import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { routerConfig } from './routerConfig';

function App() {
  return <RouterProvider router={createBrowserRouter(routerConfig)} />;
}

export default App;
