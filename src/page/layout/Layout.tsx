import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigator from './Navigator';

const Layout = () => {
  return (
    <div>
      <Navigator />
      <Outlet />
    </div>
  );
};

export default Layout;
