import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './page/layout/Layout';
import ErrorPage from './page/generic/ErrorPage';
import Site from './page/etc/Site';
import About from './page/etc/About';
import Dashboard from './page/etc/Dashboard';
import { persistor, store } from './store/store';
import { Provider } from 'react-redux';
import Login from './page/user/Login';
import Register from './page/user/Register';
import Main from './page/main/Main';
import { PersistGate } from 'redux-persist/integration/react';

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
    <PersistGate persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>
);

export default App;
