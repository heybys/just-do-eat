import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

const Layout = () => {
  return (
    <div>
      <Navigator />
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
