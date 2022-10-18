import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Menu from './Menu';
import './navigator.css';

const Navigator = () => {
  return (
    <nav className="navigator">
      <Logo />
      <Menu />
      <div className="buttons" style={{ display: 'flex' }}>
        <Link to="/login" style={{ padding: 16 }}>
          Login
        </Link>
        <Link to="/register" style={{ padding: 16 }}>
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navigator;
