import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './generic/Layout';
import ErrorPage from './generic/ErrorPage';
import Main from './page/Main';
import About from './page/About';
import Dashboard from './page/Dashboard';
import Login from './page/Login';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
