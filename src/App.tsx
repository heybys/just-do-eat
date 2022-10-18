import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './generic/layout/Layout';
import ErrorPage from './generic/page/ErrorPage';
import Site from './page/Site';
import About from './page/About';
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import Register from './page/Register';
import { configuredStore } from './store/configured-store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      {
        path: '/main',
        element: <div>main</div>
      },
      {
        path: '/site',
        element: <Site />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const App = () => (
  <Provider store={configuredStore}>
    <RouterProvider router={router} />;
  </Provider>
);

export default App;
