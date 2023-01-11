import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './navigator.css';
import SideOptions from './SideOptions';

const Navigator = () => {
  return (
    <nav className="navigator">
      <div className="inner">
        <Logo />
        <Menu />
        <SideOptions />
      </div>
    </nav>
  );
};

export default Navigator;
