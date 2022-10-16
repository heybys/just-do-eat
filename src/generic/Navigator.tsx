import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './components/Logo';
import Menu from './components/Menu';

const Navigator = () => {
  return (
    <nav
      className="navigator"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 32px'
      }}
    >
      <Logo />
      <Menu />
      <div className="buttons">
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
