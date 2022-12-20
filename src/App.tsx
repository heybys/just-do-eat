import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './generic/layout/Layout';
import ErrorPage from './generic/page/ErrorPage';
import Site from './page/Site';
import About from './page/About';
import Dashboard from './page/Dashboard';
import { store } from './store/store';
import { Provider } from 'react-redux';
import Login from './auth/page/Login';
import Register from './auth/page/Register';
import Main from './page/Main';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/site',
        element: <Site />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;
