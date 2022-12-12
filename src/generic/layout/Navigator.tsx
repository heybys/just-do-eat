import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import './navigator.css';
import SideOptions from './SideOptions';
import { useAppSelector } from '../../store/hooks';

const Navigator = () => {
  const pos = useAppSelector((state) => state.navigator.position);

  return (
    <nav className="navigator" style={{ position: pos === 'fixed' ? 'fixed' : 'absolute' }}>
      <div className="inner">
        <Logo />
        <Menu />
        <SideOptions />
      </div>
    </nav>
  );
};

export default Navigator;
